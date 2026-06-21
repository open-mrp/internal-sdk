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
   * Looks up an order discount by its code.
   *
   * When `buyer_account_id` is provided (or the caller is a customer user), the
   * lookup also verifies the buyer has not already used the discount on another
   * order, returning a not-found error if they have. Pass `sales_order_id` to
   * exclude an existing order from that check.
   *
   * This endpoint requires the permission: `discounts:read`.
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
   * The discount code to look up.
   */
  code: string;

  /**
   * Buyer account ID to check for prior usage.
   *
   * When set, the lookup returns a not-found error if this buyer has already used
   * the discount on another order.
   */
  buyer_account_id?: string;

  /**
   * Sales order ID to exclude from the prior-usage check.
   *
   * Set this when re-validating a code on an existing order so the order's own usage
   * does not count against the buyer.
   */
  sales_order_id?: string;
}

export interface ActionFindByCodeParams {
  /**
   * The discount code to look up.
   */
  code: string;

  /**
   * Buyer account ID to check for prior usage.
   *
   * When set, the lookup returns a not-found error if this buyer has already used
   * the discount on another order.
   */
  buyer_account_id?: string;

  /**
   * Sales order ID to exclude from the prior-usage check.
   *
   * Set this when re-validating a code on an existing order so the order's own usage
   * does not count against the buyer.
   */
  sales_order_id?: string;
}

export declare namespace Actions {
  export {
    type FindOrderDiscountByCodeRequest as FindOrderDiscountByCodeRequest,
    type ActionFindByCodeParams as ActionFindByCodeParams,
  };
}
