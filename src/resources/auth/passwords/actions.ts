// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * User authentication and token lifecycle operations, including login, registration, password management, and token refresh.
 */
export class Actions extends APIResource {
  /**
   * Sends a password reset email to the user.
   *
   * Always returns an accepted response, whether or not the identifier matches a
   * known user, so it does not reveal which identifiers exist. Reset links expire 15
   * minutes after they are issued.
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.passwords.actions.requestReset({
   *     identifier: 'jdoe@augno.com',
   *   });
   * ```
   */
  requestReset(
    body: ActionRequestResetParams,
    options?: RequestOptions,
  ): APIPromise<ActionRequestResetResponse> {
    return this._client.post('/v1/auth/passwords/actions/request-reset', { body, ...options });
  }

  /**
   * Resets a user's password using a password reset token, revoking previous tokens
   * and setting new ones in cookies.
   *
   * @example
   * ```ts
   * const response = await client.auth.passwords.actions.reset({
   *   token:
   *     'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1Z25vLmNvbSIsInN1YiI6InVzXzAxZ2Y3YTgyMDBlMXNyMjBwZzl3eDZkMmswIiwiZXhwIjoxNzU2ODIzMzI5LCJpYXQiOjE3NTY4MTk3Mjl9.2ZodhtiHDqIQnDjzrJZvqIdEbQbmkgbTaz4OXdbXCWNjzEsy2-5e78XQRu-aZ8MoZ2dusIVKQcN1Tm-arKR0_Q',
   *   password: '50iR2X0r@bvIH',
   * });
   * ```
   */
  reset(body: ActionResetParams, options?: RequestOptions): APIPromise<ActionResetResponse> {
    return this._client.post('/v1/auth/passwords/actions/reset', { body, ...options });
  }
}

/**
 * Request for a password reset.
 */
export interface RequestPasswordResetRequest {
  /**
   * Username or email of the user whose password should be reset.
   */
  identifier: string;

  /**
   * Account slug for redirecting to the original login portal after password reset.
   */
  account_slug?: string;
}

/**
 * Request to reset a user's password.
 */
export interface ResetPasswordRequest {
  /**
   * Password reset token from the password reset email.
   */
  token: string;

  /**
   * New password.
   */
  password: string;
}

export interface ActionRequestResetResponse {}

export interface ActionResetResponse {}

export interface ActionRequestResetParams {
  /**
   * Username or email of the user whose password should be reset.
   */
  identifier: string;

  /**
   * Account slug for redirecting to the original login portal after password reset.
   */
  account_slug?: string;
}

export interface ActionResetParams {
  /**
   * Password reset token from the password reset email.
   */
  token: string;

  /**
   * New password.
   */
  password: string;
}

export declare namespace Actions {
  export {
    type RequestPasswordResetRequest as RequestPasswordResetRequest,
    type ResetPasswordRequest as ResetPasswordRequest,
    type ActionRequestResetResponse as ActionRequestResetResponse,
    type ActionResetResponse as ActionResetResponse,
    type ActionRequestResetParams as ActionRequestResetParams,
    type ActionResetParams as ActionResetParams,
  };
}
