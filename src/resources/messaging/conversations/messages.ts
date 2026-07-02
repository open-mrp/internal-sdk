// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Send, list, edit, and delete chat messages.
 */
export class Messages extends APIResource {
  /**
   * Posts a message to a conversation.
   *
   * With `mode` = `send` (the default) the message is delivered — immediately, or
   * queued when `scheduled_at` is set — and the request is idempotent on
   * `client_message_id`. With `mode` = `draft` a customer-reply draft is proposed on
   * an external case: it is held at status `draft` for human approval rather than
   * sent, and `channel` is required.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.conversations.messages.create(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     {
   *       body: 'Sounds good — shipping it today.',
   *       client_message_id: 'client_msg_8c7d2f',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    params: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Message> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/messages`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a conversation's messages, newest first, keyset-paginated by sequence.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listMessage =
   *   await client.messaging.conversations.messages.list(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  list(
    id: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMessage> {
    return this._client.get(path`/v1/messaging/conversations/${id}/messages`, { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMessage {
  /**
   * Resources in this page.
   */
  data: Array<MessagingAPI.Message>;

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
 * A single attachment supplied when sending a message.
 *
 * For uploaded kinds (`file`/`image`) supply the `s3_key` returned by the
 * upload-url endpoint; for `link` supply `url`; for `resource` supply
 * `resource_type` and `resource_id`.
 */
export interface MessageAttachmentInput {
  /**
   * The kind of attachment.
   */
  kind: 'file' | 'image' | 'link' | 'resource';

  /**
   * The MIME content type (file/image).
   */
  content_type?: string;

  /**
   * The original filename (file/image).
   */
  filename?: string;

  /**
   * The linked resource id (required for resource).
   */
  resource_id?: string;

  /**
   * The linked resource type (required for resource).
   */
  resource_type?: string;

  /**
   * The object-storage key from the upload-url response (required for file/image).
   */
  s3_key?: string;

  /**
   * The size in bytes (file/image).
   */
  size_bytes?: number;

  /**
   * The external URL (required for link).
   */
  url?: string;
}

/**
 * Request to post a message to a conversation.
 */
export interface SendMessageRequest {
  /**
   * Message body.
   *
   * Required unless the message carries at least one attachment or a resource link.
   */
  body: string;

  /**
   * Client-supplied dedupe key.
   *
   * A resend with the same value returns the original message. Required when sending
   * (`mode` = `send`); ignored for drafts.
   */
  client_message_id: string;

  /**
   * Attachments to include with the message.
   */
  attachments?: Array<MessageAttachmentInput>;

  /**
   * Who the message is addressed to on an external case.
   *
   * - `customer`: sends a customer-visible reply, branded "Customer Service" and
   *   delivered by email on an email-bridged case.
   * - `internal`: posts a team-only note that the customer never sees.
   *
   * When omitted, the message is posted as an internal team-only note.
   */
  audience?: 'internal' | 'customer';

  /**
   * Additional email recipients to copy on a customer reply (email channel).
   */
  cc?: Array<string>;

  /**
   * The channel a draft will be sent over when approved (`mode` = `draft`).
   *
   * - `message`: delivered as an in-conversation chat message.
   * - `email`: delivered as an outbound email from the conversation's bridged inbox.
   */
  channel?: 'message' | 'email';

  /**
   * ID of a resource to link in the message, paired with `link_resource_type`.
   */
  link_resource_id?: string;

  /**
   * Type of a resource to link in the message, paired with `link_resource_id`.
   */
  link_resource_type?:
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
   * Account user ids explicitly @mentioned in the message.
   *
   * A mention delivers a notification even when the recipient has muted the
   * conversation.
   */
  mentions?: Array<string>;

  /**
   * Whether to deliver the message now or hold it as a customer-reply draft.
   *
   * - `send`: delivers the message (immediately, or at `scheduled_at`). This is the
   *   default.
   * - `draft`: proposes a customer-reply draft on an external case, held for human
   *   approval rather than sent. Requires `channel`.
   */
  mode?: 'send' | 'draft';

  /**
   * The message this one is a reply to.
   */
  reply_to_message_id?: string;

  /**
   * When set, queue the message for delivery at this future time instead of sending
   * now.
   *
   * The created message has status `scheduled`.
   */
  scheduled_at?: string;

