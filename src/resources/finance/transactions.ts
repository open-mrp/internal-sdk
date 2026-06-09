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
  create(body: TransactionCreateParams, options?: RequestOptions): APIPromise<InvoicesAPI.TransactionDetail> {
    return this._client.post('/v1/finance/transactions', { body, ...options });
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
    body: TransactionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.TransactionDetail> {
    return this._client.patch(path`/v1/finance/transactions/${id}`, { body, ...options });
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
   * Deletes a transaction and cascades deletion to allocations.
   *
   * @example
   * ```ts
   * const transactionDetail =
   *   await client.finance.transactions.delete(
   *     'tx_01fc4d4f2b2ee1fa6b6d87257a',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<InvoicesAPI.TransactionDetail> {
    return this._client.delete(path`/v1/finance/transactions/${id}`, options);
  }
}

/**
 * Request to create a transaction.
 */
export interface CreateTransactionRequest {
  /**
   * Transaction amount as a decimal string.
   */
  amount: string;

  /**
   * Customer ID.
   */
  customer_id: string;

  /**
   * Transaction type code.
   */
  type: string;

  /**
   * Adjustment type code.
   */
  adjustment_type?: string;

  /**
   * Transaction method code.
   */
  method?: string;

  /**
   * Note.
   */
  note?: string;

  /**
   * Responsible user ID.
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
  amount: AccountUsersAPI.Quantity | null;

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

/**
 * Request to update a transaction.
 */
export interface UpdateTransactionRequest {
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
   * Adjustment type code.
   */
  adjustment_type?: string;

  /**
   * Amount as a decimal string.
   */
  amount?: string;

  /**
   * Allocation status.
   */
  is_fully_allocated?: boolean;

  /**
   * Transaction method code.
   */
  method?: string;

  /**
   * Note.
   */
  note?: string;

  /**
   * Transaction number.
   */
  number?: string;

  /**
   * Responsible user ID.
   */
  responsible_user_id?: string;
}

export interface TransactionCreateParams {
  /**
   * Transaction amount as a decimal string.
   */
  amount: string;

  /**
   * Customer ID.
   */
  customer_id: string;

  /**
   * Transaction type code.
   */
  type: string;

  /**
   * Adjustment type code.
   */
  adjustment_type?: string;

  /**
   * Transaction method code.
   */
  method?: string;

  /**
   * Note.
   */
  note?: string;

  /**
   * Responsible user ID.
   */
  responsible_user_id?: string;
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
   * Adjustment type code.
   */
  adjustment_type?: string;

  /**
   * Amount as a decimal string.
   */
  amount?: string;

  /**
   * Allocation status.
   */
  is_fully_allocated?: boolean;

  /**
   * Transaction method code.
   */
  method?: string;

  /**
   * Note.
   */
  note?: string;

  /**
   * Transaction number.
   */
  number?: string;

  /**
   * Responsible user ID.
   */
  responsible_user_id?: string;
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
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer'>;

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
    type CreateTransactionRequest as CreateTransactionRequest,
    type ListTransactionSummary as ListTransactionSummary,
    type TransactionSummary as TransactionSummary,
    type UpdateTransactionRequest as UpdateTransactionRequest,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
  };
}
