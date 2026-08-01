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
   * Returns a paginated list of product lines available in the catalog.
   *
   * Customers only see product lines they have access to.
   *
   * This endpoint requires the permissions: `products:read`, `customers:read`,
   * `suppliers:read`.
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
   * Returns the products in a product line, grouped by item category.
   *
   * Each category lists the properties its products vary along and the products
   * themselves. Customers only see products they have access to. Pagination applies
   * to categories, not to the products within them.
   *
   * This endpoint requires the permissions: `products:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listCatalogCategory =
   *   await client.catalog.catalog.productLines.retrieveProducts(
   *     'pdln_01996357326a0d3f7b129542ea',
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
 * Attribute of a product in the catalog: a single value of a property, e.g. `Red`
 * for the `Color` property.
 */
export interface CatalogAttribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * The attribute's value, e.g. `Red`.
   *
   * This is the specific value the product takes for its `property`.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_attribute';

  /**
   * Property associated with an item category, e.g. `Color`.
   *
   * A property defines a dimension along which products in a category vary; its
   * possible values are represented as catalog attributes.
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
   * Display name of the category.
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
 *
 * A catalog product is identified by its underlying `item` rather than a product
 * ID of its own.
 */
export interface CatalogProduct {
  /**
   * List represents a paginated list of resources.
   */
  attributes: ListCatalogAttribute | null;

  /**
   * Human-readable description of the product, carried over from the item.
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
 *
 * A product line is the top-level grouping of the catalog; browse its products by
 * passing this product line's ID to the list-catalog-products endpoint.
 */
export interface CatalogProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Display name of the product line.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_product_line';
}

/**
 * Property associated with an item category, e.g. `Color`.
 *
 * A property defines a dimension along which products in a category vary; its
 * possible values are represented as catalog attributes.
 */
export interface CatalogProperty {
  /**
   * Property ID.
   */
  id: string;

  /**
   * Display name of the property, e.g. `Color`.
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
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface ProductLineRetrieveProductsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
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
