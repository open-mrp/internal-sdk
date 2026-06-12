// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AlertsAPI from '../alerts/alerts';
import * as ActionsAPI from './actions';
import { ActionCancelParams, ActionContinueParams, Actions, ContinueRunRequest } from './actions';
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
   * @example
   * ```ts
   * const agentRun = await client.ai.runs.create({
   *   agent_definition_id: 'agdf_01b9ef28feb99e6954201aca63',
   *   input: 'Process the latest incoming orders.',
   * });
   * ```
   */
  create(params: RunCreateParams, options?: RequestOptions): APIPromise<AlertsAPI.AgentRun> {
    const { include, ...body } = params;
    return this._client.post('/v1/ai/runs', { query: { include }, body, ...options });
  }

  /**
   * Returns an agent run by ID.
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
  ): APIPromise<AlertsAPI.AgentRun> {
    return this._client.get(path`/v1/ai/runs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of agent runs for the current account.
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
 * List represents a paginated list of resources.
 */
export interface ListAgentRun {
  /**
   * Resources in this page.
   */
  data: Array<AlertsAPI.AgentRun>;

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
    'actions' | 'definition' | 'steps' | 'definition.config' | 'definition.tools' | 'definition.role'
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
  include?: Array<'definition' | 'actions' | 'definition.config' | 'definition.tools' | 'definition.role'>;

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
    type ListAgentRun as ListAgentRun,
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
  };
}
