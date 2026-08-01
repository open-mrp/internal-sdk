// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from '../core/core';
import * as RequestLogsAPI from '../core/request-logs';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Adjust the demand a production schedule plans against. Overrides are how management accounts for demand that sales history cannot see.
 */
export class DemandOverrides extends APIResource {
  /**
   * Creates a demand override.
   *
   * The scope reference is validated against the account's items or product lines,
   * so an override can never silently match nothing. An `absolute` value replaces
   * the forecast for the period, `delta_units` adds to it, and `delta_percent`
   * scales it; a percent override cannot reduce demand by more than 100%.
   *
   * This endpoint requires the permission: `demand_overrides:create`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.create({
   *     adjustment: 'delta_units',
   *     period_ends_at: '2026-05-10T00:23:00Z',
   *     period_starts_at: '2026-05-10T00:00:00Z',
   *     scope_ref_id: 'it_0131e386ac683e8c29a71f6f1f',
   *     scope_type: 'item',
   *     value: 5000,
   *   });
   * ```
   */
  create(params: DemandOverrideCreateParams, options?: RequestOptions): APIPromise<DemandOverride> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/demand-overrides', { query: { include }, body, ...options });
  }

  /**
   * Retrieves a single demand override by ID.
   *
   * This endpoint requires the permission: `demand_overrides:read`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.retrieve(
   *     'deov_0192b7d38c4f5a9b02d3e16f88',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: DemandOverrideRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DemandOverride> {
    return this._client.get(path`/v1/operations/demand-overrides/${id}`, { query, ...options });
  }

  /**
   * Updates a demand override.
   *
   * The type and value are validated as a pair against the resulting override, so
   * switching an existing units adjustment to `delta_percent` is checked as a
   * percent even when only the type is sent.
   *
   * This endpoint requires the permission: `demand_overrides:update`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.update(
   *     'deov_0192b7d38c4f5a9b02d3e16f88',
   *     { value: 7500 },
   *   );
   * ```
   */
  update(
    id: string,
    params: DemandOverrideUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DemandOverride> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/demand-overrides/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of demand overrides, most recently created first.
   *
   * The period filters match on overlap rather than containment, so an override
   * spanning a quarter is returned when querying a single month inside it.
   *
   * This endpoint requires the permission: `demand_overrides:read`.
   *
   * @example
   * ```ts
   * const listDemandOverride =
   *   await client.operations.demandOverrides.list();
   * ```
   */
  list(
    query: DemandOverrideListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListDemandOverride> {
    return this._client.get('/v1/operations/demand-overrides', { query, ...options });
  }

  /**
   * Deletes a demand override.
   *
   * Schedules already generated are unaffected: a version snapshots the overrides it
   * applied, so deleting one changes future solves only.
   *
   * This endpoint requires the permission: `demand_overrides:delete`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.delete(
   *     'deov_0192b7d38c4f5a9b02d3e16f88',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DemandOverrideDeleteResponse> {
    return this._client.delete(path`/v1/operations/demand-overrides/${id}`, options);
  }
}

/**
 * Request to create a demand override.
 */
export interface CreateDemandOverrideRequest {
  /**
   * How the value adjusts the forecast.
   */
  adjustment: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Last day of the demand period the override applies to.
   */
  period_ends_at: string;

  /**
   * First day of the demand period the override applies to.
   */
  period_starts_at: string;

  /**
   * ID of the item or product line the override targets.
   */
  scope_ref_id: string;

  /**
   * What the override targets.
   */
  scope_type: 'item' | 'product_line';

  /**
   * The adjustment, interpreted according to `adjustment`.
   */
  value: number;

  /**
   * Whether the override is applied to solves at all. Defaults to true.
   */
  active?: boolean;

  /**
   * When the override starts being applied to solves. Defaults to now.
   */
  effective_at?: string;

  /**
   * When the override stops being applied to solves. Omit for an override with no
   * end.
   */
  expires_at?: string;

  /**
   * Free-form notes about the adjustment.
   */
  note?: string;

  /**
   * Why the adjustment was made.
   */
  reason?:
    | 'new_customer'
    | 'lost_account'
    | 'promotion'
    | 'seasonal_shift'
    | 'new_product'
    | 'discontinued'
    | 'market_intelligence'
    | 'other';

  /**
   * ID of the unit the value is expressed in.
   */
  unit_id?: string;
}

/**
 * An adjustment to the demand a production schedule plans against.
 *
 * Sales history cannot see a large customer that is about to order, a promotion,
 * or a line that is being discontinued. An override is how management tells the
 * planner about it. The period bounds the demand months the adjustment applies to;
 * `effective_from` and `expires_at` bound when the override is consulted at all,
 * which is a different question — an override for next quarter typically stops
 * applying once the real orders arrive.
 *
 * A product-line override is distributed across the line's items in proportion to
 * each item's baseline demand.
 */
export interface DemandOverride {
  /**
   * Demand override ID.
   */
  id: string;

  /**
   * How the value adjusts the forecast.
   */
  adjustment: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  created_by: RequestLogsAPI.Actor | null;

  /**
   * When the override starts being applied to solves.
   */
  effective_at: string;

  /**
   * When the override stops being applied to solves.
   */
  expires_at: string | null;

  /**
   * Free-form notes about the adjustment.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'demand_override';

  /**
   * Last day of the demand period the override applies to.
   */
  period_ends_at: string;

  /**
   * First day of the demand period the override applies to.
   */
  period_starts_at: string;

  /**
   * Why the adjustment was made.
   */
  reason:
    | 'new_customer'
    | 'lost_account'
    | 'promotion'
    | 'seasonal_shift'
    | 'new_product'
    | 'discontinued'
    | 'market_intelligence'
    | 'other'
    | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  scope: CoreAPI.Entity | null;

  /**
   * What kind of resource the override targets. Mirrors `scope.type`, which is only
   * present when the scope is expanded.
   */
  scope_type: 'item' | 'product_line';

  /**
   * Whether the override is applied to solves at all.
   */
  status: 'active' | 'inactive';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * The adjustment, interpreted according to `adjustment`.
   */
  value: number;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListDemandOverride {
  /**
   * Resources in this page.
   */
  data: Array<DemandOverride>;

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
 * Request to update a demand override.
 */
export interface UpdateDemandOverrideRequest {
  /**
   * Whether the override is applied to solves at all.
   */
  active?: boolean;

  /**
   * How the value adjusts the forecast.
   */
  adjustment?: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * When the override stops being applied to solves. Clear it to make the override
   * permanent.
   */
  expires_at?: string | null;

  /**
   * Free-form notes about the adjustment.
   */
  note?: string | null;

  /**
   * Last day of the demand period the override applies to.
   */
  period_ends_at?: string;

  /**
   * First day of the demand period the override applies to.
   */
  period_starts_at?: string;

  /**
   * Why the adjustment was made.
   */
  reason?:
    | 'new_customer'
    | 'lost_account'
    | 'promotion'
    | 'seasonal_shift'
    | 'new_product'
    | 'discontinued'
    | 'market_intelligence'
    | 'other'
    | null;

  /**
   * ID of the unit the value is expressed in.
   */
  unit_id?: string | null;

  /**
   * The adjustment, interpreted according to `adjustment`.
   */
  value?: number;
}

export interface DemandOverrideDeleteResponse {}

export interface DemandOverrideCreateParams {
  /**
   * Body param: How the value adjusts the forecast.
   */
  adjustment: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Body param: Last day of the demand period the override applies to.
   */
  period_ends_at: string;

  /**
   * Body param: First day of the demand period the override applies to.
   */
  period_starts_at: string;

  /**
   * Body param: ID of the item or product line the override targets.
   */
  scope_ref_id: string;

  /**
   * Body param: What the override targets.
   */
  scope_type: 'item' | 'product_line';

  /**
   * Body param: The adjustment, interpreted according to `adjustment`.
   */
  value: number;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'scope'>;

  /**
   * Body param: Whether the override is applied to solves at all. Defaults to true.
   */
  active?: boolean;

  /**
   * Body param: When the override starts being applied to solves. Defaults to now.
   */
  effective_at?: string;

  /**
   * Body param: When the override stops being applied to solves. Omit for an
   * override with no end.
   */
  expires_at?: string;

  /**
   * Body param: Free-form notes about the adjustment.
   */
  note?: string;

  /**
   * Body param: Why the adjustment was made.
   */
  reason?:
    | 'new_customer'
    | 'lost_account'
    | 'promotion'
    | 'seasonal_shift'
    | 'new_product'
    | 'discontinued'
    | 'market_intelligence'
    | 'other';

  /**
   * Body param: ID of the unit the value is expressed in.
   */
  unit_id?: string;
}

export interface DemandOverrideRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'scope'>;
}

export interface DemandOverrideUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'scope'>;

  /**
   * Body param: Whether the override is applied to solves at all.
   */
  active?: boolean;

  /**
   * Body param: How the value adjusts the forecast.
   */
  adjustment?: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Body param: When the override stops being applied to solves. Clear it to make
   * the override permanent.
   */
  expires_at?: string | null;

  /**
   * Body param: Free-form notes about the adjustment.
   */
  note?: string | null;

  /**
   * Body param: Last day of the demand period the override applies to.
   */
  period_ends_at?: string;

  /**
   * Body param: First day of the demand period the override applies to.
   */
  period_starts_at?: string;

  /**
   * Body param: Why the adjustment was made.
   */
  reason?:
    | 'new_customer'
    | 'lost_account'
    | 'promotion'
    | 'seasonal_shift'
    | 'new_product'
    | 'discontinued'
    | 'market_intelligence'
    | 'other'
    | null;

  /**
   * Body param: ID of the unit the value is expressed in.
   */
  unit_id?: string | null;

  /**
   * Body param: The adjustment, interpreted according to `adjustment`.
   */
  value?: number;
}

export interface DemandOverrideListParams {
  /**
   * Only return overrides making these kinds of adjustment.
   */
  adjustments?: Array<'absolute' | 'delta_units' | 'delta_percent'>;

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
  include?: Array<'scope'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Only return overrides whose period starts on or before this timestamp, formatted
   * as RFC3339.
   */
  period_end?: string;

  /**
   * Only return overrides whose period ends on or after this timestamp, formatted as
   * RFC3339.
   */
  period_start?: string;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only return overrides targeting these items or product lines.
   */
  scope_ref_ids?: Array<string>;

  /**
   * Only return overrides targeting these kinds of resource.
   */
  scope_types?: Array<'item' | 'product_line'>;

  /**
   * Only return overrides in these activation states.
   */
  statuses?: Array<'active' | 'inactive'>;
}

export declare namespace DemandOverrides {
  export {
    type CreateDemandOverrideRequest as CreateDemandOverrideRequest,
    type DemandOverride as DemandOverride,
    type ListDemandOverride as ListDemandOverride,
    type UpdateDemandOverrideRequest as UpdateDemandOverrideRequest,
    type DemandOverrideDeleteResponse as DemandOverrideDeleteResponse,
    type DemandOverrideCreateParams as DemandOverrideCreateParams,
    type DemandOverrideRetrieveParams as DemandOverrideRetrieveParams,
    type DemandOverrideUpdateParams as DemandOverrideUpdateParams,
    type DemandOverrideListParams as DemandOverrideListParams,
  };
}
