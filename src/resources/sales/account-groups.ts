// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage account groups.
 */
export class AccountGroups extends APIResource {
  /**
   * Creates an account group.
   *
   * Returns a conflict error if an account group with the same name already exists.
   *
   * This endpoint requires the permission: `customer_groups:create`.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.create({
   *     name: 'Wholesale Customers',
   *     type: 'type_group',
   *     commission_policy: 'commission_exempt',
   *     description:
   *       'Customers who buy in bulk at wholesale pricing.',
   *     freight_policy: 'billed_freight',
   *   });
   * ```
   */
  create(body: AccountGroupCreateParams, options?: RequestOptions): APIPromise<CustomersAPI.AccountGroup> {
    return this._client.post('/v1/sales/account-groups', { body, ...options });
  }

  /**
   * Returns an account group by ID.
   *
   * This endpoint requires the permission: `customer_groups:read`.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.retrieve(
   *     'acgp_6p4z57e9alaf',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomersAPI.AccountGroup> {
    return this._client.get(path`/v1/sales/account-groups/${id}`, options);
  }

  /**
   * Partially updates an account group.
   *
   * Only the provided fields are changed. The account group's `type` cannot be
   * changed after creation, and renaming the group to a name another group in your
   * account already uses returns a conflict error.
   *
   * A new commission or freight policy takes effect for every account already in the
   * group, not just accounts added afterwards.
   *
   * This endpoint requires the permission: `customer_groups:update`.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.update(
   *     'acgp_6p4z57e9alaf',
   *     {
   *       commission_policy: 'commission_exempt',
   *       description:
   *         'Customers who buy in bulk at wholesale pricing.',
   *       freight_policy: 'billed_freight',
   *       name: 'Updated Wholesale Customers',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: AccountGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.AccountGroup> {
    return this._client.patch(path`/v1/sales/account-groups/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of account groups, newest first.
   *
   * The `q` search term matches the group's name and description.
   *
   * This endpoint requires the permission: `customer_groups:read`.
   *
   * @example
   * ```ts
   * const listAccountGroup =
   *   await client.sales.accountGroups.list();
   * ```
   */
  list(
    query: AccountGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ListAccountGroup> {
    return this._client.get('/v1/sales/account-groups', { query, ...options });
  }

  /**
   * Deletes an account group.
   *
   * Deletion fails with a validation error while the group is still in use: a
   * `type_group` that is set as a customer's type cannot be deleted, and no group
   * can be deleted while it grants product line access, backs a volume discount, or
   * is attached to a customer registration flow.
   *
   * Deleting a `pricing_group` first unassigns it from every customer it was applied
   * to, so those customers immediately stop receiving its pricing.
   *
   * This endpoint requires the permission: `customer_groups:delete`.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.delete(
   *     'acgp_6p4z57e9alaf',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountGroupDeleteResponse> {
    return this._client.delete(path`/v1/sales/account-groups/${id}`, options);
  }
}

/**
 * Request to create an account group.
 */
export interface CreateAccountGroupRequest {
  /**
   * Display name of the account group.
   *
   * Must be unique within your account.
   */
  name: string;

  /**
   * How this account group will be used.
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   *
   * The type cannot be changed after creation.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * How sales commission applies to accounts in this group.
   *
   * - `commission_applied`: sales commission is calculated on orders from accounts
   *   in this group.
   * - `commission_exempt`: orders from accounts in this group are exempt from
   *   commission.
   *
   * Leave this out and the group is created commission-exempt, so orders from its
   * accounts earn no sales commission until you change it.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Calendar days between an order being issued and it being due to ship, inherited
   * by every customer in this group that has not set its own.
   */
  default_lead_time_days?: number;

  /**
   * Free-form description of the account group.
   */
  description?: string;

  /**
   * How freight charges apply to orders from accounts in this group.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';
}

/**
 * Request to partially update an account group.
 */
export interface UpdateAccountGroupRequest {
  /**
   * How sales commission applies to accounts in this group.
   *
   * - `commission_applied`: sales commission is calculated on orders from accounts
   *   in this group.
   * - `commission_exempt`: orders from accounts in this group are exempt from
   *   commission.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Calendar days between an order being issued and it being due to ship, inherited
   * by every customer in this group that has not set its own. Clearing it returns
   * the group's customers to the account default.
   */
  default_lead_time_days?: number | null;

  /**
   * Free-form description of the account group.
   */
  description?: string | null;

  /**
   * How freight charges apply to orders from accounts in this group.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Display name of the account group.
   *
   * Must be unique within your account.
   */
  name?: string;
}

export interface AccountGroupDeleteResponse {}

export interface AccountGroupCreateParams {
  /**
   * Display name of the account group.
   *
   * Must be unique within your account.
   */
  name: string;

  /**
   * How this account group will be used.
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   *
   * The type cannot be changed after creation.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * How sales commission applies to accounts in this group.
   *
   * - `commission_applied`: sales commission is calculated on orders from accounts
   *   in this group.
   * - `commission_exempt`: orders from accounts in this group are exempt from
   *   commission.
   *
   * Leave this out and the group is created commission-exempt, so orders from its
   * accounts earn no sales commission until you change it.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Calendar days between an order being issued and it being due to ship, inherited
   * by every customer in this group that has not set its own.
   */
  default_lead_time_days?: number;

  /**
   * Free-form description of the account group.
   */
  description?: string;

  /**
   * How freight charges apply to orders from accounts in this group.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';
}

export interface AccountGroupUpdateParams {
  /**
   * How sales commission applies to accounts in this group.
   *
   * - `commission_applied`: sales commission is calculated on orders from accounts
   *   in this group.
   * - `commission_exempt`: orders from accounts in this group are exempt from
   *   commission.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Calendar days between an order being issued and it being due to ship, inherited
   * by every customer in this group that has not set its own. Clearing it returns
   * the group's customers to the account default.
   */
  default_lead_time_days?: number | null;

  /**
   * Free-form description of the account group.
   */
  description?: string | null;

  /**
   * How freight charges apply to orders from accounts in this group.
   *
   * - `free_freight`: customers within this group will not have to pay for freight.
   * - `billed_freight`: freight will be applied to any order within this account
   *   group, unless overridden elsewhere.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Display name of the account group.
   *
   * Must be unique within your account.
   */
  name?: string;
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

  /**
   * Filters results to account groups of the given type.
   */
  type?: 'pricing_group' | 'type_group';
}

export declare namespace AccountGroups {
  export {
    type CreateAccountGroupRequest as CreateAccountGroupRequest,
    type UpdateAccountGroupRequest as UpdateAccountGroupRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };
}
