// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductLinesAPI from './product-lines';
import {
  CatalogAttribute,
  CatalogCategory,
  CatalogProduct,
  CatalogProductLine,
  CatalogProperty,
  ListCatalogAttribute,
  ListCatalogCategory,
  ListCatalogProduct,
  ListCatalogProductLine,
  ListCatalogProperty,
  ProductLineListParams,
  ProductLineRetrieveProductsParams,
  ProductLines,
} from './product-lines';

export class Catalog extends APIResource {
  productLines: ProductLinesAPI.ProductLines = new ProductLinesAPI.ProductLines(this._client);
}

Catalog.ProductLines = ProductLines;

export declare namespace Catalog {
  export {
    ProductLines as ProductLines,
    type CatalogAttribute as CatalogAttribute,
    type CatalogCategory as CatalogCategory,
    type CatalogProduct as CatalogProduct,
    type CatalogProductLine as CatalogProductLine,
    type CatalogProperty as CatalogProperty,
    type ListCatalogAttribute as ListCatalogAttribute,
    type ListCatalogCategory as ListCatalogCategory,
    type ListCatalogProduct as ListCatalogProduct,
    type ListCatalogProductLine as ListCatalogProductLine,
    type ListCatalogProperty as ListCatalogProperty,
    type ProductLineListParams as ProductLineListParams,
    type ProductLineRetrieveProductsParams as ProductLineRetrieveProductsParams,
  };
}
