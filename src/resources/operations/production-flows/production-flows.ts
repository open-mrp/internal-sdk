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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * The production flow graph for an item.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  steps: ListProductionFlowStep | null;
}

/**
 * A material consumed by a step in the production flow, with its quantity and
 * expected waste.
 */
export interface ProductionFlowConsumption {
  /**
   * Consumption record ID.
   */
  id: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  waste_quantity: AccountUsersAPI.Quantity | null;
}

/**
 * The item and quantity produced by a step in the production flow.
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
   * An entry in your catalog: something you sell, consume, or build with.
   */
  produced_item: AccountUsersAPI.Item | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A stage of work within an item's production flow, with its output, material
 * inputs, cost rates, and links to the steps around it.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  machines: AccountUsersAPI.ListMachine | null;

  /**
   * Display name of the step.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  out_steps: AccountUsersAPI.ListProductionStep | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  overhead_rate: AccountUsersAPI.Rate | null;

  /**
   * The item and quantity produced by a step in the production flow.
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
