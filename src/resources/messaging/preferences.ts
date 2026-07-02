// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage per-category notification channel preferences (in-app, email, push).
 */
export class Preferences extends APIResource {
  /**
   * Creates or replaces a notification channel preference for the caller.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const notificationPreference =
   *   await client.messaging.preferences.update({
   *     email_enabled: false,
   *     in_app_enabled: true,
   *     push_enabled: false,
   *     category: 'chat.message',
   *     digest: 'instant',
   *   });
   * ```
   */
  update(body: PreferenceUpdateParams, options?: RequestOptions): APIPromise<NotificationPreference> {
    return this._client.put('/v1/messaging/preferences', { body, ...options });
  }

  /**
   * Lists the caller's notification channel preferences (global default +
   * per-category overrides).
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listNotificationPreference =
   *   await client.messaging.preferences.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListNotificationPreference> {
    return this._client.get('/v1/messaging/preferences', options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListNotificationPreference {
  /**
   * Resources in this page.
   */
  data: Array<NotificationPreference>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A per-(user, category) notification channel preference.
 *
 * A preference with a `null` category is the user's global default; a
 * category-specific preference overrides it.
 */
export interface NotificationPreference {
  /**
   * Preference ID.
   */
  id: string;

  /**
   * The notification category this preference applies to.
   *
   * `null` for the global default that applies to all categories without a specific
   * preference.
   */
  category: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * How email delivery for this category is batched.
   *
   * - `instant`: send an email as soon as an eligible notification occurs.
   * - `hourly`: batch eligible notifications into a single hourly email.
   * - `daily`: batch eligible notifications into a single daily email.
   * - `off`: never send email for this category, even when email delivery is
   *   otherwise enabled.
   */
  digest: 'instant' | 'hourly' | 'daily' | 'off';

  /**
   * Whether email notifications are delivered for this category.
   */
  email_enabled: boolean;

  /**
   * Whether in-app (bell) notifications are delivered for this category.
   */
  in_app_enabled: boolean;

  /**
   * Resource type identifier.
   */
  object: 'notification_preference';

  /**
   * Whether push notifications are delivered for this category.
   */
  push_enabled: boolean;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Request to create or replace a notification preference for the caller.
 *
 * The preference is keyed by (caller, category), so repeating the request with the
 * same category replaces the existing preference.
 */
export interface UpsertNotificationPreferenceRequest {
  /**
   * Whether email notifications are delivered for this category.
   */
  email_enabled: boolean;

  /**
   * Whether in-app (bell) notifications are delivered for this category.
   */
  in_app_enabled: boolean;

  /**
   * Whether push notifications are delivered for this category.
   */
  push_enabled: boolean;

  /**
   * The notification category this preference applies to.
   *
   * Omit (or `null`) to set the caller's global default.
   */
  category?: string | null;

  /**
   * How email delivery for this category is batched.
   *
   * - `instant`: send an email as soon as an eligible notification occurs.
   * - `hourly`: batch eligible notifications into a single hourly email.
   * - `daily`: batch eligible notifications into a single daily email.
   * - `off`: never send email for this category, even when email delivery is
   *   otherwise enabled.
   */
  digest?: 'instant' | 'hourly' | 'daily' | 'off';
}

export interface PreferenceUpdateParams {
  /**
   * Whether email notifications are delivered for this category.
   */
  email_enabled: boolean;

  /**
   * Whether in-app (bell) notifications are delivered for this category.
   */
  in_app_enabled: boolean;

  /**
   * Whether push notifications are delivered for this category.
   */
  push_enabled: boolean;

  /**
   * The notification category this preference applies to.
   *
   * Omit (or `null`) to set the caller's global default.
   */
  category?: string | null;

  /**
   * How email delivery for this category is batched.
   *
   * - `instant`: send an email as soon as an eligible notification occurs.
   * - `hourly`: batch eligible notifications into a single hourly email.
   * - `daily`: batch eligible notifications into a single daily email.
   * - `off`: never send email for this category, even when email delivery is
   *   otherwise enabled.
   */
  digest?: 'instant' | 'hourly' | 'daily' | 'off';
}

export declare namespace Preferences {
  export {
    type ListNotificationPreference as ListNotificationPreference,
    type NotificationPreference as NotificationPreference,
    type UpsertNotificationPreferenceRequest as UpsertNotificationPreferenceRequest,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
