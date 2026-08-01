// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from '../core/core';
import * as RequestLogsAPI from '../core/request-logs';
import * as OperationsAPI from './operations';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Log and review machine stoppages. Downtime is the source of OEE availability and changeover time.
 */
export class MachineDowntimeEvents extends APIResource {
  /**
   * Logs a machine downtime event.
   *
   * Omit `ended_at` while the machine is still down; a machine can only have one
   * open event at a time. The department and production step are resolved from the
   * machine, and the duration is calculated when the event is closed.
   *
   * This endpoint requires the permission: `machine_downtime:create`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.create({
   *     machine_id: 'mc_0177d18f55a1615f783d3bf8d0',
   *     reason: 'breakdown',
   *     started_at: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  create(
    params: MachineDowntimeEventCreateParams,
    options?: RequestOptions,
  ): APIPromise<MachineDowntimeEvent> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/machine-downtime-events', {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a single machine downtime event.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.retrieve(
   *     'mcdt_0192a4c17b3e4f8a91c2d05e77',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: MachineDowntimeEventRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MachineDowntimeEvent> {
    return this._client.get(path`/v1/operations/machine-downtime-events/${id}`, { query, ...options });
  }

  /**
   * Updates a machine downtime event.
   *
   * Setting `ended_at` closes the event and calculates its duration.
   *
   * This endpoint requires the permission: `machine_downtime:update`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.update(
   *     'mcdt_0192a4c17b3e4f8a91c2d05e77',
   *     { ended_at: '2026-05-10T00:23:00Z' },
   *   );
   * ```
   */
  update(
    id: string,
    params: MachineDowntimeEventUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MachineDowntimeEvent> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/machine-downtime-events/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of machine downtime events, most recent first.
   *
   * This endpoint requires the permission: `machine_downtime:read`.
   *
   * @example
   * ```ts
   * const listMachineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.list();
   * ```
   */
  list(
    query: MachineDowntimeEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMachineDowntimeEvent> {
    return this._client.get('/v1/operations/machine-downtime-events', { query, ...options });
  }

  /**
   * Deletes a machine downtime event.
   *
   * This endpoint requires the permission: `machine_downtime:delete`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.delete(
   *     'mcdt_0192a4c17b3e4f8a91c2d05e77',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MachineDowntimeEventDeleteResponse> {
    return this._client.delete(path`/v1/operations/machine-downtime-events/${id}`, options);
  }
}

/**
 * Request to log a machine downtime event.
 */
export interface CreateMachineDowntimeEventRequest {
  /**
   * ID of the machine that stopped.
   */
  machine_id: string;

  /**
   * Why the machine stopped.
   */
  reason:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * When the machine stopped.
   */
  started_at: string;

  /**
   * ID of the batch in progress when the machine stopped.
   */
  batch_id?: string;

  /**
   * When the machine started running again. Omit while the machine is still down.
   */
  ended_at?: string;

  /**
   * ID of the item the machine was running when it stopped.
   */
  item_id?: string;

  /**
   * Free-form notes about the stoppage.
   */
  note?: string;

  /**
   * ID of the production run in progress when the machine stopped.
   */
  production_run_id?: string;

  /**
   * How the event was recorded.
   */
  source?: 'manual' | 'scanner' | 'inferred' | 'api';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMachineDowntimeEvent {
  /**
   * Resources in this page.
   */
  data: Array<MachineDowntimeEvent>;

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
 * A period during which a machine was not running.
 *
 * Downtime is what makes OEE Availability a measurement rather than an estimate.
 * An event with no `ended_at` is still open, meaning the machine is down right
 * now; a machine can only have one open event at a time.
 */
export interface MachineDowntimeEvent {
  /**
   * Downtime event ID.
   */
  id: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  batch: CoreAPI.Entity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A functional area of a production operation, such as fabrication or packaging,
   * that groups scanning stations and machines.
   */
  department: AccountUsersAPI.Department | null;

  /**
   * How long the machine was down, in seconds.
   */
  duration_seconds: number | null;

  /**
   * When the machine started running again.
   */
  ended_at: string | null;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * A piece of production equipment, such as a CNC router or press, assigned to a
   * department.
   */
  machine: AccountUsersAPI.Machine | null;

  /**
   * Free-form notes about the stoppage.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine_downtime_event';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  production_run: CoreAPI.Entity | null;

  /**
   * The reason for a stoppage, as carried on a downtime event.
   *
   * A denormalized view of the reason taxonomy: the stable code plus the display
   * name and OEE bucket resolved from it at read time.
   */
  reason: OperationsAPI.MachineDowntimeReasonSummary | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  reported_by: RequestLogsAPI.Actor | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  schedule_line: CoreAPI.Entity | null;

  /**
   * The business day the stoppage is counted against.
   */
  shift_at: string;

  /**
   * The shift the stoppage is counted against.
   */
  shift_code: string | null;

  /**
   * How the event was recorded.
   */
  source: 'manual' | 'scanner' | 'inferred' | 'api';

  /**
   * When the machine stopped.
   */
  started_at: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to update a machine downtime event.
 */
export interface UpdateMachineDowntimeEventRequest {
  /**
   * ID of the batch in progress when the machine stopped. Send null to detach the
   * batch.
   */
  batch_id?: string | null;

  /**
   * When the machine started running again. Send null to reopen an event that was
   * closed by mistake.
   */
  ended_at?: string | null;

  /**
   * ID of the item the machine was running when it stopped. Send null to detach the
   * item.
   */
  item_id?: string | null;

  /**
   * Free-form notes about the stoppage. Send null to remove the note.
   */
  note?: string | null;

  /**
   * ID of the production run in progress when the machine stopped. Send null to
   * detach the run.
   */
  production_run_id?: string | null;

  /**
   * Why the machine stopped.
   */
  reason?:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * When the machine stopped.
   */
  started_at?: string;
}

export interface MachineDowntimeEventDeleteResponse {}

export interface MachineDowntimeEventCreateParams {
  /**
   * Body param: ID of the machine that stopped.
   */
  machine_id: string;

  /**
   * Body param: Why the machine stopped.
   */
  reason:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * Body param: When the machine stopped.
   */
  started_at: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'machine' | 'department' | 'item' | 'reported_by'>;

  /**
   * Body param: ID of the batch in progress when the machine stopped.
   */
  batch_id?: string;

  /**
   * Body param: When the machine started running again. Omit while the machine is
   * still down.
   */
  ended_at?: string;

  /**
   * Body param: ID of the item the machine was running when it stopped.
   */
  item_id?: string;

  /**
   * Body param: Free-form notes about the stoppage.
   */
  note?: string;

  /**
   * Body param: ID of the production run in progress when the machine stopped.
   */
  production_run_id?: string;

  /**
   * Body param: How the event was recorded.
   */
  source?: 'manual' | 'scanner' | 'inferred' | 'api';
}

export interface MachineDowntimeEventRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'machine' | 'department' | 'item' | 'reported_by'>;
}

export interface MachineDowntimeEventUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'machine' | 'department' | 'item' | 'reported_by'>;

  /**
   * Body param: ID of the batch in progress when the machine stopped. Send null to
   * detach the batch.
   */
  batch_id?: string | null;

  /**
   * Body param: When the machine started running again. Send null to reopen an event
   * that was closed by mistake.
   */
  ended_at?: string | null;

  /**
   * Body param: ID of the item the machine was running when it stopped. Send null to
   * detach the item.
   */
  item_id?: string | null;

  /**
   * Body param: Free-form notes about the stoppage. Send null to remove the note.
   */
  note?: string | null;

  /**
   * Body param: ID of the production run in progress when the machine stopped. Send
   * null to detach the run.
   */
  production_run_id?: string | null;

  /**
   * Body param: Why the machine stopped.
   */
  reason?:
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule';

  /**
   * Body param: When the machine stopped.
   */
  started_at?: string;
}

export interface MachineDowntimeEventListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only return events for machines in these departments.
   */
  department_ids?: Array<string>;

  /**
   * Only return events that started on or before this timestamp, formatted as
   * RFC3339.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'machine' | 'department' | 'item' | 'reported_by'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Only return events for these machines.
   */
  machine_ids?: Array<string>;

  /**
   * Only return events that are still open, meaning the machine is down right now.
   */
  open?: boolean;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only return events logged against these reasons.
   */
  reasons?: Array<
    | 'breakdown'
    | 'changeover'
    | 'material_shortage'
    | 'no_operator'
    | 'planned_maintenance'
    | 'minor_stop'
    | 'quality_hold'
    | 'no_schedule'
  >;

  /**
   * Only return events that started on or after this timestamp, formatted as
   * RFC3339.
   */
  start_date?: string;
}

export declare namespace MachineDowntimeEvents {
  export {
    type CreateMachineDowntimeEventRequest as CreateMachineDowntimeEventRequest,
    type ListMachineDowntimeEvent as ListMachineDowntimeEvent,
    type MachineDowntimeEvent as MachineDowntimeEvent,
    type UpdateMachineDowntimeEventRequest as UpdateMachineDowntimeEventRequest,
    type MachineDowntimeEventDeleteResponse as MachineDowntimeEventDeleteResponse,
    type MachineDowntimeEventCreateParams as MachineDowntimeEventCreateParams,
    type MachineDowntimeEventRetrieveParams as MachineDowntimeEventRetrieveParams,
    type MachineDowntimeEventUpdateParams as MachineDowntimeEventUpdateParams,
    type MachineDowntimeEventListParams as MachineDowntimeEventListParams,
  };
}
