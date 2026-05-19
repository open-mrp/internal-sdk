// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from './actions';
import { ActionFindByCodeParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage order discounts.
 */
export class OrderDiscounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns an order discount by ID.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.retrieve(
   *     'ords_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrderDiscount> {
    return this._client.get(path`/v1/sales/order-discounts/${id}`, options);
  }

  /**
   * Partially updates an order discount.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.update('', {
   *     code: 'SAVE15',
   *     name: '15% Off',
   *   });
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
   * Deletes an order discount by ID.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.delete(
   *     'ords_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<OrderDiscount> {
    return this._client.delete(path`/v1/sales/order-discounts/${id}`, options);
  }

  /**
   * Creates an order discount.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.orderDiscounts({
   *     code: 'SAVE10',
   *     discount_type: 'percentage',
   *     name: '10% Off',
   *     percentage: '10.000000000000000000000000000000',
   *   });
   * ```
   */
  orderDiscounts(
    body: OrderDiscountOrderDiscountsParams,
    options?: RequestOptions,
  ): APIPromise<OrderDiscount> {
    return this._client.post('/v1/sales/order-discounts', { body, ...options });
  }

  /**
   * Returns a paginated list of order discounts for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.orderDiscounts.retrieveOrderDiscounts();
   * ```
   */
  retrieveOrderDiscounts(
    query: OrderDiscountRetrieveOrderDiscountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderDiscountRetrieveOrderDiscountsResponse> {
    return this._client.get('/v1/sales/order-discounts', { query, ...options });
  }
}

/**
 * Order discount resource.
 */
export interface OrderDiscount {
  /**
   * Order discount ID.
   */
  id: string;

  /**
   * Fixed amount as a decimal string.
   */
  amount: string;

  /**
   * Discount code.
   */
  code: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Discount type: "percentage" or "amount".
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
   * Number of orders using this discount.
   */
  order_count: number;

  /**
   * Percentage value as a decimal string.
   */
  percentage: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface OrderDiscountRetrieveOrderDiscountsResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface OrderDiscountUpdateParams {
  /**
   * Fixed amount as a decimal string.
   */
  amount?: string;

  /**
   * Discount code.
   */
  code?: string;

  /**
   * Discount type: "percentage" or "amount".
   */
  discount_type?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Percentage value as a decimal string.
   */
  percentage?: string;
}

export interface OrderDiscountOrderDiscountsParams {
  /**
   * Discount code.
   */
  code: string;

  /**
   * Discount type: "percentage" or "amount".
   */
  discount_type: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Fixed amount as a decimal string. Required when discount_type is "amount".
   */
  amount?: string;

  /**
   * Percentage value as a decimal string. Required when discount_type is
   * "percentage".
   */
  percentage?: string;
}

export interface OrderDiscountRetrieveOrderDiscountsParams {
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

OrderDiscounts.Actions = Actions;

export declare namespace OrderDiscounts {
  export {
    type OrderDiscount as OrderDiscount,
    type OrderDiscountRetrieveOrderDiscountsResponse as OrderDiscountRetrieveOrderDiscountsResponse,
    type OrderDiscountUpdateParams as OrderDiscountUpdateParams,
    type OrderDiscountOrderDiscountsParams as OrderDiscountOrderDiscountsParams,
    type OrderDiscountRetrieveOrderDiscountsParams as OrderDiscountRetrieveOrderDiscountsParams,
  };

  export { Actions as Actions, type ActionFindByCodeParams as ActionFindByCodeParams };
}
