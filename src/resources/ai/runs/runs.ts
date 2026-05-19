// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../agents';
import * as AlertsAPI from '../alerts/alerts';
import * as ActionsAPI from './actions';
import { ActionCancelParams, ActionContinueParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, retrieve, trigger, cancel, and continue agent runs.
 */
export class Runs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Triggers an agent run for the specified agent definition.
   *
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.create({
   *   agent_definition_id: 'agdf_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.retrieve('id');
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
   * @example
   * ```ts
   * const runs = await client.ai.runs.list();
   * ```
   */
  list(query: RunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<RunListResponse> {
    return this._client.get('/v1/ai/runs', { query, ...options });
  }
}

/**
 * Agent run resource.
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
   * Agent definition resource.
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
   * Input provided to the agent. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  input: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run';

  /**
   * Output produced by the agent. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * When the run started executing.
   */
  started_at: string | null;

  /**
   * Current run status.
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
  steps: AgentRun.Steps | null;

  /**
   * Total input tokens consumed.
   */
  total_input_tokens: number | null;

  /**
   * Total output tokens consumed.
   */
  total_output_tokens: number | null;

  /**
   * Trigger type.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Reference to an actor (user, API key, or agent).
   */
  triggered_by: AlertsAPI.Actor | null;

  /**
   * When this run was last updated.
   */
  updated_at: string;
}

export namespace AgentRun {
  /**
   * List represents a paginated list of resources.
   */
  export interface Steps {
    /**
     * Resources in this page.
     */
    data: Array<Steps.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Steps {
    /**
     * Agent run step resource.
     */
    export interface Data {
      /**
       * Agent run step ID.
       */
      id: string;

      /**
       * Reference to an actor (user, API key, or agent).
       */
      actor: AlertsAPI.Actor | null;

      /**
       * Step content.
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
       * Metadata for the step. Encoded as a JSON value (object, array, string, number,
       * boolean, or null), not a JSON-encoded string.
       */
      metadata: unknown | null;

      /**
       * Resource type identifier.
       */
      object: 'agent_run_step';

      /**
       * Sequence number.
       */
      sequence: number;

      /**
       * Step type.
       */
      step_type: string;

      /**
       * Short title for the step.
       */
      title: string;
    }
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentAction {
  /**
   * Resources in this page.
   */
  data: Array<AlertsAPI.AgentAction>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface RunListResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface RunCreateParams {
  /**
   * Body param: Agent definition ID.
   */
  agent_definition_id: string;

  /**
   * Body param: Input text for the agent.
   */
  input: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'actions' | 'definition' | 'definition.config' | 'definition.tools' | 'definition.role'>;
}

export interface RunRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'actions' | 'definition' | 'steps' | 'definition.config' | 'definition.tools' | 'definition.role'
  >;
}

export interface RunListParams {
  /**
   * Agent definition ID filter.
   */
  agent_definition_id?: string;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Run status filter (e.g. "running", "completed", "failed").
   */
  status?: string;
}

Runs.Actions = Actions;

export declare namespace Runs {
  export {
    type AgentRun as AgentRun,
    type ListAgentAction as ListAgentAction,
    type RunListResponse as RunListResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    Actions as Actions,
    type ActionCancelParams as ActionCancelParams,
    type ActionContinueParams as ActionContinueParams,
  };
}
