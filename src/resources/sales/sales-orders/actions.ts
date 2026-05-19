// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SalesOrdersAPI from './sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete sales orders.
 */
export class Actions extends APIResource {
  /**
   * Deletes multiple sales orders in a single operation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.salesOrders.actions.bulkDelete({
   *     sales_order_ids: ['or_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/sales/sales-orders/actions/bulk-delete', { body, ...options });
  }

  /**
   * Creates a production run from a sales order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.salesOrders.actions.createProductionRun(
   *     'or_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  createProductionRun(id: string, options?: RequestOptions): APIPromise<ActionCreateProductionRunResponse> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/actions/create-production-run`, options);
  }

  /**
   * Changes the status of a sales order. Supported actions: issue, unissue, close,
   * and open.
   *
   * @example
   * ```ts
   * const salesOrderDetail =
   *   await client.sales.salesOrders.actions.updateChangeStatus(
   *     'or_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { send_email: true, status_change: 'issue' },
   *   );
   * ```
   */
  updateChangeStatus(
    id: string,
    params: ActionUpdateChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrderDetail> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/change-status`, {
      query: { include },
      body,
      ...options,
    });
  }
}

export interface ActionBulkDeleteResponse {}

/**
 * Result of creating a production run.
 */
export interface ActionCreateProductionRunResponse {
  /**
   * Lightweight reference to a production run.
   */
  production_run: ActionCreateProductionRunResponse.ProductionRun;
}

export namespace ActionCreateProductionRunResponse {
  /**
   * Lightweight reference to a production run.
   */
  export interface ProductionRun {
    /**
     * Production run ID.
     */
    id: string;

    /**
     * Resource type identifier.
     */
    object: 'production_run';
  }
}

export interface ActionBulkDeleteParams {
  /**
   * Sales order IDs.
   */
  sales_order_ids: Array<string>;
}

export interface ActionUpdateChangeStatusParams {
  /**
   * Body param: Whether to send a notification email.
   */
  send_email: boolean;

  /**
   * Body param: Status change action (e.g., "issue", "unissue", "close", "open").
   */
  status_change: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'customer'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'carrier'
    | 'service_level'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'lines'
    | 'lines.item'
  >;
}

export declare namespace Actions {
  export {
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionCreateProductionRunResponse as ActionCreateProductionRunResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionUpdateChangeStatusParams as ActionUpdateChangeStatusParams,
  };
}
