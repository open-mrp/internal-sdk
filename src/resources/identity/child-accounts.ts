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
   * Adds a child account relationship to the target account.
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
   * Removes a child account from the target account.
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
   */
  id: string;

  /**
   * Account with optional branding and portal sub-resources.
   */
  account: APIKeysAPI.Account | null;

  /**
   * When this relation was created.
   */
  created_at: string;

  /**
   * Support email from account branding.
   */
  email: string | null;

  /**
   * Your own identifier for this customer (e.g. a CRM or ERP customer number),
   * stored on the relation.
   *
   * Null if not set.
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
    type ListChildAccount as ListChildAccount,
    type ChildAccountDeleteResponse as ChildAccountDeleteResponse,
    type ChildAccountListParams as ChildAccountListParams,
  };
}
