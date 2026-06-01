// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from '../../auth/auth';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage sales targets for account users.
 */
export class SalesTargets extends APIResource {
  /**
   * Creates a sales target for an account user.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.sales.accountUsers.salesTargets.create(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *     {
   *       amount_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       amount_value: '50000.00',
   *       end_date: '2026-03-31T00:00:00Z',
   *       start_date: '2026-01-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  create(id: string, body: SalesTargetCreateParams, options?: RequestOptions): APIPromise<SalesTarget> {
    return this._client.post(path`/v1/sales/account-users/${id}/sales-targets`, { body, ...options });
  }

  /**
   * Creates or updates a sales target by ID.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.sales.accountUsers.salesTargets.update(
   *     'example',
   *     {
   *       id: 'acus_01ea9983ddb41dacc44ecf997c',
   *       amount_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       amount_value: '75000.00',
   *       end_date: '2026-06-30T00:00:00Z',
   *       start_date: '2026-04-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  update(
    targetID: string,
    params: SalesTargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SalesTarget> {
    const { id, ...body } = params;
    return this._client.put(path`/v1/sales/account-users/${id}/sales-targets/${targetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of sales targets for an account user.
   *
   * @example
   * ```ts
   * const listSalesTarget =
   *   await client.sales.accountUsers.salesTargets.list(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  list(
    id: string,
    query: SalesTargetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesTarget> {
    return this._client.get(path`/v1/sales/account-users/${id}/sales-targets`, { query, ...options });
  }
}

/**
 * Request to create a sales target.
 */
export interface CreateSalesTargetRequest {
  /**
   * Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * End date.
   */
  end_date: string;

  /**
   * Start date.
   */
  start_date: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSalesTarget {
  /**
   * Resources in this page.
   */
  data: Array<SalesTarget>;

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
 * Sales target for an account user.
 */
export interface SalesTarget {
  /**
   * Sales target ID.
   */
  id: string;

  /**
   * Value with an associated unit.
   */
  amount: AccountUsersAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * End date.
   */
  end_at: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_target';

  /**
   * User resource.
   */
  sales_rep: AuthAPI.User | null;

  /**
   * Start date.
   */
  start_at: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create or update a sales target.
 */
export interface UpsertSalesTargetRequest {
  /**
   * Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * End date.
   */
  end_date: string;

  /**
   * Start date.
   */
  start_date: string;
}

export interface SalesTargetCreateParams {
  /**
   * Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * End date.
   */
  end_date: string;

  /**
   * Start date.
   */
  start_date: string;
}

export interface SalesTargetUpdateParams {
  /**
   * Path param: Sales rep user ID.
   */
  id: string;

  /**
   * Body param: Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Body param: Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * Body param: End date.
   */
  end_date: string;

  /**
   * Body param: Start date.
   */
  start_date: string;
}

export interface SalesTargetListParams {
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

export declare namespace SalesTargets {
  export {
    type CreateSalesTargetRequest as CreateSalesTargetRequest,
    type ListSalesTarget as ListSalesTarget,
    type SalesTarget as SalesTarget,
    type UpsertSalesTargetRequest as UpsertSalesTargetRequest,
    type SalesTargetCreateParams as SalesTargetCreateParams,
    type SalesTargetUpdateParams as SalesTargetUpdateParams,
    type SalesTargetListParams as SalesTargetListParams,
  };
}
