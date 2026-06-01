// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RegistrationSessionsAPI from './registration-sessions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage registration sessions for the multi-step registration flow.
 */
export class Actions extends APIResource {
  /**
   * Verifies that a Stripe Setup Intent succeeded and marks the registration
   * session's payment as completed.
   *
   * @example
   * ```ts
   * const confirmPaymentResponse =
   *   await client.auth.registrationSessions.actions.confirmPayment(
   *     'rgfw_01011dbade766ab524553afb10',
   *     { setup_intent_id: 'seti_1N4kLm2eZvKYlo2C0wFVpSbx' },
   *   );
   * ```
   */
  confirmPayment(
    sessionID: string,
    body: ActionConfirmPaymentParams,
    options?: RequestOptions,
  ): APIPromise<ConfirmPaymentResponse> {
    return this._client.post(path`/v1/auth/registration-sessions/${sessionID}/actions/confirm-payment`, {
      body,
      ...options,
    });
  }

  /**
   * Resends the verification email for a registration session, generating a new
   * token and invalidating the previous one.
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.registrationSessions.actions.resendVerificationEmail(
   *     'rgfw_01011dbade766ab524553afb10',
   *   );
   * ```
   */
  resendVerificationEmail(
    sessionID: string,
    options?: RequestOptions,
  ): APIPromise<ActionResendVerificationEmailResponse> {
    return this._client.post(
      path`/v1/auth/registration-sessions/${sessionID}/actions/resend-verification-email`,
      options,
    );
  }

  /**
   * Creates a Stripe customer and billing profile for a registration session.
   *
   * @example
   * ```ts
   * const setupBillingResponse =
   *   await client.auth.registrationSessions.actions.setupBilling(
   *     'rgfw_01011dbade766ab524553afb10',
   *   );
   * ```
   */
  setupBilling(sessionID: string, options?: RequestOptions): APIPromise<SetupBillingResponse> {
    return this._client.post(
      path`/v1/auth/registration-sessions/${sessionID}/actions/setup-billing`,
      options,
    );
  }

  /**
   * Verifies the email token sent during registration, marking the session as
   * email-verified and advancing to the next step.
   *
   * @example
   * ```ts
   * const registrationSession =
   *   await client.auth.registrationSessions.actions.verifyToken(
   *     'example',
   *   );
   * ```
   */
  verifyToken(
    token: string,
    options?: RequestOptions,
  ): APIPromise<RegistrationSessionsAPI.RegistrationSession> {
    return this._client.put(path`/v1/auth/registration-sessions/${token}/actions/verify-token`, options);
  }
}

/**
 * Request to confirm payment for a registration session.
 */
export interface ConfirmPaymentRequest {
  /**
   * Stripe Setup Intent ID to verify.
   */
  setup_intent_id: string;
}

/**
 * Result of confirming payment for a registration.
 */
export interface ConfirmPaymentResponse {
  /**
   * Resource type identifier.
   */
  object: 'confirm_payment_response';

  /**
   * Payment method ID attached by the Setup Intent.
   */
  payment_method_id: string | null;

  /**
   * Setup Intent status (e.g., "succeeded").
   */
  status: string;
}

/**
 * Result of setting up billing for a registration.
 */
export interface SetupBillingResponse {
  /**
   * Stripe Setup Intent client secret for Stripe.js payment collection.
   */
  client_secret: string;

  /**
   * Resource type identifier.
   */
  object: 'setup_billing_response';

  /**
   * Stripe publishable key for Stripe.js initialization.
   */
  publishable_key: string;

  /**
   * Stripe customer ID.
   */
  stripe_customer_id: string;
}

export interface ActionResendVerificationEmailResponse {}

export interface ActionConfirmPaymentParams {
  /**
   * Stripe Setup Intent ID to verify.
   */
  setup_intent_id: string;
}

export declare namespace Actions {
  export {
    type ConfirmPaymentRequest as ConfirmPaymentRequest,
    type ConfirmPaymentResponse as ConfirmPaymentResponse,
    type SetupBillingResponse as SetupBillingResponse,
    type ActionResendVerificationEmailResponse as ActionResendVerificationEmailResponse,
    type ActionConfirmPaymentParams as ActionConfirmPaymentParams,
  };
}
