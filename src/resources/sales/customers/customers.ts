// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as PaymentTermsAPI from '../../finance/payment-terms';
import * as ShippingTermsAPI from '../../operations/shipping-terms';
import * as AccountGroupsAPI from '../account-groups';
import * as AddressesAPI from '../addresses';
import * as PrioritiesAPI from '../priorities';
import * as ItemsAPI from '../../catalog/items/items';
import * as UnitsAPI from '../../catalog/units/units';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as BatchesAPI from '../../operations/batches/batches';
import * as CarriersAPI from '../../operations/carriers/carriers';
import * as ServiceLevelsAPI from '../../operations/carriers/service-levels';
import * as ActionsAPI from './actions';
import { ActionBulkDeleteParams, ActionBulkDeleteResponse, ActionMergeParams, Actions } from './actions';
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
   *     type: null,
   *     country: 'US',
   *   },
   *   customer_type_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
   *   default_carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   default_payment_term_id:
   *     'pytm_01jm4r6700f8nwq3v5hx2d9ktp',
   *   default_shipping_term_id:
   *     'shtm_01jm4r6700f8nwq3v5hx2d9ktp',
   *   name: 'Acme Inc.',
   *   ship_to_address: {
   *     name: 'Acme Inc.',
   *     type: null,
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
   *   'ac_01gf7a8200er3ar3pkfrb6kk29',
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
   *   'ac_01gf7a8200er3ar3pkfrb6kk29',
   *   {
   *     default_carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *     freight_policy: 'billed_freight',
   *     name: 'Acme Corp Updated',
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
   *   'ac_01gf7a8200er3ar3pkfrb6kk29',
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
   *     type: null,
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
   * const response =
   *   await client.sales.customers.retrieveFrequentlyOrderedProducts(
   *     'ac_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  retrieveFrequentlyOrderedProducts(
    id: string,
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveFrequentlyOrderedProductsResponse> {
    return this._client.get(path`/v1/sales/customers/${id}/frequently-ordered-products`, options);
  }
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
  bill_to_address: AddressesAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  child_accounts: ListCustomer | null;

  /**
   * Commission policy.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Customer contact information.
   */
  contact_info: Customer.ContactInfo | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  credit_limit: BatchesAPI.Quantity | null;

  /**
   * Customer default configuration.
   */
  defaults: Customer.Defaults | null;

  /**
   * EDI status.
   */
  edi_status: 'enabled' | 'disabled';

  /**
   * Customer freight and carrier settings.
   */
  freight_preferences: Customer.FreightPreferences | null;

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
  notification_preferences: Customer.NotificationPreferences | null;

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
  parent_account: Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  price_groups: AccountGroupsAPI.ListAccountGroup | null;

  /**
   * Customer relationship type.
   */
  relationship_type: 'standalone' | 'parent' | 'child';

  /**
   * Address with associated geolocation.
   */
  ship_to_address: AddressesAPI.Address | null;

  /**
   * Account status code.
   */
  status: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Account group resource.
   */
  type: AccountGroupsAPI.AccountGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace Customer {
  /**
   * Customer contact information.
   */
  export interface ContactInfo {
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
  export interface Defaults {
    /**
     * Resource type identifier.
     */
    object: 'customer_defaults';

    /**
     * Payment term resource.
     */
    payment_term: PaymentTermsAPI.PaymentTerm | null;

    /**
     * Priority level used by sales orders and picks.
     */
    priority: PrioritiesAPI.Priority | null;

    /**
     * Account user with profile, role, and department.
     */
    sales_rep: AccountUsersAPI.AccountUser | null;

    /**
     * ShippingTerm resource.
     */
    shipping_term: ShippingTermsAPI.ShippingTerm | null;
  }

  /**
   * Customer freight and carrier settings.
   */
  export interface FreightPreferences {
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
    carrier: CarriersAPI.Carrier | null;

    /**
     * Resource type identifier.
     */
    object: 'customer_freight_preferences';

    /**
     * Shipping service level for a carrier.
     */
    service_level: ServiceLevelsAPI.ServiceLevel | null;

    /**
     * Freight policy.
     */
    status: 'free_freight' | 'billed_freight';
  }

  /**
   * Customer notification settings.
   */
  export interface NotificationPreferences {
    /**
     * Whether invoice emails are accepted.
     */
    accepts_invoice_emails: boolean;

    /**
     * Resource type identifier.
     */
    object: 'customer_notification_preferences';
  }
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
  page_info: AgentsAPI.PageInfo;
}

export interface CustomerDeleteResponse {}

export interface CustomerRegistrationResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface CustomerRetrieveFrequentlyOrderedProductsResponse {
  /**
   * Resources in this page.
   */
  data: Array<CustomerRetrieveFrequentlyOrderedProductsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace CustomerRetrieveFrequentlyOrderedProductsResponse {
  /**
   * Product frequently ordered by a customer.
   */
  export interface Data {
    /**
     * Item is an inventory item (product, material, or part).
     */
    item: ItemsAPI.Item | null;

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
    unit: UnitsAPI.Unit | null;
  }
}

export interface CustomerCreateParams {
  /**
   * Body param: Request to create an address.
   */
  bill_to_address: AddressesAPI.AddressInput;

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
  ship_to_address: AddressesAPI.AddressInput;

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
  credit_limit?: ShippingTermsAPI.QuantityInput;

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
  credit_limit?: ShippingTermsAPI.QuantityInput | null;

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
  address?: AddressesAPI.AddressInput;

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
    type Customer as Customer,
    type ListCustomer as ListCustomer,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerRegistrationResponse as CustomerRegistrationResponse,
    type CustomerRetrieveFrequentlyOrderedProductsResponse as CustomerRetrieveFrequentlyOrderedProductsResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerRegistrationParams as CustomerRegistrationParams,
  };

  export {
    Actions as Actions,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionMergeParams as ActionMergeParams,
  };
}
