// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SupportRoutesAPI from './support-routes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Designate the group conversation that handles a relationship's inbound support, so customer support messages reach a deterministic set of recipients.
 */
export class Actions extends APIResource {
  /**
   * Removes the support route for a scope in the caller's account.
   *
   * Inbound support then falls back to the account default, or to open lazy-join if
   * no default is configured.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.supportRoutes.actions.clear({
   *     relation_account_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *   });
   * ```
   */
  clear(
    body: ActionClearParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionClearResponse> {
    return this._client.post('/v1/messaging/support-routes/actions/clear', { body, ...options });
  }

  /**
   * Designates (or re-points) the group conversation that handles a relationship's
   * inbound support.
   *
   * Its participants become the deterministic recipients seated on the customer's
   * support thread. The target must be an existing group conversation in the
   * caller's account.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const supportRoute =
   *   await client.messaging.supportRoutes.actions.set({
   *     group_conversation_id: 'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   });
   * ```
   */
  set(body: ActionSetParams, options?: RequestOptions): APIPromise<SupportRoutesAPI.SupportRoute> {
    return this._client.post('/v1/messaging/support-routes/actions/set', { body, ...options });
  }
}

/**
 * Request to remove a support route for a scope (account default or a specific
 * relation).
 */
export interface ClearSupportRouteRequest {
  /**
   * The customer account whose override to remove.
   *
   * Omit to clear the account-level default instead.
   */
  relation_account_id?: string;
}

/**
 * Request to designate the group conversation that handles a relationship's
 * inbound support.
 */
export interface SetSupportRouteRequest {
  /**
   * The group conversation whose participants receive this relationship's support.
   */
  group_conversation_id: string;

  /**
   * The customer account this route overrides for.
   *
   * Omit to set the account-level default applied to any customer.
   */
  relation_account_id?: string;
}

export interface ActionClearResponse {}

export interface ActionClearParams {
  /**
   * The customer account whose override to remove.
   *
   * Omit to clear the account-level default instead.
   */
  relation_account_id?: string;
}

export interface ActionSetParams {
  /**
   * The group conversation whose participants receive this relationship's support.
   */
  group_conversation_id: string;

  /**
   * The customer account this route overrides for.
   *
   * Omit to set the account-level default applied to any customer.
   */
  relation_account_id?: string;
}

export declare namespace Actions {
  export {
    type ClearSupportRouteRequest as ClearSupportRouteRequest,
    type SetSupportRouteRequest as SetSupportRouteRequest,
    type ActionClearResponse as ActionClearResponse,
    type ActionClearParams as ActionClearParams,
    type ActionSetParams as ActionSetParams,
  };
}
