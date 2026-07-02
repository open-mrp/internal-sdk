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
   * Re-polls the provider and flips the domain to `verified` once its DKIM records
   * are confirmed.
   *
   * Returns the updated domain (still `pending` if not yet confirmed).
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const emailDomain =
   *   await client.messaging.emailDomains.actions.verify(
   *     'emdom_018e88072d1320808dc9aaa01',
   *   );
   * ```
   */
  verify(id: string, options?: RequestOptions): APIPromise<EmailDomainsAPI.EmailDomain> {
    return this._client.post(path`/v1/messaging/email-domains/${id}/actions/verify`, options);
  }
}
