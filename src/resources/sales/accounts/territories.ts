// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage territories for accounts.
 */
export class Territories extends APIResource {
  /**
   * Creates a territory that assigns a sales rep to a state or ZIP code range.
   *
   * The territory takes effect for sales orders created afterwards that do not name
   * a sales rep explicitly and whose customer has no default sales rep.
   *
   * This endpoint requires the permission: `sales_rep_territories:create`.
   *
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.create(
   *     'ac_ykxoradjoeb3',
   *     {
   *       sales_rep_id: 'acus_e5zu8bde0z3h',
   *       state: 'NY',
   *       end_zipcode: 10999,
   *       start_zipcode: 10001,
   *     },
   *   );
   * ```
   */
  create(accountID: string, params: TerritoryCreateParams, options?: RequestOptions): APIPromise<Territory> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/sales/accounts/${accountID}/territories`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a territory by ID.
   *
   * This endpoint requires the permission: `sales_rep_territories:read`.
   *
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.retrieve(
   *     'te_gfs3vr2jpwgm',
   *     { account_id: 'ac_ykxoradjoeb3' },
   *   );
   * ```
   */
  retrieve(id: string, params: TerritoryRetrieveParams, options?: RequestOptions): APIPromise<Territory> {
    const { account_id, ...query } = params;
    return this._client.get(path`/v1/sales/accounts/${account_id}/territories/${id}`, { query, ...options });
  }

