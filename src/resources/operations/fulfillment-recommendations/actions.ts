// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FulfillmentRecommendationsAPI from './fulfillment-recommendations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * The planning assumptions production schedules are solved against, and the per-resource overrides that mark which machines constrain the plan.
 */
export class Actions extends APIResource {
  /**
   * Adopts the recommended fulfillment policy for the named items, writing it as a
   * per-item planning override.
   *
   * The recommendation is recomputed as part of applying it, rather than taken from
   * the request. Advice read minutes ago may no longer be the advice — demand moves
   * — and writing a stale verdict would set a policy the engine would not give
   * today. What comes back is what was actually written.
   *
   * Takes effect on the next generated schedule; versions already generated keep the
   * assumptions they were solved under.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const listFulfillmentRecommendation =
   *   await client.operations.fulfillmentRecommendations.actions.apply(
   *     { item_ids: ['it_pej07ckhvu62'] },
   *   );
   * ```
   */
  apply(
    body: ActionApplyParams,
    options?: RequestOptions,
  ): APIPromise<FulfillmentRecommendationsAPI.ListFulfillmentRecommendation> {
    return this._client.post('/v1/operations/fulfillment-recommendations/actions/apply', {
      body,
      ...options,
    });
  }
}

/**
 * Request to adopt fulfillment recommendations for specific items.
 */
export interface ApplyFulfillmentRecommendationsRequest {
  /**
   * Items whose recommendation should be adopted.
   *
   * Named explicitly rather than applied wholesale: adopting advice in bulk without
   * saying what is being adopted is how a plant changes what it builds by accident.
   * Items not named here are left exactly as they are.
   */
  item_ids: Array<string>;
}

export interface ActionApplyParams {
  /**
   * Items whose recommendation should be adopted.
   *
   * Named explicitly rather than applied wholesale: adopting advice in bulk without
   * saying what is being adopted is how a plant changes what it builds by accident.
   * Items not named here are left exactly as they are.
   */
  item_ids: Array<string>;
}

export declare namespace Actions {
  export {
    type ApplyFulfillmentRecommendationsRequest as ApplyFulfillmentRecommendationsRequest,
    type ActionApplyParams as ActionApplyParams,
  };
}
