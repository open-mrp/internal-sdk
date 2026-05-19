// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionLoginParams, ActionMagicLoginParams, Actions, User } from './actions';
import * as APIKeysAPI from './api-keys/api-keys';
import {
  APIKey,
  APIKeyAPIKeysParams,
  APIKeyDeleteResponse,
  APIKeyRetrieveAPIKeysParams,
  APIKeyRetrieveAPIKeysResponse,
  APIKeyRetrieveParams,
  APIKeys,
  CreatedAPIKey,
} from './api-keys/api-keys';
import * as PasswordsAPI from './passwords/passwords';
import { PasswordCreateParams, PasswordCreateResponse, Passwords } from './passwords/passwords';
import * as RegistrationSessionsAPI from './registration-sessions/registration-sessions';
import {
  RegistrationSession,
  RegistrationSessionAccountsResponse,
  RegistrationSessionRegistrationSessionsParams,
  RegistrationSessionRegistrationSessionsResponse,
  RegistrationSessionRetrieveRegistrationSessionsParams,
  RegistrationSessionRetrieveRegistrationSessionsResponse,
  RegistrationSessionUpdateParams,
  RegistrationSessionUsersParams,
  RegistrationSessionUsersResponse,
  RegistrationSessions,
} from './registration-sessions/registration-sessions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * User authentication and token lifecycle operations, including login, registration, password management, and token refresh.
 */
export class Auth extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  passwords: PasswordsAPI.Passwords = new PasswordsAPI.Passwords(this._client);
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
   *   account_user_id: 'acus_01gf7a8200er3ar3pkfrb6kk29',
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
  users(body: AuthUsersParams, options?: RequestOptions): APIPromise<ActionsAPI.User> {
    return this._client.post('/v1/auth/users', { body, ...options });
  }
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
Auth.APIKeys = APIKeys;
Auth.Passwords = Passwords;
Auth.RegistrationSessions = RegistrationSessions;

export declare namespace Auth {
  export {
    type AuthDeleteRefreshTokensResponse as AuthDeleteRefreshTokensResponse,
    type AuthScannerPasswordsResponse as AuthScannerPasswordsResponse,
    type AuthUpdateAccessTokensResponse as AuthUpdateAccessTokensResponse,
    type AuthScannerPasswordsParams as AuthScannerPasswordsParams,
    type AuthUsersParams as AuthUsersParams,
  };

  export {
    Actions as Actions,
    type User as User,
    type ActionLoginParams as ActionLoginParams,
    type ActionMagicLoginParams as ActionMagicLoginParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type CreatedAPIKey as CreatedAPIKey,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRetrieveAPIKeysResponse as APIKeyRetrieveAPIKeysResponse,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams,
    type APIKeyRetrieveAPIKeysParams as APIKeyRetrieveAPIKeysParams,
  };

  export {
    Passwords as Passwords,
    type PasswordCreateResponse as PasswordCreateResponse,
    type PasswordCreateParams as PasswordCreateParams,
  };

  export {
    RegistrationSessions as RegistrationSessions,
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
}
