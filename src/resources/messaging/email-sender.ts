// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Choose the address your order, invoice, and statement emails are sent from, on a domain you have verified.
 */
export class EmailSenderResource extends APIResource {
  /**
   * Sets the address your order, invoice, and statement emails are sent from,
   * replacing any address already configured.
   *
   * The domain must be verified first. Emails about someone's OpenMRP account —
   * password resets, verification, plan changes — continue to send from the platform
   * address.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const emailSender =
   *   await client.messaging.emailSender.update({
   *     email_domain_id: 'emdom_2rk3omr8vshb',
   *     local_part: 'orders',
   *     from_name: 'Acme Inc.',
   *   });
   * ```
   */
  update(body: EmailSenderUpdateParams, options?: RequestOptions): APIPromise<EmailSender> {
    return this._client.put('/v1/messaging/email-sender', { body, ...options });
  }

  /**
   * Returns the address your order, invoice, and statement emails are sent from, or
   * 404 when none is configured and that mail sends from the platform address.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const emailSender =
   *   await client.messaging.emailSender.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<EmailSender> {
    return this._client.get('/v1/messaging/email-sender', options);
  }

  /**
   * Clears the configured sending address, returning your customer-facing email to
   * the platform address.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const emailSender =
   *   await client.messaging.emailSender.delete();
   * ```
   */
  delete(options?: RequestOptions): APIPromise<EmailSenderDeleteResponse> {
    return this._client.delete('/v1/messaging/email-sender', options);
  }
}

/**
 * The address your order, invoice, and statement emails are sent from.
 *
 * Configure one on a verified email domain and your customers see mail from your
 * own address instead of the platform's. Emails about someone's OpenMRP account —
 * password resets, verification, plan changes — always send from the platform
 * address regardless of this setting.
 *
 * Mail only sends from this address while the underlying domain stays verified; if
 * verification lapses it falls back to the platform address rather than failing to
 * send.
 */
export interface EmailSender {
  /**
   * Email sender ID.
   */
  id: string;

  /**
   * The full sending address.
   */
  address: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The domain name the address sends from.
   */
  domain: string;

  /**
   * Verification status of the underlying domain.
   */
  domain_status: 'pending' | 'verified' | 'failed';

  /**
   * The verified email domain this address belongs to.
   */
  email_domain_id: string;

  /**
   * The name shown in a mail client's sender column. When unset, mail shows the bare
   * address.
   */
  from_name: string | null;

  /**
   * The mailbox name before the `@`.
   */
  local_part: string;

  /**
   * Resource type identifier.
   */
  object: 'email_sender';

  /**
   * Where customer replies are delivered. When unset, replies go to the sending
   * address.
   */
  reply_to: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to configure the address the account's customer-facing email is sent
 * from.
 */
export interface SetEmailSenderRequest {
  /**
   * The verified email domain to send from.
   */
  email_domain_id: string;

  /**
   * The mailbox name before the `@`, for example `orders`.
   */
  local_part: string;

  /**
   * The name shown in a mail client's sender column. When unset, mail shows the bare
   * address.
   */
  from_name?: string;

  /**
   * Where customer replies are delivered. When unset, replies go to the sending
   * address.
   */
  reply_to?: string;
}

export interface EmailSenderDeleteResponse {}

export interface EmailSenderUpdateParams {
  /**
   * The verified email domain to send from.
   */
  email_domain_id: string;

  /**
   * The mailbox name before the `@`, for example `orders`.
   */
  local_part: string;

  /**
   * The name shown in a mail client's sender column. When unset, mail shows the bare
   * address.
   */
  from_name?: string;

  /**
   * Where customer replies are delivered. When unset, replies go to the sending
   * address.
   */
  reply_to?: string;
}

export declare namespace EmailSenderResource {
  export {
    type EmailSender as EmailSender,
    type SetEmailSenderRequest as SetEmailSenderRequest,
    type EmailSenderDeleteResponse as EmailSenderDeleteResponse,
    type EmailSenderUpdateParams as EmailSenderUpdateParams,
  };
}
