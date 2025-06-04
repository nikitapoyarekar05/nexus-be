import { ListingsService } from './listing.service';
import { CreateListingDto } from './create-listing.dto';
import { Listing } from './listing.entity';
export declare class ListingsController {
    private readonly service;
    constructor(service: ListingsService);
    create(body: CreateListingDto): Promise<Listing>;
    findAll(): Promise<{
        totalCount: number;
        listings: Listing[];
    }>;
    searchListings(query: string): Promise<Listing[]>;
    getWishlistedListings(): Promise<{
        count: number;
        listings: Listing[];
    }>;
    findOne(id: string): Promise<Listing | null>;
    updateWishlist(id: string, wishlisted: boolean): Promise<Listing>;
}
