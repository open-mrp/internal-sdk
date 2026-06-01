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
  PageInfo as RegistrationSessionsAPIPageInfo,
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
import * as InventoryChangeLogsAPI from '../operations/inventory-change-logs/inventory-change-logs';
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
   * Revokes a refresh token.
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
   * Rotates the password for a scanner-role account user backing a scanning station.
   * Requires the caller's current password for verification.
   *
   * @example
   * ```ts
   * const response = await client.auth.scannerPasswords({
   *   account_user_id: 'acus_01ea9983ddb41dacc44ecf997c',
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
   * Refreshes an access token using a refresh token, setting a new access token in a
   * cookie.
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
   * Registers a user on the customer portal. Returns the user object and sets access
   * and refresh tokens in cookies.
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
  users(body: AuthUsersParams, options?: RequestOptions): APIPromise<InventoryChangeLogsAPI.User> {
    return this._client.post('/v1/auth/users', { body, ...options });
  }
}

/**
 * Request to register a user.
 */
export interface RegisterRequest {
  /**
   * Email address.
   */
  email: string;

  /**
   * Full name.
   */
  name: string;

  /**
   * User password.
   */
  password: string;

  /**
   * When registering from a customer portal, scopes the magic-login link in the
   * "already registered" email.
   */
  account_slug?: string;
}

/**
 * Request to update a scanner-role account user's password.
 */
export interface UpdateScannerPasswordRequest {
  /**
   * Target scanner account user ID.
   */
  account_user_id: string;

  /**
   * New password to set for the scanner user.
   */
  new_password: string;

  /**
   * Requester's current password (the caller's own password, for verification).
   */
  requester_password: string;
}

/**
 * User resource.
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
   * Email address.
   */
  email: string | null;

  /**
   * Email verified timestamp, null if unverified.
   */
  email_verified_at: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * Display name.
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
   * Username.
   */
  username: string | null;
}

export interface AuthDeleteRefreshTokensResponse {}

export interface AuthScannerPasswordsResponse {}

export interface AuthUpdateAccessTokensResponse {}

export interface AuthScannerPasswordsParams {
  /**
   * Target scanner account user ID.
   */
  account_user_id: string;

  /**
   * New password to set for the scanner user.
   */
  new_password: string;

  /**
   * Requester's current password (the caller's own password, for verification).
   */
  requester_password: string;
}

export interface AuthUsersParams {
  /**
   * Email address.
   */
  email: string;

  /**
   * Full name.
   */
  name: string;

  /**
   * User password.
   */
  password: string;

  /**
   * When registering from a customer portal, scopes the magic-login link in the
   * "already registered" email.
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
    type RegistrationSessionsAPIPageInfo as PageInfo,
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
