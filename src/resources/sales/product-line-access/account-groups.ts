// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesAPI from '../account-prices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as CustomersAPI from '../customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage product line access for account groups.
 */
export class AccountGroups extends APIResource {
  /**
   * Creates product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.create(
   *     {
   *       account_group_id: 'acgp_018e88072d1320808dc979cfac',
   *       product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *     },
   *   );
   * ```
   */
  create(
    body: AccountGroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountGroupProductLineAccess> {
    return this._client.post('/v1/sales/product-line-access/account-groups', { body, ...options });
  }

  /**
   * Returns product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.retrieve(
   *     'acgp_018e88072d1320808dc979cfac',
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
   *     'acgp_018e88072d1320808dc979cfac',
   *     { product_line_ids: ['pl_01996357326a0d3f7b129542ea'] },
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
   * Returns a paginated list of product line access records grouped by account
   * group.
   *
   * @example
   * ```ts
   * const listAccountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.list();
   * ```
   */
  list(
    query: AccountGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountGroupProductLineAccess> {
    return this._client.get('/v1/sales/product-line-access/account-groups', { query, ...options });
  }

  /**
   * Removes all product line access for an account group.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.productLineAccess.accountGroups.delete(
   *     'acgp_018e88072d1320808dc979cfac',
   *   );
   * ```
   */
  delete(accountGroupID: string, options?: RequestOptions): APIPromise<AccountGroupDeleteResponse> {
    return this._client.delete(path`/v1/sales/product-line-access/account-groups/${accountGroupID}`, options);
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
  account_group: CustomersAPI.AccountGroup | null;

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
  product_lines: ListProductLine | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * CreateAccountGroupProductLineAccessRequest is a request to create product line
 * access for an account group.
 */
export interface CreateAccountGroupProductLineAccessRequest {
  /**
   * Account group ID.
   */
  account_group_id: string;

  /**
   * Product line IDs to grant access to.
   */
  product_line_ids: Array<string>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountGroupProductLineAccess {
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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductLine {
  /**
   * Resources in this page.
   */
  data: Array<AccountPricesAPI.ProductLine>;

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
 * UpdateAccountGroupProductLineAccessRequest is a request to update product line
 * access for an account group.
 */
export interface UpdateAccountGroupProductLineAccessRequest {
  /**
   * Product line IDs to grant access to.
   */
  product_line_ids?: Array<string>;
}

export interface AccountGroupDeleteResponse {}

export interface AccountGroupCreateParams {
  /**
   * Account group ID.
   */
  account_group_id: string;

  /**
   * Product line IDs to grant access to.
   */
  product_line_ids: Array<string>;
}

export interface AccountGroupUpdateParams {
  /**
   * Product line IDs to grant access to.
   */
  product_line_ids?: Array<string>;
}

export interface AccountGroupListParams {
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
    type CreateAccountGroupProductLineAccessRequest as CreateAccountGroupProductLineAccessRequest,
    type ListAccountGroupProductLineAccess as ListAccountGroupProductLineAccess,
    type ListProductLine as ListProductLine,
    type UpdateAccountGroupProductLineAccessRequest as UpdateAccountGroupProductLineAccessRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };
}
