// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductionRunsAPI from './production-runs';
import * as ScanningStationsAPI from '../scanning-stations/scanning-stations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete production runs.
 */
export class Batches extends APIResource {
  /**
   * Adds batches to a production run.
   *
   * Each batch is created as unscanned work: it belongs to the run immediately but
   * does not count as produced until it is scanned at a station. Scanning the first
   * of them starts the run, and the run completes once none are left unscanned.
   * Batches cannot be added to a run that has already completed.
   *
   * This endpoint requires the permission: `production_runs:update`.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.productionRuns.batches.create(
   *     'prru_sglzcyflxk59',
   *     {
   *       batches: [
   *         {
   *           item_id: 'it_pej07ckhvu62',
   *           quantity_value: '100',
   *           quantity_unit_id: 'un_82bd37dae5po',
   *           production_step_id: 'prst_0ht5mkqx5a6t',
   *           machine_ids: ['mc_ffcfk9dxixis'],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScanningStationsAPI.ListBatch> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/operations/production-runs/${id}/batches`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of the batches that make up a production run, most
   * recently created first.
   *
   * By default the result is not limited to the batches recorded directly against
   * the run. Starting from those batches, the batch flow is followed downstream to
   * the batches they feed and upstream to the batches that feed them while that
   * branch is still open, so the whole in-progress flow around the run is returned.
   * Pass `scope=run` for only the run's own batches.
   *
   * The `q` search term matches a batch ID, item SKU, scanning station name,
   * department name, production step name, run number, lot number, or machine name.
   *
   * This endpoint requires the permission: `production_runs:read`.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.productionRuns.batches.list(
   *     'prru_sglzcyflxk59',
   *   );
   * ```
   */
  list(
    id: string,
    query: BatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScanningStationsAPI.ListBatch> {
    return this._client.get(path`/v1/operations/production-runs/${id}/batches`, { query, ...options });
  }
}

/**
 * Request to add batches to a production run.
 */
export interface AddBatchesToProductionRunRequest {
  /**
   * The batches of work to record against the run, at most 500 per request.
   */
  batches: Array<ProductionRunsAPI.AddBatchInputRequest>;
}

export interface BatchCreateParams {
  /**
   * Body param: The batches of work to record against the run, at most 500 per
   * request.
   */
  batches: Array<ProductionRunsAPI.AddBatchInputRequest>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'quantity.unit' | 'seconds.unit' | 'waste.unit'>;
}

export interface BatchListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'quantity.unit' | 'seconds.unit' | 'waste.unit'>;

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
   * Which batches to return.
   *
   * `flow` (the default) follows the batch flow around the run's batches as
   * described above. `run` returns only the batches created under the run itself, as
   * they were planned on it.
   */
  scope?: 'flow' | 'run';
}

export declare namespace Batches {
  export {
    type AddBatchesToProductionRunRequest as AddBatchesToProductionRunRequest,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
