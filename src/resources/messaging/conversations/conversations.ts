// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionArchiveParams,
  ActionAssignParams,
  ActionHideParams,
  ActionLeaveParams,
  ActionMuteParams,
  ActionReadParams,
  ActionRedactParams,
  ActionReportParams,
  ActionSetLegalHoldParams,
  ActionSetStatusParams,
  ActionUnarchiveParams,
  ActionUnhideParams,
  ActionUnmuteParams,
  Actions,
  AssignConversationRequest,
  MarkConversationReadRequest,
  MuteConversationRequest,
  ReportConversationRequest,
  SetLegalHoldRequest,
  SetWorkflowStatusRequest,
} from './actions';
import * as AgentsAPI from './agents';
import {
  AddAgentParticipantRequest,
  AgentCreateParams,
  AgentDeleteParams,
  AgentDeleteResponse,
  Agents,
} from './agents';
import * as LinksAPI from './links';
import {
  AddConversationLinkRequest,
  ConversationLink,
  LinkCreateParams,
  LinkDeleteParams,
  LinkDeleteResponse,
  LinkListParams,
  Links,
  ListConversationLink,
} from './links';
import * as MessagesAPI from './messages';
import {
  ListMessage,
  MessageAttachmentInput,
  MessageCreateParams,
  MessageListParams,
  Messages,
  SendMessageRequest,
} from './messages';
import * as AttachmentsAPI from './attachments/attachments';
import { Attachments } from './attachments/attachments';
import * as ParticipantsAPI from './participants/participants';
import {
  AddParticipantRequest,
  ParticipantCreateParams,
  ParticipantDeleteParams,
  ParticipantDeleteResponse,
  Participants,
} from './participants/participants';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create conversations, send and read messages (1:1 direct messages).
 */
export class Conversations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  links: LinksAPI.Links = new LinksAPI.Links(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  participants: ParticipantsAPI.Participants = new ParticipantsAPI.Participants(this._client);
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  attachments: AttachmentsAPI.Attachments = new AttachmentsAPI.Attachments(this._client);

  /**
   * Starts a conversation between participants.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.create({
   *     type: 'group',
   *     group_id: 'cvgp_018e88072d1320808dc97abc',
   *     participant_account_user_ids: [
   *       'acus_01ea9983ddb41dacc44ecf997c',
   *     ],
   *     title: 'Order #1042 — shipping question',
   *     topic_resource_id: 'or_01d5034136c3ccc048abecc312',
   *     topic_resource_type: 'sales_order',
   *   });
   * ```
   */
  create(params: ConversationCreateParams, options?: RequestOptions): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params;
    return this._client.post('/v1/messaging/conversations', { query: { include }, body, ...options });
  }

  /**
   * Returns one conversation (with participants) the caller belongs to.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.retrieve(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ConversationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    return this._client.get(path`/v1/messaging/conversations/${id}`, { query, ...options });
  }

  /**
   * Renames a conversation.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.update(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { title: 'Fulfillment war room' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ConversationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/messaging/conversations/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns the caller's conversations, most-recently-active first.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listConversation =
   *   await client.messaging.conversations.list();
   * ```
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListConversation> {
    return this._client.get('/v1/messaging/conversations', { query, ...options });
  }
}

/**
 * Request to create a conversation.
 */
export interface CreateConversationRequest {
  /**
   * The kind of conversation to create.
   */
  type: 'direct_message' | 'group' | 'system';

  /**
   * Seed a group conversation from a reusable roster.
   *
   * The roster's current members are copied into this conversation (in addition to
   * any `participant_account_user_ids`); the conversation is independent afterward.
   * Ignored for direct messages.
   */
  group_id?: string;

  /**
   * The other participant(s).
   *
   * For a direct message, exactly one account_user ID. For a group, the members to
   * add — optional when `group_id` seeds the roster.
   */
  participant_account_user_ids?: Array<string>;

  /**
   * Title for a group conversation.
   *
   * Ignored for direct messages.
   */
  title?: string;

  /**
   * The id of the business record to anchor this conversation to.
   */
  topic_resource_id?: string;

