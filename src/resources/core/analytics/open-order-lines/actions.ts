// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as JobsAPI from '../../jobs';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Analyze sales, orders, manufacturing, materials, and other business metrics.
 */
export class Actions extends APIResource {
  /**
   * Starts an export of the open sales orders' sale lines, oldest order first, and
   * returns the job that tracks it.
   *
   * The file has one row per line with its customer, sales rep, product, quantities
   * in the item's base unit, unit price and totals. The unit price is what has been
   * invoiced per unit, or zero before anything is. Sales reps export only their own
   * orders, and without the unit cost column. An export matching more than 50,000
   * lines fails with a request to narrow the filters.
   *
   * This endpoint requires the permission: `sales_orders:read`.
   *
   * @example
   * ```ts
   * const job =
   *   await client.core.analytics.openOrderLines.actions.export(
   *     {
   *       customer_group_ids: ['acgp_6p4z57e9alaf'],
   *       customer_ids: ['ac_opnlh43ymyee'],
   *       item_ids: ['it_pej07ckhvu62'],
   *       product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *       sales_rep_ids: ['acus_e5zu8bde0z3h'],
   *     },
   *   );
   * ```
   */
  export(
    params: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params ?? {};
    return this._client.post('/v1/core/analytics/open-order-lines/actions/export', {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * OpenOrderFilters are the filters every open-orders report accepts. Every list is
 * empty-means-all and they combine with AND.
 */
export interface ExportOpenOrderLinesRequest {
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

export interface ActionExportParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;

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

export declare namespace Actions {
  export {
    type ExportOpenOrderLinesRequest as ExportOpenOrderLinesRequest,
    type ActionExportParams as ActionExportParams,
  };
}
