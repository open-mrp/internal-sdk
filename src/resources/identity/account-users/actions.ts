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
   *   await client.identity.accountUsers.actions.updateActivate(
   *     'acus_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  updateActivate(id: string, options?: RequestOptions): APIPromise<ActionUpdateActivateResponse> {
    return this._client.put(path`/v1/identity/account-users/${id}/actions/activate`, options);
  }

  /**
   * Disables an account user. Disabled users will not be able to access the target
   * account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.accountUsers.actions.updateDisable(
   *     'acus_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  updateDisable(id: string, options?: RequestOptions): APIPromise<ActionUpdateDisableResponse> {
    return this._client.put(path`/v1/identity/account-users/${id}/actions/disable`, options);
  }

  /**
   * Removes a user from the target account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.accountUsers.actions.updateRemove(
   *     'acus_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  updateRemove(id: string, options?: RequestOptions): APIPromise<ActionUpdateRemoveResponse> {
    return this._client.put(path`/v1/identity/account-users/${id}/actions/remove`, options);
  }
}

export interface ActionUpdateActivateResponse {}

export interface ActionUpdateDisableResponse {}

export interface ActionUpdateRemoveResponse {}

export declare namespace Actions {
  export {
    type ActionUpdateActivateResponse as ActionUpdateActivateResponse,
    type ActionUpdateDisableResponse as ActionUpdateDisableResponse,
    type ActionUpdateRemoveResponse as ActionUpdateRemoveResponse,
  };
}
