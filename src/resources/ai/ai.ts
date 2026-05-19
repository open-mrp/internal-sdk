// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAPI from './ai';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentDefinition,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentRetrieveParams,
  AgentUpdateParams,
  AgentUpdateStatusParams,
  Agents,
  ConfigInput,
  PageInfo,
  ToolInput,
} from './agents';
import * as MemoriesAPI from './memories';
import {
  AgentMemory,
  Entity,
  Memories,
  MemoryCreateParams,
  MemoryDeleteResponse,
  MemoryListParams,
  MemoryListResponse,
  MemoryUpdateParams,
} from './memories';
import * as AlertsAPI from './alerts/alerts';
import {
  Actor,
  AgentAction,
  AgentAlert,
  AlertListParams,
  AlertListResponse,
  AlertRetrieveParams,
  Alerts,
} from './alerts/alerts';
import * as RunsAPI from './runs/runs';
import {
  AgentRun,
  ListAgentAction,
  RunCreateParams,
  RunListParams,
  RunListResponse,
  RunRetrieveParams,
  Runs,
} from './runs/runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AI extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Returns a paginated list of tool groups.
   *
   * @example
   * ```ts
   * const response = await client.ai.retrieveToolGroups();
   * ```
   */
  retrieveToolGroups(
    query: AIRetrieveToolGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIRetrieveToolGroupsResponse> {
    return this._client.get('/v1/ai/tool-groups', { query, ...options });
  }

  /**
   * Returns a paginated list of tools that can be assigned to agents.
   *
   * @example
   * ```ts
   * const listAvailableTool = await client.ai.retrieveTools();
   * ```
   */
  retrieveTools(
    query: AIRetrieveToolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAvailableTool> {
    return this._client.get('/v1/ai/tools', { query, ...options });
  }

  /**
   * Returns a paginated list of daily agent token usage records for the current
   * account.
   *
   * @example
   * ```ts
   * const response = await client.ai.retrieveUsage();
   * ```
   */
  retrieveUsage(
    query: AIRetrieveUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIRetrieveUsageResponse> {
    return this._client.get('/v1/ai/usage', { query, ...options });
  }
}

/**
 * Platform tool that can be attached to agents.
 */
export interface AvailableTool {
  /**
   * Tool ID.
   */
  id: string;

  /**
   * Tool category.
   */
  category: string;

  /**
   * JSON schema describing the configuration options this tool accepts. Defines the
   * shape of the `config` field on AgentDefinitionTool.
   *
   * For example:
   *
   * ````json
   * {
   *   "type": "object",
   *   "properties": {
   *     "max_results": {
   *       "type": "integer",
   *       "default": 10
   *     }
   *   }
   * }
   * ``` Encoded as a JSON value (object, array, string, number, boolean, or null), not a JSON-encoded string.
   * ````
   */
  config_schema: unknown | null;

  /**
   * Tool description.
   */
  description: string | null;

  /**
   * Tool name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'available_tool';

  /**
   * Required permissions.
   */
  required_permissions: Array<string>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAvailableTool {
  /**
   * Resources in this page.
   */
  data: Array<AvailableTool>;

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
export interface AIRetrieveToolGroupsResponse {
  /**
   * Resources in this page.
   */
  data: Array<AIRetrieveToolGroupsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace AIRetrieveToolGroupsResponse {
  /**
   * Logical grouping of platform tools.
   */
  export interface Data {
    /**
     * Group ID.
     */
    id: string;

    /**
     * Description.
     */
    description: string;

    /**
     * Icon identifier (e.g. a Material Icon name).
     */
    icon: string;

    /**
     * Display name.
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'tool_group';

    /**
     * URL-friendly slug.
     */
    slug: string;

    /**
     * Display sort order.
     */
    sort_order: number;

    /**
     * List represents a paginated list of resources.
     */
    tools: AIAPI.ListAvailableTool | null;
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface AIRetrieveUsageResponse {
  /**
   * Resources in this page.
   */
  data: Array<AIRetrieveUsageResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace AIRetrieveUsageResponse {
  /**
   * Daily agent token usage record.
   */
  export interface Data {
    /**
     * Usage record ID.
     */
    id: string;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Date of usage (YYYY-MM-DD).
     */
    date: string;

    /**
     * Total input tokens consumed.
     */
    input_tokens: number;

    /**
     * Resource type identifier.
     */
    object: 'agent_token_usage';

    /**
     * Total output tokens consumed.
     */
    output_tokens: number;

    /**
     * Number of agent runs.
     */
    run_count: number;

    /**
     * Total cost in USD.
     */
    total_cost: number;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

export interface AIRetrieveToolGroupsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'tools'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface AIRetrieveToolsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface AIRetrieveUsageParams {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;

  /**
   * Number of days of usage history to return. Defaults to 30.
   */
  days?: number;

  /**
   * Maximum number of records to return per page. Defaults to 100.
   */
  limit?: number;
}

AI.Agents = Agents;
AI.Alerts = Alerts;
AI.Memories = Memories;
AI.Runs = Runs;

export declare namespace AI {
  export {
    type AvailableTool as AvailableTool,
    type ListAvailableTool as ListAvailableTool,
    type AIRetrieveToolGroupsResponse as AIRetrieveToolGroupsResponse,
    type AIRetrieveUsageResponse as AIRetrieveUsageResponse,
    type AIRetrieveToolGroupsParams as AIRetrieveToolGroupsParams,
    type AIRetrieveToolsParams as AIRetrieveToolsParams,
    type AIRetrieveUsageParams as AIRetrieveUsageParams,
  };

  export {
    Agents as Agents,
    type AgentDefinition as AgentDefinition,
    type ConfigInput as ConfigInput,
    type PageInfo as PageInfo,
    type ToolInput as ToolInput,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentUpdateStatusParams as AgentUpdateStatusParams,
  };

  export {
    Alerts as Alerts,
    type Actor as Actor,
    type AgentAction as AgentAction,
    type AgentAlert as AgentAlert,
    type AlertListResponse as AlertListResponse,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
  };

  export {
    Memories as Memories,
    type AgentMemory as AgentMemory,
    type Entity as Entity,
    type MemoryListResponse as MemoryListResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };

  export {
    Runs as Runs,
    type AgentRun as AgentRun,
    type ListAgentAction as ListAgentAction,
    type RunListResponse as RunListResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };
}
