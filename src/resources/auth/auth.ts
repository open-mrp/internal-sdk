// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionLoginParams,
  ActionMagicLoginParams,
  Actions,
  LoginRequest,
  MagicLoginRequest,
} from './actions';
import * as APIKeysAPI from './api-keys/api-keys';
import {
  APIKey,
  APIKeyCreateParams,
  APIKeyDeleteResponse,
  APIKeyListParams,
  APIKeyRetrieveParams,
  APIKeys,
  Account,
  AccountBranding,
  AccountPortal,
  Address,
  CreateAPIKeyRequest,
  CreatedAPIKey,
  Geolocation,
  ListAPIKey,
  Owner,
  PageInfo,
  Role,
} from './api-keys/api-keys';
import * as PasswordsAPI from './passwords/passwords';
import {
  PasswordCreateParams,
  PasswordCreateResponse,
  Passwords,
  UpdatePasswordRequest,
} from './passwords/passwords';
import * as RegistrationSessionsAPI from './registration-sessions/registration-sessions';
import {
  CompleteRegistrationResponse,
  CreateRegistrationSessionRequest,
  CreateSessionResponse,
  CreateUserRequest,
  CreateUserResponse,
  ListRegistrationSession,
  RegistrationSession,
  RegistrationSessionAccount,
  RegistrationSessionAddress,
  RegistrationSessionCreateParams,
  RegistrationSessionListParams,
  RegistrationSessionUpdateParams,
  RegistrationSessionUser,
  RegistrationSessionUsersParams,
  RegistrationSessions,
  UpdateSessionDataRequest,
  UpdateSessionRequest,
} from './registration-sessions/registration-sessions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * User authentication and token lifecycle operations, including login, registration, password management, and token refresh.
 */
export class Auth extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  passwords: PasswordsAPI.Passwords = new PasswordsAPI.Passwords(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  registrationSessions: RegistrationSessionsAPI.RegistrationSessions =
    new RegistrationSessionsAPI.RegistrationSessions(this._client);

  /**
   * Signs the current session out by revoking its refresh token.
   *
   * The auth cookies are cleared and the refresh token can no longer be exchanged
   * for access tokens. Other sessions belonging to the user are unaffected, and any
   * access token already issued stays valid until it expires.
   *
   * @example
   * ```ts
   * const response = await client.auth.deleteRefreshTokens();
   * ```
   */
  deleteRefreshTokens(options?: RequestOptions): APIPromise<AuthDeleteRefreshTokensResponse> {
    return this._client.delete('/v1/auth/refresh-tokens', options);
  }

  /**
   * Sets a new password for a scanner-role account user, the login used by a
   * scanning station.
   *
   * The caller must be signed in as a user with permission to manage team users and
   * must supply their own current password; API keys cannot perform this operation
   * because they have no password to verify. Only scanner-role users in the caller's
   * account can be changed this way — use the password reset flow for everyone else.
   *
   * This endpoint requires the permission: `team:update`.
   *
   * @example
   * ```ts
   * const response = await client.auth.scannerPasswords({
   *   account_user_id: 'acus_e5zu8bde0z3h',
   *   new_password: '50iR2X0r@bvIH',
   *   requester_password: 'QgS7Z8Hhj3&1',
   * });
   * ```
   */
  scannerPasswords(
    body: AuthScannerPasswordsParams,
    options?: RequestOptions,
  ): APIPromise<AuthScannerPasswordsResponse> {
    return this._client.post('/v1/auth/scanner-passwords', { body, ...options });
  }

  /**
   * Issues a new access token from the caller's refresh token, setting it in a
   * cookie.
   *
   * The refresh token itself is not rotated and keeps its original expiration, so
   * the same cookie can be exchanged repeatedly until it expires or is revoked. A
   * refresh token that has been revoked or has expired fails here and the user must
   * sign in again.
   *
   * @example
   * ```ts
   * const response = await client.auth.updateAccessTokens();
   * ```
   */
  updateAccessTokens(options?: RequestOptions): APIPromise<AuthUpdateAccessTokensResponse> {
    return this._client.put('/v1/auth/access-tokens', options);
  }

  /**
   * Registers a user on the customer portal.
   *
   * Returns the new user object, sets access and refresh tokens in cookies, and
   * sends the user a welcome email. Registering creates the user record only;
   * membership in an account is granted separately.
   *
   * If the email is already registered, the request fails with a generic validation
   * error (so existing emails are not revealed) and an "already registered" email
   * containing a magic login link is sent to the existing user instead.
   *
   * @example
   * ```ts
   * const user = await client.auth.users({
   *   email: 'jdoe@augno.com',
   *   name: 'John Doe',
   *   password: 'QgS7Z8Hhj3&1',
   * });
   * ```
   */
  users(body: AuthUsersParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/v1/auth/users', { body, ...options });
  }
}

