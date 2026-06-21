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
   * Creates a production step with its production output, cost rates, and
   * consumptions.
   *
   * The step is automatically connected into the production flow graph based on the
   * items it produces and consumes.
   *
   * This endpoint requires the permission: `production_steps:create`.
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
   * This endpoint requires the permission: `production_steps:read`.
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
   * This endpoint requires the permission: `production_steps:update`.
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
   * This endpoint requires the permission: `production_steps:read`.
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
   * The step's connections in the production flow graph are removed as part of the
   * deletion.
   *
   * This endpoint requires the permission: `production_steps:delete`.
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
   * Unit ID for `waste_quantity_value`.
   */
  waste_quantity_unit_id: string;

  /**
   * Quantity expected to be lost as scrap or waste, as a decimal string.
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
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  allowances: string;

  /**
   * Materials consumed by the step.
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
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  leveling_factor: string;

  /**
   * Display name of the step.
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
   * Free-form notes about the step.
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
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  allowances?: string;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  leveling_factor?: string;

  /**
   * New display name.
   *
   * Must be unique within the account.
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
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  allowances: string;

  /**
   * Materials consumed by the step.
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
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  leveling_factor: string;

  /**
   * Display name of the step.
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
   * Free-form notes about the step.
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
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  allowances?: string;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   */
  leveling_factor?: string;

  /**
   * New display name.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Scanning station ID.
   */
  scanning_station_id?: string;
}

export interface ProductionStepListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only return steps created on or before this timestamp (inclusive).
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
   * Only return steps that are directly fed by any of these upstream steps.
   */
  input_step_ids?: Array<string>;

  /**
   * Only return steps that produce or consume any of these items.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Only return steps with any of these machines assigned.
   */
  machine_ids?: Array<string>;

  /**
   * Only return steps that feed directly into any of these downstream steps.
   */
  output_step_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only return steps assigned to any of these scanning stations.
   */
  scanning_station_ids?: Array<string>;

  /**
   * Only return steps created on or after this timestamp (inclusive).
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
