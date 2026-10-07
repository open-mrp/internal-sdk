// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AnalyticsAPI from './analytics';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class OpenOrders extends APIResource {
  /**
   * Returns the open sales orders, most recently issued first, each with the number
   * and ordered value of its sale lines the filters count.
   *
   * An open order is a sales order that has been issued and not yet completed. The
   * product-line and item filters choose which lines count; an order with no counted
   * line is left out. Sales reps see only their own orders.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const listOpenOrder =
   *   await client.core.analytics.openOrders.update({
   *     cursor:
   *       'eyJjIjoiMjAyNi0wNS0xMFQwMDowMDowMFoiLCJzIjoib3JfOWxxbzA3cXVpd3liIiwiZCI6ImYifQ.siWm3zlbJWFPMu3l8agiadPIScCmkHF4W85PAydBAsI',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
   *   });
   * ```
   */
  update(
    params: OpenOrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOpenOrder> {
    const { cursor, limit, ...body } = params ?? {};
    return this._client.put('/v1/core/analytics/open-orders', { query: { cursor, limit }, body, ...options });
  }

  /**
   * Returns a sales order's sale lines by SKU, each with its unit price, the
   * quantities back-ordered and invoiced in the item's base unit, and its ordered
   * value.
   *
   * Every sale line of the order is listed, whether or not the order is still open.
   * Sales reps can read only their own orders.
   *
   * This endpoint requires the permission: `sales_orders:read`.
   *
   * @example
   * ```ts
   * const listOpenOrderLine =
   *   await client.core.analytics.openOrders.retrieveLines(
   *     'example',
   *   );
   * ```
   */
  retrieveLines(id: string, options?: RequestOptions): APIPromise<ListOpenOrderLine> {
    return this._client.get(path`/v1/core/analytics/open-orders/${id}/lines`, options);
  }

  /**
   * Returns the quantities on open sales orders by product, most back-ordered first.
   *
   * Each product's ordered, back-ordered and invoiced quantities are totalled across
   * the open orders' sale lines in the item's base unit, converting each line from
   * its own unit. A product with nothing ordered is left out. Products with the same
   * back-ordered quantity are ordered by item ID. Sales reps see only their own
   * orders.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const listOpenOrderProduct =
   *   await client.core.analytics.openOrders.updateBreakdown({
   *     cursor:
   *       'eyJ2IjoiODQwIiwicyI6Iml0X3BlajA3Y2todnU2MiIsImQiOiJmIn0.y-sIOvPmqHKaz_DYQ9t7tfQEPocR26FcooXgCOT2kdA',
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
   *   });
   * ```
   */
  updateBreakdown(
    params: OpenOrderUpdateBreakdownParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOpenOrderProduct> {
    const { cursor, limit, ...body } = params ?? {};
    return this._client.put('/v1/core/analytics/open-orders/breakdown', {
      query: { cursor, limit },
      body,
      ...options,
    });
  }

  /**
   * Returns the money on open sales orders: what is ordered, what of it is
   * back-ordered, and what has been invoiced against it so far.
   *
   * An open order is a sales order that has been issued and not yet completed;
   * estimates and purchase orders are never open. Only sale lines count, each valued
   * at its quantity times its unit price, converted between the two units. Sales
   * reps see only their own orders.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const analyzeOpenOrdersSummaryResponse =
   *   await client.core.analytics.openOrders.updateSummary({
   *     customer_group_ids: ['acgp_6p4z57e9alaf'],
   *     customer_ids: ['ac_opnlh43ymyee'],
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *     sales_rep_ids: ['acus_e5zu8bde0z3h'],
   *   });
   * ```
   */
  updateSummary(
    body: OpenOrderUpdateSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyzeOpenOrdersSummaryResponse> {
    return this._client.put('/v1/core/analytics/open-orders/summary', { body, ...options });
  }
}

/**
 * A customer as an analytics row names it.
 */
export interface AnalyticsCustomer {
  /**
   * Unique identifier of the customer's account.
   */
  id: string;

  /**
   * The customer's name.
   */
  name: string;

  /**
   * The number the seller knows the customer by; null when it has none.
   */
  number: string | null;

  /**
   * Resource type identifier.
   */
  object: 'customer';
}

/**
 * A sales order as an analytics row names it.
 */
export interface AnalyticsSalesOrder {
  /**
   * Unique identifier of the sales order.
   */
  id: string;

  /**
   * The order number, zero-padded as the dashboard shows it.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order';
}

/**
 * Where an order ships to.
 */
export interface AnalyticsShipTo {
  /**
   * Country; null when the order has no shipping address.
   */
  country: string | null;

  /**
   * State or province; null when the order has no shipping address or it has none.
   */
  state: string | null;
}

/**
 * OpenOrderFilters are the filters every open-orders report accepts. Every list is
 * empty-means-all and they combine with AND.
 */
export interface AnalyzeOpenOrdersBreakdownRequest {
  /**
   * Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count orders from these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items. An order with no such line is left out.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines. An order with no such line is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * OpenOrderFilters are the filters every open-orders report accepts. Every list is
 * empty-means-all and they combine with AND.
 */
export interface AnalyzeOpenOrdersSummaryRequest {
  /**
   * Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count orders from these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items. An order with no such line is left out.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines. An order with no such line is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * The money on open sales orders: those issued and not yet completed.
 *
 * Each counted line is valued at its quantity times its unit price, converted
 * between the two units; nothing is rounded.
 */
export interface AnalyzeOpenOrdersSummaryResponse {
  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  back_ordered: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  invoiced: AnalyticsAPI.ComputedQuantity | null;

  /**
   * Resource type identifier.
   */
  object: 'open_orders_summary';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  ordered: AnalyticsAPI.ComputedQuantity | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOpenOrder {
  /**
   * Resources in this page.
   */
  data: Array<OpenOrder>;

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
export interface ListOpenOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<OpenOrderLine>;

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
export interface ListOpenOrderProduct {
  /**
   * Resources in this page.
   */
  data: Array<OpenOrderProduct>;

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
 * OpenOrderFilters are the filters every open-orders report accepts. Every list is
 * empty-means-all and they combine with AND.
 */
export interface ListOpenOrdersRequest {
  /**
   * Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count orders from these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items. An order with no such line is left out.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines. An order with no such line is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * One open sales order and what its counted lines total.
 */
export interface OpenOrder {
  /**
   * A customer as an analytics row names it.
   */
  customer: AnalyticsCustomer | null;

  /**
   * When the order was issued.
   */
  issued_at: string;

  /**
   * Number of the order's sale lines the filters count.
   */
  line_count: number;

  /**
   * Resource type identifier.
   */
  object: 'open_order';

  /**
   * A sales order as an analytics row names it.
   */
  order: AnalyticsSalesOrder | null;

  /**
   * Where an order ships to.
   */
  ship_to: AnalyticsShipTo | null;

  /**
   * The order's status, which is always `issued` for an open order.
   */
  status: 'estimate' | 'issued' | 'fulfilled';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  total_ordered: AnalyticsAPI.ComputedQuantity | null;
}

/**
 * OpenOrderFilters are the filters every open-orders report accepts. Every list is
 * empty-means-all and they combine with AND.
 */
export interface OpenOrderFilters {
  /**
   * Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count orders from these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items. An order with no such line is left out.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines. An order with no such line is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

/**
 * One sale line of a sales order, as the open-orders report counts it.
 */
export interface OpenOrderLine {
  /**
   * Unique identifier of the sales order line.
   */
  id: string;

  /**
   * AnalyticsItem represents a lightweight item reference.
   */
  item: AnalyticsAPI.AnalyticsItem | null;

  /**
   * Resource type identifier.
   */
  object: 'open_order_line';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_back_ordered: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_invoiced: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  total_ordered: AnalyticsAPI.ComputedQuantity | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;

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

/**
 * One item's quantities across the open sales orders, in the item's base unit.
 */
export interface OpenOrderProduct {
  /**
   * AnalyticsItem represents a lightweight item reference.
   */
  item: AnalyticsAPI.AnalyticsItem | null;

  /**
   * Resource type identifier.
   */
  object: 'open_order_product';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_back_ordered: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_invoiced: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_ordered: AnalyticsAPI.ComputedQuantity | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;
}

export interface OpenOrderUpdateParams {
  /**
   * Query param: Opaque cursor from a previous page's `next_page_url` or
   * `previous_page_url`. Omit for the first page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of orders to return.
   */
  limit?: number;

  /**
   * Body param: Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Only count orders from these customers. Their child accounts are
   * included.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: Only count lines for these items. An order with no such line is left
   * out.
   */
  item_ids?: Array<string>;

  /**
   * Body param: Only count lines in these product lines. An order with no such line
   * is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Body param: Only count orders owned by these sales reps (account users). A sales
   * rep calling always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

export interface OpenOrderUpdateBreakdownParams {
  /**
   * Query param: Opaque cursor from a previous page's `next_page_url` or
   * `previous_page_url`. Omit for the first page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of products to return.
   */
  limit?: number;

  /**
   * Body param: Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Only count orders from these customers. Their child accounts are
   * included.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: Only count lines for these items. An order with no such line is left
   * out.
   */
  item_ids?: Array<string>;

  /**
   * Body param: Only count lines in these product lines. An order with no such line
   * is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Body param: Only count orders owned by these sales reps (account users). A sales
   * rep calling always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

export interface OpenOrderUpdateSummaryParams {
  /**
   * Only count orders from customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only count orders from these customers. Their child accounts are included.
   */
  customer_ids?: Array<string>;

  /**
   * Only count lines for these items. An order with no such line is left out.
   */
  item_ids?: Array<string>;

  /**
   * Only count lines in these product lines. An order with no such line is left out.
   */
  product_line_ids?: Array<string>;

  /**
   * Only count orders owned by these sales reps (account users). A sales rep calling
   * always sees only their own orders.
   */
  sales_rep_ids?: Array<string>;
}

export declare namespace OpenOrders {
  export {
    type AnalyticsCustomer as AnalyticsCustomer,
    type AnalyticsSalesOrder as AnalyticsSalesOrder,
    type AnalyticsShipTo as AnalyticsShipTo,
    type AnalyzeOpenOrdersBreakdownRequest as AnalyzeOpenOrdersBreakdownRequest,
    type AnalyzeOpenOrdersSummaryRequest as AnalyzeOpenOrdersSummaryRequest,
    type AnalyzeOpenOrdersSummaryResponse as AnalyzeOpenOrdersSummaryResponse,
    type ListOpenOrder as ListOpenOrder,
    type ListOpenOrderLine as ListOpenOrderLine,
    type ListOpenOrderProduct as ListOpenOrderProduct,
    type ListOpenOrdersRequest as ListOpenOrdersRequest,
    type OpenOrder as OpenOrder,
    type OpenOrderFilters as OpenOrderFilters,
    type OpenOrderLine as OpenOrderLine,
    type OpenOrderProduct as OpenOrderProduct,
    type OpenOrderUpdateParams as OpenOrderUpdateParams,
    type OpenOrderUpdateBreakdownParams as OpenOrderUpdateBreakdownParams,
    type OpenOrderUpdateSummaryParams as OpenOrderUpdateSummaryParams,
  };
}
