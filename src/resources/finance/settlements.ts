// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as TransactionAllocationsAPI from './transaction-allocations';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, view, update, and delete settlements.
 */
export class Settlements extends APIResource {
  /**
   * Creates a settlement with transaction allocations. A settlement number is
   * automatically generated.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.create({
   *   allocations: [
   *     {
   *       transaction_id: 'tx_01jm4r6700f8nwq3v5hx2d9ktp',
   *       invoice_id: 'iv_01jm4r6700f8nwq3v5hx2d9ktp',
   *       amount: '150.00',
   *       note: null,
   *     },
   *   ],
   *   responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
   * });
   * ```
   */
  create(body: SettlementCreateParams, options?: RequestOptions): APIPromise<Settlement> {
    return this._client.post('/v1/finance/settlements', { body, ...options });
  }

  /**
   * Returns a settlement by ID.
   *
   * @example
   * ```ts
   * const settlement =
   *   await client.finance.settlements.retrieve(
   *     'sl_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: SettlementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Settlement> {
    return this._client.get(path`/v1/finance/settlements/${id}`, { query, ...options });
  }

  /**
   * Partially updates a settlement's number, note, or responsible user.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.update(
   *   '',
   *   {
   *     note: 'Partial payment applied',
   *     number: null,
   *     responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
   *   },
   * );
   * ```
   */
  update(id: string, body: SettlementUpdateParams, options?: RequestOptions): APIPromise<Settlement> {
    return this._client.patch(path`/v1/finance/settlements/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of settlements for the current account.
   *
   * @example
   * ```ts
   * const settlements = await client.finance.settlements.list();
   * ```
   */
  list(
    query: SettlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SettlementListResponse> {
    return this._client.get('/v1/finance/settlements', { query, ...options });
  }

  /**
   * Deletes a settlement, removing allocations and reverting payment statuses on
   * affected invoices and transactions.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.delete(
   *   'sl_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Settlement> {
    return this._client.delete(path`/v1/finance/settlements/${id}`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListTransactionAllocation {
  /**
   * Resources in this page.
   */
  data: Array<TransactionAllocationsAPI.TransactionAllocation>;

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
 * Settlement with expandable allocations.
 */
export interface Settlement {
  /**
   * Settlement ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  allocations: ListTransactionAllocation | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Note attached to this settlement.
   */
  note: string | null;

  /**
   * Settlement number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'settlement';

  /**
   * Account user with profile, role, and department.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface SettlementListResponse {
  /**
   * Resources in this page.
   */
  data: Array<SettlementListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace SettlementListResponse {
  /**
   * SettlementSummary is a lightweight settlement for list views.
   */
  export interface Data {
    /**
     * Settlement ID.
     */
    id: string;

    /**
     * Number of allocations in this settlement.
     */
    allocation_count: number;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Customer names included in this settlement.
     */
    customer_names: Array<string>;

    /**
     * Invoice numbers included in this settlement.
     */
    invoice_numbers: Array<string>;

    /**
     * Settlement number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'settlement_summary';

    /**
     * Total adjustment amount as a decimal string.
     */
    total_adjustments: string | null;

    /**
     * Total credit amount as a decimal string.
     */
    total_credits: string | null;

    /**
     * Total payment amount as a decimal string.
     */
    total_payments: string | null;

    /**
     * Total rebate amount as a decimal string.
     */
    total_rebates: string | null;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

export interface SettlementCreateParams {
  /**
   * Allocations for this settlement.
   */
  allocations: Array<SettlementCreateParams.Allocation>;

  /**
   * Responsible user ID.
   */
  responsible_user_id: string;
}

export namespace SettlementCreateParams {
  /**
   * CreateSettlementAllocationRequest is an allocation in a create settlement
   * request.
   */
  export interface Allocation {
    /**
     * Amount to allocate as a decimal string.
     */
    amount: string;

    /**
     * Invoice ID.
     */
    invoice_id: string;

    /**
     * Note about this allocation.
     */
    note: string | null;

    /**
     * Transaction ID.
     */
    transaction_id: string;
  }
}

export interface SettlementRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'allocations'>;
}

export interface SettlementUpdateParams {
  /**
   * Note for this settlement.
   */
  note: string | null;

  /**
   * Settlement number.
   */
  number: string | null;

  /**
   * Responsible user ID.
   */
  responsible_user_id: string | null;
}

export interface SettlementListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Filter by invoice IDs present in allocations.
   */
  invoice_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by transaction IDs present in allocations.
   */
  transaction_ids?: Array<string>;
}

export declare namespace Settlements {
  export {
    type ListTransactionAllocation as ListTransactionAllocation,
    type Settlement as Settlement,
    type SettlementListResponse as SettlementListResponse,
    type SettlementCreateParams as SettlementCreateParams,
    type SettlementRetrieveParams as SettlementRetrieveParams,
    type SettlementUpdateParams as SettlementUpdateParams,
    type SettlementListParams as SettlementListParams,
  };
}
