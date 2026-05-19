// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from './actions';
import {
  ActionConfirmPaymentParams,
  ActionConfirmPaymentResponse,
  ActionResendVerificationEmailResponse,
  ActionSetupBillingResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage registration sessions for the multi-step registration flow.
 */
export class RegistrationSessions extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a registration session by ID, including its current step and associated
   * user and account details.
   *
   * @example
   * ```ts
   * const registrationSession =
   *   await client.auth.registrationSessions.retrieve(
   *     'session_id',
   *   );
   * ```
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<RegistrationSession> {
    return this._client.get(path`/v1/auth/registration-sessions/${sessionID}`, options);
  }

  /**
   * Partially updates a registration session's step and form data; omitted fields
   * are left unchanged.
   *
   * @example
   * ```ts
   * const registrationSession =
   *   await client.auth.registrationSessions.update(
   *     'session_id',
   *     {
   *       session_data: {
   *         user_name: 'Jane Smith',
   *         account_name: 'Acme Corp',
   *       },
   *       step: 'user_details',
   *     },
   *   );
   * ```
   */
  update(
    sessionID: string,
    body: RegistrationSessionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegistrationSession> {
    return this._client.patch(path`/v1/auth/registration-sessions/${sessionID}`, { body, ...options });
  }

  /**
   * Completes the registration flow by provisioning accounts, roles, and
   * permissions. Requires payment to be confirmed first.
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.registrationSessions.accounts(
   *     'session_id',
   *   );
   * ```
   */
  accounts(sessionID: string, options?: RequestOptions): APIPromise<RegistrationSessionAccountsResponse> {
    return this._client.post(path`/v1/auth/registration-sessions/${sessionID}/accounts`, options);
  }

  /**
   * Creates a registration session. Returns the existing session ID if an active
   * session already exists for that email.
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.registrationSessions.registrationSessions(
   *     { email: 'jdoe@augno.com', plan_code: 'starter' },
   *   );
   * ```
   */
  registrationSessions(
    body: RegistrationSessionRegistrationSessionsParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationSessionRegistrationSessionsResponse> {
    return this._client.post('/v1/auth/registration-sessions', { body, ...options });
  }

  /**
   * Returns a paginated list of open registration sessions for the authenticated
   * user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.registrationSessions.retrieveRegistrationSessions();
   * ```
   */
  retrieveRegistrationSessions(
    query: RegistrationSessionRetrieveRegistrationSessionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegistrationSessionRetrieveRegistrationSessionsResponse> {
    return this._client.get('/v1/auth/registration-sessions', { query, ...options });
  }

  /**
   * Creates or associates a user with a registration session. If the session email
   * matches an existing user, that user is associated; otherwise a new user is
   * created.
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.registrationSessions.users(
   *     'session_id',
   *     { name: 'Jane Smith', password: 'P@ssw0rd123!' },
   *   );
   * ```
   */
  users(
    sessionID: string,
    body: RegistrationSessionUsersParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationSessionUsersResponse> {
    return this._client.post(path`/v1/auth/registration-sessions/${sessionID}/users`, { body, ...options });
  }
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
  account: RegistrationSession.Account | null;

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
  user: RegistrationSession.User;
}

export namespace RegistrationSession {
  /**
   * Account data within a registration session.
   */
  export interface Account {
    /**
     * Account ID, null until account is created.
     */
    id: string | null;

    /**
     * Address within a registration session.
     */
    billing_address: Account.BillingAddress;

    /**
     * Display name.
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'account';
  }

  export namespace Account {
    /**
     * Address within a registration session.
     */
    export interface BillingAddress {
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
  }

  /**
   * User data within a registration session.
   */
  export interface User {
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
}

/**
 * Result of completing a registration.
 */
export interface RegistrationSessionAccountsResponse {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'account';
}

/**
 * Result of creating a registration session.
 */
export interface RegistrationSessionRegistrationSessionsResponse {
  /**
   * Session ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'registration_session';
}

/**
 * List represents a paginated list of resources.
 */
export interface RegistrationSessionRetrieveRegistrationSessionsResponse {
  /**
   * Resources in this page.
   */
  data: Array<RegistrationSession>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Result of creating a user for a registration session.
 */
export interface RegistrationSessionUsersResponse {
  /**
   * User ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'user';
}

export interface RegistrationSessionUpdateParams {
  /**
   * Mutable form data for a session update.
   */
  session_data?: RegistrationSessionUpdateParams.SessionData;

  /**
   * Step to advance the session to.
   */
  step?: 'verification' | 'user_details' | 'account_details' | 'review' | 'payment' | 'completed';
}

export namespace RegistrationSessionUpdateParams {
  /**
   * Mutable form data for a session update.
   */
  export interface SessionData {
    /**
     * Display name for the account.
     */
    account_name?: string;

    /**
     * Billing address city.
     */
    billing_address_city?: string;

    /**
     * Billing address country.
     */
    billing_address_country?: string;

    /**
     * Billing address line 1.
     */
    billing_address_line1?: string;

    /**
     * Billing address line 2.
     */
    billing_address_line2?: string;

    /**
     * Billing address postal code.
     */
    billing_address_postal_code?: string;

    /**
     * Billing address state.
     */
    billing_address_state?: string;

    /**
     * Display name for the user.
     */
    user_name?: string;
  }
}

export interface RegistrationSessionRegistrationSessionsParams {
  /**
   * Email address.
   */
  email: string;

  /**
   * Plan code.
   */
  plan_code: 'free' | 'starter' | 'pro';
}

export interface RegistrationSessionRetrieveRegistrationSessionsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface RegistrationSessionUsersParams {
  /**
   * Display name.
   */
  name: string;

  /**
   * Password.
   */
  password: string;
}

RegistrationSessions.Actions = Actions;

export declare namespace RegistrationSessions {
  export {
    type RegistrationSession as RegistrationSession,
    type RegistrationSessionAccountsResponse as RegistrationSessionAccountsResponse,
    type RegistrationSessionRegistrationSessionsResponse as RegistrationSessionRegistrationSessionsResponse,
    type RegistrationSessionRetrieveRegistrationSessionsResponse as RegistrationSessionRetrieveRegistrationSessionsResponse,
    type RegistrationSessionUsersResponse as RegistrationSessionUsersResponse,
    type RegistrationSessionUpdateParams as RegistrationSessionUpdateParams,
    type RegistrationSessionRegistrationSessionsParams as RegistrationSessionRegistrationSessionsParams,
    type RegistrationSessionRetrieveRegistrationSessionsParams as RegistrationSessionRetrieveRegistrationSessionsParams,
    type RegistrationSessionUsersParams as RegistrationSessionUsersParams,
  };

  export {
    Actions as Actions,
    type ActionConfirmPaymentResponse as ActionConfirmPaymentResponse,
    type ActionResendVerificationEmailResponse as ActionResendVerificationEmailResponse,
    type ActionSetupBillingResponse as ActionSetupBillingResponse,
    type ActionConfirmPaymentParams as ActionConfirmPaymentParams,
  };
}
