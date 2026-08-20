// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from '../core/analytics';
import * as FinanceAPI from './finance';
import * as InvoicesAPI from './invoices';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, view, update, and delete transactions.
 */
export class Transactions extends APIResource {
  /**
   * Records a financial transaction against a customer, such as a payment received,
   * a credit memo, an adjustment, or a rebate.
   *
   * The transaction number is assigned automatically from the account's transaction
   * sequence. The new transaction starts out unapplied, so it shows up as an open
   * credit until it is applied to invoices by recording a settlement.
   *
   * This endpoint requires the permission: `transactions:create`.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.create({
   *     amount: '500.00',
   *     customer_id: 'ac_opnlh43ymyee',
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
   * This endpoint requires the permission: `transactions:read`.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.retrieve(
   *     'tx_hvh9thtzaezn',
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
   * Updates a transaction, changing only the fields present in the request body.
   *
   * Changing the amount does not re-apply the transaction to invoices: existing
   * allocations keep their amounts, and neither the transaction's
   * `is_fully_allocated` flag nor the paid-in-full status of any settled invoice is
   * recomputed.
   *
   * This endpoint requires the permission: `transactions:update`.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.update(
   *     'tx_hvh9thtzaezn',
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
   * Returns a paginated list of transactions for the current account, newest first.
   *
   * Free-text search matches the transaction number and note.
   *
   * This endpoint requires the permission: `transactions:read`.
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
   * Deletes a transaction along with every allocation that applied it to an invoice,
   * and returns the deleted transaction.
   *
   * Invoice payment status is not recomputed, so an invoice this transaction had
   * paid off stays marked paid in full until the next settlement against it
   * recalculates the flag. Deleting a transaction that was already deleted returns
   * an already-deleted error rather than a not-found error.
   *
   * This endpoint requires the permission: `transactions:delete`.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.delete(
   *     'tx_hvh9thtzaezn',
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
   * The kind of correction this transaction represents (see List Adjustment Types
   * for available values).
   *
   * Typically provided when `type` is `adjustment`.
   */
  adjustment_type?: string;

  /**
   * How the money moved: one of `cash`, `check`, `credit_card`, `gift_card`, or
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * Adjustment types classify the `adjustment` transactions recorded against a
   * customer.
   */
  adjustment_type: FinanceAPI.AdjustmentType | null;

  /**
   * Number of allocations against invoices for this transaction.
   */
  allocation_count: number;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
  customer: AnalyticsAPI.Customer | null;

  /**
   * Whether the full transaction amount has been applied to invoices.
   *
   * Recording a settlement that uses this transaction sets the flag to `true`, and
   * deleting that settlement resets it to `false`. Editing or deleting an individual
   * allocation does not recompute it, so it can also be set directly with Update
   * Transaction.
   *
   * While it is `false`, the transaction is treated as an open credit and is
   * returned by List Open Credits.
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
   * The kind of correction this transaction represents (see List Adjustment Types
   * for available values).
   */
  adjustment_type?: string;

  /**
   * New transaction amount as a decimal string, in US dollars.
   */
  amount?: string;

  /**
   * Whether the full transaction amount has been applied to invoices.
   *
   * Set this to correct the flag by hand: editing or deleting individual allocations
   * never recomputes it. While it is `false`, the transaction is returned by List
   * Open Credits.
   */
  is_fully_allocated?: boolean;

  /**
   * How the money moved: one of `cash`, `check`, `credit_card`, `gift_card`, or
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
   *
   * A user ID is also accepted; the value is resolved to an account user in the
   * current account.
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
   * Body param: The kind of correction this transaction represents (see List
   * Adjustment Types for available values).
   *
   * Typically provided when `type` is `adjustment`.
   */
  adjustment_type?: string;

  /**
   * Body param: How the money moved: one of `cash`, `check`, `credit_card`,
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
   * Body param: The kind of correction this transaction represents (see List
   * Adjustment Types for available values).
   */
  adjustment_type?: string;

  /**
   * Body param: New transaction amount as a decimal string, in US dollars.
   */
  amount?: string;

  /**
   * Body param: Whether the full transaction amount has been applied to invoices.
   *
   * Set this to correct the flag by hand: editing or deleting individual allocations
   * never recomputes it. While it is `false`, the transaction is returned by List
   * Open Credits.
   */
  is_fully_allocated?: boolean;

  /**
   * Body param: How the money moved: one of `cash`, `check`, `credit_card`,
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
   *
   * A user ID is also accepted; the value is resolved to an account user in the
   * current account.
   */
  responsible_user_id?: string;
}

export interface TransactionListParams {
  /**
   * Filter by adjustment type codes (see List Adjustment Types for available
   * values).
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
   * Filter by the account group each customer belongs to.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Only include transactions created on or before this date (`YYYY-MM-DD`),
   * covering that whole day.
   */
  ends_at?: string;

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
  starts_at?: string;

  /**
   * Filter by allocation status: `allocated` (marked fully applied to invoices) or
   * `unallocated` (still counted as an open credit).
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
