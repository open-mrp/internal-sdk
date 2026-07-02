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
   * Marks every one of the caller's unseen notifications as seen.
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
   * Marks a notification as read.
   *
   * Reading also marks the notification seen if it was not already.
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
