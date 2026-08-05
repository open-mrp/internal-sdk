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
   * Creates a demand override, telling the planner about demand the sales history
   * cannot see.
   *
   * The scope reference is validated against the account's items and product lines,
   * so an override can never silently match nothing. An `account`-scoped override
   * takes no scope reference and must be a delta rather than an absolute value,
   * since one number fanned out across every item would flatten the whole plan.
   *
   * Schedules that have already been generated are unaffected; the override is
   * picked up by the next one.
   *
   * This endpoint requires the permission: `demand_overrides:create`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.create({
   *     adjustment: 'delta_units',
   *     period_ends_at: '2026-11-30T00:00:00Z',
   *     period_starts_at: '2026-09-01T00:00:00Z',
   *     scope_ref_id: 'it_pej07ckhvu62',
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
   *     'deov_p8roudstrung',
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
   * Only the fields sent are changed. The adjustment and value are validated as a
   * pair against the resulting override, so switching a stored unit adjustment to
   * `delta_percent` is checked as a percentage even when only the adjustment is
   * sent; the period is checked the same way.
   *
   * What an override targets cannot be changed — create a new override to adjust a
   * different item, product line, or the account as a whole. Schedules that have
   * already been generated are unaffected; the change is picked up by the next one.
   *
   * This endpoint requires the permission: `demand_overrides:update`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.update(
   *     'deov_p8roudstrung',
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
   * spanning a quarter is returned when querying a single month inside it. The `q`
   * search term matches the override's note.
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
   * Deletes a demand override permanently.
   *
   * Schedules that have already been generated are unaffected: each one records the
   * overrides it applied, so deleting an override changes only schedules generated
   * from now on. To stop an override applying while keeping it on file, deactivate
   * it instead.
   *
   * This endpoint requires the permission: `demand_overrides:delete`.
   *
   * @example
   * ```ts
   * const demandOverride =
   *   await client.operations.demandOverrides.delete(
   *     'deov_p8roudstrung',
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
   *
   * - `absolute`: replaces the forecast for each month in the period.
   * - `delta_units`: adds the value to each month in the period.
   * - `delta_percent`: scales each month in the period by the value as a percentage.
   *
   * When several overrides land on the same month they are applied in that order, so
   * a percentage always acts on the already-adjusted number.
   */
  adjustment: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Last day of the demand period the override applies to.
   *
   * Must fall on or after `period_starts_at`.
   */
  period_ends_at: string;

  /**
   * First day of the demand period the override applies to.
   *
   * Overrides are applied month by month, so every calendar month the period touches
   * is adjusted and any time of day is ignored.
   */
  period_starts_at: string;

  /**
   * ID of the item or product line the override targets.
   *
   * Omit it for an `account`-wide override, which targets every planned item rather
   * than one thing. The ID is checked against the account's items and product lines,
   * so an override cannot be created against something that does not exist.
   */
  scope_ref_id: string;

  /**
   * What the override targets.
   *
   * - `item`: a single item.
   * - `product_line`: every item sold under one product line.
   * - `account`: every item in the plan, which is how a blanket assumption such as
   *   "plan for double demand" is expressed.
   */
  scope_type: 'item' | 'product_line' | 'account';

  /**
   * The amount of the adjustment, interpreted according to `adjustment`.
   *
   * A `delta_percent` value is a number of percent, so `-25` plans a quarter less
   * than the forecast; it cannot go below `-100`. An `absolute` value cannot be
   * negative, while a `delta_units` value can, so that a cancelled program removes
   * demand.
   */
  value: number;

  /**
   * Whether the override is taken into account when a schedule is generated.
   *
   * Send `false` to stage an adjustment that should not affect schedules yet; an
   * override is otherwise created ready to apply.
   */
  active?: boolean;

  /**
   * When the override starts being applied to newly generated schedules.
   *
   * When omitted, the override starts applying straight away.
   */
  effective_at?: string;

  /**
   * When the override stops being applied to newly generated schedules.
   *
   * When omitted, the override keeps applying until it is deactivated or deleted.
   */
  expires_at?: string;

  /**
   * Free-form notes about the adjustment.
   *
   * This is the text the free-text search on the list endpoint matches against.
   */
  note?: string;

  /**
   * Why the adjustment was made.
   *
   * The reason is carried into each schedule the override changes, so a plan can
   * explain why a month departs from history.
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
   *
   * Recorded for context only: the value is applied to the planned demand without
   * unit conversion, so a unit adjustment should be stated in the unit the item is
   * planned in.
   */
  unit_id?: string;
}

/**
 * An adjustment to the demand a production schedule is planned against.
 *
 * Sales history cannot see a large customer that is about to order, a promotion,
 * or a line that is being discontinued. An override is how management tells the
 * planner about it. The period names the months the demand will occur in, and only
 * months of the coming planning year are adjusted — a period entirely in the past
 * changes nothing, because the plan covers the year ahead. `effective_at` and
 * `expires_at` answer a different question: how long the override is consulted at
 * all, so an adjustment can be retired on a date without deleting it.
 */
export interface DemandOverride {
  /**
   * Demand override ID.
   */
  id: string;

  /**
   * How the value adjusts the forecast.
   *
   * - `absolute`: replaces the forecast for each month in the period.
   * - `delta_units`: adds the value to each month in the period.
   * - `delta_percent`: scales each month in the period by the value as a percentage.
   *
   * When several overrides land on the same month they are applied in that order, so
   * a percentage always acts on the already-adjusted number. An adjusted month is
   * never taken below zero.
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
   * When the override starts being applied to newly generated schedules.
   */
  effective_at: string;

  /**
   * When the override stops being applied to newly generated schedules.
   *
   * An override with no expiry keeps applying until it is deactivated or deleted.
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
   *
   * Overrides are applied month by month, so every calendar month the period touches
   * is adjusted and any time of day is ignored.
   */
  period_starts_at: string;

  /**
   * Why the adjustment was made.
   *
   * The reason is carried into each schedule the override changes, so a plan can
   * explain why a month departs from history.
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
   * What the override targets.
   *
   * - `item`: a single item.
   * - `product_line`: every item sold under one product line.
   * - `account`: every item in the plan, which is how a blanket assumption such as
   *   "plan for double demand" is expressed.
   */
  scope_type: 'item' | 'product_line' | 'account';

  /**
   * Whether the override is taken into account when a schedule is generated.
   *
   * An inactive override is skipped whatever its effective window says, which is how
   * a prepared adjustment is parked without losing it.
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
   * The amount of the adjustment, interpreted according to `adjustment`.
   *
   * A `delta_percent` value is a number of percent, so `-25` plans a quarter less
   * than the forecast.
   */
  value: number;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * Request to update a demand override.
 */
export interface UpdateDemandOverrideRequest {
  /**
   * Whether the override is taken into account when a schedule is generated.
   *
   * Deactivating parks the override without losing it; it is skipped whatever its
   * effective window says, and can be reactivated later.
   */
  active?: boolean;

  /**
   * How the value adjusts the forecast.
   *
   * - `absolute`: replaces the forecast for each month in the period.
   * - `delta_units`: adds the value to each month in the period.
   * - `delta_percent`: scales each month in the period by the value as a percentage.
   */
  adjustment?: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * When the override stops being applied to newly generated schedules.
   *
   * Clear it to keep the override applying until it is deactivated or deleted.
   */
  expires_at?: string | null;

  /**
   * Free-form notes about the adjustment.
   */
  note?: string | null;

  /**
   * Last day of the demand period the override applies to.
   *
   * Must fall on or after the override's start, whether that is sent here or already
   * stored.
   */
  period_ends_at?: string;

  /**
   * First day of the demand period the override applies to.
   *
   * Overrides are applied month by month, so every calendar month the period touches
   * is adjusted and any time of day is ignored.
   */
  period_starts_at?: string;

  /**
   * Why the adjustment was made.
   *
   * The reason is carried into each schedule the override changes, so a plan can
   * explain why a month departs from history.
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
   *
   * Recorded for context only: the value is applied to the planned demand without
   * unit conversion.
   */
  unit_id?: string | null;

  /**
   * The amount of the adjustment, interpreted according to `adjustment`.
   *
   * It is validated against the adjustment the override ends up with, so switching a
   * stored unit delta to `delta_percent` without sending a new value requires the
   * existing value to be a legal percentage.
   */
  value?: number;
}

export interface DemandOverrideDeleteResponse {}

export interface DemandOverrideCreateParams {
  /**
   * Body param: How the value adjusts the forecast.
   *
   * - `absolute`: replaces the forecast for each month in the period.
   * - `delta_units`: adds the value to each month in the period.
   * - `delta_percent`: scales each month in the period by the value as a percentage.
   *
   * When several overrides land on the same month they are applied in that order, so
   * a percentage always acts on the already-adjusted number.
   */
  adjustment: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Body param: Last day of the demand period the override applies to.
   *
   * Must fall on or after `period_starts_at`.
   */
  period_ends_at: string;

  /**
   * Body param: First day of the demand period the override applies to.
   *
   * Overrides are applied month by month, so every calendar month the period touches
   * is adjusted and any time of day is ignored.
   */
  period_starts_at: string;

  /**
   * Body param: ID of the item or product line the override targets.
   *
   * Omit it for an `account`-wide override, which targets every planned item rather
   * than one thing. The ID is checked against the account's items and product lines,
   * so an override cannot be created against something that does not exist.
   */
  scope_ref_id: string;

  /**
   * Body param: What the override targets.
   *
   * - `item`: a single item.
   * - `product_line`: every item sold under one product line.
   * - `account`: every item in the plan, which is how a blanket assumption such as
   *   "plan for double demand" is expressed.
   */
  scope_type: 'item' | 'product_line' | 'account';

  /**
   * Body param: The amount of the adjustment, interpreted according to `adjustment`.
   *
   * A `delta_percent` value is a number of percent, so `-25` plans a quarter less
   * than the forecast; it cannot go below `-100`. An `absolute` value cannot be
   * negative, while a `delta_units` value can, so that a cancelled program removes
   * demand.
   */
  value: number;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'scope'>;

  /**
   * Body param: Whether the override is taken into account when a schedule is
   * generated.
   *
   * Send `false` to stage an adjustment that should not affect schedules yet; an
   * override is otherwise created ready to apply.
   */
  active?: boolean;

  /**
   * Body param: When the override starts being applied to newly generated schedules.
   *
   * When omitted, the override starts applying straight away.
   */
  effective_at?: string;

  /**
   * Body param: When the override stops being applied to newly generated schedules.
   *
   * When omitted, the override keeps applying until it is deactivated or deleted.
   */
  expires_at?: string;

  /**
   * Body param: Free-form notes about the adjustment.
   *
   * This is the text the free-text search on the list endpoint matches against.
   */
  note?: string;

  /**
   * Body param: Why the adjustment was made.
   *
   * The reason is carried into each schedule the override changes, so a plan can
   * explain why a month departs from history.
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
   *
   * Recorded for context only: the value is applied to the planned demand without
   * unit conversion, so a unit adjustment should be stated in the unit the item is
   * planned in.
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
   * Body param: Whether the override is taken into account when a schedule is
   * generated.
   *
   * Deactivating parks the override without losing it; it is skipped whatever its
   * effective window says, and can be reactivated later.
   */
  active?: boolean;

  /**
   * Body param: How the value adjusts the forecast.
   *
   * - `absolute`: replaces the forecast for each month in the period.
   * - `delta_units`: adds the value to each month in the period.
   * - `delta_percent`: scales each month in the period by the value as a percentage.
   */
  adjustment?: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Body param: When the override stops being applied to newly generated schedules.
   *
   * Clear it to keep the override applying until it is deactivated or deleted.
   */
  expires_at?: string | null;

  /**
   * Body param: Free-form notes about the adjustment.
   */
  note?: string | null;

  /**
   * Body param: Last day of the demand period the override applies to.
   *
   * Must fall on or after the override's start, whether that is sent here or already
   * stored.
   */
  period_ends_at?: string;

  /**
   * Body param: First day of the demand period the override applies to.
   *
   * Overrides are applied month by month, so every calendar month the period touches
   * is adjusted and any time of day is ignored.
   */
  period_starts_at?: string;

  /**
   * Body param: Why the adjustment was made.
   *
   * The reason is carried into each schedule the override changes, so a plan can
   * explain why a month departs from history.
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
   *
   * Recorded for context only: the value is applied to the planned demand without
   * unit conversion.
   */
  unit_id?: string | null;

  /**
   * Body param: The amount of the adjustment, interpreted according to `adjustment`.
   *
   * It is validated against the adjustment the override ends up with, so switching a
   * stored unit delta to `delta_percent` without sending a new value requires the
   * existing value to be a legal percentage.
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
   * The end of the window to match against. Only return overrides whose period
   * starts on or before this timestamp, formatted as RFC3339.
   */
  ends_at?: string;

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
   * Only return overrides with these kinds of target.
   */
  scope_types?: Array<'item' | 'product_line' | 'account'>;

  /**
   * The start of the window to match against. Only return overrides whose period
   * ends on or after this timestamp, formatted as RFC3339.
   */
  starts_at?: string;

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
