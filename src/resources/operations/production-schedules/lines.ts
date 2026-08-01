// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Generate and review machine-level production schedules.
 */
export class Lines extends APIResource {
  /**
   * Adds a campaign to a schedule by hand.
   *
   * The line is recorded as manual, so a later regenerate can tell it apart from
   * what the solver produced, and the change is written to the deviation log. Adding
   * into a frozen week requires a `reason`.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionScheduleLine =
   *   await client.operations.productionSchedules.lines.create(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *     {
   *       item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *       machine_id: 'mc_0177d18f55a1615f783d3bf8d0',
   *       quantity: 600,
   *       week_index: 2,
   *     },
   *   );
   * ```
   */
  create(id: string, body: LineCreateParams, options?: RequestOptions): APIPromise<ProductionScheduleLine> {
    return this._client.post(path`/v1/operations/production-schedules/${id}/lines`, { body, ...options });
  }

  /**
   * Edits a campaign on a schedule.
   *
   * Every change is written to the deviation log with a full before-and-after
   * snapshot, and the line becomes manual so a regenerate can tell it apart from
   * solver output. A change that touches a frozen week — including moving a campaign
   * out of one — requires a `reason`.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionScheduleLine =
   *   await client.operations.productionSchedules.lines.update(
   *     'orln_0142f9b74268973450b3a76ce3',
   *     { id: 'pnsc_0192a4c17b3e4f8a91c2d0', quantity: 900 },
   *   );
   * ```
   */
  update(
    lineID: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductionScheduleLine> {
    const { id, ...body } = params;
    return this._client.patch(path`/v1/operations/production-schedules/${id}/lines/${lineID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns the planned campaigns for a schedule version, in the order they run.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleLine =
   *   await client.operations.productionSchedules.lines.list(
   *     'pnsc_0192a4c17b3e4f8a91c2d0',
   *   );
   * ```
   */
  list(
    id: string,
    query: LineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionScheduleLine> {
    return this._client.get(path`/v1/operations/production-schedules/${id}/lines`, { query, ...options });
  }

  /**
   * Removes a campaign from a schedule.
   *
   * The deviation log keeps a full snapshot of the removed line, so the change stays
   * readable after the line itself is gone. Removing from a frozen week requires a
   * `reason`.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const line =
   *   await client.operations.productionSchedules.lines.delete(
   *     'orln_0142f9b74268973450b3a76ce3',
   *     { id: 'pnsc_0192a4c17b3e4f8a91c2d0' },
   *   );
   * ```
   */
  delete(lineID: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { id, reason, reason_note } = params;
    return this._client.delete(path`/v1/operations/production-schedules/${id}/lines/${lineID}`, {
      query: { reason, reason_note },
      ...options,
    });
  }
}

/**
 * Request to add a campaign to a schedule by hand.
 */
export interface CreateProductionScheduleLineRequest {
  /**
   * ID of the item to build.
   */
  item_id: string;

  /**
   * ID of the machine that will run it.
   */
  machine_id: string;

  /**
   * Units to build.
   */
  quantity: number;

  /**
   * Horizon week to plan the campaign in, zero-based.
   */
  week_index: number;

  /**
   * Lots the quantity represents.
   */
  lots?: number;

  /**
   * Why the campaign was added. Required when it lands inside a frozen week.
   */
  reason?:
    | 'machine_down'
    | 'material_shortage'
    | 'rush_order'
    | 'quality_hold'
    | 'over_run'
    | 'under_run'
    | 'capacity_change'
    | 'other';

  /**
   * Free-form explanation of the change.
   */
  reason_note?: string;

  /**
   * Machine hours the campaign will take.
   */
  run_hours?: number;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionScheduleLine {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleLine>;

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
 * A saved campaign on a production schedule.
 */
export interface ProductionScheduleLine {
  /**
   * Line ID.
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
   * Whether the line is inside the frozen window and can no longer be changed
   * without recording a deviation.
   */
  freeze_status: 'frozen' | 'flexible';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  machine: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_line';

  /**
   * Modelled changeover time before the campaign.
   */
  planned_changeover_minutes: number;

  /**
   * Units in one lot, which is the batch size the week is released to the floor in.
   */
  planned_lot_units: number;

  /**
   * Whole lots the quantity rounds to.
   */
  planned_lots: number;

  /**
   * Quantity to produce.
   */
  planned_quantity: number;

  /**
   * Constraint hours the campaign consumes.
   */
  planned_run_hours: number;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  planned_unit: CoreAPI.Entity | null;

  /**
   * Abbreviation of the unit every quantity on this line is counted in, for display.
   *
   * A campaign of 360 means 360 pairs or 360 eaches depending on this, so the two
   * are never meaningful apart.
   */
  planned_unit_abbreviation: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_run: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_schedule: CoreAPI.Entity | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_step: CoreAPI.Entity | null;

  /**
   * Projected stock after the campaign lands and the week's demand is drawn down.
   */
  projected_on_hand_after: number;

  /**
   * Projected stock before the campaign lands.
   */
  projected_on_hand_before: number;

  /**
   * Why the campaign was scheduled.
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
   * Batches this campaign issued to the floor when its week was released.
   *
   * Zero until the week is released.
   */
  released_batch_count: number;

  /**
   * Batches of this campaign the floor has scanned.
   */
  scanned_batch_count: number;

  /**
   * Quantity scanned so far, in the planned unit.
   *
   * Measured from the run the week was released as, matched on this campaign's item,
   * so a run holding several SKUs credits each campaign with only its own work.
   */
  scanned_quantity: number;

  /**
   * Order the campaign runs within its week.
   */
  sequence_index: number;

  /**
   * Whether the solver or a person created the line.
   */
  source: 'solver' | 'manual';

  /**
   * Where the line is in its lifecycle.
   */
  status: 'planned' | 'released' | 'in_progress' | 'complete' | 'cancelled';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Zero-based week offset from the start of the horizon.
   */
  week_index: number;

  /**
   * First instant of the week this campaign runs in.
   */
  week_starts_at: string;
}

/**
 * Request to edit a campaign on a schedule.
 */
export interface UpdateProductionScheduleLineRequest {
  /**
   * Lots the quantity represents.
   */
  lots?: number;

  /**
   * ID of the machine to move the campaign to.
   */
  machine_id?: string;

  /**
   * Units to build.
   */
  quantity?: number;

  /**
   * Why the campaign changed. Required when the change touches a frozen week.
   */
  reason?:
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
  reason_note?: string;

  /**
   * Machine hours the campaign will take.
   */
  run_hours?: number;

  /**
   * Position within the week's run order.
   */
  sequence_index?: number;

  /**
   * Lifecycle state of the campaign.
   */
  status?: 'planned' | 'released' | 'in_progress' | 'complete' | 'cancelled';

  /**
   * Horizon week to move the campaign to, zero-based.
   */
  week_index?: number;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * ID of the item to build.
   */
  item_id: string;

  /**
   * ID of the machine that will run it.
   */
  machine_id: string;

  /**
   * Units to build.
   */
  quantity: number;

  /**
   * Horizon week to plan the campaign in, zero-based.
   */
  week_index: number;

  /**
   * Lots the quantity represents.
   */
  lots?: number;

  /**
   * Why the campaign was added. Required when it lands inside a frozen week.
   */
  reason?:
    | 'machine_down'
    | 'material_shortage'
    | 'rush_order'
    | 'quality_hold'
    | 'over_run'
    | 'under_run'
    | 'capacity_change'
    | 'other';

  /**
   * Free-form explanation of the change.
   */
  reason_note?: string;

  /**
   * Machine hours the campaign will take.
   */
  run_hours?: number;
}

export interface LineUpdateParams {
  /**
   * Path param: ID of the production schedule.
   */
  id: string;

  /**
   * Body param: Lots the quantity represents.
   */
  lots?: number;

  /**
   * Body param: ID of the machine to move the campaign to.
   */
  machine_id?: string;

  /**
   * Body param: Units to build.
   */
  quantity?: number;

  /**
   * Body param: Why the campaign changed. Required when the change touches a frozen
   * week.
   */
  reason?:
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
   * Body param: Free-form explanation of the change.
   */
  reason_note?: string;

  /**
   * Body param: Machine hours the campaign will take.
   */
  run_hours?: number;

  /**
   * Body param: Position within the week's run order.
   */
  sequence_index?: number;

  /**
   * Body param: Lifecycle state of the campaign.
   */
  status?: 'planned' | 'released' | 'in_progress' | 'complete' | 'cancelled';

  /**
   * Body param: Horizon week to move the campaign to, zero-based.
   */
  week_index?: number;
}

export interface LineListParams {
  /**
   * Only return campaigns on these machines.
   */
  machine_ids?: Array<string>;

  /**
   * Only return campaigns in this horizon week, zero-based.
   */
  week_index?: number;
}

export interface LineDeleteParams {
  /**
   * Path param: ID of the production schedule.
   */
  id: string;

  /**
   * Query param: Why the campaign was removed. Required when it sits in a frozen
   * week.
   */
  reason?:
    | 'machine_down'
    | 'material_shortage'
    | 'rush_order'
    | 'quality_hold'
    | 'over_run'
    | 'under_run'
    | 'capacity_change'
    | 'other';

  /**
   * Query param: Free-form explanation of the change.
   */
  reason_note?: string;
}

export declare namespace Lines {
  export {
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
}
