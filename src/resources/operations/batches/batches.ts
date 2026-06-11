// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionCloseParams,
  ActionInitializeParams,
  ActionMergeParams,
  ActionMoveParams,
  ActionSplitParams,
  Actions,
  CloseBatchRequest,
  DeleteManyBatchesRequest,
  InitializeBatchRequest,
  MergeBatchesRequest,
  MoveBatchesRequest,
  SplitBatchRequest,
  SplitQuantityInput,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage production batches, batch flows, and scanning station operations.
 */
export class Batches extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Deletes a batch by ID.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.delete(
   *   'bt_017313a7df2d7ac8d895809747',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Batch> {
    return this._client.delete(path`/v1/operations/batches/${id}`, options);
  }

  /**
   * Returns possible next production steps for a batch at a given scanning station.
   *
   * @example
   * ```ts
   * const listScanningProductionStepInfo =
   *   await client.operations.batches.nextSteps(
   *     'bt_017313a7df2d7ac8d895809747',
   *     {
   *       scanning_station_id:
   *         'scst_0129335dd6286056a97024fcc1',
   *     },
   *   );
   * ```
   */
  nextSteps(
    id: string,
    body: BatchNextStepsParams,
    options?: RequestOptions,
  ): APIPromise<ListScanningProductionStepInfo> {
    return this._client.post(path`/v1/operations/batches/${id}/next-steps`, { body, ...options });
  }

  /**
   * Returns the remaining quantity available to split from the specified batches at
   * a given production step.
   *
   * @example
   * ```ts
   * const quantity =
   *   await client.operations.batches.remainingQuantities({
   *     batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *     production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *   });
   * ```
   */
  remainingQuantities(
    body: BatchRemainingQuantitiesParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Quantity> {
    return this._client.post('/v1/operations/batches/remaining-quantities', { body, ...options });
  }

  /**
   * Returns the production flow graph for a batch, including all input and output
   * batch relationships.
   *
   * @example
   * ```ts
   * const listBatchFlowNode =
   *   await client.operations.batches.retrieveFlow(
   *     'bt_017313a7df2d7ac8d895809747',
   *   );
   * ```
   */
  retrieveFlow(id: string, options?: RequestOptions): APIPromise<ListBatchFlowNode> {
    return this._client.get(path`/v1/operations/batches/${id}/flow`, options);
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
   * When the batch was closed; `null` while the batch is still open.
   */
  closed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: AccountUsersAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  input_batches: ListBatchReference | null;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * List represents a paginated list of resources.
   */
  lots: ListBatchLot | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: AccountUsersAPI.ListMachine | null;

  /**
   * Resource type identifier.
   */
  object: 'batch';

  /**
   * List represents a paginated list of resources.
   */
  output_batches: ListBatchReference | null;

  /**
   * Production run sub-resource.
   */
  production_run: ProductionRun | null;

  /**
   * Production step with all nested data.
   */
  production_step: AccountUsersAPI.ProductionStep | null;

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * When the batch was scanned at its scanning station; `null` if it has not been
   * scanned yet.
   */
  scanned_at: string | null;

  /**
   * Scanning station resource.
   */
  scanning_station: AccountUsersAPI.ScanningStation | null;

  /**
   * Value with an associated unit.
   */
  seconds: AccountUsersAPI.Quantity | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste: AccountUsersAPI.Quantity | null;
}

/**
 * Batch within a production flow graph, including input and output edges.
 */
export interface BatchFlowNode {
  /**
   * Production batch.
   */
  batch: Batch;

  /**
   * List represents a paginated list of resources.
   */
  input_batches: ListBatchReference | null;

  /**
   * Resource type identifier.
   */
  object: 'batch_flow_node';

  /**
   * List represents a paginated list of resources.
   */
  output_batches: ListBatchReference | null;
}

/**
 * Lot associated with a batch.
 */
export interface BatchLot {
  /**
   * Lot number.
   */
  lot_number: string;

  /**
   * Resource type identifier.
   */
  object: 'batch_lot';

  /**
   * Source of the lot number.
   *
   * - `material`: the lot number traces a raw material consumed by the batch.
   * - `productionRun`: the lot number is the production run number the batch belongs
   *   to.
   */
  type: string;
}

/**
 * Minimal reference to another batch, carrying only the id and object
 * discriminator.
 */
export interface BatchReference {
  /**
   * Batch ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'batch';
}

/**
 * Request to retrieve possible next production steps for a batch.
 */
export interface GetPossibleNextStepsRequest {
  /**
   * Scanning station ID to evaluate next steps from.
   */
  scanning_station_id: string;
}

/**
 * Request to get the remaining quantity available to split from batches.
 */
export interface GetRemainingQuantityToSplitRequest {
  /**
   * Batch IDs to check remaining quantities for.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to check against.
   */
  production_step_id: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListBatchFlowNode {
  /**
   * Resources in this page.
   */
  data: Array<BatchFlowNode>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListBatchLot {
  /**
   * Resources in this page.
   */
  data: Array<BatchLot>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListBatchReference {
  /**
   * Resources in this page.
   */
  data: Array<BatchReference>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListScanningProductionStepInfo {
  /**
   * Resources in this page.
   */
  data: Array<ScanningProductionStepInfo>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
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
 * Production step information for the scanning next-steps response.
 */
export interface ScanningProductionStepInfo {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Whether this step supports multi-part batches.
   */
  is_multi_part: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'scanning_production_step_info';
}

export interface BatchNextStepsParams {
  /**
   * Scanning station ID to evaluate next steps from.
   */
  scanning_station_id: string;
}

export interface BatchRemainingQuantitiesParams {
  /**
   * Batch IDs to check remaining quantities for.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to check against.
   */
  production_step_id: string;
}

Batches.Actions = Actions;

export declare namespace Batches {
  export {
    type Batch as Batch,
    type BatchFlowNode as BatchFlowNode,
    type BatchLot as BatchLot,
    type BatchReference as BatchReference,
    type GetPossibleNextStepsRequest as GetPossibleNextStepsRequest,
    type GetRemainingQuantityToSplitRequest as GetRemainingQuantityToSplitRequest,
    type ListBatchFlowNode as ListBatchFlowNode,
    type ListBatchLot as ListBatchLot,
    type ListBatchReference as ListBatchReference,
    type ListScanningProductionStepInfo as ListScanningProductionStepInfo,
    type ProductionRun as ProductionRun,
    type ScanningProductionStepInfo as ScanningProductionStepInfo,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
  };

  export {
    Actions as Actions,
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
