// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from '../batches/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete production runs.
 */
export class Batches extends APIResource {
  /**
   * Adds batches to a production run. Fails if the run is completed.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.productionRuns.batches.create(
   *     '',
   *     {
   *       batches: [
   *         {
   *           item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
   *           quantity_value: '100',
   *           quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *           seconds_value: null,
   *           seconds_unit_id: null,
   *           waste_value: null,
   *           waste_unit_id: null,
   *           production_step_id:
   *             'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *           scanning_station_id: null,
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(id: string, body: BatchCreateParams, options?: RequestOptions): APIPromise<ListBatch> {
    return this._client.post(path`/v1/operations/production-runs/${id}/batches`, { body, ...options });
  }

  /**
   * Returns a paginated list of batches associated with a production run.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.productionRuns.batches.list(
   *     'prru_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  list(
    id: string,
    query: BatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListBatch> {
    return this._client.get(path`/v1/operations/production-runs/${id}/batches`, { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListBatch {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.Batch>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface BatchCreateParams {
  /**
   * Batches to add.
   */
  batches: Array<BatchCreateParams.Batch>;
}

export namespace BatchCreateParams {
  /**
   * Batch to add to a production run.
   */
  export interface Batch {
    /**
     * Item ID.
     */
    item_id: string;

    /**
     * Production step ID.
     */
    production_step_id: string | null;

    /**
     * Quantity unit ID.
     */
    quantity_unit_id: string;

    /**
     * Quantity value as a decimal string.
     */
    quantity_value: string;

    /**
     * Scanning station ID.
     */
    scanning_station_id: string | null;

    /**
     * Seconds unit ID.
     */
    seconds_unit_id: string | null;

    /**
     * Seconds value as a decimal string.
     */
    seconds_value: string | null;

    /**
     * Waste unit ID.
     */
    waste_unit_id: string | null;

    /**
     * Waste value as a decimal string.
     */
    waste_value: string | null;
  }
}

export interface BatchListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace Batches {
  export {
    type ListBatch as ListBatch,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
