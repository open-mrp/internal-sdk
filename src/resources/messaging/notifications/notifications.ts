// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotificationsAPI from './notifications';
import * as AnalyticsAPI from '../../core/analytics';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, read, and manage in-app notifications.
 */
export class Notifications extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Sends an in-app notification to a specific user. The notification is fanned out
   * asynchronously and delivered in real time to connected clients.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const notificationSendResult =
   *   await client.messaging.notifications.create({
   *     category: 'order.updated',
   *     target: {
   *       type: 'account_user',
   *       id: 'acus_01ea9983ddb41dacc44ecf997c',
   *     },
   *     title: 'Order updated',
   *   });
   * ```
   */
  create(body: NotificationCreateParams, options?: RequestOptions): APIPromise<NotificationSendResult> {
    return this._client.post('/v1/messaging/notifications', { body, ...options });
  }

  /**
   * Returns one of the caller's notifications by ID.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.retrieve(
   *     'nf_01h9z8q1w2e3r4t5y6u7i8o9',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Notification> {
    return this._client.get(path`/v1/messaging/notifications/${id}`, options);
  }

  /**
   * Returns the current user's notifications, most recent first.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listNotification =
   *   await client.messaging.notifications.list();
   * ```
   */
  list(
    query: NotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListNotification> {
    return this._client.get('/v1/messaging/notifications', { query, ...options });
  }

  /**
   * Returns the current user's unread notification counts.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const notificationUnreadCount =
   *   await client.messaging.notifications.retrieveUnreadCount();
   * ```
   */
  retrieveUnreadCount(options?: RequestOptions): APIPromise<NotificationUnreadCount> {
    return this._client.get('/v1/messaging/notifications/unread-count', options);
  }

  /**
   * Returns the caller's unread totals across every account they belong to.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const notificationUnreadSummary =
   *   await client.messaging.notifications.retrieveUnreadSummary();
   * ```
   */
  retrieveUnreadSummary(options?: RequestOptions): APIPromise<NotificationUnreadSummary> {
    return this._client.get('/v1/messaging/notifications/unread-summary', options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListNotification {
  /**
   * Resources in this page.
   */
  data: Array<Notification>;

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
 * An in-app notification in the user's bell feed.
 */
export interface Notification {
  /**
   * Notification ID.
   */
  id: string;

  /**
   * Preview/body text.
   *
   * `null` for purely templated notifications.
   */
  body: string | null;

  /**
   * Category of the notification.
   */
  category:
    | 'chat.message'
    | 'chat.mention'
    | 'chat.added'
    | 'order.updated'
    | 'agent.run_completed'
    | 'system.broadcast';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * When the notification was dismissed.
   *
   * `null` if not dismissed.
   */
  dismissed_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'notification';

  /**
   * Delivery priority.
   */
  priority: 'low' | 'normal' | 'high' | 'urgent';

  /**
   * When the notification was explicitly opened.
   *
   * `null` if not yet read.
   */
  read_at: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: AnalyticsAPI.Entity | null;

  /**
   * When the notification first appeared in the dropdown.
   *
   * `null` if not yet seen.
   */
  seen_at: string | null;

  /**
   * Sender is the polymorphic actor that generated a notification or message: a
   * user, a shared group identity, an AI agent, or an API key. A system-generated
   * (or otherwise unattributed) notification has no sender — the parent resource's
   * `sender` field is `null` in that case, rather than a sender carrying a `system`
   * type.
   */
  sender: Sender | null;

  /**
   * Lifecycle status.
   */
  status: 'unseen' | 'seen' | 'read' | 'dismissed';

  /**
   * i18n template key for client-side localization.
   *
   * `null` for free-text notifications.
   */
  template_key: string | null;

  /**
   * Parameters for the i18n template, as JSON. Encoded as a JSON value (object,
   * array, string, number, boolean, or null), not a JSON-encoded string.
   */
  template_params: unknown | null;

  /**
   * Human-readable title.
   */
  title: string;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * NotificationSendResult acknowledges a notification send/fan-out request.
 */
export interface NotificationSendResult {
  /**
   * Number of recipients the notification was enqueued for.
   */
  enqueued: number;

  /**
   * Resource type identifier.
   */
  object: 'notification_send_result';
}

/**
 * NotificationTargetInput selects what a notification send is aimed at — a
 * polymorphic target (like an actor reference) carrying a type and the id it
 * refers to. Modeling the target as a typed reference rather than a single id (or
 * a broadcast flag) lets new target kinds be added without a breaking change.
 *
 * Supported types:
 *
 * - `account_user`: `id` is an account_user id; delivers a per-user notification.
 * - `account`: `id` is an account id; broadcasts an announcement to every user in
 *   the account.
 */
export interface NotificationTargetInput {
  /**
   * The id of the target (an account_user id or an account id, matching `type`).
   */
  id: string;

  /**
   * The kind of target.
   */
  type: 'account_user' | 'account';
}

/**
 * NotificationUnreadCount summarizes a user's unread tallies across surfaces.
 */
export interface NotificationUnreadCount {
  /**
   * Number of conversations with unread messages (0 until chat ships).
   */
  conversations: number;

  /**
   * Number of unseen bell notifications.
   */
  notifications: number;

  /**
   * Resource type identifier.
   */
  object: 'notification_unread_count';

  /**
   * Combined unread total.
   */
  total: number;
}

/**
 * NotificationUnreadSummary is the caller's unread totals across every account
 * they belong to.
 */
export interface NotificationUnreadSummary {
  /**
   * List represents a paginated list of resources.
   */
  accounts: NotificationUnreadSummary.Accounts | null;

  /**
   * Resource type identifier.
   */
  object: 'notification_unread_summary';

  /**
   * Combined unread total across all of the caller's accounts.
   */
  total: number;
}

export namespace NotificationUnreadSummary {
  /**
   * List represents a paginated list of resources.
   */
  export interface Accounts {
    /**
     * Resources in this page.
     */
    data: Array<NotificationsAPI.NotificationUnreadSummaryAccount>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: APIKeysAPI.PageInfo;
  }
}

/**
 * NotificationUnreadSummaryAccount is one account's unread tally in the
 * cross-account summary.
 */
export interface NotificationUnreadSummaryAccount {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  account: AnalyticsAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'notification_unread_summary_account';

  /**
   * Number of unread items (notifications + announcements) in this account.
   */
  unread: number;
}

/**
 * Request to send an in-app notification. The target determines whether it is
 * delivered to a single user or broadcast to a whole account. Internal/admin only.
 */
export interface SendNotificationRequest {
  /**
   * Category of the notification.
   */
  category:
    | 'chat.message'
    | 'chat.mention'
    | 'chat.added'
    | 'order.updated'
    | 'agent.run_completed'
    | 'system.broadcast';

  /**
   * NotificationTargetInput selects what a notification send is aimed at — a
   * polymorphic target (like an actor reference) carrying a type and the id it
   * refers to. Modeling the target as a typed reference rather than a single id (or
   * a broadcast flag) lets new target kinds be added without a breaking change.
   *
   * Supported types:
   *
   * - `account_user`: `id` is an account_user id; delivers a per-user notification.
   * - `account`: `id` is an account id; broadcasts an announcement to every user in
   *   the account.
   */
  target: NotificationTargetInput;

  /**
   * Human-readable title.
   */
  title: string;

  /**
   * Optional preview/body text.
   */
  body?: string;

  /**
   * Optional typed link target ID.
   */
  link_resource_id?: string;

  /**
   * Optional typed link target type.
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
    | 'agent_alert'
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'sender'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'sender_identity'
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
    | 'hubspot_company_candidate';

  /**
   * Optional delivery priority.
   *
   * Defaults to `normal`.
   */
  priority?: 'low' | 'normal' | 'high' | 'urgent';

  /**
   * Optional i18n template key for client-side localization.
   */
  template_key?: string;

  /**
   * Optional parameters for the i18n template, as JSON. Encoded as a JSON value
   * (object, array, string, number, boolean, or null), not a JSON-encoded string.
   */
  template_params?: unknown | null;
}

/**
 * Sender is the polymorphic actor that generated a notification or message: a
 * user, a shared group identity, an AI agent, or an API key. A system-generated
 * (or otherwise unattributed) notification has no sender — the parent resource's
 * `sender` field is `null` in that case, rather than a sender carrying a `system`
 * type.
 */
export interface Sender {
  /**
   * Unique identifier of the sender (e.g. an account_user id, agent config id).
   */
  id: string;

  /**
   * Human-readable display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'sender';

  /**
   * The kind of actor that sent it.
   */
  type: 'user' | 'group' | 'system' | 'agent' | 'apikey';
}

export interface NotificationCreateParams {
  /**
   * Category of the notification.
   */
  category:
    | 'chat.message'
    | 'chat.mention'
    | 'chat.added'
    | 'order.updated'
    | 'agent.run_completed'
    | 'system.broadcast';

  /**
   * NotificationTargetInput selects what a notification send is aimed at — a
   * polymorphic target (like an actor reference) carrying a type and the id it
   * refers to. Modeling the target as a typed reference rather than a single id (or
   * a broadcast flag) lets new target kinds be added without a breaking change.
   *
   * Supported types:
   *
   * - `account_user`: `id` is an account_user id; delivers a per-user notification.
   * - `account`: `id` is an account id; broadcasts an announcement to every user in
   *   the account.
   */
  target: NotificationTargetInput;

  /**
   * Human-readable title.
   */
  title: string;

  /**
   * Optional preview/body text.
   */
  body?: string;

  /**
   * Optional typed link target ID.
   */
  link_resource_id?: string;

  /**
   * Optional typed link target type.
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
    | 'agent_alert'
    | 'notification'
    | 'notification_unread_count'
    | 'notification_send_result'
    | 'notification_unread_summary'
    | 'sender'
    | 'announcement'
    | 'conversation'
    | 'conversation_participant'
    | 'chat_message'
    | 'notification_unread_summary_account'
    | 'messaging_block'
    | 'sender_identity'
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
    | 'hubspot_company_candidate';

  /**
   * Optional delivery priority.
   *
   * Defaults to `normal`.
   */
  priority?: 'low' | 'normal' | 'high' | 'urgent';

  /**
   * Optional i18n template key for client-side localization.
   */
  template_key?: string;

  /**
   * Optional parameters for the i18n template, as JSON. Encoded as a JSON value
   * (object, array, string, number, boolean, or null), not a JSON-encoded string.
   */
  template_params?: unknown | null;
}

export interface NotificationListParams {
  /**
   * Filter by category.
   */
  category?:
    | 'chat.message'
    | 'chat.mention'
    | 'chat.added'
    | 'order.updated'
    | 'agent.run_completed'
    | 'system.broadcast';

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

  /**
   * Filter by sender id(s).
   */
  sender_ids?: Array<string>;

  /**
   * Filter by sender type(s).
   */
  sender_types?: Array<'user' | 'group' | 'system' | 'agent' | 'apikey'>;

  /**
   * Filter by lifecycle status.
   *
   * When omitted, the feed returns the full active feed — every non-dismissed
   * notification (seen and unseen alike), newest first.
   */
  status?: 'unseen' | 'seen' | 'read' | 'dismissed';
}

Notifications.Actions = Actions;

export declare namespace Notifications {
  export {
    type ListNotification as ListNotification,
    type Notification as Notification,
    type NotificationSendResult as NotificationSendResult,
    type NotificationTargetInput as NotificationTargetInput,
    type NotificationUnreadCount as NotificationUnreadCount,
    type NotificationUnreadSummary as NotificationUnreadSummary,
    type NotificationUnreadSummaryAccount as NotificationUnreadSummaryAccount,
    type SendNotificationRequest as SendNotificationRequest,
    type Sender as Sender,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationListParams as NotificationListParams,
  };

  export { Actions as Actions };
}
