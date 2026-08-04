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
   * Removes the support route configured for one scope in your account.
   *
   * Clearing a customer's override sends that customer back to the account-level
   * default. Clearing the default leaves every customer without an override of their
   * own unable to open a new support thread until a route is set again — threads
   * that are already open keep working, and the people seated on them stay seated.
   *
   * Only the exact scope you name is cleared, and clearing a scope that has no route
   * returns a not-found error.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.supportRoutes.actions.clear({
   *     relation_account_id: 'ac_opnlh43ymyee',
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
   * Designates the group conversation that handles a relationship's inbound support.
   *
   * The group's active people become the recipients seated on a customer's support
   * thread when that customer opens one. A scope holds a single route, so setting
   * one where a route already exists re-points it rather than adding a second.
   *
   * Configuring a route is what makes support reachable: until a customer's scope
   * resolves to a route with at least one person in its group, that customer cannot
   * open a new support thread. Re-pointing or clearing a route afterwards only
   * affects threads opened from then on — people already seated on an open thread
   * stay on it.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const supportRoute =
   *   await client.messaging.supportRoutes.actions.set({
   *     group_conversation_id: 'cv_w35z4ck68yq7',
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
   * The group conversation whose participants handle this relationship's support.
   *
   * It must be an existing group conversation in your account; a direct message, a
   * system channel, or a conversation belonging to another account is rejected.
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
   * The group conversation whose participants handle this relationship's support.
   *
   * It must be an existing group conversation in your account; a direct message, a
   * system channel, or a conversation belonging to another account is rejected.
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
