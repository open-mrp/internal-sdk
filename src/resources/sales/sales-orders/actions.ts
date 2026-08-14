// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
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
   * Each order is torn down exactly as it would be by deleting it on its own.
   * Fulfilled orders cannot be deleted; if any requested order fails this check, no
   * orders are deleted.
   *
   * This endpoint requires the permission: `sales_orders:delete`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.salesOrders.actions.bulkDelete({
   *     sales_order_ids: ['or_9lqo07quiwyb'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/sales/sales-orders/actions/bulk-delete', { body, ...options });
  }

  /**
   * Closes a sales order, transitioning it from `issued` to `fulfilled`.
   *
   * Stamps the order's completion timestamp and closes its pick, packing every pick
   * line that is still open so the pick reads as complete alongside the order. Only
   * an order in `issued` can be closed, and once it is fulfilled it can no longer be
   * deleted, nor can its lines be removed, until it is reopened.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.close(
   *     'or_9lqo07quiwyb',
   *   );
   * ```
   */
  close(id: string, options?: RequestOptions): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/close`, options);
  }

  /**
   * Creates a production run from a sales order.
   *
   * Walks the production flow behind each item-backed line to work out what actually
   * has to be made, then creates one batch for each item that is produced directly
   * from raw materials, sized to cover every line that needs it. Reserves the
   * material inventory those batches consume and links the run to the order. The
   * caller becomes the run's responsible user. An order can have at most one
   * production run, and a line whose item has no production flow contributes no
   * batches.
   *
   * This endpoint requires the permission: `production_runs:create`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.sales.salesOrders.actions.createProductionRun(
   *     'or_9lqo07quiwyb',
   *   );
   * ```
   */
  createProductionRun(
    id: string,
    params: ActionCreateProductionRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionRun> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/sales/sales-orders/${id}/actions/create-production-run`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Issues a sales order, transitioning it from `estimate` to `issued`.
   *
   * Issuing commits the order for fulfillment: a pick is created for the order's
   * sale lines and inventory is reserved for each line tied to an inventory item.
   * Only an order still in `estimate` can be issued.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.issue(
   *     'or_9lqo07quiwyb',
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
   * Clears the order's completion timestamp and reopens its pick, unpacking every
   * pick line that is not yet fully picked so the outstanding work can be resumed;
   * lines already picked in full stay packed. Only an order in `fulfilled` can be
   * reopened.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.open(
   *     'or_9lqo07quiwyb',
   *   );
   * ```
   */
  open(id: string, options?: RequestOptions): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/open`, options);
  }

  /**
   * Re-estimates the freight (shipping) charge for an order using the latest carrier
   * rates.
   *
   * Computes what the order's freight charge would be from its current ship-to
   * address, carrier, service level, and line items — applying the same
   * freight-exemption, flat-rate, and live carrier-rate logic used when the order is
   * created. The order is not modified: the returned amount is a quote to review,
   * and callers apply it by updating the order's shipping line. Use this to refresh
   * freight after changing the address or line items, or at any time to re-price
   * against current rates.
   *
   * This endpoint requires the permission: `sales_orders:read`.
   *
   * @example
   * ```ts
   * const quoteSalesOrderFreightResponse =
   *   await client.sales.salesOrders.actions.quoteFreight(
   *     'or_9lqo07quiwyb',
   *   );
   * ```
   */
  quoteFreight(id: string, options?: RequestOptions): APIPromise<QuoteSalesOrderFreightResponse> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/actions/quote-freight`, options);
  }

  /**
   * Unissues a sales order, transitioning it from `issued` back to `estimate`.
   *
   * Deletes the order's pick, discarding any picking progress recorded against it,
   * and releases the inventory reserved when the order was issued. Only an order in
   * `issued` can be unissued.
   *
   * This endpoint requires the permission: `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrder =
   *   await client.sales.salesOrders.actions.unissue(
   *     'or_9lqo07quiwyb',
   *   );
   * ```
   */
  unissue(id: string, options?: RequestOptions): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/unissue`, options);
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
 * Request to issue a sales order.
 */
export interface IssueSalesOrderRequest {
  /**
   * Whether to notify the customer.
   *
   * When `true`, an order acknowledgement email with a PDF of the order is sent to
   * the acknowledgement contacts on the order and the order's
   * `acknowledgment_status` becomes `sent`. An order with no acknowledgement
   * contacts sends nothing and leaves its `acknowledgment_status` unchanged.
   */
  notify_customer: boolean;
}

/**
 * A production run: the group of shop-floor batches that are executed together,
 * tracked from the first batch scan through to completion.
 */
export interface ProductionRun {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Number of batches currently recorded against this run.
   */
  batch_count: number;

  /**
   * Time the run finished production.
   *
   * Set automatically once every batch in the run has been scanned or deleted. From
   * that point the run can no longer be updated and no further batches can be added
   * to it.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Production run number, unique per account.
   *
   * Assigned automatically at creation as the next sequential number for the
   * account; can be changed via update.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Time the run started production.
   *
   * Set automatically the first time a batch in the run is scanned at a station.
   */
  started_at: string | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * The freshly estimated freight charge for a sales order.
 */
export interface QuoteSalesOrderFreightResponse {
  /**
   * Resource type identifier.
   */
  object: 'sales_order_freight_quote';

  /**
   * A rate calculated on demand rather than stored.
   *
   * The same shape as a rate minus the fields only a persisted row can have: it
   * carries no ID and no timestamps because nothing was written. Used where a figure
   * is derived per request, such as an analysis comparing one customer's price
   * against the median other customers pay.
   */
  unit_price: AnalyticsAPI.ComputedRate | null;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * IDs of the sales orders to delete.
   */
  sales_order_ids: Array<string>;
}

export interface ActionCreateProductionRunParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user'>;
}

export interface ActionIssueParams {
  /**
   * Whether to notify the customer.
   *
   * When `true`, an order acknowledgement email with a PDF of the order is sent to
   * the acknowledgement contacts on the order and the order's
   * `acknowledgment_status` becomes `sent`. An order with no acknowledgement
   * contacts sends nothing and leaves its `acknowledgment_status` unchanged.
   */
  notify_customer: boolean;
}

export declare namespace Actions {
  export {
    type BulkDeleteSalesOrdersRequest as BulkDeleteSalesOrdersRequest,
    type IssueSalesOrderRequest as IssueSalesOrderRequest,
    type ProductionRun as ProductionRun,
    type QuoteSalesOrderFreightResponse as QuoteSalesOrderFreightResponse,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionCreateProductionRunParams as ActionCreateProductionRunParams,
    type ActionIssueParams as ActionIssueParams,
  };
}
