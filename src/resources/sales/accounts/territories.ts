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
   * Creates a territory.
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
   * Sales rep (account user) ID.
   */
  sales_rep_id: string;

  /**
   * State this territory covers.
   */
  state: string;

  /**
   * End of ZIP code range (501-99999).
   */
  end_zipcode?: number;

  /**
   * Product line ID.
   */
  product_line_id?: string;

  /**
   * Start of ZIP code range (501-99999).
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
 * Sales rep territory assignment.
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
   * End of ZIP code range.
   */
  end_zipcode: number | null;

  /**
   * Resource type identifier.
   */
  object: 'territory';

  /**
   * Product line resource.
   */
  product_line: AccountPricesAPI.ProductLine | null;

  /**
   * Account user with profile, role, and department.
   */
  sales_rep: AccountUsersAPI.AccountUser | null;

  /**
   * Start of ZIP code range.
   */
  start_zipcode: number | null;

  /**
   * State this territory covers.
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
   * Set to true to remove the end ZIP code.
   */
  clear_end_zipcode?: boolean;

  /**
   * Set to true to remove the product line.
   */
  clear_product_line?: boolean;

  /**
   * Set to true to remove the start ZIP code.
   */
  clear_start_zipcode?: boolean;

  /**
   * End of ZIP code range (501-99999).
   */
  end_zipcode?: number;

  /**
   * Product line ID.
   */
  product_line_id?: string;

  /**
   * Sales rep (account user) ID.
   */
  sales_rep_id?: string;

  /**
   * Start of ZIP code range (501-99999).
   */
  start_zipcode?: number;

  /**
   * State this territory covers.
   */
  state?: string;
}

export interface TerritoryDeleteResponse {}

export interface TerritoryCreateParams {
  /**
   * Body param: Sales rep (account user) ID.
   */
  sales_rep_id: string;

  /**
   * Body param: State this territory covers.
   */
  state: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'sales_rep' | 'product_line'>;

  /**
   * Body param: End of ZIP code range (501-99999).
   */
  end_zipcode?: number;

  /**
   * Body param: Product line ID.
   */
  product_line_id?: string;

  /**
   * Body param: Start of ZIP code range (501-99999).
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
  include?: Array<'sales_rep' | 'product_line'>;
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
  include?: Array<'sales_rep' | 'product_line'>;

  /**
   * Body param: Set to true to remove the end ZIP code.
   */
  clear_end_zipcode?: boolean;

  /**
   * Body param: Set to true to remove the product line.
   */
  clear_product_line?: boolean;

  /**
   * Body param: Set to true to remove the start ZIP code.
   */
  clear_start_zipcode?: boolean;

  /**
   * Body param: End of ZIP code range (501-99999).
   */
  end_zipcode?: number;

  /**
   * Body param: Product line ID.
   */
  product_line_id?: string;

  /**
   * Body param: Sales rep (account user) ID.
   */
  sales_rep_id?: string;

  /**
   * Body param: Start of ZIP code range (501-99999).
   */
  start_zipcode?: number;

  /**
   * Body param: State this territory covers.
   */
  state?: string;
}

export interface TerritoryListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sales_rep' | 'product_line'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
