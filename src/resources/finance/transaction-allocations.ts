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
   * Deletes a transaction allocation.
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
 * Transaction allocation entry in list views.
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
   * Minimal customer sub-resource for allocation entries.
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
   * Adjustment type, if applicable.
   */
  adjustment_type: string | null;

  /**
   * Transaction method (e.g. "check", "wire").
   */
  method: string | null;

  /**
   * Resource type identifier.
   */
  object: 'transaction';

  /**
   * Transaction type (e.g. "payment", "credit").
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
   * Allocation amount as a decimal string.
   */
  amount?: string;
}

export interface TransactionAllocationDeleteResponse {}

export interface TransactionAllocationUpdateParams {
  /**
   * Allocation amount as a decimal string.
   */
  amount?: string;
}

export interface TransactionAllocationListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

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

  /**
   * Filter by transaction type code (e.g. "payment", "credit").
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
