// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
   * @example
   * ```ts
   * const user = await client.auth.actions.login({
   *   identifier: 'jdoe',
   *   password: 'QgS7Z8Hhj3&1',
   * });
   * ```
   */
  login(body: ActionLoginParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/v1/auth/actions/login', { body, ...options });
  }

  /**
   * Exchanges a magic login token for a session, setting access and refresh tokens
   * in cookies.
   *
   * @example
   * ```ts
   * const user = await client.auth.actions.magicLogin({
   *   token:
   *     'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1Z25vLmNvbSIsInN1YiI6InVzXzAxZ2Y3YTgyMDBlMXNyMjBwZzl3eDZkMmswIiwiZXhwIjoxNzU2ODIzMzI5LCJpYXQiOjE3NTY4MTk3Mjl9.2ZodhtiHDqIQnDjzrJZvqIdEbQbmkgbTaz4OXdbXCWNjzEsy2-5e78XQRu-aZ8MoZ2dusIVKQcN1Tm-arKR0_Q',
   * });
   * ```
   */
  magicLogin(body: ActionMagicLoginParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/v1/auth/actions/magic-login', { body, ...options });
  }
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
   * Magic login token from the "already registered" email.
   */
  token: string;
}

export declare namespace Actions {
  export {
    type User as User,
    type ActionLoginParams as ActionLoginParams,
    type ActionMagicLoginParams as ActionMagicLoginParams,
  };
}
