// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Actions extends APIResource {
  /**
   * Marks all unstocked lines on a receiving order as received.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.receive(
   *     'rcor_016911ec6c634a298b3dc1798e',
   *   );
   * ```
   */
  receive(id: string, options?: RequestOptions): APIPromise<DeliveriesAPI.ReceivingOrder> {
    return this._client.put(path`/v1/operations/receiving-orders/${id}/actions/receive`, options);
  }

  /**
   * Stocks a receiving order by allocating line items to storage locations.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.stock(
   *     'rcor_016911ec6c634a298b3dc1798e',
   *     {
   *       line_items: [
   *         {
   *           receiving_order_line_id:
   *             'rcorln_01f2aca124f3f5add7c94d5e4f',
   *           allocations: [{ quantity: '100' }],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  stock(
    id: string,
    body: ActionStockParams,
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.ReceivingOrder> {
    return this._client.post(path`/v1/operations/receiving-orders/${id}/actions/stock`, { body, ...options });
  }

  /**
   * Voids a receiving order, cancelling all lines.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.void(
   *     'rcor_016911ec6c634a298b3dc1798e',
   *   );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<DeliveriesAPI.ReceivingOrder> {
    return this._client.put(path`/v1/operations/receiving-orders/${id}/actions/void`, options);
  }
}

/**
 * Storage allocation.
 */
export interface AllocationRequest {
  /**
   * Quantity to allocate.
   */
  quantity: string;

  /**
   * Location ID to allocate to.
   */
  location_id?: string;
}

/**
 * Line item in a stocking request.
 */
export interface StockLineItemRequest {
  /**
   * Storage allocations for this line item.
   */
  allocations: Array<AllocationRequest>;

  /**
   * Receiving order line ID.
   */
  receiving_order_line_id: string;

  /**
   * Lot number to assign.
   */
  lot_number?: string;

  /**
   * Rejected quantity value.
   */
  rejected_quantity?: string;
}

/**
 * Request to stock a receiving order.
 */
export interface StockReceivingOrderRequest {
  /**
   * Line items to stock with allocation details.
   */
  line_items: Array<StockLineItemRequest>;
}

export interface ActionStockParams {
  /**
   * Line items to stock with allocation details.
   */
  line_items: Array<StockLineItemRequest>;
}

export declare namespace Actions {
  export {
    type AllocationRequest as AllocationRequest,
    type StockLineItemRequest as StockLineItemRequest,
    type StockReceivingOrderRequest as StockReceivingOrderRequest,
    type ActionStockParams as ActionStockParams,
  };
}
