// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroupCreateParams,
  AccountGroupDeleteResponse,
  AccountGroupListParams,
  AccountGroupUpdateParams,
  AccountGroups,
  CreateAccountGroupRequest,
  UpdateAccountGroupRequest,
} from './account-groups';
import * as AccountPricesAPI from './account-prices';
import {
  AccountPrice,
  AccountPriceCreateParams,
  AccountPriceDeleteResponse,
  AccountPriceListParams,
  AccountPriceRetrieveParams,
  AccountPriceUpdateParams,
  AccountPrices,
  CreateAccountPriceRequest,
  ListAccountPrice,
  ListItemCategory,
  ProductLine,
  UpdateAccountPriceRequest,
} from './account-prices';
import * as AccountStatusesAPI from './account-statuses';
import {
  AccountStatus,
  AccountStatusListParams,
  AccountStatusRetrieveParams,
  AccountStatuses,
  ListAccountStatus,
} from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  AddressCreateParams,
  AddressDeleteResponse,
  AddressListParams,
  AddressUpdateParams,
  Addresses,
  ListAddress,
  UpdateAddressRequest,
} from './addresses';
import * as PrioritiesAPI from './priorities';
import { ListPriority, Priorities, PriorityListParams, PriorityRetrieveParams } from './priorities';
import * as RegistrationFlowsAPI from './registration-flows';
import {
  CreateRegistrationFlowRequest,
  ListRegistrationFlow,
  ListRegistrationFlowOption,
  RegistrationFlow,
  RegistrationFlowCreateParams,
  RegistrationFlowDeleteResponse,
  RegistrationFlowListParams,
  RegistrationFlowOption,
  RegistrationFlowUpdateParams,
  RegistrationFlows,
  UpdateRegistrationFlowRequest,
} from './registration-flows';
import * as VolumeDiscountsAPI from './volume-discounts';
import {
  CreateVolumeDiscountRequest,
  CreateVolumeDiscountTierInput,
  ListUnit,
  ListVolumeDiscount,
  ListVolumeDiscountTier,
  UpdateVolumeDiscountRequest,
  UpdateVolumeDiscountTierInput,
  VolumeDiscount,
  VolumeDiscountCreateParams,
  VolumeDiscountDeleteResponse,
  VolumeDiscountListParams,
  VolumeDiscountRetrieveParams,
  VolumeDiscountTier,
  VolumeDiscountUpdateParams,
  VolumeDiscounts,
} from './volume-discounts';
import * as AccountUsersAPI from './account-users/account-users';
import { AccountUsers } from './account-users/account-users';
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';
import * as CustomersAPI from './customers/customers';
import {
  AccountGroup,
  AddressInput,
  Carrier,
  CreateCustomerRequest,
  Customer,
  CustomerContactInfo,
  CustomerCreateParams,
  CustomerDefaults,
  CustomerDeleteResponse,
  CustomerFreightPreferences,
  CustomerListParams,
  CustomerNotificationPreferences,
  CustomerRegistrationParams,
  CustomerRegistrationResponse,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  Customers,
  FrequentlyOrderedProduct,
  ListAccountGroup,
  ListCustomer,
  ListFrequentlyOrderedProduct,
  ListServiceLevel,
  PaymentTerm,
  Priority,
  QuantityInput,
  RegisterCustomerRequest,
  ServiceLevel,
  ShippingTerm,
  UpdateCustomerRequest,
} from './customers/customers';
import * as OrderDiscountsAPI from './order-discounts/order-discounts';
import {
  CreateOrderDiscountRequest,
  ListOrderDiscount,
  OrderDiscount,
  OrderDiscountCreateParams,
  OrderDiscountListParams,
  OrderDiscountUpdateParams,
  OrderDiscounts,
  UpdateOrderDiscountRequest,
} from './order-discounts/order-discounts';
import * as ProductLineAccessAPI from './product-line-access/product-line-access';
import { ProductLineAccess } from './product-line-access/product-line-access';
import * as SalesOrdersAPI from './sales-orders/sales-orders';
import {
  CheckoutSalesOrderRequest,
  CheckoutSalesOrderResponse,
  CreateSalesOrderLineInput,
  CreateSalesOrderRequest,
  Freight,
  ListRecord,
  ListSalesOrder,
  ListSalesOrderLine,
  ListSalesOrderStatus,
  OrderLineInput,
  Product,
  Record,
  SalesOrder,
  SalesOrderCheckoutParams,
  SalesOrderCreateParams,
  SalesOrderDeleteResponse,
  SalesOrderEmailContactInput,
  SalesOrderLine,
  SalesOrderListParams,
  SalesOrderRelated,
  SalesOrderRetrieveParams,
  SalesOrderRetrieveStatusesParams,
  SalesOrderStatus,
  SalesOrderTotals,
  SalesOrderUpdateParams,
  SalesOrders,
  UpdateSalesOrderRequest,
} from './sales-orders/sales-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Create customer checkout sessions.
 */
