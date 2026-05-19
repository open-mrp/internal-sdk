// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LinesAPI from './lines';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Actions extends APIResource {
  /**
   * Marks a receiving order line as received.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.actions.updateReceive(
   *     'id',
   *     { receiving_order_id: 'receiving_order_id' },
   *   );
   * ```
   */
  updateReceive(
    id: string,
    params: ActionUpdateReceiveParams,
    options?: RequestOptions,
  ): APIPromise<LinesAPI.ReceivingOrderLine> {
    const { receiving_order_id } = params;
    return this._client.put(
      path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}/actions/receive`,
      options,
    );
  }

  /**
   * Voids a receiving order line.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.actions.updateVoid(
   *     'id',
   *     { receiving_order_id: 'receiving_order_id' },
   *   );
   * ```
   */
  updateVoid(
    id: string,
    params: ActionUpdateVoidParams,
    options?: RequestOptions,
  ): APIPromise<LinesAPI.ReceivingOrderLine> {
    const { receiving_order_id } = params;
    return this._client.put(
      path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}/actions/void`,
      options,
    );
  }
}

export interface ActionUpdateReceiveParams {
  /**
   * Receiving order ID.
   */
  receiving_order_id: string;
}

export interface ActionUpdateVoidParams {
  /**
   * Receiving order ID.
   */
  receiving_order_id: string;
}

export declare namespace Actions {
  export {
    type ActionUpdateReceiveParams as ActionUpdateReceiveParams,
    type ActionUpdateVoidParams as ActionUpdateVoidParams,
  };
}
