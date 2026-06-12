// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AlertsAPI from '../alerts/alerts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, trigger, cancel, and continue agent runs.
 */
export class Actions extends APIResource {
  /**
   * Cancels a pending or running agent run.
   *
   * Only runs in the `pending` or `running` status can be cancelled; cancelling a
   * run in any other status returns a validation error.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.cancel(
   *   'agrn_01502aa6da9bbdbaa595915fa4',
   * );
   * ```
   */
  cancel(
    id: string,
    params: ActionCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlertsAPI.AgentRun> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/ai/runs/${id}/actions/cancel`, { query: { include }, ...options });
  }

  /**
   * Resumes a paused agent run with a user message and any tool approvals.
   *
   * The run must be in the `awaiting_input` or `awaiting_approval` status.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.continue(
   *   'agrn_01502aa6da9bbdbaa595915fa4',
   *   {
   *     allowed_tool_slugs: [],
   *     approved_tool_slugs: [],
   *     message: 'Yes, proceed with creating the order.',
   *   },
   * );
   * ```
   */
  continue(
    id: string,
    params: ActionContinueParams,
    options?: RequestOptions,
  ): APIPromise<AlertsAPI.AgentRun> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/ai/runs/${id}/actions/continue`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * Request to resume a paused agent run.
 */
export interface ContinueRunRequest {
  /**
   * Slugs of tools to allow for the rest of the run.
   *
   * Allowed tools execute without pausing for review; slugs accumulate across
   * continue requests for the life of the run.
   */
  allowed_tool_slugs: Array<string>;

  /**
   * Slugs of tools whose pending calls should be approved.
   *
   * When empty, all pending tool calls are approved. Approvals are one-time: later
   * calls to the same tool pause for review again unless the slug is also in
   * `allowed_tool_slugs`.
   */
  approved_tool_slugs: Array<string>;

  /**
   * User message to send to the agent.
   */
  message: string;
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
   * Body param: Slugs of tools to allow for the rest of the run.
   *
   * Allowed tools execute without pausing for review; slugs accumulate across
   * continue requests for the life of the run.
   */
  allowed_tool_slugs: Array<string>;

  /**
   * Body param: Slugs of tools whose pending calls should be approved.
   *
   * When empty, all pending tool calls are approved. Approvals are one-time: later
   * calls to the same tool pause for review again unless the slug is also in
   * `allowed_tool_slugs`.
   */
  approved_tool_slugs: Array<string>;

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
  export {
    type ContinueRunRequest as ContinueRunRequest,
    type ActionCancelParams as ActionCancelParams,
    type ActionContinueParams as ActionContinueParams,
  };
}
