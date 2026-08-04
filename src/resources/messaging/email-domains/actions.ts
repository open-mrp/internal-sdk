// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EmailDomainsAPI from './email-domains';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Register customer-owned domains with the email bridge and verify them for sending and receiving mail.
 */
export class Actions extends APIResource {
  /**
   * Checks whether the domain's DKIM records have been published and marks it
   * `verified` once they are confirmed.
   *
   * Call this after publishing the DKIM records returned at registration. It is safe
   * to call repeatedly: a domain whose records are not visible yet is returned
   * unchanged in `pending`, and an already-verified domain is returned as-is without
   * re-checking. DNS propagation can take a while, so expect to poll.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const emailDomain =
   *   await client.messaging.emailDomains.actions.verify(
   *     'emdom_2rk3omr8vshb',
   *   );
   * ```
   */
  verify(id: string, options?: RequestOptions): APIPromise<EmailDomainsAPI.EmailDomain> {
    return this._client.post(path`/v1/messaging/email-domains/${id}/actions/verify`, options);
  }
}
