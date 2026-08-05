// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionCheckDuplicatesParams,
  ActionEmailRecordParams,
  ActionEmailRecordResponse,
  ActionRequestDemoParams,
  ActionSubmitFeedbackParams,
  Actions,
  CheckDuplicateRequest,
  CheckDuplicateResult,
  EmailRecordRequest,
  MessageResource,
  RequestDemoRequest,
  SubmitFeedbackRequest,
} from './actions';
import * as AnalyticsAPI from './analytics';
import {
  Analytics,
  AnalyticsItem,
  AnalyticsLot,
  AnalyticsRate,
  AnalyticsRetrieveWeeksOfSalesParams,
  AnalyticsUnitGroup,
  AnalyticsUnitGroupUnit,
  AnalyticsUpdateDeliveriesParams,
  AnalyticsUpdateDemandForecastParams,
  AnalyticsUpdateInventoryReceiptsParams,
  AnalyticsUpdateManufacturingBatchParams,
  AnalyticsUpdateManufacturingParams,
  AnalyticsUpdateMaterialsParams,
  AnalyticsUpdateNewCustomersParams,
  AnalyticsUpdateOeeParams,
  AnalyticsUpdateOeeTrendParams,
  AnalyticsUpdateOpenBatchesParams,
  AnalyticsUpdateOrdersParams,
  AnalyticsUpdateProductionCostsParams,
  AnalyticsUpdateQuarterlyOrdersParams,
  AnalyticsUpdateSalesParams,
  AnalyticsUpdateScheduleAttainmentParams,
  AnalyzeDeliveriesRequest,
  AnalyzeDeliveriesResponse,
  AnalyzeDemandForecastRequest,
  AnalyzeDemandForecastResponse,
  AnalyzeInventoryReceiptsRequest,
  AnalyzeInventoryReceiptsResponse,
  AnalyzeManufacturingBatchRequest,
  AnalyzeManufacturingBatchResponse,
  AnalyzeManufacturingRequest,
  AnalyzeManufacturingResponse,
  AnalyzeMaterialsRequest,
  AnalyzeMaterialsResponse,
  AnalyzeNewCustomersRequest,
  AnalyzeNewCustomersResponse,
  AnalyzeOeeRequest,
  AnalyzeOeeResponse,
  AnalyzeOeeTrendRequest,
  AnalyzeOeeTrendResponse,
  AnalyzeOpenBatchesRequest,
  AnalyzeOpenBatchesResponse,
  AnalyzeOrdersRequest,
  AnalyzeOrdersResponse,
  AnalyzeProductionCostsRequest,
  AnalyzeProductionCostsResponse,
  AnalyzeQuarterlyOrdersRequest,
  AnalyzeQuarterlyOrdersResponse,
  AnalyzeSalesRequest,
  AnalyzeSalesResponse,
  AnalyzeScheduleAttainmentRequest,
  AnalyzeScheduleAttainmentResponse,
  AnalyzeWeeksOfSalesResponse,
  AttainmentBucket,
  ChartData,
  Coordinate,
  CostBreakdown,
  DateTimeCoordinate,
  DeliveryChartData,
  DeliveryStatistics,
  DemandForecastForecastPoint,
  DemandForecastPoint,
  DemandForecastRow,
  FrozenAdherence,
  InventoryReceiptSummaryEntry,
  ListAttainmentBucket,
  ListDemandForecastRow,
  ListFrozenAdherence,
  ListOeeDepartment,
  ListOeeDowntimeReason,
  ListOeeTrendPeriod,
  ManufacturingMetrics,
  MaterialAnalyticsEntry,
  NewCustomersData,
  OeeDepartment,
  OeeDepartmentPlannedTime,
  OeeDowntimeReason,
  OeeTrendPeriod,
  OpenBatchSummary,
  OrderEntry,
  ProductionCostItem,
  RevenueForecastPoint,
  SalesEntry,
  WeeksOfSalesItem,
} from './analytics';
import * as AuditEventsAPI from './audit-events';
import {
  AuditEvent,
  AuditEventListParams,
  AuditEventRetrieveParams,
  AuditEvents,
  AuditFieldChange,
  ListAuditEvent,
  ListAuditFieldChange,
  ListObjectType,
} from './audit-events';
import * as EmailLogsAPI from './email-logs';
import { EmailLog, EmailLogListParams, EmailLogRetrieveParams, EmailLogs, ListEmailLog } from './email-logs';
import * as RequestLogsAPI from './request-logs';
import {
  Actor,
  ListRequestLog,
  RequestLog,
  RequestLogListParams,
  RequestLogRetrieveParams,
  RequestLogs,
} from './request-logs';
import * as SandboxesAPI from './sandboxes';
import {
  CreateSandboxRequest,
  ListSandbox,
  Sandbox,
  SandboxCreateParams,
  SandboxDeleteResponse,
  SandboxListParams,
  SandboxRetrieveParams,
  Sandboxes,
} from './sandboxes';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AddressesAPI from './addresses/addresses';
import {
  AddressComponents,
  AddressDetailsResult,
  AddressRetrieveDetailsParams,
  AddressRetrieveSuggestionsParams,
  AddressSuggestion,
  Addresses,
  ListAddressSuggestion,
} from './addresses/addresses';
import * as RecordsAPI from './records/records';
import { Records } from './records/records';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Unified free-text search across resource types, returning lightweight entity references.
 */
