// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, read, and manage in-app notifications.
 */
export class Actions extends APIResource {
  /**
   * Dismisses a notification, removing it from the active feed.
   *
   * The notification is not deleted: it can still be retrieved by ID and listed with
   * the `dismissed` status filter. Dismissing an already-dismissed notification
   * keeps the original dismissal time.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.actions.dismiss(
   *     'nf_yvw2bfj2guyn',
   *   );
   * ```
   */
  dismiss(
    id: string,
    params: ActionDismissParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.Notification> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/notifications/${id}/actions/dismiss`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Marks every one of the caller's unseen notifications as seen in a single call.
   *
   * The notifications stay in the feed and are not marked read. Account
   * announcements are unaffected and are cleared individually, so the unread total
   * can remain above zero afterwards.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.notifications.actions.markAllSeen();
   * ```
   */
  markAllSeen(options?: RequestOptions): APIPromise<ActionMarkAllSeenResponse> {
    return this._client.post('/v1/messaging/notifications/actions/mark-all-seen', options);
  }

  /**
   * Marks a notification as read, as when the user opens it.
   *
   * Reading also marks the notification seen if it was not already, and leaves it in
   * the feed until it is dismissed. Repeating the call keeps the original read time.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.actions.read(
   *     'nf_yvw2bfj2guyn',
   *   );
   * ```
   */
  read(
    id: string,
    params: ActionReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.Notification> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/notifications/${id}/actions/read`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Marks a notification as seen, as when it is surfaced to the user without being
   * opened.
   *
   * Seeing a notification removes it from the unread count but leaves it in the
   * feed. Repeating the call keeps the original seen time.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.actions.seen(
   *     'nf_yvw2bfj2guyn',
   *   );
   * ```
   */
  seen(
    id: string,
    params: ActionSeenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationsAPI.Notification> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/notifications/${id}/actions/seen`, {
      query: { include },
      ...options,
    });
  }
}

export interface ActionMarkAllSeenResponse {}

export interface ActionDismissParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sender' | 'resource'>;
}

export interface ActionReadParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sender' | 'resource'>;
}

export interface ActionSeenParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sender' | 'resource'>;
}

export declare namespace Actions {
  export {
    type ActionMarkAllSeenResponse as ActionMarkAllSeenResponse,
    type ActionDismissParams as ActionDismissParams,
    type ActionReadParams as ActionReadParams,
    type ActionSeenParams as ActionSeenParams,
  };
}
