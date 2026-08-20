// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import { ActionPackParams, Actions, PackPickRequest } from './actions';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import * as LinesAPI from './lines/lines';
import { LineUpdateParams, Lines, UpdatePickLineRequest } from './lines/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, update, pick, void, and pack picks and pick lines.
 */
export class Picks extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);

  /**
   * Returns a pick by ID.
   *
   * This endpoint requires the permission: `picks:read`.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.retrieve(
   *   'pk_6eilj488bq8d',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PickRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Pick> {
    return this._client.get(path`/v1/operations/picks/${id}`, { query, ...options });
  }

  /**
   * Partially updates a pick's metadata.
   *
   * Only the fields provided in the request are changed. This endpoint edits the
   * pick record itself; use the pick and pack actions to change what has actually
   * been picked.
   *
   * This endpoint requires the permission: `picks:update`.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.update(
   *   'pk_6eilj488bq8d',
   *   { number: 'PCK-2025-0042' },
   * );
   * ```
   */
  update(
    id: string,
    params: PickUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Pick> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/picks/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of picks, soonest ship-by date first.
   *
   * The `q` search term matches the pick number, the sales order number, the
   * customer PO number, and the customer's name or number.
   *
   * This endpoint requires the permissions: `picks:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listPick = await client.operations.picks.list();
   * ```
   */
  list(query: PickListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListPick> {
    return this._client.get('/v1/operations/picks', { query, ...options });
  }

  /**
   * Returns the shipment numbers associated with a pick, oldest first.
   *
   * Shipments are matched through the pick's sales order, so the list covers every
   * shipment created for that order — each partial pack of the pick adds another
   * one. Only the numbers are returned; retrieve the shipment to get its full
   * detail.
   *
   * This endpoint requires the permission: `picks:read`.
   *
   * @example
   * ```ts
   * const pickShipmentsResponse =
   *   await client.operations.picks.retrieveShipments(
   *     'pk_6eilj488bq8d',
   *   );
   * ```
   */
  retrieveShipments(
    id: string,
    query: PickRetrieveShipmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PickShipmentsResponse> {
    return this._client.get(path`/v1/operations/picks/${id}/shipments`, { query, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPick {
  /**
   * Resources in this page.
   */
  data: Array<Pick>;

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
export interface ListPickLine {
  /**
   * Resources in this page.
   */
  data: Array<PickLine>;

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
 * A warehouse picking task for a sales order, tracking the quantities to pull from
 * inventory and pack for shipment.
 *
 * A pick is created automatically when a sales order is issued, with one line for
 * each order line whose product is of type `sale` service, shipping, tax, credit
 * and return lines are skipped — and nothing picked yet.
 */
export interface Pick {
  /**
   * Pick ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: AnalyticsAPI.Customer | null;

  /**
   * Timestamp when the pick was finished.
   */
  finished_at: string | null;

  /**
   * Timestamp of the most recent shipment sent (null until shipped).
   */
  last_shipped_at: string | null;

  /**
   * Days allowed to prepare the order before it ships.
   */
  lead_time_days: number | null;

  /**
   * Which rule in the customer/group/account chain produced `lead_time_days`.
   */
  lead_time_source:
    | 'customer'
    | 'parent_customer'
    | 'account_group'
    | 'account'
    | 'manual'
    | 'order_lead_time'
    | 'order_ship_by'
    | null;

  /**
   * Number of lines on this pick.
   */
  line_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListPickLine | null;

  /**
   * Human-readable number that identifies the pick, distinct from the `id`.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'pick';

  /**
   * How urgently the pick should be worked.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * When the associated sales order promised delivery.
   */
  promised_at: string | null;

  /**
   * Groups the records a pick sits between — the order it fulfills and the shipments
   * packed from it — and is returned only once at least one member has been
   * expanded.
   */
  related: PickRelated | null;

  /**
   * Date the order must ship by to meet its commitment.
   */
  ship_by_date: string | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to: APIKeysAPI.Address | null;

  /**
   * Progress through each fulfillment stage of a pick.
   */
  totals: PickTotals | null;

  /**
   * Days the carrier is expected to take in transit.
   */
  transit_days: number | null;

  /**
   * Whether `transit_days` came from a cached lane estimate or the service level's
   * default.
   */
  transit_source: 'carrier_lane' | 'service_level' | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single line on a pick, tracking the quantity picked against one sales order
 * line.
 */
export interface PickLine {
  /**
   * Pick line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'pick_line';

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  ordered_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Timestamp when the line was packed.
   */
  packed_at: string | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * A single line item on a sales order.
   */
  sales_order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Groups the records a pick sits between — the order it fulfills and the shipments
 * packed from it — and is returned only once at least one member has been
 * expanded.
 */
export interface PickRelated {
  /**
   * Resource type identifier.
   */
  object: 'pick_related';

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like the `actor` and `entity` references, it carries just enough to identify and
   * label the referenced record without embedding its full resource. The `status`
   * and `metadata` fields hold type-specific detail that varies by the kind of
   * record referenced.
   */
  sales_order: SalesOrdersAPI.Record | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  shipments: SalesOrdersAPI.ListRecord | null;
}

/**
 * The shipment numbers for the sales order a pick belongs to.
 */
export interface PickShipmentsResponse {
  /**
   * Total number of matching shipments, ignoring `limit` and `offset`.
   */
  count: number;

  /**
   * Resource type identifier.
   */
  object: 'pick_shipments_response';

  /**
   * Shipment numbers associated with the pick, oldest first.
   */
  shipment_numbers: Array<string>;
}

/**
 * How far one fulfillment stage of a pick has progressed.
 */
export interface PickStageTotal {
  /**
   * Progress as a fraction between 0 and 1.
   */
  completion: number;

  /**
   * Resource type identifier.
   */
  object: 'pick_stage_total';
}

/**
 * Progress through each fulfillment stage of a pick.
 */
export interface PickTotals {
  /**
   * Resource type identifier.
   */
  object: 'pick_totals';

  /**
   * How far one fulfillment stage of a pick has progressed.
   */
  packed: PickStageTotal;

  /**
   * How far one fulfillment stage of a pick has progressed.
   */
  picked: PickStageTotal;
}

/**
 * Request to partially update a pick's metadata.
 */
export interface UpdatePickRequest {
  /**
   * Timestamp when the pick was finished, in RFC 3339 format.
   *
   * Setting it closes the pick out even if lines are still unpacked; send `null` to
   * clear it and reopen the pick.
   */
  finished_at?: string | null;

  /**
   * New number to assign to the pick.
   *
   * Maximum 255 characters. Renaming a pick does not rename the sales order it was
   * created from.
   */
  number?: string;
}

export interface PickRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'customer'
    | 'related.sales_order'
    | 'related.shipments'
    | 'lines'
    | 'lines.item'
    | 'lines.sales_order_line'
    | 'lines.sales_order_line.product'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.ordered_quantity'
    | 'lines.ordered_quantity.unit'
  >;
}

export interface PickUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'lines'>;

  /**
   * Body param: Timestamp when the pick was finished, in RFC 3339 format.
   *
   * Setting it closes the pick out even if lines are still unpacked; send `null` to
   * clear it and reopen the pick.
   */
  finished_at?: string | null;

  /**
   * Body param: New number to assign to the pick.
   *
   * Maximum 255 characters. Renaming a pick does not rename the sales order it was
   * created from.
   */
  number?: string;
}

export interface PickListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer type group IDs.
   *
   * Matches picks whose customer's type group — the account group returned in the
   * customer's `type` field — is one of the given groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Filter by department IDs.
   *
   * Matches picks assigned to any of the given departments.
   */
  department_ids?: Array<string>;

  /**
   * Only return picks created before this date (`YYYY-MM-DD`).
   */
  ends_at?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'customer'
    | 'related.sales_order'
    | 'related.shipments'
    | 'lines'
    | 'lines.item'
    | 'lines.sales_order_line'
    | 'lines.sales_order_line.product'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.ordered_quantity'
    | 'lines.ordered_quantity.unit'
  >;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by product line IDs.
   *
   * Matches picks that contain at least one line for a product in any of the given
   * product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Orders the results: `ship_by_date` puts the soonest delivery commitment first,
   * with picks whose order has no ship-by date last; `created_at` puts the newest
   * pick first.
   */
  sort?: 'ship_by_date' | 'created_at';

  /**
   * Only return picks created on or after this date (`YYYY-MM-DD`).
   */
  starts_at?: string;

  /**
   * Filter by pick status.
   *
   * Pass `open` for picks that have not been finished, or `closed` for picks that
   * have.
   */
  status?: string;
}

export interface PickRetrieveShipmentsParams {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Number of results to skip.
   */
  offset?: number;

  /**
   * Search query that filters shipment numbers by substring match.
   */
  q?: string;
}

Picks.Actions = Actions;
Picks.Lines = Lines;

export declare namespace Picks {
  export {
    type ListPick as ListPick,
    type ListPickLine as ListPickLine,
    type Pick as Pick,
    type PickLine as PickLine,
    type PickRelated as PickRelated,
    type PickShipmentsResponse as PickShipmentsResponse,
    type PickStageTotal as PickStageTotal,
    type PickTotals as PickTotals,
    type UpdatePickRequest as UpdatePickRequest,
    type PickRetrieveParams as PickRetrieveParams,
    type PickUpdateParams as PickUpdateParams,
    type PickListParams as PickListParams,
    type PickRetrieveShipmentsParams as PickRetrieveShipmentsParams,
  };

  export {
    Actions as Actions,
    type PackPickRequest as PackPickRequest,
    type ActionPackParams as ActionPackParams,
  };

  export {
    Lines as Lines,
    type UpdatePickLineRequest as UpdatePickLineRequest,
    type LineUpdateParams as LineUpdateParams,
  };
}
