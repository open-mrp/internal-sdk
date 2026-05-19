// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List, create, update, and delete agent memories.
 */
export class Memories extends APIResource {
  /**
   * Creates an agent memory.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.create({
   *   category: 'preference',
   *   content:
   *     'Customer prefers express shipping on all orders.',
   *   importance: 0.8,
   *   metadata: { source: 'support_ticket' },
   * });
   * ```
   */
  create(body: MemoryCreateParams, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.post('/v1/ai/memories', { body, ...options });
  }

  /**
   * Returns an agent memory by ID.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.get(path`/v1/ai/memories/${id}`, options);
  }

  /**
   * Partially updates an agent memory.
   *
   * @example
   * ```ts
   * const agentMemory = await client.ai.memories.update('id', {
   *   category: 'category',
   *   content:
   *     'Customer prefers next-day shipping on all orders.',
   *   importance: 0.9,
   *   metadata: {},
   * });
   * ```
   */
  update(id: string, body: MemoryUpdateParams, options?: RequestOptions): APIPromise<AgentMemory> {
    return this._client.patch(path`/v1/ai/memories/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of agent memories.
   *
   * @example
   * ```ts
   * const memories = await client.ai.memories.list();
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemoryListResponse> {
    return this._client.get('/v1/ai/memories', { query, ...options });
  }

  /**
   * Deletes an agent memory.
   *
   * @example
   * ```ts
   * const memory = await client.ai.memories.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MemoryDeleteResponse> {
    return this._client.delete(path`/v1/ai/memories/${id}`, options);
  }
}

/**
 * Agent memory resource.
 */
export interface AgentMemory {
  /**
   * Memory ID.
   */
  id: string;

  /**
   * Memory category.
   */
  category: string;

  /**
   * Memory content.
   */
  content: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  entity: Entity | null;

  /**
   * Expiration timestamp. Null means it never expires.
   */
  expires_at: string | null;

  /**
   * Importance score (0–1 scale).
   */
  importance: number;

  /**
   * Arbitrary metadata as JSON. Encoded as a JSON value (object, array, string,
   * number, boolean, or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Resource type identifier.
   */
  object: 'agent_memory';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
 * List represents a paginated list of resources.
 */
export interface MemoryListResponse {
  /**
   * Resources in this page.
   */
  data: Array<AgentMemory>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface MemoryDeleteResponse {}

export interface MemoryCreateParams {
  /**
   * Memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * Importance score between 0 and 1.
   */
  importance: number;

  /**
   * JSON metadata. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Entity ID.
   */
  entity_id?: string;

  /**
   * Entity type this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * ISO 8601 expiration timestamp.
   */
  expires_at?: string;
}

export interface MemoryUpdateParams {
  /**
   * Memory category (e.g. "preference", "fact", "instruction").
   */
  category: string;

  /**
   * Text content.
   */
  content: string;

  /**
   * Importance score between 0 and 1.
   */
  importance: number;

  /**
   * JSON metadata. Encoded as a JSON value (object, array, string, number, boolean,
   * or null), not a JSON-encoded string.
   */
  metadata: unknown | null;

  /**
   * Entity ID.
   */
  entity_id?: string;

  /**
   * Entity type this memory is scoped to (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * ISO 8601 expiration timestamp.
   */
  expires_at?: string;
}

export interface MemoryListParams {
  /**
   * Category filter (e.g. "preference", "fact").
   */
  category?: string;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Entity type filter (e.g. "customer", "product").
   */
  entity_type?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace Memories {
  export {
    type AgentMemory as AgentMemory,
    type Entity as Entity,
    type MemoryListResponse as MemoryListResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryListParams as MemoryListParams,
  };
}
