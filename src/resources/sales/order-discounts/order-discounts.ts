// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionFindByCodeParams, Actions, FindOrderDiscountByCodeRequest } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage order discounts.
 */
export class OrderDiscounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates an order discount.
   *
   * The discount code must be unique within the account; creating a discount with an
   * existing code returns a conflict error.
   *
   * This endpoint requires the permission: `discounts:create`.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.create({
   *     code: 'SAVE10',
   *     discount_type: 'percentage',
   *     name: '10% Off',
   *     percentage: '10.000000000000000000000000000000',
   *   });
   * ```
   */
  create(body: OrderDiscountCreateParams, options?: RequestOptions): APIPromise<OrderDiscount> {
    return this._client.post('/v1/sales/order-discounts', { body, ...options });
  }

  /**
   * Returns an order discount by ID.
   *
   * This endpoint requires the permission: `discounts:read`.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.retrieve(
   *     'ords_01121c5e2f6937a6b896daad3a',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrderDiscount> {
    return this._client.get(path`/v1/sales/order-discounts/${id}`, options);
  }

  /**
   * Partially updates an order discount.
   *
   * Only the provided fields are changed. Changing `code` to one already used by
   * another discount returns a conflict error.
   *
   * This endpoint requires the permission: `discounts:update`.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.update(
   *     'ords_01121c5e2f6937a6b896daad3a',
   *     { code: 'SAVE15', name: '15% Off' },
   *   );
   * ```
   */
  update(
    id: string,
    body: OrderDiscountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderDiscount> {
    return this._client.patch(path`/v1/sales/order-discounts/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of order discounts for the current account.
   *
   * This endpoint requires the permissions: `discounts:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listOrderDiscount =
   *   await client.sales.orderDiscounts.list();
   * ```
   */
  list(
    query: OrderDiscountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOrderDiscount> {
    return this._client.get('/v1/sales/order-discounts', { query, ...options });
  }

  /**
   * Deletes an order discount and returns the deleted resource.
   *
   * Deletion is permanent; further requests against the deleted ID return an error.
   *
   * This endpoint requires the permission: `discounts:delete`.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.delete(
   *     'ords_01121c5e2f6937a6b896daad3a',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<OrderDiscount> {
    return this._client.delete(path`/v1/sales/order-discounts/${id}`, options);
  }
}

/**
 * Request to create an order discount.
 */
export interface CreateOrderDiscountRequest {
  /**
   * The code entered to apply this discount to an order.
   *
   * Must be unique within the account.
   */
  code: string;

  /**
   * How the discount is calculated.
   *
   * - `percentage`: the discount is a percent off, taken from `percentage`.
   * - `amount`: the discount is a fixed amount off, taken from `amount`.
   */
  discount_type: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Fixed amount off as a decimal string.
   *
   * Used when `discount_type` is `amount`; otherwise `0`.
   */
  amount?: string;

  /**
   * Percent off as a decimal string (e.g. `10` for 10%).
   *
   * Used when `discount_type` is `percentage`; otherwise `0`.
   */
  percentage?: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListOrderDiscount {
  /**
   * Resources in this page.
   */
  data: Array<OrderDiscount>;

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
 * A discount code that can be applied to a sales order.
 *
 * An order discount reduces the order total by either a percentage or a fixed
 * amount, depending on `discount_type`.
 */
export interface OrderDiscount {
  /**
   * Order discount ID.
   */
  id: string;

  /**
   * Fixed amount off as a decimal string.
   *
   * Applies when `discount_type` is `amount`; otherwise `0`.
   */
  amount: string;

  /**
   * The code entered to apply this discount to an order.
   *
   * Must be unique within the account.
   */
  code: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * How the discount is calculated, determining whether `percentage` or `amount` is
   * used.
   *
   * - `percentage`: the discount is a percent off, taken from `percentage`.
   * - `amount`: the discount is a fixed amount off, taken from `amount`.
   */
  discount_type: 'percentage' | 'amount';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'order_discount';

  /**
   * Number of orders currently using this discount.
   */
  order_count: number;

  /**
   * Percent off as a decimal string (e.g. `10` for 10%).
   *
   * Applies when `discount_type` is `percentage`; otherwise `0`.
   */
  percentage: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update an order discount.
 */
export interface UpdateOrderDiscountRequest {
  /**
   * Fixed amount off as a decimal string.
   *
   * Used when `discount_type` is `amount`.
   */
  amount?: string;

  /**
   * The code entered to apply this discount to an order.
   *
   * Must be unique within the account.
   */
  code?: string;

  /**
   * How the discount is calculated.
   *
   * - `percentage`: the discount is a percent off, taken from `percentage`.
   * - `amount`: the discount is a fixed amount off, taken from `amount`.
   */
  discount_type?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Percent off as a decimal string (e.g. `10` for 10%).
   *
   * Used when `discount_type` is `percentage`.
   */
  percentage?: string;
}

export interface OrderDiscountCreateParams {
  /**
   * The code entered to apply this discount to an order.
   *
   * Must be unique within the account.
   */
  code: string;

  /**
   * How the discount is calculated.
   *
   * - `percentage`: the discount is a percent off, taken from `percentage`.
   * - `amount`: the discount is a fixed amount off, taken from `amount`.
   */
  discount_type: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Fixed amount off as a decimal string.
   *
   * Used when `discount_type` is `amount`; otherwise `0`.
   */
  amount?: string;

  /**
   * Percent off as a decimal string (e.g. `10` for 10%).
   *
   * Used when `discount_type` is `percentage`; otherwise `0`.
   */
  percentage?: string;
}

export interface OrderDiscountUpdateParams {
  /**
   * Fixed amount off as a decimal string.
   *
   * Used when `discount_type` is `amount`.
   */
  amount?: string;

  /**
   * The code entered to apply this discount to an order.
   *
   * Must be unique within the account.
   */
  code?: string;

  /**
   * How the discount is calculated.
   *
   * - `percentage`: the discount is a percent off, taken from `percentage`.
   * - `amount`: the discount is a fixed amount off, taken from `amount`.
   */
  discount_type?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Percent off as a decimal string (e.g. `10` for 10%).
   *
   * Used when `discount_type` is `percentage`.
   */
  percentage?: string;
}

export interface OrderDiscountListParams {
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

OrderDiscounts.Actions = Actions;

export declare namespace OrderDiscounts {
  export {
    type CreateOrderDiscountRequest as CreateOrderDiscountRequest,
    type ListOrderDiscount as ListOrderDiscount,
    type OrderDiscount as OrderDiscount,
    type UpdateOrderDiscountRequest as UpdateOrderDiscountRequest,
    type OrderDiscountCreateParams as OrderDiscountCreateParams,
    type OrderDiscountUpdateParams as OrderDiscountUpdateParams,
    type OrderDiscountListParams as OrderDiscountListParams,
  };

  export {
    Actions as Actions,
    type FindOrderDiscountByCodeRequest as FindOrderDiscountByCodeRequest,
    type ActionFindByCodeParams as ActionFindByCodeParams,
  };
}
