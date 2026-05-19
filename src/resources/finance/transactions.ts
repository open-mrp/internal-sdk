// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as FinanceAPI from './finance';
import * as SettlementsAPI from './settlements';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as BatchesAPI from '../operations/batches/batches';
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
   *     adjustment_type: null,
   *     amount: '500.00',
   *     customer_id: 'ac_01gf7a8200er3ar3pkfrb6kk29',
   *     method: 'check',
   *     note: 'Q1 invoice payment',
   *     responsible_user_id: null,
   *     type: 'payment',
   *   });
   * ```
   */
  create(body: TransactionCreateParams, options?: RequestOptions): APIPromise<TransactionDetail> {
    return this._client.post('/v1/finance/transactions', { body, ...options });
  }

  /**
   * Returns a transaction by ID.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.retrieve(
   *     'tx_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: TransactionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionDetail> {
    return this._client.get(path`/v1/finance/transactions/${id}`, { query, ...options });
  }

  /**
   * Partially updates a transaction.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.update(
   *     'tx_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       adjustment_type: null,
   *       amount: '750.00',
   *       clear_adjustment_type: false,
   *       clear_responsible_user: false,
   *       clear_transaction_method: false,
   *       is_fully_allocated: null,
   *       method: 'ach',
   *       note: 'Updated payment note',
   *       number: null,
   *       responsible_user_id: null,
   *     },
   *   );
   * ```
   */
  update(id: string, body: TransactionUpdateParams, options?: RequestOptions): APIPromise<TransactionDetail> {
    return this._client.patch(path`/v1/finance/transactions/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of transactions for the current account.
   *
   * @example
   * ```ts
   * const transactions =
   *   await client.finance.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/v1/finance/transactions', { query, ...options });
  }

  /**
   * Deletes a transaction and cascades deletion to allocations.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.delete(
   *     'tx_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TransactionDetail> {
    return this._client.delete(path`/v1/finance/transactions/${id}`, options);
  }
}

/**
 * Full transaction resource.
 */
export interface TransactionDetail {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Adjustment type resource.
   */
  adjustment_type: FinanceAPI.AdjustmentType | null;

  /**
   * Number of allocations.
   */
  allocation_count: number;

  /**
   * List represents a paginated list of resources.
   */
  allocations: SettlementsAPI.ListTransactionAllocation | null;

  /**
   * Value with an associated unit.
   */
  amount: BatchesAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Whether fully allocated against invoices.
   */
  is_fully_allocated: boolean;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Transaction number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction';

  /**
   * Account user with profile, role, and department.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Stripe payment ID.
   */
  stripe_payment_id: string | null;

  /**
   * Transaction method resource.
   */
  transaction_method: FinanceAPI.TransactionMethod | null;

  /**
   * Transaction type resource.
   */
  transaction_type: FinanceAPI.TransactionType | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface TransactionListResponse {
  /**
   * Resources in this page.
   */
  data: Array<TransactionListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace TransactionListResponse {
  /**
   * Lightweight transaction for list views.
   */
  export interface Data {
    /**
     * Transaction ID.
     */
    id: string;

    /**
     * Adjustment type resource.
     */
    adjustment_type: FinanceAPI.AdjustmentType | null;

    /**
     * Number of allocations.
     */
    allocation_count: number;

    /**
     * Value with an associated unit.
     */
    amount: BatchesAPI.Quantity | null;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Customer account.
     */
    customer: CustomersAPI.Customer | null;

    /**
     * Whether fully allocated against invoices.
     */
    is_fully_allocated: boolean;

    /**
     * Transaction number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'transaction_summary';

    /**
     * Transaction method resource.
     */
    transaction_method: FinanceAPI.TransactionMethod | null;

    /**
     * Transaction type resource.
     */
    transaction_type: FinanceAPI.TransactionType | null;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

export interface TransactionCreateParams {
  /**
   * Adjustment type code.
   */
  adjustment_type: string | null;

  /**
   * Transaction amount as a decimal string.
   */
  amount: string;

  /**
   * Customer ID.
   */
  customer_id: string;

  /**
   * Transaction method code.
   */
  method: string | null;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Responsible user ID.
   */
  responsible_user_id: string | null;

  /**
   * Transaction type code.
   */
  type: string;
}

export interface TransactionRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'allocations' | 'customer' | 'responsible_user'>;
}

export interface TransactionUpdateParams {
  /**
   * Adjustment type code.
   */
  adjustment_type: string | null;

  /**
   * Amount as a decimal string.
   */
  amount: string | null;

  /**
   * Set to true to clear the adjustment type.
   */
  clear_adjustment_type: boolean;

  /**
   * Set to true to clear the responsible user.
   */
  clear_responsible_user: boolean;

  /**
   * Set to true to clear the transaction method.
   */
  clear_transaction_method: boolean;

  /**
   * Allocation status.
   */
  is_fully_allocated: boolean | null;

  /**
   * Transaction method code.
   */
  method: string | null;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Transaction number.
   */
  number: string | null;

  /**
   * Responsible user ID.
   */
  responsible_user_id: string | null;
}

export interface TransactionListParams {
  /**
   * Filter by adjustment type codes.
   */
  adjustment_types?: Array<string>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
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
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by transaction method codes.
   */
  methods?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by allocation status (allocated, unallocated, partially_allocated).
   */
  status?: string;

  /**
   * Filter by transaction type codes.
   */
  types?: Array<string>;
}

export declare namespace Transactions {
  export {
    type TransactionDetail as TransactionDetail,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
  };
}
