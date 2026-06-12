// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FinanceAPI from './finance';
import * as InvoicesAPI from './invoices';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as CustomersAPI from '../sales/customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, view, update, and delete transactions.
 */
export class Transactions extends APIResource {
  /**
   * Creates a transaction with an automatically generated transaction number.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.create({
   *     amount: '500.00',
   *     customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *     type: 'payment',
   *     method: 'check',
   *     note: 'Q1 invoice payment',
   *   });
   * ```
   */
  create(
    params: TransactionCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.TransactionDetail> {
    const { include, ...body } = params;
    return this._client.post('/v1/finance/transactions', { query: { include }, body, ...options });
  }

  /**
   * Returns a transaction by ID.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.retrieve(
   *     'tx_01fc4d4f2b2ee1fa6b6d87257a',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: TransactionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.TransactionDetail> {
    return this._client.get(path`/v1/finance/transactions/${id}`, { query, ...options });
  }

  /**
   * Partially updates a transaction.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.update(
   *     'tx_01fc4d4f2b2ee1fa6b6d87257a',
   *     {
   *       clear_adjustment_type: false,
   *       clear_responsible_user: false,
   *       clear_transaction_method: false,
   *       amount: '750.00',
   *       method: 'ach',
   *       note: 'Updated payment note',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: TransactionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.TransactionDetail> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/finance/transactions/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of transactions for the current account.
   *
   * @example
   * ```ts
   * const listTransactionSummary =
   *   await client.finance.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTransactionSummary> {
    return this._client.get('/v1/finance/transactions', { query, ...options });
  }

  /**
   * Deletes a transaction along with all of its invoice allocations, and returns the
   * deleted transaction.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.delete(
   *     'tx_01fc4d4f2b2ee1fa6b6d87257a',
   *   );
   * ```
   */
  delete(
    id: string,
    params: TransactionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.TransactionDetail> {
    const { include } = params ?? {};
    return this._client.delete(path`/v1/finance/transactions/${id}`, { query: { include }, ...options });
  }
}

/**
 * Request to create a transaction.
 */
export interface CreateTransactionRequest {
  /**
   * Transaction amount as a decimal string, in US dollars.
   */
  amount: string;

  /**
   * ID of the customer the transaction is recorded against.
   */
  customer_id: string;

  /**
   * Transaction type code.
   *
   * - `payment`: money received from the customer.
   * - `credit_memo`: a credit issued to the customer.
   * - `adjustment`: a manual correction (also provide `adjustment_type`).
   * - `rebate`: a rebate granted to the customer.
   */
  type: string;

  /**
   * Adjustment type code (see List Adjustment Types for available values).
   *
   * Typically provided when `type` is `adjustment`.
   */
  adjustment_type?: string;

  /**
   * Payment method code: one of `cash`, `check`, `credit_card`, `gift_card`, or
   * `ach`.
   *
   * Typically provided for payment transactions.
   */
  method?: string;

  /**
   * Free-form note attached to the transaction.
   */
  note?: string;

  /**
   * ID of the account user responsible for the transaction.
   *
   * When omitted, the account user making the request is recorded as responsible.
   */
  responsible_user_id?: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListTransactionSummary {
  /**
   * Resources in this page.
   */
  data: Array<TransactionSummary>;

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
 * Lightweight transaction for list views.
 */
export interface TransactionSummary {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * A category of financial adjustment, such as a discount, fee, or write-off.
   *
   * Adjustment types classify adjustment transactions recorded against customer
   * invoices.
   */
  adjustment_type: FinanceAPI.AdjustmentType | null;

  /**
   * Number of allocations against invoices for this transaction.
   */
  allocation_count: number;

  /**
   * Value with an associated unit.
   */
  amount: AccountUsersAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Whether the full transaction amount has been allocated against invoices.
   *
   * When `false`, some of the amount remains as an open (unapplied) balance and the
   * transaction appears in the open credits list. This flag is set explicitly (see
   * Update Transaction); it is not recomputed automatically when allocations change.
   */
  is_fully_allocated: boolean;

  /**
   * Human-readable transaction number, unique within the account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction_summary';

  /**
   * The payment method used to make a transaction, such as cash or check.
   */
  transaction_method: FinanceAPI.TransactionMethod | null;

  /**
   * The category of a financial transaction, such as a payment or credit memo.
   */
  transaction_type: FinanceAPI.TransactionType | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to update a transaction.
 */
export interface UpdateTransactionRequest {
  /**
   * Set to true to clear the adjustment type.
   *
   * Takes precedence over `adjustment_type` if both are provided.
   */
  clear_adjustment_type: boolean;

  /**
   * Set to true to clear the responsible user.
   *
   * Takes precedence over `responsible_user_id` if both are provided.
   */
  clear_responsible_user: boolean;

  /**
   * Set to true to clear the transaction method.
   *
   * Takes precedence over `method` if both are provided.
   */
  clear_transaction_method: boolean;

  /**
   * Adjustment type code (see List Adjustment Types for available values).
   */
  adjustment_type?: string;

  /**
   * New transaction amount as a decimal string, in US dollars.
   */
  amount?: string;

  /**
   * Whether the full transaction amount has been allocated against invoices.
   *
   * This flag is set explicitly here; it is not recomputed automatically when
   * allocations change.
   */
  is_fully_allocated?: boolean;

  /**
   * Payment method code: one of `cash`, `check`, `credit_card`, `gift_card`, or
   * `ach`.
   */
  method?: string;

  /**
   * Free-form note attached to the transaction.
   */
  note?: string;

  /**
   * New transaction number.
   *
   * Must be unique within the account; the request fails with a conflict error if
   * another transaction already uses it.
   */
  number?: string;

  /**
   * ID of the account user responsible for the transaction.
   */
  responsible_user_id?: string;
}

export interface TransactionCreateParams {
  /**
   * Body param: Transaction amount as a decimal string, in US dollars.
   */
  amount: string;

  /**
   * Body param: ID of the customer the transaction is recorded against.
   */
  customer_id: string;

  /**
   * Body param: Transaction type code.
   *
   * - `payment`: money received from the customer.
   * - `credit_memo`: a credit issued to the customer.
   * - `adjustment`: a manual correction (also provide `adjustment_type`).
   * - `rebate`: a rebate granted to the customer.
   */
  type: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'allocations' | 'customer' | 'responsible_user' | 'responsible_user.user'>;

  /**
   * Body param: Adjustment type code (see List Adjustment Types for available
   * values).
   *
   * Typically provided when `type` is `adjustment`.
   */
  adjustment_type?: string;

  /**
   * Body param: Payment method code: one of `cash`, `check`, `credit_card`,
   * `gift_card`, or `ach`.
   *
   * Typically provided for payment transactions.
   */
  method?: string;

  /**
   * Body param: Free-form note attached to the transaction.
   */
  note?: string;

  /**
   * Body param: ID of the account user responsible for the transaction.
   *
   * When omitted, the account user making the request is recorded as responsible.
   */
  responsible_user_id?: string;
}

export interface TransactionRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'allocations' | 'customer' | 'responsible_user' | 'responsible_user.user'>;
}

export interface TransactionUpdateParams {
  /**
   * Body param: Set to true to clear the adjustment type.
   *
   * Takes precedence over `adjustment_type` if both are provided.
   */
  clear_adjustment_type: boolean;

  /**
   * Body param: Set to true to clear the responsible user.
   *
   * Takes precedence over `responsible_user_id` if both are provided.
   */
  clear_responsible_user: boolean;

  /**
   * Body param: Set to true to clear the transaction method.
   *
   * Takes precedence over `method` if both are provided.
   */
  clear_transaction_method: boolean;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'allocations' | 'customer' | 'responsible_user' | 'responsible_user.user'>;

  /**
   * Body param: Adjustment type code (see List Adjustment Types for available
   * values).
   */
  adjustment_type?: string;

  /**
   * Body param: New transaction amount as a decimal string, in US dollars.
   */
  amount?: string;

  /**
   * Body param: Whether the full transaction amount has been allocated against
   * invoices.
   *
   * This flag is set explicitly here; it is not recomputed automatically when
   * allocations change.
   */
  is_fully_allocated?: boolean;

  /**
   * Body param: Payment method code: one of `cash`, `check`, `credit_card`,
   * `gift_card`, or `ach`.
   */
  method?: string;

  /**
   * Body param: Free-form note attached to the transaction.
   */
  note?: string;

  /**
   * Body param: New transaction number.
   *
   * Must be unique within the account; the request fails with a conflict error if
   * another transaction already uses it.
   */
  number?: string;

  /**
   * Body param: ID of the account user responsible for the transaction.
   */
  responsible_user_id?: string;
}

export interface TransactionListParams {
  /**
   * Filter by adjustment type codes.
   */
  adjustment_types?: Array<string>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter by customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Only include transactions created before this date (`YYYY-MM-DD`).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by payment method codes (`cash`, `check`, `credit_card`, `gift_card`,
   * `ach`).
   */
  methods?: Array<string>;

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

  /**
   * Filter by allocation status: `allocated` (fully allocated against invoices) or
   * `unallocated` (has an open balance).
   */
  status?: string;

  /**
   * Filter by transaction type codes (`payment`, `credit_memo`, `adjustment`,
   * `rebate`).
   */
  types?: Array<string>;
}

export interface TransactionDeleteParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'allocations' | 'customer' | 'responsible_user' | 'responsible_user.user'>;
}

export declare namespace Transactions {
  export {
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
}
