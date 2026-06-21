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
   * Creates a product line access record for an account group.
   *
   * Each account group can have at most one access record; creating one for an
   * account group that already has one returns a conflict error.
   *
   * This endpoint requires the permission: `relevant_products:create`.
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
   * This endpoint requires the permission: `relevant_products:read`.
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
   * Replaces the set of product lines accessible to an account group.
   *
   * This is a full replacement, not a merge: product lines omitted from the request
   * lose access.
   *
   * This endpoint requires the permission: `relevant_products:update`.
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
   * Returns a paginated list of product line access records, one per account group.
   *
   * This endpoint requires the permission: `relevant_products:read`.
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
   * This endpoint requires the permission: `relevant_products:delete`.
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
 * The set of product lines that accounts in an account group are allowed to order
 * from.
 */
export interface AccountGroupProductLineAccess {
  /**
   * A named grouping of customer accounts, used for pricing rules or to categorize
   * accounts.
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
 * Request to create product line access for an account group.
 */
export interface CreateAccountGroupProductLineAccessRequest {
  /**
   * ID of the account group to grant product line access to.
   */
  account_group_id: string;

  /**
   * IDs of the product lines the account group is granted access to.
   *
   * Must contain at least one product line ID; every ID must belong to your account.
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
 * Request to update product line access for an account group.
 */
export interface UpdateAccountGroupProductLineAccessRequest {
  /**
   * IDs of the product lines the account group should have access to.
   *
   * The provided list replaces the account group's existing set of product lines;
   * every ID must belong to your account.
   */
  product_line_ids?: Array<string>;
}

export interface AccountGroupDeleteResponse {}

export interface AccountGroupCreateParams {
  /**
   * ID of the account group to grant product line access to.
   */
  account_group_id: string;

  /**
   * IDs of the product lines the account group is granted access to.
   *
   * Must contain at least one product line ID; every ID must belong to your account.
   */
  product_line_ids: Array<string>;
}

export interface AccountGroupUpdateParams {
  /**
   * IDs of the product lines the account group should have access to.
   *
   * The provided list replaces the account group's existing set of product lines;
   * every ID must belong to your account.
   */
  product_line_ids?: Array<string>;
}

export interface AccountGroupListParams {
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
