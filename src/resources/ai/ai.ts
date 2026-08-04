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
   * Returns a paginated list of the groups the agent tool catalog is organized into.
   *
   * The catalog is platform-defined and identical for every account. Pagination
   * applies to the groups themselves, so a group requested with `include=tools`
   * always carries its complete tool list regardless of the page limit. The `q`
   * search term matches against group names.
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
   * Returns a paginated list of every capability that can be granted to an agent.
   *
   * The catalog is platform-defined and identical for every account, and covers both
   * built-in runtime capabilities and the API operations agents are allowed to
   * perform. The `q` search term matches against tool names and the name of the
   * group a tool belongs to.
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
 * A capability an agent can be granted, allowing it to take that action during a
 * run.
 *
 * The catalog of available tools is the same for every account; granting one to an
 * agent is what makes it callable.
 */
export interface AvailableTool {
  /**
   * Where the tool's behavior comes from.
   *
   * - `built_in`: a capability implemented by the agent runtime itself, such as
   *   fetching a web page or drafting a reply for a teammate to approve.
   * - `api_endpoint`: an operation of this API exposed as a tool, letting the agent
   *   perform it on the account's behalf.
   */
  category: string;

  /**
   * JSON schema describing the configuration options this tool accepts.
   *
   * Defines the shape of the `config` field on AgentDefinitionTool: a schema
   * declaring a `max_results` integer property means that tool's `config` may set
   * `max_results`. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  config_schema: unknown | null;

  /**
   * Explanation of what the tool does.
   *
   * This is also the description the agent's model reads when deciding whether to
   * call the tool.
   */
  description: string | null;

  /**
   * Whether invoking this tool takes an action rather than only reading data.
   *
   * True for any `api_endpoint` tool whose underlying operation is not a read, and
   * for `built_in` tools that do something externally visible or hard to undo, such
   * as sending an email. A mutating `built_in` tool always pauses its run for human
   * approval and that gate cannot be turned off for an individual agent; for
   * `api_endpoint` tools the flag is advisory and review stays configurable per
   * agent.
   */
  mutating: boolean;

  /**
   * Human-readable name for the tool.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A named grouping of the tools that can be granted to an agent, used to organize
 * the tool catalog.
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
   * Machine-readable name for the group (e.g. `customer_tools`).
   */
  slug: string;

  /**
   * Display sort order, lowest first.
   */
  sort_order: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
