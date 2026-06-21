// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, read, and manage broadcast announcements.
 */
export class Announcements extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns one active announcement by ID.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const announcement =
   *   await client.messaging.announcements.retrieve(
   *     'an_01c4d5e6f7a8b9c0d1e2f3a4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Announcement> {
    return this._client.get(path`/v1/messaging/announcements/${id}`, options);
  }

  /**
   * Returns the broadcast announcements currently active for the caller, most recent
   * first.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listAnnouncement =
   *   await client.messaging.announcements.list();
   * ```
   */
  list(
    query: AnnouncementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAnnouncement> {
    return this._client.get('/v1/messaging/announcements', { query, ...options });
  }
}

/**
 * A broadcast announcement shown in the bell feed, with the caller's per-user read
 * state.
 */
export interface Announcement {
  /**
   * Announcement ID.
   */
  id: string;

  /**
   * Preview/body text.
   *
   * `null` for purely templated announcements.
   */
  body: string | null;

  /**
   * Category of the announcement.
   */
  category:
    | 'chat.message'
    | 'chat.mention'
    | 'chat.added'
    | 'order.updated'
    | 'agent.run_completed'
    | 'system.broadcast';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * When the calling user dismissed the announcement.
   *
   * `null` if not dismissed.
   */
  dismissed_at: string | null;

  /**
   * When the announcement stops being shown.
   *
   * `null` when it never expires.
   */
  expires_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'announcement';

  /**
   * Delivery priority.
   */
  priority: 'low' | 'normal' | 'high' | 'urgent';

  /**
   * When the announcement becomes visible.
   */
  publish_at: string;

  /**
   * When the calling user opened the announcement.
   *
   * `null` if not yet read.
   */
  read_at: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: AnalyticsAPI.Entity | null;

  /**
   * Reach of the announcement: `account` or `platform`.
   */
  scope: 'account' | 'platform';

  /**
   * When the calling user first saw the announcement.
   *
   * `null` if not yet seen.
   */
  seen_at: string | null;

  /**
   * Lifecycle status for the calling user (derived from their receipt).
   */
  status: 'unseen' | 'seen' | 'read' | 'dismissed';

  /**
   * i18n template key for client-side localization.
   *
   * `null` for free-text announcements.
   */
  template_key: string | null;

  /**
   * Parameters for the i18n template, as JSON. Encoded as a JSON value (object,
   * array, string, number, boolean, or null), not a JSON-encoded string.
   */
  template_params: unknown | null;

  /**
   * Human-readable title.
   */
  title: string;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAnnouncement {
  /**
   * Resources in this page.
   */
  data: Array<Announcement>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

export interface AnnouncementListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

Announcements.Actions = Actions;

export declare namespace Announcements {
  export {
    type Announcement as Announcement,
    type ListAnnouncement as ListAnnouncement,
    type AnnouncementListParams as AnnouncementListParams,
  };

  export { Actions as Actions };
}
