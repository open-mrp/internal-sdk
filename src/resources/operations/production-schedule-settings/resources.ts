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
   * Writes a per-resource planning override.
   *
   * One override exists per resource, so this replaces any existing entry for the
   * same scope rather than adding a second. Machines are selected by the constraint
   * department, so this is where one is taken _out_ of planning — a machine down for
   * a rebuild — and where a department or step declares how many weeks after the
   * constraint its work starts.
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
   *       scope_ref_id: 'mc_0177d18f55a1615f783d3bf8d0',
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
   * Returns the per-machine, per-department and per-step planning overrides.
   *
   * This is where machines are marked as the planning constraint, and where a
   * department or step declares how many weeks after the constraint its work starts.
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
   * Removes a per-resource planning override, returning that resource to the account
   * defaults.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A per-resource override of the account's planning assumptions.
 *
 * This is where a machine is marked as the planning constraint, and where a
 * department or step declares how many weeks after the constraint its work
 * actually starts.
 */
export interface ProductionScheduleResourceSetting {
  /**
   * Resource setting ID.
   */
  id: string;

  /**
   * Weeks after the constraint campaign this resource's work starts.
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
   * Whether this resource takes part in planning. Machines are selected by
   * department, so this takes one out rather than opting one in — for a machine down
   * for a rebuild that should not be planned against.
   */
  participation_status: 'included' | 'excluded';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  scope: CoreAPI.Entity | null;

  /**
   * What kind of resource this overrides.
   */
  scope_type: 'machine' | 'department' | 'production_step';
}

/**
 * Request to write a per-resource planning override.
 */
export interface UpsertResourceSettingRequest {
  /**
   * Weeks after the constraint campaign this resource's work starts.
   */
  lead_time_offset_weeks: number;

  /**
   * Whether this resource takes part in planning. Machines are selected by
   * department, so this excludes one rather than opting one in.
   */
  participation_status: 'included' | 'excluded';

  /**
   * ID of the machine, department or production step.
   */
  scope_ref_id: string;

  /**
   * What kind of resource this overrides.
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
   * Weeks after the constraint campaign this resource's work starts.
   */
  lead_time_offset_weeks: number;

  /**
   * Whether this resource takes part in planning. Machines are selected by
   * department, so this excludes one rather than opting one in.
   */
  participation_status: 'included' | 'excluded';

  /**
   * ID of the machine, department or production step.
   */
  scope_ref_id: string;

  /**
   * What kind of resource this overrides.
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
