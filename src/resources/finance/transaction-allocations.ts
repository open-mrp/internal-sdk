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
   * Partially updates a transaction allocation.
   *
   * This endpoint requires the permission: `settlements:update`.
   *
   * @example
   * ```ts
   * const transactionAllocation =
   *   await client.finance.transactionAllocations.update(
   *     'txal_016cc92c2d9c0b12801e3160e0',
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
   * Returns a paginated list of transaction allocation entries for the current
   * account.
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
   * Deletes a transaction allocation, making the allocated amount available again as
   * open credit.
   *
   * The parent transaction's `is_fully_allocated` flag is not recomputed
   * automatically; update the transaction separately if needed.
   *
   * This endpoint requires the permission: `settlements:delete`.
   *
   * @example
   * ```ts
   * const transactionAllocation =
   *   await client.finance.transactionAllocations.delete(
   *     'txal_016cc92c2d9c0b12801e3160e0',
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
   * Allocated amount as a decimal string.
   */
  amount: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Minimal customer sub-resource for allocation entries and open-credit entries.
   *
   * It carries its own allocation_customer discriminator (not customer) because the
   * customer id is not always present (allocation list entries omit it), so it is
   * not a guaranteed-resolvable customer reference.
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
   * Note about this allocation.
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
   * Adjustment category code.
   *
   * Typically populated when `type` is `adjustment`; null for other types.
   */
  adjustment_type: string | null;

  /**
   * Payment method code (e.g. `check`, `ach`).
   *
   * Typically present only on payment transactions and null for credit memos,
   * adjustments, and rebates.
   */
  method: string | null;

  /**
   * Resource type identifier.
   */
  object: 'transaction';

  /**
   * Transaction type code: one of `payment`, `credit_memo`, `adjustment`, or
   * `rebate`.
   */
  type: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to update a transaction allocation.
 */
export interface UpdateTransactionAllocationRequest {
  /**
   * New allocated amount as a decimal string, in US dollars.
   *
   * Changing the amount does not recompute the parent transaction's
   * `is_fully_allocated` flag; update the transaction separately if needed.
   */
  amount?: string;
}

export interface TransactionAllocationDeleteResponse {}

export interface TransactionAllocationUpdateParams {
  /**
   * New allocated amount as a decimal string, in US dollars.
   *
   * Changing the amount does not recompute the parent transaction's
   * `is_fully_allocated` flag; update the transaction separately if needed.
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
   * Only include allocations created on or after this date (`YYYY-MM-DD`).
   */
  start_date?: string;

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
