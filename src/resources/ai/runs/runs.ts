// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../agents';
import * as CoreAPI from '../../core/core';
import * as RequestLogsAPI from '../../core/request-logs';
import * as ActionsAPI from './actions';
import {
  ActionCancelParams,
  ActionContinueParams,
  ActionRetryParams,
  Actions,
  ContinueRunRequest,
} from './actions';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, trigger, cancel, and continue agent runs.
 */
export class Runs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Starts a new run of the specified agent.
   *
   * The run is created in the `pending` status and executed asynchronously; poll
   * Retrieve Agent Run to follow its progress.
   *
   * This endpoint requires the permission: `agent_runs:create`.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.create({
   *   agent_definition_id: 'agdf_01b9ef28feb99e6954201aca63',
   *   input: 'Process the latest incoming orders.',
   * });
   * ```
   */
  create(params: RunCreateParams, options?: RequestOptions): APIPromise<AgentRun> {
    const { include, ...body } = params;
    return this._client.post('/v1/ai/runs', { query: { include }, body, ...options });
  }

  /**
   * Returns an agent run by ID.
   *
   * This endpoint requires the permission: `agent_runs:read`.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.retrieve(
   *   'agrn_01502aa6da9bbdbaa595915fa4',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: RunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentRun> {
    return this._client.get(path`/v1/ai/runs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of agent runs for the current account.
   *
   * This endpoint requires the permission: `agent_runs:read`.
   *
   * @example
   * ```ts
   * const listAgentRun = await client.ai.runs.list();
   * ```
   */
  list(query: RunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListAgentRun> {
    return this._client.get('/v1/ai/runs', { query, ...options });
  }
}

/**
 * A single tool invocation performed by an agent during a run.
 *
 * Each action records the tool that was called, its input and output, and any
 * human review decision.
 */
export interface AgentAction {
  /**
   * Agent action ID.
   */
  id: string;

  /**
   * When this action was created.
   */
  created_at: string;

  /**
   * Longer description of what the action does.
   */
  description: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  entity: CoreAPI.Entity | null;

  /**
   * Error message if the action failed.
   */
  error_message: string | null;

  /**
   * When the action was executed.
   */
  executed_at: string | null;

  /**
   * Arguments passed to the tool, as JSON.
   *
   * Shape depends on `tool`. Encoded as a JSON value (object, array, string, number,
   * boolean, or null), not a JSON-encoded string.
   */
  input: unknown | null;

  /**
   * Short human-readable label summarizing the action.
   */
  label: string | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_action';

  /**
   * Result returned by the tool, as JSON.
   *
   * Recorded when the tool runs, so it is present even while the action is still
   * `pending_review` or `auto_approved`; the shape depends on `tool`, and it is `{}`
   * when the tool returned no output. Encoded as a JSON value (object, array,
   * string, number, boolean, or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * Whether this action must be reviewed by a human before it can execute.
   */
  review_requirement: 'not_required' | 'required';

  /**
   * When a human review decision was recorded for the action.
   */
  reviewed_at: string | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  reviewed_by: RequestLogsAPI.Actor | null;

  /**
   * A single execution of an agent, from trigger through completion.
   */
  run: AgentRun | null;

  /**
   * Current action status.
   *
   * - `pending_review`: awaiting human review before it can execute.
   * - `auto_approved`: automatically approved by policy.
   * - `approved`: manually approved by a user.
   * - `rejected`: rejected by a user; will not execute.
   * - `executed`: successfully executed.
   * - `failed`: errored during execution; see `error_message`.
   */
  status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed';

  /**
   * The tool the agent invoked for this action.
   *
   * - `create_artifact`: create an artifact such as a report, document, or data
   *   export.
   * - `read_doc`: read Augno documentation pages.
   * - `fetch_url`: fetch content from a public URL.
   * - `draft_reply`: propose a reply to the case's external party as a draft held
   *   for human approval (not sent).
   * - `send_email`: send an email reply through the conversation's bound inbox.
   */
  tool: 'create_artifact' | 'read_doc' | 'fetch_url' | 'send_email' | 'draft_reply';

  /**
   * When this action was last updated.
   */
  updated_at: string;
}

/**
 * A single execution of an agent, from trigger through completion.
 */
export interface AgentRun {
  /**
   * Agent run ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  actions: ListAgentAction | null;

  /**
   * When the run completed.
   */
  completed_at: string | null;

  /**
   * When this run was created.
   */
  created_at: string;

  /**
   * An AI agent available to the account.
   *
   * The definition describes what the agent does, how its runs are triggered, the
   * tools it can use, and whether it is currently enabled for the account.
   */
  definition: AgentsAPI.AgentDefinition | null;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Error message if the run failed.
   */
  error_message: string | null;

