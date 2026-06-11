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
   * Records the full outstanding quantity as received on every unstocked line of a
   * receiving order.
   *
   * Each unstocked line's quantity is set to the quantity still outstanding on its
   * purchase order line (ordered minus previously received); lines with nothing
   * outstanding are left unchanged. This does not add inventory — use Stock
   * Receiving Order to put the received quantities away.
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
   * Stocks the received quantities on a receiving order into inventory.
   *
   * Every unstocked line with a non-zero quantity is marked as stocked. For each
   * entry in `line_items`, the accepted allocations create inventory receipts at the
   * given storage locations (and lot, if provided), and any `rejected_quantity` is
   * recorded as rejected without entering inventory. A delivery record is created
   * for the stocking event.
   *
   * If a line was received short of its ordered quantity, a new unstocked line is
   * created automatically for the remainder. Once every line is stocked, the order
   * is marked complete and the originating purchase order is marked fulfilled.
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
   *           allocations: [
   *             {
   *               location_id: 'lc_014d187d99b31926f0c74af9d8',
   *               quantity: '100',
   *             },
   *           ],
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
   * Voids a receiving order, resetting all receiving progress.
   *
   * Every line's received quantity is reset to `0` and its stocked state is cleared,
   * extra lines created for short receipts are removed (leaving one line per
   * purchase order line), and the order returns to open. The receiving order itself
   * is not deleted.
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
 * A portion of a line's accepted quantity placed at a storage location.
 */
export interface AllocationRequest {
  /**
   * Quantity to allocate, as a decimal string.
   */
  quantity: string;

  /**
   * ID of the storage location to put the quantity away at.
   *
   * When omitted, the inventory receipt is created without a storage location.
   */
  location_id?: string;
}

/**
 * Stocking details for one receiving order line.
 */
export interface StockLineItemRequest {
  /**
   * Storage allocations for the accepted quantity.
   *
   * Each allocation creates an inventory receipt for the given quantity at the given
   * location.
   */
  allocations: Array<AllocationRequest>;

  /**
   * ID of the receiving order line being stocked.
   */
  receiving_order_line_id: string;

  /**
   * Lot number to record for the received inventory.
   *
   * A lot is created for the line's item if one with this number does not already
   * exist. Applies to every allocation and any rejected quantity on this line item.
   */
  lot_number?: string;

  /**
   * Quantity rejected on inspection, as a decimal string.
   *
   * Rejected quantity is recorded on the delivery but is not stocked into inventory.
   */
  rejected_quantity?: string;
}

/**
 * Request to stock a receiving order.
 */
export interface StockReceivingOrderRequest {
  /**
   * Per-line stocking details: storage allocations, optional lot number, and any
   * rejected quantity.
   *
   * Lines not listed here are still marked as stocked, but produce no inventory
   * receipts.
   */
  line_items: Array<StockLineItemRequest>;
}

export interface ActionStockParams {
  /**
   * Per-line stocking details: storage allocations, optional lot number, and any
   * rejected quantity.
   *
   * Lines not listed here are still marked as stocked, but produce no inventory
   * receipts.
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
