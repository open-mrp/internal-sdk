// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductLinesAPI from './product-lines';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Address,
  Attribute,
  CatalogAttribute,
  CatalogCategory,
  CatalogProduct,
  CatalogProductLine,
  CatalogProperty,
  Geolocation,
  Item,
  ItemCategory,
  ListAttribute,
  ListCatalogAttribute,
  ListCatalogCategory,
  ListCatalogProduct,
  ListCatalogProductLine,
  ListCatalogProperty,
  ListProperty,
  ListUnitGroupUnit,
  Owner,
  PageInfo,
  ProductLineListParams,
  ProductLineRetrieveProductsParams,
  ProductLines,
  Property,
  Rate,
  Unit,
  UnitGroup,
  UnitGroupUnit,
} from './product-lines';

export class Catalog extends APIResource {
  productLines: ProductLinesAPI.ProductLines = new ProductLinesAPI.ProductLines(this._client);
}

Catalog.ProductLines = ProductLines;

export declare namespace Catalog {
  export {
    ProductLines as ProductLines,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Attribute as Attribute,
    type CatalogAttribute as CatalogAttribute,
    type CatalogCategory as CatalogCategory,
    type CatalogProduct as CatalogProduct,
    type CatalogProductLine as CatalogProductLine,
    type CatalogProperty as CatalogProperty,
    type Geolocation as Geolocation,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAttribute as ListAttribute,
    type ListCatalogAttribute as ListCatalogAttribute,
    type ListCatalogCategory as ListCatalogCategory,
    type ListCatalogProduct as ListCatalogProduct,
    type ListCatalogProductLine as ListCatalogProductLine,
    type ListCatalogProperty as ListCatalogProperty,
    type ListProperty as ListProperty,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Property as Property,
    type Rate as Rate,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type ProductLineListParams as ProductLineListParams,
    type ProductLineRetrieveProductsParams as ProductLineRetrieveProductsParams,
  };
}
