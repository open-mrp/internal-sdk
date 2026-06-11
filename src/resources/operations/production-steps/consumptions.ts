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
   * Creates a consumption within a production step.
   *
   * Adding a consumption recomputes the production flow: if another production step
   * produces the consumed item, the two steps are linked upstream/downstream
   * automatically.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.create(
   *     'prst_0159474175bb59f4b1990404ee',
   *     {
   *       item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *       quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       quantity_value: '10.000000000000000000000000000000',
   *       waste_quantity_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
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
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.retrieve(
   *     'cp_0152c5d4330f178ebe1158f910',
   *     {
   *       production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *     },
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
   * Partially updates a consumption within a production step.
   *
   * Omitted fields are left unchanged.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.update(
   *     'cp_0152c5d4330f178ebe1158f910',
   *     {
   *       production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *       quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
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
   * Deletes a consumption from a production step.
   *
   * Any production-flow connections established through this consumption are
   * disconnected. Returns the deleted consumption.
   *
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.delete(
   *     'cp_0152c5d4330f178ebe1158f910',
   *     {
   *       production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *     },
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
   */
  quantity_value: string;

  /**
   * ID of the unit of measure for `waste_quantity_value`.
   */
  waste_quantity_unit_id: string;

  /**
   * Amount of the item lost as waste, as a decimal string, tracked separately from
   * the consumed quantity.
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
   */
  quantity_unit_id?: string;

  /**
   * Amount of the item consumed, as a decimal string.
   */
  quantity_value?: string;

  /**
   * ID of the unit of measure for `waste_quantity_value`.
   */
  waste_quantity_unit_id?: string;

  /**
   * Amount of the item lost as waste, as a decimal string, tracked separately from
   * the consumed quantity.
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
   */
  quantity_value: string;

  /**
   * Body param: ID of the unit of measure for `waste_quantity_value`.
   */
  waste_quantity_unit_id: string;

  /**
   * Body param: Amount of the item lost as waste, as a decimal string, tracked
   * separately from the consumed quantity.
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
   */
  quantity_unit_id?: string;

  /**
   * Body param: Amount of the item consumed, as a decimal string.
   */
  quantity_value?: string;

  /**
   * Body param: ID of the unit of measure for `waste_quantity_value`.
   */
  waste_quantity_unit_id?: string;

  /**
   * Body param: Amount of the item lost as waste, as a decimal string, tracked
   * separately from the consumed quantity.
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
