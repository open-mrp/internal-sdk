// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as RequestLogsAPI from '../../core/request-logs';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionPreviewParams,
  ActionPreviewRegenerateParams,
  ActionRegenerateParams,
  ActionReleaseWeekParams,
  Actions,
  ListScheduleCampaign,
  ListScheduleDiffLine,
  ListSchedulePolicy,
  ListScheduleProjection,
  PreviewProductionScheduleRequest,
  PreviewRegenerateProductionScheduleRequest,
  ProductionSchedulePreview,
  ProductionScheduleRegeneratePreview,
  RegenerateProductionScheduleRequest,
  ReleaseProductionScheduleWeekRequest,
  ReleaseScheduleWeekResult,
  ScheduleCampaign,
  ScheduleDiffLine,
  SchedulePolicy,
  ScheduleProjection,
} from './actions';
import * as LinesAPI from './lines';
import {
  CreateProductionScheduleLineRequest,
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineListParams,
  LineUpdateParams,
  Lines,
  ListProductionScheduleLine,
  ProductionScheduleLine,
  UpdateProductionScheduleLineRequest,
} from './lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Generate and review machine-level production schedules.
 */
export class ProductionSchedules extends APIResource {
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Generates and saves a new production schedule.
   *
   * The plan is saved as a draft: nothing is frozen yet, so campaigns can be added,
   * changed and removed without having to give a reason. Generating again creates a
   * new version rather than replacing this one, because attainment is measured
   * against whichever version was live at the time.
   *
   * The solver plans the constraint department — the room that sets the pace of the
   * factory — so production schedule settings must name one and it must have
   * machines that are included in planning. Without that there is nothing to
   * schedule and the request is rejected rather than returning an empty plan.
   *
   * Alongside the campaigns, the version stores the assumptions it was solved with,
   * the per-item policies behind each campaign, and the downstream department work
   * implied by the plan.
   *
   * This endpoint requires the permission: `production_schedules:create`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.create({
   *     name: '2026-W31 knit plan',
   *   });
   * ```
   */
  create(
    body: ProductionScheduleCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionSchedule> {
    return this._client.post('/v1/operations/production-schedules', { body, ...options });
  }

  /**
   * Returns a single production schedule version.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.retrieve(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductionSchedule> {
    return this._client.get(path`/v1/operations/production-schedules/${id}`, options);
  }

  /**
   * Returns a paginated list of production schedule versions, newest first.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionSchedule =
   *   await client.operations.productionSchedules.list();
   * ```
   */
  list(
    query: ProductionScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionSchedule> {
    return this._client.get('/v1/operations/production-schedules', { query, ...options });
  }

  /**
   * Deletes a draft schedule along with its planned campaigns and its item policy
   * snapshot.
   *
   * Only drafts can be deleted. A published version is the baseline attainment is
   * measured against, so removing it would erase the record of what was promised —
   * archive those instead.
   *
   * This endpoint requires the permission: `production_schedules:delete`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.delete(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionScheduleDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-schedules/${id}`, options);
  }

  /**
   * Returns the published schedule covering today.
   *
   * Responds 404 when no published version covers today, which is the normal state
   * before the first schedule is published. Drafts are never returned here — a plan
   * nobody has committed to is not the current plan.
   *
   * At most one version is ever current: publishing a new one supersedes every
   * published version its horizon overlaps, so republishing mid-horizon takes over
   * immediately.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const productionSchedule =
   *   await client.operations.productionSchedules.retrieveCurrent();
   * ```
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<ProductionSchedule> {
    return this._client.get('/v1/operations/production-schedules/current', options);
  }

  /**
   * Returns the downstream department work implied by a schedule's constraint plan.
   *
   * The solver schedules only the constraint; every other department's work is
   * derived from it by walking the production-step graph, applying each step's
   * lead-time offset and yield. That makes this the work list a supervisor reads,
   * rather than a second plan someone has to maintain.
   *
   * `explosion_depth` is how many steps downstream the work sits, which is what a
   * readiness indicator keys off. Work whose derived week falls past the schedule's
   * horizon is still returned — a department needs to see it coming.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleDerivedLine =
   *   await client.operations.productionSchedules.retrieveDerivedLines(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  retrieveDerivedLines(
    id: string,
    query: ProductionScheduleRetrieveDerivedLinesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionScheduleDerivedLine> {
    return this._client.get(path`/v1/operations/production-schedules/${id}/derived-lines`, {
      query,
      ...options,
    });
  }

  /**
   * Returns the append-only log of hand changes made to a schedule, most recent
   * first.
   *
   * This is what frozen-week adherence is measured from. A change recorded as frozen
   * was inside the freeze window at the moment it was made, and stays that way
   * regardless of what is published later.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleDeviation =
   *   await client.operations.productionSchedules.retrieveDeviations(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  retrieveDeviations(
    id: string,
    query: ProductionScheduleRetrieveDeviationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionScheduleDeviation> {
    return this._client.get(path`/v1/operations/production-schedules/${id}/deviations`, {
      query,
      ...options,
    });
  }

  /**
   * Returns the per-finished-SKU inventory targets behind a schedule version,
   * grouped under the constraint item each one is made from.
   *
   * The item policies pool every finished good a constraint item feeds into one
   * echelon figure, which is what the build decision is made against. These rows are
   * what that pooling hides: each finished SKU's own demand, its own variability,
   * its own stock, and a buffer sized against the finishing lead time rather than
   * the constraint's.
   *
   * The two stages do not overlap, so together they describe the whole network's
   * stock without counting any of it twice: the constraint stage holds its pooled
   * buffer, and the finished stage holds these.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleFinishedPolicy =
   *   await client.operations.productionSchedules.retrieveFinishedPolicies(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  retrieveFinishedPolicies(
    id: string,
    options?: RequestOptions,
  ): APIPromise<ListProductionScheduleFinishedPolicy> {
    return this._client.get(path`/v1/operations/production-schedules/${id}/finished-policies`, options);
  }

  /**
   * Returns the per-item policy behind a schedule version, ordered by constraint run
   * hours descending.
   *
   * This is the "why" behind every campaign: lot size, reorder point, safety stock
   * and lead times as they stood when the plan was generated.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleItemPolicy =
   *   await client.operations.productionSchedules.retrieveItemPolicies(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  retrieveItemPolicies(id: string, options?: RequestOptions): APIPromise<ListProductionScheduleItemPolicy> {
    return this._client.get(path`/v1/operations/production-schedules/${id}/item-policies`, options);
  }

  /**
   * Returns what releasing a week would create, without creating it.
   *
   * The lots are resolved exactly as the release itself resolves them, so what a
   * planner is shown and what the floor receives cannot drift apart.
   *
   * `is_releasable` is false when the week is empty or already released, with
   * `blocked_reason` saying which; `existing_production_run_id` names the run a
   * released week is already tied to.
   *
   * Cancelled campaigns and campaigns planned at zero are excluded here exactly as
   * the release excludes them, so a week holding nothing but those previews as
   * empty.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const releaseScheduleWeekPreview =
   *   await client.operations.productionSchedules.retrieveWeekReleasePreview(
   *     'pnsc_m4zt3z8g8src',
   *   );
   * ```
   */
  retrieveWeekReleasePreview(
    id: string,
    query: ProductionScheduleRetrieveWeekReleasePreviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReleaseScheduleWeekPreview> {
    return this._client.get(path`/v1/operations/production-schedules/${id}/week-release-preview`, {
      query,
      ...options,
    });
  }
}

/**
 * Request to generate a production schedule.
 */
export interface GenerateProductionScheduleRequest {
  /**
   * How future demand is derived, overriding the account's configured basis for this
   * version only.
   *
   * - `trailing_12`: demand is the trailing twelve months of orders.
   * - `seasonal_ema`: demand is a seasonal exponential moving average, which follows
   *   a season arriving early or late rather than flattening it.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Number of weeks the plan should cover, overriding the account's configured
   * horizon for this version only.
   */
  horizon_weeks?: number;

  /**
   * Human-readable label for the version, such as the week it was cut for.
   *
   * Purely for recognising the version in a list; versions are numbered
   * automatically and the number is what identifies them.
   */
  name?: string;

  /**
   * The instant to plan against, which is what stock, demand history and active
   * demand overrides are read as of.
   *
   * Left unset, the plan is solved against the moment the request arrives. The
   * horizon starts on the account's configured week-start day on or before this
   * instant, so backdating this shifts the whole week grid.
   */
  planning_as_of?: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionSchedule {
  /**
   * Resources in this page.
   */
  data: Array<ProductionSchedule>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionScheduleDerivedLine {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleDerivedLine>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionScheduleDeviation {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleDeviation>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionScheduleFinishedPolicy {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleFinishedPolicy>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionScheduleItemPolicy {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleItemPolicy>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListReleaseScheduleBatch {
  /**
   * Resources in this page.
   */
  data: Array<ReleaseScheduleBatch>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListReleasedScheduleLine {
  /**
   * Resources in this page.
   */
  data: Array<ReleasedScheduleLine>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListScheduleAppliedOverride {
  /**
   * Resources in this page.
   */
  data: Array<ScheduleAppliedOverride>;

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
 * A saved production schedule.
 *
 * A published version is a record rather than a document that keeps being edited:
 * generating again creates a new version, and publishing supersedes the previous
 * one rather than changing it, because attainment is measured against whichever
 * version was live at the time.
 */
export interface ProductionSchedule {
  /**
   * Schedule ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Which demand basis produced the plan.
   *
   * - `trailing_12`: demand is taken from the trailing twelve months of orders.
   * - `seasonal_ema`: demand is a seasonal exponential moving average, which follows
   *   a season arriving earlier or later than usual.
   */
  demand_basis: 'trailing_12' | 'seasonal_ema';

  /**
   * What the solver could not do, and why the plan differs from raw history.
   */
  diagnostics: ScheduleDiagnostics;

  /**
   * Why generation failed, when it did.
   */
  error_message: string | null;

  /**
   * Number of lines that were frozen at publish.
   *
   * Captured once and never recomputed, because frozen-week adherence measures
   * against what was committed to.
   */
  frozen_line_count: number;

  /**
   * Total quantity frozen at publish.
   */
  frozen_planned_quantity: number;

  /**
   * The last day the frozen window covers, set when the version is published.
   */
  frozen_through_at: string | null;

  /**
   * How many leading weeks freeze on publish.
   *
   * Publishing freezes every campaign that starts inside the window; changing one
   * afterwards requires a reason and is recorded in the deviation log.
   */
  frozen_weeks: number;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  generated_by: RequestLogsAPI.Actor | null;

  /**
   * What triggered the generation.
   *
   * - `manual`: someone asked for this version.
   * - `scheduled`: the account's generation cadence produced it on its own.
   */
  generation_source: 'manual' | 'scheduled';

  /**
   * First instant of the last day of the horizon.
   */
  horizon_ends_at: string;

  /**
   * First instant of the horizon.
   */
  horizon_starts_at: string;

  /**
   * Length of the horizon in weeks.
   */
  horizon_weeks: number;

  /**
   * Label for the version, such as the planning cycle it was generated for.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule';

  /**
   * The instant the plan was calculated against.
   */
  planning_as_of_at: string;

  /**
   * When this version was published.
   */
  published_at: string | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  published_by: RequestLogsAPI.Actor | null;

  /**
   * The planning assumptions used, frozen at generation so the plan stays
   * explainable after settings change.
   */
  settings_snapshot: { [key: string]: unknown };

  /**
   * Version of the solver that produced the plan.
   */
  solver_version: string;

  /**
   * Where this version is in its lifecycle.
   *
   * - `draft`: still editable and commits to nothing.
   * - `generating`: a scheduled solve is still building this version.
   * - `published`: live, with its leading weeks frozen as a commitment to the floor.
   * - `superseded`: a later version was published over an overlapping horizon.
   * - `archived`: retired without being replaced.
   * - `failed`: the solver could not produce a plan; `error_message` says why.
   */
  status: 'draft' | 'generating' | 'published' | 'superseded' | 'archived' | 'failed';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  superseded_by: CoreAPI.Entity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Sequential version number within the account.
   *
   * Regenerating a draft re-solves it in place and keeps its number; only generating
   * a new plan takes the next one.
   */
  version: number;
}

/**
 * Downstream department work implied by a constraint campaign.
 *
 * The solver only schedules the constraint; every other department's work follows
 * from it by walking the production-step graph. `explosion_depth` is how many
 * steps downstream this sits — depth 1 waits only on the constraint, depth 3 waits
 * on two intermediate steps — which is what a readiness indicator keys off.
 *
 * The derived week can fall past the schedule's horizon when a long chain follows
 * a late campaign. That work is still returned rather than dropped, because a
 * department needs to see it coming.
 */
export interface ProductionScheduleDerivedLine {
  /**
   * Derived line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  department: CoreAPI.Entity | null;

  /**
   * How many steps downstream of the constraint this work sits.
   */
  explosion_depth: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_derived_line';

  /**
   * Weeks after the constraint campaign this work starts.
   */
  offset_weeks: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  planned_unit: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_schedule: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_step: CoreAPI.Entity | null;

  /**
   * Units implied for this step.
   */
  quantity: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  source_line: CoreAPI.Entity | null;

  /**
   * State of the derived work.
   *
   * Derived rows are discarded and rebuilt from the constraint plan every time the
   * version is solved, and are only ever written as `planned`, so they report what
   * the plan implies rather than what the floor has done.
   */
  status: 'planned' | 'released' | 'in_progress' | 'complete' | 'cancelled';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Horizon week the work falls in, zero-based.
   */
  week_index: number;

  /**
   * First instant of that week.
   */
  week_starts_at: string;
}

/**
 * One hand change to a production schedule.
 *
 * The log is append-only: it is what frozen-week adherence is measured from, and a
 * plan edited back into shape has to stay distinguishable from one that was right
 * the first time. `before` and `after` are full snapshots of the line, so a
 * deviation stays readable after the line it describes is deleted.
 *
 * `freeze_status` is recorded when the change is made, from the freeze window as
 * it stood at that moment. It is never re-derived, so a later publish cannot
 * retroactively reclassify a past edit.
 */
export interface ProductionScheduleDeviation {
  /**
   * Deviation ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * Snapshot of the line after the change, null when the change removed it. Encoded
   * as a JSON value (object, array, string, number, boolean, or null), not a
   * JSON-encoded string.
   */
  after: unknown | null;

  /**
   * Snapshot of the line before the change, null when the change created it. Encoded
   * as a JSON value (object, array, string, number, boolean, or null), not a
   * JSON-encoded string.
   */
  before: unknown | null;

  /**
   * When the change was made.
   */
  created_at: string;

  /**
   * Signed change in planned units.
   */
  delta_quantity: number;

  /**
   * Signed change in planned run hours.
   */
  delta_run_hours: number;

  /**
   * What kind of change this was.
   *
   * Derived from the change itself rather than supplied by the person making it. An
   * edit that both moves a campaign to another machine and changes its quantity is
   * recorded as the machine change, because that is what a planner has to react to
   * first.
   */
  deviation_type:
    | 'line_added'
    | 'line_removed'
    | 'quantity_changed'
    | 'machine_changed'
    | 'resequenced'
    | 'week_moved';

  /**
   * Whether the change fell inside the frozen window when it was made.
   */
  freeze_status: 'frozen' | 'flexible';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  line: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_deviation';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_schedule: CoreAPI.Entity | null;

  /**
   * Why the change was made.
   *
   * A change inside a frozen week has to supply one; outside it a reason is left to
   * the planner.
   *
   * - `machine_down`: the machine the campaign was on stopped running.
   * - `material_shortage`: the material the campaign needs did not arrive.
   * - `rush_order`: demand that could not wait for the next plan.
   * - `quality_hold`: the work was stopped over a quality problem.
   * - `over_run`: the floor produced more than the plan asked for.
   * - `under_run`: the floor produced less than the plan asked for.
   * - `capacity_change`: the available machine time changed, such as a shutdown or
   *   an added shift.
   * - `other`: something outside the list, which should be spelled out in
   *   `reason_note`.
   */
  reason:
    | 'machine_down'
    | 'material_shortage'
    | 'rush_order'
    | 'quality_hold'
    | 'over_run'
    | 'under_run'
    | 'capacity_change'
    | 'other'
    | null;

  /**
   * Free-form explanation of the change.
   */
  reason_note: string | null;

  /**
   * The horizon week the change affected, zero-based.
   */
  week_index: number | null;
}

/**
 * One finished SKU's own inventory target, snapshotted onto a schedule version.
 *
 * The item policy pools every finished good a constraint item feeds into one
 * echelon figure, which is the right basis for deciding whether to build. These
 * rows are what that pooling hides: this SKU's own demand, its own variability,
 * and a buffer sized against the finishing lead time rather than the constraint's
 * — because finishing, not the constraint, is what replenishes this stock.
 *
 * The two stages do not overlap. The constraint stage holds its pooled buffer and
 * the finished stage holds these, so together they describe the whole network's
 * stock without counting any of it twice.
 */
export interface ProductionScheduleFinishedPolicy {
  /**
   * Finished policy ID.
   */
  id: string;

  /**
   * This SKU's own annual demand.
   */
  annual_demand: number;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  greige_item: CoreAPI.Entity | null;

  /**
   * SKU of that constraint item.
   */
  greige_sku: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_finished_policy';

  /**
   * This SKU's own stock, not the echelon it contributes to.
   */
  on_hand: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  product_line: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_schedule: CoreAPI.Entity | null;

  /**
   * Stock position at which this finished good needs replenishing.
   */
  reorder_point: number;

  /**
   * Buffer held as this finished good, covering the finishing lead time.
   */
  safety_stock: number;

  /**
   * This SKU's own weekly demand variability.
   *
   * The constraint buffer pools these as the root of the sum of squares; these
   * targets use them one at a time.
   */
  sigma_weekly: number;

  /**
   * SKU of the finished good.
   */
  sku: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * This SKU's own weekly demand.
   */
  weekly_demand: number;

  /**
   * Weeks of demand this SKU's own stock covers.
   */
  weeks_of_cover: number;
}

/**
 * The per-item policy behind a schedule version.
 *
 * Snapshotted at generation rather than recomputed, so a historical plan can still
 * explain itself after costs, demand or settings move.
 */
export interface ProductionScheduleItemPolicy {
  /**
   * Policy ID.
   */
  id: string;

  /**
   * ABC class by share of constraint run hours.
   *
   * - `a`: consumes the largest share of constraint capacity.
   * - `b`: moderate constraint consumption.
   * - `c`: consumes little constraint capacity.
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
   * What the constraint stage holds on average: its buffer, plus half a campaign as
   * one lands and drains.
   */
  average_greige_inventory: number;

  /**
   * Observed or default lead time at the constraint.
   */
  constraint_lead_time_weeks: number;

  /**
   * Limits the solver hit while sizing this item's campaigns, empty when the policy
   * was applied as calculated.
   *
   * - `eoq_capped`: the economic lot size did not fit one machine-week and was cut
   *   back to what does, so campaigns run shorter and more often than the cost
   *   calculation alone would ask for.
   * - `capacity_starved`: the item was already below its trigger point and never won
   *   a slot in the horizon, so the plan does not replenish it.
   */
  constraints: Array<'eoq_capped' | 'capacity_starved'>;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Economic order quantity: the campaign size that balances the cost of a
   * changeover against the cost of holding what it produces.
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
   * Resource type identifier.
   */
  object: 'production_schedule_item_policy';

  /**
   * Stock at the constraint plus everything downstream of it.
   *
   * This is what the build decision is made against — stock already finished still
   * counts against building more.
   */
  on_hand_echelon: number;

  /**
   * Stock sitting at the constraint stage on its own.
   *
   * Kept alongside the echelon total because that total cannot be decomposed back
   * into its stages once summed.
   */
  on_hand_greige: number;

  /**
   * Ceiling on how far ahead this item is built.
   */
  order_up_to: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  primary_machine: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_schedule: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_step: CoreAPI.Entity | null;

  /**
   * The echelon position at the end of each horizon week, after that week's
   * campaigns land and its demand is drawn down.
   *
   * A run of weeks with no campaign is stock draining toward `reorder_point`; this
   * is what makes that visible rather than looking like the solver did nothing.
   */
  projected_on_hand: Array<number>;

  /**
   * Stock position at which a campaign is triggered.
   */
  reorder_point: number;

  /**
   * Buffer held as finished goods.
   */
  safety_stock_downstream: number;

  /**
   * Buffer held at the constraint.
   */
  safety_stock_primary: number;

  /**
   * How long one unit occupies the constraint.
   */
  seconds_per_unit: number;

  /**
   * Cost of one changeover.
   */
  setup_cost: number;

  /**
   * Summed weekly variability of the finished goods this item becomes.
   */
  sigma_downstream_sum: number;

  /**
   * Pooled weekly demand variability at the constraint.
   */
  sigma_weekly_pooled: number;

  /**
   * SKU of the item.
   */
  sku: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  unit: CoreAPI.Entity | null;

  /**
   * Abbreviation of the unit every quantity in this policy is counted in, for
   * display.
   *
   * A reorder point of 2,508 is uninterpretable without it, so the two are never
   * meaningful apart.
   */
  unit_abbreviation: string | null;

  /**
   * Standard cost per unit.
   */
  unit_cost: number;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

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
 * One batch a release created, or would create: a single lot off one planned
 * campaign.
 */
export interface ReleaseScheduleBatch {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  batch: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Units in this lot.
   *
   * The last lot of a campaign is short when the planned quantity is not a whole
   * number of lots.
   */
  quantity: number;

  /**
   * The item's SKU, as it stood when the plan was generated.
   */
  sku: string;
}

/**
 * What releasing a week would create, with nothing written.
 *
 * A release makes a numbered production run and every batch under it, which is
 * real work to undo by hand, so the confirmation is driven by this rather than by
 * a count computed in the browser.
 */
export interface ReleaseScheduleWeekPreview {
  /**
   * How many batches would be created.
   */
  batch_count: number;

  /**
   * Why the week cannot be released, phrased for display.
   *
   * A week is blocked when it has already been released to the floor, or when it
   * holds nothing to release.
   */
  blocked_reason: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  existing_production_run: CoreAPI.Entity | null;

  /**
   * Whether the week can be released.
   */
  is_releasable: boolean;

  /**
   * How many campaigns would be released.
   */
  line_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListReleasedScheduleLine | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_week_release_preview';

  /**
   * Total units that would be released.
   */
  total_quantity: number;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * First instant of the week.
   */
  week_starts_at: string;
}

/**
 * One planned campaign and the lots it broke into.
 */
export interface ReleasedScheduleLine {
  /**
   * How many batches the campaign broke into.
   */
  batch_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  batches: ListReleaseScheduleBatch | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  line: CoreAPI.Entity | null;

  /**
   * Units in one lot.
   */
  lot_units: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * Total units planned for the campaign.
   */
  planned_quantity: number;

  /**
   * The item's SKU, as it stood when the plan was generated.
   */
  sku: string;

  /**
   * Abbreviation of the unit the quantity and the lot are counted in.
   *
   * `6 × 60` is not an instruction until it says 6 × 60 of what.
   */
  unit: string | null;
}

/**
 * A demand override that changed a number, recorded so the plan can explain
 * itself.
 */
export interface ScheduleAppliedOverride {
  /**
   * How the override was expressed.
   *
   * - `absolute`: the override replaced the forecast for the month outright.
   * - `delta_units`: the override was added to the forecast.
   * - `delta_percent`: the override scaled the forecast.
   */
  adjustment: 'absolute' | 'delta_units' | 'delta_percent';

  /**
   * Demand after the override.
   */
  after: number;

  /**
   * Demand before the override.
   */
  before: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * The first instant of the month the override applied to.
   */
  month_starts_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  override: CoreAPI.Entity | null;

  /**
   * Why the override exists.
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
}

/**
 * What the solver could not do, and why the plan differs from raw history.
 */
export interface ScheduleDiagnostics {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  applied_overrides: ListScheduleAppliedOverride | null;

  /**
   * Average inputs a product transition introduces, measured from history.
   */
  average_inputs_added: number;

  /**
   * Items below their reorder point that never won a slot in the horizon.
   *
   * This is the signal that the plant is short of capacity.
   */
  capacity_starved_skus: Array<string>;

  /**
   * Minutes of changeover the model adds for each new input a product transition
   * introduces.
   *
   * Calibrated from measured production against `average_inputs_added`, so the
   * modelled changeover lands on the time the floor actually reports rather than on
   * a fixed allowance.
   */
  changeover_slope_minutes: number;

  /**
   * Machines the constraint department contributed to this solve.
   */
  constraint_machine_count: number;

  /**
   * Items whose economic lot size was reduced to fit one machine-week, meaning
   * shorter and more frequent campaigns.
   */
  eoq_capped_skus: Array<string>;

  /**
   * Number of items the merchant has excluded from planning.
   */
  excluded_item_count: number;

  /**
   * Items with no measured run rate, which cannot be scheduled because their machine
   * time is unknown.
   */
  items_without_run_rate: Array<string>;

  /**
   * Machines in the constraint department with no production step.
   *
   * Their campaigns derive no downstream department work.
   */
  machines_without_step: number;

  /**
   * Batches found on those machines in the demand window.
   *
   * Zero means nothing has been scanned there, which is why a plan can be empty even
   * with machines configured.
   */
  measured_batch_count: number;

  /**
   * Items that cannot fit even a single lot into a machine-week and are therefore
   * never scheduled.
   */
  unschedulable_skus: Array<string>;
}

export interface ProductionScheduleDeleteResponse {}

export interface ProductionScheduleCreateParams {
  /**
   * How future demand is derived, overriding the account's configured basis for this
   * version only.
   *
   * - `trailing_12`: demand is the trailing twelve months of orders.
   * - `seasonal_ema`: demand is a seasonal exponential moving average, which follows
   *   a season arriving early or late rather than flattening it.
   */
  demand_basis?: 'trailing_12' | 'seasonal_ema';

  /**
   * Number of weeks the plan should cover, overriding the account's configured
   * horizon for this version only.
   */
  horizon_weeks?: number;

  /**
   * Human-readable label for the version, such as the week it was cut for.
   *
   * Purely for recognising the version in a list; versions are numbered
   * automatically and the number is what identifies them.
   */
  name?: string;

  /**
   * The instant to plan against, which is what stock, demand history and active
   * demand overrides are read as of.
   *
   * Left unset, the plan is solved against the moment the request arrives. The
   * horizon starts on the account's configured week-start day on or before this
   * instant, so backdating this shifts the whole week grid.
   */
  planning_as_of?: string;
}

export interface ProductionScheduleListParams {
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

  /**
   * Only return versions in these lifecycle states.
   *
   * - `draft`: still editable and committed to nothing.
   * - `generating`: the solver is still building the version.
   * - `published`: live, with its first weeks frozen as a commitment to the floor.
   * - `superseded`: a later version was published over the same horizon and replaced
   *   this one.
   * - `archived`: retired without being replaced.
   * - `failed`: the solver could not produce a plan.
   */
  statuses?: Array<'draft' | 'generating' | 'published' | 'superseded' | 'archived' | 'failed'>;
}

export interface ProductionScheduleRetrieveDerivedLinesParams {
  /**
   * Only return work owned by these departments.
   */
  department_ids?: Array<string>;

  /**
   * Only return work in this horizon week, zero-based.
   */
  week_index?: number;
}

export interface ProductionScheduleRetrieveDeviationsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Whether the change fell inside the frozen window.
   *
   * Judged against the freeze as it stood when the change was made, not as it stands
   * now, so a later publish cannot reclassify history.
   */
  frozen?: boolean;

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

export interface ProductionScheduleRetrieveWeekReleasePreviewParams {
  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index?: number;
}

ProductionSchedules.Lines = Lines;
ProductionSchedules.Actions = Actions;

export declare namespace ProductionSchedules {
  export {
    type GenerateProductionScheduleRequest as GenerateProductionScheduleRequest,
    type ListProductionSchedule as ListProductionSchedule,
    type ListProductionScheduleDerivedLine as ListProductionScheduleDerivedLine,
    type ListProductionScheduleDeviation as ListProductionScheduleDeviation,
    type ListProductionScheduleFinishedPolicy as ListProductionScheduleFinishedPolicy,
    type ListProductionScheduleItemPolicy as ListProductionScheduleItemPolicy,
    type ListReleaseScheduleBatch as ListReleaseScheduleBatch,
    type ListReleasedScheduleLine as ListReleasedScheduleLine,
    type ListScheduleAppliedOverride as ListScheduleAppliedOverride,
    type ProductionSchedule as ProductionSchedule,
    type ProductionScheduleDerivedLine as ProductionScheduleDerivedLine,
    type ProductionScheduleDeviation as ProductionScheduleDeviation,
    type ProductionScheduleFinishedPolicy as ProductionScheduleFinishedPolicy,
    type ProductionScheduleItemPolicy as ProductionScheduleItemPolicy,
    type ReleaseScheduleBatch as ReleaseScheduleBatch,
    type ReleaseScheduleWeekPreview as ReleaseScheduleWeekPreview,
    type ReleasedScheduleLine as ReleasedScheduleLine,
    type ScheduleAppliedOverride as ScheduleAppliedOverride,
    type ScheduleDiagnostics as ScheduleDiagnostics,
    type ProductionScheduleDeleteResponse as ProductionScheduleDeleteResponse,
    type ProductionScheduleCreateParams as ProductionScheduleCreateParams,
    type ProductionScheduleListParams as ProductionScheduleListParams,
    type ProductionScheduleRetrieveDerivedLinesParams as ProductionScheduleRetrieveDerivedLinesParams,
    type ProductionScheduleRetrieveDeviationsParams as ProductionScheduleRetrieveDeviationsParams,
    type ProductionScheduleRetrieveWeekReleasePreviewParams as ProductionScheduleRetrieveWeekReleasePreviewParams,
  };

  export {
    Lines as Lines,
    type CreateProductionScheduleLineRequest as CreateProductionScheduleLineRequest,
    type ListProductionScheduleLine as ListProductionScheduleLine,
    type ProductionScheduleLine as ProductionScheduleLine,
    type UpdateProductionScheduleLineRequest as UpdateProductionScheduleLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineListParams as LineListParams,
    type LineDeleteParams as LineDeleteParams,
  };

  export {
    Actions as Actions,
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
