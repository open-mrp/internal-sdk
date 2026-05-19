// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as DepartmentsAPI from '../departments';
import * as MachinesAPI from '../machines';
import * as OperationsAPI from '../operations';
import * as ScanningStationsAPI from '../scanning-stations';
import * as ActionsAPI from './actions';
import { ActionBulkCreateParams, ActionBulkCreateResponse, Actions } from './actions';
import * as ConsumptionsAPI from './consumptions';
import {
  Consumption as ConsumptionsAPIConsumption,
  ConsumptionCreateParams,
  ConsumptionDeleteParams,
  ConsumptionRetrieveParams,
  ConsumptionUpdateParams,
  Consumptions as ConsumptionsAPIConsumptions,
} from './consumptions';
import * as ProductionsAPI from './productions';
import {
  ProductionOutput,
  ProductionRetrieveParams,
  ProductionUpdateParams,
  Productions,
} from './productions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage production steps, their rates, productions, and consumptions.
 */
export class ProductionSteps extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  consumptions: ConsumptionsAPI.Consumptions = new ConsumptionsAPI.Consumptions(this._client);
  productions: ProductionsAPI.Productions = new ProductionsAPI.Productions(this._client);

  /**
   * Returns a production step by ID.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.retrieve(
   *     'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductionStepRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionStep> {
    return this._client.get(path`/v1/operations/production-steps/${id}`, { query, ...options });
  }

  /**
   * Partially updates a production step.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.update(
   *     'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       leveling_factor: '1.15',
   *       name: 'Assembly Step A',
   *       scanning_station_id:
   *         'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: ProductionStepUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionStep> {
    return this._client.patch(path`/v1/operations/production-steps/${id}`, { body, ...options });
  }

  /**
   * Deletes a production step and its associated data.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.delete(
   *     'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionStepDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-steps/${id}`, options);
  }

  /**
   * Creates a production step with production output, rates, and consumptions.
   *
   * @example
   * ```ts
   * const productionStep = await client.operations.productionSteps.productionSteps({
   *   allowances: '0.05',
   *   consumptions: [
   *     {
   *       item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '50',
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       waste_quantity_value: '2',
   *       waste_quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       instructions: null,
   *     },
   *   ],
   *   labor_rate: {
   *     value: '25.00',
   *     numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   },
   *   labor_time: {
   *     value: '1.5',
   *     numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   },
   *   leveling_factor: '1.10',
   *   name: 'Mixing',
   *   overhead_rate: {
   *     value: '15.00',
   *     numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   },
   *   production: {
   *     item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
   *     quantity_value: '100',
   *     quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   },
   *   scanning_station_id: 'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   * });
   * ```
   */
  productionSteps(
    body: ProductionStepProductionStepsParams,
    options?: RequestOptions,
  ): APIPromise<ProductionStep> {
    return this._client.post('/v1/operations/production-steps', { body, ...options });
  }

  /**
   * Returns a paginated list of production steps for the current account.
   *
   * @example
   * ```ts
   * const listProductionStep =
   *   await client.operations.productionSteps.retrieveProductionSteps();
   * ```
   */
  retrieveProductionSteps(
    query: ProductionStepRetrieveProductionStepsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionStep> {
    return this._client.get('/v1/operations/production-steps', { query, ...options });
  }
}

/**
 * Rate configuration input.
 */
export interface CreateRateInput {
  /**
   * Denominator unit ID.
   */
  denominator_unit_id: string;

  /**
   * Numerator unit ID.
   */
  numerator_unit_id: string;

  /**
   * Value as a decimal string.
   */
  value: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionStep {
  /**
   * Resources in this page.
   */
  data: Array<ProductionStep>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Production step with all nested data.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * List represents a paginated list of resources.
   */
  consumptions: ProductionStep.Consumptions | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  labor_rate: OperationsAPI.Rate | null;

  /**
   * Rate resource.
   */
  labor_time: OperationsAPI.Rate | null;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: MachinesAPI.ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'production_step';

  /**
   * List represents a paginated list of resources.
   */
  out_steps: ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: OperationsAPI.Rate | null;

  /**
   * Production output of a production step.
   */
  production: ProductionsAPI.ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ScanningStationsAPI.ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace ProductionStep {
  /**
   * List represents a paginated list of resources.
   */
  export interface Consumptions {
    /**
     * Resources in this page.
     */
    data: Array<ConsumptionsAPI.Consumption>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }
}

export interface ProductionStepDeleteResponse {}

export interface ProductionStepRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'production'
    | 'production.produced_item'
    | 'consumptions'
    | 'consumptions.consumed_item'
    | 'consumptions.quantity'
    | 'consumptions.waste_quantity'
    | 'machines'
    | 'scanning_station'
    | 'department'
    | 'in_steps'
    | 'out_steps'
  >;
}

export interface ProductionStepUpdateParams {
  /**
   * Allowances as a decimal string.
   */
  allowances?: string;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Scanning station ID.
   */
  scanning_station_id?: string;
}

export interface ProductionStepProductionStepsParams {
  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * Consumptions.
   */
  consumptions: Array<ProductionStepProductionStepsParams.Consumption>;

