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
import * as RunsAPI from './runs/runs';
import {
  AgentAction,
  AgentRun,
  AgentRunStep,
  ListAgentAction,
  ListAgentRun,
  ListAgentRunStep,
  RunCreateParams,
  RunListParams,
  RunRetrieveParams,
  Runs,
  TriggerRunRequest,
} from './runs/runs';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * List available platform tools for agent configuration.
 */
export class AI extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);

  /**
   * Returns a paginated list of tool groups.
   *
   * This endpoint requires the permission: `agents:read`.
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
   * This endpoint requires the permission: `agents:read`.
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
}

/**
 * Platform tool that can be attached to agents.
 */
export interface AvailableTool {
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
   * Whether invoking this tool changes server state.
   *
   * True for any `api_endpoint` tool whose underlying operation is not a read
   * (non-GET); always false for `built_in` tools. The agent-configuration UI uses
   * this to default such tools to requiring human review.
   */
  mutating: boolean;

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

  /**
   * Role type the caller must have for this tool, when the operation is gated by
   * role rather than a permission (e.g. `admin`).
   */
  required_role_type: string | null;

  /**
   * A stable identifier used when attaching the tool to an agent.
   */
  slug: string;
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

AI.Agents = Agents;
AI.Runs = Runs;
AI.Memories = Memories;

export declare namespace AI {
  export {
    type AvailableTool as AvailableTool,
    type ListAvailableTool as ListAvailableTool,
    type ListToolGroup as ListToolGroup,
    type ToolGroup as ToolGroup,
    type AIRetrieveToolGroupsParams as AIRetrieveToolGroupsParams,
    type AIRetrieveToolsParams as AIRetrieveToolsParams,
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
    Runs as Runs,
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
