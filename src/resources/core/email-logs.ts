// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RequestLogsAPI from './request-logs';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * View email logs for accounts.
 */
export class EmailLogs extends APIResource {
  /**
   * Returns an email log by ID.
   *
   * This endpoint requires the permission: `email_logs:read`.
   *
   * @example
   * ```ts
   * const emailLog = await client.core.emailLogs.retrieve(
   *   'eml_h2j1q1nfibwb',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: EmailLogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailLog> {
    return this._client.get(path`/v1/core/email-logs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of email logs for the current account, most recently
   * created first.
   *
   * The `q` search term matches the subject line or any recipient address.
   *
   * This endpoint requires the permission: `email_logs:read`.
   *
   * @example
   * ```ts
   * const listEmailLog = await client.core.emailLogs.list();
   * ```
   */
  list(
    query: EmailLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListEmailLog> {
    return this._client.get('/v1/core/email-logs', { query, ...options });
  }
}

/**
 * A record of an email the platform sent on the account's behalf, such as an order
 * acknowledgement or a user invitation.
 *
 * An email that never reached the delivery provider is recorded here too, rather
 * than disappearing.
 */
export interface EmailLog {
  /**
   * Email log ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Filename of the document attached to the email.
   */
  filename: string | null;

  /**
   * Resource type identifier.
   */
  object: 'email_log';

  /**
   * Recipient email addresses.
   */
  recipients: Array<string>;

  /**
   * Whether the email was handed off to the delivery provider.
   *
   * - `sent`: the provider accepted the email for delivery. It does not confirm that
   *   the recipient's mail server accepted it.
   * - `pending`: the email was never handed off — the send attempt failed, or it was
   *   suppressed because the account is in sandbox mode.
   */
  send_status: 'sent' | 'pending';

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  sent_by: RequestLogsAPI.Actor | null;

  /**
   * Email subject line.
   */
  subject: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListEmailLog {
  /**
   * Resources in this page.
   */
  data: Array<EmailLog>;

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

export interface EmailLogRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sent_by'>;
}

export interface EmailLogListParams {
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
  include?: Array<'sent_by'>;

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

export declare namespace EmailLogs {
  export {
    type EmailLog as EmailLog,
    type ListEmailLog as ListEmailLog,
    type EmailLogRetrieveParams as EmailLogRetrieveParams,
    type EmailLogListParams as EmailLogListParams,
  };
}
