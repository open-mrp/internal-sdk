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
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.retrieve(
   *     'prty_01ddca85eedfb6b101a3c2f379',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductType> {
    return this._client.get(path`/v1/catalog/product-types/${id}`, options);
  }

  /**
   * Partially updates a product type.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.update(
   *     'prty_01ddca85eedfb6b101a3c2f379',
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
   * Returns a paginated list of product types. Product types are global and not
   * scoped to a specific account.
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
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.delete(
   *     'prty_01ddca85eedfb6b101a3c2f379',
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
   * Unique code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * ProductType resource.
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
   */
  code: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
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
   * Unique code.
   */
  code?: string;

  /**
   * Display name.
   */
  name?: string;
}

export interface ProductTypeDeleteResponse {}

export interface ProductTypeCreateParams {
  /**
   * Unique code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;
}

export interface ProductTypeUpdateParams {
  /**
   * Unique code.
   */
  code?: string;

  /**
   * Display name.
   */
  name?: string;
}

export interface ProductTypeListParams {
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
