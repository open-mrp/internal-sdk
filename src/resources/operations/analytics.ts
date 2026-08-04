// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from '../core/analytics';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage production batches, batch flows, and scanning station operations.
 */
export class Analytics extends APIResource {
  /**
   * Returns the work in progress currently sitting on the production floor, grouped
   * by department, item, and scanning station.
   *
   * Only batches that have been scanned at a scanning station and are not yet closed
   * are counted, and each batch contributes its quantity less whatever has already
   * moved downstream, so the totals show what is still left to work on. Each result
   * covers one item at one scanning station.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listOpenBatchSummary =
   *   await client.operations.analytics.updateOpenBatches({
   *     item_ids: ['it_pej07ckhvu62'],
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *   });
   * ```
   */
  updateOpenBatches(
    body: AnalyticsUpdateOpenBatchesParams,
    options?: RequestOptions,
  ): APIPromise<ListOpenBatchSummary> {
    return this._client.put('/v1/operations/analytics/open-batches', { body, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOpenBatchSummary {
  /**
   * Resources in this page.
   */
  data: Array<AnalyticsAPI.OpenBatchSummary>;

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

export interface AnalyticsUpdateOpenBatchesParams {
  /**
   * Restrict the summaries to batches of these items; omit to include all items.
   */
  item_ids: Array<string>;

  /**
   * Restrict the summaries to batches whose item belongs to these product lines;
   * omit to include all product lines.
   */
  product_line_ids: Array<string>;
}

export declare namespace Analytics {
  export {
    type ListOpenBatchSummary as ListOpenBatchSummary,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
  };
}