  /**
   * Rate configuration input.
   */
  labor_rate: CreateRateInput;

  /**
   * Rate configuration input.
   */
  labor_time: CreateRateInput;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Rate configuration input.
   */
  overhead_rate: CreateRateInput;

  /**
   * Production output input.
   */
  production: ProductionStepProductionStepsParams.Production;

  /**
   * Department ID.
   */
  department_id?: string;

  /**
   * Notes.
   */
  notes?: string;

  /**
   * Scanning station ID.
   */
  scanning_station_id?: string;
}

export namespace ProductionStepProductionStepsParams {
  /**
   * Consumption input for a production step.
   */
  export interface Consumption {
    /**
     * Item ID.
     */
    item_id: string;

    /**
     * Quantity unit ID.
     */
    quantity_unit_id: string;

    /**
     * Quantity value as a decimal string.
     */
    quantity_value: string;

    /**
     * Waste quantity unit ID.
     */
    waste_quantity_unit_id: string;

    /**
     * Waste quantity value as a decimal string.
     */
    waste_quantity_value: string;

    /**
     * Instructions for how this material is consumed.
     */
    instructions?: string;
  }

  /**
   * Production output input.
   */
  export interface Production {
    /**
     * Item ID.
     */
    item_id: string;

    /**
     * Quantity unit ID.
     */
    quantity_unit_id: string;

    /**
     * Quantity value as a decimal string.
     */
    quantity_value: string;
  }
}

export interface ProductionStepRetrieveProductionStepsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'production'
    | 'production.produced_item'
    | 'consumptions'
    | 'consumptions.consumed_item'
    | 'consumptions.quantity'
    | 'consumptions.waste_quantity'
    | 'machines'
    | 'scanning_station'
    | 'department'
    | 'in_steps'
    | 'out_steps'
  >;

  /**
   * Filter by input step IDs.
   */
  input_step_ids?: Array<string>;

  /**
   * Filter by produced item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by machine IDs.
   */
  machine_ids?: Array<string>;

  /**
   * Filter by output step IDs.
   */
  output_step_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by scanning station IDs.
   */
  scanning_station_ids?: Array<string>;

  /**
   * Filter by start date.
   */
  start_date?: string;
}

ProductionSteps.Actions = Actions;
ProductionSteps.Consumptions = ConsumptionsAPIConsumptions;
ProductionSteps.Productions = Productions;

export declare namespace ProductionSteps {
  export {
    type CreateRateInput as CreateRateInput,
    type ListProductionStep as ListProductionStep,
    type ProductionStep as ProductionStep,
    type ProductionStepDeleteResponse as ProductionStepDeleteResponse,
    type ProductionStepRetrieveParams as ProductionStepRetrieveParams,
    type ProductionStepUpdateParams as ProductionStepUpdateParams,
    type ProductionStepProductionStepsParams as ProductionStepProductionStepsParams,
    type ProductionStepRetrieveProductionStepsParams as ProductionStepRetrieveProductionStepsParams,
  };

  export {
    Actions as Actions,
    type ActionBulkCreateResponse as ActionBulkCreateResponse,
    type ActionBulkCreateParams as ActionBulkCreateParams,
  };

  export {
    ConsumptionsAPIConsumptions as Consumptions,
    type ConsumptionsAPIConsumption as Consumption,
    type ConsumptionCreateParams as ConsumptionCreateParams,
    type ConsumptionRetrieveParams as ConsumptionRetrieveParams,
    type ConsumptionUpdateParams as ConsumptionUpdateParams,
    type ConsumptionDeleteParams as ConsumptionDeleteParams,
  };

  export {
    Productions as Productions,
    type ProductionOutput as ProductionOutput,
    type ProductionRetrieveParams as ProductionRetrieveParams,
    type ProductionUpdateParams as ProductionUpdateParams,
  };
}
