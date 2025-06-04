import { Repository } from 'typeorm';
import { Listing } from './listing.entity';
import { CreateListingDto } from './create-listing.dto';
export declare class ListingsService {
    private repo;
    constructor(repo: Repository<Listing>);
    create(data: CreateListingDto): Promise<Listing>;
    findAll(): Promise<Listing[]>;
    findOne(id: number): Promise<Listing | null>;
    search(query: string): Promise<Listing[]>;
    updateWishlist(id: number, wishlisted: boolean): Promise<Listing>;
    getWishlistedListings(): Promise<[Listing[], number]>;
}
