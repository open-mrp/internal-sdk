// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReceivingOrdersAPI from '../receiving-orders';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Actions extends APIResource {
  /**
   * Records the full outstanding quantity as received on a single receiving order
   * line.
   *
   * Sets the line's quantity, in the ordered unit, to the ordered quantity less what
   * the purchase order line's other receiving lines already hold, so that together
   * they cover the order. A line that already holds at least that much, or whose
   * order line is already covered, is returned unchanged. Nothing enters inventory;
   * use Stock Receiving Order to put the received quantity away.
   *
   * A line that has been stocked, or a line of a completed order, cannot be
   * received.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.actions.receive(
   *     'orln_la01fxgrwcnr',
   *     { receiving_order_id: 'rcor_iy0usuxcrjj8' },
   *   );
   * ```
   */
  receive(
    id: string,
    params: ActionReceiveParams,
    options?: RequestOptions,
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrderLine> {
    const { receiving_order_id, include } = params;
    return this._client.put(
      path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}/actions/receive`,
      { query: { include }, ...options },
    );
  }

  /**
   * Voids a single receiving order line, resetting its receiving progress.
   *
   * The line's received quantity is reset to `0`, leaving the rest of the order
   * untouched. The line itself is not deleted.
   *
   * A line that has been stocked, or a line of a completed order, cannot be voided;
   * void the receiving order to reopen it.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.actions.void(
   *     'orln_la01fxgrwcnr',
   *     { receiving_order_id: 'rcor_iy0usuxcrjj8' },
   *   );
   * ```
   */
  void(
    id: string,
    params: ActionVoidParams,
    options?: RequestOptions,
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrderLine> {
    const { receiving_order_id, include } = params;
    return this._client.put(
      path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}/actions/void`,
      { query: { include }, ...options },
    );
  }
}

export interface ActionReceiveParams {
  /**
   * Path param: Receiving order ID.
   */
  receiving_order_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'order_line'
    | 'order_line.item'
    | 'order_line.quantity_ordered'
    | 'order_line.quantity_ordered.unit'
    | 'order_line.unit_price'
    | 'order_line.unit_price.numerator_unit'
    | 'order_line.unit_price.denominator_unit'
    | 'quantity'
    | 'quantity.unit'
    | 'quantity_ordered'
    | 'quantity_ordered.unit'
  >;
}

export interface ActionVoidParams {
  /**
   * Path param: Receiving order ID.
   */
  receiving_order_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'order_line'
    | 'order_line.item'
    | 'order_line.quantity_ordered'
    | 'order_line.quantity_ordered.unit'
    | 'order_line.unit_price'
    | 'order_line.unit_price.numerator_unit'
    | 'order_line.unit_price.denominator_unit'
    | 'quantity'
    | 'quantity.unit'
    | 'quantity_ordered'
    | 'quantity_ordered.unit'
  >;
}

export declare namespace Actions {
  export { type ActionReceiveParams as ActionReceiveParams, type ActionVoidParams as ActionVoidParams };
}
