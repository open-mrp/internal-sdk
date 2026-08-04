// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage third-party account integrations.
 */
export class Stripe extends APIResource {
  /**
   * Returns the Stripe publishable key for the target account, for initializing
   * Stripe in a client-side checkout.
   *
   * Only the publishable key is exposed; the account's secret key and webhook secret
   * never leave the platform. Fails if the account has no Stripe integration or the
   * Stripe integration is inactive.
   *
   * @example
   * ```ts
   * const stripePublishableKey =
   *   await client.settings.integrations.stripe.retrievePublishableKey();
   * ```
   */
  retrievePublishableKey(options?: RequestOptions): APIPromise<StripePublishableKey> {
    return this._client.get('/v1/settings/integrations/stripe/publishable-key', options);
  }

  /**
   * Reports whether the target account has a Stripe integration configured, so a
   * checkout flow can tell up front whether card payments are available.
   *
   * The account is reported as connected whenever Stripe credentials are on file,
   * even if the integration has been deactivated, and the stored keys are not
   * verified against Stripe.
   *
   * @example
   * ```ts
   * const stripeStatus =
   *   await client.settings.integrations.stripe.retrieveStatus();
   * ```
   */
  retrieveStatus(options?: RequestOptions): APIPromise<StripeStatus> {
    return this._client.get('/v1/settings/integrations/stripe/status', options);
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
   * The publishable key (`pk_...`) from the account's Stripe integration, safe to
   * use in client-side code.
   */
  publishable_key: string;
}

/**
 * Stripe integration status for an account.
 */
export interface StripeStatus {
  /**
   * Resource type identifier.
   */
  object: 'stripe_status';

  /**
   * Whether a Stripe integration is configured.
   *
   * `connected` if the account has a Stripe integration on file, regardless of
   * whether the integration is currently active. The stored keys are not checked
   * against Stripe, so `connected` does not guarantee that payments will succeed.
   */
  status: 'connected' | 'not_connected';
}

export declare namespace Stripe {
  export { type StripePublishableKey as StripePublishableKey, type StripeStatus as StripeStatus };
}
