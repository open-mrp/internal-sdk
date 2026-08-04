// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Register customer-owned domains with the email bridge and verify them for sending and receiving mail.
 */
export class EmailDomains extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Registers a domain you own with the email bridge and returns the DKIM tokens to
   * publish.
   *
   * The domain starts in `pending`. Publish each returned token as a CNAME record in
   * the domain's DNS, then call the verify action to move it to `verified`; only
   * then can inboxes be created on it.
   *
   * A domain can only be registered once across the platform, so registering one
   * that is already in use returns a conflict error.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const emailDomain =
   *   await client.messaging.emailDomains.create({
   *     domain: 'support.acme.com',
   *   });
   * ```
   */
  create(body: EmailDomainCreateParams, options?: RequestOptions): APIPromise<EmailDomain> {
    return this._client.post('/v1/messaging/email-domains', { body, ...options });
  }

  /**
   * Returns a single email domain owned by the account.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const emailDomain =
   *   await client.messaging.emailDomains.retrieve(
   *     'emdom_2rk3omr8vshb',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailDomain> {
    return this._client.get(path`/v1/messaging/email-domains/${id}`, options);
  }

  /**
   * Returns the account's registered email domains.
   *
   * Every domain is returned in a single response; this list is not paginated.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listEmailDomain =
   *   await client.messaging.emailDomains.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListEmailDomain> {
    return this._client.get('/v1/messaging/email-domains', options);
  }

  /**
   * Deregisters a domain from the email bridge and removes its sending identity from
   * the mail provider.
   *
   * Delete the domain's inboxes first: while any inbox still exists on it, this
   * returns a conflict error.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const emailDomain =
   *   await client.messaging.emailDomains.delete(
   *     'emdom_2rk3omr8vshb',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<EmailDomainDeleteResponse> {
    return this._client.delete(path`/v1/messaging/email-domains/${id}`, options);
  }
}

/**
 * Request to register a sending/receiving domain with the email bridge.
 */
export interface CreateEmailDomainRequest {
  /**
   * The fully-qualified domain name to register (e.g. `support.acme.com`).
   *
   * Supply a bare domain, not an email address; the value is lowercased before it is
   * stored.
   */
  domain: string;
}

/**
 * A domain registered with the email bridge for sending and receiving mail.
 *
 * After registration the domain starts in `pending`; publish the returned DKIM
 * records, then poll the verify action until it flips to `verified`.
 */
export interface EmailDomain {
  /**
   * Email domain ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The DKIM tokens that must be published in your DNS before the domain can be
   * verified.
   *
   * Publish each token as a CNAME record on the domain, then call the verify action
   * to confirm them.
   */
  dkim_tokens: Array<string>;

  /**
   * The fully-qualified domain name (e.g. `support.acme.com`).
   */
  domain: string;

  /**
   * Resource type identifier.
   */
  object: 'email_domain';

  /**
   * Verification status.
   *
   * - `pending`: registered and awaiting DKIM confirmation.
   * - `verified`: DKIM confirmed; the domain can send mail.
   * - `failed`: verification could not be completed.
   *
   * Inboxes can only be created on a `verified` domain.
   */
  status: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * When the domain's DKIM verification was confirmed.
   */
  verified_at: string | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListEmailDomain {
  /**
   * Resources in this page.
   */
  data: Array<EmailDomain>;

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

export interface EmailDomainDeleteResponse {}

export interface EmailDomainCreateParams {
  /**
   * The fully-qualified domain name to register (e.g. `support.acme.com`).
   *
   * Supply a bare domain, not an email address; the value is lowercased before it is
   * stored.
   */
  domain: string;
}

EmailDomains.Actions = Actions;

export declare namespace EmailDomains {
  export {
    type CreateEmailDomainRequest as CreateEmailDomainRequest,
    type EmailDomain as EmailDomain,
    type ListEmailDomain as ListEmailDomain,
    type EmailDomainDeleteResponse as EmailDomainDeleteResponse,
    type EmailDomainCreateParams as EmailDomainCreateParams,
  };

  export { Actions as Actions };
}
