// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroup,
  AccountGroupCreateParams,
  AccountGroupDeleteResponse,
  AccountGroupListParams,
  AccountGroupUpdateParams,
  AccountGroups,
  CreateAccountGroupRequest,
  ListAccountGroup,
  PageInfo,
  UpdateAccountGroupRequest,
} from './account-groups';
import * as AccountPricesAPI from './account-prices';
import {
  Account,
  AccountBranding,
  AccountGroup as AccountPricesAPIAccountGroup,
  AccountPortal,
  AccountPrice,
  AccountPriceCreateParams,
  AccountPriceDeleteResponse,
  AccountPriceListParams,
  AccountPriceRetrieveParams,
  AccountPriceUpdateParams,
  AccountPrices,
  AccountUser,
  Address,
  Attribute,
  Carrier,
  Consumption,
  CreateAccountPriceRequest,
  Customer,
  CustomerContactInfo,
  CustomerDefaults,
  CustomerFreightPreferences,
  CustomerNotificationPreferences,
  Department,
  Geolocation,
  Item,
  ItemCategory,
  ListAccountGroup as AccountPricesAPIListAccountGroup,
  ListAccountPrice,
  ListAttribute,
  ListConsumption,
  ListCustomer,
  ListItemCategory,
  ListLocation,
  ListMachine,
  ListProductionStep,
  ListProperty,
  ListScanningStation,
  ListServiceLevel,
  ListUnitGroupUnit,
  Location,
  Machine,
  Owner,
  PageInfo as AccountPricesAPIPageInfo,
  PaymentTerm,
  Priority,
  ProductLine,
  ProductionOutput,
  ProductionStep,
  Property,
  Quantity,
  Rate,
  Role,
  ScanningStation,
  ServiceLevel,
  ShippingTerm,
  Unit,
  UnitGroup,
  UnitGroupUnit,
  UpdateAccountPriceRequest,
} from './account-prices';
import * as AccountStatusesAPI from './account-statuses';
import {
  Account as AccountStatusesAPIAccount,
  AccountBranding as AccountStatusesAPIAccountBranding,
  AccountPortal as AccountStatusesAPIAccountPortal,
  AccountStatus,
  AccountStatusListParams,
  AccountStatusRetrieveParams,
  AccountStatuses,
  Address as AccountStatusesAPIAddress,
  Geolocation as AccountStatusesAPIGeolocation,
  ListAccountStatus,
  Owner as AccountStatusesAPIOwner,
  PageInfo as AccountStatusesAPIPageInfo,
} from './account-statuses';
import * as AddressesAPI from './addresses';
import {
  Address as AddressesAPIAddress,
  AddressCreateParams,
  AddressDeleteResponse,
  AddressInput,
  AddressListParams,
  AddressUpdateParams,
  Addresses,
  Geolocation as AddressesAPIGeolocation,
  ListAddress,
  PageInfo as AddressesAPIPageInfo,
  UpdateAddressRequest,
} from './addresses';
import * as PrioritiesAPI from './priorities';
import {
  Account as PrioritiesAPIAccount,
  AccountBranding as PrioritiesAPIAccountBranding,
  AccountPortal as PrioritiesAPIAccountPortal,
  Address as PrioritiesAPIAddress,
  Geolocation as PrioritiesAPIGeolocation,
  ListPriority,
  Owner as PrioritiesAPIOwner,
  PageInfo as PrioritiesAPIPageInfo,
  Priorities,
  Priority as PrioritiesAPIPriority,
  PriorityListParams,
  PriorityRetrieveParams,
} from './priorities';
import * as RegistrationFlowsAPI from './registration-flows';
import {
  CreateRegistrationFlowRequest,
  ListRegistrationFlow,
  ListRegistrationFlowOption,
  PageInfo as RegistrationFlowsAPIPageInfo,
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
  Account as VolumeDiscountsAPIAccount,
  AccountBranding as VolumeDiscountsAPIAccountBranding,
  AccountGroup as VolumeDiscountsAPIAccountGroup,
  AccountPortal as VolumeDiscountsAPIAccountPortal,
  Address as VolumeDiscountsAPIAddress,
  Attribute as VolumeDiscountsAPIAttribute,
  CreateVolumeDiscountRequest,
  CreateVolumeDiscountTierInput,
  Geolocation as VolumeDiscountsAPIGeolocation,
  ItemCategory as VolumeDiscountsAPIItemCategory,
  ListAccountGroup as VolumeDiscountsAPIListAccountGroup,
  ListAttribute as VolumeDiscountsAPIListAttribute,
  ListItemCategory as VolumeDiscountsAPIListItemCategory,
  ListProductLine,
  ListProperty as VolumeDiscountsAPIListProperty,
  ListUnit,
  ListUnitGroupUnit as VolumeDiscountsAPIListUnitGroupUnit,
  ListVolumeDiscount,
  ListVolumeDiscountTier,
  Owner as VolumeDiscountsAPIOwner,
  PageInfo as VolumeDiscountsAPIPageInfo,
  ProductLine as VolumeDiscountsAPIProductLine,
  Property as VolumeDiscountsAPIProperty,
  Unit as VolumeDiscountsAPIUnit,
  UnitGroup as VolumeDiscountsAPIUnitGroup,
  UnitGroupUnit as VolumeDiscountsAPIUnitGroupUnit,
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
  Account as CustomersAPIAccount,
  AccountBranding as CustomersAPIAccountBranding,
  AccountGroup as CustomersAPIAccountGroup,
  AccountPortal as CustomersAPIAccountPortal,
  AccountUser as CustomersAPIAccountUser,
  Address as CustomersAPIAddress,
  AddressInput as CustomersAPIAddressInput,
  Attribute as CustomersAPIAttribute,
  Carrier as CustomersAPICarrier,
  Consumption as CustomersAPIConsumption,
  CreateCustomerRequest,
  Customer as CustomersAPICustomer,
  CustomerContactInfo as CustomersAPICustomerContactInfo,
  CustomerCreateParams,
  CustomerDefaults as CustomersAPICustomerDefaults,
  CustomerDeleteResponse,
  CustomerFreightPreferences as CustomersAPICustomerFreightPreferences,
  CustomerListParams,
  CustomerNotificationPreferences as CustomersAPICustomerNotificationPreferences,
  CustomerRegistrationParams,
  CustomerRegistrationResponse,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  Customers,
  Department as CustomersAPIDepartment,
  FrequentlyOrderedProduct,
  Geolocation as CustomersAPIGeolocation,
  Item as CustomersAPIItem,
  ItemCategory as CustomersAPIItemCategory,
  ListAccountGroup as CustomersAPIListAccountGroup,
  ListAttribute as CustomersAPIListAttribute,
  ListConsumption as CustomersAPIListConsumption,
  ListCustomer as CustomersAPIListCustomer,
  ListFrequentlyOrderedProduct,
  ListLocation as CustomersAPIListLocation,
  ListMachine as CustomersAPIListMachine,
  ListProductionStep as CustomersAPIListProductionStep,
  ListProperty as CustomersAPIListProperty,
  ListScanningStation as CustomersAPIListScanningStation,
  ListServiceLevel as CustomersAPIListServiceLevel,
  ListUnitGroupUnit as CustomersAPIListUnitGroupUnit,
  Location as CustomersAPILocation,
  Machine as CustomersAPIMachine,
  Owner as CustomersAPIOwner,
  PageInfo as CustomersAPIPageInfo,
  PaymentTerm as CustomersAPIPaymentTerm,
  Priority as CustomersAPIPriority,
  ProductionOutput as CustomersAPIProductionOutput,
  ProductionStep as CustomersAPIProductionStep,
  Property as CustomersAPIProperty,
  Quantity as CustomersAPIQuantity,
  QuantityInput,
  Rate as CustomersAPIRate,
  RegisterCustomerRequest,
  Role as CustomersAPIRole,
  ScanningStation as CustomersAPIScanningStation,
  ServiceLevel as CustomersAPIServiceLevel,
  ShippingTerm as CustomersAPIShippingTerm,
  Unit as CustomersAPIUnit,
  UnitGroup as CustomersAPIUnitGroup,
  UnitGroupUnit as CustomersAPIUnitGroupUnit,
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
  PageInfo as OrderDiscountsAPIPageInfo,
  UpdateOrderDiscountRequest,
} from './order-discounts/order-discounts';
import * as ProductLineAccessAPI from './product-line-access/product-line-access';
import { ProductLineAccess } from './product-line-access/product-line-access';
import * as SalesOrdersAPI from './sales-orders/sales-orders';
import {
  Account as SalesOrdersAPIAccount,
  AccountBranding as SalesOrdersAPIAccountBranding,
  AccountGroup as SalesOrdersAPIAccountGroup,
  AccountPortal as SalesOrdersAPIAccountPortal,
  AccountUser as SalesOrdersAPIAccountUser,
  Actor,
  Address as SalesOrdersAPIAddress,
  Attribute as SalesOrdersAPIAttribute,
  Carrier as SalesOrdersAPICarrier,
  CheckoutSalesOrderRequest,
  CheckoutSalesOrderResponse,
  Consumption as SalesOrdersAPIConsumption,
  CreateSalesOrderLineInput,
  CreateSalesOrderRequest,
  Customer as SalesOrdersAPICustomer,
  CustomerContactInfo as SalesOrdersAPICustomerContactInfo,
  CustomerDefaults as SalesOrdersAPICustomerDefaults,
  CustomerFreightPreferences as SalesOrdersAPICustomerFreightPreferences,
  CustomerNotificationPreferences as SalesOrdersAPICustomerNotificationPreferences,
  Department as SalesOrdersAPIDepartment,
  Geolocation as SalesOrdersAPIGeolocation,
  Item as SalesOrdersAPIItem,
  ItemCategory as SalesOrdersAPIItemCategory,
  ListAccountGroup as SalesOrdersAPIListAccountGroup,
  ListAttribute as SalesOrdersAPIListAttribute,
  ListConsumption as SalesOrdersAPIListConsumption,
  ListCustomer as SalesOrdersAPIListCustomer,
  ListLocation as SalesOrdersAPIListLocation,
  ListMachine as SalesOrdersAPIListMachine,
  ListProductionStep as SalesOrdersAPIListProductionStep,
  ListProperty as SalesOrdersAPIListProperty,
  ListSalesOrderDetail,
  ListSalesOrderLineDetail,
  ListSalesOrderStatus,
  ListScanningStation as SalesOrdersAPIListScanningStation,
  ListServiceLevel as SalesOrdersAPIListServiceLevel,
  ListUnitGroupUnit as SalesOrdersAPIListUnitGroupUnit,
  Location as SalesOrdersAPILocation,
  Machine as SalesOrdersAPIMachine,
  OrderDiscount as SalesOrdersAPIOrderDiscount,
  OrderLineInput,
  Owner as SalesOrdersAPIOwner,
  PageInfo as SalesOrdersAPIPageInfo,
  PaymentTerm as SalesOrdersAPIPaymentTerm,
  Pick,
  Priority as SalesOrdersAPIPriority,
  ProductionOutput as SalesOrdersAPIProductionOutput,
  ProductionRun,
  ProductionStep as SalesOrdersAPIProductionStep,
  Property as SalesOrdersAPIProperty,
  Quantity as SalesOrdersAPIQuantity,
  Rate as SalesOrdersAPIRate,
  Role as SalesOrdersAPIRole,
  SalesOrderCheckoutParams,
  SalesOrderCreateParams,
  SalesOrderDeleteResponse,
  SalesOrderDetail,
  SalesOrderEmailContactInput,
  SalesOrderLineDetail,
  SalesOrderListParams,
  SalesOrderRetrieveParams,
  SalesOrderRetrieveStatusesParams,
  SalesOrderStatus,
  SalesOrderStatusDetail,
  SalesOrderType,
  SalesOrderUpdateParams,
  SalesOrders,
  ScanningStation as SalesOrdersAPIScanningStation,
  ServiceLevel as SalesOrdersAPIServiceLevel,
  ShippingTerm as SalesOrdersAPIShippingTerm,
  Unit as SalesOrdersAPIUnit,
  UnitGroup as SalesOrdersAPIUnitGroup,
  UnitGroupUnit as SalesOrdersAPIUnitGroupUnit,
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
   *     order_total_cents: 125050,
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
    type RegistrationFlowsAPIPageInfo as PageInfo,
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
    type CustomersAPIAccount as Account,
    type CustomersAPIAccountBranding as AccountBranding,
    type CustomersAPIAccountGroup as AccountGroup,
    type CustomersAPIAccountPortal as AccountPortal,
    type CustomersAPIAccountUser as AccountUser,
    type CustomersAPIAddress as Address,
    type CustomersAPIAddressInput as AddressInput,
    type CustomersAPIAttribute as Attribute,
    type CustomersAPICarrier as Carrier,
    type CustomersAPIConsumption as Consumption,
    type CreateCustomerRequest as CreateCustomerRequest,
    type CustomersAPICustomer as Customer,
    type CustomersAPICustomerContactInfo as CustomerContactInfo,
    type CustomersAPICustomerDefaults as CustomerDefaults,
    type CustomersAPICustomerFreightPreferences as CustomerFreightPreferences,
    type CustomersAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type CustomersAPIDepartment as Department,
    type FrequentlyOrderedProduct as FrequentlyOrderedProduct,
    type CustomersAPIGeolocation as Geolocation,
    type CustomersAPIItem as Item,
    type CustomersAPIItemCategory as ItemCategory,
    type CustomersAPIListAccountGroup as ListAccountGroup,
    type CustomersAPIListAttribute as ListAttribute,
    type CustomersAPIListConsumption as ListConsumption,
    type CustomersAPIListCustomer as ListCustomer,
    type ListFrequentlyOrderedProduct as ListFrequentlyOrderedProduct,
    type CustomersAPIListLocation as ListLocation,
    type CustomersAPIListMachine as ListMachine,
    type CustomersAPIListProductionStep as ListProductionStep,
    type CustomersAPIListProperty as ListProperty,
    type CustomersAPIListScanningStation as ListScanningStation,
    type CustomersAPIListServiceLevel as ListServiceLevel,
    type CustomersAPIListUnitGroupUnit as ListUnitGroupUnit,
    type CustomersAPILocation as Location,
    type CustomersAPIMachine as Machine,
    type CustomersAPIOwner as Owner,
    type CustomersAPIPageInfo as PageInfo,
    type CustomersAPIPaymentTerm as PaymentTerm,
    type CustomersAPIPriority as Priority,
    type CustomersAPIProductionOutput as ProductionOutput,
    type CustomersAPIProductionStep as ProductionStep,
    type CustomersAPIProperty as Property,
    type CustomersAPIQuantity as Quantity,
    type QuantityInput as QuantityInput,
    type CustomersAPIRate as Rate,
    type RegisterCustomerRequest as RegisterCustomerRequest,
    type CustomersAPIRole as Role,
    type CustomersAPIScanningStation as ScanningStation,
    type CustomersAPIServiceLevel as ServiceLevel,
    type CustomersAPIShippingTerm as ShippingTerm,
    type CustomersAPIUnit as Unit,
    type CustomersAPIUnitGroup as UnitGroup,
    type CustomersAPIUnitGroupUnit as UnitGroupUnit,
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
    type AccountGroup as AccountGroup,
    type CreateAccountGroupRequest as CreateAccountGroupRequest,
    type ListAccountGroup as ListAccountGroup,
    type PageInfo as PageInfo,
    type UpdateAccountGroupRequest as UpdateAccountGroupRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };

  export {
    AccountPrices as AccountPrices,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPricesAPIAccountGroup as AccountGroup,
    type AccountPortal as AccountPortal,
    type AccountPrice as AccountPrice,
    type AccountUser as AccountUser,
    type Address as Address,
    type Attribute as Attribute,
    type Carrier as Carrier,
    type Consumption as Consumption,
    type CreateAccountPriceRequest as CreateAccountPriceRequest,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type Department as Department,
    type Geolocation as Geolocation,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type AccountPricesAPIListAccountGroup as ListAccountGroup,
    type ListAccountPrice as ListAccountPrice,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ListCustomer as ListCustomer,
    type ListItemCategory as ListItemCategory,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListScanningStation as ListScanningStation,
    type ListServiceLevel as ListServiceLevel,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type Machine as Machine,
    type Owner as Owner,
    type AccountPricesAPIPageInfo as PageInfo,
    type PaymentTerm as PaymentTerm,
    type Priority as Priority,
    type ProductLine as ProductLine,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type Role as Role,
    type ScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateAccountPriceRequest as UpdateAccountPriceRequest,
    type AccountPriceDeleteResponse as AccountPriceDeleteResponse,
    type AccountPriceCreateParams as AccountPriceCreateParams,
    type AccountPriceRetrieveParams as AccountPriceRetrieveParams,
    type AccountPriceUpdateParams as AccountPriceUpdateParams,
    type AccountPriceListParams as AccountPriceListParams,
  };

  export {
    Addresses as Addresses,
    type AddressesAPIAddress as Address,
    type AddressInput as AddressInput,
    type AddressesAPIGeolocation as Geolocation,
    type ListAddress as ListAddress,
    type AddressesAPIPageInfo as PageInfo,
    type UpdateAddressRequest as UpdateAddressRequest,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    AccountStatuses as AccountStatuses,
    type AccountStatusesAPIAccount as Account,
    type AccountStatusesAPIAccountBranding as AccountBranding,
    type AccountStatusesAPIAccountPortal as AccountPortal,
    type AccountStatus as AccountStatus,
    type AccountStatusesAPIAddress as Address,
    type AccountStatusesAPIGeolocation as Geolocation,
    type ListAccountStatus as ListAccountStatus,
    type AccountStatusesAPIOwner as Owner,
    type AccountStatusesAPIPageInfo as PageInfo,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
    type AccountStatusListParams as AccountStatusListParams,
  };

  export { ProductLineAccess as ProductLineAccess };

  export { AccountUsers as AccountUsers };

  export {
    Priorities as Priorities,
    type PrioritiesAPIAccount as Account,
    type PrioritiesAPIAccountBranding as AccountBranding,
    type PrioritiesAPIAccountPortal as AccountPortal,
    type PrioritiesAPIAddress as Address,
    type PrioritiesAPIGeolocation as Geolocation,
    type ListPriority as ListPriority,
    type PrioritiesAPIOwner as Owner,
    type PrioritiesAPIPageInfo as PageInfo,
    type PrioritiesAPIPriority as Priority,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };

  export {
    OrderDiscounts as OrderDiscounts,
    type CreateOrderDiscountRequest as CreateOrderDiscountRequest,
    type ListOrderDiscount as ListOrderDiscount,
    type OrderDiscount as OrderDiscount,
    type OrderDiscountsAPIPageInfo as PageInfo,
    type UpdateOrderDiscountRequest as UpdateOrderDiscountRequest,
    type OrderDiscountCreateParams as OrderDiscountCreateParams,
    type OrderDiscountUpdateParams as OrderDiscountUpdateParams,
    type OrderDiscountListParams as OrderDiscountListParams,
  };

  export {
    SalesOrders as SalesOrders,
    type SalesOrdersAPIAccount as Account,
    type SalesOrdersAPIAccountBranding as AccountBranding,
    type SalesOrdersAPIAccountGroup as AccountGroup,
    type SalesOrdersAPIAccountPortal as AccountPortal,
    type SalesOrdersAPIAccountUser as AccountUser,
    type Actor as Actor,
    type SalesOrdersAPIAddress as Address,
    type SalesOrdersAPIAttribute as Attribute,
    type SalesOrdersAPICarrier as Carrier,
    type CheckoutSalesOrderRequest as CheckoutSalesOrderRequest,
    type CheckoutSalesOrderResponse as CheckoutSalesOrderResponse,
    type SalesOrdersAPIConsumption as Consumption,
    type CreateSalesOrderLineInput as CreateSalesOrderLineInput,
    type CreateSalesOrderRequest as CreateSalesOrderRequest,
    type SalesOrdersAPICustomer as Customer,
    type SalesOrdersAPICustomerContactInfo as CustomerContactInfo,
    type SalesOrdersAPICustomerDefaults as CustomerDefaults,
    type SalesOrdersAPICustomerFreightPreferences as CustomerFreightPreferences,
    type SalesOrdersAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type SalesOrdersAPIDepartment as Department,
    type SalesOrdersAPIGeolocation as Geolocation,
    type SalesOrdersAPIItem as Item,
    type SalesOrdersAPIItemCategory as ItemCategory,
    type SalesOrdersAPIListAccountGroup as ListAccountGroup,
    type SalesOrdersAPIListAttribute as ListAttribute,
    type SalesOrdersAPIListConsumption as ListConsumption,
    type SalesOrdersAPIListCustomer as ListCustomer,
    type SalesOrdersAPIListLocation as ListLocation,
    type SalesOrdersAPIListMachine as ListMachine,
    type SalesOrdersAPIListProductionStep as ListProductionStep,
    type SalesOrdersAPIListProperty as ListProperty,
    type ListSalesOrderDetail as ListSalesOrderDetail,
    type ListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type SalesOrdersAPIListScanningStation as ListScanningStation,
    type SalesOrdersAPIListServiceLevel as ListServiceLevel,
    type SalesOrdersAPIListUnitGroupUnit as ListUnitGroupUnit,
    type SalesOrdersAPILocation as Location,
    type SalesOrdersAPIMachine as Machine,
    type SalesOrdersAPIOrderDiscount as OrderDiscount,
    type OrderLineInput as OrderLineInput,
    type SalesOrdersAPIOwner as Owner,
    type SalesOrdersAPIPageInfo as PageInfo,
    type SalesOrdersAPIPaymentTerm as PaymentTerm,
    type Pick as Pick,
    type SalesOrdersAPIPriority as Priority,
    type SalesOrdersAPIProductionOutput as ProductionOutput,
    type ProductionRun as ProductionRun,
    type SalesOrdersAPIProductionStep as ProductionStep,
    type SalesOrdersAPIProperty as Property,
    type SalesOrdersAPIQuantity as Quantity,
    type SalesOrdersAPIRate as Rate,
    type SalesOrdersAPIRole as Role,
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
    type SalesOrdersAPIScanningStation as ScanningStation,
    type SalesOrdersAPIServiceLevel as ServiceLevel,
    type SalesOrdersAPIShippingTerm as ShippingTerm,
    type SalesOrdersAPIUnit as Unit,
    type SalesOrdersAPIUnitGroup as UnitGroup,
    type SalesOrdersAPIUnitGroupUnit as UnitGroupUnit,
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
    type VolumeDiscountsAPIAccount as Account,
    type VolumeDiscountsAPIAccountBranding as AccountBranding,
    type VolumeDiscountsAPIAccountGroup as AccountGroup,
    type VolumeDiscountsAPIAccountPortal as AccountPortal,
    type VolumeDiscountsAPIAddress as Address,
    type VolumeDiscountsAPIAttribute as Attribute,
    type CreateVolumeDiscountRequest as CreateVolumeDiscountRequest,
    type CreateVolumeDiscountTierInput as CreateVolumeDiscountTierInput,
    type VolumeDiscountsAPIGeolocation as Geolocation,
    type VolumeDiscountsAPIItemCategory as ItemCategory,
    type VolumeDiscountsAPIListAccountGroup as ListAccountGroup,
    type VolumeDiscountsAPIListAttribute as ListAttribute,
    type VolumeDiscountsAPIListItemCategory as ListItemCategory,
    type ListProductLine as ListProductLine,
    type VolumeDiscountsAPIListProperty as ListProperty,
    type ListUnit as ListUnit,
    type VolumeDiscountsAPIListUnitGroupUnit as ListUnitGroupUnit,
    type ListVolumeDiscount as ListVolumeDiscount,
    type ListVolumeDiscountTier as ListVolumeDiscountTier,
    type VolumeDiscountsAPIOwner as Owner,
    type VolumeDiscountsAPIPageInfo as PageInfo,
    type VolumeDiscountsAPIProductLine as ProductLine,
    type VolumeDiscountsAPIProperty as Property,
    type VolumeDiscountsAPIUnit as Unit,
    type VolumeDiscountsAPIUnitGroup as UnitGroup,
    type VolumeDiscountsAPIUnitGroupUnit as UnitGroupUnit,
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
