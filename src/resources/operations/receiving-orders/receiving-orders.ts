// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionStockParams,
  Actions,
  AllocationRequest,
  StockLineItemRequest,
  StockReceivingOrderRequest,
} from './actions';
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
   * This endpoint requires the permission: `receiving_orders:read`.
   *
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.retrieve(
   *     'rcor_iy0usuxcrjj8',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ReceivingOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.ReceivingOrder> {
    return this._client.get(path`/v1/operations/receiving-orders/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of receiving orders for the current account, newest
   * first.
   *
   * Only open (incomplete) orders are returned by default; pass `status` to change
   * this.
   *
   * This endpoint requires the permission: `receiving_orders:read`.
   *
   * @example
   * ```ts
   * const listReceivingOrder =
   *   await client.operations.receivingOrders.list();
   * ```
   */
  list(
    query: ReceivingOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListReceivingOrder> {
    return this._client.get('/v1/operations/receiving-orders', { query, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListReceivingOrder {
  /**
   * Resources in this page.
   */
  data: Array<DeliveriesAPI.ReceivingOrder>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

export interface ReceivingOrderRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'supplier' | 'purchase_order' | 'lines' | 'lines.order_line'>;
}

export interface ReceivingOrderListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only return orders created on or before this date (`YYYY-MM-DD`), covering that
   * whole day.
   */
  ends_at?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'supplier' | 'purchase_order' | 'lines' | 'lines.order_line'>;

  /**
   * Filter to orders that have at least one line for any of the given item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only return orders created on or after this date (`YYYY-MM-DD`).
   */
  starts_at?: string;

  /**
   * Filter by completion status.
   *
   * Completed orders are hidden when this is omitted.
   */
  status?: 'open' | 'completed' | 'all';

  /**
   * Filter to orders whose originating purchase order was placed with any of the
   * given supplier account IDs.
   */
  supplier_ids?: Array<string>;
}

ReceivingOrders.Actions = Actions;
ReceivingOrders.Lines = Lines;

export declare namespace ReceivingOrders {
  export {
    type ListReceivingOrder as ListReceivingOrder,
    type ReceivingOrderRetrieveParams as ReceivingOrderRetrieveParams,
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
