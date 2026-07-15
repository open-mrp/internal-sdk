// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   *   );
   * ```
   */
  close(id: string, options?: RequestOptions): APIPromise<SalesOrdersAPI.SalesOrder> {
    return this._client.put(path`/v1/sales/sales-orders/${id}/actions/close`, options);
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
   * const productionRun =
   *   await client.sales.salesOrders.actions.createProductionRun(
   *     'or_01d5034136c3ccc048abecc312',
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
   *     'or_01d5034136c3ccc048abecc312',
   *   );
   * ```
   */
  quoteFreight(id: string, options?: RequestOptions): APIPromise<QuoteSalesOrderFreightResponse> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/actions/quote-freight`, options);
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
   * When `true`, the order acknowledgement email is sent to the contacts configured
   * on the order and the order's `acknowledgment_status` is set to `sent`.
   */
  notify_customer: boolean;
}

/**
 * Production run resource.
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
   * Time the run was marked complete.
   *
   * Set automatically once every batch in the run has been scanned or deleted, and
   * unset while the run is still in progress. Once set, the run can no longer be
   * updated and new batches can no longer be added.
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
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Time the run started production.
   *
   * Set automatically when the first batch in the run is scanned, and unset until
   * then.
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
   * A per-unit rate on a sales-order quote.
   *
   * A lightweight, unpersisted variant of a rate: it carries no ID or timestamps
   * because a quote is computed on demand and never stored.
   */
  unit_price: SalesOrdersAPI.SalesOrderQuoteRate | null;
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
   * When `true`, the order acknowledgement email is sent to the contacts configured
   * on the order and the order's `acknowledgment_status` is set to `sent`.
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
