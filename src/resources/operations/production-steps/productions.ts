// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage production steps, their rates, productions, and consumptions.
 */
export class Productions extends APIResource {
  /**
   * Returns a production output by ID within a production step.
   *
   * This endpoint requires the permission: `production_steps:read`.
   *
   * @example
   * ```ts
   * const productionOutput =
   *   await client.operations.productionSteps.productions.retrieve(
   *     'example',
   *     { production_step_id: 'prst_0ht5mkqx5a6t' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ProductionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ProductionOutput> {
    const { production_step_id, ...query } = params;
    return this._client.get(path`/v1/operations/production-steps/${production_step_id}/productions/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates a production output within a production step.
   *
   * This endpoint requires the permission: `production_steps:update`.
   *
   * @example
   * ```ts
   * const productionOutput =
   *   await client.operations.productionSteps.productions.update(
   *     'example',
   *     {
   *       production_step_id: 'prst_0ht5mkqx5a6t',
   *       item_id: 'it_pej07ckhvu62',
   *       quantity_unit_id: 'un_82bd37dae5po',
   *       quantity_value: '500',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ProductionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ProductionOutput> {
    const { production_step_id, ...body } = params;
    return this._client.patch(path`/v1/operations/production-steps/${production_step_id}/productions/${id}`, {
      body,
      ...options,
    });
  }
}

/**
 * Request to update a production output.
 */
export interface UpdateProductionRequest {
  /**
   * Item this step produces.
   *
   * Changing the item recomputes all of the step's connections in the production
   * flow graph from the items it now produces and consumes, which discards
   * connections that were made manually.
   */
  item_id?: string;

  /**
   * Unit ID for `quantity_value`.
   *
   * Ignored unless `quantity_value` is also provided.
   */
  quantity_unit_id?: string;

  /**
   * Quantity value as a decimal string.
   *
   * Ignored unless `quantity_unit_id` is also provided.
   */
  quantity_value?: string;
}

export interface ProductionRetrieveParams {
  /**
   * Path param: Production step ID.
   */
  production_step_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'produced_item'>;
}

export interface ProductionUpdateParams {
  /**
   * Path param: Production step ID.
   */
  production_step_id: string;

  /**
   * Body param: Item this step produces.
   *
   * Changing the item recomputes all of the step's connections in the production
   * flow graph from the items it now produces and consumes, which discards
   * connections that were made manually.
   */
  item_id?: string;

  /**
   * Body param: Unit ID for `quantity_value`.
   *
   * Ignored unless `quantity_value` is also provided.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Quantity value as a decimal string.
   *
   * Ignored unless `quantity_unit_id` is also provided.
   */
  quantity_value?: string;
}

export declare namespace Productions {
  export {
    type UpdateProductionRequest as UpdateProductionRequest,
    type ProductionRetrieveParams as ProductionRetrieveParams,
    type ProductionUpdateParams as ProductionUpdateParams,
  };
}
