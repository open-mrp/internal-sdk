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
   * Returns a paginated list of the adjustment categories that can be recorded on an
   * adjustment transaction, such as discounts, fees, and write-offs.
   *
   * Adjustment types are platform-provided and identical for every account.
   * Free-text search matches the display name.
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
   * Returns a paginated list of customer transactions that still have money left to
   * apply to invoices, newest first.
   *
   * Membership is driven by each transaction's `is_fully_allocated` flag rather than
   * by a recomputed balance, so a transaction remains listed until that flag is set.
   * Free-text search matches the transaction ID, transaction number, customer name,
   * and note.
   *
   * This endpoint requires the permission: `settlements:read`.
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
   * Returns the payment methods that can be recorded on a transaction, such as cash,
   * check, and ACH.
   *
   * The set is fixed by the platform and identical for every account, so the results
   * come back in one page; supplying a pagination cursor returns a validation error.
   * Free-text search matches the display name.
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
   * Returns the transaction types that can be recorded against a customer: payments,
   * credit memos, adjustments, and rebates.
   *
   * The set is fixed by the platform and identical for every account, so the results
   * come back in one page; supplying a pagination cursor returns a validation error.
   * Free-text search matches the display name.
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
 * A category of financial adjustment, such as a discount, fee, or write-off.
 *
 * Adjustment types classify the `adjustment` transactions recorded against a
 * customer.
 */
export interface AdjustmentType {
  /**
   * Adjustment type ID.
   */
  id: string;

  /**
   * Machine-readable code identifying what kind of adjustment this is.
   *
   * - `discount`: a price reduction.
   * - `shipping_discrepancy`: corrects a difference between quoted and actual
   *   freight.
   * - `short_payment`: reconciles an invoice paid for less than the amount due.
   * - `write_off`: cancels an uncollectible balance.
   * - `fee`: an additional charge.
   * - `refund`: returns money to the customer.
   */
  code: 'discount' | 'shipping_discrepancy' | 'short_payment' | 'write_off' | 'fee' | 'refund';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Human-readable name of the adjustment type (e.g. "Discount").
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
 * Minimal customer reference carried by allocation entries and open-credit
 * entries.
 *
 * Open-credit entries identify the customer by `id`; allocation entries carry only
 * the customer's name and number.
 */
export interface AllocationCustomer {
  /**
   * Customer account ID.
   */
  id: string | null;

  /**
   * Customer display name.
   */
  name: string;

  /**
   * The customer number for this customer, matching the `number` on your customer
   * record for it.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A transaction that still has credit available to apply to invoices.
 *
 * Whether a transaction counts as an open credit is driven by its
 * `is_fully_allocated` flag rather than by a recomputed balance, so a transaction
 * keeps appearing here until that flag is set — even if its allocations already
 * cover the full amount.
 */
export interface OpenCreditEntry {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Display name of the adjustment category, such as "Discount" or "Write Off".
   *
   * Typically set only on adjustment transactions.
   */
  adjustment_type: string | null;

  /**
   * Total amount already allocated against invoices as a decimal string.
   */
  allocated_amount: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Minimal customer reference carried by allocation entries and open-credit
   * entries.
   *
   * Open-credit entries identify the customer by `id`; allocation entries carry only
   * the customer's name and number.
   */
  customer: AllocationCustomer | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  invoice_allocations: ListInvoiceAllocationEntry | null;

  /**
   * Credit still available to apply, as a decimal string (`original_amount` minus
   * `allocated_amount`).
   */
  leftover_amount: string;

  /**
   * Free-form note attached to the transaction.
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
   * Username of the account user recorded as responsible for the transaction.
   */
  responsible_user_name: string | null;

  /**
   * Identifier of the Stripe payment that produced this transaction.
   */
  stripe_payment_id: string | null;

  /**
   * Display name of the payment method, such as "Check" or "Credit Card".
   *
   * Typically set only on payment transactions.
   */
  transaction_method: string | null;

  /**
   * Display name of the transaction's type, such as "Payment" or "Credit Memo".
   */
  transaction_type: string;
}

/**
 * The payment method used to make a transaction, such as cash or check.
 */
export interface TransactionMethod {
  /**
   * Transaction method ID.
   */
  id: string;

  /**
   * Machine-readable code identifying how the transaction was made.
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
 * The category of a financial transaction, such as a payment or credit memo.
 */
export interface TransactionType {
  /**
   * Transaction type ID.
   */
  id: string;

  /**
   * Machine-readable code identifying the kind of transaction.
   *
   * - `payment`: money received from the customer.
   * - `credit_memo`: a credit issued to the customer.
   * - `adjustment`: a manual correction (see the transaction's `adjustment_type`).
   * - `rebate`: a rebate granted to the customer.
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
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface FinanceRetrieveOpenCreditsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer account IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Only include transactions created before this date (`YYYY-MM-DD`).
   */
  end_date?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only include transactions created on or after this date (`YYYY-MM-DD`).
   */
  start_date?: string;
}

export interface FinanceRetrieveTransactionMethodsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface FinanceRetrieveTransactionTypesParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
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
