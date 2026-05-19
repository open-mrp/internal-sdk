// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as DepartmentsAPI from '../departments';
import * as MachinesAPI from '../machines';
import * as ScanningStationsAPI from '../scanning-stations';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from './batches';
import * as ProductionStepsAPI from '../production-steps/production-steps';
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
   *     batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
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
   *   { batch_id: 'bt_01jm4r6700f8nwq3v5hx2d9ktp' },
   * );
   * ```
   */
  close(body: ActionCloseParams, options?: RequestOptions): APIPromise<Batch> {
    return this._client.post('/v1/operations/batches/actions/close', { body, ...options });
  }

  /**
   * Initializes a batch at the specified scanning station.
   *
   * @example
   * ```ts
   * const batch =
   *   await client.operations.batches.actions.initialize({
   *     batch_id: 'bt_01jm4r6700f8nwq3v5hx2d9ktp',
   *     scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  initialize(body: ActionInitializeParams, options?: RequestOptions): APIPromise<Batch> {
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
   *     batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   },
   * );
   * ```
   */
  merge(body: ActionMergeParams, options?: RequestOptions): APIPromise<Batch> {
    return this._client.post('/v1/operations/batches/actions/merge', { body, ...options });
  }

  /**
   * Moves batches to a production step at the specified scanning station.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.actions.move({
   *   batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
   *   production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   * });
   * ```
   */
  move(body: ActionMoveParams, options?: RequestOptions): APIPromise<Batch> {
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
   *     batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     close_batch: false,
   *     firsts: {
   *       id: 'bt_01jm4r6700f8nwq3v5hx2d9ktp',
   *       measure: '10.5',
   *       unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     },
   *     production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     seconds: {
   *       id: 'id',
   *       measure: 'measure',
   *       unit_id: 'unit_id',
   *     },
   *     waste: {
   *       id: 'id',
   *       measure: 'measure',
   *       unit_id: 'unit_id',
   *     },
   *   },
   * );
   * ```
   */
  split(body: ActionSplitParams, options?: RequestOptions): APIPromise<Batch> {
    return this._client.post('/v1/operations/batches/actions/split', { body, ...options });
  }
}

/**
 * Production batch.
 */
export interface Batch {
  /**
   * Batch ID.
   */
  id: string;

  /**
   * Closed timestamp.
   */
  closed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * Input batch IDs.
   */
  input_batch_ids: Array<string>;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: ItemsAPI.Item | null;

  /**
   * List represents a paginated list of resources.
   */
  lots: Batch.Lots | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: MachinesAPI.ListMachine | null;

  /**
   * Resource type identifier.
   */
  object: 'batch';

  /**
   * Output batch IDs.
   */
  output_batch_ids: Array<string>;

  /**
   * Production run sub-resource.
   */
  production_run: ProductionRun | null;

  /**
   * Production step with all nested data.
   */
  production_step: ProductionStepsAPI.ProductionStep | null;

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Scanned timestamp.
   */
  scanned_at: string | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ScanningStationsAPI.ScanningStation | null;

  /**
   * Value with an associated unit.
   */
  seconds: BatchesAPI.Quantity | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste: BatchesAPI.Quantity | null;
}

export namespace Batch {
  /**
   * List represents a paginated list of resources.
   */
  export interface Lots {
    /**
     * Resources in this page.
     */
    data: Array<Lots.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Lots {
    /**
     * Lot associated with a batch.
     */
    export interface Data {
      /**
       * Lot number.
       */
      lot_number: string;

      /**
       * Lot type (material or productionRun).
       */
      type: string;
    }
  }
}

/**
 * Production run sub-resource.
 */
export interface ProductionRun {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Production run number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';
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
  seconds: SplitQuantityInput | null;

  /**
   * Quantity input for a split operation.
   */
  waste: SplitQuantityInput | null;
}

export declare namespace Actions {
  export {
    type Batch as Batch,
    type ProductionRun as ProductionRun,
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
