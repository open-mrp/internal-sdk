// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve and manage production flow graphs.
 */
export class Actions extends APIResource {
  /**
   * Connects two production steps so that work flows from the source step into the
   * target step.
   *
   * The source step becomes an upstream dependency of the target step, and
   * connecting a pair that is already connected has no effect.
   *
   * Connections are otherwise derived from item relationships: changing which items
   * a step produces or consumes recomputes every connection on that step, which
   * discards connections made here.
   *
   * This endpoint requires the permission: `production_steps:update`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.productionFlows.actions.connectSteps(
   *     {
   *       source_production_step_id: 'prst_0ht5mkqx5a6t',
   *       target_production_step_id: 'prst_0ht5mkqx5a6t',
   *     },
   *   );
   * ```
   */
  connectSteps(
    body: ActionConnectStepsParams,
    options?: RequestOptions,
  ): APIPromise<ActionConnectStepsResponse> {
    return this._client.post('/v1/operations/production-flows/actions/connect-steps', { body, ...options });
  }
}

/**
 * Request to connect two production steps.
 */
export interface ConnectStepsRequest {
  /**
   * Source (upstream) production step ID.
   */
  source_production_step_id: string;

  /**
   * Target (downstream) production step ID.
   */
  target_production_step_id: string;
}

export interface ActionConnectStepsResponse {}

export interface ActionConnectStepsParams {
  /**
   * Source (upstream) production step ID.
   */
  source_production_step_id: string;

  /**
   * Target (downstream) production step ID.
   */
  target_production_step_id: string;
}

export declare namespace Actions {
  export {
    type ConnectStepsRequest as ConnectStepsRequest,
    type ActionConnectStepsResponse as ActionConnectStepsResponse,
    type ActionConnectStepsParams as ActionConnectStepsParams,
  };
}
