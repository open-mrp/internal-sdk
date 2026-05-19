// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../batches/batches';
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
   *     'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '10.000000000000000000000000000000',
   *       waste_quantity_unit_id:
   *         'un_01jm4r6700f8nwq3v5hx2d9ktp',
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
  ): APIPromise<Consumption> {
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
   *     'cp_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     },
   *   );
   * ```
   */
  retrieve(id: string, params: ConsumptionRetrieveParams, options?: RequestOptions): APIPromise<Consumption> {
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
   *     'cp_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '20.000000000000000000000000000000',
   *     },
   *   );
   * ```
   */
  update(id: string, params: ConsumptionUpdateParams, options?: RequestOptions): APIPromise<Consumption> {
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
   *     'cp_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     },
   *   );
   * ```
   */
  delete(id: string, params: ConsumptionDeleteParams, options?: RequestOptions): APIPromise<Consumption> {
    const { production_step_id, include } = params;
    return this._client.delete(
      path`/v1/operations/production-steps/${production_step_id}/consumptions/${id}`,
      { query: { include }, ...options },
    );
  }
}

/**
 * Material consumed by a production step.
 */
export interface Consumption {
  /**
   * Consumption ID.
   */
  id: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  consumed_item: ItemsAPI.Item | null;

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
  quantity: BatchesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: BatchesAPI.Quantity | null;
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
    type Consumption as Consumption,
    type ConsumptionCreateParams as ConsumptionCreateParams,
    type ConsumptionRetrieveParams as ConsumptionRetrieveParams,
    type ConsumptionUpdateParams as ConsumptionUpdateParams,
    type ConsumptionDeleteParams as ConsumptionDeleteParams,
  };
}
