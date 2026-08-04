// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionRequestResetParams,
  ActionRequestResetResponse,
  ActionResetParams,
  ActionResetResponse,
  Actions,
  RequestPasswordResetRequest,
  ResetPasswordRequest,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * User authentication and token lifecycle operations, including login, registration, password management, and token refresh.
 */
export class Passwords extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Updates the authenticated user's password after verifying their current
   * password.
   *
   * Every refresh token for the user is revoked, including the caller's own, so all
   * sessions end once their current access tokens expire. A confirmation email is
   * sent to the user.
   *
   * @example
   * ```ts
   * const password = await client.auth.passwords.create({
   *   new_password: '50iR2X0r@bvIH',
   *   old_password: 'QgS7Z8Hhj3&1',
   * });
   * ```
   */
  create(body: PasswordCreateParams, options?: RequestOptions): APIPromise<PasswordCreateResponse> {
    return this._client.post('/v1/auth/passwords', { body, ...options });
  }
}

/**
 * Request to update a user's password.
 */
export interface UpdatePasswordRequest {
  /**
   * New password.
   */
  new_password: string;

  /**
   * Current password.
   */
  old_password: string;
}

export interface PasswordCreateResponse {}

export interface PasswordCreateParams {
  /**
   * New password.
   */
  new_password: string;

  /**
   * Current password.
   */
  old_password: string;
}

Passwords.Actions = Actions;

export declare namespace Passwords {
  export {
    type UpdatePasswordRequest as UpdatePasswordRequest,
    type PasswordCreateResponse as PasswordCreateResponse,
    type PasswordCreateParams as PasswordCreateParams,
  };

  export {
    Actions as Actions,
    type RequestPasswordResetRequest as RequestPasswordResetRequest,
    type ResetPasswordRequest as ResetPasswordRequest,
    type ActionRequestResetResponse as ActionRequestResetResponse,
    type ActionResetResponse as ActionResetResponse,
    type ActionRequestResetParams as ActionRequestResetParams,
    type ActionResetParams as ActionResetParams,
  };
}
