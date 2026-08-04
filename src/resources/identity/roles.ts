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
   * Creates a custom role that can then be assigned to users in your account.
   *
   * Roles created through the API are always owned by your account and have the type
   * `user`. Returns a conflict error if a role with the same name already exists.
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
   * Retrieves a single role by ID.
   *
   * Both the roles your account owns and the system-owned roles shared by every
   * account can be retrieved.
   *
   * This endpoint requires the permission: `roles:read`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.retrieve(
   *   'rl_3xknmfqflhvb',
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
   * Updates a role's name or the set of permissions it grants.
   *
   * Only roles owned by your account can be updated; the system-owned roles shared
   * across all accounts are rejected. Permission changes apply to every user already
   * assigned the role, starting with their next request.
   *
   * This endpoint requires the permission: `roles:update`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.update(
   *   'rl_3xknmfqflhvb',
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
   * Lists the roles that can be assigned to users in your account, newest first.
   *
   * Results combine the roles your account owns with the system-owned roles shared
   * by every account. Text search matches the role name.
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
   * Deletes a role along with the permissions granted through it.
   *
   * Only roles owned by your account can be deleted; the system-owned roles shared
   * across all accounts cannot. A role that is still assigned to at least one user
   * is rejected, so move those users to another role first.
   *
   * This endpoint requires the permission: `roles:delete`.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.delete(
   *   'rl_3xknmfqflhvb',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RoleDeleteResponse> {
    return this._client.delete(path`/v1/identity/roles/${id}`, options);
  }
}

/**
 * Request to create a role.
 */
export interface CreateRoleRequest {
  /**
   * Display name for the role, such as "Warehouse Manager".
   *
   * Must be unique within your account.
   */
  name: string;

  /**
   * Permissions to grant, in `{permission}:{action}` format, such as
   * `customers:read`.
   *
   * The first half is a permission code such as `customers` or `sales_orders`, and
   * the action must be one of `create`, `read`, `update`, or `delete`. List each
   * action separately to grant more than one action on the same permission. A role
   * created without any permissions grants no access until permissions are added.
   */
  permissions?: Array<string>;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to update a role.
 */
export interface UpdateRoleRequest {
  /**
   * New display name for the role.
   *
   * Returns a conflict error if another role in your account already uses this name.
   */
  name?: string;

  /**
   * Full replacement set of permissions, in `{permission}:{action}` format, such as
   * `customers:read`.
   *
   * The role's existing permissions are discarded and replaced with exactly what you
   * send, so include every permission the role should keep. Sending an empty array
   * strips the role of all access, while leaving the field out keeps the current
   * permissions untouched.
   */
  permissions?: Array<string>;
}

export interface RoleDeleteResponse {}

export interface RoleCreateParams {
  /**
   * Body param: Display name for the role, such as "Warehouse Manager".
   *
   * Must be unique within your account.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'permissions'>;

  /**
   * Body param: Permissions to grant, in `{permission}:{action}` format, such as
   * `customers:read`.
   *
   * The first half is a permission code such as `customers` or `sales_orders`, and
   * the action must be one of `create`, `read`, `update`, or `delete`. List each
   * action separately to grant more than one action on the same permission. A role
   * created without any permissions grants no access until permissions are added.
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
   * Body param: New display name for the role.
   *
   * Returns a conflict error if another role in your account already uses this name.
   */
  name?: string;

  /**
   * Body param: Full replacement set of permissions, in `{permission}:{action}`
   * format, such as `customers:read`.
   *
   * The role's existing permissions are discarded and replaced with exactly what you
   * send, so include every permission the role should keep. Sending an empty array
   * strips the role of all access, while leaving the field out keeps the current
   * permissions untouched.
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
