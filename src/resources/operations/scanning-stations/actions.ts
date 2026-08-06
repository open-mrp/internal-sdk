// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as ActionsAPI from '../../catalog/item-categories/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage scanning stations.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple scanning stations for the account, matched by name
   * (case-insensitive). Validates and resolves synchronously, then writes
   * asynchronously — 202 with a job to poll.
   *
   * @example
   * ```ts
   * const job =
   *   await client.operations.scanningStations.actions.bulkUpsert(
   *     {
   *       scanning_stations: [
   *         {
   *           name: 'Packaging Line 1',
   *           type: 'init_batch',
   *           operator_requirement: 'none',
   *           department: {
   *             id: 'dp_m0jayebxnkos',
   *             name: 'Fabrication',
   *           },
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  bulkUpsert(body: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/operations/scanning-stations/actions/bulk-upsert', { body, ...options });
  }

  /**
   * Starts an export of every matching scanning station and returns the job that
   * tracks it.
   *
   * @example
   * ```ts
   * const job =
   *   await client.operations.scanningStations.actions.export({
   *     q: null,
   *   });
   * ```
   */
  export(body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/operations/scanning-stations/actions/export', { body, ...options });
  }
}

/**
 * Request to bulk upsert scanning stations.
 */
export interface BulkUpsertScanningStationsRequest {
  /**
   * Scanning stations to create or update, matched by name (case-insensitive) within
   * the account.
   */
  scanning_stations: Array<UpsertScanningStationInput>;
}

/**
 * Filters which scanning stations land in the exported file.
 */
export interface ExportScanningStationsRequest {
  /**
   * Free-text search term matched against scanning station names.
   */
  q: string | null;
}

/**
 * Input for a single scanning station in a bulk upsert operation.
 */
export interface UpsertScanningStationInput {
  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  department: ActionsAPI.ObjectIdentifier;

  /**
   * Display name of the scanning station. Rows are matched against existing stations
   * by name (case-insensitive): a match updates that station, no match creates a new
   * one.
   */
  name: string;

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Scanning station type, determining which batch operation the station performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
   *
   * The type cannot be changed after creation — rows updating an existing station
   * must state that station's current type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`). Preserved when omitted on update; send `null` or an empty
   * string to clear.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Type of label printed at this station. Preserved when omitted on update; send
   * `null` or an empty string to clear.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler' | null;

  /**
   * Free-form notes about the scanning station. Preserved when omitted on update.
   */
  notes?: string;
}

export interface ActionBulkUpsertParams {
  /**
   * Scanning stations to create or update, matched by name (case-insensitive) within
   * the account.
   */
  scanning_stations: Array<UpsertScanningStationInput>;
}

export interface ActionExportParams {
  /**
   * Free-text search term matched against scanning station names.
   */
  q: string | null;
}

export declare namespace Actions {
  export {
    type BulkUpsertScanningStationsRequest as BulkUpsertScanningStationsRequest,
    type ExportScanningStationsRequest as ExportScanningStationsRequest,
    type UpsertScanningStationInput as UpsertScanningStationInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
