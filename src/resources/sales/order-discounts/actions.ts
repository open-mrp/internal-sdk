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
   * Validates a discount code and returns the matching order discount, so a code a
   * buyer typed can be attached to an order.
   *
   * When `buyer_account_id` is provided, or the caller is a customer user, the
   * lookup also verifies that the buyer has not already redeemed the discount on
   * another order, and reports an already-redeemed code as not found. Pass
   * `sales_order_id` to exclude an order the buyer is currently editing from that
   * check.
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
   * The discount code to look up, as the buyer typed it.
   *
   * Matching ignores letter case, so `save10` finds a discount stored as `SAVE10`.
   */
  code: string;

  /**
   * The buyer account to check for prior use of this code.
   *
   * When set, the lookup returns a not-found error if that buyer has already
   * redeemed the discount on another order, so a one-use-per-customer code can be
   * rejected before it is attached to a new one. Customer callers cannot set this —
   * their own account is always used.
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
   * The discount code to look up, as the buyer typed it.
   *
   * Matching ignores letter case, so `save10` finds a discount stored as `SAVE10`.
   */
  code: string;

  /**
   * The buyer account to check for prior use of this code.
   *
   * When set, the lookup returns a not-found error if that buyer has already
   * redeemed the discount on another order, so a one-use-per-customer code can be
   * rejected before it is attached to a new one. Customer callers cannot set this —
   * their own account is always used.
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
