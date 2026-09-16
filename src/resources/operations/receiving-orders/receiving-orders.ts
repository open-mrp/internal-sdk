// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as DeliveriesAPI from '../deliveries';
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
import * as SuppliersAPI from '../suppliers/suppliers';
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
  ): APIPromise<ReceivingOrder> {
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
  data: Array<ReceivingOrder>;

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

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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

/**
 * A receiving order tracks inbound inventory against an issued purchase order.
 *
 * One receiving order is created automatically when a purchase order is issued,
 * with one line per purchase order line. As goods arrive, line quantities are
 * received and then stocked into inventory; the order is marked complete once
 * every line is stocked. Unissuing the purchase order deletes the receiving order
 * and its lines.
 */
export interface ReceivingOrder {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed.
   *
   * Set automatically once every line has been stocked, and also when the
   * originating purchase order is closed. It is cleared again when the receiving
   * order is voided or that purchase order is re-opened.
   */
  completed_at: string | null;

  /**
   * Timestamp when the receiving order was created.
   */
  created_at: string;

  /**
   * Total number of lines on this receiving order.
   *
   * Always populated, even when `lines` is not expanded.
   */
  line_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListReceivingOrderLine | null;

  /**
   * Free-text note carried over from the originating purchase order.
   *
   * Not returned in list results.
   */
  note: string | null;

  /**
   * Human-readable identifier for the receiving order, assigned when the originating
   * purchase order is issued.
   *
   * It mirrors that purchase order's number (e.g. `PO-001`). Distinct from `id`; use
   * it to reference the order in the UI and on documents.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order';

  /**
   * ReceivingOrderRelated names the records a receiving order sits between.
   */
  related: ReceivingOrderRelated | null;

  /**
   * An account you buy from.
   *
   * A supplier is another account in a selling relationship with yours, so it is
   * referenced from purchase orders, receiving orders and deliveries as well as
   * retrieved on its own. Everything past its identity is expandable or nullable,
   * because a supplier named from one of those documents is known by id, name and
   * number alone.
   */
  supplier: SuppliersAPI.Supplier | null;

  /**
   * ReceivingOrderTotals is what the order is worth and how far it has been put
   * away.
   *
   * A receiving order's lines can each count in a different unit, so the amounts —
   * the purchase order's agreed unit price times a quantity — are what make the
   * stages comparable, and completion is a ratio of two of them.
   */
  totals: ReceivingOrderTotals | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

/**
 * Line item in a receiving order.
 *
 * One line is created per purchase order line when the purchase order is issued,
 * with its quantity initialized to the full ordered quantity. When a line is
 * stocked short of the ordered quantity, a new line is created automatically for
 * the remainder.
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
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Position of the originating purchase order line within its order, starting at 1.
   */
  line_item_number: number | null;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_line';

  /**
   * A single line item on a purchase order.
   */
  order_line: DeliveriesAPI.PurchaseOrderLine | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_ordered: AccountUsersAPI.Quantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  rejected_quantity: AnalyticsAPI.ComputedQuantity | null;

  /**
   * Timestamp when the received quantity was stocked into inventory.
   *
   * Once set, the line counts toward the order's `totals.stocked.completion`.
   * Voiding the line or the whole order clears it, but does not reverse the
   * inventory that was already received.
   */
  stocked_at: string | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
}

/**
 * ReceivingOrderRelated names the records a receiving order sits between.
 */
export interface ReceivingOrderRelated {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  deliveries: SalesOrdersAPI.ListRecord | null;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_related';

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like the `actor` and `entity` references, it carries just enough to identify and
   * label the referenced record without embedding its full resource. The `status`
   * and `metadata` fields hold type-specific detail that varies by the kind of
   * record referenced.
   */
  purchase_order: SalesOrdersAPI.Record | null;
}

/**
 * ReceivingOrderStageTotal is how much of a receiving order has reached one stage.
 */
export interface ReceivingOrderStageTotal {
  /**
   * Value that has reached this stage, as a decimal string.
   */
  amount: string;

  /**
   * Progress through this stage, as a fraction between 0 and 1.
   *
   * Calculated as this stage's amount divided by `totals.ordered`, so `1` means the
   * whole order has cleared the stage. It is a ratio of amounts rather than of
   * quantities because a receiving order's lines can each count in a different unit.
   */
  completion: number;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_stage_total';
}

/**
 * ReceivingOrderTotals is what the order is worth and how far it has been put
 * away.
 *
 * A receiving order's lines can each count in a different unit, so the amounts —
 * the purchase order's agreed unit price times a quantity — are what make the
 * stages comparable, and completion is a ratio of two of them.
 */
export interface ReceivingOrderTotals {
  /**
   * Resource type identifier.
   */
  object: 'receiving_order_totals';

  /**
   * Total value the purchase order asked for across this order's lines, as a decimal
   * string.
   *
   * This is the baseline the stage completions are measured against.
   */
  ordered: string;

  /**
   * ReceivingOrderStageTotal is how much of a receiving order has reached one stage.
   */
  rejected: ReceivingOrderStageTotal;

  /**
   * ReceivingOrderStageTotal is how much of a receiving order has reached one stage.
   */
  stocked: ReceivingOrderStageTotal;
}

export interface ReceivingOrderRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'supplier'
    | 'totals'
    | 'related'
    | 'related.purchase_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.item.category'
    | 'lines.item.category.unit_group'
    | 'lines.item.category.unit_group.base_unit'
    | 'lines.item.category.unit_group.associated_units'
    | 'lines.item.category.unit_group.associated_units.unit'
  >;
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
  include?: Array<
    | 'supplier'
    | 'totals'
    | 'related'
    | 'related.purchase_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.item.category'
    | 'lines.item.category.unit_group'
    | 'lines.item.category.unit_group.base_unit'
    | 'lines.item.category.unit_group.associated_units'
    | 'lines.item.category.unit_group.associated_units.unit'
  >;

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
    type ListReceivingOrderLine as ListReceivingOrderLine,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderLine as ReceivingOrderLine,
    type ReceivingOrderRelated as ReceivingOrderRelated,
    type ReceivingOrderStageTotal as ReceivingOrderStageTotal,
    type ReceivingOrderTotals as ReceivingOrderTotals,
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
