// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchesAPI from './batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage production batches, batch flows, and scanning station operations.
 */
export class Actions extends APIResource {
  /**
   * Deletes multiple batches in one request.
   *
   * Batch IDs that cannot be found are skipped; the request fails only if none of
   * the batches exist. After deletion, any production run whose batches are now all
   * scanned or deleted is closed automatically.
   *
   * This endpoint requires the permission: `batches:delete`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.batches.actions.bulkDelete({
   *     batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/operations/batches/actions/bulk-delete', { body, ...options });
  }

  /**
   * Closes a batch so it can no longer be scanned or advanced through production.
   *
   * This endpoint requires the permission: `batches:delete`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.close(
   *   { batch_id: 'bt_017313a7df2d7ac8d895809747' },
   * );
   * ```
   */
  close(body: ActionCloseParams, options?: RequestOptions): APIPromise<BatchesAPI.Batch> {
    return this._client.post('/v1/operations/batches/actions/close', { body, ...options });
  }

  /**
   * Marks a production run batch as scanned at a scanning station, starting it
   * through production.
   *
   * The batch is attached to the production step that produces its item at the
   * station, the step's material consumption is executed asynchronously, and the
   * batch is closed automatically if the step is the last one. The batch's
   * production run is started, and the run is closed once all of its batches are
   * scanned or deleted.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch =
   *   await client.operations.batches.actions.initialize({
   *     batch_id: 'bt_017313a7df2d7ac8d895809747',
   *     scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
   *   });
   * ```
   */
  initialize(body: ActionInitializeParams, options?: RequestOptions): APIPromise<BatchesAPI.Batch> {
    return this._client.post('/v1/operations/batches/actions/initialize', { body, ...options });
  }

  /**
   * Merges multiple batches into a single new batch at a production step.
   *
   * A new batch is created at the target step with its quantity calculated from the
   * step's configuration, the source batches are linked as inputs and closed, and
   * the step's material consumption is executed asynchronously. Returns the newly
   * created batch.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.merge(
   *   {
   *     batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *     production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *     scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
   *   },
   * );
   * ```
   */
  merge(body: ActionMergeParams, options?: RequestOptions): APIPromise<BatchesAPI.Batch> {
    return this._client.post('/v1/operations/batches/actions/merge', { body, ...options });
  }

  /**
   * Advances batches to a production step by creating a new batch at that step.
   *
   * A new batch is created with its item and quantity calculated from the target
   * step's configuration, the source batches are linked as inputs and closed, and
   * the step's material consumption is executed asynchronously. Returns the newly
   * created batch.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.move({
   *   batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *   production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *   scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
   * });
   * ```
   */
  move(body: ActionMoveParams, options?: RequestOptions): APIPromise<BatchesAPI.Batch> {
    return this._client.post('/v1/operations/batches/actions/move', { body, ...options });
  }

  /**
   * Splits a quantity off one or more batches into a new batch, grading the output
   * as firsts, seconds, and waste.
   *
   * A new batch carrying the firsts quantity is created at the production step, with
   * any seconds and waste recorded on it; the source batches are linked as inputs.
   * Returns the newly created batch.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.split(
   *   {
   *     batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *     close_batch: false,
   *     firsts: {
   *       id: 'bt_017313a7df2d7ac8d895809747',
   *       measure: '10.5',
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *     production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *     scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
   *   },
   * );
   * ```
   */
  split(body: ActionSplitParams, options?: RequestOptions): APIPromise<BatchesAPI.Batch> {
    return this._client.post('/v1/operations/batches/actions/split', { body, ...options });
  }
}

/**
 * Request to close a batch.
 */
export interface CloseBatchRequest {
  /**
   * Batch ID.
   */
  batch_id: string;
}

/**
 * Request to delete multiple batches.
 */
export interface DeleteManyBatchesRequest {
  /**
   * Batch IDs to delete.
   */
  batch_ids: Array<string>;
}

/**
 * Request to initialize a batch at a scanning station.
 */
export interface InitializeBatchRequest {
  /**
   * ID of the batch to initialize; the batch must be open and not yet scanned.
   */
  batch_id: string;

  /**
   * Scanning station ID.
   */
  scanning_station_id: string;
}

/**
 * Request to merge multiple batches into one.
 */
export interface MergeBatchesRequest {
  /**
   * Batch IDs to merge.
   *
   * Duplicates are rejected. For single-part production steps all batches must be of
   * the same item; for multi-part steps supply at least one batch per part the step
   * consumes.
   */
  batch_ids: Array<string>;

  /**
   * The production step the merged batch is created at.
   */
  production_step_id: string;

