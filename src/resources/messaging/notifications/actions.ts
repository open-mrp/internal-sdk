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
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.actions.dismiss(
   *     'nf_01h9z8q1w2e3r4t5y6u7i8o9',
   *   );
   * ```
   */
  dismiss(id: string, options?: RequestOptions): APIPromise<NotificationsAPI.Notification> {
    return this._client.post(path`/v1/messaging/notifications/${id}/actions/dismiss`, options);
  }

  /**
   * Marks every unseen notification for the caller as seen; returns the (now zero)
   * unread count.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notificationUnreadCount =
   *   await client.messaging.notifications.actions.markAllSeen();
   * ```
   */
  markAllSeen(options?: RequestOptions): APIPromise<NotificationsAPI.NotificationUnreadCount> {
    return this._client.post('/v1/messaging/notifications/actions/mark-all-seen', options);
  }

  /**
   * Marks a notification as read. Reading also implies seen.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.actions.read(
   *     'nf_01h9z8q1w2e3r4t5y6u7i8o9',
   *   );
   * ```
   */
  read(id: string, options?: RequestOptions): APIPromise<NotificationsAPI.Notification> {
    return this._client.post(path`/v1/messaging/notifications/${id}/actions/read`, options);
  }

  /**
   * Marks a notification as seen.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notification =
   *   await client.messaging.notifications.actions.seen(
   *     'nf_01h9z8q1w2e3r4t5y6u7i8o9',
   *   );
   * ```
   */
  seen(id: string, options?: RequestOptions): APIPromise<NotificationsAPI.Notification> {
    return this._client.post(path`/v1/messaging/notifications/${id}/actions/seen`, options);
  }
}
