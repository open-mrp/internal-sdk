// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as JobsAPI from '../../jobs';
import * as AnalyticsAPI from '../analytics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class Actions extends APIResource {
  /**
   * Starts an export of the matching invoiced sale lines, oldest first, and returns
   * the job that tracks it.
   *
   * The file has one row per invoice line with its pricing, customer and ship-to
   * details. Sales reps export only their own sales, and without the unit cost
   * column. An export matching more than 50,000 lines fails with a request to narrow
   * the filters.
   *
   * This endpoint requires the permission: `invoices:read`.
   *
   * @example
   * ```ts
   * const job =
   *   await client.core.analytics.salesLines.actions.export({
   *     ends_at: '2026-05-10T00:23:00Z',
   *     starts_at: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  export(
    params: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params ?? {};
    return this._client.post('/v1/core/analytics/sales-lines/actions/export', {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * ExportSalesLinesRequest filters which invoiced sale lines land in the exported
 * file.
 */
export interface ExportSalesLinesRequest extends AnalyticsAPI.SalesReportFilters {
  /**
   * End of the window, by invoice date, inclusive.
   */
  ends_at?: string;

  /**
   * Start of the window, by invoice date, inclusive. Set both bounds or neither;
   * omit both to export every invoiced line.
   */
  starts_at?: string;
}

export interface ActionExportParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;

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
   * neither; omit both to export every invoiced line.
   */
  starts_at?: string;
}

export declare namespace Actions {
  export {
    type ExportSalesLinesRequest as ExportSalesLinesRequest,
    type ActionExportParams as ActionExportParams,
  };
}
