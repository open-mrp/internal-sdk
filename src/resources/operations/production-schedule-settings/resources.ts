// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The planning assumptions production schedules are solved against, and the per-resource overrides that mark which machines constrain the plan.
 */
export class Resources extends APIResource {
  /**
   * Writes a planning override for one machine, department or production step.
   *
   * A resource has at most one override, so this replaces the existing entry for the
   * same scope rather than adding a second, and the entry keeps the ID it already
   * had. Machines are chosen by naming the constraint department, so this is where
   * one is taken _out_ of planning — a machine down for a rebuild — and where a
   * production step declares how many weeks its work starts after the step that
   * feeds it.
   *
   * Overrides are read when a plan is generated, so a change takes effect on the
   * next generated version and leaves existing ones untouched.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionScheduleResourceSetting =
   *   await client.operations.productionScheduleSettings.resources.update(
   *     {
   *       lead_time_offset_weeks: 0,
   *       participation_status: 'excluded',
   *       scope_ref_id: 'mc_ffcfk9dxixis',
   *       scope_type: 'machine',
   *     },
   *   );
   * ```
   */
  update(
    body: ResourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductionScheduleResourceSetting> {
    return this._client.put('/v1/operations/production-schedule-settings/resources', { body, ...options });
  }

  /**
   * Returns every per-machine, per-department and per-step override of the account's
   * planning assumptions.
   *
   * An override exists only for a resource that has been given one: this is where a
   * machine is taken out of the plan, and where a production step declares how many
   * weeks its work starts after the step that feeds it. Anything absent from this
   * list is planned on the account settings alone.
   *
   * The account's full set of overrides is returned at once — there are no filters
   * and nothing to page through.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleResourceSetting =
   *   await client.operations.productionScheduleSettings.resources.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListProductionScheduleResourceSetting> {
    return this._client.get('/v1/operations/production-schedule-settings/resources', options);
  }

  /**
   * Removes a planning override, returning that resource to the account's own
   * settings.
   *
   * Deleting a machine's override puts it back into the plan alongside the rest of
   * its department; deleting a production step's removes the lead-time offset its
   * work was shifted by. The change takes effect on the next generated version.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const resource =
   *   await client.operations.productionScheduleSettings.resources.delete(
   *     'example',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ResourceDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-schedule-settings/resources/${id}`, options);
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionScheduleResourceSetting {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleResourceSetting>;

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
 * A planning override for one machine, department or production step.
 *
 * The account's settings apply to every resource; an override changes how one of
 * them is treated — taking a machine out of the plan, or declaring how many weeks
 * a downstream step's work starts after the step that feeds it. A resource has at
 * most one override, and a resource without one is planned on the account settings
 * alone.
 */
export interface ProductionScheduleResourceSetting {
  /**
   * Resource setting ID.
   */
  id: string;

  /**
   * How many weeks after the step feeding it this resource's work starts.
   *
   * Read when downstream department work is derived from the constraint plan, so it
   * is the production-step override that shifts a plan: without an offset every step
   * lands in the same week as the step feeding it, and the offsets along a chain of
   * steps add up. A schedule is planned in whole weeks, so a fractional offset is
   * truncated.
   */
  lead_time_offset_weeks: number;

  /**
   * Weeks of lead time at this resource.
   */
  lead_time_weeks: number | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_resource_setting';

  /**
   * Whether this resource takes part in planning.
   *
   * Machines are chosen by naming the constraint department, so an override is how
   * one is taken out — a machine down for a rebuild — rather than how one is opted
   * in. A machine with no override is planned.
   */
  participation_status: 'included' | 'excluded';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  scope: CoreAPI.Entity | null;

  /**
   * What kind of resource this override applies to.
   */
  scope_type: 'machine' | 'department' | 'production_step';
}

/**
 * Request to write a per-resource planning override.
 */
export interface UpsertResourceSettingRequest {
  /**
   * How many weeks after the step feeding it this resource's work starts.
   *
   * Read when downstream department work is derived from the constraint plan, so it
   * is the production-step override that shifts a plan: without an offset every step
   * lands in the same week as the step feeding it, and the offsets along a chain of
   * steps add up. A schedule is planned in whole weeks, so a fractional offset is
   * truncated.
   */
  lead_time_offset_weeks: number;

  /**
   * Whether this resource takes part in planning.
   *
   * Machines are chosen by naming the constraint department, so this is how one is
   * taken out — a machine down for a rebuild — rather than how one is opted in.
   */
  participation_status: 'included' | 'excluded';

  /**
   * ID of the machine, department or production step being overridden, matching the
   * scope type.
   */
  scope_ref_id: string;

  /**
   * What kind of resource this override applies to.
   *
   * Together with the resource ID it identifies the override, so writing the same
   * pair again updates the existing entry in place and keeps its ID.
   */
  scope_type: 'machine' | 'department' | 'production_step';

  /**
   * Weeks of lead time at this resource.
   */
  lead_time_weeks?: number;
}

export interface ResourceDeleteResponse {}

export interface ResourceUpdateParams {
  /**
   * How many weeks after the step feeding it this resource's work starts.
   *
   * Read when downstream department work is derived from the constraint plan, so it
   * is the production-step override that shifts a plan: without an offset every step
   * lands in the same week as the step feeding it, and the offsets along a chain of
   * steps add up. A schedule is planned in whole weeks, so a fractional offset is
   * truncated.
   */
  lead_time_offset_weeks: number;

  /**
   * Whether this resource takes part in planning.
   *
   * Machines are chosen by naming the constraint department, so this is how one is
   * taken out — a machine down for a rebuild — rather than how one is opted in.
   */
  participation_status: 'included' | 'excluded';

  /**
   * ID of the machine, department or production step being overridden, matching the
   * scope type.
   */
  scope_ref_id: string;

  /**
   * What kind of resource this override applies to.
   *
   * Together with the resource ID it identifies the override, so writing the same
   * pair again updates the existing entry in place and keeps its ID.
   */
  scope_type: 'machine' | 'department' | 'production_step';

  /**
   * Weeks of lead time at this resource.
   */
  lead_time_weeks?: number;
}

export declare namespace Resources {
  export {
    type ListProductionScheduleResourceSetting as ListProductionScheduleResourceSetting,
    type ProductionScheduleResourceSetting as ProductionScheduleResourceSetting,
    type UpsertResourceSettingRequest as UpsertResourceSettingRequest,
    type ResourceDeleteResponse as ResourceDeleteResponse,
    type ResourceUpdateParams as ResourceUpdateParams,
  };
}
