import { ListingsService } from './listing.service';
import { CreateListingDto } from './create-listing.dto';
export declare class ListingsController {
    private readonly service;
    constructor(service: ListingsService);
    create(body: CreateListingDto): Promise<import("./listing.entity").Listing>;
    findAll(): Promise<{
        totalCount: number;
        listings: import("./listing.entity").Listing[];
    }>;
    searchListings(query: string, wishlistedOnly?: boolean): Promise<{
        totalCount: number;
        listings: import("./listing.entity").Listing[];
    }>;
    getWishlistedListings(): Promise<{
        count: number;
        listings: import("./listing.entity").Listing[];
    }>;
    findOne(id: string): Promise<import("./listing.entity").Listing | null>;
    updateWishlist(id: string, wishlisted: boolean): Promise<import("./listing.entity").Listing>;
}
