// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionRequestResetParams,
  ActionRequestResetResponse,
  ActionResetParams,
  ActionResetResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * User authentication and token lifecycle operations, including login, registration, password management, and token refresh.
 */
export class Passwords extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Updates a user's password, revoking previous tokens and setting new access and
   * refresh tokens in cookies.
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
    type PasswordCreateResponse as PasswordCreateResponse,
    type PasswordCreateParams as PasswordCreateParams,
  };

  export {
    Actions as Actions,
    type ActionRequestResetResponse as ActionRequestResetResponse,
    type ActionResetResponse as ActionResetResponse,
    type ActionRequestResetParams as ActionRequestResetParams,
    type ActionResetParams as ActionResetParams,
  };
}