  /**
   * The type of business record to anchor this conversation to.
   */
  topic_resource_type?:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_related'
    | 'order_contact'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'account_plan'
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
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'read_cursor'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'notification_preference'
    | 'message_attachment'
    | 'attachment_upload_target'
    | 'scheduled_message'
    | 'messaging_contact'
    | 'message_report'
    | 'tool_group'
    | 'model'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'support_route'
    | 'support_availability'
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
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'email_domain'
    | 'email_inbox'
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
    | 'sales_order_line'
    | 'sales_order_type'
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
    | 'created_by'
    | 'message'
    | 'account_photo_upload_result'
    | 'user_photo_upload_result'
    | 'user_photo_url'
    | 'batch_lot'
    | 'check_duplicate_result'
    | 'item_trend_point'
    | 'pack_pick_response'
    | 'pick_shipments_response'
    | 'tenancy_pending_registration'
    | 'invoice_allocation_entry'
    | 'allocation_customer'
    | 'checkout_sales_order_response'
    | 'create_production_run_response'
    | 'sales_order_price_quote'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListConversation {
  /**
   * Resources in this page.
   */
  data: Array<MessagingAPI.Conversation>;

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
 * Request to rename a conversation (owner/admin; groups only).
 */
export interface UpdateConversationRequest {
  /**
   * New group title.
   *
   * Send `null` to clear the title; omit to leave it unchanged.
   */
  title?: string | null;
}

export interface ConversationCreateParams {
  /**
   * Body param: The kind of conversation to create.
   */
  type: 'direct_message' | 'group' | 'system';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: Seed a group conversation from a reusable roster.
   *
   * The roster's current members are copied into this conversation (in addition to
   * any `participant_account_user_ids`); the conversation is independent afterward.
   * Ignored for direct messages.
   */
  group_id?: string;

  /**
   * Body param: The other participant(s).
   *
   * For a direct message, exactly one account_user ID. For a group, the members to
   * add — optional when `group_id` seeds the roster.
   */
  participant_account_user_ids?: Array<string>;

  /**
   * Body param: Title for a group conversation.
   *
   * Ignored for direct messages.
   */
  title?: string;

  /**
   * Body param: The id of the business record to anchor this conversation to.
   */
  topic_resource_id?: string;

  /**
   * Body param: The type of business record to anchor this conversation to.
   */
  topic_resource_type?:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_related'
    | 'order_contact'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'account_plan'
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
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'read_cursor'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'notification_preference'
    | 'message_attachment'
    | 'attachment_upload_target'
    | 'scheduled_message'
    | 'messaging_contact'
    | 'message_report'
    | 'tool_group'
    | 'model'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'support_route'
    | 'support_availability'
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
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'email_domain'
    | 'email_inbox'
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
    | 'sales_order_line'
    | 'sales_order_type'
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
    | 'created_by'
    | 'message'
    | 'account_photo_upload_result'
    | 'user_photo_upload_result'
    | 'user_photo_url'
    | 'batch_lot'
    | 'check_duplicate_result'
    | 'item_trend_point'
    | 'pack_pick_response'
    | 'pick_shipments_response'
    | 'tenancy_pending_registration'
    | 'invoice_allocation_entry'
    | 'allocation_customer'
    | 'checkout_sales_order_response'
    | 'create_production_run_response'
    | 'sales_order_price_quote'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member';
}

export interface ConversationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ConversationUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: New group title.
   *
   * Send `null` to clear the title; omit to leave it unchanged.
   */
  title?: string | null;
}

export interface ConversationListParams {
  /**
   * Support inbox: filter to cases owned by this assignee (a user or a team),
   * matched by id.
   */
  assignee_resource_id?: string;

  /**
   * Filter by conversation audience direction.
   */
  audience?: 'internal' | 'customer';

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
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Support inbox: include archived (resolved-and-closed) cases.
   */
  include_archived?: boolean;

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
   * Filter by conversation visibility.
   */
  status?: 'active' | 'hidden';

  /**
   * The id of the anchoring business record (with `topic_resource_type`).
   */
  topic_resource_id?: string;

