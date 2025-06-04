export declare enum ListingStatus {
    AVAILABLE = "AVAILABLE",
    OCCUPIED = "OCCUPIED",
    OFF_MARKET = "OFF_MARKET",
    SOLD = "SOLD"
}
export declare enum ListingFor {
    RENT = "RENT",
    BUY = "BUY",
    SELL = "SELL"
}
declare class ListedByDto {
    name: string;
    email: string;
    companyName?: string;
}
declare class PropertyImageDto {
    url: string;
    label: string;
}
export declare class CreateListingDto {
    title: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    description: string;
    listedBy: ListedByDto;
    thumbNailUrl: string;
    propertyImages?: PropertyImageDto[];
    wishlisted: boolean;
    rent: number;
    deposit: number;
    type: string;
    laundry?: string;
    cooling?: string;
    heating?: string;
    bedrooms?: string;
    baths?: string;
    yearBuilt: number;
    size: number;
    parking?: string;
    status: ListingStatus;
    listingFor: ListingFor;
}
export {};
