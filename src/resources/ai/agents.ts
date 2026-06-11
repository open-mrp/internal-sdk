// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAPI from './ai';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List, create, update, and delete agent definitions.
 */
export class Agents extends APIResource {
  /**
   * Creates a custom agent definition with optional tool configuration.
   *
   * The new agent has `definition_type` `custom` and is immediately `active` for the
   * account.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.create({
   *   category_code: 'inventory',
   *   config: {
   *     system_prompt:
   *       'You are an order processing agent. Parse incoming emails and create draft orders.',
   *     model: 'claude-sonnet-4',
   *     provider: 'anthropic',
   *     temperature: 0.2,
   *     trigger_config: { event_filters: ['email.received'] },
   *   },
   *   name: 'Inventory Monitor',
   *   slug: 'inventory_monitor',
   *   trigger_type: 'event',
   *   description:
   *     'Monitors inventory levels and creates restock alerts.',
   *   role_id: 'rl_01c16d2eb637c0d1f3a372937c',
   *   tools: [
   *     {
   *       tool_id: 'tdef_01f0c4d04780ace864e6cc3a74',
   *       sort_order: 1,
   *       require_review: true,
   *     },
   *   ],
   * });
   * ```
   */
  create(params: AgentCreateParams, options?: RequestOptions): APIPromise<AgentDefinition> {
    const { include, ...body } = params;
    return this._client.post('/v1/ai/agents', { query: { include }, body, ...options });
  }

