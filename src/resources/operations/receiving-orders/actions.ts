// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReceivingOrdersAPI from './receiving-orders';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Actions extends APIResource {
  /**
   * Records the full outstanding quantity as received on every purchase order line
   * of a receiving order.
   *
   * For each purchase order line with an unstocked receiving line, the oldest such
   * line is set, in the ordered unit, to the ordered quantity less what the order
   * line's other receiving lines already hold, stocked or not. Lines that already
   * hold at least that much, and order lines already covered, are left as they are.
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
  receive(
    id: string,
    params: ActionReceiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrder> {
    const { include } = params ?? {};
    return this._client.put(path`/v1/operations/receiving-orders/${id}/actions/receive`, {
      query: { include },
      ...options,
    });
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
   * Each entry must name a line of this order that is being stocked now, at most
   * once, each allocation must be at one of the account's storage locations, and its
   * allocations and refusal together may not exceed the quantity received on that
   * line. Otherwise the request is refused and nothing is stocked.
   *
   * The newly received stock is then applied to any open inventory issues for the
   * same item, oldest first, so demand already waiting on the item is satisfied
   * automatically.
   *
   * If a purchase order line is still short once everything against it is stocked, a
   * new unstocked line is opened for it at a quantity of `0`, in the ordered unit,
   * for the rest to be received against. Once every line is stocked, the order is
   * marked complete and the originating purchase order is marked fulfilled.
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
   *               quantity: {
   *                 value: '100',
   *                 unit_id: 'un_82bd37dae5po',
   *               },
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
    params: ActionStockParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrder> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/operations/receiving-orders/${id}/actions/stock`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Voids a receiving order, resetting all receiving progress.
   *
   * Every line's received quantity is reset to `0` and its stocked state is cleared,
   * the extra lines created for short receipts are removed so that one line per
   * purchase order line remains, and the order returns to open. A line a delivery
   * was recorded against is never removed, so the delivery keeps its line. The
   * receiving order itself is not deleted, and it can be received and stocked again
   * from scratch.
   *
   * A receiving order that has already been marked complete is only reopened: its
   * lines keep their received quantities and stay marked as stocked, and none is
   * removed.
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
  void(
    id: string,
    params: ActionVoidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrder> {
    const { include } = params ?? {};
    return this._client.put(path`/v1/operations/receiving-orders/${id}/actions/void`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * A portion of a line's accepted quantity placed at a storage location.
 */
export interface AllocationRequest {
  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * ID of the storage location to put the quantity away at. It must be one of the
   * account's storage locations.
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
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  rejected_quantity?: CustomersAPI.QuantityInput;
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

export interface ActionReceiveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'supplier'
    | 'totals'
    | 'related'
    | 'related.purchase_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.item.category'
    | 'lines.item.category.unit_group'
    | 'lines.item.category.unit_group.base_unit'
    | 'lines.item.category.unit_group.associated_units'
    | 'lines.item.category.unit_group.associated_units.unit'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
  >;
}

export interface ActionStockParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'supplier'
    | 'totals'
    | 'related'
    | 'related.purchase_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.item.category'
    | 'lines.item.category.unit_group'
    | 'lines.item.category.unit_group.base_unit'
    | 'lines.item.category.unit_group.associated_units'
    | 'lines.item.category.unit_group.associated_units.unit'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
  >;

  /**
   * Body param: Per-line stocking details: where to put the goods away, which lot to
   * record them under, and how much was refused on inspection.
   *
   * Unstocked lines left out of this list are still marked as stocked, but nothing
   * is added to inventory for them and they contribute no delivery lines.
   */
  line_items?: Array<StockLineItemRequest>;
}

export interface ActionVoidParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'supplier'
    | 'totals'
    | 'related'
    | 'related.purchase_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.item.category'
    | 'lines.item.category.unit_group'
    | 'lines.item.category.unit_group.base_unit'
    | 'lines.item.category.unit_group.associated_units'
    | 'lines.item.category.unit_group.associated_units.unit'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
  >;
}

export declare namespace Actions {
  export {
    type AllocationRequest as AllocationRequest,
    type StockLineItemRequest as StockLineItemRequest,
    type StockReceivingOrderRequest as StockReceivingOrderRequest,
    type ActionReceiveParams as ActionReceiveParams,
    type ActionStockParams as ActionStockParams,
    type ActionVoidParams as ActionVoidParams,
  };
}
