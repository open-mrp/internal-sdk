// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ProductLinesAPI from '../../catalog/product-lines';
import * as AccountGroupsAPI from '../account-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage product line access for account groups.
 */
export class AccountGroups extends APIResource {
  /**
   * Returns product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.retrieve(
   *     'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(accountGroupID: string, options?: RequestOptions): APIPromise<AccountGroupProductLineAccess> {
    return this._client.get(path`/v1/sales/product-line-access/account-groups/${accountGroupID}`, options);
  }

  /**
   * Replaces all product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.update(
   *     '',
   *     { product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'] },
   *   );
   * ```
   */
  update(
    accountGroupID: string,
    body: AccountGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroupProductLineAccess> {
    return this._client.patch(path`/v1/sales/product-line-access/account-groups/${accountGroupID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes all product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.productLineAccess.accountGroups.delete(
   *     'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(accountGroupID: string, options?: RequestOptions): APIPromise<AccountGroupDeleteResponse> {
    return this._client.delete(path`/v1/sales/product-line-access/account-groups/${accountGroupID}`, options);
  }

  /**
   * Creates product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.accountGroups(
   *     {
   *       account_group_id: 'acgp_01jm4r6700f8nwq3v5hx2d9ktp',
   *       product_line_ids: ['pl_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     },
   *   );
   * ```
   */
  accountGroups(
    body: AccountGroupAccountGroupsParams,
    options?: RequestOptions,
  ): APIPromise<AccountGroupProductLineAccess> {
    return this._client.post('/v1/sales/product-line-access/account-groups', { body, ...options });
  }

  /**
   * Returns a paginated list of product line access records grouped by account
   * group.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.productLineAccess.accountGroups.retrieveAccountGroups();
   * ```
   */
  retrieveAccountGroups(
    query: AccountGroupRetrieveAccountGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGroupRetrieveAccountGroupsResponse> {
    return this._client.get('/v1/sales/product-line-access/account-groups', { query, ...options });
  }
}

/**
 * AccountGroupProductLineAccess is the product lines accessible to an account
 * group.
 */
export interface AccountGroupProductLineAccess {
  /**
   * Account group resource.
   */
  account_group: AccountGroupsAPI.AccountGroup | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group_product_line_access';

  /**
   * List represents a paginated list of resources.
   */
  product_lines: ProductLinesAPI.ListProductLine | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface AccountGroupDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface AccountGroupRetrieveAccountGroupsResponse {
  /**
   * Resources in this page.
   */
  data: Array<AccountGroupProductLineAccess>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountGroupUpdateParams {
  /**
   * Product line IDs to grant access to.
   */
  product_line_ids?: Array<string>;
}

export interface AccountGroupAccountGroupsParams {
  /**
   * Account group ID.
   */
  account_group_id: string;

  /**
   * Product line IDs to grant access to.
   */
  product_line_ids: Array<string>;
}

export interface AccountGroupRetrieveAccountGroupsParams {
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

export declare namespace AccountGroups {
  export {
    type AccountGroupProductLineAccess as AccountGroupProductLineAccess,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupRetrieveAccountGroupsResponse as AccountGroupRetrieveAccountGroupsResponse,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupAccountGroupsParams as AccountGroupAccountGroupsParams,
    type AccountGroupRetrieveAccountGroupsParams as AccountGroupRetrieveAccountGroupsParams,
  };
}
