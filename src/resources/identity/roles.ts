// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage roles.
 */
export class Roles extends APIResource {
  /**
   * Creates a custom role with the specified permissions.
   *
   * Roles created through the API always have type `user`.
   *
   * This endpoint requires the permission: `roles:create`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.create({
   *   name: 'Warehouse Manager',
   *   permissions: [
   *     'customers:create',
   *     'customers:read',
   *     'customers:update',
   *     'invoices:read',
   *   ],
   * });
   * ```
   */
  create(params: RoleCreateParams, options?: RequestOptions): APIPromise<APIKeysAPI.Role> {
    const { include, ...body } = params;
    return this._client.post('/v1/identity/roles', { query: { include }, body, ...options });
  }

  /**
   * Returns a role by ID, including its permissions.
   *
   * This endpoint requires the permission: `roles:read`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.retrieve(
   *   'rl_01c16d2eb637c0d1f3a372937c',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: RoleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.Role> {
    return this._client.get(path`/v1/identity/roles/${id}`, { query, ...options });
  }

  /**
   * Partially updates a custom role's name or permissions.
   *
   * Provided permissions replace all existing ones; global roles cannot be modified.
   *
   * This endpoint requires the permission: `roles:update`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.update(
   *   'rl_01c16d2eb637c0d1f3a372937c',
   *   {
   *     name: 'Updated Manager',
   *     permissions: ['customers:read', 'customers:update'],
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: RoleUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.Role> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/roles/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of roles for the target account, including global
   * roles.
   *
   * This endpoint requires the permission: `roles:read`.
   *
   * @example
   * ```ts
   * const listRole = await client.identity.roles.list();
   * ```
   */
  list(query: RoleListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListRole> {
    return this._client.get('/v1/identity/roles', { query, ...options });
  }

  /**
   * Deletes a role and its associated permissions.
   *
   * Global roles and roles currently assigned to one or more users cannot be
   * deleted.
   *
   * This endpoint requires the permission: `roles:delete`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.delete(
   *   'rl_01c16d2eb637c0d1f3a372937c',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RoleDeleteResponse> {
    return this._client.delete(path`/v1/identity/roles/${id}`, options);
  }
}

/**
 * CreateRoleRequest is a request to create a role.
 */
export interface CreateRoleRequest {
  /**
   * Display name for the role, unique within the account.
   */
  name: string;

  /**
   * Permissions to grant, in `{domain}:{action}` format, such as `customers:read`.
   *
   * The action must be one of `create`, `read`, `update`, or `delete`. Omit to
   * create a role with no permissions.
   */
  permissions?: Array<string>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRole {
  /**
   * Resources in this page.
   */
  data: Array<APIKeysAPI.Role>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * UpdateRoleRequest is a request to update a role.
 */
export interface UpdateRoleRequest {
  /**
   * New display name for the role, unique within the account.
   *
   * Omit to leave unchanged.
   */
  name?: string;

  /**
   * Full replacement set of permissions, in `{domain}:{action}` format, such as
   * `customers:read`.
   *
   * Replaces all existing permissions on the role. Pass an empty array to remove all
   * permissions, or omit to leave them unchanged.
   */
  permissions?: Array<string>;
}

export interface RoleDeleteResponse {}

export interface RoleCreateParams {
  /**
   * Body param: Display name for the role, unique within the account.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;

  /**
   * Body param: Permissions to grant, in `{domain}:{action}` format, such as
   * `customers:read`.
   *
   * The action must be one of `create`, `read`, `update`, or `delete`. Omit to
   * create a role with no permissions.
   */
  permissions?: Array<string>;
}

export interface RoleRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;
}

export interface RoleUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;

  /**
   * Body param: New display name for the role, unique within the account.
   *
   * Omit to leave unchanged.
   */
  name?: string;

  /**
   * Body param: Full replacement set of permissions, in `{domain}:{action}` format,
   * such as `customers:read`.
   *
   * Replaces all existing permissions on the role. Pass an empty array to remove all
   * permissions, or omit to leave them unchanged.
   */
  permissions?: Array<string>;
}

export interface RoleListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter results to roles whose type matches any of the given values.
   */
  types?: Array<'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent'>;
}

export declare namespace Roles {
  export {
    type CreateRoleRequest as CreateRoleRequest,
    type ListRole as ListRole,
    type UpdateRoleRequest as UpdateRoleRequest,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };
}
