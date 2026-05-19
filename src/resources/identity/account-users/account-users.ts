// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as RolesAPI from '../roles';
import * as DepartmentsAPI from '../../operations/departments';
import * as ActionsAPI from './actions';
import {
  ActionUpdateActivateResponse,
  ActionUpdateDisableResponse,
  ActionUpdateRemoveResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage account users.
 */
export class AccountUsers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns an account user by ID.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.retrieve(
   *     'acus_01gf7a8200er3ar3pkfrb6kk29',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: AccountUserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUser> {
    return this._client.get(path`/v1/identity/account-users/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account user.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.update('', {
   *     preferences: [
   *       { enabled: true, notification_type: 'invoice' },
   *     ],
   *     department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
   *     name: 'John Doe',
   *     role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   *   });
   * ```
   */
  update(id: string, params: AccountUserUpdateParams, options?: RequestOptions): APIPromise<AccountUser> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/identity/account-users/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Creates a new account user and invites them to the target account.
   *
   * @example
   * ```ts
   * const accountUser =
   *   await client.identity.accountUsers.accountUsers({
   *     email: 'jdoe@augno.com',
   *     name: 'John Doe',
   *     password: 'QgS7Z8Hhj3&1',
   *     preferences: [
   *       {
   *         notification_type: 'order_acknowledgement',
   *         enabled: true,
   *       },
   *     ],
   *     username: 'jdoe',
   *     role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   *   });
   * ```
   */
  accountUsers(params: AccountUserAccountUsersParams, options?: RequestOptions): APIPromise<AccountUser> {
    const { include, ...body } = params;
    return this._client.post('/v1/identity/account-users', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of account users for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.accountUsers.retrieveAccountUsers();
   * ```
   */
  retrieveAccountUsers(
    query: AccountUserRetrieveAccountUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUserRetrieveAccountUsersResponse> {
    return this._client.get('/v1/identity/account-users', { query, ...options });
  }
}

/**
 * Account user with profile, role, and department.
 */
export interface AccountUser {
  /**
   * Account user ID.
   */
  id: string;

  /**
   * When the account user was created.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * When the user last used this account.
   */
  last_used_at: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_user';

  /**
   * Role resource.
   */
  role: RolesAPI.Role | null;

  /**
   * Account user status.
   */
  status: 'active' | 'disabled' | 'removed';

  /**
   * When the account user was last updated.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
}

/**
 * NotificationPreferenceItem toggles a single account-relation notification type.
 */
export interface NotificationPreferenceItem {
  /**
   * Whether this notification type is enabled for the account user.
   */
  enabled: boolean;

  /**
   * Notification type.
   */
  notification_type: 'invoice' | 'order_acknowledgement' | 'purchase_order_submission';
}

/**
 * List represents a paginated list of resources.
 */
export interface AccountUserRetrieveAccountUsersResponse {
  /**
   * Resources in this page.
   */
  data: Array<AccountUser>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountUserRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'department'>;
}

export interface AccountUserUpdateParams {
  /**
   * Body param: Notification preferences to update (external targets only).
   */
  preferences: Array<NotificationPreferenceItem>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Body param: Department assigned to the user.
   */
  department_id?: string | null;

  /**
   * Body param: User email address.
   */
  email?: string;

  /**
   * Body param: User display name.
   */
  name?: string;

  /**
   * Body param: Role assigned to the user.
   */
  role_id?: string | null;

  /**
   * Body param: Unique username (3–255 chars; letters, numbers, underscores,
   * hyphens).
   */
  username?: string;
}

export interface AccountUserAccountUsersParams {
  /**
   * Body param: User email address.
   */
  email: string | null;

  /**
   * Body param: User display name.
   */
  name: string | null;

  /**
   * Body param: Password. Only used for scanner-role users (scanning stations). Must
   * be 8–72 chars and include upper, lower, number, and special character.
   */
  password: string | null;

  /**
   * Body param: Notification preferences for the user (external targets only).
   */
  preferences: Array<NotificationPreferenceItem>;

  /**
   * Body param: Unique username (3–255 chars; letters, numbers, underscores,
   * hyphens).
   */
  username: string | null;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Body param: Department assigned to the user.
   */
  department_id?: string | null;

  /**
   * Body param: Role assigned to the user.
   */
  role_id?: string | null;
}

export interface AccountUserRetrieveAccountUsersParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'department'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Controls whether removed account users are included.
   */
  removed_scope?: 'excluded' | 'included';

  /**
   * Filter by role type code.
   */
  role_type?: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';
}

AccountUsers.Actions = Actions;

export declare namespace AccountUsers {
  export {
    type AccountUser as AccountUser,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type AccountUserRetrieveAccountUsersResponse as AccountUserRetrieveAccountUsersResponse,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserAccountUsersParams as AccountUserAccountUsersParams,
    type AccountUserRetrieveAccountUsersParams as AccountUserRetrieveAccountUsersParams,
  };

  export {
    Actions as Actions,
    type ActionUpdateActivateResponse as ActionUpdateActivateResponse,
    type ActionUpdateDisableResponse as ActionUpdateDisableResponse,
    type ActionUpdateRemoveResponse as ActionUpdateRemoveResponse,
  };
}