  /**
   * Restrict to conversations anchored to a business record of this type (with
   * `topic_resource_id`).
   */
  topic_resource_type?:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_related'
    | 'order_contact'
    | 'user'
    | 'address'
    | 'api_key'
    | 'created_api_key'
    | 'refresh_token'
    | 'list'
    | 'sandbox'
    | 'registration_session'
    | 'pricing_plan'
    | 'account_plan'
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
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'read_cursor'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'notification_preference'
    | 'message_attachment'
    | 'attachment_upload_target'
    | 'scheduled_message'
    | 'messaging_contact'
    | 'message_report'
    | 'tool_group'
    | 'model'
    | 'payment_term'
    | 'shipping_term'
    | 'quantity'
    | 'account_group'
    | 'support_route'
    | 'support_availability'
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
    | 'location'
    | 'location_type'
    | 'lot'
    | 'email_log'
    | 'email_domain'
    | 'email_inbox'
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
    | 'sales_order_line'
    | 'sales_order_type'
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
    | 'created_by'
    | 'message'
    | 'account_photo_upload_result'
    | 'user_photo_upload_result'
    | 'user_photo_url'
    | 'batch_lot'
    | 'check_duplicate_result'
    | 'item_trend_point'
    | 'pack_pick_response'
    | 'pick_shipments_response'
    | 'tenancy_pending_registration'
    | 'invoice_allocation_entry'
    | 'allocation_customer'
    | 'checkout_sales_order_response'
    | 'create_production_run_response'
    | 'sales_order_price_quote'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member';

  /**
   * Filter by conversation type.
   */
  type?: 'direct_message' | 'group' | 'system';

  /**
   * Support inbox: restrict to cases with no assignee.
   */
  unassigned?: boolean;

  /**
   * Support inbox: filter external cases to a single triage lane.
   */
  workflow_status?: 'new' | 'open' | 'waiting_internal' | 'waiting_external' | 'needs_approval' | 'resolved';
}

Conversations.Actions = Actions;
Conversations.Links = Links;
Conversations.Messages = Messages;
Conversations.Participants = Participants;
Conversations.Agents = Agents;
Conversations.Attachments = Attachments;

export declare namespace Conversations {
  export {
    type CreateConversationRequest as CreateConversationRequest,
    type ListConversation as ListConversation,
    type UpdateConversationRequest as UpdateConversationRequest,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Actions as Actions,
    type AssignConversationRequest as AssignConversationRequest,
    type MarkConversationReadRequest as MarkConversationReadRequest,
    type MuteConversationRequest as MuteConversationRequest,
    type ReportConversationRequest as ReportConversationRequest,
    type SetLegalHoldRequest as SetLegalHoldRequest,
    type SetWorkflowStatusRequest as SetWorkflowStatusRequest,
    type ActionArchiveParams as ActionArchiveParams,
    type ActionAssignParams as ActionAssignParams,
    type ActionHideParams as ActionHideParams,
    type ActionLeaveParams as ActionLeaveParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionReadParams as ActionReadParams,
    type ActionRedactParams as ActionRedactParams,
    type ActionReportParams as ActionReportParams,
    type ActionSetLegalHoldParams as ActionSetLegalHoldParams,
    type ActionSetStatusParams as ActionSetStatusParams,
    type ActionUnarchiveParams as ActionUnarchiveParams,
    type ActionUnhideParams as ActionUnhideParams,
    type ActionUnmuteParams as ActionUnmuteParams,
  };

  export {
    Links as Links,
    type AddConversationLinkRequest as AddConversationLinkRequest,
    type ConversationLink as ConversationLink,
    type ListConversationLink as ListConversationLink,
    type LinkDeleteResponse as LinkDeleteResponse,
    type LinkCreateParams as LinkCreateParams,
    type LinkListParams as LinkListParams,
    type LinkDeleteParams as LinkDeleteParams,
  };

  export {
    Messages as Messages,
    type ListMessage as ListMessage,
    type MessageAttachmentInput as MessageAttachmentInput,
    type SendMessageRequest as SendMessageRequest,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Participants as Participants,
    type AddParticipantRequest as AddParticipantRequest,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantCreateParams as ParticipantCreateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
  };

  export {
    Agents as Agents,
    type AddAgentParticipantRequest as AddAgentParticipantRequest,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentDeleteParams as AgentDeleteParams,
  };

  export { Attachments as Attachments };
}
