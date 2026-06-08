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
   * @example
   * ```ts
   * const consumption =
   *   await client.operations.productionSteps.consumptions.update(
   *     'cp_0152c5d4330f178ebe1158f910',
   *     {
   *       production_step_id: 'prst_0159474175bb59f4b1990404ee',
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
   * Item ID.
   */
  item_id: string;

  /**
   * Consumed quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * Consumed quantity value.
   */
  quantity_value: string;

  /**
   * Waste quantity unit ID.
   */
  waste_quantity_unit_id: string;

  /**
   * Waste quantity value.
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
   * Item ID.
   */
  item_id?: string;

  /**
   * Consumed quantity unit ID.
   */
  quantity_unit_id?: string;

  /**
   * Consumed quantity value.
   */
  quantity_value?: string;

  /**
   * Waste quantity unit ID.
   */
  waste_quantity_unit_id?: string;

  /**
   * Waste quantity value.
   */
  waste_quantity_value?: string;
}

export interface ConsumptionCreateParams {
  /**
   * Body param: Item ID.
   */
  item_id: string;

  /**
   * Body param: Consumed quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * Body param: Consumed quantity value.
   */
  quantity_value: string;

  /**
   * Body param: Waste quantity unit ID.
   */
  waste_quantity_unit_id: string;

  /**
   * Body param: Waste quantity value.
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
   * Body param: Item ID.
   */
  item_id?: string;

  /**
   * Body param: Consumed quantity unit ID.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Consumed quantity value.
   */
  quantity_value?: string;

  /**
   * Body param: Waste quantity unit ID.
   */
  waste_quantity_unit_id?: string;

  /**
   * Body param: Waste quantity value.
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
