// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentDefinition,
  AgentDefinitionConfig,
  AgentDefinitionTool,
  AgentDeleteResponse,
  AgentListParams,
  AgentRetrieveParams,
  AgentUpdateParams,
  AgentUpdateStatusParams,
  Agents,
  ConfigInput,
  CreateAgentRequest,
  ListAgentDefinition,
  ListAgentDefinitionTool,
  ToolInput,
  TriggerConfig,
  TriggerConfigInput,
  UpdateAgentRequest,
  UpdateAgentStatusRequest,
} from './agents';
import * as MemoriesAPI from './memories';
import {
  AgentMemory,
  CreateMemoryRequest,
  ListAgentMemory,
  Memories,
  MemoryCreateParams,
  MemoryDeleteResponse,
  MemoryListParams,
  MemoryUpdateParams,
  UpdateMemoryRequest,
} from './memories';
import * as AlertsAPI from './alerts/alerts';
import {
  AgentAction,
  AgentAlert,
  AgentRun,
  AgentRunStep,
  AlertListParams,
  AlertRetrieveParams,
  Alerts,
  ListAgentAction,
  ListAgentAlert,
  ListAgentRunStep,
} from './alerts/alerts';
import * as RunsAPI from './runs/runs';
import {
  ListAgentRun,
  RunCreateParams,
  RunListParams,
  RunRetrieveParams,
  Runs,
  TriggerRunRequest,
} from './runs/runs';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AI extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);

  /**
   * Returns a paginated list of tool groups.
   *
   * @example
   * ```ts
   * const listToolGroup = await client.ai.retrieveToolGroups();
   * ```
   */
  retrieveToolGroups(
    query: AIRetrieveToolGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListToolGroup> {
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
   * const listAgentTokenUsage = await client.ai.retrieveUsage();
   * ```
   */
  retrieveUsage(
    query: AIRetrieveUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAgentTokenUsage> {
    return this._client.get('/v1/ai/usage', { query, ...options });
  }
}

/**
 * Daily agent token usage record.
 *
 * One record exists per account per day, aggregating LLM token consumption, cost,
 * and run count across all agent runs that day.
 */
export interface AgentTokenUsage {
  /**
   * Usage record ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Date of usage (`YYYY-MM-DD`).
   */
  date: string;

  /**
   * Total input tokens consumed on this date.
   */
  input_tokens: number;

  /**
   * Resource type identifier.
   */
  object: 'agent_token_usage';

  /**
   * Total output tokens consumed on this date.
   */
  output_tokens: number;

  /**
   * Number of agent runs on this date.
   */
  run_count: number;

  /**
   * Total cost in USD for this date.
   */
  total_cost: number;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
   * Category grouping for the tool (e.g. `built_in`).
   */
  category: string;

  /**
   * JSON schema describing the configuration options this tool accepts.
   *
   * Defines the shape of the `config` field on AgentDefinitionTool.
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
   * Permission scopes the agent's role must hold for this tool to be usable (e.g.
   * `products:read`).
   */
  required_permissions: Array<string>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentTokenUsage {
  /**
   * Resources in this page.
   */
  data: Array<AgentTokenUsage>;

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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListToolGroup {
  /**
   * Resources in this page.
   */
  data: Array<ToolGroup>;

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
 * Logical grouping of platform tools.
 */
export interface ToolGroup {
  /**
   * Group ID.
   */
  id: string;

  /**
   * Description of what the tools in this group do.
   */
  description: string | null;

  /**
   * Icon identifier (e.g. a Material Icon name).
   */
  icon: string;

  /**
   * Human-readable group name (e.g. `Product Tools`).
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
  tools: ListAvailableTool | null;
}

export interface AIRetrieveToolGroupsParams {
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
  include?: Array<'tools'>;

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
}

export interface AIRetrieveToolsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

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
}

export interface AIRetrieveUsageParams {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;

  /**
   * Number of days of usage history to return, counting back from today.
   */
  days?: number;

  /**
   * Maximum number of records to return per page.
   */
  limit?: number;
}

AI.Agents = Agents;
AI.Alerts = Alerts;
AI.Runs = Runs;
AI.Memories = Memories;

export declare namespace AI {
  export {
    type AgentTokenUsage as AgentTokenUsage,
    type AvailableTool as AvailableTool,
    type ListAgentTokenUsage as ListAgentTokenUsage,
    type ListAvailableTool as ListAvailableTool,
    type ListToolGroup as ListToolGroup,
    type ToolGroup as ToolGroup,
    type AIRetrieveToolGroupsParams as AIRetrieveToolGroupsParams,
    type AIRetrieveToolsParams as AIRetrieveToolsParams,
    type AIRetrieveUsageParams as AIRetrieveUsageParams,
  };

  export {
    Agents as Agents,
    type AgentDefinition as AgentDefinition,
    type AgentDefinitionConfig as AgentDefinitionConfig,
    type AgentDefinitionTool as AgentDefinitionTool,
    type ConfigInput as ConfigInput,
    type CreateAgentRequest as CreateAgentRequest,
    type ListAgentDefinition as ListAgentDefinition,
    type ListAgentDefinitionTool as ListAgentDefinitionTool,
    type ToolInput as ToolInput,
    type TriggerConfig as TriggerConfig,
    type TriggerConfigInput as TriggerConfigInput,
    type UpdateAgentRequest as UpdateAgentRequest,
    type UpdateAgentStatusRequest as UpdateAgentStatusRequest,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentUpdateStatusParams as AgentUpdateStatusParams,
  };

  export {
    Alerts as Alerts,
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

  export {
    Runs as Runs,
    type ListAgentRun as ListAgentRun,
    type TriggerRunRequest as TriggerRunRequest,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    Memories as Memories,
    type AgentMemory as AgentMemory,
    type CreateMemoryRequest as CreateMemoryRequest,
    type ListAgentMemory as ListAgentMemory,
    type UpdateMemoryRequest as UpdateMemoryRequest,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };
}