  /**
   * Returns an agent definition by ID.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.retrieve(
   *   'agdf_01b9ef28feb99e6954201aca63',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentDefinition> {
    return this._client.get(path`/v1/ai/agents/${id}`, { query, ...options });
  }

  /**
   * Partially updates a custom agent definition.
   *
   * Only the fields provided in the request are changed. System agents cannot be
   * modified.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.update(
   *   'agdf_01b9ef28feb99e6954201aca63',
   *   { name: 'Inventory Monitor' },
   * );
   * ```
   */
  update(
    id: string,
    params: AgentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentDefinition> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/ai/agents/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of agent definitions for the current account.
   *
   * @example
   * ```ts
   * const listAgentDefinition = await client.ai.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAgentDefinition> {
    return this._client.get('/v1/ai/agents', { query, ...options });
  }

  /**
   * Deletes a custom agent definition.
   *
   * The agent is soft-deleted and can no longer be run or modified. System agents
   * cannot be deleted.
   *
   * @example
   * ```ts
   * const agent = await client.ai.agents.delete(
   *   'agdf_01b9ef28feb99e6954201aca63',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(path`/v1/ai/agents/${id}`, options);
  }

  /**
   * Enables or disables an agent for the current account.
   *
   * Sets the account-level status without modifying the underlying agent definition,
   * so it works for both `system` and `custom` agents. Returns the updated agent
   * definition.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.updateStatus(
   *   'agdf_01b9ef28feb99e6954201aca63',
   *   { status: 'active' },
   * );
   * ```
   */
  updateStatus(
    id: string,
    params: AgentUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<AgentDefinition> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/ai/agents/${id}/status`, { query: { include }, body, ...options });
  }
}

/**
 * An AI agent available to the account.
 *
 * The definition describes what the agent does, how its runs are triggered, the
 * tools it can use, and whether it is currently enabled for the account.
 */
export interface AgentDefinition {
  /**
   * Agent definition ID.
   */
  id: string;

  /**
   * Category grouping for the agent (e.g. `order_processing`), used to organize
   * agents in the UI.
   */
  category_code: string;

  /**
   * Agent-level configuration controlling LLM behavior and trigger settings.
   *
   * Distinct from per-tool configuration (`tools[].config`), which configures
   * individual tools attached to the agent.
   */
  config: AgentDefinitionConfig | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether the agent is provided by Augno or created in this account.
   *
   * - `system`: provided by Augno; cannot be edited or deleted.
   * - `custom`: created by a user in this account.
   */
  definition_type: 'system' | 'custom';

  /**
   * Description of what the agent does.
   */
  description: string | null;

  /**
   * Whether the current user can edit this agent definition.
   *
   * Always `false` for `system` definitions.
   */
  is_editable: boolean;

  /**
   * Human-readable name of the agent.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * URL-friendly identifier for the agent.
   */
  slug: string;

  /**
   * Whether this agent is enabled for the current account.
   *
   * Activation is per-account: a `system` agent shared across accounts can be
   * `active` for one account and `inactive` for another. An `inactive` agent does
   * not run.
   */
  status: 'active' | 'inactive';

  /**
   * List represents a paginated list of resources.
   */
  tools: ListAgentDefinitionTool | null;

  /**
   * How runs of this agent are initiated.
   *
   * - `scheduled`: runs on a cron schedule (see
   *   `config.trigger_config.cron_schedule`).
   * - `event`: runs in response to platform events (see
   *   `config.trigger_config.event_filters`).
   * - `manual`: runs only when explicitly invoked.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Agent-level configuration controlling LLM behavior and trigger settings.
 *
 * Distinct from per-tool configuration (`tools[].config`), which configures
 * individual tools attached to the agent.
 */
export interface AgentDefinitionConfig {
  /**
   * LLM model identifier (e.g. `claude-sonnet-4`).
   */
  model: string | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition_config';

  /**
   * LLM provider name (e.g. `anthropic`, `openai`).
   *
   * Inferred from `model` if omitted.
   */
  provider: string | null;

  /**
   * System prompt / instructions for the agent.
   */
  system_prompt: string | null;

  /**
   * LLM sampling temperature between 0 and 1.
   */
  temperature: number | null;

  /**
   * Trigger-type-specific configuration.
   *
   * Which fields are populated depends on the agent's `trigger_type`:
   *
   * - `scheduled`: `cron_schedule` (and optionally `timezone`) is set.
   * - `event`: `event_filters` is set.
   * - `manual`: all fields are empty.
   */
  trigger_config: TriggerConfig | null;
}

/**
 * Tool attached to an agent definition.
 *
 * Pairs an AvailableTool with agent-specific config values.
 */
export interface AgentDefinitionTool {
  /**
   * Agent definition tool ID.
   */
  id: string;

  /**
   * Instance-specific configuration for this tool.
   *
   * Must conform to the tool's `config_schema`. Encoded as a JSON value (object,
   * array, string, number, boolean, or null), not a JSON-encoded string.
   */
  config: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition_tool';

  /**
   * Whether calls to this tool must be approved by a user before they execute.
   *
   * When `true`, the run pauses in the `awaiting_approval` status each time the
   * agent invokes this tool; approve or allow the tool via the Continue Agent Run
   * endpoint to proceed.
   */
  require_review: boolean;

  /**
   * Sort order within the agent.
   */
  sort_order: number;

  /**
   * Platform tool that can be attached to agents.
   */
  tool: AIAPI.AvailableTool;
}

/**
 * Agent-level configuration for creation/update requests.
 */
export interface ConfigInput {
  /**
   * LLM model identifier (e.g. `claude-sonnet-4`).
   */
  model?: string;

  /**
   * LLM provider name (e.g. `anthropic`, `openai`).
   *
   * Inferred from `model` if omitted.
   */
  provider?: string;

  /**
   * System prompt / instructions for the agent.
   */
  system_prompt?: string;

  /**
   * LLM sampling temperature between 0 and 1.
   */
  temperature?: number;

  /**
   * Trigger-type-specific settings for agent creation/update requests.
   *
   * Required contents depend on the agent's `trigger_type`:
   *
   * - `scheduled`: `cron_schedule` is required.
   * - `event`: at least one entry in `event_filters` is required.
   * - `manual`: no trigger configuration is needed.
   */
  trigger_config?: TriggerConfigInput;
}

/**
 * Request to create an agent definition.
 */
export interface CreateAgentRequest {
  /**
   * Category grouping for the agent (e.g. `order_processing`), used to organize
   * agents in the UI.
   */
  category_code: string;

  /**
   * Agent-level configuration for creation/update requests.
   */
  config: ConfigInput;

  /**
   * Human-readable name of the agent.
   */
  name: string;

  /**
   * URL-friendly identifier for the agent.
   */
  slug: string;

  /**
   * How runs of this agent are initiated.
   *
   * - `scheduled`: runs on a cron schedule; `config.trigger_config.cron_schedule` is
   *   required.
   * - `event`: runs in response to platform events; at least one
   *   `config.trigger_config.event_filters` entry is required.
   * - `manual`: runs only when explicitly invoked.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Description of what the agent does.
   */
  description?: string;

  /**
   * ID of the role that defines the permissions the agent operates with.
   */
  role_id?: string;

  /**
   * Tools to attach to the agent.
   */
  tools?: Array<ToolInput>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentDefinition {
  /**
   * Resources in this page.
   */
  data: Array<AgentDefinition>;

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
export interface ListAgentDefinitionTool {
  /**
   * Resources in this page.
   */
  data: Array<AgentDefinitionTool>;

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
 * Tool to attach to an agent definition.
 */
export interface ToolInput {
  /**
   * ID of the tool to attach.
   *
   * Available tool IDs can be discovered with the List Tools endpoint
   * (`GET /v1/ai/tools`).
   */
  tool_id: string;

  /**
   * JSON-encoded configuration for this tool instance.
   *
   * The expected structure depends on the tool (see the tool's `config_schema`).
   */
  config_json?: string;

  /**
   * Whether actions from this tool require human review before they execute.
   */
  require_review?: boolean;

  /**
   * Display order among the agent's tools (lower values appear first).
   */
  sort_order?: number;
}

/**
 * Trigger-type-specific configuration.
 *
 * Which fields are populated depends on the agent's `trigger_type`:
 *
 * - `scheduled`: `cron_schedule` (and optionally `timezone`) is set.
 * - `event`: `event_filters` is set.
 * - `manual`: all fields are empty.
 */
export interface TriggerConfig {
  /**
   * Cron expression for scheduled triggers (e.g. `0 9 * * *`).
   */
  cron_schedule: string | null;

  /**
   * Event types that trigger this agent (e.g.
   * `["email.received", "order.created"]`).
   */
  event_filters: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'trigger_config';

  /**
   * IANA timezone for the cron schedule (e.g. `America/New_York`).
   */
  timezone: string | null;
}

/**
 * Trigger-type-specific settings for agent creation/update requests.
 *
 * Required contents depend on the agent's `trigger_type`:
 *
 * - `scheduled`: `cron_schedule` is required.
 * - `event`: at least one entry in `event_filters` is required.
 * - `manual`: no trigger configuration is needed.
 */
export interface TriggerConfigInput {
  /**
   * Event types that trigger this agent (e.g.
   * `["email.received", "order.created"]`).
   */
  event_filters: Array<string>;

  /**
   * Cron expression for scheduled triggers (e.g. `0 9 * * *`).
   */
  cron_schedule?: string;

  /**
   * IANA timezone for the cron schedule (e.g. `America/New_York`).
   */
  timezone?: string;
}

/**
 * Request to partially update an agent definition.
 */
export interface UpdateAgentRequest {
  /**
   * Category grouping for the agent (e.g. `order_processing`), used to organize
   * agents in the UI.
   */
  category_code?: string;

  /**
   * Agent-level configuration for creation/update requests.
   */
  config?: ConfigInput;

  /**
   * Description of what the agent does.
   */
  description?: string;

  /**
   * Human-readable name of the agent.
   */
  name?: string;

  /**
   * ID of the role that defines the permissions the agent operates with.
   */
  role_id?: string;

  /**
   * URL-friendly identifier for the agent.
   */
  slug?: string;

  /**
   * Tools to attach to the agent.
   *
   * Replaces the existing tool set when provided.
   */
  tools?: Array<ToolInput>;

  /**
   * How runs of this agent are initiated: `scheduled`, `event`, or `manual`.
   *
   * When changing the trigger type, also provide a `config` with a `trigger_config`
   * appropriate for the new type (a cron schedule for `scheduled`, at least one
   * event filter for `event`).
   */
  trigger_type?: 'scheduled' | 'manual' | 'event';
}

/**
 * Request to update the per-account status of an agent.
 */
export interface UpdateAgentStatusRequest {
  /**
   * Account-level status to set: `active` to enable the agent for this account,
   * `inactive` to disable it.
   *
   * This only affects activation for the current account and leaves the shared agent
   * definition unchanged.
   */
  status: string;
}

export interface AgentDeleteResponse {}

export interface AgentCreateParams {
  /**
   * Body param: Category grouping for the agent (e.g. `order_processing`), used to
   * organize agents in the UI.
   */
  category_code: string;

  /**
   * Body param: Agent-level configuration for creation/update requests.
   */
  config: ConfigInput;

  /**
   * Body param: Human-readable name of the agent.
   */
  name: string;

  /**
   * Body param: URL-friendly identifier for the agent.
   */
  slug: string;

  /**
   * Body param: How runs of this agent are initiated.
   *
   * - `scheduled`: runs on a cron schedule; `config.trigger_config.cron_schedule` is
   *   required.
   * - `event`: runs in response to platform events; at least one
   *   `config.trigger_config.event_filters` entry is required.
   * - `manual`: runs only when explicitly invoked.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;

  /**
   * Body param: Description of what the agent does.
   */
  description?: string;

  /**
   * Body param: ID of the role that defines the permissions the agent operates with.
   */
  role_id?: string;

  /**
   * Body param: Tools to attach to the agent.
   */
  tools?: Array<ToolInput>;
}

export interface AgentRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export interface AgentUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;

  /**
   * Body param: Category grouping for the agent (e.g. `order_processing`), used to
   * organize agents in the UI.
   */
  category_code?: string;

  /**
   * Body param: Agent-level configuration for creation/update requests.
   */
  config?: ConfigInput;

  /**
   * Body param: Description of what the agent does.
   */
  description?: string;

  /**
   * Body param: Human-readable name of the agent.
   */
  name?: string;

  /**
   * Body param: ID of the role that defines the permissions the agent operates with.
   */
  role_id?: string;

  /**
   * Body param: URL-friendly identifier for the agent.
   */
  slug?: string;

  /**
   * Body param: Tools to attach to the agent.
   *
   * Replaces the existing tool set when provided.
   */
  tools?: Array<ToolInput>;

  /**
   * Body param: How runs of this agent are initiated: `scheduled`, `event`, or
   * `manual`.
   *
   * When changing the trigger type, also provide a `config` with a `trigger_config`
   * appropriate for the new type (a cron schedule for `scheduled`, at least one
   * event filter for `event`).
   */
  trigger_type?: 'scheduled' | 'manual' | 'event';
}

export interface AgentListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Restricts results to agents of one of the given definition types.
   */
  definition_types?: Array<'system' | 'custom'>;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;

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
   * Restricts results to agents with one of the given account-level statuses.
   *
   * Omit to return agents of every status; repeat the parameter to match more than
   * one status.
   */
  statuses?: Array<'active' | 'inactive'>;

  /**
   * Restricts results to agents with one of the given trigger types.
   */
  trigger_types?: Array<'scheduled' | 'manual' | 'event'>;
}

export interface AgentUpdateStatusParams {
  /**
   * Body param: Account-level status to set: `active` to enable the agent for this
   * account, `inactive` to disable it.
   *
   * This only affects activation for the current account and leaves the shared agent
   * definition unchanged.
   */
  status: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export declare namespace Agents {
  export {
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
}
