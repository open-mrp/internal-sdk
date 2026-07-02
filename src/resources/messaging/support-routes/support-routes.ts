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
   * Returns the support route for an exact scope in the caller's account.
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
 * Its group conversation's participants become the deterministic recipients seated
 * on a customer's support thread. The scope is `relation_account_id`: null is the
 * account-level default for any customer; a concrete account id is a per-relation
 * override that wins over the default.
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
