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
   * Triggers an agent run for the specified agent definition.
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
   * Agent definition ID.
   */
  agent_definition_id: string;

  /**
   * Input text for the agent.
   */
  input: string;
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
