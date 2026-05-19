// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FinanceAPI from './finance';
import * as AgentsAPI from '../ai/agents';
import * as InvoicesAPI from './invoices';
import {
  Invoice,
  InvoiceAllocation as InvoicesAPIInvoiceAllocation,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceRetrieveParams,
  InvoiceSummary,
  InvoiceUpdateParams,
  Invoices,
  ListInvoiceAllocation,
} from './invoices';
import * as PaymentTermsAPI from './payment-terms';
import {
  PaymentTerm,
  PaymentTermDeleteResponse,
  PaymentTermPaymentTermsParams,
  PaymentTermRetrieveParams,
  PaymentTermRetrievePaymentTermsParams,
  PaymentTermRetrievePaymentTermsResponse,
  PaymentTermUpdateParams,
  PaymentTerms,
} from './payment-terms';
import * as SettlementsAPI from './settlements';
import {
  ListTransactionAllocation,
  Settlement,
  SettlementCreateParams,
  SettlementListParams,
  SettlementListResponse,
  SettlementRetrieveParams,
  SettlementUpdateParams,
  Settlements,
} from './settlements';
import * as TransactionAllocationsAPI from './transaction-allocations';
import {
  TransactionAllocation,
  TransactionAllocationDeleteResponse,
  TransactionAllocationRetrieveTransactionAllocationsParams,
  TransactionAllocationRetrieveTransactionAllocationsResponse,
  TransactionAllocationUpdateParams,
  TransactionAllocations,
} from './transaction-allocations';
import * as TransactionsAPI from './transactions';
import {
  TransactionCreateParams,
  TransactionDetail,
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveParams,
  TransactionUpdateParams,
  Transactions,
} from './transactions';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountRetrieveInvoicesParams,
  AccountRetrieveInvoicesResponse,
  AccountRetrieveTransactionsParams,
  AccountRetrieveTransactionsResponse,
  Accounts,
} from './accounts/accounts';
import * as ReceivablesAPI from './receivables/receivables';
import { ListReceivableEntry, ReceivableListParams, Receivables } from './receivables/receivables';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Finance extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  paymentTerms: PaymentTermsAPI.PaymentTerms = new PaymentTermsAPI.PaymentTerms(this._client);
  receivables: ReceivablesAPI.Receivables = new ReceivablesAPI.Receivables(this._client);
  settlements: SettlementsAPI.Settlements = new SettlementsAPI.Settlements(this._client);
  transactionAllocations: TransactionAllocationsAPI.TransactionAllocations =
    new TransactionAllocationsAPI.TransactionAllocations(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);

  /**
   * Returns a paginated list of adjustment types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.retrieveAdjustmentTypes();
   * ```
   */
  retrieveAdjustmentTypes(
    query: FinanceRetrieveAdjustmentTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinanceRetrieveAdjustmentTypesResponse> {
    return this._client.get('/v1/finance/adjustment-types', { query, ...options });
  }

  /**
   * Returns a paginated list of open credit transactions for the current account.
   *
   * @example
   * ```ts
   * const response = await client.finance.retrieveOpenCredits();
   * ```
   */
  retrieveOpenCredits(
    query: FinanceRetrieveOpenCreditsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinanceRetrieveOpenCreditsResponse> {
    return this._client.get('/v1/finance/open-credits', { query, ...options });
  }

  /**
   * Returns a paginated list of transaction methods.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.retrieveTransactionMethods();
   * ```
   */
  retrieveTransactionMethods(
    query: FinanceRetrieveTransactionMethodsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinanceRetrieveTransactionMethodsResponse> {
    return this._client.get('/v1/finance/transaction-methods', { query, ...options });
  }

  /**
   * Returns a paginated list of transaction types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.retrieveTransactionTypes();
   * ```
   */
  retrieveTransactionTypes(
    query: FinanceRetrieveTransactionTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FinanceRetrieveTransactionTypesResponse> {
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
  owner: ItemCategoriesAPI.Owner | null;

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

/**
 * List represents a paginated list of resources.
 */
export interface FinanceRetrieveAdjustmentTypesResponse {
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
  page_info: AgentsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface FinanceRetrieveOpenCreditsResponse {
  /**
   * Resources in this page.
   */
  data: Array<FinanceRetrieveOpenCreditsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace FinanceRetrieveOpenCreditsResponse {
  /**
   * Open (not fully allocated) credit transaction.
   */
  export interface Data {
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
    customer: FinanceAPI.AllocationCustomer | null;

    /**
     * Allocations against invoices for this transaction.
     */
    invoice_allocations: Array<Data.InvoiceAllocation>;

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

  export namespace Data {
    /**
     * Allocation of a credit against an invoice.
     */
    export interface InvoiceAllocation {
      /**
       * Allocated amount as a decimal string.
       */
      amount: string;

      /**
       * Invoice number.
       */
      invoice_number: string;
    }
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface FinanceRetrieveTransactionMethodsResponse {
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
  page_info: AgentsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface FinanceRetrieveTransactionTypesResponse {
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
  page_info: AgentsAPI.PageInfo;
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

Finance.Accounts = Accounts;
Finance.Invoices = Invoices;
Finance.PaymentTerms = PaymentTerms;
Finance.Receivables = Receivables;
Finance.Settlements = Settlements;
Finance.TransactionAllocations = TransactionAllocations;
Finance.Transactions = Transactions;

export declare namespace Finance {
  export {
    type AdjustmentType as AdjustmentType,
    type AllocationCustomer as AllocationCustomer,
    type TransactionMethod as TransactionMethod,
    type TransactionType as TransactionType,
    type FinanceRetrieveAdjustmentTypesResponse as FinanceRetrieveAdjustmentTypesResponse,
    type FinanceRetrieveOpenCreditsResponse as FinanceRetrieveOpenCreditsResponse,
    type FinanceRetrieveTransactionMethodsResponse as FinanceRetrieveTransactionMethodsResponse,
    type FinanceRetrieveTransactionTypesResponse as FinanceRetrieveTransactionTypesResponse,
    type FinanceRetrieveAdjustmentTypesParams as FinanceRetrieveAdjustmentTypesParams,
    type FinanceRetrieveOpenCreditsParams as FinanceRetrieveOpenCreditsParams,
    type FinanceRetrieveTransactionMethodsParams as FinanceRetrieveTransactionMethodsParams,
    type FinanceRetrieveTransactionTypesParams as FinanceRetrieveTransactionTypesParams,
  };

  export {
    Accounts as Accounts,
    type AccountRetrieveInvoicesResponse as AccountRetrieveInvoicesResponse,
    type AccountRetrieveTransactionsResponse as AccountRetrieveTransactionsResponse,
    type AccountRetrieveInvoicesParams as AccountRetrieveInvoicesParams,
    type AccountRetrieveTransactionsParams as AccountRetrieveTransactionsParams,
  };

  export {
    Invoices as Invoices,
    type Invoice as Invoice,
    type InvoicesAPIInvoiceAllocation as InvoiceAllocation,
    type InvoiceSummary as InvoiceSummary,
    type ListInvoiceAllocation as ListInvoiceAllocation,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    PaymentTerms as PaymentTerms,
    type PaymentTerm as PaymentTerm,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermRetrievePaymentTermsResponse as PaymentTermRetrievePaymentTermsResponse,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermPaymentTermsParams as PaymentTermPaymentTermsParams,
    type PaymentTermRetrievePaymentTermsParams as PaymentTermRetrievePaymentTermsParams,
  };

  export {
    Receivables as Receivables,
    type ListReceivableEntry as ListReceivableEntry,
    type ReceivableListParams as ReceivableListParams,
  };

  export {
    Settlements as Settlements,
    type ListTransactionAllocation as ListTransactionAllocation,
    type Settlement as Settlement,
    type SettlementListResponse as SettlementListResponse,
    type SettlementCreateParams as SettlementCreateParams,
    type SettlementRetrieveParams as SettlementRetrieveParams,
    type SettlementUpdateParams as SettlementUpdateParams,
    type SettlementListParams as SettlementListParams,
  };

  export {
    TransactionAllocations as TransactionAllocations,
    type TransactionAllocation as TransactionAllocation,
    type TransactionAllocationDeleteResponse as TransactionAllocationDeleteResponse,
    type TransactionAllocationRetrieveTransactionAllocationsResponse as TransactionAllocationRetrieveTransactionAllocationsResponse,
    type TransactionAllocationUpdateParams as TransactionAllocationUpdateParams,
    type TransactionAllocationRetrieveTransactionAllocationsParams as TransactionAllocationRetrieveTransactionAllocationsParams,
  };

  export {
    Transactions as Transactions,
    type TransactionDetail as TransactionDetail,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
  };
}
