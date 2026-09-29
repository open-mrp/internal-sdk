// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as APIKeysAPI from '../../../auth/api-keys/api-keys';
import * as AnalyticsAPI from '../analytics';
import * as ActionsAPI from './actions';
import { ActionExportParams, Actions, ExportSalesLinesRequest } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class SalesLines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns invoiced sale lines newest first, each priced with its quantity in the
   * item's base unit, unit and total price, cost and profit.
   *
   * The same rows `analyze sales` returns, a page at a time. Sales reps see only
   * their own lines, with unit cost zeroed.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const listSalesEntry =
   *   await client.core.analytics.salesLines.update({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  update(
    params: SalesLineUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesEntry> {
    const { cursor, limit, ...body } = params ?? {};
    return this._client.put('/v1/core/analytics/sales-lines', { query: { cursor, limit }, body, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListSalesEntry {
  /**
   * Resources in this page.
   */
  data: Array<AnalyticsAPI.SalesEntry>;

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
 * ListSalesLinesRequest is the request to page through invoiced sale lines.
 */
export interface ListSalesLinesRequest extends AnalyticsAPI.SalesReportFilters {
  /**
   * End of the window, by invoice date, inclusive.
   */
  ends_at?: string;

  /**
   * Start of the window, by invoice date, inclusive. Set both bounds or neither;
   * omit both to list every invoiced line.
   */
  starts_at?: string;
}

export interface SalesLineUpdateParams {
  /**
   * Query param: Opaque cursor from a previous page's `next_page_url` or
   * `previous_page_url`. Omit for the first page.
   */
  cursor?: string;

  /**
   * Query param: Maximum number of lines to return.
   */
  limit?: number;

  /**
   * Body param: Only count sales to customers in these groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Only count sales to these customers. Their child accounts are
   * included.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: End of the window, by invoice date, inclusive.
   */
  ends_at?: string;

  /**
   * Body param: Only count lines for these items.
   */
  item_ids?: Array<string>;

  /**
   * Body param: Only count lines in these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Body param: Only count orders owned by these sales reps (account users). A sales
   * rep calling always sees only their own sales.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Body param: Start of the window, by invoice date, inclusive. Set both bounds or
   * neither; omit both to list every invoiced line.
   */
  starts_at?: string;
}

SalesLines.Actions = Actions;

export declare namespace SalesLines {
  export {
    type ListSalesEntry as ListSalesEntry,
    type ListSalesLinesRequest as ListSalesLinesRequest,
    type SalesLineUpdateParams as SalesLineUpdateParams,
  };

  export {
    Actions as Actions,
    type ExportSalesLinesRequest as ExportSalesLinesRequest,
    type ActionExportParams as ActionExportParams,
  };
}
