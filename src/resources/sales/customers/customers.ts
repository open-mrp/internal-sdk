// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a customer account. Auto-generates a customer number if one is not
   * provided.
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
   *   customer_type_group_id: 'acgp_018e88072d1320808dc979cfac',
   *   default_carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *   default_payment_term_id:
   *     'pytm_018694d6601ea771cd1b52e890',
   *   default_shipping_term_id:
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *   name: 'Acme Inc.',
   *   ship_to_address: {
   *     name: 'Acme Inc.',
   *     street_line_1: '123 Main St',
   *     locality: 'New York',
   *     state: 'NY',
   *     postal_code: '10001',
   *     country: 'US',
   *   },
   *   note: 'Key enterprise account',
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
   * @example
   * ```ts
   * const customer = await client.sales.customers.retrieve(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
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
   * Partially updates a customer account. When a Stripe integration is active,
   * customer changes are synced to Stripe.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.update(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   *   {
   *     default_carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *     freight_policy: 'billed_freight',
   *     name: 'Acme Corp Updated',
   *     note: 'Updated account notes',
   *   },
   * );
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
   * Deletes a customer and associated account relations, addresses, and account
   * users.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.delete(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CustomerDeleteResponse> {
    return this._client.delete(path`/v1/sales/customers/${id}`, options);
  }

  /**
   * Registers a customer through a registration flow.
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
   * Returns the most frequently ordered products for a customer based on historical
   * sales order data.
   *
   * @example
   * ```ts
   * const listFrequentlyOrderedProduct =
   *   await client.sales.customers.retrieveFrequentlyOrderedProducts(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *   );
   * ```
   */
  retrieveFrequentlyOrderedProducts(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ListFrequentlyOrderedProduct> {
    return this._client.get(path`/v1/sales/customers/${id}/frequently-ordered-products`, options);
  }
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
   *
   * - `commission_exempt`: no commission applies.
   * - `commission_applied`: commission applies; if the account group is within a
   *   sales rep's territory, it will be assigned to that rep unless overridden.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Free-form description of the account group.
   *
   * Optional; `null` when not set.
   */
  description: string | null;

  /**
   * Freight policy.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
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
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create an address.
 */
export interface AddressInput {
  /**
   * Two-letter country code.
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
   * Address type.
   */
  type?: 'standard' | 'drop_ship';
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
   * Your account number with this carrier, used for rating and billing.
   */
  account_number: string | null;

  /**
   * Well-known carrier identifier.
   *
   * Null for custom carriers without a recognized code.
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
   * Whether this carrier is shown to customers in the customer portal.
   *
   * - `visible`: customers can see and select this carrier.
   * - `hidden`: the carrier is concealed from the customer portal.
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
  owner: APIKeysAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
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
   * Request to create an address.
   */
  bill_to_address: AddressInput;

  /**
   * Customer type group ID.
   */
  customer_type_group_id: string;

  /**
   * Default carrier ID.
   */
  default_carrier_id: string;

  /**
   * Default payment term ID.
   */
  default_payment_term_id: string;

  /**
   * Default shipping term ID.
   */
  default_shipping_term_id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Request to create an address.
   */
  ship_to_address: AddressInput;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account?: string;

  /**
   * Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  credit_limit?: QuantityInput;

  /**
   * Price group IDs.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string;

  /**
   * Default service level ID.
   */
  default_service_level_id?: string;

  /**
   * EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address.
   */
  email?: string;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Note.
   */
  note?: string;

  /**
   * Customer number. Auto-generated if omitted.
   */
  number?: string;

  /**
   * Phone number.
   */
  phone?: string;

  /**
   * Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL.
   */
  url?: string;
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
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  child_accounts: ListCustomer | null;

  /**
   * Commission policy applied to this customer's orders.
   *
   * - `commission_applied`: commission applies to orders.
   * - `commission_exempt`: no commission applies.
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
   * Value with an associated unit.
   */
  credit_limit: AccountUsersAPI.Quantity | null;

  /**
   * Customer default configuration.
   */
  defaults: CustomerDefaults | null;

  /**
   * Whether EDI (Electronic Data Interchange) is enabled for this customer.
   *
   * - `enabled`: EDI is enabled.
   * - `disabled`: EDI is disabled.
   */
  edi_status: 'enabled' | 'disabled';

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: CustomerFreightPreferences | null;

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
  notification_preferences: CustomerNotificationPreferences | null;

  /**
   * Human-readable customer number used to identify the account, distinct from the
   * `id`.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';

  /**
   * Customer account.
   */
  parent_account: Customer | null;

  /**
   * List represents a paginated list of resources.
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
   * Address with associated geolocation.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * Account status code, controlling whether the customer can transact.
   *
   * - `normal`: standard active account with no restrictions.
   * - `preferred`: active account flagged as preferred.
   * - `hold_shipment`: orders can be placed, but shipments are held.
   * - `hold_all`: all activity is on hold.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Account group resource.
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
  payment_term: PaymentTerm | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: Priority | null;

  /**
   * Account user with role and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable user
   * sub-resource.
   */
  sales_rep: AccountUsersAPI.AccountUser | null;

  /**
   * ShippingTerm resource.
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
   * Carrier resource.
   */
  carrier: Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_freight_preferences';

  /**
   * Shipping service level for a carrier.
   */
  service_level: ServiceLevel | null;

  /**
   * Freight policy applied to this customer's orders.
   *
   * - `free_freight`: the customer is not billed for freight.
   * - `billed_freight`: freight is billed to the customer, unless overridden
   *   elsewhere.
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
 * Product frequently ordered by a customer.
 */
export interface FrequentlyOrderedProduct {
  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'frequently_ordered_product';

  /**
   * Number of times ordered.
   */
  order_count: number;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
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
  owner: APIKeysAPI.Owner | null;

  /**
   * Payment term status.
   *
   * - `active`: the term is available for assignment to customers and invoices.
   * - `inactive`: the term is retained for historical records but cannot be
   *   assigned.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
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
   * Machine-readable code identifying the priority level.
   *
   * - `low`: lowest urgency; worked after normal and high.
   * - `normal`: default urgency for most orders and picks.
   * - `high`: highest urgency; worked ahead of normal and low.
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
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * QuantityInput represents a value with an associated unit for create/update
 * requests.
 */
export interface QuantityInput {
  /**
   * The unit ID for the value.
   */
  unit_id: string;

  /**
   * The decimal value.
   */
  value: string;
}

/**
 * Request to register a new or existing customer.
 */
export interface RegisterCustomerRequest {
  /**
   * Account slug.
   */
  account_slug: string;

  /**
   * Whether the registrant is an existing customer.
   */
  is_existing_customer: boolean;

  /**
   * Request to create an address.
   */
  address?: AddressInput;

  /**
   * Customer group ID.
   */
  customer_group_id?: string;

  /**
   * Customer name.
   */
  customer_name?: string;

  /**
   * Customer number, if registering as an existing customer.
   */
  customer_number?: string;

  /**
   * Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Phone number.
   */
  phone?: string;

  /**
   * Shipping term ID.
   */
  shipping_term_id?: string;
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
   * Whether this service level is shown to customers in the customer portal.
   *
   * - `visible`: customers can see and select this service level.
   * - `hidden`: the service level is concealed from the customer portal.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Whether this is the carrier's default service level, pre-selected when the
   * carrier is chosen.
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
  owner: APIKeysAPI.Owner | null;

  /**
   * Carrier-specific code identifying this service level (e.g. `fedex_ground`,
   * `ups_next_day_air`).
   *
   * Values are carrier-defined, so any non-empty string is accepted.
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
  flat_rate: AccountUsersAPI.Quantity | null;

  /**
   * List represents a paginated list of resources.
   */
  free_shipping_service_levels: ListServiceLevel | null;

  /**
   * Value with an associated unit.
   */
  minimum_order_value: AccountUsersAPI.Quantity | null;

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
  owner: APIKeysAPI.Owner | null;

  /**
   * Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: no shipping cost to the buyer.
   * - `flat_rate_freight`: a fixed shipping cost regardless of order details (see
   *   `flat_rate`).
   * - `carrier_rate_freight`: shipping cost is determined by the carrier's quoted
   *   rate.
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
   * Bill-to address ID.
   */
  bill_to_address_id?: string | null;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account?: string | null;

  /**
   * Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  credit_limit?: QuantityInput | null;

  /**
   * Price group IDs. Replaces all existing price groups when provided.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Customer type group ID.
   */
  customer_type_group_id?: string;

  /**
   * Default carrier ID.
   */
  default_carrier_id?: string;

  /**
   * Default payment term ID.
   */
  default_payment_term_id?: string;

  /**
   * Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string | null;

  /**
   * Default service level ID.
   */
  default_service_level_id?: string | null;

  /**
   * Default shipping term ID.
   */
  default_shipping_term_id?: string;

  /**
   * EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Email address. Send null to clear.
   */
  email?: string | null;

  /**
   * Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Customer name.
   */
  name?: string;

  /**
   * Note.
   */
  note?: string | null;

  /**
   * Customer number.
   */
  number?: string;

  /**
   * Phone number. Send null to clear.
   */
  phone?: string | null;

  /**
   * Ship-to address ID.
   */
  ship_to_address_id?: string | null;

  /**
   * Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Website URL. Send null to clear.
   */
  url?: string | null;
}

export interface CustomerDeleteResponse {}

export interface CustomerRegistrationResponse {}

export interface CustomerCreateParams {
  /**
   * Body param: Request to create an address.
   */
  bill_to_address: AddressInput;

  /**
   * Body param: Customer type group ID.
   */
  customer_type_group_id: string;

  /**
   * Body param: Default carrier ID.
   */
  default_carrier_id: string;

  /**
   * Body param: Default payment term ID.
   */
  default_payment_term_id: string;

  /**
   * Body param: Default shipping term ID.
   */
  default_shipping_term_id: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Request to create an address.
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
  >;

  /**
   * Body param: Carrier billing account number.
   */
  carrier_billing_account?: string;

  /**
   * Body param: Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  credit_limit?: QuantityInput;

  /**
   * Body param: Price group IDs.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string;

  /**
   * Body param: Default service level ID.
   */
  default_service_level_id?: string;

  /**
   * Body param: EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address.
   */
  email?: string;

  /**
   * Body param: Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Note.
   */
  note?: string;

  /**
   * Body param: Customer number. Auto-generated if omitted.
   */
  number?: string;

  /**
   * Body param: Phone number.
   */
  phone?: string;

  /**
   * Body param: Account status code.
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
  >;

  /**
   * Body param: Bill-to address ID.
   */
  bill_to_address_id?: string | null;

  /**
   * Body param: Carrier billing account number.
   */
  carrier_billing_account?: string | null;

  /**
   * Body param: Carrier billing type.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Commission policy.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  credit_limit?: QuantityInput | null;

  /**
   * Body param: Price group IDs. Replaces all existing price groups when provided.
   */
  customer_price_group_ids?: Array<string>;

  /**
   * Body param: Customer type group ID.
   */
  customer_type_group_id?: string;

  /**
   * Body param: Default carrier ID.
   */
  default_carrier_id?: string;

  /**
   * Body param: Default payment term ID.
   */
  default_payment_term_id?: string;

  /**
   * Body param: Default priority code.
   */
  default_priority?: 'low' | 'normal' | 'high';

  /**
   * Body param: The ID of the account user to assign as the default sales rep.
   */
  default_sales_rep_id?: string | null;

  /**
   * Body param: Default service level ID.
   */
  default_service_level_id?: string | null;

  /**
   * Body param: Default shipping term ID.
   */
  default_shipping_term_id?: string;

  /**
   * Body param: EDI status.
   */
  edi_status?: 'enabled' | 'disabled';

  /**
   * Body param: Email address. Send null to clear.
   */
  email?: string | null;

  /**
   * Body param: Freight policy.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Customer name.
   */
  name?: string;

  /**
   * Body param: Note.
   */
  note?: string | null;

  /**
   * Body param: Customer number.
   */
  number?: string;

  /**
   * Body param: Phone number. Send null to clear.
   */
  phone?: string | null;

  /**
   * Body param: Ship-to address ID.
   */
  ship_to_address_id?: string | null;

  /**
   * Body param: Account status code.
   */
  status?: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Body param: Website URL. Send null to clear.
   */
  url?: string | null;
}

export interface CustomerListParams {
  /**
   * Filter by carrier IDs.
   */
  carrier_ids?: Array<string>;

  /**
   * Filter by city.
   */
  city?: string;

  /**
   * Filter by commission status codes.
   */
  commission_status_codes?: Array<'commission_applied' | 'commission_exempt'>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by end date (created before).
   */
  end_date?: string;

  /**
   * Filter by freight status codes.
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
  >;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by whether the customer has child accounts.
   */
  parent_account_status?: 'parent' | 'non_parent';

  /**
   * Filter by payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Filter by postal code.
   */
  postal_code?: string;

  /**
   * Filter by pricing group IDs.
   */
  pricing_group_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by sales rep IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by service level IDs.
   */
  service_level_ids?: Array<string>;

  /**
   * Filter by shipping term IDs.
   */
  shipping_term_ids?: Array<string>;

  /**
   * Filter by start date (created after).
   */
  start_date?: string;

  /**
   * Filter by state.
   */
  state?: string;

  /**
   * Filter by status codes.
   */
  status_codes?: Array<'normal' | 'preferred' | 'hold_shipment' | 'hold_all'>;
}

export interface CustomerRegistrationParams {
  /**
   * Account slug.
   */
  account_slug: string;

  /**
   * Whether the registrant is an existing customer.
   */
  is_existing_customer: boolean;

  /**
   * Request to create an address.
   */
  address?: AddressInput;

  /**
   * Customer group ID.
   */
  customer_group_id?: string;

  /**
   * Customer name.
   */
  customer_name?: string;

  /**
   * Customer number, if registering as an existing customer.
   */
  customer_number?: string;

  /**
   * Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Phone number.
   */
  phone?: string;

  /**
   * Shipping term ID.
   */
  shipping_term_id?: string;
}

Customers.Actions = Actions;

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
}
