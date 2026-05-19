// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../batches/batches';
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
   * @example
   * ```ts
   * const productionOutput =
   *   await client.operations.productionSteps.productions.retrieve(
   *     'id',
   *     { production_step_id: 'production_step_id' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ProductionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProductionOutput> {
    const { production_step_id, ...query } = params;
    return this._client.get(path`/v1/operations/production-steps/${production_step_id}/productions/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates a production output within a production step.
   *
   * @example
   * ```ts
   * const productionOutput =
   *   await client.operations.productionSteps.productions.update(
   *     'id',
   *     {
   *       production_step_id: 'production_step_id',
   *       item_id: 'it_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '500',
   *     },
   *   );
   * ```
   */
  update(id: string, params: ProductionUpdateParams, options?: RequestOptions): APIPromise<ProductionOutput> {
    const { production_step_id, ...body } = params;
    return this._client.patch(path`/v1/operations/production-steps/${production_step_id}/productions/${id}`, {
      body,
      ...options,
    });
  }
}

/**
 * Production output of a production step.
 */
export interface ProductionOutput {
  /**
   * Production ID.
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
   * Item is an inventory item (product, material, or part).
   */
  produced_item: ItemsAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
   * Body param: Item ID.
   */
  item_id?: string;

  /**
   * Body param: Quantity unit ID.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Quantity value as a decimal string.
   */
  quantity_value?: string;
}

export declare namespace Productions {
  export {
    type ProductionOutput as ProductionOutput,
    type ProductionRetrieveParams as ProductionRetrieveParams,
    type ProductionUpdateParams as ProductionUpdateParams,
  };
}
