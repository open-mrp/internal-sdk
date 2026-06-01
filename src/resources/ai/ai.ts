// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Address,
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
  Geolocation,
  ListAgentDefinition,
  ListAgentDefinitionTool,
  Owner,
  Role,
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
  Entity,
  ListAgentMemory,
  Memories,
  MemoryCreateParams,
  MemoryDeleteResponse,
  MemoryListParams,
  MemoryUpdateParams,
  UpdateMemoryRequest,
} from './memories';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as AlertsAPI from './alerts/alerts';
import {
  Account as AlertsAPIAccount,
  AccountBranding as AlertsAPIAccountBranding,
  AccountPortal as AlertsAPIAccountPortal,
  Actor,
  Address as AlertsAPIAddress,
  AgentAction,
  AgentAlert,
  AgentDefinition as AlertsAPIAgentDefinition,
  AgentDefinitionConfig as AlertsAPIAgentDefinitionConfig,
  AgentDefinitionTool as AlertsAPIAgentDefinitionTool,
  AgentRun,
  AgentRunStep,
  AlertListParams,
  AlertRetrieveParams,
  Alerts,
  Entity as AlertsAPIEntity,
  Geolocation as AlertsAPIGeolocation,
  ListAgentAction,
  ListAgentAlert,
  ListAgentDefinitionTool as AlertsAPIListAgentDefinitionTool,
  ListAgentRunStep,
  Owner as AlertsAPIOwner,
  Role as AlertsAPIRole,
  TriggerConfig as AlertsAPITriggerConfig,
} from './alerts/alerts';
import * as ActionsAPI from './runs/actions';
import * as RunsAPI from './runs/runs';
import {
  Account as RunsAPIAccount,
  AccountBranding as RunsAPIAccountBranding,
  AccountPortal as RunsAPIAccountPortal,
  Actor as RunsAPIActor,
  Address as RunsAPIAddress,
  AgentAction as RunsAPIAgentAction,
  AgentDefinition as RunsAPIAgentDefinition,
  AgentDefinitionConfig as RunsAPIAgentDefinitionConfig,
  AgentDefinitionTool as RunsAPIAgentDefinitionTool,
  AgentRun as RunsAPIAgentRun,
  AgentRunStep as RunsAPIAgentRunStep,
  Entity as RunsAPIEntity,
  Geolocation as RunsAPIGeolocation,
  ListAgentAction as RunsAPIListAgentAction,
  ListAgentDefinitionTool as RunsAPIListAgentDefinitionTool,
  ListAgentRun,
  ListAgentRunStep as RunsAPIListAgentRunStep,
  Owner as RunsAPIOwner,
  Role as RunsAPIRole,
  RunCreateParams,
  RunListParams,
  RunRetrieveParams,
  Runs,
  TriggerConfig as RunsAPITriggerConfig,
  TriggerRunRequest,
} from './runs/runs';
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
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAvailableTool {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AvailableTool>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
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
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
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
   * Description.
   */
  description: string | null;

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
  tools: ListAvailableTool | null;
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
AI.Runs = Runs;
AI.Memories = Memories;

export declare namespace AI {
  export {
    type AgentTokenUsage as AgentTokenUsage,
    type AvailableTool as AvailableTool,
    type ListAgentTokenUsage as ListAgentTokenUsage,
    type ListAvailableTool as ListAvailableTool,
    type ListToolGroup as ListToolGroup,
    type PageInfo as PageInfo,
    type ToolGroup as ToolGroup,
    type AIRetrieveToolGroupsParams as AIRetrieveToolGroupsParams,
    type AIRetrieveToolsParams as AIRetrieveToolsParams,
    type AIRetrieveUsageParams as AIRetrieveUsageParams,
  };

  export {
    Agents as Agents,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type AgentDefinition as AgentDefinition,
    type AgentDefinitionConfig as AgentDefinitionConfig,
    type AgentDefinitionTool as AgentDefinitionTool,
    type ConfigInput as ConfigInput,
    type CreateAgentRequest as CreateAgentRequest,
    type Geolocation as Geolocation,
    type ListAgentDefinition as ListAgentDefinition,
    type ListAgentDefinitionTool as ListAgentDefinitionTool,
    type Owner as Owner,
    type Role as Role,
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
    type AlertsAPIAccount as Account,
    type AlertsAPIAccountBranding as AccountBranding,
    type AlertsAPIAccountPortal as AccountPortal,
    type Actor as Actor,
    type AlertsAPIAddress as Address,
    type AgentAction as AgentAction,
    type AgentAlert as AgentAlert,
    type AlertsAPIAgentDefinition as AgentDefinition,
    type AlertsAPIAgentDefinitionConfig as AgentDefinitionConfig,
    type AlertsAPIAgentDefinitionTool as AgentDefinitionTool,
    type AgentRun as AgentRun,
    type AgentRunStep as AgentRunStep,
    type AlertsAPIEntity as Entity,
    type AlertsAPIGeolocation as Geolocation,
    type ListAgentAction as ListAgentAction,
    type ListAgentAlert as ListAgentAlert,
    type AlertsAPIListAgentDefinitionTool as ListAgentDefinitionTool,
    type ListAgentRunStep as ListAgentRunStep,
    type AlertsAPIOwner as Owner,
    type AlertsAPIRole as Role,
    type AlertsAPITriggerConfig as TriggerConfig,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
  };

  export {
    Runs as Runs,
    type RunsAPIAccount as Account,
    type RunsAPIAccountBranding as AccountBranding,
    type RunsAPIAccountPortal as AccountPortal,
    type RunsAPIActor as Actor,
    type RunsAPIAddress as Address,
    type RunsAPIAgentAction as AgentAction,
    type RunsAPIAgentDefinition as AgentDefinition,
    type RunsAPIAgentDefinitionConfig as AgentDefinitionConfig,
    type RunsAPIAgentDefinitionTool as AgentDefinitionTool,
    type RunsAPIAgentRun as AgentRun,
    type RunsAPIAgentRunStep as AgentRunStep,
    type RunsAPIEntity as Entity,
    type RunsAPIGeolocation as Geolocation,
    type RunsAPIListAgentAction as ListAgentAction,
    type RunsAPIListAgentDefinitionTool as ListAgentDefinitionTool,
    type ListAgentRun as ListAgentRun,
    type RunsAPIListAgentRunStep as ListAgentRunStep,
    type RunsAPIOwner as Owner,
    type RunsAPIRole as Role,
    type RunsAPITriggerConfig as TriggerConfig,
    type TriggerRunRequest as TriggerRunRequest,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    Memories as Memories,
    type AgentMemory as AgentMemory,
    type CreateMemoryRequest as CreateMemoryRequest,
    type Entity as Entity,
    type ListAgentMemory as ListAgentMemory,
    type UpdateMemoryRequest as UpdateMemoryRequest,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };
}
