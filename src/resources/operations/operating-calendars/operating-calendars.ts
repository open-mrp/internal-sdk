// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ClosuresAPI from './closures';
import {
  ClosureCreateParams,
  ClosureDeleteParams,
  ClosureDeleteResponse,
  ClosureListParams,
  Closures,
  CreateOperatingCalendarClosureRequest,
  ListOperatingCalendarClosure,
  OperatingCalendarClosure,
} from './closures';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The days a plant tenders freight and a customer's dock accepts it, less the holidays and shutdowns either side is closed for. Every ship-by date is resolved against them, so an order is never committed to a day nobody can act on.
 */
export class OperatingCalendars extends APIResource {
  closures: ClosuresAPI.Closures = new ClosuresAPI.Closures(this._client);

  /**
   * Creates an operating calendar.
   *
   * The days govern every ship-by date resolved against this calendar: a plant that
   * tenders freight Monday to Thursday never gets committed to a Friday shipment,
   * and a customer's promised delivery date is worked back from a day they can
   * actually receive on.
   *
   * A calendar starts with no closures. Add holidays and shutdowns to it separately.
   *
   * This endpoint requires the permission: `production_schedules:create`.
   *
   * @example
   * ```ts
   * const operatingCalendar =
   *   await client.operations.operatingCalendars.create({
   *     code: 'default_ship',
   *     days_of_week: '1111000',
   *     kind: 'ship',
   *     name: 'Shipping days',
   *     cutoff_at: '15:00',
   *     is_default: true,
   *     timezone: 'America/Chicago',
   *   });
   * ```
   */
  create(body: OperatingCalendarCreateParams, options?: RequestOptions): APIPromise<OperatingCalendar> {
    return this._client.post('/v1/operations/operating-calendars', { body, ...options });
  }

