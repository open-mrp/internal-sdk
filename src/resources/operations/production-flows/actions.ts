// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve and manage production flow graphs.
 */
export class Actions extends APIResource {
  /**
   * Connects two production steps in the production flow DAG.
   *
   * The source step becomes an upstream dependency of the target step; connecting an
   * already-connected pair has no effect. Connections are also maintained
   * automatically from item relationships, so manual connections may be rebuilt when
   * a step's produced or consumed items change.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.productionFlows.actions.connectSteps(
   *     {
   *       source_production_step_id:
   *         'prst_0159474175bb59f4b1990404ee',
   *       target_production_step_id:
   *         'prst_0159474175bb59f4b1990404ee',
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
 * ConnectStepsRequest is the request to connect two steps in the production flow
 * DAG.
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
