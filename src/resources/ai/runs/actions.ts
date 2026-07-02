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
   * Cancels an in-progress agent run.
   *
   * A run can be cancelled while it is working or paused waiting on the user —
   * `pending`, `running`, `awaiting_input`, or `awaiting_approval`. Cancelling a run
   * in a terminal status (`completed`, `failed`, `cancelled`) returns a validation
   * error.
   *
   * This endpoint requires the permission: `agent_runs:update`.
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
  ): APIPromise<RunsAPI.AgentRun> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/ai/runs/${id}/actions/cancel`, { query: { include }, ...options });
  }

  /**
   * Resumes a paused agent run with a user message and any tool approvals.
   *
   * The run must be in the `awaiting_input` or `awaiting_approval` status.
   *
   * This endpoint requires the permission: `agent_runs:update`.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.continue(
   *   'agrn_01502aa6da9bbdbaa595915fa4',
   *   { message: 'Yes, proceed with creating the order.' },
   * );
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

  /**
   * Retries a failed agent run by resuming its existing transcript.
   *
   * Only runs in the `failed` status can be retried; retrying a run in any other
   * status returns a validation error. The run is re-attempted from where it left
   * off — its prior reasoning and tool results are replayed, so the agent continues
   * with full knowledge of what it already did rather than starting over. Each run
   * can be retried a limited number of times.
   *
   * This endpoint requires the permission: `agent_runs:update`.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.actions.retry(
   *   'agrn_01502aa6da9bbdbaa595915fa4',
   * );
   * ```
   */
  retry(
    id: string,
    params: ActionRetryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunsAPI.AgentRun> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/ai/runs/${id}/actions/retry`, { query: { include }, ...options });
  }
}

/**
 * Request to resume a paused agent run.
 */
export interface ContinueRunRequest {
  /**
   * User message to send to the agent.
   */
  message: string;

  /**
   * Tool-call IDs (the `tool_use_id` of individual blocked calls) to approve.
   *
   * Use this instead of `approved_tool_slugs` to approve ONE specific call when
   * several pending calls share the same tool slug — approving by slug would approve
   * all of them. Approvals are one-time.
   */
  approved_tool_call_ids?: Array<string>;

  /**
   * Slugs of tools whose pending calls should be approved.
   *
   * When empty, all pending tool calls are approved. Approvals are always one-time:
   * a later call to the same tool pauses for review again.
   */
  approved_tool_slugs?: Array<string>;

  /**
   * Tool-call IDs (the `tool_use_id` of individual blocked calls) to deny.
   *
   * Per-call counterpart of `rejected_tool_slugs`, letting you deny one specific
   * call among several that share a slug. Each denied call is answered with a
   * "denied by user" result and the run continues.
   */
  rejected_tool_call_ids?: Array<string>;

  /**
   * Slugs of tools whose pending calls should be denied.
   *
   * The run keeps going: each denied call is answered with a "denied by user" result
   * so the agent proceeds without it, instead of cancelling the run. A single resume
   * may both approve and reject different tools.
   */
  rejected_tool_slugs?: Array<string>;
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
   * Body param: User message to send to the agent.
   */
  message: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;

  /**
   * Body param: Tool-call IDs (the `tool_use_id` of individual blocked calls) to
   * approve.
   *
   * Use this instead of `approved_tool_slugs` to approve ONE specific call when
   * several pending calls share the same tool slug — approving by slug would approve
   * all of them. Approvals are one-time.
   */
  approved_tool_call_ids?: Array<string>;

  /**
   * Body param: Slugs of tools whose pending calls should be approved.
   *
   * When empty, all pending tool calls are approved. Approvals are always one-time:
   * a later call to the same tool pauses for review again.
   */
  approved_tool_slugs?: Array<string>;

  /**
   * Body param: Tool-call IDs (the `tool_use_id` of individual blocked calls) to
   * deny.
   *
   * Per-call counterpart of `rejected_tool_slugs`, letting you deny one specific
   * call among several that share a slug. Each denied call is answered with a
   * "denied by user" result and the run continues.
   */
  rejected_tool_call_ids?: Array<string>;

  /**
   * Body param: Slugs of tools whose pending calls should be denied.
   *
   * The run keeps going: each denied call is answered with a "denied by user" result
   * so the agent proceeds without it, instead of cancelling the run. A single resume
   * may both approve and reject different tools.
   */
  rejected_tool_slugs?: Array<string>;
}

export interface ActionRetryParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

export declare namespace Actions {
  export {
    type ContinueRunRequest as ContinueRunRequest,
    type ActionCancelParams as ActionCancelParams,
    type ActionContinueParams as ActionContinueParams,
    type ActionRetryParams as ActionRetryParams,
  };
}
