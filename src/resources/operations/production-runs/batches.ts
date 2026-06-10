// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ScanningStationsAPI from '../scanning-stations';
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
   *     'prru_0141c28081df4faac0fe726c41',
   *     {
   *       batches: [
   *         {
   *           item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *           quantity_value: '100',
   *           quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *           production_step_id:
   *             'prst_0159474175bb59f4b1990404ee',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    body: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScanningStationsAPI.ListBatch> {
    return this._client.post(path`/v1/operations/production-runs/${id}/batches`, { body, ...options });
  }

  /**
   * Returns a paginated list of batches associated with a production run.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.productionRuns.batches.list(
   *     'prru_0141c28081df4faac0fe726c41',
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
 * Batch to add to a production run.
 */
export interface AddBatchInputRequest {
  /**
   * Item ID.
   */
  item_id: string;

  /**
   * Quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * Quantity value as a decimal string.
   */
  quantity_value: string;

  /**
   * Production step ID.
   */
  production_step_id?: string;

  /**
   * Scanning station ID.
   */
  scanning_station_id?: string;

  /**
   * Seconds unit ID.
   */
  seconds_unit_id?: string;

  /**
   * Seconds value as a decimal string.
   */
  seconds_value?: string;

  /**
   * Waste unit ID.
   */
  waste_unit_id?: string;

  /**
   * Waste value as a decimal string.
   */
  waste_value?: string;
}

/**
 * Request to add batches to a production run.
 */
export interface AddBatchesToProductionRunRequest {
  /**
   * Batches to add.
   */
  batches: Array<AddBatchInputRequest>;
}

export interface BatchCreateParams {
  /**
   * Batches to add.
   */
  batches: Array<AddBatchInputRequest>;
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
    type AddBatchInputRequest as AddBatchInputRequest,
    type AddBatchesToProductionRunRequest as AddBatchesToProductionRunRequest,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
