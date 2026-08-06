// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionBulkCreateParams,
  ActionBulkUpsertParams,
  ActionExportParams,
  Actions,
  BulkCreateConsumptionInput,
  BulkCreateProductionOutputInput,
  BulkCreateProductionStepInput,
  BulkCreateProductionStepResult,
  BulkCreateProductionStepsRequest,
  BulkCreateProductionStepsResponse,
  BulkUpsertProductionStepsRequest,
  ExportProductionStepsRequest,
  ItemIdentifier,
  UpsertProductionStepInput,
  UpsertRateInput,
  UpsertStepConsumptionInput,
  UpsertStepProductionInput,
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
   * Returns a conflict error if a production step with the same name already exists
   * in the account.
   *
   * This endpoint requires the permission: `production_steps:create`.
   *
   * @example
   * ```ts
   * const productionStep = await client.operations.productionSteps.create({
   *   allowances: '0.05',
   *   labor_rate: {
   *     value: '25.00',
   *     numerator_unit_id: 'un_82bd37dae5po',
   *     denominator_unit_id: 'un_82bd37dae5po',
   *   },
   *   labor_time: {
   *     value: '1.5',
   *     numerator_unit_id: 'un_82bd37dae5po',
   *     denominator_unit_id: 'un_82bd37dae5po',
   *   },
   *   leveling_factor: '1.10',
   *   name: 'Mixing',
   *   overhead_rate: {
   *     value: '15.00',
   *     numerator_unit_id: 'un_82bd37dae5po',
   *     denominator_unit_id: 'un_82bd37dae5po',
   *   },
   *   production: {
   *     item_id: 'it_pej07ckhvu62',
   *     quantity_value: '100',
   *     quantity_unit_id: 'un_82bd37dae5po',
   *   },
   *   consumptions: [
   *     {
   *       item_id: 'it_pej07ckhvu62',
   *       quantity_value: '50',
   *       quantity_unit_id: 'un_82bd37dae5po',
   *       waste_quantity_value: '2',
   *       waste_quantity_unit_id: 'un_82bd37dae5po',
   *     },
   *   ],
   *   scanning_station_id: 'scst_t71bn7lq5yov',
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
   *     'prst_0ht5mkqx5a6t',
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
   * Returns a conflict error if another production step in the account already uses
   * the requested name.
   *
   * This endpoint requires the permission: `production_steps:update`.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.update(
   *     'prst_0ht5mkqx5a6t',
   *     {
   *       leveling_factor: '1.15',
   *       name: 'Assembly Step A',
   *       scanning_station_id: 'scst_t71bn7lq5yov',
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
   * Returns a paginated list of production steps for the current account, newest
   * first.
   *
   * The `q` search term matches against the step name. Filters combine with AND,
   * while the values within a single filter combine with OR.
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
   * Deletes a production step.
   *
   * The step's connections to its upstream and downstream steps are removed as part
   * of the deletion, so the neighboring steps are left unconnected to each other.
   * Deleting a step that was already deleted returns an already-deleted error rather
   * than a not-found error.
   *
   * This endpoint requires the permission: `production_steps:delete`.
   *
   * @example
   * ```ts
   * const productionStep =
   *   await client.operations.productionSteps.delete(
   *     'prst_0ht5mkqx5a6t',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionStepDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-steps/${id}`, options);
  }
}

/**
 * A material a production step consumes, with its quantity and expected waste.
 */
export interface CreateConsumptionInput {
  /**
   * Material the step consumes.
   */
  item_id: string;

  /**
   * Unit for `quantity_value`.
   */
  quantity_unit_id: string;

  /**
   * Quantity value as a decimal string.
   */
  quantity_value: string;

  /**
   * Unit for `waste_quantity_value`.
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
 * The item and quantity a production step produces.
 */
export interface CreateProductionInput {
  /**
   * Item the step produces.
   */
  item_id: string;

  /**
   * Unit for `quantity_value`.
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
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`, so `0` applies no
   * allowance.
   */
  allowances: string;

  /**
   * A rate, expressed as a value together with the units of its numerator and
   * denominator (for example, `25.00` `$` per `hr`).
   */
  labor_rate: CreateRateInput;

  /**
   * A rate, expressed as a value together with the units of its numerator and
   * denominator (for example, `25.00` `$` per `hr`).
   */
  labor_time: CreateRateInput;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`, so `0` applies no
   * leveling correction.
   */
  leveling_factor: string;

  /**
   * Display name of the step.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * A rate, expressed as a value together with the units of its numerator and
   * denominator (for example, `25.00` `$` per `hr`).
   */
  overhead_rate: CreateRateInput;

  /**
   * The item and quantity a production step produces.
   */
  production: CreateProductionInput;

  /**
   * Materials consumed by the step.
   */
  consumptions?: Array<CreateConsumptionInput>;

  /**
   * Department responsible for this step.
   */
  department_id?: string;

  /**
   * Free-form notes about the step.
   */
  notes?: string;

  /**
   * Scanning station where batches at this step are scanned.
   */
  scanning_station_id?: string;
}

/**
 * A rate, expressed as a value together with the units of its numerator and
 * denominator (for example, `25.00` `$` per `hr`).
 */
export interface CreateRateInput {
  /**
   * Unit of the rate's denominator.
   */
  denominator_unit_id: string;

  /**
   * Unit of the rate's numerator.
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
   * Scanning station where batches at this step are scanned.
   */
  scanning_station_id?: string;
}

export interface ProductionStepDeleteResponse {}

export interface ProductionStepCreateParams {
  /**
   * Allowance correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`, so `0` applies no
   * allowance.
   */
  allowances: string;

  /**
   * A rate, expressed as a value together with the units of its numerator and
   * denominator (for example, `25.00` `$` per `hr`).
   */
  labor_rate: CreateRateInput;

  /**
   * A rate, expressed as a value together with the units of its numerator and
   * denominator (for example, `25.00` `$` per `hr`).
   */
  labor_time: CreateRateInput;

  /**
   * Leveling correction factor applied to labor time in cost calculations, as a
   * decimal string.
   *
   * Effective labor time per unit is
   * `labor_time × (1 + leveling_factor) × (1 + allowances)`, so `0` applies no
   * leveling correction.
   */
  leveling_factor: string;

  /**
   * Display name of the step.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * A rate, expressed as a value together with the units of its numerator and
   * denominator (for example, `25.00` `$` per `hr`).
   */
  overhead_rate: CreateRateInput;

  /**
   * The item and quantity a production step produces.
   */
  production: CreateProductionInput;

  /**
   * Materials consumed by the step.
   */
  consumptions?: Array<CreateConsumptionInput>;

  /**
   * Department responsible for this step.
   */
  department_id?: string;

  /**
   * Free-form notes about the step.
   */
  notes?: string;

  /**
   * Scanning station where batches at this step are scanned.
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
   * Scanning station where batches at this step are scanned.
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
  ends_at?: string;

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
  starts_at?: string;
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
    type BulkUpsertProductionStepsRequest as BulkUpsertProductionStepsRequest,
    type ExportProductionStepsRequest as ExportProductionStepsRequest,
    type ItemIdentifier as ItemIdentifier,
    type UpsertProductionStepInput as UpsertProductionStepInput,
    type UpsertRateInput as UpsertRateInput,
    type UpsertStepConsumptionInput as UpsertStepConsumptionInput,
    type UpsertStepProductionInput as UpsertStepProductionInput,
    type ActionBulkCreateParams as ActionBulkCreateParams,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
