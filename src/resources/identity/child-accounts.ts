// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage parent-child relationships between customer accounts.
 */
export class ChildAccounts extends APIResource {
  /**
   * Links an existing account as a child of the target account.
   *
   * This call is idempotent: linking an account that is already a child of the
   * target account succeeds without changes. Circular relationships (making an
   * account a child of its own child) are rejected with a conflict error.
   *
   * @example
   * ```ts
   * const childAccount =
   *   await client.identity.childAccounts.update(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *   );
   * ```
   */
  update(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccount> {
    return this._client.put(path`/v1/identity/child-accounts/${childAccountID}`, options);
  }

  /**
   * Returns a paginated list of child accounts for the target account.
   *
   * @example
   * ```ts
   * const listChildAccount =
   *   await client.identity.childAccounts.list();
   * ```
   */
  list(
    query: ChildAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListChildAccount> {
    return this._client.get('/v1/identity/child-accounts', { query, ...options });
  }

  /**
   * Unlinks a child account from the target account.
   *
   * Only the parent-child relationship is removed; the child account itself is not
   * deleted. This call is idempotent: removing an account that is not currently a
   * child succeeds without changes.
   *
   * @example
   * ```ts
   * const childAccount =
   *   await client.identity.childAccounts.delete(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *   );
   * ```
   */
  delete(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccountDeleteResponse> {
    return this._client.delete(path`/v1/identity/child-accounts/${childAccountID}`, options);
  }
}

/**
 * Child customer account in a parent-child relationship.
 */
export interface ChildAccount {
  /**
   * Account relation ID.
   *
   * Identifies the relationship record, not the child account itself; use
   * `account.id` for the account.
   */
  id: string;

  /**
   * A customer account, including its branding and customer portal sub-resources.
   */
  account: APIKeysAPI.Account | null;

  /**
   * When this relation was created.
   */
  created_at: string;

  /**
   * Support email address copied from the child account's branding.
   */
  email: string | null;

  /**
   * Your own identifier for this customer, such as a CRM or ERP customer number,
   * stored on the parent-child relation rather than on the account.
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

/**
 * List represents a paginated list of resources.
 */
export interface ListChildAccount {
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
  page_info: APIKeysAPI.PageInfo;
}

export interface ChildAccountDeleteResponse {}

export interface ChildAccountListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

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

export declare namespace ChildAccounts {
  export {
    type ChildAccount as ChildAccount,
    type ListChildAccount as ListChildAccount,
    type ChildAccountDeleteResponse as ChildAccountDeleteResponse,
    type ChildAccountListParams as ChildAccountListParams,
  };
}
