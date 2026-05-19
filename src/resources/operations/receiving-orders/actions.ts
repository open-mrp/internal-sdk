// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReceivingOrdersAPI from './receiving-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Actions extends APIResource {
  /**
   * Stocks a receiving order by allocating line items to storage locations.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.stock(
   *     '',
   *     {
   *       line_items: [
   *         {
   *           receiving_order_line_id:
   *             'rcorln_01jm4r6700f8nwq3v5hx2d9ktp',
   *           allocations: [
   *             {
   *               location_id: 'lc_01gf7a8200er3ar3pkfrb6kk30',
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
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrder> {
    return this._client.post(path`/v1/operations/receiving-orders/${id}/actions/stock`, { body, ...options });
  }

  /**
   * Marks all unstocked lines on a receiving order as received.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.updateReceive(
   *     'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  updateReceive(id: string, options?: RequestOptions): APIPromise<ReceivingOrdersAPI.ReceivingOrder> {
    return this._client.put(path`/v1/operations/receiving-orders/${id}/actions/receive`, options);
  }

  /**
   * Voids a receiving order, cancelling all lines.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.actions.updateVoid(
   *     'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  updateVoid(id: string, options?: RequestOptions): APIPromise<ReceivingOrdersAPI.ReceivingOrder> {
    return this._client.put(path`/v1/operations/receiving-orders/${id}/actions/void`, options);
  }
}

export interface ActionStockParams {
  /**
   * Line items to stock with allocation details.
   */
  line_items: Array<ActionStockParams.LineItem>;
}

export namespace ActionStockParams {
  /**
   * Line item in a stocking request.
   */
  export interface LineItem {
    /**
     * Storage allocations for this line item.
     */
    allocations: Array<LineItem.Allocation>;

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

  export namespace LineItem {
    /**
     * Storage allocation.
     */
    export interface Allocation {
      /**
       * Quantity to allocate.
       */
      quantity: string;

      /**
       * Location ID to allocate to.
       */
      location_id?: string;
    }
  }
}

export declare namespace Actions {
  export { type ActionStockParams as ActionStockParams };
}
