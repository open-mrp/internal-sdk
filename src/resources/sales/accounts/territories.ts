// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ProductLinesAPI from '../../catalog/product-lines';
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
   *     'ac_01gf7a8200eaj8fke1xvw4h50x',
   *     {
   *       sales_rep_id: 'acus_01gf7a8200er3ar3pkfrb6kk29',
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
   *     'te_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x' },
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
   *     'te_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
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
   * const territories =
   *   await client.sales.accounts.territories.list(
   *     'ac_01gf7a8200eaj8fke1xvw4h50x',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: TerritoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TerritoryListResponse> {
    return this._client.get(path`/v1/sales/accounts/${accountID}/territories`, { query, ...options });
  }

  /**
   * Deletes a territory.
   *
   * @example
   * ```ts
   * const territory =
   *   await client.sales.accounts.territories.delete(
   *     'te_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x' },
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
  product_line: ProductLinesAPI.ProductLine | null;

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
 * List represents a paginated list of resources.
 */
export interface TerritoryListResponse {
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
  page_info: AgentsAPI.PageInfo;
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
    type Territory as Territory,
    type TerritoryListResponse as TerritoryListResponse,
    type TerritoryDeleteResponse as TerritoryDeleteResponse,
    type TerritoryCreateParams as TerritoryCreateParams,
    type TerritoryRetrieveParams as TerritoryRetrieveParams,
    type TerritoryUpdateParams as TerritoryUpdateParams,
    type TerritoryListParams as TerritoryListParams,
    type TerritoryDeleteParams as TerritoryDeleteParams,
  };
}
