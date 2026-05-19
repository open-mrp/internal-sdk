// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as AIAPI from './ai';
import * as RolesAPI from '../identity/roles';
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
   *     trigger_config: {
   *       cron_schedule: null,
   *       timezone: null,
   *       event_filters: ['email.received'],
   *     },
   *   },
   *   description:
   *     'Monitors inventory levels and creates restock alerts.',
   *   name: 'Inventory Monitor',
   *   role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   *   slug: 'inventory_monitor',
   *   trigger_type: 'event',
   *   tools: [
   *     {
   *       tool_id: 'tdef_01k0b1seed0searchproduct0',
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
   *   'agdf_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * Partially updates a custom agent definition. System agents cannot be modified.
   *
   * @example
   * ```ts
   * const agentDefinition = await client.ai.agents.update(
   *   'agdf_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * const agents = await client.ai.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/ai/agents', { query, ...options });
  }

  /**
   * Soft-deletes a custom agent definition. System agents cannot be deleted.
   *
   * @example
   * ```ts
   * const agent = await client.ai.agents.delete(
   *   'agdf_01jm4r6700f8nwq3v5hx2d9ktp',
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
   *   'agdf_01jm4r6700f8nwq3v5hx2d9ktp',
   *   { status_code: 'active' },
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
  config: AgentDefinition.Config | null;

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
  role: RolesAPI.Role | null;

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
  tools: AgentDefinition.Tools | null;

  /**
   * How this agent is triggered.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace AgentDefinition {
  /**
   * Agent-level configuration controlling LLM behavior. Separate from
   * AgentDefinitionTool.Config, which configures individual tools.
   */
  export interface Config {
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
    trigger_config: Config.TriggerConfig | null;
  }

  export namespace Config {
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
  }

  /**
   * List represents a paginated list of resources.
   */
  export interface Tools {
    /**
     * Resources in this page.
     */
    data: Array<Tools.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Tools {
    /**
     * Tool attached to an agent definition. Pairs an AvailableTool with agent-specific
     * config values.
     */
    export interface Data {
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
      tool: AIAPI.AvailableTool;
    }
  }
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
  trigger_config: ConfigInput.TriggerConfig | null;
}

export namespace ConfigInput {
  /**
   * Trigger-type-specific settings for agent creation/update requests.
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
     * IANA timezone for the cron schedule (e.g. "America/New_York").
     */
    timezone: string | null;
  }
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
 * List represents a paginated list of resources.
 */
export interface AgentListResponse {
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
  page_info: PageInfo;
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
}
