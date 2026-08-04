// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionConfirmPaymentParams,
  ActionResendVerificationEmailResponse,
  Actions,
  ConfirmPaymentRequest,
  ConfirmPaymentResponse,
  SetupBillingResponse,
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
   * Starts a self-serve registration session and emails a verification link to the
   * registrant.
   *
   * If a session started for the same email within the last seven days is still in
   * progress, its ID is returned instead of a new one, its plan is switched to
   * `plan_code`, and the verification email is sent again.
   *
   * If the email already belongs to a user, the message sent directs them to sign in
   * rather than carrying a verification link, since an existing account cannot be
   * registered again.
   *
   * @example
   * ```ts
   * const createSessionResponse =
   *   await client.auth.registrationSessions.create({
   *     email: 'jdoe@augno.com',
   *     plan_code: 'starter',
   *   });
   * ```
   */
  create(body: RegistrationSessionCreateParams, options?: RequestOptions): APIPromise<CreateSessionResponse> {
    return this._client.post('/v1/auth/registration-sessions', { body, ...options });
  }

  /**
   * Returns a registration session by ID, including its current step and associated
   * user and account details.
   *
   * @example
   * ```ts
   * const registrationSession =
   *   await client.auth.registrationSessions.retrieve(
   *     'rgfw_6xab8u2fun46',
   *   );
   * ```
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<RegistrationSession> {
    return this._client.get(path`/v1/auth/registration-sessions/${sessionID}`, options);
  }

  /**
   * Partially updates a registration session's step and form data.
   *
   * Omitted fields are left unchanged, and a session that has already completed can
   * no longer be updated.
   *
   * @example
   * ```ts
   * const registrationSession =
   *   await client.auth.registrationSessions.update(
   *     'rgfw_6xab8u2fun46',
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
   * Returns a paginated list of the authenticated user's registration sessions that
   * are still in progress, newest first.
   *
   * The list is empty once the user has finished registering.
   *
   * @example
   * ```ts
   * const listRegistrationSession =
   *   await client.auth.registrationSessions.list();
   * ```
   */
  list(
    query: RegistrationSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRegistrationSession> {
    return this._client.get('/v1/auth/registration-sessions', { query, ...options });
  }

  /**
   * Completes a registration session by creating the account the registrant signed
   * up for.
   *
   * The registering user becomes an administrator of the new account, and a paired
   * sandbox account is provisioned alongside it. Requires a user to have been
   * created for the session and an account name to have been supplied; paid plans
   * additionally require confirmed payment, and their subscription starts here. If
   * the selected plan has reached its signup capacity the request fails and the
   * registration is added to a waiting list. Returns the ID of the new account.
   *
   * @example
   * ```ts
   * const completeRegistrationResponse =
   *   await client.auth.registrationSessions.accounts(
   *     'rgfw_6xab8u2fun46',
   *   );
   * ```
   */
  accounts(sessionID: string, options?: RequestOptions): APIPromise<CompleteRegistrationResponse> {
    return this._client.post(path`/v1/auth/registration-sessions/${sessionID}/accounts`, options);
  }

  /**
   * Creates the user for a registration session and signs the registrant in.
   *
   * The session's email must already be verified, and no user may exist for that
   * email yet; someone who already has an account must sign in instead of
   * registering again. On success the session advances to the `account_details` step
   * and the response sets authentication cookies, so the remaining registration
   * calls are made as the new user. Repeating the call on a session that already has
   * a user re-issues cookies for that user instead of creating another.
   *
   * @example
   * ```ts
   * const createUserResponse =
   *   await client.auth.registrationSessions.users(
   *     'rgfw_6xab8u2fun46',
   *     { name: 'Jane Smith', password: 'P@ssw0rd123!' },
   *   );
   * ```
   */
  users(
    sessionID: string,
    body: RegistrationSessionUsersParams,
    options?: RequestOptions,
  ): APIPromise<CreateUserResponse> {
    return this._client.post(path`/v1/auth/registration-sessions/${sessionID}/users`, { body, ...options });
  }
}

/**
 * Result of completing a registration.
 */
export interface CompleteRegistrationResponse {
  /**
   * ID of the newly created account.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'account';
}

/**
 * Request to create a registration session.
 */
export interface CreateRegistrationSessionRequest {
  /**
   * Email address of the registering user.
   *
   * A verification email is sent to this address to start the registration.
   */
  email: string;

  /**
   * Code of the pricing plan to register for.
   *
   * Free plans skip the payment step; paid plans require a payment method to be
   * collected and confirmed before the registration can complete.
   */
  plan_code: 'free' | 'starter' | 'pro';
}

/**
 * Result of creating a registration session.
 */
export interface CreateSessionResponse {
  /**
   * ID of the registration session.
   *
   * If an active session already existed for the email, this is the existing
   * session's ID rather than a new one.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'registration_session';
}

/**
 * Request to create a user for a registration session.
 */
export interface CreateUserRequest {
  /**
   * The user's display name.
   */
  name: string;

  /**
   * Password for the new user.
   *
   * Must be 8–72 characters and contain at least one lowercase letter, one uppercase
   * letter, one digit, and one special character.
   */
  password: string;
}

/**
 * Result of creating a user for a registration session.
 */
export interface CreateUserResponse {
  /**
   * ID of the user associated with the session.
   *
   * Repeating the call on a session that already has a user returns that same user
   * rather than creating another.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'user';
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListRegistrationSession {
  /**
   * Resources in this page.
   */
  data: Array<RegistrationSession>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * An in-progress self-serve registration.
 *
 * A session tracks a new customer's progress through email verification, user and
 * account setup, payment, and final account provisioning.
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
   * Timestamp when registration was completed.
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
   * Whether payment has been completed for this registration.
   *
   * Set to `true` once Confirm Registration Payment verifies the Setup Intent. Free
   * plans never collect payment, so this stays `false` and the registration can
   * still be completed.
   */
  payment_completed: boolean;

