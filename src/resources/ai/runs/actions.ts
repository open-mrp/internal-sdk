// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from './runs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, trigger, cancel, and continue agent runs.
 */
export class Actions extends APIResource {
  /**
   * Cancels a running or pending agent run.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.cancel(
   *   'agrn_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  cancel(
    id: string,
    params: ActionCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunsAPI.AgentRun> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/ai/runs/${id}/actions/cancel`, { query: { include }, ...options });
  }

  /**
   * Continues an agent run awaiting input with a user message.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.continue('', {
   *   allowed_tool_slugs: ['string'],
   *   approved_tool_slugs: ['string'],
   *   message: 'Yes, proceed with creating the order.',
   * });
   * ```
   */
  continue(id: string, params: ActionContinueParams, options?: RequestOptions): APIPromise<RunsAPI.AgentRun> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/ai/runs/${id}/actions/continue`, {
      query: { include },
      body,
      ...options,
    });
  }
}

export interface ActionCancelParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

export interface ActionContinueParams {
  /**
   * Body param: Tool slugs to allow for the rest of the run without further
   * approval.
   */
  allowed_tool_slugs: Array<string> | null;

  /**
   * Body param: Tool slugs to approve individually. If empty, all pending tools are
   * approved.
   */
  approved_tool_slugs: Array<string> | null;

  /**
   * Body param: User message to send to the agent.
   */
  message: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

export declare namespace Actions {
  export { type ActionCancelParams as ActionCancelParams, type ActionContinueParams as ActionContinueParams };
}
