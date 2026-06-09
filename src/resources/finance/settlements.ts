// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvoicesAPI from './invoices';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
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
   *       transaction_id: 'tx_01fc4d4f2b2ee1fa6b6d87257a',
   *       invoice_id: 'iv_018b5949ada8abca36358bbea9',
   *       amount: '150.00',
   *     },
   *   ],
   *   responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
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
   *     'sl_014f3f9af18ff1c8ded3205149',
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
   *   'sl_014f3f9af18ff1c8ded3205149',
   *   {
   *     note: 'Partial payment applied',
   *     responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: SettlementUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Settlement> {
    return this._client.patch(path`/v1/finance/settlements/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of settlements for the current account.
   *
   * @example
   * ```ts
   * const listSettlementSummary =
   *   await client.finance.settlements.list();
   * ```
   */
  list(
    query: SettlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSettlementSummary> {
    return this._client.get('/v1/finance/settlements', { query, ...options });
  }

  /**
   * Deletes a settlement, removing allocations and reverting payment statuses on
   * affected invoices and transactions.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.delete(
   *   'sl_014f3f9af18ff1c8ded3205149',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Settlement> {
    return this._client.delete(path`/v1/finance/settlements/${id}`, options);
  }
}

/**
 * CreateSettlementAllocationRequest is an allocation in a create settlement
 * request.
 */
export interface CreateSettlementAllocationRequest {
  /**
   * Amount to allocate as a decimal string.
   */
  amount: string;

  /**
   * Invoice ID.
   */
  invoice_id: string;

  /**
   * Transaction ID.
   */
  transaction_id: string;

  /**
   * Note about this allocation.
   */
  note?: string;
}

/**
 * CreateSettlementRequest is the request to create a settlement.
 */
export interface CreateSettlementRequest {
  /**
   * Allocations for this settlement.
   */
  allocations: Array<CreateSettlementAllocationRequest>;

  /**
   * Responsible user ID.
   */
  responsible_user_id: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSettlementSummary {
  /**
   * Resources in this page.
   */
  data: Array<SettlementSummary>;

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
  allocations: InvoicesAPI.ListTransactionAllocation | null;

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
 * SettlementSummary is a lightweight settlement for list views.
 */
export interface SettlementSummary {
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

/**
 * UpdateSettlementRequest is the request to update a settlement.
 */
export interface UpdateSettlementRequest {
  /**
   * Note for this settlement.
   */
  note?: string;

  /**
   * Settlement number.
   */
  number?: string;

  /**
   * Responsible user ID.
   */
  responsible_user_id?: string;
}

export interface SettlementCreateParams {
  /**
   * Allocations for this settlement.
   */
  allocations: Array<CreateSettlementAllocationRequest>;

  /**
   * Responsible user ID.
   */
  responsible_user_id: string;
}

export interface SettlementRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user' | 'allocations'>;
}

export interface SettlementUpdateParams {
  /**
   * Note for this settlement.
   */
  note?: string;

  /**
   * Settlement number.
   */
  number?: string;

  /**
   * Responsible user ID.
   */
  responsible_user_id?: string;
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
