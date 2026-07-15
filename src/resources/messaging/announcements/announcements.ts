// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionDismissParams, ActionReadParams, ActionSeenParams, Actions } from './actions';
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
  retrieve(
    id: string,
    query: AnnouncementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Announcement> {
    return this._client.get(path`/v1/messaging/announcements/${id}`, { query, ...options });
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
    | 'agent.alert'
    | 'system.broadcast'
    | 'customer.registered';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * When the calling actor dismissed the announcement.
   */
  dismissed_at: string | null;

  /**
   * When the announcement stops being shown.
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
   * When the announcement becomes visible in the feed.
   */
  publish_at: string;

  /**
   * When the calling actor opened the announcement.
   */
  read_at: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: CoreAPI.Entity | null;

  /**
   * Reach of the announcement.
   *
   * - `account`: shown only to users within this account.
   * - `platform`: shown to every user across all accounts.
   */
  scope: 'account' | 'platform';

  /**
   * When the calling actor first saw the announcement.
   */
  seen_at: string | null;

  /**
   * Lifecycle status of the announcement for the calling actor, derived from their
   * seen/read/dismissed receipt.
   *
   * - `unseen`: not yet surfaced in the caller's feed.
   * - `seen`: surfaced in the feed but not yet opened.
   * - `read`: opened by the caller.
   * - `dismissed`: dismissed by the caller.
   */
  status: 'unseen' | 'seen' | 'read' | 'dismissed';

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

export interface AnnouncementRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'resource'>;
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
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'resource'>;

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
    type AnnouncementRetrieveParams as AnnouncementRetrieveParams,
    type AnnouncementListParams as AnnouncementListParams,
  };

  export {
    Actions as Actions,
    type ActionDismissParams as ActionDismissParams,
    type ActionReadParams as ActionReadParams,
    type ActionSeenParams as ActionSeenParams,
  };
}
