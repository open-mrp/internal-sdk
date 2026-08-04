// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage product types.
 */
export class ProductTypes extends APIResource {
  /**
   * Creates a product type.
   *
   * Product types are shared across all accounts, so a new type is immediately
   * available everywhere and its name and code must not collide with any existing
   * type; either collision returns a conflict error.
   *
   * This endpoint requires the permission: `product_types:create`.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.create({
   *     code: 'sale',
   *     name: 'Sale',
   *   });
   * ```
   */
  create(body: ProductTypeCreateParams, options?: RequestOptions): APIPromise<ProductType> {
    return this._client.post('/v1/catalog/product-types', { body, ...options });
  }

  /**
   * Returns a product type by ID or code.
   *
   * This endpoint requires the permission: `product_types:read`.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.retrieve(
   *     'prty_bdu6hiasyjl4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductType> {
    return this._client.get(path`/v1/catalog/product-types/${id}`, options);
  }

  /**
   * Partially updates a product type.
   *
   * Product types are shared across all accounts, so a change here applies
   * everywhere.
   *
   * This endpoint requires the permission: `product_types:update`.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.update(
   *     'prty_bdu6hiasyjl4',
   *     { code: 'service', name: 'Service' },
   *   );
   * ```
   */
  update(
    id: string,
    body: ProductTypeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductType> {
    return this._client.patch(path`/v1/catalog/product-types/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of product types.
   *
   * Product types are global and not scoped to a specific account. The `q` search
   * term is matched against the product type name.
   *
   * This endpoint requires the permission: `product_types:read`.
   *
   * @example
   * ```ts
   * const listProductType =
   *   await client.catalog.productTypes.list();
   * ```
   */
  list(
    query: ProductTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductType> {
    return this._client.get('/v1/catalog/product-types', { query, ...options });
  }

  /**
   * Deletes a product type.
   *
   * Products point at their product type by code, and nothing blocks the delete, so
   * removing a type that products still use leaves those products referencing a code
   * that no longer resolves. Reassign or delete those products first. Product types
   * are shared across all accounts, so the deletion affects every account.
   *
   * This endpoint requires the permission: `product_types:delete`.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.delete(
   *     'prty_bdu6hiasyjl4',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductTypeDeleteResponse> {
    return this._client.delete(path`/v1/catalog/product-types/${id}`, options);
  }
}

/**
 * Request to create a product type.
 */
export interface CreateProductTypeRequest {
  /**
   * Stable machine-readable code for the product type.
   *
   * Must be unique across all product types. Products reference their product type
   * by this code rather than by ID, and the code can be used in place of the ID when
   * retrieving a product type.
   */
  code: string;

  /**
   * Display name of the product type.
   *
   * Must be unique across all product types.
   */
  name: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductType {
  /**
   * Resources in this page.
   */
  data: Array<ProductType>;

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
 * The classification that decides how a product behaves on orders and invoices — a
 * sellable good, a service, a shipping charge, and so on.
 *
 * Product types are shared across all accounts rather than owned by one.
 */
export interface ProductType {
  /**
   * Product type ID.
   */
  id: string;

  /**
   * Stable machine-readable code identifying the kind of product type.
   *
   * - `sale`: a standard sellable product.
   * - `service`: a non-physical service line, such as labor or installation.
   * - `shipping`: a shipping charge applied to an order.
   * - `credit`: a credit applied against an order or invoice.
   * - `return`: a returned product (RMA).
   * - `tax`: a tax line.
   *
   * Products reference their product type by this code rather than by ID, and the
   * code can be used in place of the ID when retrieving a product type.
   */
  code: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the product type.
   *
   * Unique across all product types.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'product_type';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update a product type.
 */
export interface UpdateProductTypeRequest {
  /**
   * New machine-readable code for the product type.
   *
   * Must be unique across all product types. Existing products point at their
   * product type by code, so changing it leaves them referencing a code that no
   * longer exists; only rename a code no product uses.
   */
  code?: string;

  /**
   * New display name for the product type.
   *
   * Must be unique across all product types.
   */
  name?: string;
}

export interface ProductTypeDeleteResponse {}

export interface ProductTypeCreateParams {
  /**
   * Stable machine-readable code for the product type.
   *
   * Must be unique across all product types. Products reference their product type
   * by this code rather than by ID, and the code can be used in place of the ID when
   * retrieving a product type.
   */
  code: string;

  /**
   * Display name of the product type.
   *
   * Must be unique across all product types.
   */
  name: string;
}

export interface ProductTypeUpdateParams {
  /**
   * New machine-readable code for the product type.
   *
   * Must be unique across all product types. Existing products point at their
   * product type by code, so changing it leaves them referencing a code that no
   * longer exists; only rename a code no product uses.
   */
  code?: string;

  /**
   * New display name for the product type.
   *
   * Must be unique across all product types.
   */
  name?: string;
}

export interface ProductTypeListParams {
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

export declare namespace ProductTypes {
  export {
    type CreateProductTypeRequest as CreateProductTypeRequest,
    type ListProductType as ListProductType,
    type ProductType as ProductType,
    type UpdateProductTypeRequest as UpdateProductTypeRequest,
    type ProductTypeDeleteResponse as ProductTypeDeleteResponse,
    type ProductTypeCreateParams as ProductTypeCreateParams,
    type ProductTypeUpdateParams as ProductTypeUpdateParams,
    type ProductTypeListParams as ProductTypeListParams,
  };
}
