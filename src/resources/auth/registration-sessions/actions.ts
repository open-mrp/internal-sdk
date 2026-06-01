// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
  verifyToken(token: string, options?: RequestOptions): APIPromise<RegistrationSession> {
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
 * Registration session.
 */
export interface RegistrationSession {
  /**
   * Session ID.
   */
  id: string;

  /**
   * Account data within a registration session.
   */
  account: RegistrationSessionAccount | null;

  /**
   * Timestamp when registration was completed. Null if still in progress.
   */
  completed_at: string | null;

  /**
   * Timestamp when this session was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'registration_session';

  /**
   * Whether payment has been completed.
   */
  payment_completed: boolean;

  /**
   * Pricing plan code.
   */
  plan_code: string;

  /**
   * Current registration step.
   */
  step: 'verification' | 'user_details' | 'account_details' | 'review' | 'payment' | 'completed';

  /**
   * Stripe checkout session ID.
   */
  stripe_checkout_session_id: string | null;

  /**
   * Stripe customer ID.
   */
  stripe_customer_id: string | null;

  /**
   * Timestamp when this session was last updated.
   */
  updated_at: string;

  /**
   * User data within a registration session.
   */
  user: RegistrationSessionUser;
}

/**
 * Account data within a registration session.
 */
export interface RegistrationSessionAccount {
  /**
   * Account ID, null until account is created.
   */
  id: string | null;

  /**
   * Address within a registration session.
   */
  billing_address: RegistrationSessionAddress;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';
}

/**
 * Address within a registration session.
 */
export interface RegistrationSessionAddress {
  /**
   * Address ID, null until address is created.
   */
  id: string | null;

  /**
   * City name.
   */
  city: string | null;

  /**
   * Two-letter country code.
   */
  country: string | null;

  /**
   * Street address line 1.
   */
  line1: string | null;

  /**
   * Street address line 2 (apartment, suite, etc.).
   */
  line2: string | null;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or province.
   */
  state: string | null;
}

/**
 * User data within a registration session.
 */
export interface RegistrationSessionUser {
  /**
   * User ID, null until user is created.
   */
  id: string | null;

  /**
   * Email address.
   */
  email: string;

  /**
   * Timestamp when email was verified, null if pending.
   */
  email_verified_at: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';
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
    type RegistrationSession as RegistrationSession,
    type RegistrationSessionAccount as RegistrationSessionAccount,
    type RegistrationSessionAddress as RegistrationSessionAddress,
    type RegistrationSessionUser as RegistrationSessionUser,
    type SetupBillingResponse as SetupBillingResponse,
    type ActionResendVerificationEmailResponse as ActionResendVerificationEmailResponse,
    type ActionConfirmPaymentParams as ActionConfirmPaymentParams,
  };
}
