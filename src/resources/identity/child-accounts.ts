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
   * Links an existing account as a child of the target account, so the two sit in a
   * customer hierarchy such as a store location under its head office.
   *
   * Both the parent and the child must already be accounts you have a customer
   * relationship with, and the child must be one you manage on its behalf — an
   * account that runs its own Augno subscription, or that also trades with other
   * sellers, is rejected with an authorization error.
   *
   * This call is idempotent: linking an account that is already a child of the
   * target account succeeds without changes. Circular relationships (making an
   * account a child of its own child) are rejected with a conflict error. An account
   * has at most one parent, so linking a child that already sits under a different
   * parent moves it.
   *
   * This endpoint requires the permission: `customers:update`.
   *
   * @example
   * ```ts
   * const childAccount =
   *   await client.identity.childAccounts.update(
   *     'ac_opnlh43ymyee',
   *   );
   * ```
   */
  update(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccount> {
    return this._client.put(path`/v1/identity/child-accounts/${childAccountID}`, options);
  }

  /**
   * Returns a paginated list of the accounts linked directly beneath the target
   * account.
   *
   * Only direct children are returned, not children of those children. Results are
   * ordered by when your customer record for each child was created, newest first,
   * and the `q` search term matches the child account's name.
   *
   * This endpoint requires the permission: `customers:read`.
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
   * Only the parent-child relationship is removed; the child account itself, and
   * your customer record for it, are left untouched. This call is idempotent:
   * removing an account that is not currently a child of the target account succeeds
   * without changes.
   *
   * This endpoint requires the permission: `customers:update`.
   *
   * @example
   * ```ts
   * const childAccount =
   *   await client.identity.childAccounts.delete(
   *     'ac_opnlh43ymyee',
   *   );
   * ```
   */
  delete(childAccountID: string, options?: RequestOptions): APIPromise<ChildAccountDeleteResponse> {
    return this._client.delete(path`/v1/identity/child-accounts/${childAccountID}`, options);
  }
}

/**
 * Child customer account in a parent-child relationship.
 *
 * Parent-child links let you model a customer hierarchy, such as a chain's
 * individual store locations sitting beneath its head office. Both accounts are
 * customers of your own account, and the hierarchy is visible only to you.
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
   * An organization on Augno, including its branding and customer portal
   * sub-resources.
   *
   * Your own account and any customer or supplier account you trade with are both
   * represented by this object.
   */
  account: APIKeysAPI.Account | null;

  /**
   * When this relation was created.
   */
  created_at: string;

  /**
   * Support email address published in the child account's branding.
   */
  email: string | null;

  /**
   * The customer number for the child account, matching the `number` on your
   * customer record for it.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
