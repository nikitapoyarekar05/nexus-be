import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Listing, ListingFor } from './listing.entity';
import { CreateListingDto } from './create-listing.dto';

@Injectable()
export class ListingsService {
  constructor(@InjectRepository(Listing) private repo: Repository<Listing>) {}

  async create(data: CreateListingDto) {
    const listing = this.repo.create({
      ...data,
      listingFor: data.listingFor ?? ListingFor.RENT,
      listedBy: {
        name: data.listedBy.name,
        email: data.listedBy.email,
        companyName: data.listedBy.companyName || undefined,
      },
      wishlisted: data.wishlisted ?? false,
    });

    return this.repo.save(listing);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async search(query: string): Promise<Listing[]> {
    const listings: Listing[] = await this.repo.find({
      where: [
        { title: ILike(`%${query}%`) },
        { description: ILike(`%${query}%`) },
        { addressLine1: ILike(`%${query}%`) },
        { city: ILike(`%${query}%`) },
        { state: ILike(`%${query}%`) },
        { country: ILike(`%${query}%`) },
      ],
    });
    return listings;
  }

  async updateWishlist(id: number, wishlisted: boolean) {
    const listing = await this.repo.findOneBy({ id });
    if (!listing) {
      throw new NotFoundException(`Listing with id ${id} not found`);
    }
    listing.wishlisted = wishlisted;
    return this.repo.save(listing);
  }

  async getWishlistedListings(): Promise<[Listing[], number]> {
    const listings = await this.repo.find({
      where: { wishlisted: true },
    });
    return [listings, listings.length];
  }
}
