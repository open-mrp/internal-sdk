// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage product types.
 */
export class ProductTypes extends APIResource {
  /**
   * Returns a product type by ID or code.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.retrieve(
   *     'prty_01jm4r6700f8nwq3v5hx2d9ktp',
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
   *   await client.catalog.productTypes.update('', {
   *     code: 'service',
   *     name: 'Service',
   *   });
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
   * Deletes a product type.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.delete(
   *     'prty_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductTypeDeleteResponse> {
    return this._client.delete(path`/v1/catalog/product-types/${id}`, options);
  }

  /**
   * Creates a product type.
   *
   * @example
   * ```ts
   * const productType =
   *   await client.catalog.productTypes.productTypes({
   *     code: 'sale',
   *     name: 'Sale',
   *   });
   * ```
   */
  productTypes(body: ProductTypeProductTypesParams, options?: RequestOptions): APIPromise<ProductType> {
    return this._client.post('/v1/catalog/product-types', { body, ...options });
  }

  /**
   * Returns a paginated list of product types. Product types are global and not
   * scoped to a specific account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.productTypes.retrieveProductTypes();
   * ```
   */
  retrieveProductTypes(
    query: ProductTypeRetrieveProductTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductTypeRetrieveProductTypesResponse> {
    return this._client.get('/v1/catalog/product-types', { query, ...options });
  }
}

/**
 * ProductType resource.
 */
export interface ProductType {
  /**
   * Product ID.
   */
  id: string;

  /**
   * Unique code.
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

export interface ProductTypeDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface ProductTypeRetrieveProductTypesResponse {
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
  page_info: AgentsAPI.PageInfo;
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

export interface ProductTypeProductTypesParams {
  /**
   * Unique code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;
}

export interface ProductTypeRetrieveProductTypesParams {
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
    type ProductType as ProductType,
    type ProductTypeDeleteResponse as ProductTypeDeleteResponse,
    type ProductTypeRetrieveProductTypesResponse as ProductTypeRetrieveProductTypesResponse,
    type ProductTypeUpdateParams as ProductTypeUpdateParams,
    type ProductTypeProductTypesParams as ProductTypeProductTypesParams,
    type ProductTypeRetrieveProductTypesParams as ProductTypeRetrieveProductTypesParams,
  };
}
