// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionBulkCreateParams,
  Actions,
  BulkCreateConsumptionInput,
  BulkCreateProductionOutputInput,
  BulkCreateProductionStepInput,
  BulkCreateProductionStepResult,
  BulkCreateProductionStepsRequest,
  BulkCreateProductionStepsResponse,
} from './actions';
import * as ConsumptionsAPI from './consumptions';
import {
  ConsumptionCreateParams,
  ConsumptionDeleteParams,
  ConsumptionRetrieveParams,
  ConsumptionUpdateParams,
  Consumptions,
  CreateConsumptionRequest,
  UpdateConsumptionRequest,
} from './consumptions';
import * as ProductionsAPI from './productions';
import {
  ProductionRetrieveParams,
  ProductionUpdateParams,
  Productions,
  UpdateProductionRequest,
} from './productions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage production steps, their rates, productions, and consumptions.
 */
export class ProductionSteps extends APIResource {
  consumptions: ConsumptionsAPI.Consumptions = new ConsumptionsAPI.Consumptions(this._client);
  productions: ProductionsAPI.Productions = new ProductionsAPI.Productions(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a production step with production output, rates, and consumptions.
   *
   * @example
   * ```ts
   * const productionStep = await client.operations.productionSteps.create({
   *   allowances: '0.05',
   *   consumptions: [
   *     {
   *       item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *       quantity_value: '50',
   *       quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       waste_quantity_value: '2',
   *       waste_quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *   ],
   *   labor_rate: {
   *     value: '25.00',
   *     numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *   },
   *   labor_time: {
   *     value: '1.5',
   *     numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *   },
   *   leveling_factor: '1.10',
   *   name: 'Mixing',
   *   overhead_rate: {
   *     value: '15.00',
   *     numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *   },
   *   production: {
   *     item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *     quantity_value: '100',
   *     quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *   },
   *   scanning_station_id: 'scst_0129335dd6286056a97024fcc1',
   * });
   * ```
   */
  create(
    body: ProductionStepCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ProductionStep> {
    return this._client.post('/v1/operations/production-steps', { body, ...options });
  }

  /**
   * Returns a production step by ID.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.retrieve(
   *     'prst_0159474175bb59f4b1990404ee',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductionStepRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ProductionStep> {
    return this._client.get(path`/v1/operations/production-steps/${id}`, { query, ...options });
  }

  /**
   * Partially updates a production step.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.update(
   *     'prst_0159474175bb59f4b1990404ee',
   *     {
   *       leveling_factor: '1.15',
   *       name: 'Assembly Step A',
   *       scanning_station_id:
   *         'scst_0129335dd6286056a97024fcc1',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: ProductionStepUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ProductionStep> {
    return this._client.patch(path`/v1/operations/production-steps/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of production steps for the current account.
   *
   * @example
   * ```ts
   * const listProductionStep =
   *   await client.operations.productionSteps.list();
   * ```
   */
  list(
    query: ProductionStepListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ListProductionStep> {
    return this._client.get('/v1/operations/production-steps', { query, ...options });
  }

  /**
   * Deletes a production step and its associated data.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.delete(
   *     'prst_0159474175bb59f4b1990404ee',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionStepDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-steps/${id}`, options);
  }
}

/**
 * Consumption input for a production step.
 */
export interface CreateConsumptionInput {
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
export interface CreateProductionInput {
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

/**
 * Request to create a production step.
 */
export interface CreateProductionStepRequest {
  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * Consumptions.
   */
  consumptions: Array<CreateConsumptionInput>;

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
  production: CreateProductionInput;

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
 * Request to update a production step.
 */
export interface UpdateProductionStepRequest {
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

export interface ProductionStepDeleteResponse {}

export interface ProductionStepCreateParams {
  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * Consumptions.
   */
  consumptions: Array<CreateConsumptionInput>;

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
  production: CreateProductionInput;

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

export interface ProductionStepListParams {
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

ProductionSteps.Consumptions = Consumptions;
ProductionSteps.Productions = Productions;
ProductionSteps.Actions = Actions;

export declare namespace ProductionSteps {
  export {
    type CreateConsumptionInput as CreateConsumptionInput,
    type CreateProductionInput as CreateProductionInput,
    type CreateProductionStepRequest as CreateProductionStepRequest,
    type CreateRateInput as CreateRateInput,
    type UpdateProductionStepRequest as UpdateProductionStepRequest,
    type ProductionStepDeleteResponse as ProductionStepDeleteResponse,
    type ProductionStepCreateParams as ProductionStepCreateParams,
    type ProductionStepRetrieveParams as ProductionStepRetrieveParams,
    type ProductionStepUpdateParams as ProductionStepUpdateParams,
    type ProductionStepListParams as ProductionStepListParams,
  };

  export {
    Consumptions as Consumptions,
    type CreateConsumptionRequest as CreateConsumptionRequest,
    type UpdateConsumptionRequest as UpdateConsumptionRequest,
    type ConsumptionCreateParams as ConsumptionCreateParams,
    type ConsumptionRetrieveParams as ConsumptionRetrieveParams,
    type ConsumptionUpdateParams as ConsumptionUpdateParams,
    type ConsumptionDeleteParams as ConsumptionDeleteParams,
  };

  export {
    Productions as Productions,
    type UpdateProductionRequest as UpdateProductionRequest,
    type ProductionRetrieveParams as ProductionRetrieveParams,
    type ProductionUpdateParams as ProductionUpdateParams,
  };

  export {
    Actions as Actions,
    type BulkCreateConsumptionInput as BulkCreateConsumptionInput,
    type BulkCreateProductionOutputInput as BulkCreateProductionOutputInput,
    type BulkCreateProductionStepInput as BulkCreateProductionStepInput,
    type BulkCreateProductionStepResult as BulkCreateProductionStepResult,
    type BulkCreateProductionStepsRequest as BulkCreateProductionStepsRequest,
    type BulkCreateProductionStepsResponse as BulkCreateProductionStepsResponse,
    type ActionBulkCreateParams as ActionBulkCreateParams,
  };
}
