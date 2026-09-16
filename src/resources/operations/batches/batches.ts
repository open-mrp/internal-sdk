// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
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
   * Deletes a batch by ID and returns the deleted batch.
   *
   * Deleting a batch also removes its links to the batches feeding into and out of
   * it, breaking the production flow at that point, and detaches it from any
   * machines. After deletion, the batch's production run is closed automatically
   * once all of its batches are scanned or deleted. Deleting the same batch twice
   * reports that it has already been deleted.
   *
   * This endpoint requires the permission: `batches:delete`.
   *
   * @example
   * ```ts
   * const batch = await client.operations.batches.delete(
   *   'bt_fuies8j4pk45',
   * );
   * ```
   */
  delete(
    id: string,
    params: BatchDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Batch> {
    const { include } = params ?? {};
    return this._client.delete(path`/v1/operations/batches/${id}`, { query: { include }, ...options });
  }

  /**
   * Returns the production steps a batch can be initialized at from a given scanning
   * station.
   *
   * Use this to drive the step picker on a scanning terminal when an operator scans
   * a batch that has not been scanned before. Initializing is the batch's first
   * scan, so there is no prior step to advance from: the steps offered are the ones
   * assigned to the given scanning station that produce the batch's own item. A
   * batch whose item nothing at that station makes comes back with an empty list.
   * For a batch that has already been scanned, use Get Possible Next Steps instead.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listScanningProductionStepInfo =
   *   await client.operations.batches.initSteps(
   *     'bt_fuies8j4pk45',
   *     { scanning_station_id: 'scst_t71bn7lq5yov' },
   *   );
   * ```
   */
  initSteps(
    id: string,
    body: BatchInitStepsParams,
    options?: RequestOptions,
  ): APIPromise<ListScanningProductionStepInfo> {
    return this._client.post(path`/v1/operations/batches/${id}/init-steps`, { body, ...options });
  }

  /**
   * Returns the production steps a batch can be advanced to from a given scanning
   * station.
   *
   * Use this to drive the step picker on a scanning terminal after an operator scans
   * a batch. Traversal starts at the batch: an open batch that has already been
   * scanned offers the steps that come after its current step, while a closed batch
   * is followed downstream to the batches it produced and the search continues from
   * there. Only steps assigned to the given scanning station are returned, so a
   * batch with nothing left to do at that station comes back with an empty list.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listScanningProductionStepInfo =
   *   await client.operations.batches.nextSteps(
   *     'bt_fuies8j4pk45',
   *     { scanning_station_id: 'scst_t71bn7lq5yov' },
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
   * Use this to cap how much an operator can record on the next split. The remaining
   * quantity is the step's expected output for the source batches minus the
   * quantities already split off into output batches, expressed in the step's
   * produced unit. When a single batch ID is supplied, output already recorded as
   * seconds and waste also counts against the remainder; when several are supplied,
   * only first-quality output does.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const quantity =
   *   await client.operations.batches.remainingQuantities({
   *     batch_ids: ['bt_fuies8j4pk45'],
   *     production_step_id: 'prst_0ht5mkqx5a6t',
   *   });
   * ```
   */
  remainingQuantities(
    params: BatchRemainingQuantitiesParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Quantity> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/batches/remaining-quantities', {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns the full production flow graph containing a batch.
   *
   * The flow is every batch connected to the given batch through input/output
   * relationships, in both directions, including the batch itself. Nodes come back
   * in no particular order; rebuild the graph from each node's input and output
   * edges rather than from their position in the list.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listBatchFlowNode =
   *   await client.operations.batches.retrieveFlow(
   *     'bt_fuies8j4pk45',
   *   );
   * ```
   */
  retrieveFlow(
    id: string,
    query: BatchRetrieveFlowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListBatchFlowNode> {
    return this._client.get(path`/v1/operations/batches/${id}/flow`, { query, ...options });
  }
}

/**
 * A quantity of an item tracked as it moves through production.
 *
 * Batches are created by production runs and advanced through production steps by
 * scanning them at scanning stations — initializing, moving, merging, or splitting
 * them. Input and output references link batches into a production flow graph.
 */
export interface Batch {
  /**
   * Batch ID.
   */
  id: string;

  /**
   * When the batch was closed.
   *
   * A batch closes automatically when it reaches the last production step, when it
   * is moved or merged into a downstream batch, and when everything split off it
   * accounts for its whole quantity; it can also be closed explicitly.
   */
  closed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  input_batches: ListBatchReference | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lots: ListBatchLot | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  machines: CoreAPI.ListEntity | null;

  /**
   * Resource type identifier.
   */
  object: 'batch';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  output_batches: ListBatchReference | null;

  /**
   * Minimal reference to the production run a batch was created under.
   */
  production_run: ProductionRunReference | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_step: CoreAPI.Entity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * When the batch was scanned at its scanning station.
   *
   * Only initializing a batch stamps this timestamp. Batches created by a move,
   * merge, or split are attached to the station that produced them but are never
   * marked as scanned.
   */
  scanned_at: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  scanning_station: CoreAPI.Entity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  seconds: AccountUsersAPI.Quantity | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  waste: AccountUsersAPI.Quantity | null;
}

/**
 * Batch within a production flow graph, including input and output edges.
 */
export interface BatchFlowNode {
  /**
   * A quantity of an item tracked as it moves through production.
   *
   * Batches are created by production runs and advanced through production steps by
   * scanning them at scanning stations — initializing, moving, merging, or splitting
   * them. Input and output references link batches into a production flow graph.
   */
  batch: Batch;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  input_batches: ListBatchReference | null;

  /**
   * Resource type identifier.
   */
  object: 'batch_flow_node';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  output_batches: ListBatchReference | null;
}

/**
 * A lot number recorded against a batch for traceability.
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
  type: 'material' | 'productionRun';
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
 * Request to retrieve the production steps a batch can be initialized at.
 */
export interface GetPossibleInitStepsRequest {
  /**
   * Scanning station ID to evaluate initialization steps from.
   */
  scanning_station_id: string;
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
   *
   * Pass a single ID for a single-part step, or one ID per part for a multi-part
   * step. Each ID is resolved forward through its production flow to the batch that
   * is actually available at the step, so an operator can scan an earlier batch in
   * the chain.
   */
  batch_ids: Array<string>;

  /**
   * The production step the split would be performed at.
   *
   * Its configuration determines the expected output quantity and the unit the
   * remainder is expressed in.
   */
  production_step_id: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Minimal reference to the production run a batch was created under.
 */
export interface ProductionRunReference {
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
   * Production step name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'scanning_production_step_info';

  /**
   * How many distinct part items the step draws on, which decides how an operator
   * scans into it.
   *
   * - `single`: the step consumes one part item, so a single scan advances a batch
   *   into it.
   * - `multi_part`: the step consumes several parts at once, so one batch per part
   *   must be scanned before merging or splitting into it.
   */
  type: 'single' | 'multi_part';
}

export interface BatchDeleteParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'quantity.unit' | 'seconds.unit' | 'waste.unit'>;
}

export interface BatchInitStepsParams {
  /**
   * Scanning station ID to evaluate initialization steps from.
   */
  scanning_station_id: string;
}

export interface BatchNextStepsParams {
  /**
   * Scanning station ID to evaluate next steps from.
   */
  scanning_station_id: string;
}

export interface BatchRemainingQuantitiesParams {
  /**
   * Body param: Batch IDs to check remaining quantities for.
   *
   * Pass a single ID for a single-part step, or one ID per part for a multi-part
   * step. Each ID is resolved forward through its production flow to the batch that
   * is actually available at the step, so an operator can scan an earlier batch in
   * the chain.
   */
  batch_ids: Array<string>;

  /**
   * Body param: The production step the split would be performed at.
   *
   * Its configuration determines the expected output quantity and the unit the
   * remainder is expressed in.
   */
  production_step_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;
}

export interface BatchRetrieveFlowParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'batch.quantity.unit' | 'batch.seconds.unit' | 'batch.waste.unit'>;
}

Batches.Actions = Actions;

export declare namespace Batches {
  export {
    type Batch as Batch,
    type BatchFlowNode as BatchFlowNode,
    type BatchLot as BatchLot,
    type BatchReference as BatchReference,
    type GetPossibleInitStepsRequest as GetPossibleInitStepsRequest,
    type GetPossibleNextStepsRequest as GetPossibleNextStepsRequest,
    type GetRemainingQuantityToSplitRequest as GetRemainingQuantityToSplitRequest,
    type ListBatchFlowNode as ListBatchFlowNode,
    type ListBatchLot as ListBatchLot,
    type ListBatchReference as ListBatchReference,
    type ListScanningProductionStepInfo as ListScanningProductionStepInfo,
    type ProductionRunReference as ProductionRunReference,
    type ScanningProductionStepInfo as ScanningProductionStepInfo,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchInitStepsParams as BatchInitStepsParams,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
    type BatchRetrieveFlowParams as BatchRetrieveFlowParams,
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
