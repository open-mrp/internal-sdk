// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../agents';
import * as AnalyticsAPI from '../../core/analytics';
import * as RequestLogsAPI from '../../core/request-logs';
import * as ActionsAPI from './actions';
import { ActionAcknowledgeParams, Actions } from './actions';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, and acknowledge agent alerts.
 */
export class Alerts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns an agent alert by ID.
   *
   * This endpoint requires the permission: `agents:read`.
   *
   * @example
   * ```ts
   * const agentAlert = await client.ai.alerts.retrieve(
   *   'agnf_01aedc4110f08762b7fe6c705b',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AlertRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentAlert> {
    return this._client.get(path`/v1/ai/alerts/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of agent alerts for the current account.
   *
   * This endpoint requires the permission: `agents:read`.
   *
   * @example
   * ```ts
   * const listAgentAlert = await client.ai.alerts.list();
   * ```
   */
  list(query: AlertListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListAgentAlert> {
    return this._client.get('/v1/ai/alerts', { query, ...options });
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
  entity: AnalyticsAPI.Entity | null;

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
  requires_review: boolean;

  /**
   * When a human review decision was recorded for the action.
   */
  reviewed_at: string | null;

  /**
   * Reference to an actor (user, API key, or agent).
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
   * - `save_memory`: store an observation about a customer or product.
   * - `update_memory`: update an existing memory entry.
   * - `delete_memory`: delete a memory entry.
   * - `create_alert`: raise an alert that requires human attention.
   * - `lookup_customer`: look up a customer by email.
   * - `create_artifact`: create an artifact such as a report, document, or data
   *   export.
   * - `read_doc`: read Augno documentation pages.
   * - `fetch_url`: fetch content from a public URL.
   */
  tool:
    | 'save_memory'
    | 'create_alert'
    | 'lookup_customer'
    | 'create_artifact'
    | 'update_memory'
    | 'delete_memory'
    | 'read_doc'
    | 'fetch_url';

  /**
   * When this action was last updated.
   */
  updated_at: string;
}

/**
 * An alert raised by an agent to surface an issue that needs human attention.
 */
export interface AgentAlert {
  /**
   * Alert ID.
   */
  id: string;

  /**
   * Acknowledgment timestamp.
   */
  acknowledged_at: string | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  acknowledged_by: RequestLogsAPI.Actor | null;

  /**
   * A single tool invocation performed by an agent during a run.
   *
   * Each action records the tool that was called, its input and output, and any
   * human review decision.
   */
  action: AgentAction | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Alert description.
   */
  message: string | null;

  /**
   * Additional metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_alert';

  /**
   * A single execution of an agent, from trigger through completion.
   */
  run: AgentRun | null;

  /**
   * Alert severity.
   *
   * - `info`: informational; requires no immediate action.
   * - `warning`: a potential issue that should be reviewed.
   * - `urgent`: an issue that requires prompt attention.
   * - `critical`: a severe issue requiring immediate action.
   */
  severity: 'info' | 'warning' | 'urgent' | 'critical';

  /**
   * Alert status.
   *
   * - `open`: not yet acknowledged.
   * - `acknowledged`: seen and acknowledged by a user; see `acknowledged_at` and
   *   `acknowledged_by`.
   */
  status: 'open' | 'acknowledged';

  /**
   * Alert title.
   */
  title: string;

  /**
   * Last update timestamp.
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
   * `null` until the run completes. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
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
   * Total LLM input tokens consumed across all model calls in this run.
   */
  total_input_tokens: number | null;

  /**
   * Total LLM output tokens generated across all model calls in this run.
   */
  total_output_tokens: number | null;

  /**
   * How this run was initiated.
   *
   * - `scheduled`: started by the agent's cron schedule.
   * - `event`: started in response to a platform event.
   * - `manual`: started by an explicit request; see `triggered_by`.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Reference to an actor (user, API key, or agent).
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
   * Reference to an actor (user, API key, or agent).
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
export interface ListAgentAlert {
  /**
   * Resources in this page.
   */
  data: Array<AgentAlert>;

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

export interface AlertRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'run' | 'action'>;
}

export interface AlertListParams {
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
  include?: Array<'run' | 'action'>;

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
   * Filter by severity.
   */
  severity?: 'info' | 'warning' | 'urgent' | 'critical';

  /**
   * Filter by alert status.
   */
  status?: 'open' | 'acknowledged';
}

Alerts.Actions = Actions;

export declare namespace Alerts {
  export {
    type AgentAction as AgentAction,
    type AgentAlert as AgentAlert,
    type AgentRun as AgentRun,
    type AgentRunStep as AgentRunStep,
    type ListAgentAction as ListAgentAction,
    type ListAgentAlert as ListAgentAlert,
    type ListAgentRunStep as ListAgentRunStep,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
  };

  export { Actions as Actions, type ActionAcknowledgeParams as ActionAcknowledgeParams };
}
