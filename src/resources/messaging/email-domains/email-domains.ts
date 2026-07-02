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
   * Registers a customer-owned domain with the email bridge and returns the DKIM
   * records to publish.
   *
   * The domain starts in `pending` until verified.
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
   *     'emdom_018e88072d1320808dc9aaa01',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailDomain> {
    return this._client.get(path`/v1/messaging/email-domains/${id}`, options);
  }

  /**
   * Returns the account's registered email domains.
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
}

/**
 * Request to register a sending/receiving domain with the email bridge.
 */
export interface CreateEmailDomainRequest {
  /**
   * The fully-qualified domain name to register (e.g. `support.acme.com`).
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
   * The DKIM CNAME tokens the customer must publish in DNS to verify the domain.
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
   * - `verified`: DKIM confirmed; the domain can send and receive mail.
   * - `failed`: verification could not be completed.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

export interface EmailDomainCreateParams {
  /**
   * The fully-qualified domain name to register (e.g. `support.acme.com`).
   */
  domain: string;
}

EmailDomains.Actions = Actions;

export declare namespace EmailDomains {
  export {
    type CreateEmailDomainRequest as CreateEmailDomainRequest,
    type EmailDomain as EmailDomain,
    type ListEmailDomain as ListEmailDomain,
    type EmailDomainCreateParams as EmailDomainCreateParams,
  };

  export { Actions as Actions };
}
