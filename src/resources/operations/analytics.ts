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
   * Returns aggregated quantities of open (unclosed) batches, grouped by department,
   * item, and scanning station.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listOpenBatchSummary =
   *   await client.operations.analytics.updateOpenBatches({
   *     item_ids: ['it_0131e386ac683e8c29a71f6f1f'],
   *     product_line_ids: ['pdln_01996357326a0d3f7b129542ea'],
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
