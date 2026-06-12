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
   * If no target with the given ID exists, one is created with the supplied dates,
   * amount, and unit. If it already exists, only the amount value is updated — the
   * dates and unit are left unchanged.
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
   * Returns the sales targets for an account user.
   *
   * This endpoint does not support cursor pagination; passing a `cursor` returns a
   * validation error.
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
   * ID of the unit the amount is denominated in (typically a currency unit).
   */
  amount_unit_id: string;

  /**
   * Goal amount for the period, as a decimal string (e.g. `50000.00`).
   */
  amount_value: string;

  /**
   * End of the period the target applies to.
   */
  end_date: string;

  /**
   * Start of the period the target applies to (inclusive).
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
 * A revenue goal assigned to a sales rep for a specific time period.
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
   * End of the period this target applies to (e.g. the close of a quarter).
   */
  end_at: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_target';

  /**
   * A user's global profile, shared across every account they belong to.
   *
   * Account-specific settings (status, role, department) live on the account user
   * resource that links the user to each account.
   */
  sales_rep: AuthAPI.User | null;

  /**
   * Start of the period this target applies to (inclusive).
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
   * ID of the unit the amount is denominated in (typically a currency unit).
   *
   * Only applied when creating a new target; the unit on an existing target is not
   * changed.
   */
  amount_unit_id: string;

  /**
   * Goal amount for the period, as a decimal string (e.g. `75000.00`).
   */
  amount_value: string;

  /**
   * End of the period the target applies to.
   *
   * Only applied when creating a new target; the dates on an existing target are not
   * changed.
   */
  end_date: string;

  /**
   * Start of the period the target applies to (inclusive).
   *
   * Only applied when creating a new target; the dates on an existing target are not
   * changed.
   */
  start_date: string;
}

export interface SalesTargetCreateParams {
  /**
   * ID of the unit the amount is denominated in (typically a currency unit).
   */
  amount_unit_id: string;

  /**
   * Goal amount for the period, as a decimal string (e.g. `50000.00`).
   */
  amount_value: string;

  /**
   * End of the period the target applies to.
   */
  end_date: string;

  /**
   * Start of the period the target applies to (inclusive).
   */
  start_date: string;
}

export interface SalesTargetUpdateParams {
  /**
   * Path param: ID of the account user (sales rep) the target is for.
   */
  id: string;

  /**
   * Body param: ID of the unit the amount is denominated in (typically a currency
   * unit).
   *
   * Only applied when creating a new target; the unit on an existing target is not
   * changed.
   */
  amount_unit_id: string;

  /**
   * Body param: Goal amount for the period, as a decimal string (e.g. `75000.00`).
   */
  amount_value: string;

  /**
   * Body param: End of the period the target applies to.
   *
   * Only applied when creating a new target; the dates on an existing target are not
   * changed.
   */
  end_date: string;

  /**
   * Body param: Start of the period the target applies to (inclusive).
   *
   * Only applied when creating a new target; the dates on an existing target are not
   * changed.
   */
  start_date: string;
}

export interface SalesTargetListParams {
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
