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
   * This endpoint requires the permission: `product_lines:create`.
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
   * This endpoint requires the permissions: `product_lines:read`, `customers:read`,
   * `suppliers:read`.
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
   * Partially updates an account-owned product line.
   *
   * Only the provided fields are changed. The reserved default product lines
   * (shipping, service, credit, tax) cannot be updated.
   *
   * This endpoint requires the permission: `product_lines:update`.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.update(
   *     'pl_01996357326a0d3f7b129542ea',
   *     {
   *       commission_policy: 'commission_applied',
   *       freight_policy: 'billed_freight',
   *       name: 'Updated Product Line',
   *       unit_group_id: 'ug_01aad07abb8e41fd392d2d7013',
   *     },
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
   * This endpoint requires the permissions: `product_lines:read`, `customers:read`,
   * `suppliers:read`.
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
   * Permanently deletes an account-owned product line.
   *
   * The reserved default product lines (shipping, service, credit, tax) cannot be
   * deleted.
   *
   * This endpoint requires the permission: `product_lines:delete`.
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
   * Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   *
   * Must be unique among the account's product lines; a duplicate name returns a
   * conflict error.
   */
  name: string;

  /**
   * ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line.
   */
  unit_group_id: string;
}

/**
 * Request to partially update a product line.
 */
export interface UpdateProductLineRequest {
  /**
   * Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   *
   * Must be unique among the account's product lines; a duplicate name returns a
   * conflict error.
   */
  name?: string;

  /**
   * ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line.
   */
  unit_group_id?: string;
}

export interface ProductLineDeleteResponse {}

export interface ProductLineCreateParams {
  /**
   * Body param: Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Body param: Display name.
   *
   * Must be unique among the account's product lines; a duplicate name returns a
   * conflict error.
   */
  name: string;

  /**
   * Body param: ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line.
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
   * Body param: Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Display name.
   *
   * Must be unique among the account's product lines; a duplicate name returns a
   * conflict error.
   */
  name?: string;

  /**
   * Body param: ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line.
   */
  unit_group_id?: string;
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
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;

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
    type CreateProductLineRequest as CreateProductLineRequest,
    type UpdateProductLineRequest as UpdateProductLineRequest,
    type ProductLineDeleteResponse as ProductLineDeleteResponse,
    type ProductLineCreateParams as ProductLineCreateParams,
    type ProductLineRetrieveParams as ProductLineRetrieveParams,
    type ProductLineUpdateParams as ProductLineUpdateParams,
    type ProductLineListParams as ProductLineListParams,
  };
}
