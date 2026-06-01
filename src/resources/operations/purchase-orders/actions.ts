// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../edi-runs';
import * as LinesAPI from './lines';
import * as ShipmentsActionsAPI from '../shipments/actions';
import * as ShipmentsLinesAPI from '../shipments/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete purchase orders.
 */
export class Actions extends APIResource {
  /**
   * Deletes multiple purchase orders.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.purchaseOrders.actions.bulkDelete(
   *     {
   *       purchase_order_ids: ['po_0169aa3a722b081b117ac0e44f'],
   *     },
   *   );
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/operations/purchase-orders/actions/bulk-delete', { body, ...options });
  }

  /**
   * Changes the status of a purchase order. Supported actions: issue (draft to
   * issued), unissue (issued to draft), close (issued to closed), open (closed to
   * issued).
   *
   * @example
   * ```ts
   * const purchaseOrderDetail =
   *   await client.operations.purchaseOrders.actions.changeStatus(
   *     'po_0169aa3a722b081b117ac0e44f',
   *     { send_email: true, status_change: 'issue' },
   *   );
   * ```
   */
  changeStatus(
    id: string,
    params: ActionChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderDetail> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/operations/purchase-orders/${id}/actions/change-status`, {
      query: { include },
      body,
      ...options,
    });
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
  branding: ShipmentsLinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: ShipmentsLinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: ShipmentsLinesAPI.Address | null;

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
  portal: ShipmentsLinesAPI.AccountPortal | null;

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
 * Account group resource.
 */
export interface AccountGroup {
  /**
   * Account group ID.
   */
  id: string;

  /**
   * Commission policy.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Description.
   */
  description: string | null;

  /**
   * Freight policy.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group';

  /**
   * Account group type.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
 * Account user with profile, role, and department.
 */
export interface AccountUser {
  /**
   * Account user ID.
   */
  id: string;

  /**
   * When the account user was created.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ShipmentsActionsAPI.Department | null;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * When the user last used this account.
   */
  last_used_at: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * Role resource.
   */
  role: ShipmentsActionsAPI.Role | null;

  /**
   * Account user status.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
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
  geolocation: ShipmentsLinesAPI.Geolocation | null;

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
 * Value option within a property.
 */
export interface Attribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Color code.
   */
  color: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attribute';

  /**
   * Property that groups attributes.
   */
  property: ShipmentsLinesAPI.Property | null;

  /**
   * Display order.
   */
  sort_order: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Attribute value.
   */
  value: string;
}

/**
 * Request to delete multiple purchase orders.
 */
export interface BulkDeletePurchaseOrdersRequest {
  /**
   * Purchase order IDs.
   */
  purchase_order_ids: Array<string>;
}

/**
 * Carrier resource.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Account number.
   */
  account_number: string | null;

  /**
   * Carrier code.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'carrier';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  service_levels: ShipmentsActionsAPI.ListServiceLevel | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to change the status of a purchase order.
 */
export interface ChangePurchaseOrderStatusRequest {
  /**
   * Whether to send a notification email.
   */
  send_email: boolean;

  /**
   * Status change action (e.g., "issue", "unissue", "close", "open").
   */
  status_change: string;
}

/**
 * Material consumed by a production step.
 */
export interface Consumption {
  /**
   * Consumption ID.
   */
  id: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  consumed_item: ShipmentsLinesAPI.Item | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Instructions for how this material is consumed.
   */
  instructions: string | null;

  /**
   * Resource type identifier.
   */
  object: 'consumption';

  /**
   * Value with an associated unit.
   */
  quantity: ShipmentsLinesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Value with an associated unit.
   */
  waste_quantity: ShipmentsLinesAPI.Quantity | null;
}

/**
 * Customer account.
 */
export interface Customer {
  /**
   * Customer ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  bill_to_address: ShipmentsLinesAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  child_accounts: ShipmentsActionsAPI.ListCustomer | null;

  /**
   * Commission policy.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Customer contact information.
   */
  contact_info: ShipmentsActionsAPI.CustomerContactInfo | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  credit_limit: ShipmentsLinesAPI.Quantity | null;

  /**
   * Customer default configuration.
   */
  defaults: ShipmentsActionsAPI.CustomerDefaults | null;

  /**
   * EDI status.
   */
  edi_status: 'enabled' | 'disabled';

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: ShipmentsActionsAPI.CustomerFreightPreferences | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Customer notification settings.
   */
  notification_preferences: ShipmentsActionsAPI.CustomerNotificationPreferences | null;

  /**
   * Customer number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';

  /**
   * Customer account.
   */
  parent_account: ShipmentsActionsAPI.Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  price_groups: ShipmentsActionsAPI.ListAccountGroup | null;

  /**
   * Customer relationship type.
   */
  relationship_type: 'standalone' | 'parent' | 'child';

  /**
   * Address with associated geolocation.
   */
  ship_to_address: ShipmentsLinesAPI.Address | null;

  /**
   * Account status code.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Account group resource.
   */
  type: ShipmentsActionsAPI.AccountGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Customer contact information.
 */
export interface CustomerContactInfo {
  /**
   * Email address.
   */
  email: string | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_contact_info';

  /**
   * Phone number.
   */
  phone: string | null;

  /**
   * Website URL.
   */
  url: string | null;
}

/**
 * Customer default configuration.
 */
export interface CustomerDefaults {
  /**
   * Resource type identifier.
   */
  object: 'customer_defaults';

  /**
   * Payment term resource.
   */
  payment_term: ShipmentsActionsAPI.PaymentTerm | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: ShipmentsActionsAPI.Priority | null;

  /**
   * Account user with profile, role, and department.
   */
  sales_rep: ShipmentsActionsAPI.AccountUser | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: ShipmentsActionsAPI.ShippingTerm | null;
}

/**
 * Customer freight and carrier settings.
 */
export interface CustomerFreightPreferences {
  /**
   * Carrier billing account number.
   */
  billing_account: string | null;

  /**
   * Carrier billing type.
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * Carrier resource.
   */
  carrier: ShipmentsActionsAPI.Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_freight_preferences';

  /**
   * Shipping service level for a carrier.
   */
  service_level: ShipmentsActionsAPI.ServiceLevel | null;

  /**
   * Freight policy.
   */
  status: 'free_freight' | 'billed_freight';
}

/**
 * Customer notification settings.
 */
export interface CustomerNotificationPreferences {
  /**
   * Whether invoice emails are accepted.
   */
  accepts_invoice_emails: boolean;

  /**
   * Resource type identifier.
   */
  object: 'customer_notification_preferences';
}

/**
 * Department resource.
 */
export interface Department {
  /**
   * Department ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Location resource.
   */
  location: ShipmentsActionsAPI.Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: ShipmentsActionsAPI.ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes about the department.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'department';

  /**
   * List represents a paginated list of resources.
   */
  scanning_stations: ShipmentsActionsAPI.ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Email contact sub-resource.
 */
export interface EmailContact {
  /**
   * Email contact ID.
   */
  id: string;

  /**
   * Account user with profile, role, and department.
   */
  account_user: ShipmentsActionsAPI.AccountUser | null;

  /**
   * Resource type identifier.
   */
  object: 'email_contact';
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
 * Item is an inventory item (product, material, or part).
 */
export interface Item {
  /**
   * Item ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: ShipmentsLinesAPI.ListAttribute | null;

  /**
   * Rate resource.
   */
  burn_rate: ShipmentsLinesAPI.Rate | null;

  /**
   * ItemCategory resource.
   */
  category: ShipmentsLinesAPI.ItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item description.
   */
  description: string | null;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Stock keeping unit code.
   */
  sku: string;

  /**
   * Item type code.
   */
  type: 'product' | 'material' | 'part';

  /**
   * Rate resource.
   */
  unit_cost: ShipmentsLinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_value: ShipmentsLinesAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ItemCategory resource.
 */
export interface ItemCategory {
  /**
   * Item category ID.
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
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item_category';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  properties: ShipmentsLinesAPI.ListProperty | null;

  /**
   * Item category type.
   */
  type: 'material_category' | 'product_category';

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: ShipmentsLinesAPI.UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountGroup {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.AccountGroup>;

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
export interface ListAttribute {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsLinesAPI.Attribute>;

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
export interface ListConsumption {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Consumption>;

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
export interface ListCustomer {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Customer>;

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
export interface ListEmailContact {
  /**
   * Resources in this page.
   */
  data: Array<EmailContact>;

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
export interface ListLocation {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Location>;

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
export interface ListMachine {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.Machine>;

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
export interface ListProductionStep {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.ProductionStep>;

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
export interface ListProperty {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsLinesAPI.Property>;

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
export interface ListPurchaseOrderLineDetail {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.PurchaseOrderLineDetail>;

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
export interface ListReceivingOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<ReceivingOrderLine>;

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
export interface ListSalesOrderLineDetail {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsLinesAPI.SalesOrderLineDetail>;

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
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.ScanningStation>;

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
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.ServiceLevel>;

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
export interface ListUnitGroupUnit {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsLinesAPI.UnitGroupUnit>;

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
 * Location resource.
 */
export interface Location {
  /**
   * Location ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  children: ShipmentsActionsAPI.ListLocation | null;

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
  object: 'location';

  /**
   * Location resource.
   */
  parent: ShipmentsActionsAPI.Location | null;

  /**
   * Location type code.
   */
  type: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Machine within an account.
 */
export interface Machine {
  /**
   * Machine ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ShipmentsActionsAPI.Department | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine';

  /**
   * Serial number.
   */
  serial_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Order discount resource.
 */
export interface OrderDiscount {
  /**
   * Order discount ID.
   */
  id: string;

  /**
   * Fixed amount as a decimal string.
   */
  amount: string;

  /**
   * Discount code.
   */
  code: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Discount type: "percentage" or "amount".
   */
  discount_type: 'percentage' | 'amount';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'order_discount';

  /**
   * Number of orders using this discount.
   */
  order_count: number;

  /**
   * Percentage value as a decimal string.
   */
  percentage: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: ShipmentsLinesAPI.Account | null;

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
 * Payment term resource.
 */
export interface PaymentTerm {
  /**
   * Payment term ID.
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
  object: 'payment_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * Payment term status.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Minimal pick sub-resource.
 */
export interface Pick {
  /**
   * Pick ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'pick';
}

/**
 * Priority level used by sales orders and picks.
 */
export interface Priority {
  /**
   * Priority ID.
   */
  id: string;

  /**
   * Machine-readable code.
   */
  code: 'low' | 'normal' | 'high';

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
  object: 'priority';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Production output of a production step.
 */
export interface ProductionOutput {
  /**
   * Production ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'production';

  /**
   * Item is an inventory item (product, material, or part).
   */
  produced_item: ShipmentsLinesAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  quantity: ShipmentsLinesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Production run sub-resource.
 */
export interface ProductionRun {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Production run number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';
}

/**
 * Production step with all nested data.
 */
export interface ProductionStep {
  /**
   * Production step ID.
   */
  id: string;

  /**
   * Allowances as a decimal string.
   */
  allowances: string;

  /**
   * List represents a paginated list of resources.
   */
  consumptions: ShipmentsActionsAPI.ListConsumption | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ShipmentsActionsAPI.Department | null;

  /**
   * List represents a paginated list of resources.
   */
  in_steps: ShipmentsActionsAPI.ListProductionStep | null;

  /**
   * Rate resource.
   */
  labor_rate: ShipmentsLinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  labor_time: ShipmentsLinesAPI.Rate | null;

  /**
   * Leveling factor as a decimal string.
   */
  leveling_factor: string;

  /**
   * List represents a paginated list of resources.
   */
  machines: ShipmentsActionsAPI.ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'production_step';

  /**
   * List represents a paginated list of resources.
   */
  out_steps: ShipmentsActionsAPI.ListProductionStep | null;

  /**
   * Rate resource.
   */
  overhead_rate: ShipmentsLinesAPI.Rate | null;

  /**
   * Production output of a production step.
   */
  production: ShipmentsActionsAPI.ProductionOutput | null;

  /**
   * Scanning station resource.
   */
  scanning_station: ShipmentsActionsAPI.ScanningStation | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Property that groups attributes.
 */
export interface Property {
  /**
   * Property ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: ShipmentsLinesAPI.ListAttribute | null;

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
  object: 'property';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Full purchase order resource.
 */
export interface PurchaseOrderDetail {
  /**
   * Purchase order ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  bill_to_address: ShipmentsLinesAPI.Address | null;

  /**
   * Carrier resource.
   */
  carrier: ShipmentsActionsAPI.Carrier | null;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account: string | null;

  /**
   * Carrier billing type.
   */
  carrier_billing_type: string | null;

  /**
   * Completed timestamp.
   */
  completed_at: string | null;

  /**
   * List represents a paginated list of resources.
   */
  contacts: ListEmailContact | null;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * Whether the acknowledgment has been sent.
   */
  is_acknowledgment_sent: boolean;

  /**
   * Issued timestamp.
   */
  issued_at: string | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListPurchaseOrderLineDetail | null;

  /**
   * Order note.
   */
  note: string | null;

  /**
   * Purchase order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order';

  /**
   * Payment term resource.
   */
  payment_term: ShipmentsActionsAPI.PaymentTerm | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: ShipmentsActionsAPI.Priority | null;

  /**
   * Receiving order with lines.
   */
  receiving_order: ReceivingOrder | null;

  /**
   * Scheduled/promised timestamp.
   */
  scheduled_at: string | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: ShipmentsActionsAPI.ServiceLevel | null;

  /**
   * Address with associated geolocation.
   */
  ship_to_address: ShipmentsLinesAPI.Address | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: ShipmentsActionsAPI.ShippingTerm | null;

  /**
   * Sales order status sub-resource.
   */
  status: ShipmentsActionsAPI.SalesOrderStatusDetail | null;

  /**
   * Supplier sub-resource.
   */
  supplier: Supplier | null;

  /**
   * Sales order type sub-resource.
   */
  type: ShipmentsActionsAPI.SalesOrderType | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * Full purchase order line resource.
 */
export interface PurchaseOrderLineDetail {
  /**
   * Purchase order line ID.
   */
  id: string;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: ShipmentsLinesAPI.Item | null;

  /**
   * Line item number.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order_line';

  /**
   * Product description.
   */
  product_description: string | null;

  /**
   * Product SKU.
   */
  product_sku: string;

  /**
   * Value with an associated unit.
   */
  quantity_ordered: ShipmentsLinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_received: ShipmentsLinesAPI.Quantity | null;

  /**
   * Rate resource.
   */
  unit_cost: ShipmentsLinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_price: ShipmentsLinesAPI.Rate | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * Value with an associated unit.
 */
export interface Quantity {
  /**
   * Quantity ID.
   */
  id: string;

  /**
   * Formatted value with unit abbreviation (e.g. "$1,234.56" or "100 kg").
   */
  display_value: string;

  /**
   * Resource type identifier.
   */
  object: 'quantity';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: ShipmentsLinesAPI.Unit | null;

  /**
   * Decimal value.
   */
  value: string;
}

/**
 * Rate resource.
 */
export interface Rate {
  /**
   * Rate ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  denominator_unit: ShipmentsLinesAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: ShipmentsLinesAPI.Unit | null;

  /**
   * Resource type identifier.
   */
  object: 'rate';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Rate value as a decimal string.
   */
  value: string;
}

/**
 * Receiving order with lines.
 */
export interface ReceivingOrder {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed.
   */
  completed_at: string | null;

  /**
   * Timestamp when the receiving order was created.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListReceivingOrderLine | null;

  /**
   * Note on the receiving order.
   */
  note: string | null;

  /**
   * Receiving order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order';

  /**
   * Full sales order resource.
   */
  purchase_order: ShipmentsActionsAPI.SalesOrderDetail | null;

  /**
   * Account with optional branding and portal sub-resources.
   */
  supplier: ShipmentsLinesAPI.Account | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

/**
 * Line item in a receiving order.
 */
export interface ReceivingOrderLine {
  /**
   * Receiving order line ID.
   */
  id: string;

  /**
   * Timestamp when the line was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_line';

  /**
   * Full sales order line resource.
   */
  order_line: ShipmentsLinesAPI.SalesOrderLineDetail | null;

  /**
   * Value with an associated unit.
   */
  quantity: ShipmentsLinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  rejected_quantity: ShipmentsLinesAPI.Quantity | null;

  /**
   * Timestamp when the line was stocked.
   */
  stocked_at: string | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
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
  owner: ShipmentsLinesAPI.Owner | null;

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
 * Full sales order resource.
 */
export interface SalesOrderDetail {
  /**
   * Sales order ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  bill_to_address: ShipmentsLinesAPI.Address | null;

  /**
   * Carrier resource.
   */
  carrier: ShipmentsActionsAPI.Carrier | null;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account: string | null;

  /**
   * Carrier billing type.
   */
  carrier_billing_type: string | null;

  /**
   * Completed timestamp.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: ShipmentsActionsAPI.Customer | null;

  /**
   * Customer purchase order number.
   */
  customer_po: string | null;

  /**
   * Expiration timestamp.
   */
  expired_at: string | null;

  /**
   * First shipment timestamp.
   */
  first_ship_at: string | null;

  /**
   * Whether the acknowledgment has been sent.
   */
  is_acknowledgment_sent: boolean;

  /**
   * Issued timestamp.
   */
  issued_at: string | null;

  /**
   * Count of order lines. Always populated in list responses.
   */
  line_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ShipmentsActionsAPI.ListSalesOrderLineDetail | null;

  /**
   * Order note.
   */
  note: string | null;

  /**
   * Sales order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order';

  /**
   * Order discount resource.
   */
  order_discount: ShipmentsActionsAPI.OrderDiscount | null;

  /**
   * Payment term resource.
   */
  payment_term: ShipmentsActionsAPI.PaymentTerm | null;

  /**
   * Minimal pick sub-resource.
   */
  pick: ShipmentsActionsAPI.Pick | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: ShipmentsActionsAPI.Priority | null;

  /**
   * Production run sub-resource.
   */
  production_run: ShipmentsActionsAPI.ProductionRun | null;

  /**
   * Promised timestamp.
   */
  promised_at: string | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  sales_rep: ShipmentsActionsAPI.Actor | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: ShipmentsActionsAPI.ServiceLevel | null;

  /**
   * Address with associated geolocation.
   */
  ship_to_address: ShipmentsLinesAPI.Address | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: ShipmentsActionsAPI.ShippingTerm | null;

  /**
   * Sales order status sub-resource.
   */
  status: ShipmentsActionsAPI.SalesOrderStatusDetail | null;

  /**
   * Sales order type sub-resource.
   */
  type: ShipmentsActionsAPI.SalesOrderType | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Full sales order line resource.
 */
export interface SalesOrderLineDetail {
  /**
   * Sales order line ID.
   */
  id: string;

  /**
   * Completed timestamp.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * EDI line item ID.
   */
  edi_line_item_id: string | null;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: ShipmentsLinesAPI.Item | null;

  /**
   * Line item number.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_line';

  /**
   * Product description.
   */
  product_description: string | null;

  /**
   * Product SKU.
   */
  product_sku: string;

  /**
   * Value with an associated unit.
   */
  quantity_invoiced: ShipmentsLinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_ordered: ShipmentsLinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_packed: ShipmentsLinesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_picked: ShipmentsLinesAPI.Quantity | null;

  /**
   * Rate resource.
   */
  unit_cost: ShipmentsLinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_price: ShipmentsLinesAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Sales order status sub-resource.
 */
export interface SalesOrderStatusDetail {
  /**
   * Status code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_status';
}

/**
 * Sales order type sub-resource.
 */
export interface SalesOrderType {
  /**
   * Type code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_type';
}

/**
 * Scanning station resource.
 */
export interface ScanningStation {
  /**
   * Scanning station ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: ShipmentsActionsAPI.Department | null;

  /**
   * Label size code.
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Label type code.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ShipmentsActionsAPI.ListProductionStep | null;

  /**
   * Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Shipping service level for a carrier.
 */
export interface ServiceLevel {
  /**
   * Service level ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Default service level for the carrier.
   */
  is_default: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * Service level token.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ShippingTerm resource.
 */
export interface ShippingTerm {
  /**
   * Shipping term ID.
   */
  id: string;

  /**
   * When this shipping term was created.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  flat_rate: ShipmentsLinesAPI.Quantity | null;

  /**
   * List represents a paginated list of resources.
   */
  free_shipping_service_levels: ShipmentsActionsAPI.ListServiceLevel | null;

  /**
   * Value with an associated unit.
   */
  minimum_order_value: ShipmentsLinesAPI.Quantity | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
}

/**
 * Supplier sub-resource.
 */
export interface Supplier {
  /**
   * Supplier ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Supplier number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'supplier';
}

/**
 * Unit of measurement used for conversions and product quantities.
 */
export interface Unit {
  /**
   * Unit ID.
   */
  id: string;

  /**
   * Short abbreviation for the unit (e.g. "g", "kg").
   */
  abbreviation: string;

  /**
   * When this unit was created.
   */
  created_at: string;

  /**
   * Whether this is the base unit for its dimension. Conversion ratios are relative
   * to this unit.
   */
  is_base_unit: boolean;

  /**
   * Display name of the unit (e.g. "Gram", "Kilogram").
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'unit';

  /**
   * Conversion offset denominator. Typically 1. Cannot be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, used for temperature-like conversions. Zero for
   * most unit types.
   */
  offset_numerator: string;

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * Conversion ratio denominator relative to the base unit in the same dimension.
   * Cannot be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit in the same dimension.
   */
  ratio_numerator: string;

  /**
   * Unit dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * When this unit was last updated.
   */
  updated_at: string;
}

/**
 * UnitGroup is a unit group resource.
 */
export interface UnitGroup {
  /**
   * Unit group ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  associated_units: ShipmentsLinesAPI.ListUnitGroupUnit | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  base_unit: ShipmentsLinesAPI.Unit | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'unit_group';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ShipmentsLinesAPI.Owner | null;

  /**
   * Unit type.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * UnitGroupUnit is an associated unit within a unit group.
 */
export interface UnitGroupUnit {
  /**
   * Unit group unit ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Fixed discount amount.
   */
  discount_fixed: number;

  /**
   * Discount percentage.
   */
  discount_percentage: number;

  /**
   * Resource type identifier.
   */
  object: 'unit_group_unit';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: ShipmentsLinesAPI.Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Purchase order IDs.
   */
  purchase_order_ids: Array<string>;
}

export interface ActionChangeStatusParams {
  /**
   * Body param: Whether to send a notification email.
   */
  send_email: boolean;

  /**
   * Body param: Status change action (e.g., "issue", "unissue", "close", "open").
   */
  status_change: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'supplier'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'carrier'
    | 'service_level'
    | 'payment_term'
    | 'shipping_term'
    | 'receiving_order'
    | 'lines'
    | 'contacts'
  >;
}

export declare namespace Actions {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountGroup as AccountGroup,
    type AccountPortal as AccountPortal,
    type AccountUser as AccountUser,
    type Actor as Actor,
    type Address as Address,
    type Attribute as Attribute,
    type BulkDeletePurchaseOrdersRequest as BulkDeletePurchaseOrdersRequest,
    type Carrier as Carrier,
    type ChangePurchaseOrderStatusRequest as ChangePurchaseOrderStatusRequest,
    type Consumption as Consumption,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type Department as Department,
    type EmailContact as EmailContact,
    type Geolocation as Geolocation,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAccountGroup as ListAccountGroup,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ListCustomer as ListCustomer,
    type ListEmailContact as ListEmailContact,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListPurchaseOrderLineDetail as ListPurchaseOrderLineDetail,
    type ListReceivingOrderLine as ListReceivingOrderLine,
    type ListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ListScanningStation as ListScanningStation,
    type ListServiceLevel as ListServiceLevel,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type Machine as Machine,
    type OrderDiscount as OrderDiscount,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type PaymentTerm as PaymentTerm,
    type Pick as Pick,
    type Priority as Priority,
    type ProductionOutput as ProductionOutput,
    type ProductionRun as ProductionRun,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type PurchaseOrderDetail as PurchaseOrderDetail,
    type PurchaseOrderLineDetail as PurchaseOrderLineDetail,
    type Quantity as Quantity,
    type Rate as Rate,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderLine as ReceivingOrderLine,
    type Role as Role,
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
    type ScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type Supplier as Supplier,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionChangeStatusParams as ActionChangeStatusParams,
  };
}