/**
 * Request to register a user.
 */
export interface RegisterRequest {
  /**
   * Email address the user will sign in with.
   *
   * Must not already belong to a user; the request is rejected without revealing
   * that the address is taken.
   */
  email: string;

  /**
   * Full name of the user, used to address them in emails.
   */
  name: string;

  /**
   * Password the user will sign in with.
   */
  password: string;

  /**
   * Slug of the customer portal the user is registering from.
   *
   * Only affects the "already registered" email sent when the address is taken: it
   * points the magic-login link back at that portal instead of the generic
   * dashboard. Accounts with a verified custom portal domain use that domain in the
   * link instead of the slug.
   */
  account_slug?: string;
}

/**
 * Request to update a scanner-role account user's password.
 */
export interface UpdateScannerPasswordRequest {
  /**
   * ID of the account user whose password is being changed.
   *
   * Must belong to the caller's account and hold a scanner role; requests targeting
   * any other user are rejected.
   */
  account_user_id: string;

  /**
   * New password to set for the scanner user.
   */
  new_password: string;

  /**
   * The caller's own current password, used to confirm the caller's identity before
   * the scanner password is changed.
   */
  requester_password: string;
}

/**
 * A user's global profile, shared across every account they belong to.
 *
 * Account-specific settings (status, role, department) live on the account user
 * resource that links the user to each account.
 */
export interface User {
  /**
   * User ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address the user signs in with and receives platform email at.
   */
  email: string | null;

  /**
   * When the user verified their email address.
   */
  email_verified_at: string | null;

  /**
   * Location of the user's profile image.
   *
   * For photos uploaded through the API this holds an internal path rather than a
   * fetchable image URL; call Get User Photo URL to obtain a temporary link to the
   * image itself.
   */
  image_url: string | null;

  /**
   * User's full display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Username the user can sign in with instead of their email address.
   *
   * Usernames are unique across the whole platform, not just within your account.
   */
  username: string | null;
}

export interface AuthDeleteRefreshTokensResponse {}

export interface AuthScannerPasswordsResponse {}

export interface AuthUpdateAccessTokensResponse {}

export interface AuthScannerPasswordsParams {
  /**
   * ID of the account user whose password is being changed.
   *
   * Must belong to the caller's account and hold a scanner role; requests targeting
   * any other user are rejected.
   */
  account_user_id: string;

  /**
   * New password to set for the scanner user.
   */
  new_password: string;

  /**
   * The caller's own current password, used to confirm the caller's identity before
   * the scanner password is changed.
   */
  requester_password: string;
}

export interface AuthUsersParams {
  /**
   * Email address the user will sign in with.
   *
   * Must not already belong to a user; the request is rejected without revealing
   * that the address is taken.
   */
  email: string;

  /**
   * Full name of the user, used to address them in emails.
   */
  name: string;

  /**
   * Password the user will sign in with.
   */
  password: string;

  /**
   * Slug of the customer portal the user is registering from.
   *
   * Only affects the "already registered" email sent when the address is taken: it
   * points the magic-login link back at that portal instead of the generic
   * dashboard. Accounts with a verified custom portal domain use that domain in the
   * link instead of the slug.
   */
  account_slug?: string;
}

Auth.Actions = Actions;
Auth.Passwords = Passwords;
Auth.APIKeys = APIKeys;
Auth.RegistrationSessions = RegistrationSessions;

export declare namespace Auth {
  export {
    type RegisterRequest as RegisterRequest,
    type UpdateScannerPasswordRequest as UpdateScannerPasswordRequest,
    type User as User,
    type AuthDeleteRefreshTokensResponse as AuthDeleteRefreshTokensResponse,
    type AuthScannerPasswordsResponse as AuthScannerPasswordsResponse,
    type AuthUpdateAccessTokensResponse as AuthUpdateAccessTokensResponse,
    type AuthScannerPasswordsParams as AuthScannerPasswordsParams,
    type AuthUsersParams as AuthUsersParams,
  };

  export {
    Actions as Actions,
    type LoginRequest as LoginRequest,
    type MagicLoginRequest as MagicLoginRequest,
    type ActionLoginParams as ActionLoginParams,
    type ActionMagicLoginParams as ActionMagicLoginParams,
  };

  export {
    Passwords as Passwords,
    type UpdatePasswordRequest as UpdatePasswordRequest,
    type PasswordCreateResponse as PasswordCreateResponse,
    type PasswordCreateParams as PasswordCreateParams,
  };

  export {
    APIKeys as APIKeys,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type APIKey as APIKey,
    type CreateAPIKeyRequest as CreateAPIKeyRequest,
    type CreatedAPIKey as CreatedAPIKey,
    type Geolocation as Geolocation,
    type ListAPIKey as ListAPIKey,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Role as Role,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    RegistrationSessions as RegistrationSessions,
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
}