  /**
   * Code of the pricing plan selected for this registration.
   */
  plan_code: string;

  /**
   * Current step in the registration flow.
   *
   * Steps advance in this order:
   *
   * - `verification`: the user is verifying their email address.
   * - `user_details`: the user is providing their personal details (name, etc.).
   * - `account_details`: the user is providing their account/company details.
   * - `review`: the user is reviewing their registration details before payment.
   * - `payment`: the user is providing their payment details.
   * - `completed`: registration has finished and the account is active.
   */
  step: 'verification' | 'user_details' | 'account_details' | 'review' | 'payment' | 'completed';

  /**
   * ID of the Stripe Setup Intent created to collect the payment method.
   *
   * Despite the field name, this holds the Setup Intent ID created by Setup
   * Registration Billing, and Confirm Registration Payment only accepts a
   * `setup_intent_id` matching it.
   */
  stripe_checkout_session_id: string | null;

  /**
   * ID of the Stripe customer created for this registration.
   *
   * Populated when Setup Registration Billing runs; absent for free plans, which
   * never set up billing.
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
   * ID of the account record.
   *
   * Populated only after the registration completes and the account is provisioned.
   */
  id: string | null;

  /**
   * Address within a registration session.
   */
  billing_address: RegistrationSessionAddress;

  /**
   * Display name of the account being created.
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
   * ID of the address record.
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
   * ID of the user record.
   *
   * Populated once the user is created during the `user_details` step.
   */
  id: string | null;

  /**
   * Email address.
   */
  email: string;

  /**
   * When the user's email address was verified.
   *
   * Set once the registrant follows the link in the verification email. It mirrors
   * the session's `updated_at` timestamp rather than recording the moment of
   * verification, so it moves forward as the rest of the registration is filled in.
   */
  email_verified_at: string | null;

  /**
   * The user's display name.
   *
   * Provided by the registrant during the `user_details` step.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';
}

/**
 * Mutable form data for a session update.
 */
export interface UpdateSessionDataRequest {
  /**
   * Display name for the account.
   *
   * Becomes the name of the account created when the registration completes, and
   * must be set before Complete Registration will succeed.
   */
  account_name?: string;

  /**
   * Billing address city.
   */
  billing_address_city?: string;

  /**
   * Billing address country as a two-letter country code.
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

/**
 * Request to update a registration session.
 */
export interface UpdateSessionRequest {
  /**
   * Mutable form data for a session update.
   */
  session_data?: UpdateSessionDataRequest;

  /**
   * Step to advance the session to.
   *
   * Must be later than the session's current step; moving backwards is rejected. See
   * the session resource's `step` field for the step order.
   */
  step?: 'verification' | 'user_details' | 'account_details' | 'review' | 'payment' | 'completed';
}

export interface RegistrationSessionCreateParams {
  /**
   * Email address of the registering user.
   *
   * A verification email is sent to this address to start the registration.
   */
  email: string;

  /**
   * Code of the pricing plan to register for.
   *
   * Free plans skip the payment step; paid plans require a payment method to be
   * collected and confirmed before the registration can complete.
   */
  plan_code: 'free' | 'starter' | 'pro';
}

export interface RegistrationSessionUpdateParams {
  /**
   * Mutable form data for a session update.
   */
  session_data?: UpdateSessionDataRequest;

  /**
   * Step to advance the session to.
   *
   * Must be later than the session's current step; moving backwards is rejected. See
   * the session resource's `step` field for the step order.
   */
  step?: 'verification' | 'user_details' | 'account_details' | 'review' | 'payment' | 'completed';
}

export interface RegistrationSessionListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface RegistrationSessionUsersParams {
  /**
   * The user's display name.
   */
  name: string;

  /**
   * Password for the new user.
   *
   * Must be 8–72 characters and contain at least one lowercase letter, one uppercase
   * letter, one digit, and one special character.
   */
  password: string;
}

RegistrationSessions.Actions = Actions;

export declare namespace RegistrationSessions {
  export {
    type CompleteRegistrationResponse as CompleteRegistrationResponse,
    type CreateRegistrationSessionRequest as CreateRegistrationSessionRequest,
    type CreateSessionResponse as CreateSessionResponse,
    type CreateUserRequest as CreateUserRequest,
    type CreateUserResponse as CreateUserResponse,
    type ListRegistrationSession as ListRegistrationSession,
    type RegistrationSession as RegistrationSession,
    type RegistrationSessionAccount as RegistrationSessionAccount,
    type RegistrationSessionAddress as RegistrationSessionAddress,
    type RegistrationSessionUser as RegistrationSessionUser,
    type UpdateSessionDataRequest as UpdateSessionDataRequest,
    type UpdateSessionRequest as UpdateSessionRequest,
    type RegistrationSessionCreateParams as RegistrationSessionCreateParams,
    type RegistrationSessionUpdateParams as RegistrationSessionUpdateParams,
    type RegistrationSessionListParams as RegistrationSessionListParams,
    type RegistrationSessionUsersParams as RegistrationSessionUsersParams,
  };

  export {
    Actions as Actions,
    type ConfirmPaymentRequest as ConfirmPaymentRequest,
    type ConfirmPaymentResponse as ConfirmPaymentResponse,
    type SetupBillingResponse as SetupBillingResponse,
    type ActionResendVerificationEmailResponse as ActionResendVerificationEmailResponse,
    type ActionConfirmPaymentParams as ActionConfirmPaymentParams,
  };
}
