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
   * Creates a settlement that applies transaction amounts to invoices.
   *
   * The settlement number is generated automatically from a per-account sequence,
   * and the allocated transactions are marked as fully allocated.
   *
   * This endpoint requires the permission: `settlements:create`.
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
   * This endpoint requires the permission: `settlements:read`.
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
   * This endpoint requires the permission: `settlements:update`.
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
   * This endpoint requires the permission: `settlements:read`.
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
   * Deletes a settlement and all of its allocations.
   *
   * Affected invoices revert to an `unpaid` payment status, affected transactions
   * are no longer marked fully allocated, and adjustment transactions referenced
   * only by this settlement are removed.
   *
   * This endpoint requires the permission: `settlements:delete`.
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
 * A single allocation applying part of a transaction's amount to an invoice.
 */
export interface CreateSettlementAllocationRequest {
  /**
   * Amount to allocate as a decimal string.
   */
  amount: string;

  /**
   * ID of the invoice the amount is applied to.
   */
  invoice_id: string;

  /**
   * ID of the transaction (payment, rebate, adjustment, or credit memo) to allocate
   * from.
   */
  transaction_id: string;

  /**
   * Note about this allocation.
   */
  note?: string;
}

/**
 * Request to create a settlement.
 */
export interface CreateSettlementRequest {
  /**
   * Allocations to record in this settlement.
   */
  allocations: Array<CreateSettlementAllocationRequest>;

  /**
   * ID of the user responsible for this settlement.
   *
   * Accepts either an account user ID or a user ID; the value is resolved to an
   * account user in the current account.
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
 * A batch of transaction allocations applying customer payments and credits to
 * invoices.
 *
 * Each allocation in a settlement applies part of a transaction (payment, rebate,
 * adjustment, or credit memo) to a specific invoice.
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
   * Number identifying the settlement within the account.
   *
   * Generated automatically from a per-account sequence at creation; it can be
   * changed later but must remain unique within the account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'settlement';

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A condensed settlement shape returned by List Settlements.
 *
 * Replaces the full allocation list with aggregate totals per transaction type,
 * plus the invoice numbers and customer names the allocations touch.
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
   * Total amount allocated from `adjustment` transactions, as a decimal string.
   */
  total_adjustments: string | null;

  /**
   * Total amount allocated from `credit_memo` transactions, as a decimal string.
   */
  total_credits: string | null;

  /**
   * Total amount allocated from `payment` transactions, as a decimal string.
   */
  total_payments: string | null;

  /**
   * Total amount allocated from `rebate` transactions, as a decimal string.
   */
  total_rebates: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update a settlement.
 */
export interface UpdateSettlementRequest {
  /**
   * Note for this settlement.
   */
  note?: string;

  /**
   * New settlement number.
   *
   * Must be unique within the account.
   */
  number?: string;

  /**
   * ID of the user responsible for this settlement.
   *
   * Accepts either an account user ID or a user ID; the value is resolved to an
   * account user in the current account.
   */
  responsible_user_id?: string;
}

export interface SettlementCreateParams {
  /**
   * Allocations to record in this settlement.
   */
  allocations: Array<CreateSettlementAllocationRequest>;

  /**
   * ID of the user responsible for this settlement.
   *
   * Accepts either an account user ID or a user ID; the value is resolved to an
   * account user in the current account.
   */
  responsible_user_id: string;
}

export interface SettlementRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user' | 'allocations'>;
}

export interface SettlementUpdateParams {
  /**
   * Note for this settlement.
   */
  note?: string;

  /**
   * New settlement number.
   *
   * Must be unique within the account.
   */
  number?: string;

  /**
   * ID of the user responsible for this settlement.
   *
   * Accepts either an account user ID or a user ID; the value is resolved to an
   * account user in the current account.
   */
  responsible_user_id?: string;
}

export interface SettlementListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only return settlements created before this date (`YYYY-MM-DD`).
   */
  end_date?: string;

  /**
   * Filter by invoice IDs present in allocations.
   */
  invoice_ids?: Array<string>;

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
   * Only return settlements created on or after this date (`YYYY-MM-DD`).
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
