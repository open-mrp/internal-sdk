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
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.create({
   *     name: 'Wholesale Customers',
   *     type: 'type_group',
   *   });
   * ```
   */
  create(body: AccountGroupCreateParams, options?: RequestOptions): APIPromise<CustomersAPI.AccountGroup> {
    return this._client.post('/v1/sales/account-groups', { body, ...options });
  }

  /**
   * Returns an account group by ID.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.retrieve(
   *     'acgp_018e88072d1320808dc979cfac',
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
   * changed after creation.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.update(
   *     'acgp_018e88072d1320808dc979cfac',
   *     { name: 'Updated Wholesale Customers' },
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
   * Returns a paginated list of account groups.
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
   * Deletes an account group. Fails if the account group is actively used in
   * production.
   *
   * @example
   * ```ts
   * const accountGroup =
   *   await client.sales.accountGroups.delete(
   *     'acgp_018e88072d1320808dc979cfac',
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
   * Display name.
   */
  name: string;

  /**
   * Account group type.
   *
   * Cannot be changed after creation.
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Commission policy. Defaults to `commission_exempt`.
   *
   * - `commission_exempt`: no commission applies.
   * - `commission_applied`: commission applies; if the account group is within a
   *   sales rep's territory, it will be assigned to that rep unless overridden.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Description.
   */
  description?: string;

  /**
   * Freight policy. Defaults to `billed_freight`.
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
   * - `commission_exempt`: no commission applies.
   * - `commission_applied`: commission applies; if the account group is within a
   *   sales rep's territory, it will be assigned to that rep unless overridden.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

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
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;
}

export interface AccountGroupDeleteResponse {}

export interface AccountGroupCreateParams {
  /**
   * Display name.
   */
  name: string;

  /**
   * Account group type.
   *
   * Cannot be changed after creation.
   *
   * - `pricing_group`: used for pricing rules, such as a "Preferred" group that
   *   receives a special discount.
   * - `type_group`: used to categorize accounts, such as "Consumers" or
   *   "Distributors".
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Commission policy. Defaults to `commission_exempt`.
   *
   * - `commission_exempt`: no commission applies.
   * - `commission_applied`: commission applies; if the account group is within a
   *   sales rep's territory, it will be assigned to that rep unless overridden.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Description.
   */
  description?: string;

  /**
   * Freight policy. Defaults to `billed_freight`.
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
   * - `commission_exempt`: no commission applies.
   * - `commission_applied`: commission applies; if the account group is within a
   *   sales rep's territory, it will be assigned to that rep unless overridden.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

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
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;
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

  /**
   * Account group type filter.
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
