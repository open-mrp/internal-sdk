// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionStockParams,
  Actions,
  AllocationRequest,
  StockLineItemRequest,
  StockReceivingOrderRequest,
} from './actions';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import * as LinesAPI from './lines/lines';
import { LineUpdateParams, Lines, UpdateReceivingOrderLineRequest } from './lines/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class ReceivingOrders extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);

  /**
   * Returns a receiving order by ID.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.retrieve(
   *     'rcor_016911ec6c634a298b3dc1798e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReceivingOrder> {
    return this._client.get(path`/v1/operations/receiving-orders/${id}`, options);
  }

  /**
   * Returns a paginated list of receiving orders for the current account.
   *
   * @example
   * ```ts
   * const listReceivingOrderSummary =
   *   await client.operations.receivingOrders.list();
   * ```
   */
  list(
    query: ReceivingOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListReceivingOrderSummary> {
    return this._client.get('/v1/operations/receiving-orders', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListReceivingOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<ReceivingOrderLine>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListReceivingOrderSummary {
  /**
   * Resources in this page.
   */
  data: Array<ReceivingOrderSummary>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Receiving order with lines.
 */
export interface ReceivingOrder {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed.
   */
  completed_at: string | null;

  /**
   * Timestamp when the receiving order was created.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListReceivingOrderLine | null;

  /**
   * Note on the receiving order.
   */
  note: string | null;

  /**
   * Receiving order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order';

  /**
   * Full sales order resource.
   */
  purchase_order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Account with optional branding and portal sub-resources.
   */
  supplier: APIKeysAPI.Account | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

/**
 * Line item in a receiving order.
 */
export interface ReceivingOrderLine {
  /**
   * Receiving order line ID.
   */
  id: string;

  /**
   * Timestamp when the line was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_line';

  /**
   * Full sales order line resource.
   */
  order_line: SalesOrdersAPI.SalesOrderLineDetail | null;

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  rejected_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Timestamp when the line was stocked.
   */
  stocked_at: string | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
}

/**
 * Receiving order summary for list views.
 */
export interface ReceivingOrderSummary {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed.
   */
  completed_at: string | null;

  /**
   * Completion percentage of this receiving order.
   */
  completion_percentage: number;

  /**
   * Timestamp when the receiving order was created.
   */
  created_at: string;

  /**
   * Number of lines in this receiving order.
   */
  line_count: number;

  /**
   * Receiving order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order';

  /**
   * Full sales order resource.
   */
  purchase_order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Account with optional branding and portal sub-resources.
   */
  supplier: APIKeysAPI.Account | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

export interface ReceivingOrderListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Filter by item IDs present in receiving order lines.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status.
   */
  status?: string;

  /**
   * Filter by supplier account IDs.
   */
  supplier_ids?: Array<string>;
}

ReceivingOrders.Actions = Actions;
ReceivingOrders.Lines = Lines;

export declare namespace ReceivingOrders {
  export {
    type ListReceivingOrderLine as ListReceivingOrderLine,
    type ListReceivingOrderSummary as ListReceivingOrderSummary,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderLine as ReceivingOrderLine,
    type ReceivingOrderSummary as ReceivingOrderSummary,
    type ReceivingOrderListParams as ReceivingOrderListParams,
  };

  export {
    Actions as Actions,
    type AllocationRequest as AllocationRequest,
    type StockLineItemRequest as StockLineItemRequest,
    type StockReceivingOrderRequest as StockReceivingOrderRequest,
    type ActionStockParams as ActionStockParams,
  };

  export {
    Lines as Lines,
    type UpdateReceivingOrderLineRequest as UpdateReceivingOrderLineRequest,
    type LineUpdateParams as LineUpdateParams,
  };
}
