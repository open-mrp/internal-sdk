// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ProductionSchedulesAPI from './production-schedules';
import * as SalesOrdersActionsAPI from '../../sales/sales-orders/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Generate and review machine-level production schedules.
 */
export class Actions extends APIResource {
  /**
   * Archives a schedule version, retiring it without discarding its history.
   *
   * This is how a published version is taken out of use: it stays readable and still
   * backs any attainment already measured against it.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.actions.archive(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *   );
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<ProductionSchedulesAPI.ProductionSchedule> {
    return this._client.put(path`/v1/operations/production-schedules/${id}/actions/archive`, options);
  }

  /**
   * Runs the production scheduling solver and returns the plan without saving it.
   *
   * This is the inspection surface for the scheduler: it takes the same path a
   * generated schedule will take, minus the write, so a plan can be reviewed and
   * compared before anything depends on it. Machines must be marked as the planning
   * constraint in production schedule settings, otherwise there is nothing to
   * schedule.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const productionSchedulePreview =
   *   await client.operations.productionSchedules.actions.preview(
   *     { horizon_weeks: 13 },
   *   );
   * ```
   */
  preview(
    body: ActionPreviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionSchedulePreview> {
    return this._client.put('/v1/operations/production-schedules/actions/preview', { body, ...options });
  }

  /**
   * Returns what regenerating this draft would change, without changing it.
   *
   * Every campaign either plan holds is listed, including the ones both agree on, so
   * the caller can render a full side-by-side rather than a list of surprises.
   * `discarded_manual_count` is what `replace_all` would destroy — a regenerate that
   * silently eats hand-work is abandoned within two cycles, so the destructive mode
   * has to be able to state its cost before it runs.
   *
   * Planning inputs default to the ones the version was generated with, so a plain
   * preview answers "what would the solver say now" rather than answering a
   * different question with a different horizon.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const productionScheduleRegeneratePreview =
   *   await client.operations.productionSchedules.actions.previewRegenerate(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *     { horizon_weeks: 13 },
   *   );
   * ```
   */
  previewRegenerate(
    id: string,
    body: ActionPreviewRegenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionScheduleRegeneratePreview> {
    return this._client.put(path`/v1/operations/production-schedules/${id}/actions/preview-regenerate`, {
      body,
      ...options,
    });
  }

  /**
   * Publishes a draft schedule, freezing its first weeks.
   *
   * Publishing is what makes a plan a commitment: the frozen weeks' lines are marked
   * frozen, the frozen line count and quantity are captured onto the version, and
   * any published version covering the same horizon is superseded rather than
   * rewritten. After this, changes inside the frozen window require a reason and are
   * recorded as deviations.
   *
   * The frozen counts are snapshotted here and never recomputed, so adherence keeps
   * the denominator it was committed to.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.actions.publish(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *   );
   * ```
   */
  publish(id: string, options?: RequestOptions): APIPromise<ProductionSchedulesAPI.ProductionSchedule> {
    return this._client.put(path`/v1/operations/production-schedules/${id}/actions/publish`, options);
  }

  /**
   * Re-solves a draft in place, keeping its version number.
   *
   * Only a draft can be regenerated. A published version is a commitment the floor
   * is already working to, and a superseded or archived one is history; re-solving
   * either in place would change what a week was measured against after the fact. To
   * replan against a published version, generate a new one — publishing it
   * supersedes the current one.
   *
   * The version number is kept deliberately: minting a new version for every
   * re-solve would fill the list with drafts nobody asked for and make the version
   * number meaningless as a count of the plans actually considered.
   *
   * `preserve_manual` keeps every hand-edited campaign and replaces the rest.
   * `replace_all` takes the fresh solve whole, and each hand edit it destroys is
   * written to the deviation log first — "where did my change go" has to stay
   * answerable. Call `preview-regenerate` first to see the cost as a number.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.actions.regenerate(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *     { merge_mode: 'preserve_manual' },
   *   );
   * ```
   */
  regenerate(
    id: string,
    body: ActionRegenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionSchedulesAPI.ProductionSchedule> {
    return this._client.put(path`/v1/operations/production-schedules/${id}/actions/regenerate`, {
      body,
      ...options,
    });
  }

  /**
   * Turns one planned week into a production run.
   *
   * Each campaign in the week becomes one batch per planned lot, using the lot size
   * the campaign was planned at. A 360-unit campaign at a 60-unit lot arrives on the
   * floor as six batches, not one instruction to make 360; a quantity that is not a
   * whole number of lots trails a single short lot at the end of the run.
   *
   * The release is atomic. A run holding half a week's batches is worse than no run,
   * because the missing half looks like work nobody was asked to do and attainment
   * would count it as unplanned production.
   *
   * Releasing the same week twice fails rather than creating a second run. Each
   * released line records the run now carrying it, and a line that is already
   * released is never re-pointed.
   *
   * This endpoint requires the permissions: `production_schedules:update`,
   * `production_runs:create`.
   *
   * @example
   * ```ts
   * const releaseScheduleWeekResult =
   *   await client.operations.productionSchedules.actions.releaseWeek(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *     {
   *       responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
   *       week_index: 0,
   *     },
   *   );
   * ```
   */
  releaseWeek(
    id: string,
    body: ActionReleaseWeekParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseScheduleWeekResult> {
    return this._client.post(path`/v1/operations/production-schedules/${id}/actions/release-week`, {
      body,
      ...options,
    });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListScheduleCampaign {
  /**
   * Resources in this page.
   */
  data: Array<ScheduleCampaign>;

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
 * List represents a paginated list of resources.
 */
export interface ListScheduleDiffLine {
  /**
   * Resources in this page.
   */
  data: Array<ScheduleDiffLine>;

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
 * List represents a paginated list of resources.
 */
export interface ListSchedulePolicy {
  /**
   * Resources in this page.
   */
  data: Array<SchedulePolicy>;

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
 * List represents a paginated list of resources.
 */
export interface ListScheduleProjection {
  /**
   * Resources in this page.
   */
  data: Array<ScheduleProjection>;

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
 * Request to preview a production schedule.
 */
export interface PreviewProductionScheduleRequest {
  /**
   * Overrides the configured demand basis for this preview only.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Overrides the configured horizon for this preview only.
   */
  horizon_weeks?: number;

  /**
   * The instant to plan against. Defaults to now.
   */
  planning_as_of?: string;
}

/**
 * Request to see what a re-solve would change.
 */
export interface PreviewRegenerateProductionScheduleRequest {
  /**
   * How demand is derived. Defaults to the version's own basis.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Weeks the plan should cover. Defaults to the version's own horizon.
   */
  horizon_weeks?: number;

  /**
   * Date to plan from. Defaults to the date the version was generated for.
   */
  planning_as_of?: string;
}

/**
 * A production plan produced by the scheduling solver.
 */
export interface ProductionSchedulePreview {
  /**
   * List represents a paginated list of resources.
   */
  campaigns: ListScheduleCampaign | null;

  /**
   * What the solver could not do, and why the plan differs from raw history.
   */
  diagnostics: ProductionSchedulesAPI.ScheduleDiagnostics;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_preview';

  /**
   * The instant the plan was calculated against.
   */
  planning_as_of_at: string;

  /**
   * List represents a paginated list of resources.
   */
  policies: ListSchedulePolicy | null;

  /**
   * List represents a paginated list of resources.
   */
  projections: ListScheduleProjection | null;

  /**
   * Version of the solver that produced this plan.
   */
  solver_version: string;
}

/**
 * What a regenerate would change about a draft, without changing it.
 *
 * A regenerate that silently discards hand-work is abandoned within two cycles, so
 * the destructive mode states its cost as a number before it runs:
 * `discarded_manual_count` is exactly how many hand-edited campaigns `replace_all`
 * would destroy.
 */
export interface ProductionScheduleRegeneratePreview {
  /**
   * Campaigns the fresh solve wants that the current plan does not have.
   */
  added_count: number;

  /**
   * Campaigns both hold, in different quantities.
   */
  changed_count: number;

  /**
   * Hand-edited campaigns `replace_all` would destroy.
   */
  discarded_manual_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListScheduleDiffLine | null;

  /**
   * Hand-edited campaigns currently on the draft.
   */
  manual_line_count: number;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_regenerate_preview';

  /**
   * The instant the fresh solve planned from.
   */
  planning_as_of_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_schedule: CoreAPI.Entity | null;

  /**
   * Campaigns the current plan has that the fresh solve does not want.
   */
  removed_count: number;

  /**
   * Which solver produced the proposal.
   */
  solver_version: string;
}

/**
 * Request to re-solve a draft in place.
 */
export interface RegenerateProductionScheduleRequest {
  /**
   * How demand is derived. Defaults to the version's own basis.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Weeks the plan should cover. Defaults to the version's own horizon.
   */
  horizon_weeks?: number;

  /**
   * What happens to hand-edited campaigns. Defaults to keeping them.
   */
  merge_mode?: 'preserve_manual' | 'replace_all';

  /**
   * Date to plan from. Defaults to the date the version was generated for.
   */
  planning_as_of?: string;
}

/**
 * Request to release one week of a production schedule to the floor.
 */
export interface ReleaseProductionScheduleWeekRequest {
  /**
   * ID of the account user accountable for executing the run.
   *
   * Accepts either an account user ID or a user ID; it is resolved and stored as the
   * account user.
   */
  responsible_user_id: string;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * ID of the scanning station the batches will be scanned at.
   */
  scanning_station_id?: string;
}

/**
 * The production run created from one week of a schedule.
 *
 * Each planned campaign becomes one batch per lot, so a 360-unit week at a 60-unit
 * lot arrives on the floor as six batches rather than one instruction to make 360.
 */
export interface ReleaseScheduleWeekResult {
  /**
   * How many batches were created across all campaigns.
   */
  batch_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ProductionSchedulesAPI.ListReleasedScheduleLine | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_week_release';

  /**
   * Production run resource.
   */
  production_run: SalesOrdersActionsAPI.ProductionRun | null;

  /**
   * How many campaigns were released.
   */
  released_line_count: number;

  /**
   * Total units released.
   */
  total_quantity: number;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * First instant of the released week.
   */
  week_starts_at: string;
}

/**
 * One planned production block: make this item, on this machine, in this week.
 */
export interface ScheduleCampaign {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Whole lots the quantity rounds to.
   */
  lots: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * Constraint hours the campaign consumes.
   */
  run_hours: number;

  /**
   * SKU of the item.
   */
  sku: string;

  /**
   * Quantity to produce.
   */
  units: number;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;
}

/**
 * One campaign as the current plan and a fresh solve each see it.
 */
export interface ScheduleDiffLine {
  /**
   * What the regenerate would do to this campaign.
   */
  change: 'added' | 'removed' | 'changed' | 'unchanged';

  /**
   * Whether the current campaign was created or edited by a person.
   */
  current_is_manual: boolean;

  /**
   * Units the current plan asks for. Zero when the campaign is being added.
   */
  current_quantity: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * Units the fresh solve asks for. Zero when the campaign is being removed.
   */
  proposed_quantity: number;

  /**
   * SKU of that item.
   */
  sku: string;

  /**
   * Zero-based horizon week.
   */
  week_index: number;
}

/**
 * The inventory policy computed for one item.
 */
export interface SchedulePolicy {
  /**
   * ABC class by share of constraint run hours.
   */
  abc_class: 'a' | 'b' | 'c' | null;

  /**
   * Demand used for planning, annualized.
   */
  annual_demand: number;

  /**
   * Constraint hours this item's annual demand consumes.
   */
  annual_run_hours: number;

  /**
   * What the constraint stage holds on average: its buffer plus half a campaign.
   */
  average_greige_inventory: number;

  /**
   * Observed or default lead time at the constraint.
   */
  constraint_lead_time_weeks: number;

  /**
   * Economic order quantity.
   */
  eoq_units: number;

  /**
   * Lead time from the constraint to sellable stock.
   */
  finish_lead_time_weeks: number;

  /**
   * Annual cost of holding one unit.
   */
  holding_cost: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * What the constraint stage holds at its peak: its buffer plus a whole campaign.
   */
  max_greige_inventory: number;

  /**
   * Stock on hand at the constraint plus everything downstream of it.
   */
  on_hand_echelon: number;

  /**
   * Stock sitting at the constraint stage on its own.
   */
  on_hand_greige: number;

  /**
   * Ceiling on how far ahead this item is built.
   */
  order_up_to: number;

  /**
   * Stock position at which a campaign is triggered.
   */
  reorder_point: number;

  /**
   * Buffer held as finished goods.
   */
  safety_stock_downstream: number;

  /**
   * Buffer held at the constraint, pooled across the finished goods it feeds.
   */
  safety_stock_primary: number;

  /**
   * How long one unit occupies the constraint.
   */
  seconds_per_unit: number;

  /**
   * Cost of one changeover, used as the setup cost in the lot-size calculation.
   */
  setup_cost: number;

  /**
   * SKU of the item.
   */
  sku: string;

  /**
   * Standard cost per unit.
   */
  unit_cost: number;

  /**
   * Demand used for planning, per week.
   */
  weekly_demand: number;

  /**
   * Weeks of demand the current stock covers.
   */
  weeks_of_cover: number;
}

/**
 * An item's projected stock position across the horizon.
 */
export interface ScheduleProjection {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Projected stock at the end of each week of the horizon.
   */
  on_hand_by_week: Array<number>;
}

export interface ActionPreviewParams {
  /**
   * Overrides the configured demand basis for this preview only.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Overrides the configured horizon for this preview only.
   */
  horizon_weeks?: number;

  /**
   * The instant to plan against. Defaults to now.
   */
  planning_as_of?: string;
}

export interface ActionPreviewRegenerateParams {
  /**
   * How demand is derived. Defaults to the version's own basis.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Weeks the plan should cover. Defaults to the version's own horizon.
   */
  horizon_weeks?: number;

  /**
   * Date to plan from. Defaults to the date the version was generated for.
   */
  planning_as_of?: string;
}

export interface ActionRegenerateParams {
  /**
   * How demand is derived. Defaults to the version's own basis.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Weeks the plan should cover. Defaults to the version's own horizon.
   */
  horizon_weeks?: number;

  /**
   * What happens to hand-edited campaigns. Defaults to keeping them.
   */
  merge_mode?: 'preserve_manual' | 'replace_all';

  /**
   * Date to plan from. Defaults to the date the version was generated for.
   */
  planning_as_of?: string;
}

export interface ActionReleaseWeekParams {
  /**
   * ID of the account user accountable for executing the run.
   *
   * Accepts either an account user ID or a user ID; it is resolved and stored as the
   * account user.
   */
  responsible_user_id: string;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * ID of the scanning station the batches will be scanned at.
   */
  scanning_station_id?: string;
}

export declare namespace Actions {
  export {
    type ListScheduleCampaign as ListScheduleCampaign,
    type ListScheduleDiffLine as ListScheduleDiffLine,
    type ListSchedulePolicy as ListSchedulePolicy,
    type ListScheduleProjection as ListScheduleProjection,
    type PreviewProductionScheduleRequest as PreviewProductionScheduleRequest,
    type PreviewRegenerateProductionScheduleRequest as PreviewRegenerateProductionScheduleRequest,
    type ProductionSchedulePreview as ProductionSchedulePreview,
    type ProductionScheduleRegeneratePreview as ProductionScheduleRegeneratePreview,
    type RegenerateProductionScheduleRequest as RegenerateProductionScheduleRequest,
    type ReleaseProductionScheduleWeekRequest as ReleaseProductionScheduleWeekRequest,
    type ReleaseScheduleWeekResult as ReleaseScheduleWeekResult,
    type ScheduleCampaign as ScheduleCampaign,
    type ScheduleDiffLine as ScheduleDiffLine,
    type SchedulePolicy as SchedulePolicy,
    type ScheduleProjection as ScheduleProjection,
    type ActionPreviewParams as ActionPreviewParams,
    type ActionPreviewRegenerateParams as ActionPreviewRegenerateParams,
    type ActionRegenerateParams as ActionRegenerateParams,
    type ActionReleaseWeekParams as ActionReleaseWeekParams,
  };
}
