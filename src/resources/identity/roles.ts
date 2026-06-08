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
   * Creates a new role with the specified permissions.
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
   * Returns a role by ID, including its structured permissions.
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
   * Partially updates a custom role's name or permissions. Provided permissions
   * replace all existing ones; global roles cannot be modified.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.update(
   *   'rl_01c16d2eb637c0d1f3a372937c',
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
   * @example
   * ```ts
   * const listRole = await client.identity.roles.list();
   * ```
   */
  list(query: RoleListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListRole> {
    return this._client.get('/v1/identity/roles', { query, ...options });
  }

  /**
   * Deletes a role and its associated permissions. Global roles cannot be deleted.
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
   * Display name.
   */
  name: string;

  /**
   * Permissions to attach in `<domain>:<action>` format.
   */
  permissions: Array<string>;
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
   * Display name.
   */
  name?: string;

  /**
   * Permissions in `<domain>:<action>` format. Replaces all existing permissions;
   * omit to leave unchanged.
   */
  permissions?: Array<string>;
}

export interface RoleDeleteResponse {}

export interface RoleCreateParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Permissions to attach in `<domain>:<action>` format.
   */
  permissions: Array<string>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;
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
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Permissions in `<domain>:<action>` format. Replaces all existing
   * permissions; omit to leave unchanged.
   */
  permissions?: Array<string>;
}

export interface RoleListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by role types.
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
