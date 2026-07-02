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
   * Marks an announcement as dismissed for the calling actor.
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
   * Marks an announcement as read for the calling actor.
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
   * Marks an announcement as seen for the calling actor.
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
