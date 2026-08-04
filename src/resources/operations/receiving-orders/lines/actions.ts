// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DeliveriesAPI from '../../deliveries';
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
   * Sets the line's quantity to what is still outstanding on its purchase order line
   * — the ordered quantity less everything already recorded across the receiving
   * lines for that order line — and returns the line unchanged when nothing is
   * outstanding. Nothing enters inventory; use Stock Receiving Order to put the
   * received quantity away.
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
  ): APIPromise<DeliveriesAPI.ReceivingOrderLine> {
    const { receiving_order_id } = params;
    return this._client.put(
      path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}/actions/receive`,
      options,
    );
  }

  /**
   * Voids a single receiving order line, resetting its receiving progress.
   *
   * The line's received quantity is reset to `0` and its stocked state is cleared,
   * leaving the rest of the order untouched. The line itself is not deleted, and any
   * inventory already stocked from it is not reversed.
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
  ): APIPromise<DeliveriesAPI.ReceivingOrderLine> {
    const { receiving_order_id } = params;
    return this._client.put(
      path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}/actions/void`,
      options,
    );
  }
}

export interface ActionReceiveParams {
  /**
   * Receiving order ID.
   */
  receiving_order_id: string;
}

export interface ActionVoidParams {
  /**
   * Receiving order ID.
   */
  receiving_order_id: string;
}

export declare namespace Actions {
  export { type ActionReceiveParams as ActionReceiveParams, type ActionVoidParams as ActionVoidParams };
}
