// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve account statuses.
 */
export class AccountStatuses extends APIResource {
  /**
   * Returns a single account status, looked up by either its ID or its code.
   *
   * @example
   * ```ts
   * const accountStatus =
   *   await client.sales.accountStatuses.retrieve(
   *     'acss_st5zyjmzm30k',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: AccountStatusRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountStatus> {
    return this._client.get(path`/v1/sales/account-statuses/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of account statuses.
   *
   * Account statuses are system-provided lookup values shared across all accounts,
   * used to set a customer's status (for example, placing a customer on a credit
   * hold). The list is fixed — statuses cannot be created, edited, or deleted — so
   * use it to populate a status picker or to resolve a code to its display name.
   *
   * @example
   * ```ts
   * const listAccountStatus =
   *   await client.sales.accountStatuses.list();
   * ```
   */
  list(
    query: AccountStatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountStatus> {
    return this._client.get('/v1/sales/account-statuses', { query, ...options });
  }
}

/**
 * A lookup value describing the standing of a customer account, such as whether
 * shipments or all activity should be held.
 *
 * The set of statuses is fixed by Augno and cannot be added to or edited; you
 * apply one to a customer by setting the customer's `status`.
 */
export interface AccountStatus {
  /**
   * Account status ID.
   */
  id: string;

  /**
   * Machine-readable status code.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged for prioritized handling.
   * - `hold_shipment`: the account's shipments should be held, typically over a
   *   credit problem, while orders can still be placed.
   * - `hold_all`: all activity for the account should be held.
   *
   * The hold statuses are advisory: they are surfaced as credit-hold warnings on the
   * customer's orders, but they do not by themselves cause order or shipment
   * requests to be rejected.
   */
  code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Human-readable label for the status.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_status';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListAccountStatus {
  /**
   * Resources in this page.
   */
  data: Array<AccountStatus>;

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

export interface AccountStatusRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;
}

export interface AccountStatusListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

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
}

export declare namespace AccountStatuses {
  export {
    type AccountStatus as AccountStatus,
    type ListAccountStatus as ListAccountStatus,
    type AccountStatusRetrieveParams as AccountStatusRetrieveParams,
    type AccountStatusListParams as AccountStatusListParams,
  };
}
