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
export interface ListedBy {
    name: string;
    email: string;
    companyName?: string;
}
export interface PropertyImage {
    url: string;
    label: string;
}
export declare class Listing {
    id: number;
    title: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    description: string;
    listedBy: {
        name: string;
        email: string;
        companyName?: string;
    };
    thumbNailUrl: string;
    propertyImages?: Array<{
        url: string;
        label: string;
    }>;
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
