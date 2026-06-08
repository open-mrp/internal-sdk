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
   * @example
   * ```ts
   * const receivingOrder =
   *   await client.operations.receivingOrders.retrieve(
   *     'rcor_016911ec6c634a298b3dc1798e',
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
   * Returns a paginated list of receiving orders for the current account.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'supplier' | 'purchase_order'>;

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
