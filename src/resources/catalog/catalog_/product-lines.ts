// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Browse the product catalog.
 */
export class ProductLines extends APIResource {
  /**
   * Returns a paginated list of product lines available in the catalog. Customers
   * only see product lines they have access to.
   *
   * @example
   * ```ts
   * const listCatalogProductLine =
   *   await client.catalog.catalog.productLines.list();
   * ```
   */
  list(
    query: ProductLineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCatalogProductLine> {
    return this._client.get('/v1/catalog/catalog/product-lines', { query, ...options });
  }

  /**
   * Returns a paginated list of products in a specific product line, grouped by item
   * category.
   *
   * @example
   * ```ts
   * const listCatalogCategory =
   *   await client.catalog.catalog.productLines.retrieveProducts(
   *     'pl_01996357326a0d3f7b129542ea',
   *   );
   * ```
   */
  retrieveProducts(
    id: string,
    query: ProductLineRetrieveProductsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCatalogCategory> {
    return this._client.get(path`/v1/catalog/catalog/product-lines/${id}/products`, { query, ...options });
  }
}

/**
 * Attribute of a product in the catalog.
 */
export interface CatalogAttribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Attribute value.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_attribute';

  /**
   * Property associated with an item category.
   */
  property: CatalogProperty | null;
}

/**
 * Category of products in the catalog.
 */
export interface CatalogCategory {
  /**
   * Item category ID.
   */
  id: string;

  /**
   * Name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_category';

  /**
   * List represents a paginated list of resources.
   */
  products: ListCatalogProduct | null;

  /**
   * List represents a paginated list of resources.
   */
  properties: ListCatalogProperty | null;
}

/**
 * Product in the catalog.
 */
export interface CatalogProduct {
  /**
   * List represents a paginated list of resources.
   */
  attributes: ListCatalogAttribute | null;

  /**
   * Description.
   */
  description: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'catalog_product';
}

/**
 * Product line available in the catalog.
 */
export interface CatalogProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_product_line';
}

/**
 * Property associated with an item category.
 */
export interface CatalogProperty {
  /**
   * Property ID.
   */
  id: string;

  /**
   * Name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_property';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCatalogAttribute {
  /**
   * Resources in this page.
   */
  data: Array<CatalogAttribute>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCatalogCategory {
  /**
   * Resources in this page.
   */
  data: Array<CatalogCategory>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCatalogProduct {
  /**
   * Resources in this page.
   */
  data: Array<CatalogProduct>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCatalogProductLine {
  /**
   * Resources in this page.
   */
  data: Array<CatalogProductLine>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCatalogProperty {
  /**
   * Resources in this page.
   */
  data: Array<CatalogProperty>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

export interface ProductLineListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface ProductLineRetrieveProductsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace ProductLines {
  export {
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
