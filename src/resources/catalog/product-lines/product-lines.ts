// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesAPI from '../../sales/account-prices';
import * as ActionsAPI from './actions';
import {
  ActionBulkUpsertParams,
  ActionExportParams,
  Actions,
  BulkUpsertProductLinesRequest,
  ExportProductLinesRequest,
  UpsertProductLineInput,
} from './actions';
import * as CustomersAPI from '../../sales/customers/customers';
import * as AccountGroupsAPI from '../../sales/product-line-access/account-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage product lines.
 */
export class ProductLines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a product line owned by your account.
   *
   * The new line starts with no products; assign products to it by setting their
   * product line. Customers and account groups can only be granted access to lines
   * your account owns, so this is the starting point for scoping a customer's
   * catalog.
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
   *     unit_group_id: 'ug_andst6m79n41',
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
   * Returns a single product line by ID.
   *
   * Both the product lines your account owns and the shared system lines can be
   * retrieved.
   *
   * This endpoint requires the permissions: `product_lines:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.retrieve(
   *     'pdln_k9bnlgvxhxjh',
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
   * Partially updates a product line your account owns.
   *
   * Only the provided fields are changed. The reserved `shipping`, `service`,
   * `credit`, and `tax` lines cannot be updated, and neither can the shared system
   * lines, which belong to no single account.
   *
   * This endpoint requires the permission: `product_lines:update`.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.update(
   *     'pdln_k9bnlgvxhxjh',
   *     {
   *       commission_policy: 'commission_applied',
   *       freight_policy: 'billed_freight',
   *       name: 'Updated Product Line',
   *       unit_group_id: 'ug_andst6m79n41',
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
   * Returns a paginated list of product lines, newest first.
   *
   * Covers both the product lines your account owns and the shared system lines. The
   * `q` search term is matched against the product line name.
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
   * Permanently deletes a product line your account owns.
   *
   * The reserved `shipping`, `service`, `credit`, and `tax` lines cannot be deleted,
   * and neither can the shared system lines, which belong to no single account.
   * Deleting a line that was already deleted returns an already-deleted error rather
   * than succeeding silently.
   *
   * This endpoint requires the permission: `product_lines:delete`.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.delete(
   *     'pdln_k9bnlgvxhxjh',
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
   * Display name of the product line.
   *
   * Must be unique among the product lines visible to your account, including the
   * shared system lines; a duplicate name returns a conflict error.
   */
  name: string;

  /**
   * ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line. It must be a unit group your account owns or one of the shared system unit
   * groups.
   */
  unit_group_id: string;

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  default_lot?: CustomersAPI.QuantityInput;

  /**
   * How products in this line are produced when they do not say for themselves.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   */
  fulfillment_policy?: 'make_to_stock' | 'make_to_order';
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
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  default_lot?: CustomersAPI.QuantityInput | null;

  /**
   * Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * How products in this line are produced when they do not say for themselves.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   *
   * Clearing it returns the line's products to the account default.
   */
  fulfillment_policy?: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Display name of the product line.
   *
   * Must be unique among the product lines visible to your account, including the
   * shared system lines; a duplicate name returns a conflict error.
   */
  name?: string;

  /**
   * ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line. It must be a unit group your account owns or one of the shared system unit
   * groups. A lot already stored on the line is not rechecked when the group
   * changes, so send `default_lot` alongside to keep the two consistent.
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
   * Body param: Display name of the product line.
   *
   * Must be unique among the product lines visible to your account, including the
   * shared system lines; a duplicate name returns a conflict error.
   */
  name: string;

  /**
   * Body param: ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line. It must be a unit group your account owns or one of the shared system unit
   * groups.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group' | 'default_lot' | 'default_lot.unit'>;

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  default_lot?: CustomersAPI.QuantityInput;

  /**
   * Body param: How products in this line are produced when they do not say for
   * themselves.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   */
  fulfillment_policy?: 'make_to_stock' | 'make_to_order';
}

export interface ProductLineRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group' | 'default_lot' | 'default_lot.unit'>;
}

export interface ProductLineUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group' | 'default_lot' | 'default_lot.unit'>;

  /**
   * Body param: Default commission policy for products in this product line.
   *
   * - `commission_exempt`: no commission applies to these products.
   * - `commission_applied`: commission applies to these products, unless overridden
   *   elsewhere.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  default_lot?: CustomersAPI.QuantityInput | null;

  /**
   * Body param: Default freight policy for products in this product line.
   *
   * - `free_freight`: these products do not incur a freight charge.
   * - `billed_freight`: freight is billed for these products, unless overridden
   *   elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: How products in this line are produced when they do not say for
   * themselves.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   *
   * Clearing it returns the line's products to the account default.
   */
  fulfillment_policy?: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Body param: Display name of the product line.
   *
   * Must be unique among the product lines visible to your account, including the
   * shared system lines; a duplicate name returns a conflict error.
   */
  name?: string;

  /**
   * Body param: ID of the unit group to associate with this product line.
   *
   * The unit group determines the set of units available to products in this product
   * line. It must be a unit group your account owns or one of the shared system unit
   * groups. A lot already stored on the line is not rechecked when the group
   * changes, so send `default_lot` alongside to keep the two consistent.
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
  include?: Array<'owner' | 'owner.account' | 'unit_group' | 'default_lot' | 'default_lot.unit'>;

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

ProductLines.Actions = Actions;

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

  export {
    Actions as Actions,
    type BulkUpsertProductLinesRequest as BulkUpsertProductLinesRequest,
    type ExportProductLinesRequest as ExportProductLinesRequest,
    type UpsertProductLineInput as UpsertProductLineInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