export class Core extends APIResource {
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
  requestLogs: RequestLogsAPI.RequestLogs = new RequestLogsAPI.RequestLogs(this._client);
  auditEvents: AuditEventsAPI.AuditEvents = new AuditEventsAPI.AuditEvents(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  emailLogs: EmailLogsAPI.EmailLogs = new EmailLogsAPI.EmailLogs(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);

  /**
   * Searches across multiple resource types at once and returns lightweight `entity`
   * references to the matches.
   *
   * Each result carries the matched record's ID, its resource type, and a display
   * name and secondary handle, so it can be shown in a picker or turned into a link;
   * fetch the record itself through its own endpoint for full detail.
   *
   * `q` is required unless the search is narrowed with `types`; scoping to one or
   * more types lets you omit `q` to browse that type's most recent records. Matches
   * are drawn from every searchable type you can read, then interleaved so no single
   * type crowds out the others, and the combined result set is capped at `limit`.
   * Results are not paginated — `limit` is the total you get. If one resource type
   * fails to respond, it contributes no results instead of failing the whole search.
   *
   * This endpoint requires the permissions: `sales_orders:read`,
   * `purchase_orders:read`, `invoices:read`, `customers:read`, `items:read`,
   * `shipments:read`, `messaging:read`, `agents:read`.
   *
   * @example
   * ```ts
   * const listEntity = await client.core.retrieveSearch();
   * ```
   */
  retrieveSearch(
    query: CoreRetrieveSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListEntity> {
    return this._client.get('/v1/core/search', { query, ...options });
  }
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
   * The resource kind that this entity references, as an object-type value (e.g.
   * `user`, `account`).
   *
   * Unlike `object` — which is always `entity` — this names the underlying resource
   * the `id` points to.
   */
  type:
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_stage_total'
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
    | 'support_case'
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
    | 'account_favicon_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_lot_default'
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
    | 'machine_status'
    | 'machine_downtime_event'
    | 'demand_override'
    | 'demand_override_type'
    | 'machine_downtime_reason'
    | 'production_schedule_preview'
    | 'production_schedule_regenerate_preview'
    | 'production_schedule'
    | 'production_schedule_line'
    | 'production_schedule_deviation'
    | 'production_schedule_derived_line'
    | 'production_schedule_settings'
    | 'production_schedule_resource_setting'
    | 'schedule_deviation_type'
    | 'production_schedule_finished_policy'
    | 'production_schedule_week_release'
    | 'production_schedule_week_release_preview'
    | 'production_schedule_item_policy'
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
    | 'portal_domain'
    | 'dns_record'
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
    | 'order_notification_recipient'
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
    | 'analyze_demand_forecast_response'
    | 'analyze_oee_response'
    | 'analyze_oee_trend_response'
    | 'analyze_schedule_attainment_response'
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
    | 'checkout_sales_order'
    | 'sales_order_price_quote'
    | 'sales_order_freight_quote'
    | 'sales_order_price_quote_line'
    | 'sales_order_quote_rate'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'hubspot_sync_record'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member'
    | 'portal_profile'
    | 'portal_registration_session'
    | 'portal_registration_session_data'
    | 'pack_list'
    | 'pack_list_party'
    | 'pack_list_line_item'
    | 'pack_list_back_order'
    | 'pack_list_case';
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListEntity {
  /**
   * Resources in this page.
   */
  data: Array<Entity>;

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

export interface CoreRetrieveSearchParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Restrict the search to a single customer by their account ID.
   *
   * When set, only resource types that are safe to expose to a customer are searched
   * (their sales orders, invoices, and shipments), and results are limited to
   * records belonging to that customer. This is intended for composing
   * customer-facing replies, so a reference can never point at a record the customer
   * is not entitled to see.
   */
  customer?: string;

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
   * Filter the search to specific resource types.
   *
   * Only a subset of resource types is searchable: `sales_order`, `purchase_order`,
   * `invoice`, `customer`, `item`, `product`, `shipment`, `messaging_contact`, and
   * `agent_definition`. Any other value is rejected. Types you lack read permission
   * for are silently dropped rather than rejected, so narrowing to a type you cannot
   * read simply returns no results. Omit to search every searchable type you can
   * read.
   */
  types?: Array<
    | 'account'
    | 'actor'
    | 'entity'
    | 'record'
    | 'freight'
    | 'sales_order_totals'
    | 'sales_order_stage_total'
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
    | 'support_case'
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
    | 'account_favicon_url'
    | 'public_account'
    | 'property'
    | 'carrier'
    | 'service_level'
    | 'item'
    | 'item_lot_default'
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
    | 'machine_status'
    | 'machine_downtime_event'
    | 'demand_override'
    | 'demand_override_type'
    | 'machine_downtime_reason'
    | 'production_schedule_preview'
    | 'production_schedule_regenerate_preview'
    | 'production_schedule'
    | 'production_schedule_line'
    | 'production_schedule_deviation'
    | 'production_schedule_derived_line'
    | 'production_schedule_settings'
    | 'production_schedule_resource_setting'
    | 'schedule_deviation_type'
    | 'production_schedule_finished_policy'
    | 'production_schedule_week_release'
    | 'production_schedule_week_release_preview'
    | 'production_schedule_item_policy'
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
    | 'portal_domain'
    | 'dns_record'
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
    | 'order_notification_recipient'
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
    | 'analyze_demand_forecast_response'
    | 'analyze_oee_response'
    | 'analyze_oee_trend_response'
    | 'analyze_schedule_attainment_response'
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
    | 'checkout_sales_order'
    | 'sales_order_price_quote'
    | 'sales_order_freight_quote'
    | 'sales_order_price_quote_line'
    | 'sales_order_quote_rate'
    | 'hubspot_sync_job'
    | 'hubspot_sync_report'
    | 'hubspot_company_review'
    | 'hubspot_company_candidate'
    | 'hubspot_sync_record'
    | 'contact_match'
    | 'reply_draft'
    | 'conversation_link'
    | 'messaging_group'
    | 'messaging_group_member'
    | 'portal_profile'
    | 'portal_registration_session'
    | 'portal_registration_session_data'
    | 'pack_list'
    | 'pack_list_party'
    | 'pack_list_line_item'
    | 'pack_list_back_order'
    | 'pack_list_case'
  >;
}

Core.Sandboxes = Sandboxes;
Core.RequestLogs = RequestLogs;
Core.AuditEvents = AuditEvents;
Core.Addresses = Addresses;
Core.EmailLogs = EmailLogs;
Core.Analytics = Analytics;
Core.Actions = Actions;
Core.Records = Records;

export declare namespace Core {
  export {
    type Entity as Entity,
    type ListEntity as ListEntity,
    type CoreRetrieveSearchParams as CoreRetrieveSearchParams,
  };

  export {
    Sandboxes as Sandboxes,
    type CreateSandboxRequest as CreateSandboxRequest,
    type ListSandbox as ListSandbox,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };

  export {
    RequestLogs as RequestLogs,
    type Actor as Actor,
    type ListRequestLog as ListRequestLog,
    type RequestLog as RequestLog,
    type RequestLogRetrieveParams as RequestLogRetrieveParams,
    type RequestLogListParams as RequestLogListParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEvent as AuditEvent,
    type AuditFieldChange as AuditFieldChange,
    type ListAuditEvent as ListAuditEvent,
    type ListAuditFieldChange as ListAuditFieldChange,
    type ListObjectType as ListObjectType,
    type AuditEventRetrieveParams as AuditEventRetrieveParams,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    Addresses as Addresses,
    type AddressComponents as AddressComponents,
    type AddressDetailsResult as AddressDetailsResult,
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
    type AddressRetrieveDetailsParams as AddressRetrieveDetailsParams,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    EmailLogs as EmailLogs,
    type EmailLog as EmailLog,
    type ListEmailLog as ListEmailLog,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
    type EmailLogListParams as EmailLogListParams,
  };

  export {
    Analytics as Analytics,
    type AnalyticsItem as AnalyticsItem,
    type AnalyticsLot as AnalyticsLot,
    type AnalyticsRate as AnalyticsRate,
    type AnalyticsUnitGroup as AnalyticsUnitGroup,
    type AnalyticsUnitGroupUnit as AnalyticsUnitGroupUnit,
    type AnalyzeDeliveriesRequest as AnalyzeDeliveriesRequest,
    type AnalyzeDeliveriesResponse as AnalyzeDeliveriesResponse,
    type AnalyzeDemandForecastRequest as AnalyzeDemandForecastRequest,
    type AnalyzeDemandForecastResponse as AnalyzeDemandForecastResponse,
    type AnalyzeInventoryReceiptsRequest as AnalyzeInventoryReceiptsRequest,
    type AnalyzeInventoryReceiptsResponse as AnalyzeInventoryReceiptsResponse,
    type AnalyzeManufacturingBatchRequest as AnalyzeManufacturingBatchRequest,
    type AnalyzeManufacturingBatchResponse as AnalyzeManufacturingBatchResponse,
    type AnalyzeManufacturingRequest as AnalyzeManufacturingRequest,
    type AnalyzeManufacturingResponse as AnalyzeManufacturingResponse,
    type AnalyzeMaterialsRequest as AnalyzeMaterialsRequest,
    type AnalyzeMaterialsResponse as AnalyzeMaterialsResponse,
    type AnalyzeNewCustomersRequest as AnalyzeNewCustomersRequest,
    type AnalyzeNewCustomersResponse as AnalyzeNewCustomersResponse,
    type AnalyzeOeeRequest as AnalyzeOeeRequest,
    type AnalyzeOeeResponse as AnalyzeOeeResponse,
    type AnalyzeOeeTrendRequest as AnalyzeOeeTrendRequest,
    type AnalyzeOeeTrendResponse as AnalyzeOeeTrendResponse,
    type AnalyzeOpenBatchesRequest as AnalyzeOpenBatchesRequest,
    type AnalyzeOpenBatchesResponse as AnalyzeOpenBatchesResponse,
    type AnalyzeOrdersRequest as AnalyzeOrdersRequest,
    type AnalyzeOrdersResponse as AnalyzeOrdersResponse,
    type AnalyzeProductionCostsRequest as AnalyzeProductionCostsRequest,
    type AnalyzeProductionCostsResponse as AnalyzeProductionCostsResponse,
    type AnalyzeQuarterlyOrdersRequest as AnalyzeQuarterlyOrdersRequest,
    type AnalyzeQuarterlyOrdersResponse as AnalyzeQuarterlyOrdersResponse,
    type AnalyzeSalesRequest as AnalyzeSalesRequest,
    type AnalyzeSalesResponse as AnalyzeSalesResponse,
    type AnalyzeScheduleAttainmentRequest as AnalyzeScheduleAttainmentRequest,
    type AnalyzeScheduleAttainmentResponse as AnalyzeScheduleAttainmentResponse,
    type AnalyzeWeeksOfSalesResponse as AnalyzeWeeksOfSalesResponse,
    type AttainmentBucket as AttainmentBucket,
    type ChartData as ChartData,
    type Coordinate as Coordinate,
    type CostBreakdown as CostBreakdown,
    type DateTimeCoordinate as DateTimeCoordinate,
    type DeliveryChartData as DeliveryChartData,
    type DeliveryStatistics as DeliveryStatistics,
    type DemandForecastForecastPoint as DemandForecastForecastPoint,
    type DemandForecastPoint as DemandForecastPoint,
    type DemandForecastRow as DemandForecastRow,
    type FrozenAdherence as FrozenAdherence,
    type InventoryReceiptSummaryEntry as InventoryReceiptSummaryEntry,
    type ListAttainmentBucket as ListAttainmentBucket,
    type ListDemandForecastRow as ListDemandForecastRow,
    type ListFrozenAdherence as ListFrozenAdherence,
    type ListOeeDepartment as ListOeeDepartment,
    type ListOeeDowntimeReason as ListOeeDowntimeReason,
    type ListOeeTrendPeriod as ListOeeTrendPeriod,
    type ManufacturingMetrics as ManufacturingMetrics,
    type MaterialAnalyticsEntry as MaterialAnalyticsEntry,
    type NewCustomersData as NewCustomersData,
    type OeeDepartment as OeeDepartment,
    type OeeDepartmentPlannedTime as OeeDepartmentPlannedTime,
    type OeeDowntimeReason as OeeDowntimeReason,
    type OeeTrendPeriod as OeeTrendPeriod,
    type OpenBatchSummary as OpenBatchSummary,
    type OrderEntry as OrderEntry,
    type ProductionCostItem as ProductionCostItem,
    type RevenueForecastPoint as RevenueForecastPoint,
    type SalesEntry as SalesEntry,
    type WeeksOfSalesItem as WeeksOfSalesItem,
    type AnalyticsRetrieveWeeksOfSalesParams as AnalyticsRetrieveWeeksOfSalesParams,
    type AnalyticsUpdateDeliveriesParams as AnalyticsUpdateDeliveriesParams,
    type AnalyticsUpdateDemandForecastParams as AnalyticsUpdateDemandForecastParams,
    type AnalyticsUpdateInventoryReceiptsParams as AnalyticsUpdateInventoryReceiptsParams,
    type AnalyticsUpdateManufacturingParams as AnalyticsUpdateManufacturingParams,
    type AnalyticsUpdateManufacturingBatchParams as AnalyticsUpdateManufacturingBatchParams,
    type AnalyticsUpdateMaterialsParams as AnalyticsUpdateMaterialsParams,
    type AnalyticsUpdateNewCustomersParams as AnalyticsUpdateNewCustomersParams,
    type AnalyticsUpdateOeeParams as AnalyticsUpdateOeeParams,
    type AnalyticsUpdateOeeTrendParams as AnalyticsUpdateOeeTrendParams,
    type AnalyticsUpdateOpenBatchesParams as AnalyticsUpdateOpenBatchesParams,
    type AnalyticsUpdateOrdersParams as AnalyticsUpdateOrdersParams,
    type AnalyticsUpdateProductionCostsParams as AnalyticsUpdateProductionCostsParams,
    type AnalyticsUpdateQuarterlyOrdersParams as AnalyticsUpdateQuarterlyOrdersParams,
    type AnalyticsUpdateSalesParams as AnalyticsUpdateSalesParams,
    type AnalyticsUpdateScheduleAttainmentParams as AnalyticsUpdateScheduleAttainmentParams,
  };

  export {
    Actions as Actions,
    type CheckDuplicateRequest as CheckDuplicateRequest,
    type CheckDuplicateResult as CheckDuplicateResult,
    type EmailRecordRequest as EmailRecordRequest,
    type MessageResource as MessageResource,
    type RequestDemoRequest as RequestDemoRequest,
    type SubmitFeedbackRequest as SubmitFeedbackRequest,
    type ActionEmailRecordResponse as ActionEmailRecordResponse,
    type ActionCheckDuplicatesParams as ActionCheckDuplicatesParams,
    type ActionEmailRecordParams as ActionEmailRecordParams,
    type ActionRequestDemoParams as ActionRequestDemoParams,
    type ActionSubmitFeedbackParams as ActionSubmitFeedbackParams,
  };

  export { Records as Records };
}
