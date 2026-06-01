// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvoicesAPI from './invoices';
import {
  AccountGroup,
  AccountUser,
  Actor,
  Attribute,
  Carrier,
  Consumption,
  Customer,
  CustomerContactInfo,
  CustomerDefaults,
  CustomerFreightPreferences,
  CustomerNotificationPreferences,
  Department,
  Invoice,
  InvoiceAllocation,
  InvoiceLine,
  InvoiceListParams,
  InvoiceRetrieveParams,
  InvoiceSummary,
  InvoiceUpdateParams,
  Invoices,
  Item,
  ItemCategory,
  ListAccountGroup,
  ListAttribute,
  ListConsumption,
  ListCustomer,
  ListDepartment,
  ListInvoiceAllocation,
  ListInvoiceLine,
  ListInvoiceSummary,
  ListLocation,
  ListMachine,
  ListPickLineDetail,
  ListProductionStep,
  ListProperty,
  ListSalesOrderLineDetail,
  ListScanningStation,
  ListServiceLevel,
  ListShipmentLine,
  ListShippingCaseDetail,
  ListTransactionAllocation,
  ListUnitGroupUnit,
  Location,
  Machine,
  OrderDiscount,
  PaymentTerm,
  Pick,
  PickDetail,
  PickLineDetail,
  Priority,
  ProductionOutput,
  ProductionRun,
  ProductionStep,
  Property,
  Quantity,
  Rate,
  Role,
  SalesOrderDetail,
  SalesOrderLineDetail,
  SalesOrderStatusDetail,
  SalesOrderType,
  ScanningStation,
  ServiceLevel,
  ShipmentBilling,
  ShipmentDetail,
  ShipmentLine,
  ShipmentStatus,
  ShippingCaseDetail,
  ShippingTerm,
  TransactionAllocation,
  TransactionDetail,
  Unit,
  UnitGroup,
  UnitGroupUnit,
  UpdateInvoiceRequest,
} from './invoices';
import * as PaymentTermsAPI from './payment-terms';
import {
  CreatePaymentTermRequest,
  ListPaymentTerm,
  PaymentTerm as PaymentTermsAPIPaymentTerm,
  PaymentTermCreateParams,
  PaymentTermDeleteResponse,
  PaymentTermListParams,
  PaymentTermRetrieveParams,
  PaymentTermUpdateParams,
  PaymentTerms,
  UpdatePaymentTermRequest,
} from './payment-terms';
import * as SettlementsAPI from './settlements';
import {
  AccountGroup as SettlementsAPIAccountGroup,
  AccountUser as SettlementsAPIAccountUser,
  Actor as SettlementsAPIActor,
  Attribute as SettlementsAPIAttribute,
  Carrier as SettlementsAPICarrier,
  Consumption as SettlementsAPIConsumption,
  CreateSettlementAllocationRequest,
  CreateSettlementRequest,
  Customer as SettlementsAPICustomer,
  CustomerContactInfo as SettlementsAPICustomerContactInfo,
  CustomerDefaults as SettlementsAPICustomerDefaults,
  CustomerFreightPreferences as SettlementsAPICustomerFreightPreferences,
  CustomerNotificationPreferences as SettlementsAPICustomerNotificationPreferences,
  Department as SettlementsAPIDepartment,
  Invoice as SettlementsAPIInvoice,
  InvoiceAllocation as SettlementsAPIInvoiceAllocation,
  InvoiceLine as SettlementsAPIInvoiceLine,
  InvoiceSummary as SettlementsAPIInvoiceSummary,
  Item as SettlementsAPIItem,
  ItemCategory as SettlementsAPIItemCategory,
  ListAccountGroup as SettlementsAPIListAccountGroup,
  ListAttribute as SettlementsAPIListAttribute,
  ListConsumption as SettlementsAPIListConsumption,
  ListCustomer as SettlementsAPIListCustomer,
  ListDepartment as SettlementsAPIListDepartment,
  ListInvoiceAllocation as SettlementsAPIListInvoiceAllocation,
  ListInvoiceLine as SettlementsAPIListInvoiceLine,
  ListLocation as SettlementsAPIListLocation,
  ListMachine as SettlementsAPIListMachine,
  ListPickLineDetail as SettlementsAPIListPickLineDetail,
  ListProductionStep as SettlementsAPIListProductionStep,
  ListProperty as SettlementsAPIListProperty,
  ListSalesOrderLineDetail as SettlementsAPIListSalesOrderLineDetail,
  ListScanningStation as SettlementsAPIListScanningStation,
  ListServiceLevel as SettlementsAPIListServiceLevel,
  ListSettlementSummary,
  ListShipmentLine as SettlementsAPIListShipmentLine,
  ListShippingCaseDetail as SettlementsAPIListShippingCaseDetail,
  ListTransactionAllocation as SettlementsAPIListTransactionAllocation,
  ListUnitGroupUnit as SettlementsAPIListUnitGroupUnit,
  Location as SettlementsAPILocation,
  Machine as SettlementsAPIMachine,
  OrderDiscount as SettlementsAPIOrderDiscount,
  PaymentTerm as SettlementsAPIPaymentTerm,
  Pick as SettlementsAPIPick,
  PickDetail as SettlementsAPIPickDetail,
  PickLineDetail as SettlementsAPIPickLineDetail,
  Priority as SettlementsAPIPriority,
  ProductionOutput as SettlementsAPIProductionOutput,
  ProductionRun as SettlementsAPIProductionRun,
  ProductionStep as SettlementsAPIProductionStep,
  Property as SettlementsAPIProperty,
  Quantity as SettlementsAPIQuantity,
  Rate as SettlementsAPIRate,
  Role as SettlementsAPIRole,
  SalesOrderDetail as SettlementsAPISalesOrderDetail,
  SalesOrderLineDetail as SettlementsAPISalesOrderLineDetail,
  SalesOrderStatusDetail as SettlementsAPISalesOrderStatusDetail,
  SalesOrderType as SettlementsAPISalesOrderType,
  ScanningStation as SettlementsAPIScanningStation,
  ServiceLevel as SettlementsAPIServiceLevel,
  Settlement,
  SettlementCreateParams,
  SettlementListParams,
  SettlementRetrieveParams,
  SettlementSummary,
  SettlementUpdateParams,
  Settlements,
  ShipmentBilling as SettlementsAPIShipmentBilling,
  ShipmentDetail as SettlementsAPIShipmentDetail,
  ShipmentLine as SettlementsAPIShipmentLine,
  ShipmentStatus as SettlementsAPIShipmentStatus,
  ShippingCaseDetail as SettlementsAPIShippingCaseDetail,
  ShippingTerm as SettlementsAPIShippingTerm,
  TransactionAllocation as SettlementsAPITransactionAllocation,
  TransactionDetail as SettlementsAPITransactionDetail,
  Unit as SettlementsAPIUnit,
  UnitGroup as SettlementsAPIUnitGroup,
  UnitGroupUnit as SettlementsAPIUnitGroupUnit,
  UpdateSettlementRequest,
} from './settlements';
import * as TransactionAllocationsAPI from './transaction-allocations';
import {
  AccountGroup as TransactionAllocationsAPIAccountGroup,
  AccountUser as TransactionAllocationsAPIAccountUser,
  Actor as TransactionAllocationsAPIActor,
  AllocationEntry,
  AllocationInvoice,
  AllocationTransaction,
  Attribute as TransactionAllocationsAPIAttribute,
  Carrier as TransactionAllocationsAPICarrier,
  Consumption as TransactionAllocationsAPIConsumption,
  Customer as TransactionAllocationsAPICustomer,
  CustomerContactInfo as TransactionAllocationsAPICustomerContactInfo,
  CustomerDefaults as TransactionAllocationsAPICustomerDefaults,
  CustomerFreightPreferences as TransactionAllocationsAPICustomerFreightPreferences,
  CustomerNotificationPreferences as TransactionAllocationsAPICustomerNotificationPreferences,
  Department as TransactionAllocationsAPIDepartment,
  Invoice as TransactionAllocationsAPIInvoice,
  InvoiceAllocation as TransactionAllocationsAPIInvoiceAllocation,
  InvoiceLine as TransactionAllocationsAPIInvoiceLine,
  InvoiceSummary as TransactionAllocationsAPIInvoiceSummary,
  Item as TransactionAllocationsAPIItem,
  ItemCategory as TransactionAllocationsAPIItemCategory,
  ListAccountGroup as TransactionAllocationsAPIListAccountGroup,
  ListAllocationEntry,
  ListAttribute as TransactionAllocationsAPIListAttribute,
  ListConsumption as TransactionAllocationsAPIListConsumption,
  ListCustomer as TransactionAllocationsAPIListCustomer,
  ListDepartment as TransactionAllocationsAPIListDepartment,
  ListInvoiceAllocation as TransactionAllocationsAPIListInvoiceAllocation,
  ListInvoiceLine as TransactionAllocationsAPIListInvoiceLine,
  ListLocation as TransactionAllocationsAPIListLocation,
  ListMachine as TransactionAllocationsAPIListMachine,
  ListPickLineDetail as TransactionAllocationsAPIListPickLineDetail,
  ListProductionStep as TransactionAllocationsAPIListProductionStep,
  ListProperty as TransactionAllocationsAPIListProperty,
  ListSalesOrderLineDetail as TransactionAllocationsAPIListSalesOrderLineDetail,
  ListScanningStation as TransactionAllocationsAPIListScanningStation,
  ListServiceLevel as TransactionAllocationsAPIListServiceLevel,
  ListShipmentLine as TransactionAllocationsAPIListShipmentLine,
  ListShippingCaseDetail as TransactionAllocationsAPIListShippingCaseDetail,
  ListTransactionAllocation as TransactionAllocationsAPIListTransactionAllocation,
  ListUnitGroupUnit as TransactionAllocationsAPIListUnitGroupUnit,
  Location as TransactionAllocationsAPILocation,
  Machine as TransactionAllocationsAPIMachine,
  OrderDiscount as TransactionAllocationsAPIOrderDiscount,
  PaymentTerm as TransactionAllocationsAPIPaymentTerm,
  Pick as TransactionAllocationsAPIPick,
  PickDetail as TransactionAllocationsAPIPickDetail,
  PickLineDetail as TransactionAllocationsAPIPickLineDetail,
  Priority as TransactionAllocationsAPIPriority,
  ProductionOutput as TransactionAllocationsAPIProductionOutput,
  ProductionRun as TransactionAllocationsAPIProductionRun,
  ProductionStep as TransactionAllocationsAPIProductionStep,
  Property as TransactionAllocationsAPIProperty,
  Quantity as TransactionAllocationsAPIQuantity,
  Rate as TransactionAllocationsAPIRate,
  Role as TransactionAllocationsAPIRole,
  SalesOrderDetail as TransactionAllocationsAPISalesOrderDetail,
  SalesOrderLineDetail as TransactionAllocationsAPISalesOrderLineDetail,
  SalesOrderStatusDetail as TransactionAllocationsAPISalesOrderStatusDetail,
  SalesOrderType as TransactionAllocationsAPISalesOrderType,
  ScanningStation as TransactionAllocationsAPIScanningStation,
  ServiceLevel as TransactionAllocationsAPIServiceLevel,
  ShipmentBilling as TransactionAllocationsAPIShipmentBilling,
  ShipmentDetail as TransactionAllocationsAPIShipmentDetail,
  ShipmentLine as TransactionAllocationsAPIShipmentLine,
  ShipmentStatus as TransactionAllocationsAPIShipmentStatus,
  ShippingCaseDetail as TransactionAllocationsAPIShippingCaseDetail,
  ShippingTerm as TransactionAllocationsAPIShippingTerm,
  TransactionAllocation as TransactionAllocationsAPITransactionAllocation,
  TransactionAllocationDeleteResponse,
  TransactionAllocationListParams,
  TransactionAllocationUpdateParams,
  TransactionAllocations,
  TransactionDetail as TransactionAllocationsAPITransactionDetail,
  Unit as TransactionAllocationsAPIUnit,
  UnitGroup as TransactionAllocationsAPIUnitGroup,
  UnitGroupUnit as TransactionAllocationsAPIUnitGroupUnit,
  UpdateTransactionAllocationRequest,
} from './transaction-allocations';
import * as TransactionsAPI from './transactions';
import {
  AccountGroup as TransactionsAPIAccountGroup,
  AccountUser as TransactionsAPIAccountUser,
  Actor as TransactionsAPIActor,
  Attribute as TransactionsAPIAttribute,
  Carrier as TransactionsAPICarrier,
  Consumption as TransactionsAPIConsumption,
  CreateTransactionRequest,
  Customer as TransactionsAPICustomer,
  CustomerContactInfo as TransactionsAPICustomerContactInfo,
  CustomerDefaults as TransactionsAPICustomerDefaults,
  CustomerFreightPreferences as TransactionsAPICustomerFreightPreferences,
  CustomerNotificationPreferences as TransactionsAPICustomerNotificationPreferences,
  Department as TransactionsAPIDepartment,
  Invoice as TransactionsAPIInvoice,
  InvoiceAllocation as TransactionsAPIInvoiceAllocation,
  InvoiceLine as TransactionsAPIInvoiceLine,
  InvoiceSummary as TransactionsAPIInvoiceSummary,
  Item as TransactionsAPIItem,
  ItemCategory as TransactionsAPIItemCategory,
  ListAccountGroup as TransactionsAPIListAccountGroup,
  ListAttribute as TransactionsAPIListAttribute,
  ListConsumption as TransactionsAPIListConsumption,
  ListCustomer as TransactionsAPIListCustomer,
  ListDepartment as TransactionsAPIListDepartment,
  ListInvoiceAllocation as TransactionsAPIListInvoiceAllocation,
  ListInvoiceLine as TransactionsAPIListInvoiceLine,
  ListLocation as TransactionsAPIListLocation,
  ListMachine as TransactionsAPIListMachine,
  ListPickLineDetail as TransactionsAPIListPickLineDetail,
  ListProductionStep as TransactionsAPIListProductionStep,
  ListProperty as TransactionsAPIListProperty,
  ListSalesOrderLineDetail as TransactionsAPIListSalesOrderLineDetail,
  ListScanningStation as TransactionsAPIListScanningStation,
  ListServiceLevel as TransactionsAPIListServiceLevel,
  ListShipmentLine as TransactionsAPIListShipmentLine,
  ListShippingCaseDetail as TransactionsAPIListShippingCaseDetail,
  ListTransactionAllocation as TransactionsAPIListTransactionAllocation,
  ListTransactionSummary,
  ListUnitGroupUnit as TransactionsAPIListUnitGroupUnit,
  Location as TransactionsAPILocation,
  Machine as TransactionsAPIMachine,
  OrderDiscount as TransactionsAPIOrderDiscount,
  PaymentTerm as TransactionsAPIPaymentTerm,
  Pick as TransactionsAPIPick,
  PickDetail as TransactionsAPIPickDetail,
  PickLineDetail as TransactionsAPIPickLineDetail,
  Priority as TransactionsAPIPriority,
  ProductionOutput as TransactionsAPIProductionOutput,
  ProductionRun as TransactionsAPIProductionRun,
  ProductionStep as TransactionsAPIProductionStep,
  Property as TransactionsAPIProperty,
  Quantity as TransactionsAPIQuantity,
  Rate as TransactionsAPIRate,
  Role as TransactionsAPIRole,
  SalesOrderDetail as TransactionsAPISalesOrderDetail,
  SalesOrderLineDetail as TransactionsAPISalesOrderLineDetail,
  SalesOrderStatusDetail as TransactionsAPISalesOrderStatusDetail,
  SalesOrderType as TransactionsAPISalesOrderType,
  ScanningStation as TransactionsAPIScanningStation,
  ServiceLevel as TransactionsAPIServiceLevel,
  ShipmentBilling as TransactionsAPIShipmentBilling,
  ShipmentDetail as TransactionsAPIShipmentDetail,
  ShipmentLine as TransactionsAPIShipmentLine,
  ShipmentStatus as TransactionsAPIShipmentStatus,
  ShippingCaseDetail as TransactionsAPIShippingCaseDetail,
  ShippingTerm as TransactionsAPIShippingTerm,
  TransactionAllocation as TransactionsAPITransactionAllocation,
  TransactionCreateParams,
  TransactionDetail as TransactionsAPITransactionDetail,
  TransactionListParams,
  TransactionRetrieveParams,
  TransactionSummary,
  TransactionUpdateParams,
  Transactions,
  Unit as TransactionsAPIUnit,
  UnitGroup as TransactionsAPIUnitGroup,
  UnitGroupUnit as TransactionsAPIUnitGroupUnit,
  UpdateTransactionRequest,
} from './transactions';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountGroup as AccountsAPIAccountGroup,
  AccountRetrieveInvoicesParams,
  AccountRetrieveTransactionsParams,
  AccountUser as AccountsAPIAccountUser,
  Accounts,
  Actor as AccountsAPIActor,
  Attribute as AccountsAPIAttribute,
  Carrier as AccountsAPICarrier,
  Consumption as AccountsAPIConsumption,
  Customer as AccountsAPICustomer,
  CustomerContactInfo as AccountsAPICustomerContactInfo,
  CustomerDefaults as AccountsAPICustomerDefaults,
  CustomerFreightPreferences as AccountsAPICustomerFreightPreferences,
  CustomerNotificationPreferences as AccountsAPICustomerNotificationPreferences,
  Department as AccountsAPIDepartment,
  Invoice as AccountsAPIInvoice,
  InvoiceAllocation as AccountsAPIInvoiceAllocation,
  InvoiceForPayment,
  InvoiceLine as AccountsAPIInvoiceLine,
  InvoiceSummary as AccountsAPIInvoiceSummary,
  Item as AccountsAPIItem,
  ItemCategory as AccountsAPIItemCategory,
  ListAccountGroup as AccountsAPIListAccountGroup,
  ListAttribute as AccountsAPIListAttribute,
  ListConsumption as AccountsAPIListConsumption,
  ListCustomer as AccountsAPIListCustomer,
  ListDepartment as AccountsAPIListDepartment,
  ListInvoiceAllocation as AccountsAPIListInvoiceAllocation,
  ListInvoiceForPayment,
  ListInvoiceLine as AccountsAPIListInvoiceLine,
  ListLocation as AccountsAPIListLocation,
  ListMachine as AccountsAPIListMachine,
  ListPickLineDetail as AccountsAPIListPickLineDetail,
  ListProductionStep as AccountsAPIListProductionStep,
  ListProperty as AccountsAPIListProperty,
  ListSalesOrderLineDetail as AccountsAPIListSalesOrderLineDetail,
  ListScanningStation as AccountsAPIListScanningStation,
  ListServiceLevel as AccountsAPIListServiceLevel,
  ListShipmentLine as AccountsAPIListShipmentLine,
  ListShippingCaseDetail as AccountsAPIListShippingCaseDetail,
  ListTransactionAllocation as AccountsAPIListTransactionAllocation,
  ListTransactionDetail,
  ListUnitGroupUnit as AccountsAPIListUnitGroupUnit,
  Location as AccountsAPILocation,
  Machine as AccountsAPIMachine,
  OrderDiscount as AccountsAPIOrderDiscount,
  PaymentTerm as AccountsAPIPaymentTerm,
  Pick as AccountsAPIPick,
  PickDetail as AccountsAPIPickDetail,
  PickLineDetail as AccountsAPIPickLineDetail,
  Priority as AccountsAPIPriority,
  ProductionOutput as AccountsAPIProductionOutput,
  ProductionRun as AccountsAPIProductionRun,
  ProductionStep as AccountsAPIProductionStep,
  Property as AccountsAPIProperty,
  Quantity as AccountsAPIQuantity,
  Rate as AccountsAPIRate,
  Role as AccountsAPIRole,
  SalesOrderDetail as AccountsAPISalesOrderDetail,
  SalesOrderLineDetail as AccountsAPISalesOrderLineDetail,
  SalesOrderStatusDetail as AccountsAPISalesOrderStatusDetail,
  SalesOrderType as AccountsAPISalesOrderType,
  ScanningStation as AccountsAPIScanningStation,
  ServiceLevel as AccountsAPIServiceLevel,
  ShipmentBilling as AccountsAPIShipmentBilling,
  ShipmentDetail as AccountsAPIShipmentDetail,
  ShipmentLine as AccountsAPIShipmentLine,
  ShipmentStatus as AccountsAPIShipmentStatus,
  ShippingCaseDetail as AccountsAPIShippingCaseDetail,
  ShippingTerm as AccountsAPIShippingTerm,
  TransactionAllocation as AccountsAPITransactionAllocation,
  TransactionDetail as AccountsAPITransactionDetail,
  Unit as AccountsAPIUnit,
  UnitGroup as AccountsAPIUnitGroup,
  UnitGroupUnit as AccountsAPIUnitGroupUnit,
} from './accounts/accounts';
import * as ReceivablesAPI from './receivables/receivables';
import {
  AccountGroup as ReceivablesAPIAccountGroup,
  AccountUser as ReceivablesAPIAccountUser,
  Actor as ReceivablesAPIActor,
  Attribute as ReceivablesAPIAttribute,
  Carrier as ReceivablesAPICarrier,
  Consumption as ReceivablesAPIConsumption,
  Customer as ReceivablesAPICustomer,
  CustomerContactInfo as ReceivablesAPICustomerContactInfo,
  CustomerDefaults as ReceivablesAPICustomerDefaults,
  CustomerFreightPreferences as ReceivablesAPICustomerFreightPreferences,
  CustomerNotificationPreferences as ReceivablesAPICustomerNotificationPreferences,
  Department as ReceivablesAPIDepartment,
  Invoice as ReceivablesAPIInvoice,
  InvoiceAllocation as ReceivablesAPIInvoiceAllocation,
  InvoiceLine as ReceivablesAPIInvoiceLine,
  InvoiceSummary as ReceivablesAPIInvoiceSummary,
  Item as ReceivablesAPIItem,
  ItemCategory as ReceivablesAPIItemCategory,
  ListAccountGroup as ReceivablesAPIListAccountGroup,
  ListAttribute as ReceivablesAPIListAttribute,
  ListConsumption as ReceivablesAPIListConsumption,
  ListCustomer as ReceivablesAPIListCustomer,
  ListDepartment as ReceivablesAPIListDepartment,
  ListInvoiceAllocation as ReceivablesAPIListInvoiceAllocation,
  ListInvoiceLine as ReceivablesAPIListInvoiceLine,
  ListLocation as ReceivablesAPIListLocation,
  ListMachine as ReceivablesAPIListMachine,
  ListPickLineDetail as ReceivablesAPIListPickLineDetail,
  ListProductionStep as ReceivablesAPIListProductionStep,
  ListProperty as ReceivablesAPIListProperty,
  ListReceivableEntry,
  ListSalesOrderLineDetail as ReceivablesAPIListSalesOrderLineDetail,
  ListScanningStation as ReceivablesAPIListScanningStation,
  ListServiceLevel as ReceivablesAPIListServiceLevel,
  ListShipmentLine as ReceivablesAPIListShipmentLine,
  ListShippingCaseDetail as ReceivablesAPIListShippingCaseDetail,
  ListTransactionAllocation as ReceivablesAPIListTransactionAllocation,
  ListUnitGroupUnit as ReceivablesAPIListUnitGroupUnit,
  Location as ReceivablesAPILocation,
  Machine as ReceivablesAPIMachine,
  OrderDiscount as ReceivablesAPIOrderDiscount,
  PaymentTerm as ReceivablesAPIPaymentTerm,
  Pick as ReceivablesAPIPick,
  PickDetail as ReceivablesAPIPickDetail,
  PickLineDetail as ReceivablesAPIPickLineDetail,
  Priority as ReceivablesAPIPriority,
  ProductionOutput as ReceivablesAPIProductionOutput,
  ProductionRun as ReceivablesAPIProductionRun,
  ProductionStep as ReceivablesAPIProductionStep,
  Property as ReceivablesAPIProperty,
  Quantity as ReceivablesAPIQuantity,
  Rate as ReceivablesAPIRate,
  ReceivableEntry,
  ReceivableListParams,
  Receivables,
  Role as ReceivablesAPIRole,
  SalesOrderDetail as ReceivablesAPISalesOrderDetail,
  SalesOrderLineDetail as ReceivablesAPISalesOrderLineDetail,
  SalesOrderStatusDetail as ReceivablesAPISalesOrderStatusDetail,
  SalesOrderType as ReceivablesAPISalesOrderType,
  ScanningStation as ReceivablesAPIScanningStation,
  ServiceLevel as ReceivablesAPIServiceLevel,
  ShipmentBilling as ReceivablesAPIShipmentBilling,
  ShipmentDetail as ReceivablesAPIShipmentDetail,
  ShipmentLine as ReceivablesAPIShipmentLine,
  ShipmentStatus as ReceivablesAPIShipmentStatus,
  ShippingCaseDetail as ReceivablesAPIShippingCaseDetail,
  ShippingTerm as ReceivablesAPIShippingTerm,
  TransactionAllocation as ReceivablesAPITransactionAllocation,
  TransactionDetail as ReceivablesAPITransactionDetail,
  Unit as ReceivablesAPIUnit,
  UnitGroup as ReceivablesAPIUnitGroup,
  UnitGroupUnit as ReceivablesAPIUnitGroupUnit,
} from './receivables/receivables';
import * as ActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Finance extends APIResource {
  paymentTerms: PaymentTermsAPI.PaymentTerms = new PaymentTermsAPI.PaymentTerms(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  receivables: ReceivablesAPI.Receivables = new ReceivablesAPI.Receivables(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  transactionAllocations: TransactionAllocationsAPI.TransactionAllocations =
    new TransactionAllocationsAPI.TransactionAllocations(this._client);
  settlements: SettlementsAPI.Settlements = new SettlementsAPI.Settlements(this._client);

  /**
   * Returns a paginated list of adjustment types.
   *
   * @example
   * ```ts
   * const listAdjustmentType =
   *   await client.finance.retrieveAdjustmentTypes();
   * ```
   */
  retrieveAdjustmentTypes(
    query: FinanceRetrieveAdjustmentTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAdjustmentType> {
    return this._client.get('/v1/finance/adjustment-types', { query, ...options });
  }

  /**
   * Returns a paginated list of open credit transactions for the current account.
   *
   * @example
   * ```ts
   * const listOpenCreditEntry =
   *   await client.finance.retrieveOpenCredits();
   * ```
   */
  retrieveOpenCredits(
    query: FinanceRetrieveOpenCreditsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOpenCreditEntry> {
    return this._client.get('/v1/finance/open-credits', { query, ...options });
  }

  /**
   * Returns a paginated list of transaction methods.
   *
   * @example
   * ```ts
   * const listTransactionMethod =
   *   await client.finance.retrieveTransactionMethods();
   * ```
   */
  retrieveTransactionMethods(
    query: FinanceRetrieveTransactionMethodsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTransactionMethod> {
    return this._client.get('/v1/finance/transaction-methods', { query, ...options });
  }

  /**
   * Returns a paginated list of transaction types.
   *
   * @example
   * ```ts
   * const listTransactionType =
   *   await client.finance.retrieveTransactionTypes();
   * ```
   */
  retrieveTransactionTypes(
    query: FinanceRetrieveTransactionTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTransactionType> {
    return this._client.get('/v1/finance/transaction-types', { query, ...options });
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
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

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
  portal: LinesAPI.AccountPortal | null;

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
  geolocation: LinesAPI.Geolocation | null;

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
 * Adjustment type resource.
 */
export interface AdjustmentType {
  /**
   * Adjustment ID.
   */
  id: string;

  /**
   * Machine-readable code.
   */
  code: 'discount' | 'shipping_discrepancy' | 'short_payment' | 'write_off' | 'fee' | 'refund';

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
  object: 'adjustment_type';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Minimal customer sub-resource for allocation entries.
 */
export interface AllocationCustomer {
  /**
   * Customer display name.
   */
  name: string;

  /**
   * Customer number.
   */
  number: string | null;
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
 * Allocation of a credit against an invoice.
 */
export interface InvoiceAllocationEntry {
  /**
   * Allocated amount as a decimal string.
   */
  amount: string;

  /**
   * Invoice number.
   */
  invoice_number: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAdjustmentType {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.AdjustmentType>;

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
export interface ListOpenCreditEntry {
  /**
   * Resources in this page.
   */
  data: Array<OpenCreditEntry>;

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
export interface ListTransactionMethod {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.TransactionMethod>;

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
export interface ListTransactionType {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.TransactionType>;

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
 * Open (not fully allocated) credit transaction.
 */
export interface OpenCreditEntry {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Adjustment type, if applicable.
   */
  adjustment_type: string | null;

  /**
   * Total amount already allocated as a decimal string.
   */
  allocated_amount: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Minimal customer sub-resource for allocation entries.
   */
  customer: TransactionAllocationsAPI.AllocationCustomer | null;

  /**
   * Allocations against invoices for this transaction.
   */
  invoice_allocations: Array<InvoiceAllocationEntry>;

  /**
   * Remaining unallocated amount as a decimal string.
   */
  leftover_amount: string;

  /**
   * Note about this transaction.
   */
  note: string | null;

  /**
   * Transaction number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'open_credit_entry';

  /**
   * Original transaction amount as a decimal string.
   */
  original_amount: string;

  /**
   * Responsible user's name.
   */
  responsible_user_name: string | null;

  /**
   * Stripe payment ID, if applicable.
   */
  stripe_payment_id: string | null;

  /**
   * Transaction method.
   */
  transaction_method: string | null;

  /**
   * Transaction type.
   */
  transaction_type: string;
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

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
 * Transaction method resource.
 */
export interface TransactionMethod {
  /**
   * Transaction method ID.
   */
  id: string;

  /**
   * Machine-readable code.
   */
  code: 'cash' | 'check' | 'credit_card' | 'gift_card' | 'ach';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction_method';
}

/**
 * Transaction type resource.
 */
export interface TransactionType {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Machine-readable code.
   */
  code: 'payment' | 'credit_memo' | 'adjustment' | 'rebate';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction_type';
}

export interface FinanceRetrieveAdjustmentTypesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface FinanceRetrieveOpenCreditsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by customer account IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Filter by end date (exclusive, YYYY-MM-DD).
   */
  end_date?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive, YYYY-MM-DD).
   */
  start_date?: string;
}

export interface FinanceRetrieveTransactionMethodsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface FinanceRetrieveTransactionTypesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

Finance.PaymentTerms = PaymentTerms;
Finance.Invoices = Invoices;
Finance.Accounts = Accounts;
Finance.Receivables = Receivables;
Finance.Transactions = Transactions;
Finance.TransactionAllocations = TransactionAllocations;
Finance.Settlements = Settlements;

export declare namespace Finance {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type AdjustmentType as AdjustmentType,
    type AllocationCustomer as AllocationCustomer,
    type Geolocation as Geolocation,
    type InvoiceAllocationEntry as InvoiceAllocationEntry,
    type ListAdjustmentType as ListAdjustmentType,
    type ListOpenCreditEntry as ListOpenCreditEntry,
    type ListTransactionMethod as ListTransactionMethod,
    type ListTransactionType as ListTransactionType,
    type OpenCreditEntry as OpenCreditEntry,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type TransactionMethod as TransactionMethod,
    type TransactionType as TransactionType,
    type FinanceRetrieveAdjustmentTypesParams as FinanceRetrieveAdjustmentTypesParams,
    type FinanceRetrieveOpenCreditsParams as FinanceRetrieveOpenCreditsParams,
    type FinanceRetrieveTransactionMethodsParams as FinanceRetrieveTransactionMethodsParams,
    type FinanceRetrieveTransactionTypesParams as FinanceRetrieveTransactionTypesParams,
  };

  export {
    PaymentTerms as PaymentTerms,
    type CreatePaymentTermRequest as CreatePaymentTermRequest,
    type ListPaymentTerm as ListPaymentTerm,
    type PaymentTermsAPIPaymentTerm as PaymentTerm,
    type UpdatePaymentTermRequest as UpdatePaymentTermRequest,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermListParams as PaymentTermListParams,
  };

  export {
    Invoices as Invoices,
    type AccountGroup as AccountGroup,
    type AccountUser as AccountUser,
    type Actor as Actor,
    type Attribute as Attribute,
    type Carrier as Carrier,
    type Consumption as Consumption,
    type Customer as Customer,
    type CustomerContactInfo as CustomerContactInfo,
    type CustomerDefaults as CustomerDefaults,
    type CustomerFreightPreferences as CustomerFreightPreferences,
    type CustomerNotificationPreferences as CustomerNotificationPreferences,
    type Department as Department,
    type Invoice as Invoice,
    type InvoiceAllocation as InvoiceAllocation,
    type InvoiceLine as InvoiceLine,
    type InvoiceSummary as InvoiceSummary,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAccountGroup as ListAccountGroup,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ListCustomer as ListCustomer,
    type ListDepartment as ListDepartment,
    type ListInvoiceAllocation as ListInvoiceAllocation,
    type ListInvoiceLine as ListInvoiceLine,
    type ListInvoiceSummary as ListInvoiceSummary,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListPickLineDetail as ListPickLineDetail,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ListScanningStation as ListScanningStation,
    type ListServiceLevel as ListServiceLevel,
    type ListShipmentLine as ListShipmentLine,
    type ListShippingCaseDetail as ListShippingCaseDetail,
    type ListTransactionAllocation as ListTransactionAllocation,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type Machine as Machine,
    type OrderDiscount as OrderDiscount,
    type PaymentTerm as PaymentTerm,
    type Pick as Pick,
    type PickDetail as PickDetail,
    type PickLineDetail as PickLineDetail,
    type Priority as Priority,
    type ProductionOutput as ProductionOutput,
    type ProductionRun as ProductionRun,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type Role as Role,
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
    type ScanningStation as ScanningStation,
    type ServiceLevel as ServiceLevel,
    type ShipmentBilling as ShipmentBilling,
    type ShipmentDetail as ShipmentDetail,
    type ShipmentLine as ShipmentLine,
    type ShipmentStatus as ShipmentStatus,
    type ShippingCaseDetail as ShippingCaseDetail,
    type ShippingTerm as ShippingTerm,
    type TransactionAllocation as TransactionAllocation,
    type TransactionDetail as TransactionDetail,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateInvoiceRequest as UpdateInvoiceRequest,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    Accounts as Accounts,
    type AccountsAPIAccountGroup as AccountGroup,
    type AccountsAPIAccountUser as AccountUser,
    type AccountsAPIActor as Actor,
    type AccountsAPIAttribute as Attribute,
    type AccountsAPICarrier as Carrier,
    type AccountsAPIConsumption as Consumption,
    type AccountsAPICustomer as Customer,
    type AccountsAPICustomerContactInfo as CustomerContactInfo,
    type AccountsAPICustomerDefaults as CustomerDefaults,
    type AccountsAPICustomerFreightPreferences as CustomerFreightPreferences,
    type AccountsAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type AccountsAPIDepartment as Department,
    type AccountsAPIInvoice as Invoice,
    type AccountsAPIInvoiceAllocation as InvoiceAllocation,
    type InvoiceForPayment as InvoiceForPayment,
    type AccountsAPIInvoiceLine as InvoiceLine,
    type AccountsAPIInvoiceSummary as InvoiceSummary,
    type AccountsAPIItem as Item,
    type AccountsAPIItemCategory as ItemCategory,
    type AccountsAPIListAccountGroup as ListAccountGroup,
    type AccountsAPIListAttribute as ListAttribute,
    type AccountsAPIListConsumption as ListConsumption,
    type AccountsAPIListCustomer as ListCustomer,
    type AccountsAPIListDepartment as ListDepartment,
    type AccountsAPIListInvoiceAllocation as ListInvoiceAllocation,
    type ListInvoiceForPayment as ListInvoiceForPayment,
    type AccountsAPIListInvoiceLine as ListInvoiceLine,
    type AccountsAPIListLocation as ListLocation,
    type AccountsAPIListMachine as ListMachine,
    type AccountsAPIListPickLineDetail as ListPickLineDetail,
    type AccountsAPIListProductionStep as ListProductionStep,
    type AccountsAPIListProperty as ListProperty,
    type AccountsAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type AccountsAPIListScanningStation as ListScanningStation,
    type AccountsAPIListServiceLevel as ListServiceLevel,
    type AccountsAPIListShipmentLine as ListShipmentLine,
    type AccountsAPIListShippingCaseDetail as ListShippingCaseDetail,
    type AccountsAPIListTransactionAllocation as ListTransactionAllocation,
    type ListTransactionDetail as ListTransactionDetail,
    type AccountsAPIListUnitGroupUnit as ListUnitGroupUnit,
    type AccountsAPILocation as Location,
    type AccountsAPIMachine as Machine,
    type AccountsAPIOrderDiscount as OrderDiscount,
    type AccountsAPIPaymentTerm as PaymentTerm,
    type AccountsAPIPick as Pick,
    type AccountsAPIPickDetail as PickDetail,
    type AccountsAPIPickLineDetail as PickLineDetail,
    type AccountsAPIPriority as Priority,
    type AccountsAPIProductionOutput as ProductionOutput,
    type AccountsAPIProductionRun as ProductionRun,
    type AccountsAPIProductionStep as ProductionStep,
    type AccountsAPIProperty as Property,
    type AccountsAPIQuantity as Quantity,
    type AccountsAPIRate as Rate,
    type AccountsAPIRole as Role,
    type AccountsAPISalesOrderDetail as SalesOrderDetail,
    type AccountsAPISalesOrderLineDetail as SalesOrderLineDetail,
    type AccountsAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type AccountsAPISalesOrderType as SalesOrderType,
    type AccountsAPIScanningStation as ScanningStation,
    type AccountsAPIServiceLevel as ServiceLevel,
    type AccountsAPIShipmentBilling as ShipmentBilling,
    type AccountsAPIShipmentDetail as ShipmentDetail,
    type AccountsAPIShipmentLine as ShipmentLine,
    type AccountsAPIShipmentStatus as ShipmentStatus,
    type AccountsAPIShippingCaseDetail as ShippingCaseDetail,
    type AccountsAPIShippingTerm as ShippingTerm,
    type AccountsAPITransactionAllocation as TransactionAllocation,
    type AccountsAPITransactionDetail as TransactionDetail,
    type AccountsAPIUnit as Unit,
    type AccountsAPIUnitGroup as UnitGroup,
    type AccountsAPIUnitGroupUnit as UnitGroupUnit,
    type AccountRetrieveInvoicesParams as AccountRetrieveInvoicesParams,
    type AccountRetrieveTransactionsParams as AccountRetrieveTransactionsParams,
  };

  export {
    Receivables as Receivables,
    type ReceivablesAPIAccountGroup as AccountGroup,
    type ReceivablesAPIAccountUser as AccountUser,
    type ReceivablesAPIActor as Actor,
    type ReceivablesAPIAttribute as Attribute,
    type ReceivablesAPICarrier as Carrier,
    type ReceivablesAPIConsumption as Consumption,
    type ReceivablesAPICustomer as Customer,
    type ReceivablesAPICustomerContactInfo as CustomerContactInfo,
    type ReceivablesAPICustomerDefaults as CustomerDefaults,
    type ReceivablesAPICustomerFreightPreferences as CustomerFreightPreferences,
    type ReceivablesAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type ReceivablesAPIDepartment as Department,
    type ReceivablesAPIInvoice as Invoice,
    type ReceivablesAPIInvoiceAllocation as InvoiceAllocation,
    type ReceivablesAPIInvoiceLine as InvoiceLine,
    type ReceivablesAPIInvoiceSummary as InvoiceSummary,
    type ReceivablesAPIItem as Item,
    type ReceivablesAPIItemCategory as ItemCategory,
    type ReceivablesAPIListAccountGroup as ListAccountGroup,
    type ReceivablesAPIListAttribute as ListAttribute,
    type ReceivablesAPIListConsumption as ListConsumption,
    type ReceivablesAPIListCustomer as ListCustomer,
    type ReceivablesAPIListDepartment as ListDepartment,
    type ReceivablesAPIListInvoiceAllocation as ListInvoiceAllocation,
    type ReceivablesAPIListInvoiceLine as ListInvoiceLine,
    type ReceivablesAPIListLocation as ListLocation,
    type ReceivablesAPIListMachine as ListMachine,
    type ReceivablesAPIListPickLineDetail as ListPickLineDetail,
    type ReceivablesAPIListProductionStep as ListProductionStep,
    type ReceivablesAPIListProperty as ListProperty,
    type ListReceivableEntry as ListReceivableEntry,
    type ReceivablesAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ReceivablesAPIListScanningStation as ListScanningStation,
    type ReceivablesAPIListServiceLevel as ListServiceLevel,
    type ReceivablesAPIListShipmentLine as ListShipmentLine,
    type ReceivablesAPIListShippingCaseDetail as ListShippingCaseDetail,
    type ReceivablesAPIListTransactionAllocation as ListTransactionAllocation,
    type ReceivablesAPIListUnitGroupUnit as ListUnitGroupUnit,
    type ReceivablesAPILocation as Location,
    type ReceivablesAPIMachine as Machine,
    type ReceivablesAPIOrderDiscount as OrderDiscount,
    type ReceivablesAPIPaymentTerm as PaymentTerm,
    type ReceivablesAPIPick as Pick,
    type ReceivablesAPIPickDetail as PickDetail,
    type ReceivablesAPIPickLineDetail as PickLineDetail,
    type ReceivablesAPIPriority as Priority,
    type ReceivablesAPIProductionOutput as ProductionOutput,
    type ReceivablesAPIProductionRun as ProductionRun,
    type ReceivablesAPIProductionStep as ProductionStep,
    type ReceivablesAPIProperty as Property,
    type ReceivablesAPIQuantity as Quantity,
    type ReceivablesAPIRate as Rate,
    type ReceivableEntry as ReceivableEntry,
    type ReceivablesAPIRole as Role,
    type ReceivablesAPISalesOrderDetail as SalesOrderDetail,
    type ReceivablesAPISalesOrderLineDetail as SalesOrderLineDetail,
    type ReceivablesAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type ReceivablesAPISalesOrderType as SalesOrderType,
    type ReceivablesAPIScanningStation as ScanningStation,
    type ReceivablesAPIServiceLevel as ServiceLevel,
    type ReceivablesAPIShipmentBilling as ShipmentBilling,
    type ReceivablesAPIShipmentDetail as ShipmentDetail,
    type ReceivablesAPIShipmentLine as ShipmentLine,
    type ReceivablesAPIShipmentStatus as ShipmentStatus,
    type ReceivablesAPIShippingCaseDetail as ShippingCaseDetail,
    type ReceivablesAPIShippingTerm as ShippingTerm,
    type ReceivablesAPITransactionAllocation as TransactionAllocation,
    type ReceivablesAPITransactionDetail as TransactionDetail,
    type ReceivablesAPIUnit as Unit,
    type ReceivablesAPIUnitGroup as UnitGroup,
    type ReceivablesAPIUnitGroupUnit as UnitGroupUnit,
    type ReceivableListParams as ReceivableListParams,
  };

  export {
    Transactions as Transactions,
    type TransactionsAPIAccountGroup as AccountGroup,
    type TransactionsAPIAccountUser as AccountUser,
    type TransactionsAPIActor as Actor,
    type TransactionsAPIAttribute as Attribute,
    type TransactionsAPICarrier as Carrier,
    type TransactionsAPIConsumption as Consumption,
    type CreateTransactionRequest as CreateTransactionRequest,
    type TransactionsAPICustomer as Customer,
    type TransactionsAPICustomerContactInfo as CustomerContactInfo,
    type TransactionsAPICustomerDefaults as CustomerDefaults,
    type TransactionsAPICustomerFreightPreferences as CustomerFreightPreferences,
    type TransactionsAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type TransactionsAPIDepartment as Department,
    type TransactionsAPIInvoice as Invoice,
    type TransactionsAPIInvoiceAllocation as InvoiceAllocation,
    type TransactionsAPIInvoiceLine as InvoiceLine,
    type TransactionsAPIInvoiceSummary as InvoiceSummary,
    type TransactionsAPIItem as Item,
    type TransactionsAPIItemCategory as ItemCategory,
    type TransactionsAPIListAccountGroup as ListAccountGroup,
    type TransactionsAPIListAttribute as ListAttribute,
    type TransactionsAPIListConsumption as ListConsumption,
    type TransactionsAPIListCustomer as ListCustomer,
    type TransactionsAPIListDepartment as ListDepartment,
    type TransactionsAPIListInvoiceAllocation as ListInvoiceAllocation,
    type TransactionsAPIListInvoiceLine as ListInvoiceLine,
    type TransactionsAPIListLocation as ListLocation,
    type TransactionsAPIListMachine as ListMachine,
    type TransactionsAPIListPickLineDetail as ListPickLineDetail,
    type TransactionsAPIListProductionStep as ListProductionStep,
    type TransactionsAPIListProperty as ListProperty,
    type TransactionsAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type TransactionsAPIListScanningStation as ListScanningStation,
    type TransactionsAPIListServiceLevel as ListServiceLevel,
    type TransactionsAPIListShipmentLine as ListShipmentLine,
    type TransactionsAPIListShippingCaseDetail as ListShippingCaseDetail,
    type TransactionsAPIListTransactionAllocation as ListTransactionAllocation,
    type ListTransactionSummary as ListTransactionSummary,
    type TransactionsAPIListUnitGroupUnit as ListUnitGroupUnit,
    type TransactionsAPILocation as Location,
    type TransactionsAPIMachine as Machine,
    type TransactionsAPIOrderDiscount as OrderDiscount,
    type TransactionsAPIPaymentTerm as PaymentTerm,
    type TransactionsAPIPick as Pick,
    type TransactionsAPIPickDetail as PickDetail,
    type TransactionsAPIPickLineDetail as PickLineDetail,
    type TransactionsAPIPriority as Priority,
    type TransactionsAPIProductionOutput as ProductionOutput,
    type TransactionsAPIProductionRun as ProductionRun,
    type TransactionsAPIProductionStep as ProductionStep,
    type TransactionsAPIProperty as Property,
    type TransactionsAPIQuantity as Quantity,
    type TransactionsAPIRate as Rate,
    type TransactionsAPIRole as Role,
    type TransactionsAPISalesOrderDetail as SalesOrderDetail,
    type TransactionsAPISalesOrderLineDetail as SalesOrderLineDetail,
    type TransactionsAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type TransactionsAPISalesOrderType as SalesOrderType,
    type TransactionsAPIScanningStation as ScanningStation,
    type TransactionsAPIServiceLevel as ServiceLevel,
    type TransactionsAPIShipmentBilling as ShipmentBilling,
    type TransactionsAPIShipmentDetail as ShipmentDetail,
    type TransactionsAPIShipmentLine as ShipmentLine,
    type TransactionsAPIShipmentStatus as ShipmentStatus,
    type TransactionsAPIShippingCaseDetail as ShippingCaseDetail,
    type TransactionsAPIShippingTerm as ShippingTerm,
    type TransactionsAPITransactionAllocation as TransactionAllocation,
    type TransactionsAPITransactionDetail as TransactionDetail,
    type TransactionSummary as TransactionSummary,
    type TransactionsAPIUnit as Unit,
    type TransactionsAPIUnitGroup as UnitGroup,
    type TransactionsAPIUnitGroupUnit as UnitGroupUnit,
    type UpdateTransactionRequest as UpdateTransactionRequest,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    TransactionAllocations as TransactionAllocations,
    type TransactionAllocationsAPIAccountGroup as AccountGroup,
    type TransactionAllocationsAPIAccountUser as AccountUser,
    type TransactionAllocationsAPIActor as Actor,
    type AllocationEntry as AllocationEntry,
    type AllocationInvoice as AllocationInvoice,
    type AllocationTransaction as AllocationTransaction,
    type TransactionAllocationsAPIAttribute as Attribute,
    type TransactionAllocationsAPICarrier as Carrier,
    type TransactionAllocationsAPIConsumption as Consumption,
    type TransactionAllocationsAPICustomer as Customer,
    type TransactionAllocationsAPICustomerContactInfo as CustomerContactInfo,
    type TransactionAllocationsAPICustomerDefaults as CustomerDefaults,
    type TransactionAllocationsAPICustomerFreightPreferences as CustomerFreightPreferences,
    type TransactionAllocationsAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type TransactionAllocationsAPIDepartment as Department,
    type TransactionAllocationsAPIInvoice as Invoice,
    type TransactionAllocationsAPIInvoiceAllocation as InvoiceAllocation,
    type TransactionAllocationsAPIInvoiceLine as InvoiceLine,
    type TransactionAllocationsAPIInvoiceSummary as InvoiceSummary,
    type TransactionAllocationsAPIItem as Item,
    type TransactionAllocationsAPIItemCategory as ItemCategory,
    type TransactionAllocationsAPIListAccountGroup as ListAccountGroup,
    type ListAllocationEntry as ListAllocationEntry,
    type TransactionAllocationsAPIListAttribute as ListAttribute,
    type TransactionAllocationsAPIListConsumption as ListConsumption,
    type TransactionAllocationsAPIListCustomer as ListCustomer,
    type TransactionAllocationsAPIListDepartment as ListDepartment,
    type TransactionAllocationsAPIListInvoiceAllocation as ListInvoiceAllocation,
    type TransactionAllocationsAPIListInvoiceLine as ListInvoiceLine,
    type TransactionAllocationsAPIListLocation as ListLocation,
    type TransactionAllocationsAPIListMachine as ListMachine,
    type TransactionAllocationsAPIListPickLineDetail as ListPickLineDetail,
    type TransactionAllocationsAPIListProductionStep as ListProductionStep,
    type TransactionAllocationsAPIListProperty as ListProperty,
    type TransactionAllocationsAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type TransactionAllocationsAPIListScanningStation as ListScanningStation,
    type TransactionAllocationsAPIListServiceLevel as ListServiceLevel,
    type TransactionAllocationsAPIListShipmentLine as ListShipmentLine,
    type TransactionAllocationsAPIListShippingCaseDetail as ListShippingCaseDetail,
    type TransactionAllocationsAPIListTransactionAllocation as ListTransactionAllocation,
    type TransactionAllocationsAPIListUnitGroupUnit as ListUnitGroupUnit,
    type TransactionAllocationsAPILocation as Location,
    type TransactionAllocationsAPIMachine as Machine,
    type TransactionAllocationsAPIOrderDiscount as OrderDiscount,
    type TransactionAllocationsAPIPaymentTerm as PaymentTerm,
    type TransactionAllocationsAPIPick as Pick,
    type TransactionAllocationsAPIPickDetail as PickDetail,
    type TransactionAllocationsAPIPickLineDetail as PickLineDetail,
    type TransactionAllocationsAPIPriority as Priority,
    type TransactionAllocationsAPIProductionOutput as ProductionOutput,
    type TransactionAllocationsAPIProductionRun as ProductionRun,
    type TransactionAllocationsAPIProductionStep as ProductionStep,
    type TransactionAllocationsAPIProperty as Property,
    type TransactionAllocationsAPIQuantity as Quantity,
    type TransactionAllocationsAPIRate as Rate,
    type TransactionAllocationsAPIRole as Role,
    type TransactionAllocationsAPISalesOrderDetail as SalesOrderDetail,
    type TransactionAllocationsAPISalesOrderLineDetail as SalesOrderLineDetail,
    type TransactionAllocationsAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type TransactionAllocationsAPISalesOrderType as SalesOrderType,
    type TransactionAllocationsAPIScanningStation as ScanningStation,
    type TransactionAllocationsAPIServiceLevel as ServiceLevel,
    type TransactionAllocationsAPIShipmentBilling as ShipmentBilling,
    type TransactionAllocationsAPIShipmentDetail as ShipmentDetail,
    type TransactionAllocationsAPIShipmentLine as ShipmentLine,
    type TransactionAllocationsAPIShipmentStatus as ShipmentStatus,
    type TransactionAllocationsAPIShippingCaseDetail as ShippingCaseDetail,
    type TransactionAllocationsAPIShippingTerm as ShippingTerm,
    type TransactionAllocationsAPITransactionAllocation as TransactionAllocation,
    type TransactionAllocationsAPITransactionDetail as TransactionDetail,
    type TransactionAllocationsAPIUnit as Unit,
    type TransactionAllocationsAPIUnitGroup as UnitGroup,
    type TransactionAllocationsAPIUnitGroupUnit as UnitGroupUnit,
    type UpdateTransactionAllocationRequest as UpdateTransactionAllocationRequest,
    type TransactionAllocationDeleteResponse as TransactionAllocationDeleteResponse,
    type TransactionAllocationUpdateParams as TransactionAllocationUpdateParams,
    type TransactionAllocationListParams as TransactionAllocationListParams,
  };

  export {
    Settlements as Settlements,
    type SettlementsAPIAccountGroup as AccountGroup,
    type SettlementsAPIAccountUser as AccountUser,
    type SettlementsAPIActor as Actor,
    type SettlementsAPIAttribute as Attribute,
    type SettlementsAPICarrier as Carrier,
    type SettlementsAPIConsumption as Consumption,
    type CreateSettlementAllocationRequest as CreateSettlementAllocationRequest,
    type CreateSettlementRequest as CreateSettlementRequest,
    type SettlementsAPICustomer as Customer,
    type SettlementsAPICustomerContactInfo as CustomerContactInfo,
    type SettlementsAPICustomerDefaults as CustomerDefaults,
    type SettlementsAPICustomerFreightPreferences as CustomerFreightPreferences,
    type SettlementsAPICustomerNotificationPreferences as CustomerNotificationPreferences,
    type SettlementsAPIDepartment as Department,
    type SettlementsAPIInvoice as Invoice,
    type SettlementsAPIInvoiceAllocation as InvoiceAllocation,
    type SettlementsAPIInvoiceLine as InvoiceLine,
    type SettlementsAPIInvoiceSummary as InvoiceSummary,
    type SettlementsAPIItem as Item,
    type SettlementsAPIItemCategory as ItemCategory,
    type SettlementsAPIListAccountGroup as ListAccountGroup,
    type SettlementsAPIListAttribute as ListAttribute,
    type SettlementsAPIListConsumption as ListConsumption,
    type SettlementsAPIListCustomer as ListCustomer,
    type SettlementsAPIListDepartment as ListDepartment,
    type SettlementsAPIListInvoiceAllocation as ListInvoiceAllocation,
    type SettlementsAPIListInvoiceLine as ListInvoiceLine,
    type SettlementsAPIListLocation as ListLocation,
    type SettlementsAPIListMachine as ListMachine,
    type SettlementsAPIListPickLineDetail as ListPickLineDetail,
    type SettlementsAPIListProductionStep as ListProductionStep,
    type SettlementsAPIListProperty as ListProperty,
    type SettlementsAPIListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type SettlementsAPIListScanningStation as ListScanningStation,
    type SettlementsAPIListServiceLevel as ListServiceLevel,
    type ListSettlementSummary as ListSettlementSummary,
    type SettlementsAPIListShipmentLine as ListShipmentLine,
    type SettlementsAPIListShippingCaseDetail as ListShippingCaseDetail,
    type SettlementsAPIListTransactionAllocation as ListTransactionAllocation,
    type SettlementsAPIListUnitGroupUnit as ListUnitGroupUnit,
    type SettlementsAPILocation as Location,
    type SettlementsAPIMachine as Machine,
    type SettlementsAPIOrderDiscount as OrderDiscount,
    type SettlementsAPIPaymentTerm as PaymentTerm,
    type SettlementsAPIPick as Pick,
    type SettlementsAPIPickDetail as PickDetail,
    type SettlementsAPIPickLineDetail as PickLineDetail,
    type SettlementsAPIPriority as Priority,
    type SettlementsAPIProductionOutput as ProductionOutput,
    type SettlementsAPIProductionRun as ProductionRun,
    type SettlementsAPIProductionStep as ProductionStep,
    type SettlementsAPIProperty as Property,
    type SettlementsAPIQuantity as Quantity,
    type SettlementsAPIRate as Rate,
    type SettlementsAPIRole as Role,
    type SettlementsAPISalesOrderDetail as SalesOrderDetail,
    type SettlementsAPISalesOrderLineDetail as SalesOrderLineDetail,
    type SettlementsAPISalesOrderStatusDetail as SalesOrderStatusDetail,
    type SettlementsAPISalesOrderType as SalesOrderType,
    type SettlementsAPIScanningStation as ScanningStation,
    type SettlementsAPIServiceLevel as ServiceLevel,
    type Settlement as Settlement,
    type SettlementSummary as SettlementSummary,
    type SettlementsAPIShipmentBilling as ShipmentBilling,
    type SettlementsAPIShipmentDetail as ShipmentDetail,
    type SettlementsAPIShipmentLine as ShipmentLine,
    type SettlementsAPIShipmentStatus as ShipmentStatus,
    type SettlementsAPIShippingCaseDetail as ShippingCaseDetail,
    type SettlementsAPIShippingTerm as ShippingTerm,
    type SettlementsAPITransactionAllocation as TransactionAllocation,
    type SettlementsAPITransactionDetail as TransactionDetail,
    type SettlementsAPIUnit as Unit,
    type SettlementsAPIUnitGroup as UnitGroup,
    type SettlementsAPIUnitGroupUnit as UnitGroupUnit,
    type UpdateSettlementRequest as UpdateSettlementRequest,
    type SettlementCreateParams as SettlementCreateParams,
    type SettlementRetrieveParams as SettlementRetrieveParams,
    type SettlementUpdateParams as SettlementUpdateParams,
    type SettlementListParams as SettlementListParams,
  };
}
