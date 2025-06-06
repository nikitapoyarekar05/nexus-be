import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ListingsService } from './listing.service';
import { Listing, ListingFor } from './listing.entity';

const mockRepo = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOneBy: jest.fn(),
});

describe.only('ListingsService', () => {
  let service: ListingsService;
  let repo: jest.Mocked<Repository<Listing>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListingsService,
        {
          provide: getRepositoryToken(Listing),
          useFactory: mockRepo,
        },
      ],
    }).compile();

    service = module.get<ListingsService>(ListingsService);
    repo = module.get(getRepositoryToken(Listing));
  });

  describe('create()', () => {
    test('should create and save a listing', async () => {
      const dto = {
        title: 'Nice Flat',
        description: 'A flat in NY',
        addressLine1: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        listedBy: { name: 'Nikita', email: 'test@test.com' },
      };
      const createdListing = { ...dto, id: 1, wishlisted: false };

      repo.create.mockReturnValue(createdListing as any);
      repo.save.mockResolvedValue(createdListing as any);

      const result = await service.create(dto as any);
      expect(repo.create).toHaveBeenCalledWith(expect.objectContaining({ listingFor: ListingFor.RENT }));
      expect(repo.save).toHaveBeenCalledWith(createdListing);
      expect(result).toEqual(createdListing);
    });
  });

  describe('findAll()', () => {
    test('should return all listings', async () => {
      const listings = [{ id: 1 }, { id: 2 }];
      repo.find.mockResolvedValue(listings as any);

      const result = await service.findAll();
      expect(result).toEqual(listings);
    });
  });

  describe('findOne()', () => {
    test('should return a listing by id', async () => {
      const listing = { id: 1 };
      repo.findOneBy.mockResolvedValue(listing as any);

      const result = await service.findOne(1);
      expect(result).toEqual(listing);
    });
  });

  describe('search()', () => {
    test('should return listings matching query', async () => {
      const listings = [{ title: 'Nice Flat' }];
      repo.find.mockResolvedValue(listings as any);

      const result = await service.search('Flat');
      expect(repo.find).toHaveBeenCalled();
      expect(result).toEqual(listings);
    });

    test('should return wishlisted listings only when flag is true', async () => {
      const listings = [{ title: 'Fav', wishlisted: true }];
      repo.find.mockResolvedValue(listings as any);

      const result = await service.search('Fav', true);
      expect(result[0].wishlisted).toBe(true);
    });
  });

  describe('getWishlistedListings()', () => {
    test('should return all wishlisted listings and their count', async () => {
      const listings = [{ id: 1, wishlisted: true }];
      repo.find.mockResolvedValue(listings as any);

      const result = await service.getWishlistedListings();
      expect(result).toEqual([listings, 1]);
    });
  });
});
