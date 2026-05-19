// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AccountsAPI from '../../identity/accounts';
import * as ActionsAPI from './actions';
import { ActionStockParams, Actions } from './actions';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import * as LinesAPI from './lines/lines';
import { LineUpdateParams, Lines as LinesAPILines, ReceivingOrderLine } from './lines/lines';
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
   *     'rcor_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * const response =
   *   await client.operations.receivingOrders.retrieveReceivingOrders();
   * ```
   */
  retrieveReceivingOrders(
    query: ReceivingOrderRetrieveReceivingOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReceivingOrderRetrieveReceivingOrdersResponse> {
    return this._client.get('/v1/operations/receiving-orders', { query, ...options });
  }
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
  lines: ReceivingOrder.Lines | null;

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
  supplier: AccountsAPI.Account | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

export namespace ReceivingOrder {
  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<LinesAPI.ReceivingOrderLine>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ReceivingOrderRetrieveReceivingOrdersResponse {
  /**
   * Resources in this page.
   */
  data: Array<ReceivingOrderRetrieveReceivingOrdersResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ReceivingOrderRetrieveReceivingOrdersResponse {
  /**
   * Receiving order summary for list views.
   */
  export interface Data {
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
    supplier: AccountsAPI.Account | null;

    /**
     * Timestamp when the receiving order was last updated.
     */
    updated_at: string;
  }
}

export interface ReceivingOrderRetrieveReceivingOrdersParams {
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
ReceivingOrders.Lines = LinesAPILines;

export declare namespace ReceivingOrders {
  export {
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderRetrieveReceivingOrdersResponse as ReceivingOrderRetrieveReceivingOrdersResponse,
    type ReceivingOrderRetrieveReceivingOrdersParams as ReceivingOrderRetrieveReceivingOrdersParams,
  };

  export { Actions as Actions, type ActionStockParams as ActionStockParams };

  export {
    LinesAPILines as Lines,
    type ReceivingOrderLine as ReceivingOrderLine,
    type LineUpdateParams as LineUpdateParams,
  };
}
