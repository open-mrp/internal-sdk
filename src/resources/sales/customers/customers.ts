// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionMergeParams,
  Actions,
  BulkDeleteCustomersRequest,
  MergeCustomersRequest,
} from './actions';
import * as NotificationRecipientsAPI from './notification-recipients';
import {
  ListOrderNotificationRecipient,
  NotificationRecipientInput,
  NotificationRecipientListParams,
  NotificationRecipientUpdateParams,
  NotificationRecipients,
  OrderNotificationRecipient,
  UpdateNotificationRecipientsRequest,
} from './notification-recipients';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  notificationRecipients: NotificationRecipientsAPI.NotificationRecipients =
    new NotificationRecipientsAPI.NotificationRecipients(this._client);

  /**
   * Creates a customer account with its default addresses, fulfillment settings, and
   * order policies.
   *
   * If `number` is omitted, the next sequential customer number is assigned
   * automatically.
   *
   * This endpoint requires the permission: `customers:create`.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.create({
   *   bill_to_address: {
   *     name: 'Acme Inc.',
   *     street_line_1: '123 Main St',
   *     locality: 'New York',
   *     state: 'NY',
   *     postal_code: '10001',
   *     country: 'US',
   *   },
   *   customer_type_group_id: 'acgp_6p4z57e9alaf',
   *   default_carrier_id: 'cr_tv5vfjtgu1n3',
   *   default_payment_term_id: 'pytm_skssmsy21lem',
   *   default_shipping_term_id: 'shtm_c5gxy05whw6r',
   *   name: 'Acme Inc.',
   *   ship_to_address: {
   *     name: 'Acme Inc.',
   *     street_line_1: '123 Main St',
   *     locality: 'New York',
   *     state: 'NY',
   *     postal_code: '10001',
   *     country: 'US',
   *   },
   *   carrier_billing_account: '123456789',
   *   carrier_billing_type: 'sender',
   *   commission_policy: 'commission_applied',
   *   credit_limit: { value: '10000.00', unit_id: 'un_82bd37dae5po' },
   *   customer_price_group_ids: ['acgp_6p4z57e9alaf'],
   *   default_priority: 'normal',
   *   default_sales_rep_id: 'acus_e5zu8bde0z3h',
   *   default_service_level_id: 'crop_4ilk9p6gccrx',
   *   edi_status: 'disabled',
   *   email: 'orders@acme.com',
   *   freight_policy: 'billed_freight',
   *   note: 'Key enterprise account',
   *   number: '100042',
   *   phone: '555-123-4567',
   *   status: 'normal',
   *   url: 'https://acme.com',
   * });
   * ```
   */
  create(params: CustomerCreateParams, options?: RequestOptions): APIPromise<Customer> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/customers', { query: { include }, body, ...options });
  }

  /**
   * Returns a customer by ID.
   *
   * This endpoint requires the permissions: `customers:read`, `suppliers:read`.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.retrieve(
   *   'ac_opnlh43ymyee',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: CustomerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    return this._client.get(path`/v1/sales/customers/${id}`, { query, ...options });
  }

  /**
   * Partially updates a customer account.
   *
   * Only the fields provided in the request are changed. Nullable fields can be set
   * to `null` to clear their current value.
   *
   * This endpoint requires the permission: `customers:update`.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.update('ac_opnlh43ymyee', {
   *   bill_to_address_id: 'ad_npqa5y43q26z',
   *   carrier_billing_account: '123456789',
   *   carrier_billing_type: 'sender',
   *   commission_policy: 'commission_applied',
   *   credit_limit: { value: '10000.00', unit_id: 'un_82bd37dae5po' },
   *   customer_price_group_ids: ['acgp_6p4z57e9alaf'],
   *   customer_type_group_id: 'acgp_6p4z57e9alaf',
   *   default_carrier_id: 'cr_tv5vfjtgu1n3',
   *   default_payment_term_id: 'pytm_skssmsy21lem',
   *   default_priority: 'normal',
   *   default_sales_rep_id: 'acus_e5zu8bde0z3h',
   *   default_service_level_id: 'crop_4ilk9p6gccrx',
   *   default_shipping_term_id: 'shtm_c5gxy05whw6r',
   *   edi_status: 'disabled',
   *   email: 'orders@acme.com',
   *   freight_policy: 'billed_freight',
   *   name: 'Acme Corp Updated',
   *   note: 'Updated account notes',
   *   number: '100042',
   *   phone: '555-123-4567',
   *   ship_to_address_id: 'ad_npqa5y43q26z',
   *   status: 'normal',
   *   url: 'https://acme.com',
   * });
   * ```
   */
  update(
    id: string,
    params: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Customer> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/sales/customers/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of customers for the current account.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const listCustomer = await client.sales.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCustomer> {
    return this._client.get('/v1/sales/customers', { query, ...options });
  }

  /**
   * Deletes a customer.
   *
   * Fails with a conflict error if any sales orders still reference the customer;
   * delete or reassign those orders, or merge the customer into another first.
   *
   * This endpoint requires the permission: `customers:delete`.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.delete(
   *   'ac_opnlh43ymyee',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CustomerDeleteResponse> {
    return this._client.delete(path`/v1/sales/customers/${id}`, options);
  }

  /**
   * Registers the authenticated user as a customer of a seller account.
   *
   * Either links the user to an existing customer account by customer number, or
   * creates a new customer account with the provided details and links the user to
   * it. A new customer account takes the authenticated user's email address as its
   * contact email, and either way the seller's customer-service contacts are
   * notified that a buyer has registered.
   *
   * @example
   * ```ts
   * const response = await client.sales.customers.registration({
   *   account_slug: 'my-company',
   *   is_existing_customer: false,
   *   address: {
   *     name: 'Headquarters',
   *     street_line_1: '123 Main St',
   *     locality: 'Springfield',
   *     state: 'IL',
   *     postal_code: '62701',
   *     country: 'US',
   *   },
   *   customer_group_id: 'cgrp_01abc',
   *   customer_name: 'Acme Corp',
   *   payment_term_id: 'pt_01abc',
   *   phone: '+15551234567',
   *   shipping_term_id: 'st_01abc',
   * });
   * ```
   */
  registration(
    body: CustomerRegistrationParams,
    options?: RequestOptions,
  ): APIPromise<CustomerRegistrationResponse> {
    return this._client.post('/v1/sales/customers/registration', { body, ...options });
  }

  /**
   * Returns the products a customer orders most often, based on historical sales
   * order data.
   *
   * Returns up to 12 items, each paired with the unit the customer orders it in most
   * often and ranked by the number of order lines placed in that unit. Only products
   * of type `sale` that are visible in the customer portal are counted, so lines for
   * services, shipping, tax, credits, and returns are ignored, and hiding a product
   * from the portal removes its lines from the ranking.
   *
   * This endpoint requires the permissions: `customers:read`, `suppliers:read`,
   * `items:read`.
   *
   * @example
   * ```ts
   * const listFrequentlyOrderedProduct =
   *   await client.sales.customers.retrieveFrequentlyOrderedProducts(
   *     'ac_opnlh43ymyee',
   *   );
   * ```
   */
  retrieveFrequentlyOrderedProducts(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ListFrequentlyOrderedProduct> {
    return this._client.get(path`/v1/sales/customers/${id}/frequently-ordered-products`, options);
  }

  /**
   * Returns the ship-by lead time a new order for this customer would be committed
   * to.
   *
   * Resolved through the same chain the issue path stamps onto an order, most
   * specific first: a lead time set on the customer, then on the customer's account
   * group, then the account-wide default. `source` names which rule applied, so a
   * form can show where the number came from rather than leaving a rep to guess.
   *
   * This is a preview of a commitment, not the commitment itself. An order takes its
   * own `ship_by_date` when it is issued and keeps it afterwards, so changing a lead
   * time here moves what future orders will promise and leaves promises already made
   * alone.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const customerLeadTime =
   *   await client.sales.customers.retrieveLeadTime(
   *     'ac_opnlh43ymyee',
   *   );
   * ```
   */
  retrieveLeadTime(id: string, options?: RequestOptions): APIPromise<CustomerLeadTime> {
    return this._client.get(path`/v1/sales/customers/${id}/lead-time`, options);
  }
}

/**
 * A named grouping of customer accounts, used for pricing rules or to categorize
 * accounts.
 *
 * A customer carries at most one group of type `type_group` as its customer type,
 * plus any number of groups of type `pricing_group`. Membership of either kind can
 * scope a volume discount to the customer and open up product lines for it to
 * order from.
 */
export interface AccountGroup {
  /**
   * Account group ID.
   */
  id: string;

  /**
   * How sales commission applies to accounts in this group.
   *
   * - `commission_applied`: sales commission is calculated on orders from accounts
   *   in this group.
   * - `commission_exempt`: orders from accounts in this group are exempt from
   *   commission.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Calendar days between an order being issued and it being due to ship, inherited
   * by every customer in this group that has not set its own.
   */
  default_lead_time_days: number | null;

  /**
   * Free-form description of the account group.
   */
  description: string | null;

  /**
   * How freight charges apply to orders from accounts in this group.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name of the account group.
   *
   * Unique within the account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group';

  /**
   * How this account group is used.
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   *
   * A group's type is fixed when it is created and cannot be changed afterwards.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address details supplied when creating an address, either on its own or inline
 * on another resource.
 *
 * A few requests, such as shipping rate estimates, take these same fields for a
 * one-off address that is never saved to the account.
 */
export interface AddressInput {
  /**
   * Two-letter ISO 3166-1 country code, such as `US`.
   */
  country: string;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Email address associated with the address.
   */
  email?: string;

  /**
   * City or locality.
   */
  locality?: string;

  /**
   * Phone number associated with the address.
   */
  phone?: string;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string;

  /**
   * State or administrative area.
   */
  state?: string;

  /**
   * First line of the street address.
   */
  street_line_1?: string;

  /**
   * Second line of the street address.
   */
  street_line_2?: string;

  /**
   * How the address is used.
   *
   * - `standard`: a normal shipping or billing address.
   * - `drop_ship`: an address an order is shipped to directly, typically a third
   *   party or end customer rather than the account itself.
   */
  type?: 'standard' | 'drop_ship';
}

/**
 * A shipping carrier configured for fulfilling orders.
 *
 * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
 * through Shippo for live rating and label purchase; other carriers represent
 * self-managed shipping methods such as will call or local delivery.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Your account number with this carrier.
   *
   * UPS and USPS carrier accounts are connected to Shippo using this number; FedEx
   * carriers authorize through OAuth instead, so their account number is not used to
   * connect them.
   */
  account_number: string | null;

  /**
   * Well-known carrier identifier, set only for recognized carriers and absent for
   * custom ones.
   *
   * - `fedex`, `ups`, `usps`: integrated carriers managed through Shippo (live
   *   rating and labels).
   * - `will_call`: customer picks the order up; no carrier shipment.
   * - `delivery`: delivered by your own vehicles/drivers.
   * - `ltl`, `ltl1`: less-than-truckload freight carriers.
   * - `freight_collect`: freight billed to and arranged by the receiver.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether customers can see and select this carrier at checkout in the customer
   * portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Human-readable name for the carrier, unique among the carriers visible to your
   * account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'carrier';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  service_levels: ListServiceLevel | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create a customer.
 */
export interface CreateCustomerRequest {
  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  bill_to_address: AddressInput;

  /**
   * ID of the account group of type `type_group` that categorizes this customer (for
   * example "Distributors").
   */
  customer_type_group_id: string;

  /**
   * ID of the carrier used on this customer's orders when the order does not specify
   * one.
   */
  default_carrier_id: string;

  /**
   * ID of the payment term used on this customer's orders when the order does not
   * specify one.
   */
  default_payment_term_id: string;

  /**
   * ID of the shipping term used on this customer's orders when the order does not
   * specify one.
   */
  default_shipping_term_id: string;

  /**
   * The customer's business name, as shown throughout the app and on documents.
   */
  name: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  ship_to_address: AddressInput;

  /**
   * Carrier billing account number charged when `carrier_billing_type` is
   * `third_party`.
   */
  carrier_billing_account?: string;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  credit_limit?: QuantityInput;

  /**
   * IDs of the account groups of type `pricing_group` to assign to this customer,
   * used to apply pricing rules.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Priority used to pre-fill new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to credit as the sales rep on this customer's orders.
   *
   * Must be an account user on your own account.
   */
  default_sales_rep_id?: string;

  /**
   * ID of the carrier service level used when an order takes its carrier from this
   * customer's default.
   */
  default_service_level_id?: string;

  /**
   * Whether EDI (Electronic Data Interchange) is enabled for exchanging orders and
   * documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address.
   */
  email?: string;

  /**
   * Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer.
   *
   * Freight is also waived when the customer's type group, one of its price groups,
   * or a product line the ordered products belong to is `free_freight`.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Calendar days between an order being issued and it being due to ship.
   *
   * Sets each order's `ship_by_date` when it is issued. Leave unset to inherit the
   * customer's account group lead time, then the account default.
   */
  lead_time_days?: number;

  /**
   * Free-form note about the customer.
   */
  note?: string;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   *
   * Must be unique within your account. If omitted, the next sequential number is
   * assigned automatically.
   */
  number?: string;

  /**
   * Phone number.
   */
  phone?: string;

  /**
   * The customer's account standing.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the customer's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the customer should be held.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL.
   */
  url?: string;
}

/**
 * A business you sell to, with its contact details, default fulfillment settings,
 * and order policies.
 */
export interface Customer {
  /**
   * Customer ID.
   */
  id: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  child_accounts: ListCustomer | null;

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   *
   * The customer counts as exempt if this field, its `type` group, or any of its
   * `price_groups` is `commission_exempt`. Exempt customers never have a sales rep
   * assigned automatically when an order is created without one.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Customer contact information.
   */
  contact_info: CustomerContactInfo | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  credit_limit: AccountUsersAPI.Quantity | null;

  /**
   * Values used to fill in a new sales order for this customer when the order does
   * not supply its own.
   */
  defaults: CustomerDefaults | null;

  /**
   * Whether EDI (Electronic Data Interchange) is enabled for exchanging orders and
   * documents with this customer.
   */
  edi_status: 'enabled' | 'disabled';

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: CustomerFreightPreferences | null;

  /**
   * The customer's business name, as shown throughout the app and on documents.
   */
  name: string;

  /**
   * Free-form note about the customer.
   */
  note: string | null;

  /**
   * Customer notification settings.
   */
  notification_preferences: CustomerNotificationPreferences | null;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   *
   * Unique within your account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  parent_account: Customer | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  price_groups: ListAccountGroup | null;

  /**
   * The customer's position in the account hierarchy.
   *
   * - `standalone`: no parent or child accounts.
   * - `parent`: has one or more child accounts (see `child_accounts`).
   * - `child`: belongs to a parent account (see `parent_account`).
   */
  relationship_type: 'standalone' | 'parent' | 'child';

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * The customer's account standing.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the customer's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the customer should be held.
   *
   * The hold statuses are advisory: Augno flags the customer's orders as being on
   * credit hold, but requests to create orders or shipments for the customer are not
   * rejected.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * A named grouping of customer accounts, used for pricing rules or to categorize
   * accounts.
   *
   * A customer carries at most one group of type `type_group` as its customer type,
   * plus any number of groups of type `pricing_group`. Membership of either kind can
   * scope a volume discount to the customer and open up product lines for it to
   * order from.
   */
  type: AccountGroup | null;

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
 * Values used to fill in a new sales order for this customer when the order does
 * not supply its own.
 */
export interface CustomerDefaults {
  /**
   * Calendar days between an order being issued and it being due to ship.
   *
   * Sets each order's `ship_by_date` when it is issued. With none set here the
   * customer inherits its account group's lead time, then the account default.
   */
  lead_time_days: number | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_defaults';

  /**
   * A payment term describing when payment is due (e.g. `Net 30`), assignable to
   * customers, sales orders, purchase orders, and invoices.
   */
  payment_term: PaymentTerm | null;

  /**
   * Priority level used to order work on sales orders, purchase orders, and picks.
   *
   * The levels are platform-provided and the same for every account, so they cannot
   * be created, renamed, or removed. A customer can carry a default priority that
   * pre-fills new orders for them.
   */
  priority: Priority | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  sales_rep: AccountUsersAPI.AccountUser | null;

  /**
   * A named freight pricing rule that decides what a buyer pays for shipping.
   *
   * A customer's default shipping term is evaluated whenever freight is quoted for
   * one of their orders. Freight exemptions on the customer, its type group, or any
   * of its price groups are checked first and zero the freight charge before the
   * shipping term is considered.
   */
  shipping_term: ShippingTerm | null;
}

/**
 * Customer freight and carrier settings.
 */
export interface CustomerFreightPreferences {
  /**
   * Carrier billing account number charged when `billing_type` is `third_party`.
   */
  billing_account: string | null;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `billing_account`.
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
   */
  carrier: Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_freight_preferences';

  /**
   * A shipping speed or method offered by a carrier, such as ground or overnight.
   *
   * Carriers connected through Shippo have their service levels synced from the
   * carrier itself; any carrier can also have service levels you create by hand.
   */
  service_level: ServiceLevel | null;

  /**
   * Freight policy applied to this customer's orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer.
   *
   * Freight is waived when this field, the customer's `type` group, any of its
   * `price_groups`, or any product line the ordered products belong to is
   * `free_freight`, so a shipment can come back freight-exempt even while this field
   * is `billed_freight`.
   */
  status: 'free_freight' | 'billed_freight';
}

/**
 * The ship-by lead time a new order for this customer would be committed to.
 */
export interface CustomerLeadTime {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  account_group: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  customer: CoreAPI.Entity | null;

  /**
   * Calendar days between an order being issued and it being due to ship.
   *
   * `0` means same-day: an order issued today would be due to ship today.
   */
  days: number;

  /**
   * Resource type identifier.
   */
  object: 'customer_lead_time';

  /**
   * Which rule in the chain produced this lead time.
   *
   * - `customer`: a lead time set on the customer itself.
   * - `account_group`: inherited from the customer's account group.
   * - `account`: the account-wide fallback.
   *
   * The shared `manual` value cannot appear here: it means a promised date was set
   * on one specific order, which is a fact about that order rather than about the
   * customer.
   */
  source: 'customer' | 'account_group' | 'account' | 'manual';
}

/**
 * Customer notification settings.
 */
export interface CustomerNotificationPreferences {
  /**
   * Whether anyone is set up to receive invoice emails for this customer.
   *
   * Derived from the customer's notification recipients: true when at least one of
   * them is configured for invoice notifications.
   */
  accepts_invoice_emails: boolean;

  /**
   * Resource type identifier.
   */
  object: 'customer_notification_preferences';
}

/**
 * An item a customer orders regularly, derived from their sales order history.
 */
export interface FrequentlyOrderedProduct {
  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'frequently_ordered_product';

  /**
   * Number of sales order lines on which this customer ordered the item in the unit
   * shown.
   */
  order_count: number;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAccountGroup {
  /**
   * Resources in this page.
   */
  data: Array<AccountGroup>;

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

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListCustomer {
  /**
   * Resources in this page.
   */
  data: Array<Customer>;

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

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListFrequentlyOrderedProduct {
  /**
   * Resources in this page.
   */
  data: Array<FrequentlyOrderedProduct>;

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

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ServiceLevel>;

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

/**
 * A payment term describing when payment is due (e.g. `Net 30`), assignable to
 * customers, sales orders, purchase orders, and invoices.
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
   * Display name (e.g. `Net 30`), unique among the payment terms visible to your
   * account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'payment_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Whether this payment term is still in active use.
   *
   * Payment terms created through the API are always `active`, and no endpoint
   * changes a term's status. List Payment Terms returns inactive terms alongside
   * active ones, so filter them out yourself if you only want the ones still on
   * offer.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Priority level used to order work on sales orders, purchase orders, and picks.
 *
 * The levels are platform-provided and the same for every account, so they cannot
 * be created, renamed, or removed. A customer can carry a default priority that
 * pre-fills new orders for them.
 */
export interface Priority {
  /**
   * Priority ID.
   */
  id: string;

  /**
   * Machine-readable code identifying the priority level.
   *
   * Other resources refer to a priority by this code rather than by its ID, such as
   * a sales order's `priority`, and it can be used in place of the ID when
   * retrieving a priority.
   */
  code: 'low' | 'normal' | 'high';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the priority level.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'priority';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * An amount together with the unit it is expressed in.
 *
 * The unit may be a currency, so money amounts such as a credit limit are written
 * the same way as physical amounts like weights or counts.
 */
export interface QuantityInput {
  /**
   * ID of the unit of measure for the value.
   */
  unit_id: string;

  /**
   * Decimal value, as a string to preserve precision.
   */
  value: string;
}

/**
 * Request to register a new or existing customer.
 */
export interface RegisterCustomerRequest {
  /**
   * Slug of the seller account the customer is registering with.
   */
  account_slug: string;

  /**
   * Whether the registrant is an existing customer of the seller account.
   *
   * When `true`, the registering user is linked to the customer account matching
   * `customer_number`. When `false`, a new customer account is created and
   * `customer_name`, `customer_group_id`, `address`, `shipping_term_id`, and
   * `payment_term_id` are required.
   */
  is_existing_customer: boolean;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  address?: AddressInput;

  /**
   * ID of the customer group to place the new customer in.
   *
   * Required when registering as a new customer.
   */
  customer_group_id?: string;

  /**
   * Name for the new customer account.
   *
   * Required when registering as a new customer.
   */
  customer_name?: string;

  /**
   * Customer number identifying the existing customer account.
   *
   * Required when `is_existing_customer` is `true`; ignored otherwise. New customers
   * are assigned the seller's next customer number automatically.
   */
  customer_number?: string;

  /**
   * ID of the payment term assigned to the new customer.
   *
   * Required when registering as a new customer.
   */
  payment_term_id?: string;

  /**
   * Contact phone number for the new customer.
   */
  phone?: string;

  /**
   * ID of the shipping term assigned to the new customer.
   *
   * Required when registering as a new customer.
   */
  shipping_term_id?: string;
}

/**
 * A shipping speed or method offered by a carrier, such as ground or overnight.
 *
 * Carriers connected through Shippo have their service levels synced from the
 * carrier itself; any carrier can also have service levels you create by hand.
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
   * Whether customers can see and select this service level at checkout in the
   * customer portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Business days this service typically takes in transit, used to work an order's
   * ship-by date back from a promised delivery date.
   *
   * A fallback for lanes the carrier has not quoted. Null means transit is unknown
   * for this service rather than instant, so a ship-by date falls back to the
   * promised delivery date itself.
   */
  default_transit_days: number | null;

  /**
   * Whether this is the carrier's default service level, pre-selected when the
   * carrier is chosen.
   *
   * Each carrier has at most one default; setting a new default clears the previous
   * one. A default service level cannot be deleted until another service level takes
   * its place or the flag is cleared.
   */
  is_default: boolean;

  /**
   * Human-readable name for the service level, shown to customers at checkout when
   * the service level is visible.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Carrier-specific code identifying this service level (e.g. `fedex_ground`,
   * `ups_next_day_air`).
   *
   * For service levels synced from a connected carrier this is the carrier's own
   * token, which is what rate shopping and label purchase are keyed on; for service
   * levels you create yourself it is the `code` you supplied.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A named freight pricing rule that decides what a buyer pays for shipping.
 *
 * A customer's default shipping term is evaluated whenever freight is quoted for
 * one of their orders. Freight exemptions on the customer, its type group, or any
 * of its price groups are checked first and zero the freight charge before the
 * shipping term is considered.
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  flat_rate: AccountUsersAPI.Quantity | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  free_shipping_service_levels: ListServiceLevel | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  minimum_order_value: AccountUsersAPI.Quantity | null;

  /**
   * Human-readable name for the shipping term, used to identify it when assigning
   * shipping terms to customers and orders.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: the buyer is never charged for shipping.
   * - `flat_rate_freight`: the buyer is charged the fixed amount in `flat_rate`,
   *   regardless of what the carrier would have charged.
   * - `carrier_rate_freight`: the buyer is charged the rate the carrier quotes for
   *   the order's carrier and service level.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
}

/**
 * Request to partially update a customer.
 */
export interface UpdateCustomerRequest {
  /**
   * ID of an existing address to use as the default billing address.
   *
   * The address is linked to the customer's account if it is not already.
   */
  bill_to_address_id?: string | null;

  /**
   * Carrier billing account number charged when `carrier_billing_type` is
   * `third_party`.
   */
  carrier_billing_account?: string | null;

  /**
   * Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  credit_limit?: QuantityInput | null;

  /**
   * IDs of the account groups of type `pricing_group` to assign to this customer,
   * used to apply pricing rules.
   *
   * When provided, replaces the customer's full set of existing price groups.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * ID of the account group of type `type_group` that categorizes this customer (for
   * example "Distributors").
   */
  customer_type_group_id?: string;

  /**
   * ID of the carrier used on this customer's orders when the order does not specify
   * one.
   */
  default_carrier_id?: string;

  /**
   * ID of the payment term used on this customer's orders when the order does not
   * specify one.
   */
  default_payment_term_id?: string;

  /**
   * Priority used to pre-fill new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to credit as the sales rep on this customer's orders.
   *
   * Must be an account user on your own account.
   */
  default_sales_rep_id?: string | null;

  /**
   * ID of the carrier service level used when an order takes its carrier from this
   * customer's default.
   */
  default_service_level_id?: string | null;

  /**
   * ID of the shipping term used on this customer's orders when the order does not
   * specify one.
   */
  default_shipping_term_id?: string;

  /**
   * Whether EDI (Electronic Data Interchange) is enabled for exchanging orders and
   * documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address.
   */
  email?: string | null;

  /**
   * Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer.
   *
   * Freight is also waived when the customer's type group, one of its price groups,
   * or a product line the ordered products belong to is `free_freight`.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Calendar days between an order being issued and it being due to ship.
   *
   * Sets each order's `ship_by_date` when it is issued. Leave unset to inherit the
   * customer's account group lead time, then the account default.
   */
  lead_time_days?: number | null;

  /**
   * The customer's business name, as shown throughout the app and on documents.
   */
  name?: string;

  /**
   * Free-form note about the customer.
   */
  note?: string | null;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   *
   * Must be unique within your account.
   */
  number?: string;

  /**
   * Phone number.
   */
  phone?: string | null;

  /**
   * ID of an existing address to use as the default shipping address.
   *
   * The address is linked to the customer's account if it is not already.
   */
  ship_to_address_id?: string | null;

  /**
   * The customer's account standing.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the customer's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the customer should be held.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL.
   */
  url?: string | null;
}

export interface CustomerDeleteResponse {}

export interface CustomerRegistrationResponse {}

export interface CustomerCreateParams {
  /**
   * Body param: Address details supplied when creating an address, either on its own
   * or inline on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  bill_to_address: AddressInput;

  /**
   * Body param: ID of the account group of type `type_group` that categorizes this
   * customer (for example "Distributors").
   */
  customer_type_group_id: string;

  /**
   * Body param: ID of the carrier used on this customer's orders when the order does
   * not specify one.
   */
  default_carrier_id: string;

  /**
   * Body param: ID of the payment term used on this customer's orders when the order
   * does not specify one.
   */
  default_payment_term_id: string;

  /**
   * Body param: ID of the shipping term used on this customer's orders when the
   * order does not specify one.
   */
  default_shipping_term_id: string;

  /**
   * Body param: The customer's business name, as shown throughout the app and on
   * documents.
   */
  name: string;

  /**
   * Body param: Address details supplied when creating an address, either on its own
   * or inline on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  ship_to_address: AddressInput;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.carrier.service_levels'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.sales_rep.user'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
    | 'credit_limit.unit'
  >;

  /**
   * Body param: Carrier billing account number charged when `carrier_billing_type`
   * is `third_party`.
   */
  carrier_billing_account?: string;

  /**
   * Body param: Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  credit_limit?: QuantityInput;

  /**
   * Body param: IDs of the account groups of type `pricing_group` to assign to this
   * customer, used to apply pricing rules.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: Priority used to pre-fill new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to credit as the sales rep on this
   * customer's orders.
   *
   * Must be an account user on your own account.
   */
  default_sales_rep_id?: string;

  /**
   * Body param: ID of the carrier service level used when an order takes its carrier
   * from this customer's default.
   */
  default_service_level_id?: string;

  /**
   * Body param: Whether EDI (Electronic Data Interchange) is enabled for exchanging
   * orders and documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address.
   */
  email?: string;

  /**
   * Body param: Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer.
   *
   * Freight is also waived when the customer's type group, one of its price groups,
   * or a product line the ordered products belong to is `free_freight`.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Calendar days between an order being issued and it being due to
   * ship.
   *
   * Sets each order's `ship_by_date` when it is issued. Leave unset to inherit the
   * customer's account group lead time, then the account default.
   */
  lead_time_days?: number;

  /**
   * Body param: Free-form note about the customer.
   */
  note?: string;

  /**
   * Body param: Human-readable customer number used to identify the account,
   * distinct from the `id`.
   *
   * Must be unique within your account. If omitted, the next sequential number is
   * assigned automatically.
   */
  number?: string;

  /**
   * Body param: Phone number.
   */
  phone?: string;

  /**
   * Body param: The customer's account standing.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the customer's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the customer should be held.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL.
   */
  url?: string;
}

export interface CustomerRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.carrier.service_levels'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.sales_rep.user'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
    | 'credit_limit.unit'
  >;
}

export interface CustomerUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.carrier.service_levels'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.sales_rep.user'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
    | 'credit_limit.unit'
  >;

  /**
   * Body param: ID of an existing address to use as the default billing address.
   *
   * The address is linked to the customer's account if it is not already.
   */
  bill_to_address_id?: string | null;

  /**
   * Body param: Carrier billing account number charged when `carrier_billing_type`
   * is `third_party`.
   */
  carrier_billing_account?: string | null;

  /**
   * Body param: Who pays the carrier for shipments.
   *
   * - `sender`: the shipper (you) pays the carrier.
   * - `third_party`: a third party is billed, using `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: How sales commission applies to this customer's orders.
   *
   * - `commission_exempt`: this customer's orders are exempt from sales commission.
   * - `commission_applied`: sales commission is calculated on this customer's
   *   orders.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  credit_limit?: QuantityInput | null;

  /**
   * Body param: IDs of the account groups of type `pricing_group` to assign to this
   * customer, used to apply pricing rules.
   *
   * When provided, replaces the customer's full set of existing price groups.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: ID of the account group of type `type_group` that categorizes this
   * customer (for example "Distributors").
   */
  customer_type_group_id?: string;

  /**
   * Body param: ID of the carrier used on this customer's orders when the order does
   * not specify one.
   */
  default_carrier_id?: string;

  /**
   * Body param: ID of the payment term used on this customer's orders when the order
   * does not specify one.
   */
  default_payment_term_id?: string;

  /**
   * Body param: Priority used to pre-fill new orders for this customer.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to credit as the sales rep on this
   * customer's orders.
   *
   * Must be an account user on your own account.
   */
  default_sales_rep_id?: string | null;

  /**
   * Body param: ID of the carrier service level used when an order takes its carrier
   * from this customer's default.
   */
  default_service_level_id?: string | null;

  /**
   * Body param: ID of the shipping term used on this customer's orders when the
   * order does not specify one.
   */
  default_shipping_term_id?: string;

  /**
   * Body param: Whether EDI (Electronic Data Interchange) is enabled for exchanging
   * orders and documents with this customer.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address.
   */
  email?: string | null;

  /**
   * Body param: Whether this customer is billed for freight on their orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer.
   *
   * Freight is also waived when the customer's type group, one of its price groups,
   * or a product line the ordered products belong to is `free_freight`.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Calendar days between an order being issued and it being due to
   * ship.
   *
   * Sets each order's `ship_by_date` when it is issued. Leave unset to inherit the
   * customer's account group lead time, then the account default.
   */
  lead_time_days?: number | null;

  /**
   * Body param: The customer's business name, as shown throughout the app and on
   * documents.
   */
  name?: string;

  /**
   * Body param: Free-form note about the customer.
   */
  note?: string | null;

  /**
   * Body param: Human-readable customer number used to identify the account,
   * distinct from the `id`.
   *
   * Must be unique within your account.
   */
  number?: string;

  /**
   * Body param: Phone number.
   */
  phone?: string | null;

  /**
   * Body param: ID of an existing address to use as the default shipping address.
   *
   * The address is linked to the customer's account if it is not already.
   */
  ship_to_address_id?: string | null;

  /**
   * Body param: The customer's account standing.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the customer's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the customer should be held.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL.
   */
  url?: string | null;
}

export interface CustomerListParams {
  /**
   * Filter by default carrier IDs.
   */
  carrier_ids?: Array<string>;

  /**
   * Filter to customers with any address in this city (exact match).
   *
   * When combined with `state` or `postal_code`, a single address must match all
   * provided values.
   */
  city?: string;

  /**
   * Filter by the commission policy set on the customer itself.
   *
   * Policies inherited from the customer's type group or price groups are not
   * considered here.
   */
  commission_status_codes?: Array<'commission_applied' | 'commission_exempt'>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer type group IDs (the account group of type `type_group`
   * returned in the customer's `type` field).
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter to customers created at or before this timestamp (inclusive).
   */
  ends_at?: string;

  /**
   * Filter by the freight policy set on the customer itself.
   *
   * Policies inherited from the customer's type group or price groups are not
   * considered here.
   */
  freight_status_codes?: Array<'free_freight' | 'billed_freight'>;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.carrier.service_levels'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.sales_rep.user'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
    | 'credit_limit.unit'
  >;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by whether the customer has child accounts.
   */
  parent_account_status?: 'parent' | 'non_parent';

  /**
   * Filter by default payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Filter to customers with any address in this postal code (exact match).
   */
  postal_code?: string;

  /**
   * Filter to customers that belong to any of these pricing groups.
   */
  pricing_group_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter to customers whose default sales rep is one of these account users.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by default service level IDs.
   */
  service_level_ids?: Array<string>;

  /**
   * Filter by default shipping term IDs.
   */
  shipping_term_ids?: Array<string>;

  /**
   * Filter to customers created at or after this timestamp (inclusive).
   */
  starts_at?: string;

  /**
   * Filter to customers with any address in this state (exact match).
   */
  state?: string;

  /**
   * Filter by the customer's account standing.
   */
  status_codes?: Array<'normal' | 'preferred' | 'hold_shipment' | 'hold_all'>;
}

export interface CustomerRegistrationParams {
  /**
   * Slug of the seller account the customer is registering with.
   */
  account_slug: string;

  /**
   * Whether the registrant is an existing customer of the seller account.
   *
   * When `true`, the registering user is linked to the customer account matching
   * `customer_number`. When `false`, a new customer account is created and
   * `customer_name`, `customer_group_id`, `address`, `shipping_term_id`, and
   * `payment_term_id` are required.
   */
  is_existing_customer: boolean;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  address?: AddressInput;

  /**
   * ID of the customer group to place the new customer in.
   *
   * Required when registering as a new customer.
   */
  customer_group_id?: string;

  /**
   * Name for the new customer account.
   *
   * Required when registering as a new customer.
   */
  customer_name?: string;

  /**
   * Customer number identifying the existing customer account.
   *
   * Required when `is_existing_customer` is `true`; ignored otherwise. New customers
   * are assigned the seller's next customer number automatically.
   */
  customer_number?: string;

  /**
   * ID of the payment term assigned to the new customer.
   *
   * Required when registering as a new customer.
   */
  payment_term_id?: string;

  /**
   * Contact phone number for the new customer.
   */
  phone?: string;

  /**
   * ID of the shipping term assigned to the new customer.
   *
   * Required when registering as a new customer.
   */
  shipping_term_id?: string;
}

Customers.Actions = Actions;
Customers.NotificationRecipients = NotificationRecipients;

export declare namespace Customers {
  export {
    type AccountGroup as AccountGroup,
    type AddressInput as AddressInput,
    type Carrier as Carrier,
    type CreateCustomerRequest as CreateCustomerRequest,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerLeadTime as CustomerLeadTime,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type FrequentlyOrderedProduct as FrequentlyOrderedProduct,
    type ListAccountGroup as ListAccountGroup,
    type ListCustomer as ListCustomer,
    type ListFrequentlyOrderedProduct as ListFrequentlyOrderedProduct,
    type ListServiceLevel as ListServiceLevel,
    type PaymentTerm as PaymentTerm,
    type Priority as Priority,
    type QuantityInput as QuantityInput,
    type RegisterCustomerRequest as RegisterCustomerRequest,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type UpdateCustomerRequest as UpdateCustomerRequest,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerRegistrationResponse as CustomerRegistrationResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerRegistrationParams as CustomerRegistrationParams,
  };

  export {
    Actions as Actions,
    type BulkDeleteCustomersRequest as BulkDeleteCustomersRequest,
    type MergeCustomersRequest as MergeCustomersRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionMergeParams as ActionMergeParams,
  };

  export {
    NotificationRecipients as NotificationRecipients,
    type ListOrderNotificationRecipient as ListOrderNotificationRecipient,
    type NotificationRecipientInput as NotificationRecipientInput,
    type OrderNotificationRecipient as OrderNotificationRecipient,
    type UpdateNotificationRecipientsRequest as UpdateNotificationRecipientsRequest,
    type NotificationRecipientUpdateParams as NotificationRecipientUpdateParams,
    type NotificationRecipientListParams as NotificationRecipientListParams,
  };
}
