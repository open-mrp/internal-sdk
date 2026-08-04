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
   * Returns the product lines available in the catalog, ordered by name.
   *
   * A product line only appears once it holds at least one product whose
   * `portal_visibility` is `visible`. When the caller is a customer user, the list
   * is narrowed further to the product lines that customer has been granted access
   * to, either directly, through an account group, or through the account group used
   * as their price group. The `q` search term is matched against the product line
   * name.
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
   * themselves, with categories ordered by name and products ordered by SKU. Only
   * products whose `portal_visibility` is `visible` are included, and a customer
   * user additionally only sees product lines they have been granted access to.
   *
   * Pagination and the `q` search term apply to the categories — `q` is matched
   * against the category name, and a page returns whole categories with all of their
   * products.
   *
   * This endpoint requires the permissions: `products:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listCatalogCategory =
   *   await client.catalog.catalog.productLines.retrieveProducts(
   *     'pdln_k9bnlgvxhxjh',
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  products: ListCatalogProduct | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  attributes: ListCatalogAttribute | null;

  /**
   * Human-readable description of the product, carried over from the item.
   */
  description: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
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
