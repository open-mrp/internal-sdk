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
   * Each unstocked line's quantity is set to what is still outstanding on its
   * purchase order line — the ordered quantity less everything already stocked
   * against that line — and lines with nothing outstanding are left as they are.
   * Nothing enters inventory and no delivery is recorded; use Stock Receiving Order
   * to put the received quantities away.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.receive(
   *     'rcor_iy0usuxcrjj8',
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
   * entry in `line_items`, the allocations create inventory receipts at the given
   * storage locations (and lot, if one was given), and any `rejected_quantity` is
   * recorded as refused without entering inventory. One delivery is recorded for the
   * whole stocking event, with a line per allocation and a line per refused
   * quantity.
   *
   * The newly received stock is then applied to any open inventory issues for the
   * same item, oldest first, so demand already waiting on the item is satisfied
   * automatically.
   *
   * If a line was received short of its ordered quantity, a new unstocked line is
   * created automatically for the remainder. Once every line is stocked, the order
   * is marked complete and the originating purchase order is marked fulfilled.
   *
   * A receiving order with no unstocked, non-zero lines is returned untouched: no
   * delivery is recorded and no inventory is created.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.stock(
   *     'rcor_iy0usuxcrjj8',
   *     {
   *       line_items: [
   *         {
   *           receiving_order_line_id: 'rcorln_7f39n28j00fr',
   *           allocations: [
   *             {
   *               location_id: 'lc_yonnys0hx3ju',
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
    body: ActionStockParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.ReceivingOrder> {
    return this._client.post(path`/v1/operations/receiving-orders/${id}/actions/stock`, { body, ...options });
  }

  /**
   * Voids a receiving order, resetting all receiving progress.
   *
   * Every line's received quantity is reset to `0` and its stocked state is cleared,
   * the extra lines created for short receipts are removed so that one line per
   * purchase order line remains, and the order returns to open. The receiving order
   * itself is not deleted, and it can be received and stocked again from scratch.
   *
   * A receiving order that has already been marked complete is only reopened: the
   * extra lines are still removed, but the lines that remain keep their received
   * quantities and stay marked as stocked.
   *
   * Deliveries and inventory received by earlier stocking are not reversed — voiding
   * only reopens the receiving order.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.void(
   *     'rcor_iy0usuxcrjj8',
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
   * ID of the receiving order line being stocked.
   */
  receiving_order_line_id: string;

  /**
   * Storage allocations for the quantity being accepted.
   *
   * Each allocation creates an inventory receipt for the given quantity at the given
   * location, so a single line can be split across several locations.
   */
  allocations?: Array<AllocationRequest>;

  /**
   * Lot number to record for the received goods.
   *
   * A lot is created for the line's item if one with this number does not already
   * exist for it. The lot applies to every allocation and to any rejected quantity
   * on this line item.
   */
  lot_number?: string;

  /**
   * Quantity refused on inspection, as a decimal string.
   *
   * The refused quantity is recorded on the delivery and on the receiving order
   * line's `rejected_quantity`, but never enters inventory.
   */
  rejected_quantity?: string;
}

/**
 * Request to stock a receiving order.
 */
export interface StockReceivingOrderRequest {
  /**
   * Per-line stocking details: where to put the goods away, which lot to record them
   * under, and how much was refused on inspection.
   *
   * Unstocked lines left out of this list are still marked as stocked, but nothing
   * is added to inventory for them and they contribute no delivery lines.
   */
  line_items?: Array<StockLineItemRequest>;
}

export interface ActionStockParams {
  /**
   * Per-line stocking details: where to put the goods away, which lot to record them
   * under, and how much was refused on inspection.
   *
   * Unstocked lines left out of this list are still marked as stocked, but nothing
   * is added to inventory for them and they contribute no delivery lines.
   */
  line_items?: Array<StockLineItemRequest>;
}

export declare namespace Actions {
  export {
    type AllocationRequest as AllocationRequest,
    type StockLineItemRequest as StockLineItemRequest,
    type StockReceivingOrderRequest as StockReceivingOrderRequest,
    type ActionStockParams as ActionStockParams,
  };
}
