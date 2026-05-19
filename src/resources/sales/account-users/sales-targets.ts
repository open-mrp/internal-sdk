// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from '../../auth/actions';
import * as BatchesAPI from '../../operations/batches/batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage sales targets for account users.
 */
export class SalesTargets extends APIResource {
  /**
   * Creates or updates a sales target by ID.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.sales.accountUsers.salesTargets.update('', {
   *     id: '',
   *     amount_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     amount_value: '75000.00',
   *     end_date: '2026-06-30T00:00:00Z',
   *     start_date: '2026-04-01T00:00:00Z',
   *   });
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
   * const response =
   *   await client.sales.accountUsers.salesTargets.retrieveSalesTargets(
   *     'acus_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  retrieveSalesTargets(
    id: string,
    query: SalesTargetRetrieveSalesTargetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesTargetRetrieveSalesTargetsResponse> {
    return this._client.get(path`/v1/sales/account-users/${id}/sales-targets`, { query, ...options });
  }

  /**
   * Creates a sales target for an account user.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.sales.accountUsers.salesTargets.salesTargets(
   *     '',
   *     {
   *       amount_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       amount_value: '50000.00',
   *       end_date: '2026-03-31T00:00:00Z',
   *       start_date: '2026-01-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  salesTargets(
    id: string,
    body: SalesTargetSalesTargetsParams,
    options?: RequestOptions,
  ): APIPromise<SalesTarget> {
    return this._client.post(path`/v1/sales/account-users/${id}/sales-targets`, { body, ...options });
  }
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
  amount: BatchesAPI.Quantity | null;

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
  sales_rep: ActionsAPI.User | null;

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
 * List represents a paginated list of resources.
 */
export interface SalesTargetRetrieveSalesTargetsResponse {
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
  page_info: AgentsAPI.PageInfo;
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

export interface SalesTargetRetrieveSalesTargetsParams {
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

export interface SalesTargetSalesTargetsParams {
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

export declare namespace SalesTargets {
  export {
    type SalesTarget as SalesTarget,
    type SalesTargetRetrieveSalesTargetsResponse as SalesTargetRetrieveSalesTargetsResponse,
    type SalesTargetUpdateParams as SalesTargetUpdateParams,
    type SalesTargetRetrieveSalesTargetsParams as SalesTargetRetrieveSalesTargetsParams,
    type SalesTargetSalesTargetsParams as SalesTargetSalesTargetsParams,
  };
}
