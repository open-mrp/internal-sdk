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
   * Grants an account group access to a set of product lines.
   *
   * Every customer that has this group as its type group or as one of its pricing
   * groups can then browse and order those product lines, on top of anything granted
   * to the customer directly.
   *
   * Each account group can have at most one access record; creating one for an
   * account group that already has one returns a conflict error. Use Update Account
   * Group Product Line Access to change an existing record.
   *
   * This endpoint requires the permission: `relevant_products:create`.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.create(
   *     {
   *       account_group_id: 'acgp_6p4z57e9alaf',
   *       product_line_ids: ['pdln_k9bnlgvxhxjh'],
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
   * Returns the set of product lines an account group has been granted access to.
   *
   * An account group that has never been granted anything returns an empty product
   * line list rather than a not-found error.
   *
   * This endpoint requires the permission: `relevant_products:read`.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.retrieve(
   *     'acgp_6p4z57e9alaf',
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
   * lose access. The account group must already have at least one product line
   * granted, otherwise the request returns a not-found error and the grant has to be
   * made with Create Account Group Product Line Access.
   *
   * This endpoint requires the permission: `relevant_products:update`.
   *
   * @example
   * ```ts
   * const accountGroupProductLineAccess =
   *   await client.sales.productLineAccess.accountGroups.update(
   *     'acgp_6p4z57e9alaf',
   *     { product_line_ids: ['pdln_k9bnlgvxhxjh'] },
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
   * Only account groups that have been granted at least one product line appear. The
   * `q` search term is matched against the account group name.
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
   * Removes an account group's product line access record.
   *
   * Customers in the group keep any product lines granted to them directly or
   * through another of their groups. Removing access from a group that has none
   * returns a not-found error rather than succeeding silently.
   *
   * This endpoint requires the permission: `relevant_products:delete`.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.productLineAccess.accountGroups.delete(
   *     'acgp_6p4z57e9alaf',
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
 *
 * A customer reaches these product lines when the group is its type group or one
 * of its pricing groups. Group access is additive with the customer's own direct
 * access — a customer can order anything granted by either route.
 */
export interface AccountGroupProductLineAccess {
  /**
   * A named grouping of customer accounts, used for pricing rules or to categorize
   * accounts.
   *
   * A customer carries at most one group of type `type_group` as its customer type,
   * plus any number of groups of type `pricing_group`. Membership of either kind can
   * scope a volume discount to the customer and open up product lines for it to
   * order from.
   */
  account_group: CustomersAPI.AccountGroup | null;

  /**
   * When the account group was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group_product_line_access';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  product_lines: ListProductLine | null;

  /**
   * When the account group was last updated.
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
   * Must contain at least one ID, and each one must be a product line your account
   * owns; the shared system product lines cannot be granted.
   */
  product_line_ids: Array<string>;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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

/**
 * Request to update product line access for an account group.
 */
export interface UpdateAccountGroupProductLineAccessRequest {
  /**
   * IDs of the product lines the account group should have access to.
   *
   * The provided list replaces the account group's existing set of product lines,
   * and each ID must be a product line your account owns.
   *
   * Sending an empty list, or omitting the field, revokes every product line from
   * the group. The record then has nothing left to update, so granting access again
   * goes through Create Account Group Product Line Access.
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
   * Must contain at least one ID, and each one must be a product line your account
   * owns; the shared system product lines cannot be granted.
   */
  product_line_ids: Array<string>;
}

export interface AccountGroupUpdateParams {
  /**
   * IDs of the product lines the account group should have access to.
   *
   * The provided list replaces the account group's existing set of product lines,
   * and each ID must be a product line your account owns.
   *
   * Sending an empty list, or omitting the field, revokes every product line from
   * the group. The record then has nothing left to update, so granting access again
   * goes through Create Account Group Product Line Access.
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
