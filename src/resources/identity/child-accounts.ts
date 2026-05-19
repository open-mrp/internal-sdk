// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage parent-child relationships between customer accounts.
 */
export class ChildAccounts extends APIResource {
  /**
   * Adds a child account relationship to the target account.
   *
   * @example
   * ```ts
   * const childAccount =
   *   await client.identity.childAccounts.update(
   *     'ac_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  update(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccount> {
    return this._client.put(path`/v1/identity/child-accounts/${childAccountID}`, options);
  }

  /**
   * Removes a child account from the target account.
   *
   * @example
   * ```ts
   * const childAccount =
   *   await client.identity.childAccounts.delete(
   *     'ac_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  delete(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccountDeleteResponse> {
    return this._client.delete(path`/v1/identity/child-accounts/${childAccountID}`, options);
  }

  /**
   * Returns a paginated list of child accounts for the target account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.childAccounts.retrieveChildAccounts();
   * ```
   */
  retrieveChildAccounts(
    query: ChildAccountRetrieveChildAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChildAccountRetrieveChildAccountsResponse> {
    return this._client.get('/v1/identity/child-accounts', { query, ...options });
  }
}

/**
 * Child customer account in a parent-child relationship.
 */
export interface ChildAccount {
  /**
   * Account relation ID.
   */
  id: string;

  /**
   * Account with optional branding and portal sub-resources.
   */
  account: AccountsAPI.Account | null;

  /**
   * When this relation was created.
   */
  created_at: string;

  /**
   * Support email from account branding.
   */
  email: string | null;

  /**
   * External number for the account relation.
   */
  external_number: string | null;

  /**
   * Resource type identifier.
   */
  object: 'child_account';

  /**
   * When this relation was last updated.
   */
  updated_at: string;
}

export interface ChildAccountDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface ChildAccountRetrieveChildAccountsResponse {
  /**
   * Resources in this page.
   */
  data: Array<ChildAccount>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface ChildAccountRetrieveChildAccountsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace ChildAccounts {
  export {
    type ChildAccount as ChildAccount,
    type ChildAccountDeleteResponse as ChildAccountDeleteResponse,
    type ChildAccountRetrieveChildAccountsResponse as ChildAccountRetrieveChildAccountsResponse,
    type ChildAccountRetrieveChildAccountsParams as ChildAccountRetrieveChildAccountsParams,
  };
}
