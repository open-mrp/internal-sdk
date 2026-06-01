// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OrderDiscountsAPI from './order-discounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage order discounts.
 */
export class Actions extends APIResource {
  /**
   * Finds an order discount by code, optionally scoped to a buyer account or sales
   * order.
   *
   * @example
   * ```ts
   * const orderDiscount =
   *   await client.sales.orderDiscounts.actions.findByCode({
   *     code: 'SAVE10',
   *   });
   * ```
   */
  findByCode(
    body: ActionFindByCodeParams,
    options?: RequestOptions,
  ): APIPromise<OrderDiscountsAPI.OrderDiscount> {
    return this._client.post('/v1/sales/order-discounts/actions/find-by-code', { body, ...options });
  }
}

/**
 * Request to find an order discount by code.
 */
export interface FindOrderDiscountByCodeRequest {
  /**
   * Discount code.
   */
  code: string;

  /**
   * Buyer account ID to scope the lookup.
   */
  buyer_account_id?: string;

  /**
   * Sales order ID to scope the lookup.
   */
  sales_order_id?: string;
}

export interface ActionFindByCodeParams {
  /**
   * Discount code.
   */
  code: string;

  /**
   * Buyer account ID to scope the lookup.
   */
  buyer_account_id?: string;

  /**
   * Sales order ID to scope the lookup.
   */
  sales_order_id?: string;
}

export declare namespace Actions {
  export {
    type FindOrderDiscountByCodeRequest as FindOrderDiscountByCodeRequest,
    type ActionFindByCodeParams as ActionFindByCodeParams,
  };
}
