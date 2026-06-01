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
   *     sales_order_ids: ['or_01d5034136c3ccc048abecc312'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/sales/sales-orders/actions/bulk-delete', { body, ...options });
  }

  /**
   * Changes the status of a sales order. Supported actions: issue, unissue, close,
   * and open.
   *
   * @example
   * ```ts
   * const salesOrderDetail =
   *   await client.sales.salesOrders.actions.changeStatus(
   *     'or_01d5034136c3ccc048abecc312',
   *     { send_email: true, status_change: 'issue' },
   *   );
   * ```
   */
  changeStatus(
    id: string,
    params: ActionChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrderDetail> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/change-status`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Creates a production run from a sales order.
   *
   * @example
   * ```ts
   * const createProductionRunResponse =
   *   await client.sales.salesOrders.actions.createProductionRun(
   *     'or_01d5034136c3ccc048abecc312',
   *   );
   * ```
   */
  createProductionRun(id: string, options?: RequestOptions): APIPromise<CreateProductionRunResponse> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/actions/create-production-run`, options);
  }
}

/**
 * Request to bulk delete sales orders.
 */
export interface BulkDeleteSalesOrdersRequest {
  /**
   * Sales order IDs.
   */
  sales_order_ids: Array<string>;
}

/**
 * Request to change the status of a sales order.
 */
export interface ChangeSalesOrderStatusRequest {
  /**
   * Whether to send a notification email.
   */
  send_email: boolean;

  /**
   * Status change action (e.g., "issue", "unissue", "close", "open").
   */
  status_change: string;
}

/**
 * Result of creating a production run.
 */
export interface CreateProductionRunResponse {
  /**
   * Lightweight reference to a production run.
   */
  production_run: CreateProductionRunResponseRef;
}

/**
 * Lightweight reference to a production run.
 */
export interface CreateProductionRunResponseRef {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Sales order IDs.
   */
  sales_order_ids: Array<string>;
}

export interface ActionChangeStatusParams {
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
    type BulkDeleteSalesOrdersRequest as BulkDeleteSalesOrdersRequest,
    type ChangeSalesOrderStatusRequest as ChangeSalesOrderStatusRequest,
    type CreateProductionRunResponse as CreateProductionRunResponse,
    type CreateProductionRunResponseRef as CreateProductionRunResponseRef,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionChangeStatusParams as ActionChangeStatusParams,
  };
}