  /**
   * Scanning station ID performing the merge.
   */
  scanning_station_id: string;
}

/**
 * Request to move batches to a production step.
 */
export interface MoveBatchesRequest {
  /**
   * Batch IDs to move.
   *
   * Pass a single ID to advance one batch, or multiple IDs (one per part) when the
   * target step combines multiple parts.
   */
  batch_ids: Array<string>;

  /**
   * Target production step ID.
   */
  production_step_id: string;

  /**
   * Scanning station ID performing the move.
   */
  scanning_station_id: string;
}

/**
 * Request to split a quantity off one or more batches into a new batch.
 */
export interface SplitBatchRequest {
  /**
   * Batch IDs to split from.
   *
   * Pass a single ID for single-part production steps, or multiple IDs (one per
   * part) for multi-part steps.
   */
  batch_ids: Array<string>;

  /**
   * Whether to close the source batches after splitting.
   *
   * When the source batches are left open, each is still closed automatically once
   * its quantity is fully used by splits.
   */
  close_batch: boolean;

  /**
   * Quantity input for a split operation.
   */
  firsts: SplitQuantityInput;

  /**
   * The production step the new batch is created at.
   */
  production_step_id: string;

  /**
   * Scanning station ID performing the split.
   */
  scanning_station_id: string;

  /**
   * Quantity input for a split operation.
   */
  seconds?: SplitQuantityInput;

  /**
   * Quantity input for a split operation.
   */
  waste?: SplitQuantityInput;
}

/**
 * Quantity input for a split operation.
 */
export interface SplitQuantityInput {
  /**
   * Identifier for this split quantity.
   */
  id: string;

  /**
   * Quantity to split off, as a decimal measure expressed in `unit_id`.
   */
  measure: string;

  /**
   * ID of the unit the measure is expressed in.
   */
  unit_id: string;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Batch IDs to delete.
   */
  batch_ids: Array<string>;
}

export interface ActionCloseParams {
  /**
   * Batch ID.
   */
  batch_id: string;
}

export interface ActionInitializeParams {
  /**
   * ID of the batch to initialize; the batch must be open and not yet scanned.
   */
  batch_id: string;

  /**
   * Scanning station ID.
   */
  scanning_station_id: string;
}

export interface ActionMergeParams {
  /**
   * Batch IDs to merge.
   *
   * Duplicates are rejected. For single-part production steps all batches must be of
   * the same item; for multi-part steps supply at least one batch per part the step
   * consumes.
   */
  batch_ids: Array<string>;

  /**
   * The production step the merged batch is created at.
   */
  production_step_id: string;

  /**
   * Scanning station ID performing the merge.
   */
  scanning_station_id: string;
}

export interface ActionMoveParams {
  /**
   * Batch IDs to move.
   *
   * Pass a single ID to advance one batch, or multiple IDs (one per part) when the
   * target step combines multiple parts.
   */
  batch_ids: Array<string>;

  /**
   * Target production step ID.
   */
  production_step_id: string;

  /**
   * Scanning station ID performing the move.
   */
  scanning_station_id: string;
}

export interface ActionSplitParams {
  /**
   * Batch IDs to split from.
   *
   * Pass a single ID for single-part production steps, or multiple IDs (one per
   * part) for multi-part steps.
   */
  batch_ids: Array<string>;

  /**
   * Whether to close the source batches after splitting.
   *
   * When the source batches are left open, each is still closed automatically once
   * its quantity is fully used by splits.
   */
  close_batch: boolean;

  /**
   * Quantity input for a split operation.
   */
  firsts: SplitQuantityInput;

  /**
   * The production step the new batch is created at.
   */
  production_step_id: string;

  /**
   * Scanning station ID performing the split.
   */
  scanning_station_id: string;

  /**
   * Quantity input for a split operation.
   */
  seconds?: SplitQuantityInput;

  /**
   * Quantity input for a split operation.
   */
  waste?: SplitQuantityInput;
}

export declare namespace Actions {
  export {
    type CloseBatchRequest as CloseBatchRequest,
    type DeleteManyBatchesRequest as DeleteManyBatchesRequest,
    type InitializeBatchRequest as InitializeBatchRequest,
    type MergeBatchesRequest as MergeBatchesRequest,
    type MoveBatchesRequest as MoveBatchesRequest,
    type SplitBatchRequest as SplitBatchRequest,
    type SplitQuantityInput as SplitQuantityInput,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionCloseParams as ActionCloseParams,
    type ActionInitializeParams as ActionInitializeParams,
    type ActionMergeParams as ActionMergeParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionSplitParams as ActionSplitParams,
  };
}
