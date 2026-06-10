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
   * Deletes multiple batches.
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
   * Closes a batch, marking it as completed.
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
   * Initializes a batch at the specified scanning station.
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
   * Merges multiple batches into one at the specified production step and scanning
   * station.
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
   * Moves batches to a production step at the specified scanning station.
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
   * Splits one or more batches into multiple parts with specified quantities,
   * optionally tracking waste and closing the originals.
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
   * Batch ID.
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
   */
  batch_ids: Array<string>;

  /**
   * Production step ID for the merged batch.
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
 * Request to split batches into multiple parts.
 */
export interface SplitBatchRequest {
  /**
   * Batch IDs to split.
   */
  batch_ids: Array<string>;

  /**
   * Whether to close the original batches after splitting.
   */
  close_batch: boolean;

  /**
   * Quantity input for a split operation.
   */
  firsts: SplitQuantityInput;

  /**
   * Production step ID for the split.
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
   * Decimal measure value.
   */
  measure: string;

  /**
   * Unit ID.
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
   * Batch ID.
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
   */
  batch_ids: Array<string>;

  /**
   * Production step ID for the merged batch.
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
   * Batch IDs to split.
   */
  batch_ids: Array<string>;

  /**
   * Whether to close the original batches after splitting.
   */
  close_batch: boolean;

  /**
   * Quantity input for a split operation.
   */
  firsts: SplitQuantityInput;

  /**
   * Production step ID for the split.
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