  /**
   * The internal thread message a draft is composed from, when drafting from a
   * thread (`mode` = `draft`).
   */
  source_thread_message_id?: string;

  /**
   * The email subject for a customer reply on an email-bridged case (`audience` =
   * `customer`).
   */
  subject?: string;
}

export interface MessageCreateParams {
  /**
   * Body param: Message body.
   *
   * Required unless the message carries at least one attachment or a resource link.
   */
  body: string;

  /**
   * Body param: Client-supplied dedupe key.
   *
   * A resend with the same value returns the original message. Required when sending
   * (`mode` = `send`); ignored for drafts.
   */
  client_message_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'sender'
    | 'author'
    | 'resource'
    | 'attachments'
    | 'attachments.resource'
    | 'conversation'
    | 'conversation.participants'
    | 'conversation.last_message'
    | 'reply_to'
    | 'reply_to.sender'
    | 'reply_to.author'
    | 'reply_to.attachments'
    | 'agent_run'
  >;

  /**
   * Body param: Attachments to include with the message.
   */
  attachments?: Array<MessageAttachmentInput>;

  /**
   * Body param: Who the message is addressed to on an external case.
   *
   * - `customer`: sends a customer-visible reply, branded "Customer Service" and
   *   delivered by email on an email-bridged case.
   * - `internal`: posts a team-only note that the customer never sees.
   *
   * When omitted, the message is posted as an internal team-only note.
   */
  audience?: 'internal' | 'customer';

  /**
   * Body param: Additional email recipients to copy on a customer reply (email
   * channel).
   */
  cc?: Array<string>;

  /**
   * Body param: The channel a draft will be sent over when approved (`mode` =
   * `draft`).
   *
   * - `message`: delivered as an in-conversation chat message.
   * - `email`: delivered as an outbound email from the conversation's bridged inbox.
   */
  channel?: 'message' | 'email';

  /**
   * Body param: ID of a resource to link in the message, paired with
   * `link_resource_type`.
   */
  link_resource_id?: string;

  /**
   * Body param: Type of a resource to link in the message, paired with
   * `link_resource_id`.
   */
  link_resource_type?:
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
   * Body param: Account user ids explicitly @mentioned in the message.
   *
   * A mention delivers a notification even when the recipient has muted the
   * conversation.
   */
  mentions?: Array<string>;

  /**
   * Body param: Whether to deliver the message now or hold it as a customer-reply
   * draft.
   *
   * - `send`: delivers the message (immediately, or at `scheduled_at`). This is the
   *   default.
   * - `draft`: proposes a customer-reply draft on an external case, held for human
   *   approval rather than sent. Requires `channel`.
   */
  mode?: 'send' | 'draft';

  /**
   * Body param: The message this one is a reply to.
   */
  reply_to_message_id?: string;

  /**
   * Body param: When set, queue the message for delivery at this future time instead
   * of sending now.
   *
   * The created message has status `scheduled`.
   */
  scheduled_at?: string;

  /**
   * Body param: The internal thread message a draft is composed from, when drafting
   * from a thread (`mode` = `draft`).
   */
  source_thread_message_id?: string;

  /**
   * Body param: The email subject for a customer reply on an email-bridged case
   * (`audience` = `customer`).
   */
  subject?: string;
}

export interface MessageListParams {
  /**
   * Catch-up bound.
   *
   * Only return messages with a sequence greater than this (reconnect sync).
   */
  after_sequence?: number;

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
    | 'sender'
    | 'author'
    | 'resource'
    | 'attachments'
    | 'attachments.resource'
    | 'conversation'
    | 'conversation.participants'
    | 'conversation.last_message'
    | 'reply_to'
    | 'reply_to.sender'
    | 'reply_to.author'
    | 'reply_to.attachments'
    | 'agent_run'
  >;

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
   * Filter by lifecycle state.
   *
   * Defaults to `sent` (the conversation timeline); pass `draft` to list the case's
   * open customer-reply drafts, or `scheduled` to list your not-yet-sent scheduled
   * messages in this conversation.
   */
  status?: 'draft' | 'scheduled' | 'sent' | 'canceled' | 'rejected' | 'failed' | 'superseded';
}

export declare namespace Messages {
  export {
    type ListMessage as ListMessage,
    type MessageAttachmentInput as MessageAttachmentInput,
    type SendMessageRequest as SendMessageRequest,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
