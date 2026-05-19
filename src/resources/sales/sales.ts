// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroup,
  AccountGroupAccountGroupsParams,
  AccountGroupDeleteResponse,
  AccountGroupRetrieveAccountGroupsParams,
  AccountGroupUpdateParams,
  AccountGroups,
  ListAccountGroup,
} from './account-groups';
import * as AccountPricesAPI from './account-prices';
import {
  AccountPrice,
  AccountPriceAccountPricesParams,
  AccountPriceDeleteResponse,
  AccountPriceRetrieveAccountPricesParams,
  AccountPriceRetrieveAccountPricesResponse,
  AccountPriceRetrieveParams,
  AccountPriceUpdateParams,
  AccountPrices,
} from './account-prices';
import * as AccountStatusesAPI from './account-statuses';
import {
  AccountStatus,
  AccountStatusRetrieveAccountStatusesParams,
  AccountStatusRetrieveAccountStatusesResponse,
  AccountStatusRetrieveParams,
  AccountStatuses,
} from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  Address,
  AddressCreateParams,
  AddressDeleteResponse,
  AddressInput,
  AddressListParams,
  AddressListResponse,
  AddressUpdateParams,
  Addresses,
} from './addresses';
import * as PrioritiesAPI from './priorities';
import {
  Priorities,
  Priority,
  PriorityListParams,
  PriorityListResponse,
  PriorityRetrieveParams,
} from './priorities';
import * as RegistrationFlowsAPI from './registration-flows';
import {
  ListRegistrationFlowOption,
  RegistrationFlow,
  RegistrationFlowDeleteResponse,
  RegistrationFlowRegistrationFlowsParams,
  RegistrationFlowRetrieveRegistrationFlowsParams,
  RegistrationFlowRetrieveRegistrationFlowsResponse,
  RegistrationFlowUpdateParams,
  RegistrationFlows,
} from './registration-flows';
import * as VolumeDiscountsAPI from './volume-discounts';
import {
  VolumeDiscount,
  VolumeDiscountDeleteResponse,
  VolumeDiscountRetrieveParams,
  VolumeDiscountRetrieveVolumeDiscountsParams,
  VolumeDiscountRetrieveVolumeDiscountsResponse,
  VolumeDiscountUpdateParams,
  VolumeDiscountVolumeDiscountsParams,
  VolumeDiscounts,
} from './volume-discounts';
import * as AccountUsersAPI from './account-users/account-users';
import { AccountUsers } from './account-users/account-users';
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';
import * as CustomersAPI from './customers/customers';
import {
  Customer,
  CustomerCreateParams,
  CustomerDeleteResponse,
  CustomerListParams,
  CustomerRegistrationParams,
  CustomerRegistrationResponse,
  CustomerRetrieveFrequentlyOrderedProductsResponse,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  Customers,
  ListCustomer,
} from './customers/customers';
import * as OrderDiscountsAPI from './order-discounts/order-discounts';
import {
  OrderDiscount,
  OrderDiscountOrderDiscountsParams,
  OrderDiscountRetrieveOrderDiscountsParams,
  OrderDiscountRetrieveOrderDiscountsResponse,
  OrderDiscountUpdateParams,
  OrderDiscounts,
} from './order-discounts/order-discounts';
import * as ProductLineAccessAPI from './product-line-access/product-line-access';
import { ProductLineAccess } from './product-line-access/product-line-access';
import * as SalesOrdersAPI from './sales-orders/sales-orders';
import {
  SalesOrderCheckoutParams,
  SalesOrderCheckoutResponse,
  SalesOrderDeleteResponse,
  SalesOrderDetail,
  SalesOrderEmailContactInput,
  SalesOrderRetrieveParams,
  SalesOrderRetrieveSalesOrdersParams,
  SalesOrderRetrieveSalesOrdersResponse,
  SalesOrderRetrieveStatusesParams,
  SalesOrderSalesOrdersParams,
  SalesOrderUpdateParams,
  SalesOrders,
} from './sales-orders/sales-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Create customer checkout sessions.
 */
export class Sales extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  accountPrices: AccountPricesAPI.AccountPrices = new AccountPricesAPI.AccountPrices(this._client);
  accountStatuses: AccountStatusesAPI.AccountStatuses = new AccountStatusesAPI.AccountStatuses(this._client);
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  orderDiscounts: OrderDiscountsAPI.OrderDiscounts = new OrderDiscountsAPI.OrderDiscounts(this._client);
  priorities: PrioritiesAPI.Priorities = new PrioritiesAPI.Priorities(this._client);
  productLineAccess: ProductLineAccessAPI.ProductLineAccess = new ProductLineAccessAPI.ProductLineAccess(
    this._client,
  );
  registrationFlows: RegistrationFlowsAPI.RegistrationFlows = new RegistrationFlowsAPI.RegistrationFlows(
    this._client,
  );
  salesOrders: SalesOrdersAPI.SalesOrders = new SalesOrdersAPI.SalesOrders(this._client);
  volumeDiscounts: VolumeDiscountsAPI.VolumeDiscounts = new VolumeDiscountsAPI.VolumeDiscounts(this._client);

  /**
   * Creates an embedded Stripe checkout session for a customer actor and returns a
   * client secret for use with Stripe.js.
   *
   * @example
   * ```ts
   * const response = await client.sales.checkoutSessions({
   *   order_id: 'order_id',
   *   order_number: 'order_number',
   *   order_total_cents: 0,
   * });
   * ```
   */
  checkoutSessions(
    body: SaleCheckoutSessionsParams,
    options?: RequestOptions,
  ): APIPromise<SaleCheckoutSessionsResponse> {
    return this._client.post('/v1/sales/checkout-sessions', { body, ...options });
  }
}

