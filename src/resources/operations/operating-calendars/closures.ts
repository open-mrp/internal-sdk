// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The days a plant tenders freight and a customer's dock accepts it, less the holidays and shutdowns either side is closed for. Every ship-by date is resolved against them, so an order is never committed to a day nobody can act on.
 */
export class Closures extends APIResource {
  /**
   * Closes a calendar on a date.
   *
   * Every ship-by date resolved against this calendar afterwards walks past the
   * closure: a carrier that does not move on Thanksgiving pushes the day an order
   * has to leave earlier, and a plant shutdown does the same.
   *
   * Closing the same date twice is a no-op rather than an error, so re-seeding a
   * year is safe and never renames a closure somebody has relabelled.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const operatingCalendarClosure =
   *   await client.operations.operatingCalendars.closures.create(
   *     'occd_7f2m9qk4wzxb',
   *     {
   *       closed_on: '2026-11-26T00:00:00Z',
   *       name: 'Thanksgiving Day',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    body: ClosureCreateParams,
    options?: RequestOptions,
  ): APIPromise<OperatingCalendarClosure> {
    return this._client.post(path`/v1/operations/operating-calendars/${id}/closures`, { body, ...options });
  }

  /**
   * Lists the dates a calendar is shut, within a date window.
   *
   * Bounded rather than exhaustive: a calendar accumulates closures indefinitely,
   * and the useful answer is the year either side of today. Widen it with
   * `from_date` and `to_date`.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listOperatingCalendarClosure =
   *   await client.operations.operatingCalendars.closures.list(
   *     'occd_7f2m9qk4wzxb',
   *   );
   * ```
   */
  list(
    id: string,
    query: ClosureListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOperatingCalendarClosure> {
    return this._client.get(path`/v1/operations/operating-calendars/${id}/closures`, { query, ...options });
  }

  /**
   * Reopens a date the calendar was closed on.
   *
   * Used to drop a seeded holiday a plant actually works through. Orders already
   * issued keep the dates they were stamped with.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const closure =
   *   await client.operations.operatingCalendars.closures.delete(
   *     'occdcn_3vh8yt5nqp1r',
   *     { id: 'occd_7f2m9qk4wzxb' },
   *   );
   * ```
   */
  delete(
    closureID: string,
    params: ClosureDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ClosureDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/operations/operating-calendars/${id}/closures/${closureID}`, options);
  }
}

/**
 * Request to close a calendar on a date.
 */
export interface CreateOperatingCalendarClosureRequest {
  /**
   * The date nothing operates. Truncated to a day.
   */
  closed_on: string;

  /**
   * What the closure is, such as "Thanksgiving Day" or "Summer shutdown".
   */
  name: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOperatingCalendarClosure {
  /**
   * Resources in this page.
   */
  data: Array<OperatingCalendarClosure>;

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
 * OperatingCalendarClosure is one date a calendar is shut — a holiday, or a day of
 * a shutdown week.
 */
export interface OperatingCalendarClosure {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * The date nothing operates.
   */
  closed_on: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * What the closure is, such as "Thanksgiving Day" or "Summer shutdown".
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'operating_calendar_closure';

  /**
   * The calendar this closure belongs to.
   */
  operating_calendar_id: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ClosureDeleteResponse {}

export interface ClosureCreateParams {
  /**
   * The date nothing operates. Truncated to a day.
   */
  closed_on: string;

  /**
   * What the closure is, such as "Thanksgiving Day" or "Summer shutdown".
   */
  name: string;
}

export interface ClosureListParams {
  /**
   * Earliest closure date to return. Defaults to a year ago.
   */
  from_date?: string;

  /**
   * Latest closure date to return. Defaults to a year ahead.
   */
  to_date?: string;
}

export interface ClosureDeleteParams {
  /**
   * Operating calendar ID.
   */
  id: string;
}

export declare namespace Closures {
  export {
    type CreateOperatingCalendarClosureRequest as CreateOperatingCalendarClosureRequest,
    type ListOperatingCalendarClosure as ListOperatingCalendarClosure,
    type OperatingCalendarClosure as OperatingCalendarClosure,
    type ClosureDeleteResponse as ClosureDeleteResponse,
    type ClosureCreateParams as ClosureCreateParams,
    type ClosureListParams as ClosureListParams,
    type ClosureDeleteParams as ClosureDeleteParams,
  };
}