  /**
   * Partially updates a territory.
   *
   * Only the fields provided in the request are changed. Use the `clear_*` fields to
   * remove the product line or the ZIP code range rather than sending an empty
   * value.
   *
   * This endpoint requires the permission: `sales_rep_territories:update`.
   *
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.update(
   *     'te_gfs3vr2jpwgm',
   *     { account_id: 'ac_ykxoradjoeb3', state: 'CA' },
   *   );
   * ```
   */
  update(id: string, params: TerritoryUpdateParams, options?: RequestOptions): APIPromise<Territory> {
    const { account_id, include, ...body } = params;
    return this._client.patch(path`/v1/sales/accounts/${account_id}/territories/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of territories in your account, most recently created
   * first.
   *
   * The `q` search term matches the state, the sales rep's name or email address,
   * and the product line name.
   *
   * This endpoint requires the permission: `sales_rep_territories:read`.
   *
   * @example
   * ```ts
   * const listTerritory =
   *   await client.sales.accounts.territories.list(
   *     'ac_ykxoradjoeb3',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: TerritoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTerritory> {
    return this._client.get(path`/v1/sales/accounts/${accountID}/territories`, { query, ...options });
  }

  /**
   * Deletes a territory.
   *
   * Sales orders that were already assigned a sales rep through this territory keep
   * that rep; only later auto-assignment is affected. Deleting a territory that was
   * already deleted returns an already-deleted error rather than a not-found error.
   *
   * This endpoint requires the permission: `sales_rep_territories:delete`.
   *
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.delete(
   *     'te_gfs3vr2jpwgm',
   *     { account_id: 'ac_ykxoradjoeb3' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: TerritoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TerritoryDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/v1/sales/accounts/${account_id}/territories/${id}`, options);
  }
}

/**
 * Request to create a territory.
 */
export interface CreateTerritoryRequest {
  /**
   * ID of the account user to credit as the sales rep on orders matching this
   * territory.
   */
  sales_rep_id: string;

  /**
   * State this territory covers (e.g. `NY`).
   *
   * A territory created without a ZIP code range is matched by comparing this value
   * exactly against the ship-to address's state, so use the same format your
   * addresses use.
   */
  state: string;

  /**
   * Inclusive end of the ZIP code range this territory covers (`501`-`99999`).
   *
   * Dropped when no start ZIP code is supplied. Supplying a start without an end
   * creates a territory that matches that single ZIP code.
   */
  end_zipcode?: number;

  /**
   * ID of the product line this territory is associated with.
   *
   * Sales rep auto-assignment matches on ZIP code and state only, so this records
   * what the territory covers rather than narrowing which orders it matches.
   */
  product_line_id?: string;

  /**
   * Inclusive start of the ZIP code range this territory covers (`501`-`99999`).
   *
   * Omit both ZIP code fields to cover the entire state.
   */
  start_zipcode?: number;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListTerritory {
  /**
   * Resources in this page.
   */
  data: Array<Territory>;

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
 * A geographic sales region that assigns a sales rep to a state or ZIP code range.
 *
 * When a sales order is created without an explicit sales rep, one is
 * auto-assigned: the customer's default sales rep takes precedence, then a
 * territory matching the ship-to address's ZIP code, then a territory covering the
 * entire ship-to state.
 *
 * Territories are skipped entirely when the customer is commission-exempt or every
 * line on the order belongs to a commission-exempt product line; those orders are
 * left without a sales rep.
 */
export interface Territory {
  /**
   * Territory ID.
   */
  id: string;

  /**
   * When this territory was created.
   */
  created_at: string;

  /**
   * Inclusive end of the ZIP code range this territory covers.
   *
   * A territory with a start ZIP code but no end ZIP code matches that single ZIP
   * code.
   */
  end_zipcode: number | null;

  /**
   * Resource type identifier.
   */
  object: 'territory';

  /**
   * A named grouping of related products in your catalog.
   *
   * A product line carries the default commission and freight policies for the
   * products assigned to it, along with the unit group that determines how those
   * products are measured. Product lines are also the unit that catalog access is
   * granted over, for both customers and account groups.
   */
  product_line: AnalyticsAPI.ProductLine | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  sales_rep: AccountUsersAPI.AccountUser | null;

  /**
   * Inclusive start of the ZIP code range this territory covers.
   *
   * Unset when the territory spans the entire state rather than a ZIP code range.
   */
  start_zipcode: number | null;

  /**
   * State this territory covers (e.g. `NY`).
   *
   * The state is only used to match orders when the territory has no ZIP code range;
   * territories with a ZIP code range are matched on the ZIP code alone. Matching is
   * an exact comparison against the ship-to address's state, so use the same format
   * your addresses use.
   */
  state: string;

  /**
   * When this territory was last updated.
   */
  updated_at: string;
}

/**
 * Request to partially update a territory.
 */
export interface UpdateTerritoryRequest {
  /**
   * Set to `true` to remove the end ZIP code.
   *
   * The territory then matches the start ZIP code alone rather than a range.
   */
  clear_end_zipcode?: boolean;

  /**
   * Set to `true` to remove the product line the territory is associated with.
   */
  clear_product_line?: boolean;

  /**
   * Set to `true` to remove the start ZIP code.
   *
   * Clearing the start ZIP code also clears the end ZIP code, so the territory
   * covers the entire state.
   */
  clear_start_zipcode?: boolean;

  /**
   * Inclusive end of the ZIP code range this territory covers (`501`-`99999`).
   */
  end_zipcode?: number;

  /**
   * ID of the product line this territory is associated with.
   */
  product_line_id?: string;

  /**
   * ID of the account user to credit as the sales rep on orders matching this
   * territory.
   *
   * A territory always has a sales rep, so this one can be replaced but not removed.
   */
  sales_rep_id?: string;

  /**
   * Inclusive start of the ZIP code range this territory covers (`501`-`99999`).
   *
   * Setting a start ZIP code turns a state-wide territory into a ZIP code territory,
   * which is then matched on ZIP code alone.
   */
  start_zipcode?: number;

  /**
   * State this territory covers (e.g. `NY`).
   */
  state?: string;
}

export interface TerritoryDeleteResponse {}

export interface TerritoryCreateParams {
  /**
   * Body param: ID of the account user to credit as the sales rep on orders matching
   * this territory.
   */
  sales_rep_id: string;

  /**
   * Body param: State this territory covers (e.g. `NY`).
   *
   * A territory created without a ZIP code range is matched by comparing this value
   * exactly against the ship-to address's state, so use the same format your
   * addresses use.
   */
  state: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'sales_rep' | 'sales_rep.user' | 'product_line'>;

  /**
   * Body param: Inclusive end of the ZIP code range this territory covers
   * (`501`-`99999`).
   *
   * Dropped when no start ZIP code is supplied. Supplying a start without an end
   * creates a territory that matches that single ZIP code.
   */
  end_zipcode?: number;

  /**
   * Body param: ID of the product line this territory is associated with.
   *
   * Sales rep auto-assignment matches on ZIP code and state only, so this records
   * what the territory covers rather than narrowing which orders it matches.
   */
  product_line_id?: string;

  /**
   * Body param: Inclusive start of the ZIP code range this territory covers
   * (`501`-`99999`).
   *
   * Omit both ZIP code fields to cover the entire state.
   */
  start_zipcode?: number;
}

export interface TerritoryRetrieveParams {
  /**
   * Path param: ID of your account, which owns the territory.
   */
  account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'sales_rep' | 'sales_rep.user' | 'product_line'>;
}

export interface TerritoryUpdateParams {
  /**
   * Path param: ID of your account, which owns the territory.
   */
  account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'sales_rep' | 'sales_rep.user' | 'product_line'>;

  /**
   * Body param: Set to `true` to remove the end ZIP code.
   *
   * The territory then matches the start ZIP code alone rather than a range.
   */
  clear_end_zipcode?: boolean;

  /**
   * Body param: Set to `true` to remove the product line the territory is associated
   * with.
   */
  clear_product_line?: boolean;

  /**
   * Body param: Set to `true` to remove the start ZIP code.
   *
   * Clearing the start ZIP code also clears the end ZIP code, so the territory
   * covers the entire state.
   */
  clear_start_zipcode?: boolean;

  /**
   * Body param: Inclusive end of the ZIP code range this territory covers
   * (`501`-`99999`).
   */
  end_zipcode?: number;

  /**
   * Body param: ID of the product line this territory is associated with.
   */
  product_line_id?: string;

  /**
   * Body param: ID of the account user to credit as the sales rep on orders matching
   * this territory.
   *
   * A territory always has a sales rep, so this one can be replaced but not removed.
   */
  sales_rep_id?: string;

  /**
   * Body param: Inclusive start of the ZIP code range this territory covers
   * (`501`-`99999`).
   *
   * Setting a start ZIP code turns a state-wide territory into a ZIP code territory,
   * which is then matched on ZIP code alone.
   */
  start_zipcode?: number;

  /**
   * Body param: State this territory covers (e.g. `NY`).
   */
  state?: string;
}

export interface TerritoryListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sales_rep' | 'sales_rep.user' | 'product_line'>;

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

export interface TerritoryDeleteParams {
  /**
   * ID of your account, which owns the territory.
   */
  account_id: string;
}

export declare namespace Territories {
  export {
    type CreateTerritoryRequest as CreateTerritoryRequest,
    type ListTerritory as ListTerritory,
    type Territory as Territory,
    type UpdateTerritoryRequest as UpdateTerritoryRequest,
    type TerritoryDeleteResponse as TerritoryDeleteResponse,
    type TerritoryCreateParams as TerritoryCreateParams,
    type TerritoryRetrieveParams as TerritoryRetrieveParams,
    type TerritoryUpdateParams as TerritoryUpdateParams,
    type TerritoryListParams as TerritoryListParams,
    type TerritoryDeleteParams as TerritoryDeleteParams,
  };
}
