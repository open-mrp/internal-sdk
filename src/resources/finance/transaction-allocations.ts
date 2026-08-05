// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FinanceAPI from './finance';
import * as InvoicesAPI from './invoices';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * View, update, and delete transaction allocations, and list open credits.
 */
export class TransactionAllocations extends APIResource {
  /**
   * Changes how much of a transaction is applied to the invoice it was allocated to.
   *
   * Only the amount can be changed; the transaction and invoice the allocation links
   * are fixed. Payment roll-ups are left alone, so the transaction's
   * `is_fully_allocated` flag and the invoice's paid-in-full status keep their
   * previous values.
   *
   * This endpoint requires the permission: `settlements:update`.
   *
   * @example
   * ```ts
   * const transactionAllocation =
   *   await client.finance.transactionAllocations.update(
   *     'txal_2o8lu50zvphn',
   *     { amount: '150.00' },
   *   );
   * ```
   */
  update(
    id: string,
    body: TransactionAllocationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.TransactionAllocation> {
    return this._client.patch(path`/v1/finance/transaction-allocations/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of the individual applications of transaction money to
   * invoices, newest first.
   *
   * Each entry pairs one transaction with one invoice and the amount applied.
   * Entries are created by recording a settlement; there is no endpoint that creates
   * one directly. Free-text search matches the invoice number and the transaction
   * number.
   *
   * This endpoint requires the permission: `settlements:read`.
   *
   * @example
   * ```ts
   * const listAllocationEntry =
   *   await client.finance.transactionAllocations.list();
   * ```
   */
  list(
    query: TransactionAllocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAllocationEntry> {
    return this._client.get('/v1/finance/transaction-allocations', { query, ...options });
  }

  /**
   * Removes the application of a transaction's money to one invoice, leaving both
   * the transaction and the invoice in place.
   *
   * Payment roll-ups are left alone: the transaction's `is_fully_allocated` flag and
   * the invoice's paid-in-full status keep their previous values, so set
   * `is_fully_allocated` to `false` with Update Transaction to return the freed
   * amount to the open credits list.
   *
   * This endpoint requires the permission: `settlements:delete`.
   *
   * @example
   * ```ts
   * const transactionAllocation =
   *   await client.finance.transactionAllocations.delete(
   *     'txal_2o8lu50zvphn',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TransactionAllocationDeleteResponse> {
    return this._client.delete(path`/v1/finance/transaction-allocations/${id}`, options);
  }
}

/**
 * An application of part of a transaction's amount against a specific invoice, as
 * returned in list views.
 */
export interface AllocationEntry {
  /**
   * Allocation ID.
   */
  id: string;

  /**
   * The part of the transaction's amount applied to this invoice, as a decimal
   * string in US dollars.
   */
  amount: string;

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
  customer: FinanceAPI.AllocationCustomer | null;

  /**
   * Human-readable formatted amount (e.g. "$500.00").
   */
  display_amount: string;

  /**
   * Minimal invoice sub-resource for allocation entries.
   */
  invoice: InvoicesAPI.AllocationInvoice | null;

  /**
   * Free-form note carried by the underlying transaction, not a note specific to
   * this allocation.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'allocation_entry';

  /**
   * Minimal transaction sub-resource for allocation entries.
   */
  transaction: AllocationTransaction | null;
}

/**
 * Minimal transaction sub-resource for allocation entries.
 */
export interface AllocationTransaction {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Adjustment category code (e.g. `discount`, `write_off`).
   *
   * Typically set only when `type` is `adjustment`.
   */
  adjustment_type: string | null;

  /**
   * Payment method code (e.g. `check`, `ach`).
   *
   * Typically set only when `type` is `payment`.
   */
  method: string | null;

  /**
   * Resource type identifier.
   */
  object: 'transaction';

  /**
   * Type code of the transaction the money came from.
   *
   * One of `payment`, `credit_memo`, `adjustment`, or `rebate`.
   */
  type: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAllocationEntry {
  /**
   * Resources in this page.
   */
  data: Array<AllocationEntry>;

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
 * Request to update a transaction allocation.
 */
export interface UpdateTransactionAllocationRequest {
  /**
   * New amount of the transaction to apply to this invoice, as a decimal string in
   * US dollars.
   *
   * The new amount is not checked against the transaction's total or the invoice's
   * balance.
   */
  amount?: string;
}

export interface TransactionAllocationDeleteResponse {}

export interface TransactionAllocationUpdateParams {
  /**
   * New amount of the transaction to apply to this invoice, as a decimal string in
   * US dollars.
   *
   * The new amount is not checked against the transaction's total or the invoice's
   * balance.
   */
  amount?: string;
}

export interface TransactionAllocationListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only include allocations created before this date (`YYYY-MM-DD`).
   */
  ends_at?: string;

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
   * Only include allocations created on or after this date (`YYYY-MM-DD`).
   */
  starts_at?: string;

  /**
   * Filter by the underlying transaction's type code (`payment`, `credit_memo`,
   * `adjustment`, or `rebate`).
   */
  transaction_type?: string;
}

export declare namespace TransactionAllocations {
  export {
    type AllocationEntry as AllocationEntry,
    type AllocationTransaction as AllocationTransaction,
    type ListAllocationEntry as ListAllocationEntry,
    type UpdateTransactionAllocationRequest as UpdateTransactionAllocationRequest,
    type TransactionAllocationDeleteResponse as TransactionAllocationDeleteResponse,
    type TransactionAllocationUpdateParams as TransactionAllocationUpdateParams,
    type TransactionAllocationListParams as TransactionAllocationListParams,
  };
}
