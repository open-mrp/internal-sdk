// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as UnitsAPI from '../../catalog/units/units';
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
  Batch,
  ProductionRun,
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
   * const batch = await client.operations.batches.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ActionsAPI.Batch> {
    return this._client.delete(path`/v1/operations/batches/${id}`, options);
  }

  /**
   * Returns possible next production steps for a batch at a given scanning station.
   *
   * @example
   * ```ts
   * const response = await client.operations.batches.nextSteps(
   *   'id',
   *   {
   *     scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   },
   * );
   * ```
   */
  nextSteps(
    id: string,
    body: BatchNextStepsParams,
    options?: RequestOptions,
  ): APIPromise<BatchNextStepsResponse> {
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
   *     batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  remainingQuantities(body: BatchRemainingQuantitiesParams, options?: RequestOptions): APIPromise<Quantity> {
    return this._client.post('/v1/operations/batches/remaining-quantities', { body, ...options });
  }

  /**
   * Returns the production flow graph for a batch, including all input and output
   * batch relationships.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.batches.retrieveFlow('id');
   * ```
   */
  retrieveFlow(id: string, options?: RequestOptions): APIPromise<BatchRetrieveFlowResponse> {
    return this._client.get(path`/v1/operations/batches/${id}/flow`, options);
  }
}

/**
 * Value with an associated unit.
 */
export interface Quantity {
  /**
   * Quantity ID.
   */
  id: string;

  /**
   * Formatted value with unit abbreviation (e.g. "$1,234.56" or "100 kg").
   */
  display_value: string;

  /**
   * Resource type identifier.
   */
  object: 'quantity';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: UnitsAPI.Unit | null;

  /**
   * Decimal value.
   */
  value: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface BatchNextStepsResponse {
  /**
   * Resources in this page.
   */
  data: Array<BatchNextStepsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace BatchNextStepsResponse {
  /**
   * Production step information for the scanning next-steps response.
   */
  export interface Data {
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
}

/**
 * List represents a paginated list of resources.
 */
export interface BatchRetrieveFlowResponse {
  /**
   * Resources in this page.
   */
  data: Array<BatchRetrieveFlowResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace BatchRetrieveFlowResponse {
  /**
   * Batch within a production flow graph, including input and output edges.
   */
  export interface Data {
    /**
     * Production batch.
     */
    batch: ActionsAPI.Batch;

    /**
     * IDs of batches that feed into this batch.
     */
    input_batch_ids: Array<string>;

    /**
     * Resource type identifier.
     */
    object: 'batch_flow_node';

    /**
     * IDs of batches this batch feeds into.
     */
    output_batch_ids: Array<string>;
  }
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
    type Quantity as Quantity,
    type BatchNextStepsResponse as BatchNextStepsResponse,
    type BatchRetrieveFlowResponse as BatchRetrieveFlowResponse,
    type BatchNextStepsParams as BatchNextStepsParams,
    type BatchRemainingQuantitiesParams as BatchRemainingQuantitiesParams,
  };

  export {
    Actions as Actions,
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
