// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvoicesAPI from './invoices';
import {
  AllocationInvoice,
  Invoice,
  InvoiceAllocation,
  InvoiceLine,
  InvoiceListParams,
  InvoiceRetrieveParams,
  InvoiceUpdateParams,
  Invoices,
  ListDepartment,
  ListInvoice,
  ListInvoiceAllocation,
  ListInvoiceLine,
  ListPickLine,
  ListShipmentLine,
  ListShippingCaseDetail,
  ListTransactionAllocation,
  Pick,
  PickLine,
  Shipment,
  ShipmentLine,
  ShippingCaseDetail,
  TransactionAllocation,
  TransactionDetail,
  UpdateInvoiceRequest,
} from './invoices';
import * as PaymentTermsAPI from './payment-terms';
import {
  CreatePaymentTermRequest,
  ListPaymentTerm,
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
  CreateSettlementAllocationRequest,
  CreateSettlementRequest,
  ListSettlementSummary,
  Settlement,
  SettlementCreateParams,
  SettlementListParams,
  SettlementRetrieveParams,
  SettlementSummary,
  SettlementUpdateParams,
  Settlements,
  UpdateSettlementRequest,
} from './settlements';
import * as TransactionAllocationsAPI from './transaction-allocations';
import {
  AllocationEntry,
  AllocationTransaction,
  ListAllocationEntry,
  TransactionAllocationDeleteResponse,
  TransactionAllocationListParams,
  TransactionAllocationUpdateParams,
  TransactionAllocations,
  UpdateTransactionAllocationRequest,
} from './transaction-allocations';
import * as TransactionsAPI from './transactions';
import {
  CreateTransactionRequest,
  ListTransactionSummary,
  TransactionCreateParams,
  TransactionDeleteParams,
  TransactionListParams,
  TransactionRetrieveParams,
  TransactionSummary,
  TransactionUpdateParams,
  Transactions,
  UpdateTransactionRequest,
} from './transactions';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountRetrieveInvoicesParams,
  AccountRetrieveTransactionsParams,
  Accounts,
  InvoiceForPayment,
  ListInvoiceForPayment,
  ListTransactionDetail,
} from './accounts/accounts';
import * as ReceivablesAPI from './receivables/receivables';
import {
  ListReceivableEntry,
  ReceivableEntry,
  ReceivableListParams,
  Receivables,
} from './receivables/receivables';
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
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Minimal customer sub-resource for allocation entries. It carries its own
 * allocation_customer discriminator (not customer) because allocation list entries
 * do not carry a customer id, so it is not a resolvable customer reference.
 */
export interface AllocationCustomer {
  /**
   * Customer account ID. Null when the entry does not carry one.
   */
  id: string | null;

  /**
   * Customer display name.
   */
  name: string;

  /**
   * Customer number.
   */
  number: string | null;

  /**
   * Resource type identifier.
   */
  object: 'allocation_customer';
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

  /**
   * Resource type identifier.
   */
  object: 'invoice_allocation_entry';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAdjustmentType {
  /**
   * Resources in this page.
   */
  data: Array<AdjustmentType>;

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
export interface ListInvoiceAllocationEntry {
  /**
   * Resources in this page.
   */
  data: Array<InvoiceAllocationEntry>;

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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListTransactionMethod {
  /**
   * Resources in this page.
   */
  data: Array<TransactionMethod>;

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
export interface ListTransactionType {
  /**
   * Resources in this page.
   */
  data: Array<TransactionType>;

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
   * Minimal customer sub-resource for allocation entries. It carries its own
   * allocation_customer discriminator (not customer) because allocation list entries
   * do not carry a customer id, so it is not a resolvable customer reference.
   */
  customer: AllocationCustomer | null;

  /**
   * List represents a paginated list of resources.
   */
  invoice_allocations: ListInvoiceAllocationEntry | null;

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
    type AdjustmentType as AdjustmentType,
    type AllocationCustomer as AllocationCustomer,
    type InvoiceAllocationEntry as InvoiceAllocationEntry,
    type ListAdjustmentType as ListAdjustmentType,
    type ListInvoiceAllocationEntry as ListInvoiceAllocationEntry,
    type ListOpenCreditEntry as ListOpenCreditEntry,
    type ListTransactionMethod as ListTransactionMethod,
    type ListTransactionType as ListTransactionType,
    type OpenCreditEntry as OpenCreditEntry,
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
    type UpdatePaymentTermRequest as UpdatePaymentTermRequest,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermListParams as PaymentTermListParams,
  };

  export {
    Invoices as Invoices,
    type AllocationInvoice as AllocationInvoice,
    type Invoice as Invoice,
    type InvoiceAllocation as InvoiceAllocation,
    type InvoiceLine as InvoiceLine,
    type ListDepartment as ListDepartment,
    type ListInvoice as ListInvoice,
    type ListInvoiceAllocation as ListInvoiceAllocation,
    type ListInvoiceLine as ListInvoiceLine,
    type ListPickLine as ListPickLine,
    type ListShipmentLine as ListShipmentLine,
    type ListShippingCaseDetail as ListShippingCaseDetail,
    type ListTransactionAllocation as ListTransactionAllocation,
    type Pick as Pick,
    type PickLine as PickLine,
    type Shipment as Shipment,
    type ShipmentLine as ShipmentLine,
    type ShippingCaseDetail as ShippingCaseDetail,
    type TransactionAllocation as TransactionAllocation,
    type TransactionDetail as TransactionDetail,
    type UpdateInvoiceRequest as UpdateInvoiceRequest,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    Accounts as Accounts,
    type InvoiceForPayment as InvoiceForPayment,
    type ListInvoiceForPayment as ListInvoiceForPayment,
    type ListTransactionDetail as ListTransactionDetail,
    type AccountRetrieveInvoicesParams as AccountRetrieveInvoicesParams,
    type AccountRetrieveTransactionsParams as AccountRetrieveTransactionsParams,
  };

  export {
    Receivables as Receivables,
    type ListReceivableEntry as ListReceivableEntry,
    type ReceivableEntry as ReceivableEntry,
    type ReceivableListParams as ReceivableListParams,
  };

  export {
    Transactions as Transactions,
    type CreateTransactionRequest as CreateTransactionRequest,
    type ListTransactionSummary as ListTransactionSummary,
    type TransactionSummary as TransactionSummary,
    type UpdateTransactionRequest as UpdateTransactionRequest,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionDeleteParams as TransactionDeleteParams,
  };

  export {
    TransactionAllocations as TransactionAllocations,
    type AllocationEntry as AllocationEntry,
    type AllocationTransaction as AllocationTransaction,
    type ListAllocationEntry as ListAllocationEntry,
    type UpdateTransactionAllocationRequest as UpdateTransactionAllocationRequest,
    type TransactionAllocationDeleteResponse as TransactionAllocationDeleteResponse,
    type TransactionAllocationUpdateParams as TransactionAllocationUpdateParams,
    type TransactionAllocationListParams as TransactionAllocationListParams,
  };

  export {
    Settlements as Settlements,
    type CreateSettlementAllocationRequest as CreateSettlementAllocationRequest,
    type CreateSettlementRequest as CreateSettlementRequest,
    type ListSettlementSummary as ListSettlementSummary,
    type Settlement as Settlement,
    type SettlementSummary as SettlementSummary,
    type UpdateSettlementRequest as UpdateSettlementRequest,
    type SettlementCreateParams as SettlementCreateParams,
    type SettlementRetrieveParams as SettlementRetrieveParams,
    type SettlementUpdateParams as SettlementUpdateParams,
    type SettlementListParams as SettlementListParams,
  };
}
