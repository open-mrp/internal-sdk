// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage consumptions within production steps.
 */
export class Consumptions extends APIResource {
  /**
   * Adds a material input to a production step.
   *
   * Adding a consumption recomputes the production flow: if another production step
   * produces the consumed item, the two steps are linked upstream/downstream
   * automatically.
   *
   * This endpoint requires the permission: `production_steps:create`.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.create(
   *     'prst_0ht5mkqx5a6t',
   *     {
   *       item_id: 'it_pej07ckhvu62',
   *       quantity_unit_id: 'un_82bd37dae5po',
   *       quantity_value: '10.000000000000000000000000000000',
   *       waste_quantity_unit_id: 'un_82bd37dae5po',
   *       waste_quantity_value:
   *         '0.500000000000000000000000000000',
   *       instructions: 'Mix with water before adding',
   *     },
   *   );
   * ```
   */
  create(
    productionStepID: string,
    params: ConsumptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Consumption> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/operations/production-steps/${productionStepID}/consumptions`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a consumption by ID within a production step.
   *
   * This endpoint requires the permission: `production_steps:read`.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.retrieve(
   *     'cp_blst8ze24dy3',
   *     { production_step_id: 'prst_0ht5mkqx5a6t' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ConsumptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Consumption> {
    const { production_step_id, ...query } = params;
    return this._client.get(path`/v1/operations/production-steps/${production_step_id}/consumptions/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Updates a production step's material input.
   *
   * Omitted fields are left unchanged. Each quantity is only rewritten when its
   * value and unit are sent together, and changing the consumed item recomputes the
   * production flow around the step.
   *
   * This endpoint requires the permission: `production_steps:update`.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.update(
   *     'cp_blst8ze24dy3',
   *     {
   *       production_step_id: 'prst_0ht5mkqx5a6t',
   *       quantity_unit_id: 'un_82bd37dae5po',
   *       quantity_value: '20.000000000000000000000000000000',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ConsumptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Consumption> {
    const { production_step_id, include, ...body } = params;
    return this._client.patch(
      path`/v1/operations/production-steps/${production_step_id}/consumptions/${id}`,
      { query: { include }, body, ...options },
    );
  }

  /**
   * Removes a material input from a production step.
   *
   * Any production-flow connections established through this consumption are
   * disconnected, and the remaining consumptions are re-linked. The deleted
   * consumption is returned; deleting it again reports that it has already been
   * deleted.
   *
   * This endpoint requires the permission: `production_steps:delete`.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.delete(
   *     'cp_blst8ze24dy3',
   *     { production_step_id: 'prst_0ht5mkqx5a6t' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: ConsumptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Consumption> {
    const { production_step_id, include } = params;
    return this._client.delete(
      path`/v1/operations/production-steps/${production_step_id}/consumptions/${id}`,
      { query: { include }, ...options },
    );
  }
}

/**
 * Request to create a consumption.
 */
export interface CreateConsumptionRequest {
  /**
   * ID of the item to consume.
   */
  item_id: string;

  /**
   * ID of the unit of measure for `quantity_value`.
   */
  quantity_unit_id: string;

  /**
   * Amount of the item consumed, as a decimal string.
   *
   * Stated against the step's own output rather than a single unit, so a step
   * producing 100 pairs that consumes 5 kg of yarn takes `5`. Material requirements
   * for an order scale it from there.
   */
  quantity_value: string;

  /**
   * ID of the unit of measure for `waste_quantity_value`.
   */
  waste_quantity_unit_id: string;

  /**
   * Amount of the item expected to be lost as waste, as a decimal string.
   *
   * Tracked separately from the consumed quantity, but added to it when material
   * requirements are worked out, since the waste has to be bought as well.
   */
  waste_quantity_value: string;

  /**
   * Instructions for how this material is consumed.
   */
  instructions?: string;
}

/**
 * Request to partially update a consumption.
 */
export interface UpdateConsumptionRequest {
  /**
   * Instructions for how this material is consumed.
   */
  instructions?: string;

  /**
   * ID of the item to consume.
   *
   * Changing the item disconnects any production-flow link based on the previous
   * item and re-links the flow using the new item.
   */
  item_id?: string;

  /**
   * ID of the unit of measure for `quantity_value`.
   *
   * Send it together with `quantity_value`, even when the unit is not changing.
   */
  quantity_unit_id?: string;

  /**
   * Amount of the item consumed, as a decimal string.
   *
   * The consumed quantity only changes when this and `quantity_unit_id` are sent
   * together; sending either one alone leaves it untouched.
   */
  quantity_value?: string;

  /**
   * ID of the unit of measure for `waste_quantity_value`.
   *
   * Send it together with `waste_quantity_value`, even when the unit is not
   * changing.
   */
  waste_quantity_unit_id?: string;

  /**
   * Amount of the item expected to be lost as waste, as a decimal string.
   *
   * The waste quantity only changes when this and `waste_quantity_unit_id` are sent
   * together; sending either one alone leaves it untouched.
   */
  waste_quantity_value?: string;
}

export interface ConsumptionCreateParams {
  /**
   * Body param: ID of the item to consume.
   */
  item_id: string;

  /**
   * Body param: ID of the unit of measure for `quantity_value`.
   */
  quantity_unit_id: string;

  /**
   * Body param: Amount of the item consumed, as a decimal string.
   *
   * Stated against the step's own output rather than a single unit, so a step
   * producing 100 pairs that consumes 5 kg of yarn takes `5`. Material requirements
   * for an order scale it from there.
   */
  quantity_value: string;

  /**
   * Body param: ID of the unit of measure for `waste_quantity_value`.
   */
  waste_quantity_unit_id: string;

  /**
   * Body param: Amount of the item expected to be lost as waste, as a decimal
   * string.
   *
   * Tracked separately from the consumed quantity, but added to it when material
   * requirements are worked out, since the waste has to be bought as well.
   */
  waste_quantity_value: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'consumed_item'>;

  /**
   * Body param: Instructions for how this material is consumed.
   */
  instructions?: string;
}

export interface ConsumptionRetrieveParams {
  /**
   * Path param: Production step ID.
   */
  production_step_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'consumed_item'>;
}

export interface ConsumptionUpdateParams {
  /**
   * Path param: Production step ID.
   */
  production_step_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'consumed_item'>;

  /**
   * Body param: Instructions for how this material is consumed.
   */
  instructions?: string;

  /**
   * Body param: ID of the item to consume.
   *
   * Changing the item disconnects any production-flow link based on the previous
   * item and re-links the flow using the new item.
   */
  item_id?: string;

  /**
   * Body param: ID of the unit of measure for `quantity_value`.
   *
   * Send it together with `quantity_value`, even when the unit is not changing.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Amount of the item consumed, as a decimal string.
   *
   * The consumed quantity only changes when this and `quantity_unit_id` are sent
   * together; sending either one alone leaves it untouched.
   */
  quantity_value?: string;

  /**
   * Body param: ID of the unit of measure for `waste_quantity_value`.
   *
   * Send it together with `waste_quantity_value`, even when the unit is not
   * changing.
   */
  waste_quantity_unit_id?: string;

  /**
   * Body param: Amount of the item expected to be lost as waste, as a decimal
   * string.
   *
   * The waste quantity only changes when this and `waste_quantity_unit_id` are sent
   * together; sending either one alone leaves it untouched.
   */
  waste_quantity_value?: string;
}

export interface ConsumptionDeleteParams {
  /**
   * Path param: Production step ID.
   */
  production_step_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'consumed_item'>;
}

export declare namespace Consumptions {
  export {
    type CreateConsumptionRequest as CreateConsumptionRequest,
    type UpdateConsumptionRequest as UpdateConsumptionRequest,
    type ConsumptionCreateParams as ConsumptionCreateParams,
    type ConsumptionRetrieveParams as ConsumptionRetrieveParams,
    type ConsumptionUpdateParams as ConsumptionUpdateParams,
    type ConsumptionDeleteParams as ConsumptionDeleteParams,
  };
}
