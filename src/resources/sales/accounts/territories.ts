// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesAPI from '../account-prices';
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
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.create(
   *     'ac_01148680966698341a9c0976db',
   *     {
   *       sales_rep_id: 'acus_01ea9983ddb41dacc44ecf997c',
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
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.retrieve(
   *     'te_0132f802e5603f7d356fac79d1',
   *     { account_id: 'ac_01148680966698341a9c0976db' },
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
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.update(
   *     'te_0132f802e5603f7d356fac79d1',
   *     {
   *       account_id: 'ac_01148680966698341a9c0976db',
   *       state: 'CA',
   *     },
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
   * Returns a paginated list of territories.
   *
   * @example
   * ```ts
   * const listTerritory =
   *   await client.sales.accounts.territories.list(
   *     'ac_01148680966698341a9c0976db',
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
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.delete(
   *     'te_0132f802e5603f7d356fac79d1',
   *     { account_id: 'ac_01148680966698341a9c0976db' },
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
   * ID of the account user (sales rep) to assign to this territory.
   */
  sales_rep_id: string;

  /**
   * State this territory covers (e.g. `NY`).
   */
  state: string;

  /**
   * Inclusive end of the ZIP code range this territory covers (`501`-`99999`).
   */
  end_zipcode?: number;

  /**
   * ID of the product line to scope this territory to.
   *
   * Omit to have the territory apply regardless of product line.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A geographic sales region that assigns a sales rep to a state or ZIP code range.
 *
 * When a sales order is created without an explicit sales rep, territories are
 * used to auto-assign one from the order's ship-to address: the customer's default
 * sales rep takes precedence, then a territory matching the ship-to ZIP code, then
 * a territory covering the entire ship-to state.
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
   * Inclusive end of the ZIP code range this territory covers within the state.
   *
   * Unset when the territory spans the entire state rather than a ZIP code range.
   */
  end_zipcode: number | null;

  /**
   * Resource type identifier.
   */
  object: 'territory';

  /**
   * Product line resource.
   *
   * A product line groups related products in your catalog and carries the default
   * commission policy, freight policy, and unit group for those products.
   */
  product_line: AccountPricesAPI.ProductLine | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  sales_rep: AccountUsersAPI.AccountUser | null;

  /**
   * Inclusive start of the ZIP code range this territory covers within the state.
   *
   * Unset when the territory spans the entire state rather than a ZIP code range.
   */
  start_zipcode: number | null;

  /**
   * State this territory covers (e.g. `NY`).
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
   */
  clear_end_zipcode?: boolean;

  /**
   * Set to `true` to remove the product line, making the territory apply regardless
   * of product line.
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
   * ID of the product line to scope this territory to.
   */
  product_line_id?: string;

  /**
   * ID of the account user (sales rep) to assign to this territory.
   */
  sales_rep_id?: string;

  /**
   * Inclusive start of the ZIP code range this territory covers (`501`-`99999`).
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
   * Body param: ID of the account user (sales rep) to assign to this territory.
   */
  sales_rep_id: string;

  /**
   * Body param: State this territory covers (e.g. `NY`).
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
   */
  end_zipcode?: number;

  /**
   * Body param: ID of the product line to scope this territory to.
   *
   * Omit to have the territory apply regardless of product line.
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
   * Path param: Account ID.
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
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'sales_rep' | 'sales_rep.user' | 'product_line'>;

  /**
   * Body param: Set to `true` to remove the end ZIP code.
   */
  clear_end_zipcode?: boolean;

  /**
   * Body param: Set to `true` to remove the product line, making the territory apply
   * regardless of product line.
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
   * Body param: ID of the product line to scope this territory to.
   */
  product_line_id?: string;

  /**
   * Body param: ID of the account user (sales rep) to assign to this territory.
   */
  sales_rep_id?: string;

  /**
   * Body param: Inclusive start of the ZIP code range this territory covers
   * (`501`-`99999`).
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
   * Account ID.
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
