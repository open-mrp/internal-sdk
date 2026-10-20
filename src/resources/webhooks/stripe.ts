// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Incoming webhook events.
 */
export class Stripe extends APIResource {
  /**
   * Processes a Stripe webhook event delivered by an account's own connected Stripe
   * account.
   *
   * The payload is verified against the webhook secret stored on that account's
   * Stripe integration. A succeeded payment is linked to the sales order it
   * references and recorded as a customer payment; failed and canceled payments undo
   * that link, and a completed payout marks the payments it covers as having reached
   * the account's bank. Other event types, and payments that reference an order the
   * account does not own, are acknowledged without action. Processing is idempotent,
   * so Stripe's retries are safe.
   *
   * @example
   * ```ts
   * const webhookResponse =
   *   await client.webhooks.stripe.accounts('ac_ykxoradjoeb3');
   * ```
   */
  accounts(
    accountID: string,
    params: StripeAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookResponse> {
    const { 'Stripe-Signature': stripeSignature } = params ?? {};
    return this._client.post(path`/v1/webhooks/stripe/accounts/${accountID}`, {
      ...options,
      headers: buildHeaders([
        { ...(stripeSignature != null ? { 'Stripe-Signature': stripeSignature } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Acknowledgement that a webhook event was accepted.
 */
export interface WebhookResponse {
  /**
   * Resource type identifier.
   */
  object: 'webhook_response';

  /**
   * Whether the event was accepted for processing.
   *
   * Acceptance means the signature was verified and the event was handled or queued.
   * Event types OpenMRP takes no action on are acknowledged the same way, so this is
   * not a signal that anything changed.
   */
  received: boolean;
}

export interface StripeAccountsParams {
  /**
   * Stripe-Signature header value for payload verification.
   */
  'Stripe-Signature'?: string;
}

export declare namespace Stripe {
  export { type WebhookResponse as WebhookResponse, type StripeAccountsParams as StripeAccountsParams };
}
