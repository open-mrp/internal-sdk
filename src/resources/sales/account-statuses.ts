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
   * Returns an account status by ID or code.
   *
   * @example
   * ```ts
   * const accountStatus =
   *   await client.sales.accountStatuses.retrieve(
   *     'acss_01004f532c58d60514b685cb27',
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
   * used to set a customer's status (for example, placing a customer on shipment
   * hold).
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
 * AccountStatus is a lookup value describing the standing of a customer account,
 * such as whether shipments or all activity should be held.
 */
export interface AccountStatus {
  /**
   * Account status ID.
   */
  id: string;

  /**
   * Machine-readable status code.
   *
   * This is the value used as a customer's `status`.
   *
   * - `normal`: standard account with no restrictions.
   * - `preferred`: account flagged as preferred (e.g. for prioritized handling).
   * - `hold_shipment`: shipments to this account are held; orders may still be
   *   placed.
   * - `hold_all`: all activity for this account is held.
   */
  code: 'normal' | 'preferred' | 'hold_shipment' | 'hold_all';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
