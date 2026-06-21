// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DeliveriesAPI from '../../deliveries';
import * as ActionsAPI from './actions';
import { ActionReceiveParams, ActionVoidParams, Actions } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Lines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Updates the received quantity on a receiving order line.
   *
   * Use this to record the quantity actually received — for example a partial
   * delivery — before stocking the order.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.update(
   *     'orln_0142f9b74268973450b3a76ce3',
   *     {
   *       receiving_order_id: 'rcor_016911ec6c634a298b3dc1798e',
   *       quantity_value: '50',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.ReceivingOrderLine> {
    const { receiving_order_id, ...body } = params;
    return this._client.patch(path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}`, {
      body,
      ...options,
    });
  }
}

/**
 * Request to update a receiving order line's quantity.
 */
export interface UpdateReceivingOrderLineRequest {
  /**
   * New received quantity for the line, as a decimal string.
   *
   * When omitted, the line is returned unchanged.
   */
  quantity_value?: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Receiving order ID.
   */
  receiving_order_id: string;

  /**
   * Body param: New received quantity for the line, as a decimal string.
   *
   * When omitted, the line is returned unchanged.
   */
  quantity_value?: string;
}

Lines.Actions = Actions;

export declare namespace Lines {
  export {
    type UpdateReceivingOrderLineRequest as UpdateReceivingOrderLineRequest,
    type LineUpdateParams as LineUpdateParams,
  };

  export {
    Actions as Actions,
    type ActionReceiveParams as ActionReceiveParams,
    type ActionVoidParams as ActionVoidParams,
  };
}
