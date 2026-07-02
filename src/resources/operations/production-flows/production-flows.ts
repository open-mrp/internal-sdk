// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionConnectStepsParams,
  ActionConnectStepsResponse,
  Actions,
  ConnectStepsRequest,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve and manage production flow graphs.
 */
export class ProductionFlows extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns the production flow graph for the given item.
   *
   * The graph contains the step(s) that produce the item, every upstream step that
   * feeds them, and any connected downstream steps, with each step's production
   * output, consumptions, and connections. The list of steps is empty if no
   * production step produces the item.
   *
   * This endpoint requires the permission: `production_steps:read`.
   *
   * @example
   * ```ts
   * const productionFlow =
   *   await client.operations.productionFlows.retrieveByItem(
   *     'example',
   *   );
   * ```
   */
  retrieveByItem(
    itemID: string,
    query: ProductionFlowRetrieveByItemParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionFlow> {
    return this._client.get(path`/v1/operations/production-flows/by-item/${itemID}`, { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionFlowConsumption {
  /**
   * Resources in this page.
   */
  data: Array<ProductionFlowConsumption>;

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
export interface ListProductionFlowStep {
  /**
   * Resources in this page.
   */
  data: Array<ProductionFlowStep>;

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
 * ProductionFlow is the production flow graph for an item.
 *
 * Contains the step(s) that produce the item, every upstream step that feeds them,
 * and any connected downstream steps.
 */
export interface ProductionFlow {
  /**
   * Resource type identifier.
   */
  object: 'production_flow';

  /**
   * List represents a paginated list of resources.
   */
  steps: ListProductionFlowStep | null;
}

/**
 * ProductionFlowConsumption is a consumption input of a flow step.
 */
export interface ProductionFlowConsumption {
  /**
   * Consumption record ID.
   */
  id: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  consumed_item: AccountUsersAPI.Item | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Instructions for how this material is consumed.
   */
  instructions: string | null;

  /**
   * Resource type identifier.
   */
  object: 'consumption';

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: AccountUsersAPI.Quantity | null;
}

/**
 * ProductionFlowProduction is the production output of a flow step.
 */
export interface ProductionFlowProduction {
  /**
   * Production record ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'production';

  /**
   * Item is an inventory item (product, material, or part).
   */
  produced_item: AccountUsersAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ProductionFlowStep is a step in the production flow.
 */
export interface ProductionFlowStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  allowances: string;

  /**
   * List represents a paginated list of resources.
   */
  consumptions: ListProductionFlowConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: AccountUsersAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: AccountUsersAPI.ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_rate: AccountUsersAPI.Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  labor_time: AccountUsersAPI.Rate | null;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: AccountUsersAPI.ListMachine | null;

  /**
   * Production step name.
   */
  name: string;

  /**
   * Free-form notes about this step.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'production_step';

  /**
   * List represents a paginated list of resources.
   */
  out_steps: AccountUsersAPI.ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  overhead_rate: AccountUsersAPI.Rate | null;

  /**
   * ProductionFlowProduction is the production output of a flow step.
   */
  production: ProductionFlowProduction | null;

  /**
   * A station on the production floor where operators scan batches to perform a
   * batch operation, such as initializing or moving a batch.
   */
  scanning_station: AccountUsersAPI.ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ProductionFlowRetrieveByItemParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'steps'
    | 'steps.production'
    | 'steps.production.produced_item'
    | 'steps.consumptions'
    | 'steps.consumptions.consumed_item'
    | 'steps.consumptions.quantity'
    | 'steps.consumptions.waste_quantity'
    | 'steps.machines'
    | 'steps.scanning_station'
    | 'steps.department'
    | 'steps.in_steps'
    | 'steps.out_steps'
  >;
}

ProductionFlows.Actions = Actions;

export declare namespace ProductionFlows {
  export {
    type ListProductionFlowConsumption as ListProductionFlowConsumption,
    type ListProductionFlowStep as ListProductionFlowStep,
    type ProductionFlow as ProductionFlow,
    type ProductionFlowConsumption as ProductionFlowConsumption,
    type ProductionFlowProduction as ProductionFlowProduction,
    type ProductionFlowStep as ProductionFlowStep,
    type ProductionFlowRetrieveByItemParams as ProductionFlowRetrieveByItemParams,
  };

  export {
    Actions as Actions,
    type ConnectStepsRequest as ConnectStepsRequest,
    type ActionConnectStepsResponse as ActionConnectStepsResponse,
    type ActionConnectStepsParams as ActionConnectStepsParams,
  };
}