/**
 * Result of creating a customer checkout session.
 */
export interface SaleCheckoutSessionsResponse {
  /**
   * Stripe checkout session client secret for embedded checkout.
   */
  checkout_session_client_secret: string;

  /**
   * Resource type identifier.
   */
  object: 'checkout_session';
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

Sales.AccountGroups = AccountGroups;
Sales.AccountPrices = AccountPrices;
Sales.AccountStatuses = AccountStatuses;
Sales.AccountUsers = AccountUsers;
Sales.Accounts = Accounts;
Sales.Addresses = Addresses;
Sales.Customers = Customers;
Sales.OrderDiscounts = OrderDiscounts;
Sales.Priorities = Priorities;
Sales.ProductLineAccess = ProductLineAccess;
Sales.RegistrationFlows = RegistrationFlows;
Sales.SalesOrders = SalesOrders;
Sales.VolumeDiscounts = VolumeDiscounts;

export declare namespace Sales {
  export {
    type SaleCheckoutSessionsResponse as SaleCheckoutSessionsResponse,
    type SaleCheckoutSessionsParams as SaleCheckoutSessionsParams,
  };

  export {
    AccountGroups as AccountGroups,
    type AccountGroup as AccountGroup,
    type ListAccountGroup as ListAccountGroup,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupAccountGroupsParams as AccountGroupAccountGroupsParams,
    type AccountGroupRetrieveAccountGroupsParams as AccountGroupRetrieveAccountGroupsParams,
  };

  export {
    AccountPrices as AccountPrices,
    type AccountPrice as AccountPrice,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceRetrieveAccountPricesResponse as AccountPriceRetrieveAccountPricesResponse,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceAccountPricesParams as AccountPriceAccountPricesParams,
    type AccountPriceRetrieveAccountPricesParams as AccountPriceRetrieveAccountPricesParams,
  };

  export {
    AccountStatuses as AccountStatuses,
    type AccountStatus as AccountStatus,
    type AccountStatusRetrieveAccountStatusesResponse as AccountStatusRetrieveAccountStatusesResponse,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
    type AccountStatusRetrieveAccountStatusesParams as AccountStatusRetrieveAccountStatusesParams,
  };

  export { AccountUsers as AccountUsers };

  export { Accounts as Accounts };

  export {
    Addresses as Addresses,
    type Address as Address,
    type AddressInput as AddressInput,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    Customers as Customers,
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
    OrderDiscounts as OrderDiscounts,
    type OrderDiscount as OrderDiscount,
    type OrderDiscountRetrieveOrderDiscountsResponse as OrderDiscountRetrieveOrderDiscountsResponse,
    type OrderDiscountUpdateParams as OrderDiscountUpdateParams,
    type OrderDiscountOrderDiscountsParams as OrderDiscountOrderDiscountsParams,
    type OrderDiscountRetrieveOrderDiscountsParams as OrderDiscountRetrieveOrderDiscountsParams,
  };

  export {
    Priorities as Priorities,
    type Priority as Priority,
    type PriorityListResponse as PriorityListResponse,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };

  export { ProductLineAccess as ProductLineAccess };

  export {
    RegistrationFlows as RegistrationFlows,
    type ListRegistrationFlowOption as ListRegistrationFlowOption,
    type RegistrationFlow as RegistrationFlow,
    type RegistrationFlowDeleteResponse as RegistrationFlowDeleteResponse,
    type RegistrationFlowRetrieveRegistrationFlowsResponse as RegistrationFlowRetrieveRegistrationFlowsResponse,
    type RegistrationFlowUpdateParams as RegistrationFlowUpdateParams,
    type RegistrationFlowRegistrationFlowsParams as RegistrationFlowRegistrationFlowsParams,
    type RegistrationFlowRetrieveRegistrationFlowsParams as RegistrationFlowRetrieveRegistrationFlowsParams,
  };

  export {
    SalesOrders as SalesOrders,
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderDeleteResponse as SalesOrderDeleteResponse,
    type SalesOrderCheckoutResponse as SalesOrderCheckoutResponse,
    type SalesOrderRetrieveSalesOrdersResponse as SalesOrderRetrieveSalesOrdersResponse,
    type SalesOrderRetrieveParams as SalesOrderRetrieveParams,
    type SalesOrderUpdateParams as SalesOrderUpdateParams,
    type SalesOrderCheckoutParams as SalesOrderCheckoutParams,
    type SalesOrderRetrieveSalesOrdersParams as SalesOrderRetrieveSalesOrdersParams,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
    type SalesOrderSalesOrdersParams as SalesOrderSalesOrdersParams,
  };

  export {
    VolumeDiscounts as VolumeDiscounts,
    type VolumeDiscount as VolumeDiscount,
    type VolumeDiscountDeleteResponse as VolumeDiscountDeleteResponse,
    type VolumeDiscountRetrieveVolumeDiscountsResponse as VolumeDiscountRetrieveVolumeDiscountsResponse,
    type VolumeDiscountRetrieveParams as VolumeDiscountRetrieveParams,
    type VolumeDiscountUpdateParams as VolumeDiscountUpdateParams,
    type VolumeDiscountRetrieveVolumeDiscountsParams as VolumeDiscountRetrieveVolumeDiscountsParams,
    type VolumeDiscountVolumeDiscountsParams as VolumeDiscountVolumeDiscountsParams,
  };
}
