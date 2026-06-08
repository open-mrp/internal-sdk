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
   * Marks a receiving order line as received.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.actions.receive(
   *     'orln_0142f9b74268973450b3a76ce3',
   *     {
   *       receiving_order_id: 'rcor_016911ec6c634a298b3dc1798e',
   *     },
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
   * Voids a receiving order line.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.actions.void(
   *     'orln_0142f9b74268973450b3a76ce3',
   *     {
   *       receiving_order_id: 'rcor_016911ec6c634a298b3dc1798e',
   *     },
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
