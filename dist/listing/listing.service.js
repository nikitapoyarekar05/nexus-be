"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const listing_entity_1 = require("./listing.entity");
let ListingsService = class ListingsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        const listing = this.repo.create({
            ...data,
            listingFor: data.listingFor ?? listing_entity_1.ListingFor.RENT,
            listedBy: {
                name: data.listedBy.name,
                email: data.listedBy.email,
                companyName: data.listedBy.companyName || undefined,
            },
            wishlisted: data.wishlisted ?? false,
        });
        return this.repo.save(listing);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    async search(query, wishlistedOnly = false) {
        const conditions = [];
        const searchConditions = [
            { title: (0, typeorm_2.ILike)(`%${query}%`) },
            { description: (0, typeorm_2.ILike)(`%${query}%`) },
            { addressLine1: (0, typeorm_2.ILike)(`%${query}%`) },
            { city: (0, typeorm_2.ILike)(`%${query}%`) },
            { state: (0, typeorm_2.ILike)(`%${query}%`) },
            { country: (0, typeorm_2.ILike)(`%${query}%`) },
        ];
        if (wishlistedOnly) {
            conditions.push(...searchConditions.map(condition => ({ ...condition, wishlisted: true })));
        }
        else {
            conditions.push(...searchConditions);
        }
        const listings = await this.repo.find({
            where: conditions,
        });
        return listings;
    }
    async updateWishlist(id, wishlisted) {
        const listing = await this.repo.findOneBy({ id });
        if (!listing) {
            throw new common_1.NotFoundException(`Listing with id ${id} not found`);
        }
        listing.wishlisted = wishlisted;
        return this.repo.save(listing);
    }
    async getWishlistedListings() {
        const listings = await this.repo.find({
            where: { wishlisted: true },
        });
        return [listings, listings.length];
    }
};
exports.ListingsService = ListingsService;
exports.ListingsService = ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(listing_entity_1.Listing)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ListingsService);
//# sourceMappingURL=listing.service.js.map