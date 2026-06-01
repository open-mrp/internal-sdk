// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Incoming webhook events.
 */
export class Webhooks extends APIResource {
  /**
   * Processes a Stripe webhook event, verifying the signature before dispatching.
   *
   * @example
   * ```ts
   * const webhookResponse = await client.webhooks.stripe();
   * ```
   */
  stripe(
    params: WebhookStripeParams | null | undefined = {},
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

export interface WebhookStripeParams {
  /**
   * Header parameter: Stripe-Signature for Process Stripe Webhook
   */
  'Stripe-Signature'?: string;
}

export declare namespace Webhooks {
  export { type WebhookResponse as WebhookResponse, type WebhookStripeParams as WebhookStripeParams };
}
