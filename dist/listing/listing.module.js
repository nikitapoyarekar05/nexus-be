"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const listing_entity_1 = require("./listing.entity");
const listing_service_1 = require("./listing.service");
const listing_controller_1 = require("./listing.controller");
let ListingModule = class ListingModule {
};
exports.ListingModule = ListingModule;
exports.ListingModule = ListingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([listing_entity_1.Listing])],
        providers: [listing_service_1.ListingsService],
        controllers: [listing_controller_1.ListingsController],
    })
], ListingModule);
//# sourceMappingURL=listing.module.js.map