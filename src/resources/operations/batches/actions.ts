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
   * the batches exist. Deleting a batch also removes its links to the batches
   * feeding into and out of it, breaking the production flow at that point, and
   * detaches it from any machines. After deletion, any production run whose batches
   * are now all scanned or deleted is closed automatically.
   *
   * This endpoint requires the permission: `batches:delete`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.batches.actions.bulkDelete({
   *     batch_ids: ['bt_fuies8j4pk45'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/operations/batches/actions/bulk-delete', { body, ...options });
  }

  /**
   * Closes a batch so it can no longer be scanned or advanced through production.
   *
   * Use this to finish a batch whose remaining quantity will not be produced, for
   * example when the floor stops short of the planned output. Batches also close on
   * their own when they reach the last production step, when they are moved or
   * merged into a downstream batch, and when everything split off them accounts for
   * their whole quantity. A closed batch cannot be reopened.
   *
   * This endpoint requires the permission: `batches:delete`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.close(
   *   { batch_id: 'bt_fuies8j4pk45' },
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
   *     batch_id: 'bt_fuies8j4pk45',
   *     scanning_station_id: 'scst_t71bn7lq5yov',
   *   });
   * ```
   */
  initialize(body: ActionInitializeParams, options?: RequestOptions): APIPromise<BatchesAPI.Batch> {
    return this._client.post('/v1/operations/batches/actions/initialize', { body, ...options });
  }

  /**
   * Merges multiple batches into a single new batch at a production step.
   *
   * The new batch is created at the target step and its quantity is scaled from how
   * much input was supplied against the step's configured input-to-output ratio: for
   * a single-part step the source quantities are summed, and for a multi-part step
   * every part must work out to the same output quantity or the merge is rejected.
   * The source batches are linked as inputs and closed, the step's material
   * consumption runs asynchronously afterwards, and the new batch is closed
   * immediately if the target step is the last one in the flow. Returns the newly
   * created batch.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.merge(
   *   {
   *     batch_ids: ['bt_fuies8j4pk45'],
   *     production_step_id: 'prst_0ht5mkqx5a6t',
   *     scanning_station_id: 'scst_t71bn7lq5yov',
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
   * The new batch carries the item the target step produces, and its quantity is
   * scaled from the source quantities against the step's configured input-to-output
   * ratio; when several parts are supplied, each must work out to the same output
   * quantity or the move is rejected. The source batches are linked as inputs and
   * closed, the step's material consumption runs asynchronously afterwards, and the
   * new batch is closed immediately if the target step is the last one in the flow.
   * Returns the newly created batch.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.move({
   *   batch_ids: ['bt_fuies8j4pk45'],
   *   production_step_id: 'prst_0ht5mkqx5a6t',
   *   scanning_station_id: 'scst_t71bn7lq5yov',
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
   * Unlike a move, the operator states how much was produced rather than letting the
   * step's ratio decide, which is how partial output and quality grading are
   * recorded. A new batch carrying the firsts quantity is created at the production
   * step, with any seconds and waste recorded on it, and the source batches are
   * linked as inputs. Only the firsts quantity is added to inventory; seconds and
   * waste still consume input materials. The step's material consumption runs
   * asynchronously afterwards, and the new batch is closed immediately if the step
   * is the last one in the flow. Returns the newly created batch.
   *
   * This endpoint requires the permission: `batches:create`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.split(
   *   {
   *     batch_ids: ['bt_fuies8j4pk45'],
   *     close_batch: false,
   *     firsts: {
   *       id: 'bt_fuies8j4pk45',
   *       measure: '10.5',
   *       unit_id: 'un_82bd37dae5po',
   *     },
   *     production_step_id: 'prst_0ht5mkqx5a6t',
   *     scanning_station_id: 'scst_t71bn7lq5yov',
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
   * ID of the batch to initialize.
   *
   * The batch must belong to a production run, still be open, and not have been
   * scanned before.
   */
  batch_id: string;

  /**
   * ID of the scanning station the batch is being scanned at.
   *
   * The station must have a production step that produces the batch's item, since
   * that step is what the batch is attached to.
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
   * consumes. Each ID is resolved forward through its production flow to the batch
   * that is actually available at the step, so an operator can scan an earlier batch
   * in the chain.
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
   * target step combines multiple parts. Each ID is resolved forward through its
   * production flow to the batch that is actually available at the step, so an
   * operator can scan an earlier batch in the chain.
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
   * part) for multi-part steps. Each ID is resolved forward through its production
   * flow to the batch that is actually available at the step, so an operator can
   * scan an earlier batch in the chain.
   */
  batch_ids: Array<string>;

  /**
   * Whether to close the source batches after splitting.
   *
   * Set this when the operator is done with the source batch even though quantity is
   * left over. When left open, a source batch is still closed automatically once
   * everything split off it (firsts, seconds, and waste together) accounts for its
   * full quantity.
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
   * Client-side identifier for this quantity.
   *
   * Useful for correlating quantities in your own UI; it is not stored and has no
   * effect on the result.
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
   * ID of the batch to initialize.
   *
   * The batch must belong to a production run, still be open, and not have been
   * scanned before.
   */
  batch_id: string;

  /**
   * ID of the scanning station the batch is being scanned at.
   *
   * The station must have a production step that produces the batch's item, since
   * that step is what the batch is attached to.
   */
  scanning_station_id: string;
}

export interface ActionMergeParams {
  /**
   * Batch IDs to merge.
   *
   * Duplicates are rejected. For single-part production steps all batches must be of
   * the same item; for multi-part steps supply at least one batch per part the step
   * consumes. Each ID is resolved forward through its production flow to the batch
   * that is actually available at the step, so an operator can scan an earlier batch
   * in the chain.
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
   * target step combines multiple parts. Each ID is resolved forward through its
   * production flow to the batch that is actually available at the step, so an
   * operator can scan an earlier batch in the chain.
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
   * part) for multi-part steps. Each ID is resolved forward through its production
   * flow to the batch that is actually available at the step, so an operator can
   * scan an earlier batch in the chain.
   */
  batch_ids: Array<string>;

  /**
   * Whether to close the source batches after splitting.
   *
   * Set this when the operator is done with the source batch even though quantity is
   * left over. When left open, a source batch is still closed automatically once
   * everything split off it (firsts, seconds, and waste together) accounts for its
   * full quantity.
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