export class Sales extends APIResource {
  registrationFlows: RegistrationFlowsAPI.RegistrationFlows = new RegistrationFlowsAPI.RegistrationFlows(
    this._client,
  );
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  accountPrices: AccountPricesAPI.AccountPrices = new AccountPricesAPI.AccountPrices(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  accountStatuses: AccountStatusesAPI.AccountStatuses = new AccountStatusesAPI.AccountStatuses(this._client);
  productLineAccess: ProductLineAccessAPI.ProductLineAccess = new ProductLineAccessAPI.ProductLineAccess(
    this._client,
  );
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  priorities: PrioritiesAPI.Priorities = new PrioritiesAPI.Priorities(this._client);
  orderDiscounts: OrderDiscountsAPI.OrderDiscounts = new OrderDiscountsAPI.OrderDiscounts(this._client);
  salesOrders: SalesOrdersAPI.SalesOrders = new SalesOrdersAPI.SalesOrders(this._client);
  volumeDiscounts: VolumeDiscountsAPI.VolumeDiscounts = new VolumeDiscountsAPI.VolumeDiscounts(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);

  /**
   * Creates an embedded Stripe checkout session for a customer actor and returns a
   * client secret for use with Stripe.js.
   *
   * @example
   * ```ts
   * const checkoutSessionResponse =
   *   await client.sales.checkoutSessions({
   *     order_id: 'or_01d5034136c3ccc048abecc312',
   *     order_number: 'SO-001',
   *     order_total_cents: 50000,
   *     customer_po: 'PO-4242',
   *   });
   * ```
   */
  checkoutSessions(
    body: SaleCheckoutSessionsParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSessionResponse> {
    return this._client.post('/v1/sales/checkout-sessions', { body, ...options });
  }
}

/**
 * Result of creating a customer checkout session.
 */
export interface CheckoutSessionResponse {
  /**
   * Stripe checkout session client secret for embedded checkout.
   */
  checkout_session_client_secret: string;

  /**
   * Resource type identifier.
   */
  object: 'checkout_session';
}

/**
 * Request to create a customer checkout session.
 */
export interface CreateCheckoutSessionRequest {
  /**
   * Sales order ID.
   */
  order_id: string;

  /**
   * Order number for display.
   */
  order_number: string;

  /**
   * Order total in cents.
   */
  order_total_cents: number;

  /**
   * Customer PO number.
   */
  customer_po?: string;
}

export interface SaleCheckoutSessionsParams {
  /**
   * Sales order ID.
   */
  order_id: string;

  /**
   * Order number for display.
   */
  order_number: string;

  /**
   * Order total in cents.
   */
  order_total_cents: number;

  /**
   * Customer PO number.
   */
  customer_po?: string;
}

Sales.RegistrationFlows = RegistrationFlows;
Sales.Customers = Customers;
Sales.AccountGroups = AccountGroups;
Sales.AccountPrices = AccountPrices;
Sales.Addresses = Addresses;
Sales.AccountStatuses = AccountStatuses;
Sales.ProductLineAccess = ProductLineAccess;
Sales.AccountUsers = AccountUsers;
Sales.Priorities = Priorities;
Sales.OrderDiscounts = OrderDiscounts;
Sales.SalesOrders = SalesOrders;
Sales.VolumeDiscounts = VolumeDiscounts;
Sales.Accounts = Accounts;

export declare namespace Sales {
  export {
    type CheckoutSessionResponse as CheckoutSessionResponse,
    type CreateCheckoutSessionRequest as CreateCheckoutSessionRequest,
    type SaleCheckoutSessionsParams as SaleCheckoutSessionsParams,
  };

  export {
    RegistrationFlows as RegistrationFlows,
    type CreateRegistrationFlowRequest as CreateRegistrationFlowRequest,
    type ListRegistrationFlow as ListRegistrationFlow,
    type ListRegistrationFlowOption as ListRegistrationFlowOption,
    type RegistrationFlow as RegistrationFlow,
    type RegistrationFlowOption as RegistrationFlowOption,
    type UpdateRegistrationFlowRequest as UpdateRegistrationFlowRequest,
    type RegistrationFlowDeleteResponse as RegistrationFlowDeleteResponse,
    type RegistrationFlowCreateParams as RegistrationFlowCreateParams,
    type RegistrationFlowUpdateParams as RegistrationFlowUpdateParams,
    type RegistrationFlowListParams as RegistrationFlowListParams,
  };

  export {
    Customers as Customers,
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
    AccountGroups as AccountGroups,
    type CreateAccountGroupRequest as CreateAccountGroupRequest,
    type UpdateAccountGroupRequest as UpdateAccountGroupRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };

  export {
    AccountPrices as AccountPrices,
    type AccountPrice as AccountPrice,
    type CreateAccountPriceRequest as CreateAccountPriceRequest,
    type ListAccountPrice as ListAccountPrice,
    type ListItemCategory as ListItemCategory,
    type ProductLine as ProductLine,
    type UpdateAccountPriceRequest as UpdateAccountPriceRequest,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceCreateParams as AccountPriceCreateParams,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceListParams as AccountPriceListParams,
  };

  export {
    Addresses as Addresses,
    type ListAddress as ListAddress,
    type UpdateAddressRequest as UpdateAddressRequest,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    AccountStatuses as AccountStatuses,
    type AccountStatus as AccountStatus,
    type ListAccountStatus as ListAccountStatus,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
    type AccountStatusListParams as AccountStatusListParams,
  };

  export { ProductLineAccess as ProductLineAccess };

  export { AccountUsers as AccountUsers };

  export {
    Priorities as Priorities,
    type ListPriority as ListPriority,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };

  export {
    OrderDiscounts as OrderDiscounts,
    type CreateOrderDiscountRequest as CreateOrderDiscountRequest,
    type ListOrderDiscount as ListOrderDiscount,
    type OrderDiscount as OrderDiscount,
    type UpdateOrderDiscountRequest as UpdateOrderDiscountRequest,
    type OrderDiscountCreateParams as OrderDiscountCreateParams,
    type OrderDiscountUpdateParams as OrderDiscountUpdateParams,
    type OrderDiscountListParams as OrderDiscountListParams,
  };

  export {
    SalesOrders as SalesOrders,
    type CheckoutSalesOrderRequest as CheckoutSalesOrderRequest,
    type CheckoutSalesOrderResponse as CheckoutSalesOrderResponse,
    type CreateSalesOrderLineInput as CreateSalesOrderLineInput,
    type CreateSalesOrderRequest as CreateSalesOrderRequest,
    type Freight as Freight,
    type ListRecord as ListRecord,
    type ListSalesOrder as ListSalesOrder,
    type ListSalesOrderLine as ListSalesOrderLine,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type OrderLineInput as OrderLineInput,
    type Product as Product,
    type Record as Record,
    type SalesOrder as SalesOrder,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderLine as SalesOrderLine,
    type SalesOrderRelated as SalesOrderRelated,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderTotals as SalesOrderTotals,
    type UpdateSalesOrderRequest as UpdateSalesOrderRequest,
    type SalesOrderDeleteResponse as SalesOrderDeleteResponse,
    type SalesOrderCreateParams as SalesOrderCreateParams,
    type SalesOrderRetrieveParams as SalesOrderRetrieveParams,
    type SalesOrderUpdateParams as SalesOrderUpdateParams,
    type SalesOrderListParams as SalesOrderListParams,
    type SalesOrderCheckoutParams as SalesOrderCheckoutParams,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
  };

  export {
    VolumeDiscounts as VolumeDiscounts,
    type CreateVolumeDiscountRequest as CreateVolumeDiscountRequest,
    type CreateVolumeDiscountTierInput as CreateVolumeDiscountTierInput,
    type ListUnit as ListUnit,
    type ListVolumeDiscount as ListVolumeDiscount,
    type ListVolumeDiscountTier as ListVolumeDiscountTier,
    type UpdateVolumeDiscountRequest as UpdateVolumeDiscountRequest,
    type UpdateVolumeDiscountTierInput as UpdateVolumeDiscountTierInput,
    type VolumeDiscount as VolumeDiscount,
    type VolumeDiscountTier as VolumeDiscountTier,
    type VolumeDiscountDeleteResponse as VolumeDiscountDeleteResponse,
    type VolumeDiscountCreateParams as VolumeDiscountCreateParams,
    type VolumeDiscountRetrieveParams as VolumeDiscountRetrieveParams,
    type VolumeDiscountUpdateParams as VolumeDiscountUpdateParams,
    type VolumeDiscountListParams as VolumeDiscountListParams,
  };

  export { Accounts as Accounts };
}
