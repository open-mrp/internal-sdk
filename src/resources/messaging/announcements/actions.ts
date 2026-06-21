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
   * Marks an announcement as dismissed for the calling user.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.actions.dismiss(
   *     'an_01c4d5e6f7a8b9c0d1e2f3a4',
   *   );
   * ```
   */
  dismiss(id: string, options?: RequestOptions): APIPromise<AnnouncementsAPI.Announcement> {
    return this._client.post(path`/v1/messaging/announcements/${id}/actions/dismiss`, options);
  }

  /**
   * Marks an announcement as read for the calling user.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.actions.read(
   *     'an_01c4d5e6f7a8b9c0d1e2f3a4',
   *   );
   * ```
   */
  read(id: string, options?: RequestOptions): APIPromise<AnnouncementsAPI.Announcement> {
    return this._client.post(path`/v1/messaging/announcements/${id}/actions/read`, options);
  }

  /**
   * Marks an announcement as seen for the calling user.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.actions.seen(
   *     'an_01c4d5e6f7a8b9c0d1e2f3a4',
   *   );
   * ```
   */
  seen(id: string, options?: RequestOptions): APIPromise<AnnouncementsAPI.Announcement> {
    return this._client.post(path`/v1/messaging/announcements/${id}/actions/seen`, options);
  }
}