  /**
   * Retrieves one operating calendar by ID.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const operatingCalendar =
   *   await client.operations.operatingCalendars.retrieve(
   *     'occd_7f2m9qk4wzxb',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OperatingCalendar> {
    return this._client.get(path`/v1/operations/operating-calendars/${id}`, options);
  }

  /**
   * Updates an operating calendar.
   *
   * A calendar's kind cannot change: a shipping calendar that became a receiving one
   * would silently drop the pickup cutoff every commitment resolved against it
   * depends on. Create a second calendar instead.
   *
   * Changes apply to commitments made from now on. Orders already issued keep the
   * dates they were stamped with, so adding a holiday never retroactively makes a
   * past order late.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const operatingCalendar =
   *   await client.operations.operatingCalendars.update(
   *     'occd_7f2m9qk4wzxb',
   *   );
   * ```
   */
  update(
    id: string,
    body: OperatingCalendarUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperatingCalendar> {
    return this._client.patch(path`/v1/operations/operating-calendars/${id}`, { body, ...options });
  }

  /**
   * Lists the operating calendars configured for the account.
   *
   * Both kinds are returned unless `kind` narrows it, ordered with each kind's
   * default first.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listOperatingCalendar =
   *   await client.operations.operatingCalendars.list();
   * ```
   */
  list(
    query: OperatingCalendarListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOperatingCalendar> {
    return this._client.get('/v1/operations/operating-calendars', { query, ...options });
  }

  /**
   * Deletes an operating calendar.
   *
   * Refused while any address, customer, customer group, or account setting still
   * points at it. Deleting a calendar out from under its references would quietly
   * return every affected order to a plain Monday-to-Friday week, which reads as the
   * feature breaking rather than as a decision anybody made — so re-point them
   * first.
   *
   * This endpoint requires the permission: `production_schedules:delete`.
   *
   * @example
   * ```ts
   * const operatingCalendar =
   *   await client.operations.operatingCalendars.delete(
   *     'occd_7f2m9qk4wzxb',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<OperatingCalendarDeleteResponse> {
    return this._client.delete(path`/v1/operations/operating-calendars/${id}`, options);
  }
}

/**
 * Request to create an operating calendar.
 */
export interface CreateOperatingCalendarRequest {
  /**
   * Short stable identifier, unique per account.
   */
  code: string;

  /**
   * Open weekdays as seven characters of '0' or '1', Monday first. "1111100" is
   * Monday to Friday; "1111000" is a Monday-to-Thursday plant. At least one day must
   * be open.
   */
  days_of_week: string;

  /**
   * Which side of a shipment this calendar describes.
   */
  kind: 'ship' | 'receive';

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Local time freight has to be tendered by, as "15:00". Only a shipping calendar
   * accepts one.
   */
  cutoff_at?: string;

  /**
   * Make this the calendar used when nothing more specific is linked. Setting it
   * demotes whichever calendar of the same kind held the role.
   */
  is_default?: boolean;

  /**
   * IANA zone the cutoff is read in, such as "America/Chicago". On a receiving
   * calendar, leave it unset to take the zone from the ship-to address.
   */
  timezone?: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOperatingCalendar {
  /**
   * Resources in this page.
   */
  data: Array<OperatingCalendar>;

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
 * OperatingCalendar is the set of days one party to a shipment operates.
 *
 * A `ship` calendar is the plant tendering freight to a carrier; a `receive`
 * calendar is a customer's dock accepting it. Ship-by dates are resolved against
 * both, so an order is never committed to a day nobody can act on.
 */
export interface OperatingCalendar {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Short stable identifier, unique per account.
   */
  code: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Local time freight has to be tendered by, as "15:00". Only a shipping calendar
   * carries one.
   */
  cutoff_at: string | null;

  /**
   * Open weekdays as seven characters of '0' or '1', Monday first. "1111100" is
   * Monday to Friday; "1111000" is a Monday-to-Thursday plant.
   */
  days_of_week: string;

  /**
   * Whether this is the calendar used when nothing more specific is linked. Exactly
   * one per kind.
   */
  is_default: boolean;

  /**
   * Which side of a shipment this calendar describes.
   */
  kind: 'ship' | 'receive';

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'operating_calendar';

  /**
   * IANA zone the cutoff is read in. Null on a receiving calendar means it is taken
   * from the ship-to address.
   */
  timezone: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to update an operating calendar.
 */
export interface UpdateOperatingCalendarRequest {
  /**
   * Local time freight has to be tendered by. Clearing it leaves the ship-by date a
   * day with no time of day attached.
   */
  cutoff_at?: string | null;

  /**
   * Open weekdays as seven characters of '0' or '1', Monday first. At least one day
   * must be open.
   */
  days_of_week?: string;

  /**
   * Make this the calendar used when nothing more specific is linked. Setting it
   * demotes whichever calendar of the same kind held the role.
   */
  is_default?: boolean;

  /**
   * Human-readable name.
   */
  name?: string;

  /**
   * IANA zone the cutoff is read in. Clearing it on a receiving calendar returns to
   * taking the zone from the ship-to address.
   */
  timezone?: string | null;
}

export interface OperatingCalendarDeleteResponse {}

export interface OperatingCalendarCreateParams {
  /**
   * Short stable identifier, unique per account.
   */
  code: string;

  /**
   * Open weekdays as seven characters of '0' or '1', Monday first. "1111100" is
   * Monday to Friday; "1111000" is a Monday-to-Thursday plant. At least one day must
   * be open.
   */
  days_of_week: string;

  /**
   * Which side of a shipment this calendar describes.
   */
  kind: 'ship' | 'receive';

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * Local time freight has to be tendered by, as "15:00". Only a shipping calendar
   * accepts one.
   */
  cutoff_at?: string;

  /**
   * Make this the calendar used when nothing more specific is linked. Setting it
   * demotes whichever calendar of the same kind held the role.
   */
  is_default?: boolean;

  /**
   * IANA zone the cutoff is read in, such as "America/Chicago". On a receiving
   * calendar, leave it unset to take the zone from the ship-to address.
   */
  timezone?: string;
}

export interface OperatingCalendarUpdateParams {
  /**
   * Local time freight has to be tendered by. Clearing it leaves the ship-by date a
   * day with no time of day attached.
   */
  cutoff_at?: string | null;

  /**
   * Open weekdays as seven characters of '0' or '1', Monday first. At least one day
   * must be open.
   */
  days_of_week?: string;

  /**
   * Make this the calendar used when nothing more specific is linked. Setting it
   * demotes whichever calendar of the same kind held the role.
   */
  is_default?: boolean;

  /**
   * Human-readable name.
   */
  name?: string;

  /**
   * IANA zone the cutoff is read in. Clearing it on a receiving calendar returns to
   * taking the zone from the ship-to address.
   */
  timezone?: string | null;
}

export interface OperatingCalendarListParams {
  /**
   * Return only shipping or only receiving calendars.
   */
  kind?: 'ship' | 'receive';
}

OperatingCalendars.Closures = Closures;

export declare namespace OperatingCalendars {
  export {
    type CreateOperatingCalendarRequest as CreateOperatingCalendarRequest,
    type ListOperatingCalendar as ListOperatingCalendar,
    type OperatingCalendar as OperatingCalendar,
    type UpdateOperatingCalendarRequest as UpdateOperatingCalendarRequest,
    type OperatingCalendarDeleteResponse as OperatingCalendarDeleteResponse,
    type OperatingCalendarCreateParams as OperatingCalendarCreateParams,
    type OperatingCalendarUpdateParams as OperatingCalendarUpdateParams,
    type OperatingCalendarListParams as OperatingCalendarListParams,
  };

  export {
    Closures as Closures,
    type CreateOperatingCalendarClosureRequest as CreateOperatingCalendarClosureRequest,
    type ListOperatingCalendarClosure as ListOperatingCalendarClosure,
    type OperatingCalendarClosure as OperatingCalendarClosure,
    type ClosureDeleteResponse as ClosureDeleteResponse,
    type ClosureCreateParams as ClosureCreateParams,
    type ClosureListParams as ClosureListParams,
    type ClosureDeleteParams as ClosureDeleteParams,
  };
}