  /**
   * Input provided to the agent at the start of the run, as JSON. Encoded as a JSON
   * value (object, array, string, number, boolean, or null), not a JSON-encoded
   * string.
   */
  input: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run';

  /**
   * Final output produced by the agent, as JSON.
   *
   * Populated only once the run has completed successfully. Encoded as a JSON value
   * (object, array, string, number, boolean, or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * When the run started executing.
   */
  started_at: string | null;

  /**
   * Current run status.
   *
   * - `pending`: queued but not yet started.
   * - `running`: currently executing.
   * - `awaiting_input`: paused, waiting for user input before continuing.
   * - `awaiting_approval`: paused, waiting for a pending action to be approved.
   * - `completed`: finished successfully.
   * - `failed`: stopped after an error; see `error_message`.
   * - `cancelled`: stopped before completion by a user.
   */
  status:
    | 'pending'
    | 'running'
    | 'completed'
    | 'failed'
    | 'cancelled'
    | 'awaiting_input'
    | 'awaiting_approval';

  /**
   * List represents a paginated list of resources.
   */
  steps: ListAgentRunStep | null;

  /**
   * How this run was initiated.
   *
   * - `scheduled`: started by the agent's cron schedule.
   * - `event`: started in response to a platform event.
   * - `manual`: started by an explicit request; see `triggered_by`.
   * - `chat`: started by a message in a conversation, with the agent's reply posted
   *   back into that conversation.
   */
  trigger_type: 'scheduled' | 'manual' | 'event' | 'chat';

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  triggered_by: RequestLogsAPI.Actor | null;

  /**
   * When this run was last updated.
   */
  updated_at: string;
}

/**
 * A single event in an agent run's execution timeline.
 */
export interface AgentRunStep {
  /**
   * Agent run step ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * Text payload for the step, such as a message body or a tool result.
   */
  content: string | null;

  /**
   * When this step was created.
   */
  created_at: string;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Additional structured data for the step, as JSON. Encoded as a JSON value
   * (object, array, string, number, boolean, or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run_step';

  /**
   * Zero-based position of this step within the run's timeline.
   */
  sequence: number;

  /**
   * The kind of timeline event (e.g. `trigger_received`, `user_message`,
   * `assistant_message`, `tool_call`, `tool_result`, `awaiting_approval`,
   * `completion`, `error`).
   */
  step_type: string;

  /**
   * Short title for the step.
   */
  title: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentAction {
  /**
   * Resources in this page.
   */
  data: Array<AgentAction>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentRun {
  /**
   * Resources in this page.
   */
  data: Array<AgentRun>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentRunStep {
  /**
   * Resources in this page.
   */
  data: Array<AgentRunStep>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to trigger an agent run.
 */
export interface TriggerRunRequest {
  /**
   * ID of the agent definition to run.
   *
   * The agent must be active for the account; triggering an inactive agent returns a
   * validation error.
   */
  agent_definition_id: string;

  /**
   * Instruction text passed to the agent at the start of the run.
   *
   * Recorded on the run as `{"message": <input>}` in its `input` field.
   */
  input?: string;
}

export interface RunCreateParams {
  /**
   * Body param: ID of the agent definition to run.
   *
   * The agent must be active for the account; triggering an inactive agent returns a
   * validation error.
   */
  agent_definition_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;

  /**
   * Body param: Instruction text passed to the agent at the start of the run.
   *
   * Recorded on the run as `{"message": <input>}` in its `input` field.
   */
  input?: string;
}

export interface RunRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'triggered_by'
    | 'actions'
    | 'definition'
    | 'steps'
    | 'definition.config'
    | 'definition.tools'
    | 'definition.role'
  >;
}

export interface RunListParams {
  /**
   * Filter to runs of a specific agent definition.
   */
  agent_definition_id?: string;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'triggered_by' | 'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'
  >;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter to runs with this status (e.g. `running`, `completed`, `failed`).
   */
  status?: string;
}

Runs.Actions = Actions;

export declare namespace Runs {
  export {
    type AgentAction as AgentAction,
    type AgentRun as AgentRun,
    type AgentRunStep as AgentRunStep,
    type ListAgentAction as ListAgentAction,
    type ListAgentRun as ListAgentRun,
    type ListAgentRunStep as ListAgentRunStep,
    type TriggerRunRequest as TriggerRunRequest,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    Actions as Actions,
    type ContinueRunRequest as ContinueRunRequest,
    type ActionCancelParams as ActionCancelParams,
    type ActionContinueParams as ActionContinueParams,
    type ActionRetryParams as ActionRetryParams,
  };
}
