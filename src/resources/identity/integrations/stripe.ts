// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage third-party account integrations.
 */
export class Stripe extends APIResource {
  /**
   * Returns the Stripe publishable key for the target account.
   *
   * @example
   * ```ts
   * const stripePublishableKey =
   *   await client.identity.integrations.stripe.retrievePublishableKey();
   * ```
   */
  retrievePublishableKey(options?: RequestOptions): APIPromise<StripePublishableKey> {
    return this._client.get('/v1/identity/integrations/stripe/publishable-key', options);
  }

  /**
   * Returns whether the target account has a Stripe integration configured.
   *
   * @example
   * ```ts
   * const stripeStatus =
   *   await client.identity.integrations.stripe.retrieveStatus();
   * ```
   */
  retrieveStatus(options?: RequestOptions): APIPromise<StripeStatus> {
    return this._client.get('/v1/identity/integrations/stripe/status', options);
  }
}

/**
 * Stripe publishable key for an account.
 */
export interface StripePublishableKey {
  /**
   * Resource type identifier.
   */
  object: 'stripe_publishable_key';

  /**
   * Stripe publishable key.
   */
  publishable_key: string;
}

/**
 * Stripe integration status for an account.
 */
export interface StripeStatus {
  /**
   * Whether a Stripe integration is configured.
   */
  has_stripe_integration: boolean;

  /**
   * Resource type identifier.
   */
  object: 'stripe_status';
}

export declare namespace Stripe {
  export { type StripePublishableKey as StripePublishableKey, type StripeStatus as StripeStatus };
}
