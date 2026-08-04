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
   * The settlement number is generated automatically from a per-account sequence.
   *
   * Once the settlement is recorded, every transaction it drew from is marked fully
   * allocated even if only part of its amount was applied, which drops it out of
   * List Open Credits. Each invoice it touched has its paid-in-full and overpaid
   * flags — and therefore its `payment_status` — recomputed from every allocation
   * recorded against that invoice, including allocations made by other settlements.
   *
   * This endpoint requires the permission: `settlements:create`.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.create({
   *   allocations: [
   *     {
   *       transaction_id: 'tx_hvh9thtzaezn',
   *       invoice_id: 'iv_m982ezb0fgp7',
   *       amount: '150.00',
   *     },
   *   ],
   *   responsible_user_id: 'us_43irtlt2ajz6',
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
   *     'sl_2k5juz0yf5a7',
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
   * The allocations a settlement contains cannot be changed here; use the
   * transaction allocation endpoints to amend or remove an individual allocation.
   *
   * This endpoint requires the permission: `settlements:update`.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.update(
   *   'sl_2k5juz0yf5a7',
   *   {
   *     note: 'Partial payment applied',
   *     responsible_user_id: 'us_43irtlt2ajz6',
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
   * Returns a paginated list of settlements, newest first.
   *
   * Each entry is a condensed view that summarizes the settlement's allocations as
   * totals per transaction type instead of listing them; retrieve a settlement to
   * see its individual allocations. Filtering by `transaction_ids` or `invoice_ids`
   * also narrows each entry's aggregates to just the matching allocations, and when
   * both are supplied a settlement matches only if one of its allocations satisfies
   * both.
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
   * Every transaction the settlement drew from is marked not fully allocated, so it
   * reappears in List Open Credits even when allocations from other settlements
   * already cover its full amount.
   *
   * Every invoice the settlement touched has its paid-in-full and overpaid flags
   * cleared rather than recomputed, so its `payment_status` returns to `unpaid` even
   * when other settlements still pay it off; those flags are only recomputed the
   * next time a settlement allocates to that invoice.
   *
   * Adjustment transactions referenced only by this settlement are deleted along
   * with it.
   *
   * This endpoint requires the permission: `settlements:delete`.
   *
   * @example
   * ```ts
   * const settlement = await client.finance.settlements.delete(
   *   'sl_2k5juz0yf5a7',
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
   * The part of the transaction's amount to apply to this invoice, as a decimal
   * string in US dollars.
   *
   * This is not checked against the transaction's unallocated balance or the
   * invoice's outstanding total; applying more than an invoice owes leaves that
   * invoice `overpaid`.
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
   * Free-form note about this allocation.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  allocations: InvoicesAPI.ListTransactionAllocation | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Free-form note attached to this settlement.
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
   * Profile fields (name, email, username, image URL) live on the `user`
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
 *
 * When the list is filtered by transaction or invoice, every aggregate here — the
 * allocation count, the totals, the invoice numbers, and the customer names —
 * covers only the allocations that matched the filter, not every allocation in the
 * settlement.
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
   * Names of the customers billed by those invoices, without duplicates.
   */
  customer_names: Array<string>;

  /**
   * Numbers of the invoices this settlement's allocations were applied to, without
   * duplicates.
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
   * Only return settlements created up to the start of this date (`YYYY-MM-DD`,
   * UTC).
   *
   * Settlements created later on that day are excluded, so pass the following day to
   * cover a full day.
   */
  end_date?: string;

  /**
   * Only return settlements that allocate to at least one of these invoices.
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
   * Only return settlements created on or after the start of this date
   * (`YYYY-MM-DD`, UTC).
   */
  start_date?: string;

  /**
   * Only return settlements that allocate at least one of these transactions.
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
