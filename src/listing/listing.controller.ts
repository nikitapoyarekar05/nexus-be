/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  BadRequestException,
  ParseBoolPipe,
} from '@nestjs/common';

import { ListingsService } from './listing.service';
import { CreateListingDto } from './create-listing.dto';

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
    async searchListings(
      @Query('query') query: string,
      @Query('wishlistedOnly', new ParseBoolPipe({ optional: true })) 
      wishlistedOnly?: boolean,
    ) {
      if (!query?.trim()) {
      throw new BadRequestException('Search query is required');
    }
    const listings = await this.service.search(query.trim(), wishlistedOnly);
    return {
      totalCount: listings.length,
      listings,
    };
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
