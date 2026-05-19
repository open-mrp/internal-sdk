// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve and manage production flow graphs.
 */
export class Actions extends APIResource {
  /**
   * Connects two production steps in the production flow DAG. The source step
   * becomes an upstream dependency of the target step.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.productionFlows.actions.connectSteps(
   *     {
   *       source_production_step_id:
   *         'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *       target_production_step_id:
   *         'prst_01jm4r6700f8nwq3v5hx2d9ktp',
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
    type ActionConnectStepsResponse as ActionConnectStepsResponse,
    type ActionConnectStepsParams as ActionConnectStepsParams,
  };
}
