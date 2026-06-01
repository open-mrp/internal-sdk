// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as ActionsAPI from './runs/actions';
import * as ShipmentsActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
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
   *   description:
   *     'Monitors inventory levels and creates restock alerts.',
   *   name: 'Inventory Monitor',
   *   role_id: 'rl_01c16d2eb637c0d1f3a372937c',
   *   slug: 'inventory_monitor',
   *   trigger_type: 'event',
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
  create(params: AgentCreateParams, options?: RequestOptions): APIPromise<ActionsAPI.AgentDefinition> {
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
  ): APIPromise<ActionsAPI.AgentDefinition> {
    return this._client.get(path`/v1/ai/agents/${id}`, { query, ...options });
  }

  /**
   * Partially updates a custom agent definition. System agents cannot be modified.
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
  ): APIPromise<ActionsAPI.AgentDefinition> {
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
   * Soft-deletes a custom agent definition. System agents cannot be deleted.
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
   * Upserts the per-account status for an agent definition.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.updateStatus(
   *   'agdf_01b9ef28feb99e6954201aca63',
   *   { status_code: 'active' },
   * );
   * ```
   */
  updateStatus(
    id: string,
    params: AgentUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.AgentDefinition> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/ai/agents/${id}/status`, { query: { include }, body, ...options });
  }
}

/**
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: LinesAPI.AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Agent definition resource.
 */
export interface AgentDefinition {
  /**
   * Agent definition ID.
   */
  id: string;

  /**
   * Category code.
   */
  category_code: string;

  /**
   * Agent-level configuration controlling LLM behavior. Separate from
   * AgentDefinitionTool.Config, which configures individual tools.
   */
  config: ActionsAPI.AgentDefinitionConfig | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Agent definition type.
   */
  definition_type: 'system' | 'custom';

  /**
   * Description of what the agent does.
   */
  description: string | null;

  /**
   * Whether the current user can edit this agent definition.
   */
  is_editable: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition';

  /**
   * Role resource.
   */
  role: ShipmentsActionsAPI.Role | null;

  /**
   * URL-friendly slug.
   */
  slug: string;

  /**
   * Per-account activation status.
   */
  status: 'active' | 'inactive';

  /**
   * List represents a paginated list of resources.
   */
  tools: ActionsAPI.ListAgentDefinitionTool | null;

  /**
   * How this agent is triggered.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Agent-level configuration controlling LLM behavior. Separate from
 * AgentDefinitionTool.Config, which configures individual tools.
 */
export interface AgentDefinitionConfig {
  /**
   * LLM model identifier (e.g. "claude-sonnet-4").
   */
  model: string | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition_config';

  /**
   * LLM provider name (e.g. "anthropic", "openai"). Inferred from model if omitted.
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
   * Trigger-type-specific configuration. For "scheduled": CronSchedule is populated.
   * For "event": EventFilters is populated. For "manual": all fields are empty.
   */
  trigger_config: ActionsAPI.TriggerConfig | null;
}

/**
 * Tool attached to an agent definition. Pairs an AvailableTool with agent-specific
 * config values.
 */
export interface AgentDefinitionTool {
  /**
   * Agent definition tool ID.
   */
  id: string;

  /**
   * Instance-specific configuration for this tool. Must conform to the tool's
   * config_schema. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  config: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_definition_tool';

  /**
   * Requires human review before execution.
   */
  require_review: boolean;

  /**
   * Sort order within the agent.
   */
  sort_order: number;

  /**
   * Platform tool that can be attached to agents.
   */
  tool: ActionsAPI.AvailableTool;
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
 * Agent-level configuration for creation/update requests.
 */
export interface ConfigInput {
  /**
   * LLM model identifier (e.g. "claude-sonnet-4").
   */
  model: string | null;

  /**
   * LLM provider name (e.g. "anthropic", "openai"). Inferred from model if omitted.
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
   * Trigger-type-specific settings for agent creation/update requests.
   */
  trigger_config: TriggerConfigInput | null;
}

/**
 * Request to create an agent definition.
 */
export interface CreateAgentRequest {
  /**
   * Category code (e.g. "order_processing").
   */
  category_code: string;

  /**
   * Agent-level configuration for creation/update requests.
   */
  config: ConfigInput;

  /**
   * Description of what the agent does.
   */
  description: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Role ID defining agent permissions.
   */
  role_id: string;

  /**
   * URL-friendly identifier.
   */
  slug: string;

  /**
   * Trigger type: "manual", "scheduled", or "event".
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Tools to attach.
   */
  tools?: Array<ToolInput>;
}

/**
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAgentDefinition {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AgentDefinition>;

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
export interface ListAgentDefinitionTool {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AgentDefinitionTool>;

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
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
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
 * Role resource.
 */
export interface Role {
  /**
   * Role ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'role';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Permissions in `{domain}:{action}` format.
   */
  permissions: Array<string> | null;

  /**
   * Role type code.
   *
   * The role's type is sometimes used to gate special behaviors in the frontend and
   * to restrict some actions to only certain types of roles. For example, only roles
   * with the type `admin` can create and manage API keys.
   */
  type: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Tool to attach to an agent definition.
 */
export interface ToolInput {
  /**
   * JSON configuration for this tool instance.
   */
  config_json: string;

  /**
   * Requires human review before execution.
   */
  require_review: boolean;

  /**
   * Display order among the agent's tools (lower values appear first).
   */
  sort_order: number;

  /**
   * Available tool ID.
   */
  tool_id: string;
}

/**
 * Trigger-type-specific configuration. For "scheduled": CronSchedule is populated.
 * For "event": EventFilters is populated. For "manual": all fields are empty.
 */
export interface TriggerConfig {
  /**
   * Cron expression for scheduled triggers (e.g. "0 9 \* \* \*").
   */
  cron_schedule: string | null;

  /**
   * Event types that trigger this agent (e.g. ["email.received", "order.created"]).
   */
  event_filters: Array<string>;

  /**
   * Resource type identifier.
   */
  object: 'trigger_config';

  /**
   * IANA timezone for the cron schedule (e.g. "America/New_York").
   */
  timezone: string | null;
}

/**
 * Trigger-type-specific settings for agent creation/update requests.
 */
export interface TriggerConfigInput {
  /**
   * Cron expression for scheduled triggers (e.g. "0 9 \* \* \*").
   */
  cron_schedule: string | null;

  /**
   * Event types that trigger this agent (e.g. ["email.received", "order.created"]).
   */
  event_filters: Array<string>;

  /**
   * IANA timezone for the cron schedule (e.g. "America/New_York").
   */
  timezone: string | null;
}

/**
 * Request to partially update an agent definition.
 */
export interface UpdateAgentRequest {
  /**
   * Category code (e.g. "order_processing").
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
   * Display name.
   */
  name?: string;

  /**
   * Role ID defining agent permissions.
   */
  role_id?: string;

  /**
   * URL-friendly identifier.
   */
  slug?: string;

  /**
   * Tools to attach. Replaces the existing tool set when provided.
   */
  tools?: Array<ToolInput>;

  /**
   * Trigger type: "manual", "scheduled", or "event".
   */
  trigger_type?: 'scheduled' | 'manual' | 'event';
}

/**
 * Request to update the per-account status of an agent.
 */
export interface UpdateAgentStatusRequest {
  /**
   * Account-level status code: "active" or "inactive".
   */
  status_code: string;
}

export interface AgentDeleteResponse {}

export interface AgentCreateParams {
  /**
   * Body param: Category code (e.g. "order_processing").
   */
  category_code: string;

  /**
   * Body param: Agent-level configuration for creation/update requests.
   */
  config: ConfigInput;

  /**
   * Body param: Description of what the agent does.
   */
  description: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Role ID defining agent permissions.
   */
  role_id: string;

  /**
   * Body param: URL-friendly identifier.
   */
  slug: string;

  /**
   * Body param: Trigger type: "manual", "scheduled", or "event".
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;

  /**
   * Body param: Tools to attach.
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
   * Body param: Category code (e.g. "order_processing").
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
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Role ID defining agent permissions.
   */
  role_id?: string;

  /**
   * Body param: URL-friendly identifier.
   */
  slug?: string;

  /**
   * Body param: Tools to attach. Replaces the existing tool set when provided.
   */
  tools?: Array<ToolInput>;

  /**
   * Body param: Trigger type: "manual", "scheduled", or "event".
   */
  trigger_type?: 'scheduled' | 'manual' | 'event';
}

export interface AgentListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by definition type.
   */
  definition_types?: Array<'system' | 'custom'>;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by account-level status.
   */
  statuses?: Array<'active' | 'inactive'>;

  /**
   * Filter by trigger type.
   */
  trigger_types?: Array<'scheduled' | 'manual' | 'event'>;
}

export interface AgentUpdateStatusParams {
  /**
   * Body param: Account-level status code: "active" or "inactive".
   */
  status_code: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'config' | 'tools' | 'role' | 'role.permissions'>;
}

export declare namespace Agents {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type AgentDefinition as AgentDefinition,
    type AgentDefinitionConfig as AgentDefinitionConfig,
    type AgentDefinitionTool as AgentDefinitionTool,
    type AvailableTool as AvailableTool,
    type ConfigInput as ConfigInput,
    type CreateAgentRequest as CreateAgentRequest,
    type Geolocation as Geolocation,
    type ListAgentDefinition as ListAgentDefinition,
    type ListAgentDefinitionTool as ListAgentDefinitionTool,
    type Owner as Owner,
    type PageInfo as PageInfo,
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
}
