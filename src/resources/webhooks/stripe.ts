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
   * Processes a Stripe webhook event, verifying the signature before dispatching.
   *
   * @example
   * ```ts
   * const webhookResponse =
   *   await client.webhooks.stripe.create();
   * ```
   */
  create(
    params: StripeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookResponse> {
    const { 'Stripe-Signature': stripeSignature } = params ?? {};
    return this._client.post('/v1/webhooks/stripe', {
      ...options,
      headers: buildHeaders([
        { ...(stripeSignature != null ? { 'Stripe-Signature': stripeSignature } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Processes a Stripe webhook event from an account's connected Stripe account,
   * verifying the signature against the account's stored webhook secret before
   * recording order payments.
   *
   * @example
   * ```ts
   * const webhookResponse =
   *   await client.webhooks.stripe.accounts(
   *     'ac_01148680966698341a9c0976db',
   *   );
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
 * Result of processing a webhook.
 */
export interface WebhookResponse {
  /**
   * Resource type identifier.
   */
  object: 'webhook_response';

  /**
   * Whether the webhook was received and processed.
   */
  received: boolean;
}

export interface StripeCreateParams {
  /**
   * Header parameter: Stripe-Signature for Process Stripe Webhook
   */
  'Stripe-Signature'?: string;
}

export interface StripeAccountsParams {
  /**
   * Header parameter: Stripe-Signature for Process Account Stripe Webhook
   */
  'Stripe-Signature'?: string;
}

export declare namespace Stripe {
  export {
    type WebhookResponse as WebhookResponse,
    type StripeCreateParams as StripeCreateParams,
    type StripeAccountsParams as StripeAccountsParams,
  };
}
