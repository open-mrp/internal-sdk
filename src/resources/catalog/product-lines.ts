// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountPricesAPI from '../sales/account-prices';
import * as AccountGroupsAPI from '../sales/product-line-access/account-groups';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage product lines.
 */
export class ProductLines extends APIResource {
  /**
   * Creates an account-owned product line.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.create({
   *     commission_policy: 'commission_exempt',
   *     freight_policy: 'billed_freight',
   *     name: 'Industrial Fasteners',
   *     unit_group_id: 'ug_01aad07abb8e41fd392d2d7013',
   *   });
   * ```
   */
  create(
    params: ProductLineCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountPricesAPI.ProductLine> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/product-lines', { query: { include }, body, ...options });
  }

  /**
   * Returns a product line by ID, including system-owned product lines accessible to
   * the account.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.retrieve(
   *     'pl_01996357326a0d3f7b129542ea',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductLineRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPricesAPI.ProductLine> {
    return this._client.get(path`/v1/catalog/product-lines/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account-owned product line. Default system product lines
   * cannot be updated.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.update(
   *     'pl_01996357326a0d3f7b129542ea',
   *   );
   * ```
   */
  update(
    id: string,
    params: ProductLineUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPricesAPI.ProductLine> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/product-lines/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of product lines, including account-owned and system
   * product lines.
   *
   * @example
   * ```ts
   * const listProductLine =
   *   await client.catalog.productLines.list();
   * ```
   */
  list(
    query: ProductLineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroupsAPI.ListProductLine> {
    return this._client.get('/v1/catalog/product-lines', { query, ...options });
  }

  /**
   * Deletes an account-owned product line. Default system product lines cannot be
   * deleted.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.delete(
   *     'pl_01996357326a0d3f7b129542ea',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductLineDeleteResponse> {
    return this._client.delete(path`/v1/catalog/product-lines/${id}`, options);
  }
}

/**
 * Request to create a product line.
 */
export interface CreateProductLineRequest {
  /**
   * Commission policy of products in this product line.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Freight policy for all items in this product line.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Unit group ID associated with this product line. This unit group dictates the
   * units that products in this product line may be purchased in.
   */
  unit_group_id: string;
}

/**
 * Request to partially update a product line.
 */
export interface UpdateProductLineRequest {
  /**
   * Commission policy of products in this product line.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Freight policy for all items in this product line.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name?: string;

  /**
   * Unit group ID associated with this product line. This unit group dictates the
   * units that products in this product line may be purchased in.
   */
  unit_group_id?: string;
}

export interface ProductLineDeleteResponse {}

export interface ProductLineCreateParams {
  /**
   * Body param: Commission policy of products in this product line.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: Freight policy for all items in this product line.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Unit group ID associated with this product line. This unit group
   * dictates the units that products in this product line may be purchased in.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;
}

export interface ProductLineRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;
}

export interface ProductLineUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;

  /**
   * Body param: Commission policy of products in this product line.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: Freight policy for all items in this product line.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Unit group ID associated with this product line. This unit group
   * dictates the units that products in this product line may be purchased in.
   */
  unit_group_id?: string;
}

export interface ProductLineListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;

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
    type CreateProductLineRequest as CreateProductLineRequest,
    type UpdateProductLineRequest as UpdateProductLineRequest,
    type ProductLineDeleteResponse as ProductLineDeleteResponse,
    type ProductLineCreateParams as ProductLineCreateParams,
    type ProductLineRetrieveParams as ProductLineRetrieveParams,
    type ProductLineUpdateParams as ProductLineUpdateParams,
    type ProductLineListParams as ProductLineListParams,
  };
}
