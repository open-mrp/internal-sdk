// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnouncementsAPI from './announcements';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, read, and manage broadcast announcements.
 */
export class Actions extends APIResource {
  /**
   * Dismisses an announcement for the calling user, removing it from their feed.
   *
   * The announcement itself is not deleted: it stays retrievable by ID and remains
   * in every other user's feed until they dismiss it too. Dismissing an
   * already-dismissed announcement keeps the original dismissal time. A caller with
   * no user of their own in the account, such as an API key, has no state to record
   * and gets a not-found error.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.actions.dismiss(
   *     'an_m4vwgn2t8cqs',
   *   );
   * ```
   */
  dismiss(
    id: string,
    params: ActionDismissParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnnouncementsAPI.Announcement> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/announcements/${id}/actions/dismiss`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Marks an announcement as read for the calling user, as when they open it.
   *
   * Reading also marks the announcement seen if it was not already, and leaves it in
   * the feed until it is dismissed. Repeating the call keeps the original read time.
   * A caller with no user of their own in the account, such as an API key, has no
   * state to record and gets a not-found error.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.actions.read(
   *     'an_m4vwgn2t8cqs',
   *   );
   * ```
   */
  read(
    id: string,
    params: ActionReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnnouncementsAPI.Announcement> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/announcements/${id}/actions/read`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Marks an announcement as seen for the calling user, as when it is surfaced to
   * them without being opened.
   *
   * Seeing an announcement clears it from the caller's unread bell total but leaves
   * it in the feed, and only affects the caller: everyone else in the account keeps
   * their own state. Repeating the call keeps the original seen time. A caller with
   * no user of their own in the account, such as an API key, has no state to record
   * and gets a not-found error.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.actions.seen(
   *     'an_m4vwgn2t8cqs',
   *   );
   * ```
   */
  seen(
    id: string,
    params: ActionSeenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnnouncementsAPI.Announcement> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/announcements/${id}/actions/seen`, {
      query: { include },
      ...options,
    });
  }
}

export interface ActionDismissParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'resource'>;
}

export interface ActionReadParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'resource'>;
}

export interface ActionSeenParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'resource'>;
}

export declare namespace Actions {
  export {
    type ActionDismissParams as ActionDismissParams,
    type ActionReadParams as ActionReadParams,
    type ActionSeenParams as ActionSeenParams,
  };
}
