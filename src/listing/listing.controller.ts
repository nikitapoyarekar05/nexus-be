import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';

import { ListingsService } from './listing.service';
import { CreateListingDto } from './create-listing.dto';
import { Listing } from './listing.entity';

@Controller('listings')
export class ListingsController {
  constructor(private readonly service: ListingsService) {}

  @Post()
  create(@Body() body: CreateListingDto) {
    return this.service.create(body);
  }

  @Get()
  async findAll() {
    const listings = await this.service.findAll();
    return {
      totalCount: listings.length,
      listings,
    };
  }

  @Get('search')
  searchListings(@Query('query') query: string): Promise<Listing[]> {
    if (!query?.trim()) {
      throw new BadRequestException('Search query is required');
    }
    return this.service.search(query.trim());
  }

  @Get('wishlist')
  async getWishlistedListings() {
    const [listings, count] = await this.service.getWishlistedListings();
    return {
      count,
      listings,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id/wishlist')
  updateWishlist(
    @Param('id') id: string,
    @Body('wishlisted') wishlisted: boolean,
  ) {
    return this.service.updateWishlist(+id, wishlisted);
  }
}
