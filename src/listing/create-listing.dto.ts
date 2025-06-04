/* eslint-disable @typescript-eslint/no-unsafe-call */

import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsEnum,
  ValidateNested,
  MaxLength,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum ListingStatus {
  AVAILABLE = 'AVAILABLE',
  OCCUPIED = 'OCCUPIED',
  OFF_MARKET = 'OFF_MARKET',
  SOLD = 'SOLD',
}

export enum ListingFor {
  RENT = 'RENT',
  BUY = 'BUY',
  SELL = 'SELL',
}

class ListedByDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  companyName?: string;
}

class PropertyImageDto {
  @IsString()
  url: string;

  @IsString()
  label: string;
}

export class CreateListingDto {
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  addressLine1: string;

  @IsOptional()
  @IsString()
  addressLine2?: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  zipcode: string;

  @IsString()
  description: string;

  @ValidateNested()
  @Type(() => ListedByDto)
  listedBy: ListedByDto;

  @IsString()
  thumbNailUrl: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyImageDto)
  propertyImages?: PropertyImageDto[];

  @IsBoolean()
  wishlisted: boolean;

  @IsNumber()
  rent: number;

  @IsNumber()
  deposit: number;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  laundry?: string;

  @IsOptional()
  @IsString()
  cooling?: string;

  @IsOptional()
  @IsString()
  heating?: string;

  @IsOptional()
  @IsString()
  bedrooms?: string;

  @IsOptional()
  @IsString()
  baths?: string;

  @IsNumber()
  yearBuilt: number;

  @IsNumber()
  size: number;

  @IsOptional()
  @IsString()
  parking?: string;

  @IsEnum(ListingStatus)
  status: ListingStatus;

  @IsEnum(ListingFor)
  listingFor: ListingFor;
}
