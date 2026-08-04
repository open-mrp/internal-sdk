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
   * Omit `ended_at` while the machine is still down. A machine can only have one
   * open event at a time, so logging a second open stoppage against a machine that
   * is already down is rejected until the first is closed.
   *
   * The department is taken from the machine, the business day is taken from
   * `started_at`, the event is attributed to the credentials that made the request,
   * and the duration is calculated when the event is closed.
   *
   * This endpoint requires the permission: `machine_downtime:create`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.create({
   *     machine_id: 'mc_ffcfk9dxixis',
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
   *     'mcdt_ff5te1hqttco',
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
   * Closes or corrects a machine downtime event.
   *
   * Only the fields provided in the request are changed. Setting `ended_at` closes
   * the event and calculates its duration; sending it as null reopens an event
   * closed by mistake, which is rejected when the machine already has another open
   * stoppage. The machine an event belongs to cannot be changed.
   *
   * This endpoint requires the permission: `machine_downtime:update`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.update(
   *     'mcdt_ff5te1hqttco',
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
   * Returns a paginated list of machine downtime events, most recently started
   * first.
   *
   * The search term matches text in the event note. Filters combine, so a machine, a
   * reason and a date range narrow the list together.
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
   * Meant for a stoppage that was logged by mistake: the event is removed
   * permanently and stops counting against the machine's availability. To correct a
   * real stoppage, update it instead so the record of the downtime survives.
   *
   * This endpoint requires the permission: `machine_downtime:delete`.
   *
   * @example
   * ```ts
   * const machineDowntimeEvent =
   *   await client.operations.machineDowntimeEvents.delete(
   *     'mcdt_ff5te1hqttco',
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
   *
   * The reason decides which OEE term the stoppage charges, so it does more than
   * label the event. Retrieve the available reasons and the term each one charges
   * from the downtime reasons list.
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
   *
   * Cannot be in the future beyond a few minutes of clock skew, which is allowed so
   * a shop-floor tablet running fast can still log "just now". The business day the
   * stoppage counts against is taken from this timestamp.
   */
  started_at: string;

  /**
   * ID of the batch in progress when the machine stopped.
   */
  batch_id?: string;

  /**
   * When the machine started running again.
   *
   * Omit it while the machine is still down; that leaves the event open, and the
   * duration is filled in once the event is closed. It must be later than
   * `started_at`.
   */
  ended_at?: string;

  /**
   * ID of the item the machine was running when it stopped.
   */
  item_id?: string;

  /**
   * Free-form notes about the stoppage.
   *
   * Searchable from the downtime events list. Maximum 2000 characters.
   */
  note?: string;

  /**
   * ID of the production run in progress when the machine stopped.
   */
  production_run_id?: string;

  /**
   * How the event was recorded.
   *
   * Records the stoppage as manually logged unless you say otherwise, so an
   * integration or shop-floor station should send its own source to keep
   * hand-entered downtime distinguishable.
   */
  source?: 'manual' | 'scanner' | 'inferred' | 'api';
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   *
   * Calculated when the event is closed, and recalculated whenever its start or end
   * time changes.
   */
  duration_seconds: number | null;

  /**
   * When the machine started running again.
   */
  ended_at: string | null;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
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
   *
   * Taken from the calendar date of `started_at`, so correcting the start time can
   * move the stoppage onto a different day's totals.
   */
  shift_at: string;

  /**
   * The shift the stoppage is counted against.
   */
  shift_code: string | null;

  /**
   * How the event was recorded.
   *
   * - `manual`: a person logged the stoppage.
   * - `scanner`: a shop-floor station logged it.
   * - `inferred`: the system derived it from a gap in activity.
   * - `api`: an integration reported it.
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
   * ID of the batch in progress when the machine stopped.
   *
   * Send null to detach the batch.
   */
  batch_id?: string | null;

  /**
   * When the machine started running again.
   *
   * Setting it closes the event and records the duration. Send null to reopen an
   * event that was closed by mistake, which is rejected if the machine has since had
   * another stoppage logged that is still open.
   */
  ended_at?: string | null;

  /**
   * ID of the item the machine was running when it stopped.
   *
   * Send null to detach the item.
   */
  item_id?: string | null;

  /**
   * Free-form notes about the stoppage.
   *
   * Send null to remove the note. Maximum 2000 characters.
   */
  note?: string | null;

  /**
   * ID of the production run in progress when the machine stopped.
   *
   * Send null to detach the run.
   */
  production_run_id?: string | null;

  /**
   * Why the machine stopped.
   *
   * Reclassifying a stoppage moves it to the OEE term the new reason charges, so
   * past availability figures change with it.
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
   *
   * Correcting it recalculates the duration and can move the stoppage onto a
   * different business day.
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
   *
   * The reason decides which OEE term the stoppage charges, so it does more than
   * label the event. Retrieve the available reasons and the term each one charges
   * from the downtime reasons list.
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
   *
   * Cannot be in the future beyond a few minutes of clock skew, which is allowed so
   * a shop-floor tablet running fast can still log "just now". The business day the
   * stoppage counts against is taken from this timestamp.
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
   * Body param: When the machine started running again.
   *
   * Omit it while the machine is still down; that leaves the event open, and the
   * duration is filled in once the event is closed. It must be later than
   * `started_at`.
   */
  ended_at?: string;

  /**
   * Body param: ID of the item the machine was running when it stopped.
   */
  item_id?: string;

  /**
   * Body param: Free-form notes about the stoppage.
   *
   * Searchable from the downtime events list. Maximum 2000 characters.
   */
  note?: string;

  /**
   * Body param: ID of the production run in progress when the machine stopped.
   */
  production_run_id?: string;

  /**
   * Body param: How the event was recorded.
   *
   * Records the stoppage as manually logged unless you say otherwise, so an
   * integration or shop-floor station should send its own source to keep
   * hand-entered downtime distinguishable.
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
   * Body param: ID of the batch in progress when the machine stopped.
   *
   * Send null to detach the batch.
   */
  batch_id?: string | null;

  /**
   * Body param: When the machine started running again.
   *
   * Setting it closes the event and records the duration. Send null to reopen an
   * event that was closed by mistake, which is rejected if the machine has since had
   * another stoppage logged that is still open.
   */
  ended_at?: string | null;

  /**
   * Body param: ID of the item the machine was running when it stopped.
   *
   * Send null to detach the item.
   */
  item_id?: string | null;

  /**
   * Body param: Free-form notes about the stoppage.
   *
   * Send null to remove the note. Maximum 2000 characters.
   */
  note?: string | null;

  /**
   * Body param: ID of the production run in progress when the machine stopped.
   *
   * Send null to detach the run.
   */
  production_run_id?: string | null;

  /**
   * Body param: Why the machine stopped.
   *
   * Reclassifying a stoppage moves it to the OEE term the new reason charges, so
   * past availability figures change with it.
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
   *
   * Correcting it recalculates the duration and can move the stoppage onto a
   * different business day.
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
   *
   * Sending `false` is the same as leaving it out: both open and closed events come
   * back.
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
