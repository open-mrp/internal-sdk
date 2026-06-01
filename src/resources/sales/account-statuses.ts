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
   * Returns a paginated list of account statuses. Global lookup values for setting
   * account relationship statuses.
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
 * AccountStatus is an account status lookup value.
 */
export interface AccountStatus {
  /**
   * Account status ID.
   */
  id: string;

  /**
   * Machine-readable status code.
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
