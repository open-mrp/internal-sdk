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
   * @example
   * ```ts
   * const emailLog = await client.core.emailLogs.retrieve(
   *   'eml_017b80707ada92dddff8a2c3a0',
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
   * Returns a paginated list of email logs for the current account.
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
 * Email log entry.
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
   * Filename of any attachment.
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
   * Email send status.
   *
   * - `pending`: the email is queued and has not been sent yet.
   * - `sent`: the email has been handed off for delivery.
   */
  send_status: 'sent' | 'pending';

  /**
   * Reference to an actor (user, API key, or agent).
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'sent_by'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
