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
   * Deletes multiple sales orders in a single atomic operation.
   *
   * Fulfilled orders cannot be deleted; if any requested order fails this check, no
   * orders are deleted.
   *
   * This endpoint requires the permission: `sales_orders:delete`.
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
   * Closes a sales order, transitioning it from `issued` to `fulfilled`.
   *
   * Sets the order's completion timestamp and marks its pick as finished.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.close(
   *     'or_01d5034136c3ccc048abecc312',
   *     { notify_customer: false },
   *   );
   * ```
   */
  close(
    id: string,
    body: ActionCloseParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/close`, { body, ...options });
  }

  /**
   * Creates a production run from a sales order.
   *
   * Creates a batch for each of the order's item-backed lines, reserves the material
   * inventory required to produce them, and links the run to the order. An order can
   * have at most one production run.
   *
   * This endpoint requires the permission: `production_runs:create`.
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

  /**
   * Issues a sales order, transitioning it from `estimate` to `issued`.
   *
   * Issuing commits the order for fulfillment: a pick is created for the order's
   * sale lines and inventory is reserved for each line tied to an inventory item.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.issue(
   *     'or_01d5034136c3ccc048abecc312',
   *     { notify_customer: true },
   *   );
   * ```
   */
  issue(
    id: string,
    body: ActionIssueParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/issue`, { body, ...options });
  }

  /**
   * Reopens a sales order, transitioning it from `fulfilled` back to `issued`.
   *
   * Clears the order's completion timestamp and marks its pick as unfinished.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.open(
   *     'or_01d5034136c3ccc048abecc312',
   *     { notify_customer: false },
   *   );
   * ```
   */
  open(id: string, body: ActionOpenParams, options?: RequestOptions): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/open`, { body, ...options });
  }

  /**
   * Unissues a sales order, transitioning it from `issued` back to `estimate`.
   *
   * Deletes the order's pick and releases any inventory reserved when the order was
   * issued.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.unissue(
   *     'or_01d5034136c3ccc048abecc312',
   *     { notify_customer: false },
   *   );
   * ```
   */
  unissue(
    id: string,
    body: ActionUnissueParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/unissue`, { body, ...options });
  }
}

/**
 * Request to bulk delete sales orders.
 */
export interface BulkDeleteSalesOrdersRequest {
  /**
   * IDs of the sales orders to delete.
   */
  sales_order_ids: Array<string>;
}

/**
 * Request to close a sales order.
 */
export interface CloseSalesOrderRequest {
  /**
   * Whether to notify the customer.
   *
   * Reserved for future use; no notification email is currently sent for this
   * action.
   */
  notify_customer: boolean;
}

/**
 * Result of creating a production run.
 */
export interface CreateProductionRunResponse {
  /**
   * Resource type identifier.
   */
  object: 'create_production_run_response';

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

/**
 * Request to issue a sales order.
 */
export interface IssueSalesOrderRequest {
  /**
   * Whether to notify the customer.
   *
   * When `true`, the order acknowledgement email is sent to the contacts configured
   * on the order and the order's `acknowledgment_status` is set to `sent`.
   */
  notify_customer: boolean;
}

/**
 * Request to reopen a sales order.
 */
export interface OpenSalesOrderRequest {
  /**
   * Whether to notify the customer.
   *
   * Reserved for future use; no notification email is currently sent for this
   * action.
   */
  notify_customer: boolean;
}

/**
 * Request to unissue a sales order.
 */
export interface UnissueSalesOrderRequest {
  /**
   * Whether to notify the customer.
   *
   * Reserved for future use; no notification email is currently sent for this
   * action.
   */
  notify_customer: boolean;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * IDs of the sales orders to delete.
   */
  sales_order_ids: Array<string>;
}

export interface ActionCloseParams {
  /**
   * Whether to notify the customer.
   *
   * Reserved for future use; no notification email is currently sent for this
   * action.
   */
  notify_customer: boolean;
}

export interface ActionIssueParams {
  /**
   * Whether to notify the customer.
   *
   * When `true`, the order acknowledgement email is sent to the contacts configured
   * on the order and the order's `acknowledgment_status` is set to `sent`.
   */
  notify_customer: boolean;
}

export interface ActionOpenParams {
  /**
   * Whether to notify the customer.
   *
   * Reserved for future use; no notification email is currently sent for this
   * action.
   */
  notify_customer: boolean;
}

export interface ActionUnissueParams {
  /**
   * Whether to notify the customer.
   *
   * Reserved for future use; no notification email is currently sent for this
   * action.
   */
  notify_customer: boolean;
}

export declare namespace Actions {
  export {
    type BulkDeleteSalesOrdersRequest as BulkDeleteSalesOrdersRequest,
    type CloseSalesOrderRequest as CloseSalesOrderRequest,
    type CreateProductionRunResponse as CreateProductionRunResponse,
    type CreateProductionRunResponseRef as CreateProductionRunResponseRef,
    type IssueSalesOrderRequest as IssueSalesOrderRequest,
    type OpenSalesOrderRequest as OpenSalesOrderRequest,
    type UnissueSalesOrderRequest as UnissueSalesOrderRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionCloseParams as ActionCloseParams,
    type ActionIssueParams as ActionIssueParams,
    type ActionOpenParams as ActionOpenParams,
    type ActionUnissueParams as ActionUnissueParams,
  };
}
