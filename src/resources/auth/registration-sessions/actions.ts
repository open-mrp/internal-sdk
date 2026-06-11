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
   * Creates a Stripe customer and Setup Intent for collecting the registration's
   * payment method.
   *
   * Returns the Setup Intent client secret and publishable key needed to collect a
   * payment method with Stripe.js. Safe to retry; an existing Stripe customer is
   * reused.
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
   * ID of the Stripe Setup Intent to verify.
   *
   * Must be the Setup Intent created for this session by **Setup Registration
   * Billing**, and its status must be `succeeded`.
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
   *
   * Returned only the first time payment is confirmed; a repeat confirmation of an
   * already-completed session succeeds but omits it.
   */
  payment_method_id: string | null;

  /**
   * Status of the Stripe Setup Intent.
   *
   * Always `succeeded` on a successful response; any other Setup Intent status
   * results in a validation error instead.
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
   * ID of the Stripe Setup Intent to verify.
   *
   * Must be the Setup Intent created for this session by **Setup Registration
   * Billing**, and its status must be `succeeded`.
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
