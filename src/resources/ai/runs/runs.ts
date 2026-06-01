// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MemoriesAPI from '../memories';
import * as EdiRunsAPI from '../../operations/edi-runs';
import * as ActionsAPI from './actions';
import { ActionCancelParams, ActionContinueParams, Actions, ContinueRunRequest } from './actions';
import * as ShipmentsActionsAPI from '../../operations/shipments/actions';
import * as LinesAPI from '../../operations/shipments/lines';
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
  create(params: RunCreateParams, options?: RequestOptions): APIPromise<ActionsAPI.AgentRun> {
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
  ): APIPromise<ActionsAPI.AgentRun> {
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
 * Reference to an actor (user, API key, or agent).
 */
export interface Actor {
  /**
   * Actor ID.
   */
  id: string;

  /**
   * Human-readable handle (`email` for users, `redacted_value` for API keys, `slug`
   * for agents).
   */
  handle: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'actor';

  /**
   * Role resource.
   */
  role: ShipmentsActionsAPI.Role | null;

  /**
   * Actor type.
   */
  type: 'user' | 'api_key' | 'agent';
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
 * Agent action resource.
 */
export interface AgentAction {
  /**
   * Agent action ID.
   */
  id: string;

  /**
   * When this action was created.
   */
  created_at: string;

  /**
   * Action description.
   */
  description: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  entity: MemoriesAPI.Entity | null;

  /**
   * Error message if the action failed.
   */
  error_message: string | null;

  /**
   * When the action was executed.
   */
  executed_at: string | null;

  /**
   * Action input. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  input: unknown | null;

  /**
   * Short label.
   */
  label: string | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_action';

  /**
   * Action output. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * Whether human review is required.
   */
  requires_review: boolean;

  /**
   * When the action was reviewed.
   */
  reviewed_at: string | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  reviewed_by: ShipmentsActionsAPI.Actor | null;

  /**
   * Agent run resource.
   */
  run: ActionsAPI.AgentRun | null;

  /**
   * Current action status.
   */
  status: 'pending_review' | 'auto_approved' | 'approved' | 'rejected' | 'executed' | 'failed';

  /**
   * Tool slug.
   */
  tool_slug:
    | 'save_memory'
    | 'create_alert'
    | 'search_products'
    | 'list_products'
    | 'lookup_customer'
    | 'create_artifact'
    | 'update_memory'
    | 'delete_memory'
    | 'read_doc'
    | 'fetch_url';

  /**
   * When this action was last updated.
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
 * Agent run resource.
 */
export interface AgentRun {
  /**
   * Agent run ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  actions: ActionsAPI.ListAgentAction | null;

  /**
   * When the run completed.
   */
  completed_at: string | null;

  /**
   * When this run was created.
   */
  created_at: string;

  /**
   * Agent definition resource.
   */
  definition: ActionsAPI.AgentDefinition | null;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Error message if the run failed.
   */
  error_message: string | null;

  /**
   * Input provided to the agent. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  input: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run';

  /**
   * Output produced by the agent. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  output: unknown | null;

  /**
   * When the run started executing.
   */
  started_at: string | null;

  /**
   * Current run status.
   */
  status:
    | 'pending'
    | 'running'
    | 'completed'
    | 'failed'
    | 'cancelled'
    | 'awaiting_input'
    | 'awaiting_approval';

  /**
   * List represents a paginated list of resources.
   */
  steps: ActionsAPI.ListAgentRunStep | null;

  /**
   * Total input tokens consumed.
   */
  total_input_tokens: number | null;

  /**
   * Total output tokens consumed.
   */
  total_output_tokens: number | null;

  /**
   * Trigger type.
   */
  trigger_type: 'scheduled' | 'manual' | 'event';

  /**
   * Reference to an actor (user, API key, or agent).
   */
  triggered_by: ShipmentsActionsAPI.Actor | null;

  /**
   * When this run was last updated.
   */
  updated_at: string;
}

/**
 * Agent run step resource.
 */
export interface AgentRunStep {
  /**
   * Agent run step ID.
   */
  id: string;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  actor: ShipmentsActionsAPI.Actor | null;

  /**
   * Step content.
   */
  content: string | null;

  /**
   * When this step was created.
   */
  created_at: string;

  /**
   * Duration in milliseconds.
   */
  duration_ms: number | null;

  /**
   * Metadata for the step. Encoded as a JSON value (object, array, string, number,
   * boolean, or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_run_step';

  /**
   * Sequence number.
   */
  sequence: number;

  /**
   * Step type.
   */
  step_type: string;

  /**
   * Short title for the step.
   */
  title: string;
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
 * Entity is a polymorphic reference to any resource in the system.
 */
export interface Entity {
  /**
   * Unique identifier for the entity.
   */
  id: string;

  /**
   * Secondary human-readable identifier (e.g. email address, username, redacted API
   * key value).
   */
  handle: string | null;

  /**
   * Human-readable display name for the entity (e.g. a user's full name, a sales
   * order number).
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'entity';

  /**
   * The resource kind that this entity references (e.g. "user", "customer",
   * "sales_order").
   */
  type:
    | 'account'
    | 'actor'
    | 'entity'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'plan_change'
    | 'enterprise_inquiry'
    | 'request_log'
    | 'audit_event'
    | 'audit_field_change'
    | 'role'
    | 'unit'
    | 'account_affiliation'
    | 'agent_definition'
    | 'available_tool'
    | 'agent_definition_tool'
    | 'agent_account_status'
    | 'agent_run'
    | 'agent_action'
    | 'agent_run_step'
    | 'agent_token_usage'
    | 'agent_memory'
    | 'agent_alert'
    | 'tool_group'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'account_status'
    | 'geolocation'
    | 'account_user'
    | 'department'
    | 'account_integration'
    | 'account_price'
    | 'product_line'
    | 'item_category'
    | 'attribute'
    | 'rate'
    | 'account_group_product_line_access'
    | 'sales_target'
    | 'adjustment_type'
    | 'account_branding'
    | 'account_portal'
    | 'account_logo_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_inventory'
    | 'product'
    | 'batch'
    | 'batch_flow_node'
    | 'scanning_consumption'
    | 'open_batch_summary'
    | 'scanning_production_step_info'
    | 'scanning_station'
    | 'production_step'
    | 'production_run'
    | 'machine'
    | 'child_account'
    | 'unit_group'
    | 'unit_group_unit'
    | 'consumption'
    | 'customer_product_line_access'
    | 'customer'
    | 'frequently_ordered_product'
    | 'priority'
    | 'delivery'
    | 'delivery_line'
    | 'sales_order'
    | 'sales_order_line'
    | 'sales_order_type'
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'inventory_change_log'
    | 'invoice'
    | 'invoice_summary'
    | 'invoice_line'
    | 'invoice_allocation'
    | 'invoice_for_payment'
    | 'shipment'
    | 'shipment_summary'
    | 'shipment_line'
    | 'shipping_case'
    | 'shipping_case_label_url'
    | 'settlement'
    | 'settlement_summary'
    | 'role_permission'
    | 'registration_flow'
    | 'registration_flow_option'
    | 'transaction'
    | 'transaction_summary'
    | 'transaction_method'
    | 'transaction_type'
    | 'transaction_allocation'
    | 'usage_item'
    | 'agent_token_detail'
    | 'account_usage_response'
    | 'subscription_info'
    | 'billing_portal_session_response'
    | 'switch_plan_response'
    | 'ensure_billing_customer_response'
    | 'spending_cap_response'
    | 'agent_spend_info'
    | 'webhook_response'
    | 'address_suggestion'
    | 'address_components'
    | 'address_details_result'
    | 'validated_address'
    | 'plan_limit'
    | 'plan_change_proration'
    | 'plan_change_line_item'
    | 'setup_billing_response'
    | 'confirm_payment_response'
    | 'oauth_response'
    | 'oauth_status_response'
    | 'stripe_publishable_key'
    | 'stripe_status'
    | 'healthcheck'
    | 'agent_definition_config'
    | 'trigger_config'
    | 'customer_contact_info'
    | 'customer_freight_preferences'
    | 'customer_defaults'
    | 'customer_notification_preferences'
    | 'order_discount'
    | 'sales_order_status'
    | 'material'
    | 'supplier_material'
    | 'part'
    | 'permission_group'
    | 'permission'
    | 'pick'
    | 'pick_line'
    | 'product_type'
    | 'production'
    | 'production_flow'
    | 'map'
    | 'purchase_order'
    | 'purchase_order_line'
    | 'supplier'
    | 'supplier_summary'
    | 'receivable_entry'
    | 'receiving_order'
    | 'receiving_order_line'
    | 'email_contact'
    | 'allocation_entry'
    | 'open_credit_entry'
    | 'volume_discount'
    | 'volume_discount_tier'
    | 'analyze_deliveries_response'
    | 'analyze_manufacturing_response'
    | 'analyze_manufacturing_batch_response'
    | 'analyze_quarterly_orders_response'
    | 'analyze_new_customers_response'
    | 'analyze_oee_response'
    | 'catalog_product_line'
    | 'catalog_category'
    | 'catalog_product'
    | 'catalog_property'
    | 'catalog_attribute'
    | 'dc_location'
    | 'edi_run'
    | 'inventory_item'
    | 'analyze_weeks_of_sales_response'
    | 'bulk_reconcile_items_response'
    | 'sys_property'
    | 'sys_property_type'
    | 'sys_property_value'
    | 'territory'
    | 'tenancy'
    | 'checkout_session'
    | 'estimate_rate_result'
    | 'rate_shop_option'
    | 'rate_shop_result'
    | 'owner'
    | 'message'
    | 'account_plan';
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
export interface ListAgentAction {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AgentAction>;

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
 * List represents a paginated list of resources.
 */
export interface ListAgentRun {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AgentRun>;

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
export interface ListAgentRunStep {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AgentRunStep>;

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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Actor as Actor,
    type Address as Address,
    type AgentAction as AgentAction,
    type AgentDefinition as AgentDefinition,
    type AgentDefinitionConfig as AgentDefinitionConfig,
    type AgentDefinitionTool as AgentDefinitionTool,
    type AgentRun as AgentRun,
    type AgentRunStep as AgentRunStep,
    type AvailableTool as AvailableTool,
    type Entity as Entity,
    type Geolocation as Geolocation,
    type ListAgentAction as ListAgentAction,
    type ListAgentDefinitionTool as ListAgentDefinitionTool,
    type ListAgentRun as ListAgentRun,
    type ListAgentRunStep as ListAgentRunStep,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Role as Role,
    type TriggerConfig as TriggerConfig,
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
