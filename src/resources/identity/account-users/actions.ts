// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage account users.
 */
export class Actions extends APIResource {
  /**
   * Activates a disabled or removed account user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.accountUsers.actions.activate(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  activate(id: string, options?: RequestOptions): APIPromise<ActionActivateResponse> {
    return this._client.put(path`/v1/identity/account-users/${id}/actions/activate`, options);
  }

  /**
   * Disables an account user. Disabled users will not be able to access the target
   * account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.accountUsers.actions.disable(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<ActionDisableResponse> {
    return this._client.put(path`/v1/identity/account-users/${id}/actions/disable`, options);
  }

  /**
   * Removes a user from the target account.
   *
   * @example
   * ```ts
   * const action =
   *   await client.identity.accountUsers.actions.remove(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  remove(id: string, options?: RequestOptions): APIPromise<ActionRemoveResponse> {
    return this._client.put(path`/v1/identity/account-users/${id}/actions/remove`, options);
  }
}

export interface ActionActivateResponse {}

export interface ActionDisableResponse {}

export interface ActionRemoveResponse {}

export declare namespace Actions {
  export {
    type ActionActivateResponse as ActionActivateResponse,
    type ActionDisableResponse as ActionDisableResponse,
    type ActionRemoveResponse as ActionRemoveResponse,
  };
}
