// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as ResourcesAPI from './resources';
import {
  ListProductionScheduleResourceSetting,
  ProductionScheduleResourceSetting,
  ResourceDeleteResponse,
  ResourceUpdateParams,
  Resources,
  UpsertResourceSettingRequest,
} from './resources';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * The planning assumptions production schedules are solved against, and the per-resource overrides that mark which machines constrain the plan.
 */
export class ProductionScheduleSettings extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

  /**
   * Replaces the planning assumptions production schedules are solved against.
   *
   * Settings are replaced wholesale rather than patched, because they are read as
   * one coherent set: a horizon that no longer matches the frozen window, or a
   * capacity headroom that no longer matches the shift pattern, would produce a plan
   * nobody intended.
   *
   * Existing schedule versions are unaffected — each one snapshots the assumptions
   * it was solved under, so changing settings changes future plans only.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionScheduleSettings =
   *   await client.operations.productionScheduleSettings.update({
   *     auto_publish_status: 'inactive',
   *     cadence_status: 'inactive',
   *     capacity_headroom_pct: 0.9,
   *     changeover_avg_minutes: 0,
   *     changeover_labor_rate: 0,
   *     changeover_max_minutes: 0,
   *     changeover_min_minutes: 0,
   *     default_constraint_lead_time_weeks: 0,
   *     default_lot_units: 60,
   *     demand_basis: 'trailing_12',
   *     demand_window_months: 12,
   *     finish_lead_time_weeks: 0,
   *     forecast_history_months: 24,
   *     forecast_months: 12,
   *     forecast_z: 0,
   *     frozen_weeks: 1,
   *     generation_timezone: 'UTC',
   *     holding_rate_pct: 0,
   *     hours_per_shift: 7,
   *     max_flow_depth: 10,
   *     max_weeks_supply: 12,
   *     planning_horizon_weeks: 13,
   *     service_level_z: 0,
   *     shifts_per_day: 2,
   *     week_start_day: 1,
   *     weeks_per_year: 52,
   *     work_days_per_week: 5,
   *   });
   * ```
   */
  update(
    body: ProductionScheduleSettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductionScheduleSettings> {
    return this._client.put('/v1/operations/production-schedule-settings', { body, ...options });
  }

  /**
   * Returns the planning assumptions production schedules are solved against.
   *
   * Always fully populated: an account that has never saved settings gets the
   * solver's own defaults rather than nulls, so a caller never has to know which
   * values would otherwise be assumed. `settings_status` distinguishes the two.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const productionScheduleSettings =
   *   await client.operations.productionScheduleSettings.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProductionScheduleSettings> {
    return this._client.get('/v1/operations/production-schedule-settings', options);
  }
}

/**
 * The planning assumptions a production schedule is solved against.
 *
 * Every value here was a hardcoded constant in the scheduling script this feature
 * replaced. The resource is always fully populated: an account that has never
 * saved settings gets the solver's own defaults, so a caller never has to know
 * which values would otherwise be assumed. `settings_status` says which of the two
 * it is looking at.
 */
export interface ProductionScheduleSettings {
  /**
   * Whether a generated version is published automatically.
   */
  auto_publish_status: 'active' | 'inactive';

  /**
   * Whether schedules are generated on a timer.
   */
  cadence_status: 'active' | 'inactive';

  /**
   * Share of machine time a plan may fill. The remainder absorbs changeovers, which
   * are not scheduled as explicit blocks.
   */
  capacity_headroom_pct: number;

  /**
   * Typical changeover duration, used to calibrate the changeover model.
   */
  changeover_avg_minutes: number;

  /**
   * Hourly labor rate charged to a changeover.
   */
  changeover_labor_rate: number;

  /**
   * Longest plausible changeover.
   */
  changeover_max_minutes: number;

  /**
   * Shortest plausible changeover.
   */
  changeover_min_minutes: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  constraint_department: CoreAPI.Entity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Default weeks of lead time at the constraint when an item has no measurement.
   */
  default_constraint_lead_time_weeks: number;

  /**
   * Units in a default production lot.
   */
  default_lot_units: number;

  /**
   * How demand is derived.
   */
  demand_basis: 'trailing_12' | 'seasonal_ema';

  /**
   * Months of order history the demand baseline is drawn from.
   */
  demand_window_months: number;

  /**
   * Weeks between finishing at the constraint and being sellable.
   */
  finish_lead_time_weeks: number;

  /**
   * Months of history the forecast is fitted to.
   */
  forecast_history_months: number;

  /**
   * Months the forecast projects forward.
   */
  forecast_months: number;

  /**
   * Z-score applied to forecast variability.
   */
  forecast_z: number;

  /**
   * How many leading weeks become a commitment when a version is published.
   */
  frozen_weeks: number;

  /**
   * Cron expression driving the generation cadence.
   */
  generation_cron: string | null;

  /**
   * Timezone the cadence is interpreted in.
   */
  generation_timezone: string;

  /**
   * Annual cost of holding stock, as a share of item value.
   */
  holding_rate_pct: number;

  /**
   * Hours in a shift.
   */
  hours_per_shift: number;

  /**
   * When the cadence last fired.
   */
  last_generated_at: string | null;

  /**
   * How many steps downstream department work is derived for.
   */
  max_flow_depth: number;

  /**
   * Ceiling on how far ahead any item is built.
   */
  max_weeks_supply: number;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_settings';

  /**
   * How many weeks a generated plan covers.
   */
  planning_horizon_weeks: number;

  /**
   * Z-score for the service level safety stock targets.
   */
  service_level_z: number;

  /**
   * Whether these are the merchant's saved values or the solver's defaults.
   */
  settings_status: 'stored' | 'default';

  /**
   * Shifts worked per day.
   */
  shifts_per_day: number;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Day a planning week starts, where 0 is Sunday.
   */
  week_start_day: number;

  /**
   * Weeks worked per year.
   */
  weeks_per_year: number;

  /**
   * Days worked per week.
   */
  work_days_per_week: number;
}

/**
 * Request to replace the account's planning assumptions.
 */
export interface UpdateProductionScheduleSettingsRequest {
  /**
   * Whether a generated version is published automatically.
   */
  auto_publish_status: 'active' | 'inactive';

  /**
   * Whether schedules are generated on a timer.
   */
  cadence_status: 'active' | 'inactive';

  /**
   * Share of machine time a plan may fill.
   */
  capacity_headroom_pct: number;

  /**
   * Typical changeover duration.
   */
  changeover_avg_minutes: number;

  /**
   * Hourly labor rate charged to a changeover.
   */
  changeover_labor_rate: number;

  /**
   * Longest plausible changeover.
   */
  changeover_max_minutes: number;

  /**
   * Shortest plausible changeover.
   */
  changeover_min_minutes: number;

  /**
   * Default weeks of lead time at the constraint.
   */
  default_constraint_lead_time_weeks: number;

  /**
   * Units in a default production lot.
   */
  default_lot_units: number;

  /**
   * How demand is derived.
   */
  demand_basis: 'trailing_12' | 'seasonal_ema';

  /**
   * Months of order history the demand baseline is drawn from.
   */
  demand_window_months: number;

  /**
   * Weeks between finishing at the constraint and being sellable.
   */
  finish_lead_time_weeks: number;

  /**
   * Months of history the forecast is fitted to.
   */
  forecast_history_months: number;

  /**
   * Months the forecast projects forward.
   */
  forecast_months: number;

  /**
   * Z-score applied to forecast variability.
   */
  forecast_z: number;

  /**
   * How many leading weeks become a commitment when a version is published.
   */
  frozen_weeks: number;

  /**
   * Timezone the cadence is interpreted in.
   */
  generation_timezone: string;

  /**
   * Annual cost of holding stock, as a share of item value.
   */
  holding_rate_pct: number;

  /**
   * Hours in a shift.
   */
  hours_per_shift: number;

  /**
   * How many steps downstream department work is derived for.
   */
  max_flow_depth: number;

  /**
   * Ceiling on how far ahead any item is built.
   */
  max_weeks_supply: number;

  /**
   * How many weeks a generated plan covers.
   */
  planning_horizon_weeks: number;

  /**
   * Z-score for service level safety stock targets.
   */
  service_level_z: number;

  /**
   * Shifts worked per day.
   */
  shifts_per_day: number;

  /**
   * Day a planning week starts, where 0 is Sunday.
   */
  week_start_day: number;

  /**
   * Weeks worked per year.
   */
  weeks_per_year: number;

  /**
   * Days worked per week.
   */
  work_days_per_week: number;

  /**
   * ID of the department that sets the pace of the factory. Every machine in it is
   * planned, and every step downstream responds.
   */
  constraint_department_id?: string | null;

  /**
   * Cron expression driving the generation cadence.
   */
  generation_cron?: string | null;
}

export interface ProductionScheduleSettingUpdateParams {
  /**
   * Whether a generated version is published automatically.
   */
  auto_publish_status: 'active' | 'inactive';

  /**
   * Whether schedules are generated on a timer.
   */
  cadence_status: 'active' | 'inactive';

  /**
   * Share of machine time a plan may fill.
   */
  capacity_headroom_pct: number;

  /**
   * Typical changeover duration.
   */
  changeover_avg_minutes: number;

  /**
   * Hourly labor rate charged to a changeover.
   */
  changeover_labor_rate: number;

  /**
   * Longest plausible changeover.
   */
  changeover_max_minutes: number;

  /**
   * Shortest plausible changeover.
   */
  changeover_min_minutes: number;

  /**
   * Default weeks of lead time at the constraint.
   */
  default_constraint_lead_time_weeks: number;

  /**
   * Units in a default production lot.
   */
  default_lot_units: number;

  /**
   * How demand is derived.
   */
  demand_basis: 'trailing_12' | 'seasonal_ema';

  /**
   * Months of order history the demand baseline is drawn from.
   */
  demand_window_months: number;

  /**
   * Weeks between finishing at the constraint and being sellable.
   */
  finish_lead_time_weeks: number;

  /**
   * Months of history the forecast is fitted to.
   */
  forecast_history_months: number;

  /**
   * Months the forecast projects forward.
   */
  forecast_months: number;

  /**
   * Z-score applied to forecast variability.
   */
  forecast_z: number;

  /**
   * How many leading weeks become a commitment when a version is published.
   */
  frozen_weeks: number;

  /**
   * Timezone the cadence is interpreted in.
   */
  generation_timezone: string;

  /**
   * Annual cost of holding stock, as a share of item value.
   */
  holding_rate_pct: number;

  /**
   * Hours in a shift.
   */
  hours_per_shift: number;

  /**
   * How many steps downstream department work is derived for.
   */
  max_flow_depth: number;

  /**
   * Ceiling on how far ahead any item is built.
   */
  max_weeks_supply: number;

  /**
   * How many weeks a generated plan covers.
   */
  planning_horizon_weeks: number;

  /**
   * Z-score for service level safety stock targets.
   */
  service_level_z: number;

  /**
   * Shifts worked per day.
   */
  shifts_per_day: number;

  /**
   * Day a planning week starts, where 0 is Sunday.
   */
  week_start_day: number;

  /**
   * Weeks worked per year.
   */
  weeks_per_year: number;

  /**
   * Days worked per week.
   */
  work_days_per_week: number;

  /**
   * ID of the department that sets the pace of the factory. Every machine in it is
   * planned, and every step downstream responds.
   */
  constraint_department_id?: string | null;

  /**
   * Cron expression driving the generation cadence.
   */
  generation_cron?: string | null;
}

ProductionScheduleSettings.Resources = Resources;

export declare namespace ProductionScheduleSettings {
  export {
    type ProductionScheduleSettings as ProductionScheduleSettings,
    type UpdateProductionScheduleSettingsRequest as UpdateProductionScheduleSettingsRequest,
    type ProductionScheduleSettingUpdateParams as ProductionScheduleSettingUpdateParams,
  };

  export {
    Resources as Resources,
    type ListProductionScheduleResourceSetting as ListProductionScheduleResourceSetting,
    type ProductionScheduleResourceSetting as ProductionScheduleResourceSetting,
    type UpsertResourceSettingRequest as UpsertResourceSettingRequest,
    type ResourceDeleteResponse as ResourceDeleteResponse,
    type ResourceUpdateParams as ResourceUpdateParams,
  };
}
