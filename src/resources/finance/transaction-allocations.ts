// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as FinanceAPI from './finance';
import * as InvoicesAPI from './invoices';
import * as TransactionsAPI from './transactions';
import * as BatchesAPI from '../operations/batches/batches';
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
   *     'txal_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { amount: '150.00' },
   *   );
   * ```
   */
  update(
    id: string,
    body: TransactionAllocationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionAllocation> {
    return this._client.patch(path`/v1/finance/transaction-allocations/${id}`, { body, ...options });
  }

  /**
   * Deletes a transaction allocation.
   *
   * @example
   * ```ts
   * const transactionAllocation =
   *   await client.finance.transactionAllocations.delete(
   *     'txal_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TransactionAllocationDeleteResponse> {
    return this._client.delete(path`/v1/finance/transaction-allocations/${id}`, options);
  }

  /**
   * Returns a paginated list of transaction allocation entries for the current
   * account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.transactionAllocations.retrieveTransactionAllocations();
   * ```
   */
  retrieveTransactionAllocations(
    query: TransactionAllocationRetrieveTransactionAllocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionAllocationRetrieveTransactionAllocationsResponse> {
    return this._client.get('/v1/finance/transaction-allocations', { query, ...options });
  }
}

/**
 * Allocation of a transaction against an invoice.
 */
export interface TransactionAllocation {
  /**
   * Allocation ID.
   */
  id: string;

  /**
   * Value with an associated unit.
   */
  amount: BatchesAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Lightweight invoice for list views.
   */
  invoice: InvoicesAPI.InvoiceSummary | null;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'transaction_allocation';

  /**
   * Full transaction resource.
   */
  transaction: TransactionsAPI.TransactionDetail | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface TransactionAllocationDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface TransactionAllocationRetrieveTransactionAllocationsResponse {
  /**
   * Resources in this page.
   */
  data: Array<TransactionAllocationRetrieveTransactionAllocationsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace TransactionAllocationRetrieveTransactionAllocationsResponse {
  /**
   * Transaction allocation entry in list views.
   */
  export interface Data {
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
    invoice: Data.Invoice | null;

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
    transaction: Data.Transaction | null;
  }

  export namespace Data {
    /**
     * Minimal invoice sub-resource for allocation entries.
     */
    export interface Invoice {
      /**
       * Invoice ID.
       */
      id: string;

      /**
       * Invoice number.
       */
      number: string;

      /**
       * Resource type identifier.
       */
      object: 'invoice_summary';
    }

    /**
     * Minimal transaction sub-resource for allocation entries.
     */
    export interface Transaction {
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
  }
}

export interface TransactionAllocationUpdateParams {
  /**
   * Allocation amount as a decimal string.
   */
  amount: string | null;
}

export interface TransactionAllocationRetrieveTransactionAllocationsParams {
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
    type TransactionAllocation as TransactionAllocation,
    type TransactionAllocationDeleteResponse as TransactionAllocationDeleteResponse,
    type TransactionAllocationRetrieveTransactionAllocationsResponse as TransactionAllocationRetrieveTransactionAllocationsResponse,
    type TransactionAllocationUpdateParams as TransactionAllocationUpdateParams,
    type TransactionAllocationRetrieveTransactionAllocationsParams as TransactionAllocationRetrieveTransactionAllocationsParams,
  };
}
