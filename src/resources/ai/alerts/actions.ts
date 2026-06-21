// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AlertsAPI from './alerts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, and acknowledge agent alerts.
 */
export class Actions extends APIResource {
  /**
   * Marks an agent alert as acknowledged, recording the acknowledging actor and
   * timestamp.
   *
   * This endpoint requires the permission: `agents:update`.
   *
   * @example
   * ```ts
   * const agentAlert =
   *   await client.ai.alerts.actions.acknowledge(
   *     'agnf_01aedc4110f08762b7fe6c705b',
   *   );
   * ```
   */
  acknowledge(
    id: string,
    params: ActionAcknowledgeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlertsAPI.AgentAlert> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/ai/alerts/${id}/actions/acknowledge`, {
      query: { include },
      ...options,
    });
  }
}

export interface ActionAcknowledgeParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'run' | 'action'>;
}

export declare namespace Actions {
  export { type ActionAcknowledgeParams as ActionAcknowledgeParams };
}
