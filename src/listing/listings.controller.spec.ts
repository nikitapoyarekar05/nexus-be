import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';

import { ListingsController } from './listing.controller';
import { ListingsService } from './listing.service';


describe('ListingsController', () => {
  let controller: ListingsController;
  let service: jest.Mocked<ListingsService>;

  const mockListingsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    search: jest.fn(),
    updateWishlist: jest.fn(),
    getWishlistedListings: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingsController],
      providers: [
        {
          provide: ListingsService,
          useValue: mockListingsService,
        },
      ],
    }).compile();

    controller = module.get<ListingsController>(ListingsController);
    service = module.get(ListingsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    test('should call service.create with DTO', async () => {
      const dto = { title: 'Test', listedBy: { name: 'John', email: 'john@test.com' } };
      service.create.mockResolvedValue({ id: 1, ...dto } as any);

      const result = await controller.create(dto as any);
      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ id: 1, ...dto });
    });
  });

  describe('findAll', () => {
    test('should return totalCount and listings', async () => {
      const listings = [{ id: 1 }, { id: 2 }];
      service.findAll.mockResolvedValue(listings as any);

      const result = await controller.findAll();
      expect(result).toEqual({ totalCount: 2, listings });
    });
  });

  describe('searchListings', () => {
    test('should throw BadRequestException if query is missing or blank', async () => {
      await expect(controller.searchListings('')).rejects.toThrow(BadRequestException);
      await expect(controller.searchListings('   ')).rejects.toThrow(BadRequestException);
    });

    test('should call service.search and return listings with count', async () => {
      const listings = [{ title: 'House' }];
      service.search.mockResolvedValue(listings as any);

      const result = await controller.searchListings('House', false);
      expect(service.search).toHaveBeenCalledWith('House', false);
      expect(result).toEqual({ totalCount: 1, listings });
    });

    test('should handle wishlistedOnly = true', async () => {
      const listings = [{ title: 'Fav House', wishlisted: true }];
      service.search.mockResolvedValue(listings as any);

      const result = await controller.searchListings('Fav', true);
      expect(result.totalCount).toBe(1);
      expect(service.search).toHaveBeenCalledWith('Fav', true);
    });
  });

  describe('findOne', () => {
    test('should return listing by id', async () => {
      const listing = { id: 1 };
      service.findOne.mockResolvedValue(listing as any);

      const result = await controller.findOne('1');
      expect(result).toEqual(listing);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('updateWishlist', () => {
    test('should call updateWishlist with id and wishlisted status', async () => {
      const updated = { id: 1, wishlisted: true };
      service.updateWishlist.mockResolvedValue(updated as any);

      const result = await controller.updateWishlist('1', true);
      expect(service.updateWishlist).toHaveBeenCalledWith(1, true);
      expect(result).toEqual(updated);
    });
  });
});
