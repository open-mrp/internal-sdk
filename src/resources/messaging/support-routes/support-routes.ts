// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as ActionsAPI from './actions';
import {
  ActionClearParams,
  ActionClearResponse,
  ActionSetParams,
  Actions,
  ClearSupportRouteRequest,
  SetSupportRouteRequest,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Designate the group conversation that handles a relationship's inbound support, so customer support messages reach a deterministic set of recipients.
 */
export class SupportRoutes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Retrieves the support route configured for one scope in your account.
   *
   * This reads the exact scope you ask for and does not fall back: asking for a
   * customer that has no override of its own returns a not-found error even when an
   * account-level default is configured, so a caller checking which route will
   * actually be used for a customer must also read the default.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const supportRoute =
   *   await client.messaging.supportRoutes.list();
   * ```
   */
  list(
    query: SupportRouteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SupportRoute> {
    return this._client.get('/v1/messaging/support-routes', { query, ...options });
  }
}

/**
 * A support route designates the group conversation that handles a relationship's
 * inbound support.
 *
 * A route is scoped by `relation_account`: the route with no relation account is
 * the account-level default used for any customer, and a route naming a specific
 * customer account overrides that default for that customer.
 *
 * When a customer opens a support thread, the route in effect for them is resolved
 * and the group conversation's active people are seated on the new thread as its
 * recipients. Routes are applied at that moment only, so re-pointing or clearing a
 * route never changes who is already seated on threads that are open.
 *
 * The group also serves as the account's customer-service team elsewhere: its
 * people are the ones alerted when a customer registers for access to your portal.
 */
export interface SupportRoute {
  /**
   * Support route ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  group_conversation: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'support_route';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  relation_account: CoreAPI.Entity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface SupportRouteListParams {
  /**
   * The customer account whose override to read.
   *
   * Omit to read the account-level default instead.
   */
  relation_account_id?: string;
}

SupportRoutes.Actions = Actions;

export declare namespace SupportRoutes {
  export { type SupportRoute as SupportRoute, type SupportRouteListParams as SupportRouteListParams };

  export {
    Actions as Actions,
    type ClearSupportRouteRequest as ClearSupportRouteRequest,
    type SetSupportRouteRequest as SetSupportRouteRequest,
    type ActionClearResponse as ActionClearResponse,
    type ActionClearParams as ActionClearParams,
    type ActionSetParams as ActionSetParams,
  };
}
