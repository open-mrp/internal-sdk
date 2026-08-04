// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * User authentication and token lifecycle operations, including login, registration, password management, and token refresh.
 */
export class Actions extends APIResource {
  /**
   * Authenticates a user and returns the user object, setting access and refresh
   * tokens in cookies.
   *
   * Failed attempts are throttled per identifier: after 10 failures within 5
   * minutes, further attempts for that identifier are rejected with a rate-limit
   * error until the window passes. Invalid credentials always return the same
   * generic error, whether or not the identifier exists.
   *
   * @example
   * ```ts
   * const user = await client.auth.actions.login({
   *   identifier: 'jdoe',
   *   password: 'QgS7Z8Hhj3&1',
   * });
   * ```
   */
  login(body: ActionLoginParams, options?: RequestOptions): APIPromise<AuthAPI.User> {
    return this._client.post('/v1/auth/actions/login', { body, ...options });
  }

  /**
   * Exchanges a magic login token for a session, setting access and refresh tokens
   * in cookies.
   *
   * Signs the user in without a password. The token is short-lived, so once it
   * expires the link no longer signs the user in.
   *
   * @example
   * ```ts
   * const user = await client.auth.actions.magicLogin({
   *   token:
   *     'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1Z25vLmNvbSIsInN1YiI6InVzXzAxZ2Y3YTgyMDBlMXNyMjBwZzl3eDZkMmswIiwiZXhwIjoxNzU2ODIzMzI5LCJpYXQiOjE3NTY4MTk3Mjl9.2ZodhtiHDqIQnDjzrJZvqIdEbQbmkgbTaz4OXdbXCWNjzEsy2-5e78XQRu-aZ8MoZ2dusIVKQcN1Tm-arKR0_Q',
   * });
   * ```
   */
  magicLogin(body: ActionMagicLoginParams, options?: RequestOptions): APIPromise<AuthAPI.User> {
    return this._client.post('/v1/auth/actions/magic-login', { body, ...options });
  }
}

/**
 * Request to log in a user.
 */
export interface LoginRequest {
  /**
   * Username or email for authentication.
   */
  identifier: string;

  /**
   * User password.
   */
  password: string;
}

/**
 * Request to exchange a magic login token for a session.
 */
export interface MagicLoginRequest {
  /**
   * Magic login token taken from the `t` query parameter of the link in the "already
   * registered" email.
   *
   * The token expires 15 minutes after the email is sent.
   */
  token: string;
}

export interface ActionLoginParams {
  /**
   * Username or email for authentication.
   */
  identifier: string;

  /**
   * User password.
   */
  password: string;
}

export interface ActionMagicLoginParams {
  /**
   * Magic login token taken from the `t` query parameter of the link in the "already
   * registered" email.
   *
   * The token expires 15 minutes after the email is sent.
   */
  token: string;
}

export declare namespace Actions {
  export {
    type LoginRequest as LoginRequest,
    type MagicLoginRequest as MagicLoginRequest,
    type ActionLoginParams as ActionLoginParams,
    type ActionMagicLoginParams as ActionMagicLoginParams,
  };
}
