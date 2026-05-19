// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AnalyticsAPI from '../core/analytics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage production batches, batch flows, and scanning station operations.
 */
export class Analytics extends APIResource {
  /**
   * Returns aggregated summaries of open batches, optionally filtered by item IDs or
   * product line IDs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.analytics.updateOpenBatches({
   *     item_ids: ['it_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   });
   * ```
   */
  updateOpenBatches(
    body: AnalyticsUpdateOpenBatchesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsUpdateOpenBatchesResponse> {
    return this._client.put('/v1/operations/analytics/open-batches', { body, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface AnalyticsUpdateOpenBatchesResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface AnalyticsUpdateOpenBatchesParams {
  /**
   * Item IDs to filter by.
   */
  item_ids: Array<string>;

  /**
   * Product line IDs to filter by.
   */
  product_line_ids: Array<string>;
}

export declare namespace Analytics {
  export {
    type AnalyticsUpdateOpenBatchesResponse as AnalyticsUpdateOpenBatchesResponse,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
  };
}
