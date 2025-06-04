import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

export interface ListedBy {
  name: string;
  email: string;
  companyName?: string;
}

export interface PropertyImage {
  url: string;
  label: string;
}

@Entity('listings')
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  addressLine1: string;

  @Column({ nullable: true })
  addressLine2?: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zipcode: string;

  @Column('text')
  description: string;

  @Column('json')
  listedBy: {
    name: string;
    email: string;
    companyName?: string;
  };

  @Column()
  thumbNailUrl: string;

  @Column({ type: 'json', nullable: true })
  propertyImages?: Array<{
    url: string;
    label: string;
  }>;

  @Column({ default: false })
  wishlisted: boolean;

  @Column()
  rent: number;

  @Column({ type: 'integer', nullable: false, default: 0 })
  deposit: number;

  @Column()
  type: string;

  @Column({ nullable: true })
  laundry?: string;

  @Column({ nullable: true })
  cooling?: string;

  @Column({ nullable: true })
  heating?: string;

  @Column({ nullable: true })
  bedrooms?: string;

  @Column({ nullable: true })
  baths?: string;

  @Column()
  yearBuilt: number;

  @Column()
  size: number;

  @Column({ nullable: true })
  parking?: string;

  @Column({
    type: 'enum',
    enum: ListingStatus,
  })
  status: ListingStatus;

  @Column({
    type: 'enum',
    enum: ListingFor,
    default: ListingFor.RENT,
  })
  listingFor: ListingFor;
}
