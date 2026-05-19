// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
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
  create(params: RoleCreateParams, options?: RequestOptions): APIPromise<Role> {
    const { include, ...body } = params;
    return this._client.post('/v1/identity/roles', { query: { include }, body, ...options });
  }

  /**
   * Returns a role by ID, including its structured permissions.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.retrieve(
   *   'rl_01gf7a8200er3ar3pkfrb6kk29',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: RoleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Role> {
    return this._client.get(path`/v1/identity/roles/${id}`, { query, ...options });
  }

  /**
   * Partially updates a custom role's name or permissions. Provided permissions
   * replace all existing ones; global roles cannot be modified.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.update(
   *   'rl_01gf7a8200er3ar3pkfrb6kk29',
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
  ): APIPromise<Role> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/roles/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of roles for the target account, including global
   * roles.
   *
   * @example
   * ```ts
   * const roles = await client.identity.roles.list();
   * ```
   */
  list(
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoleListResponse> {
    return this._client.get('/v1/identity/roles', { query, ...options });
  }

  /**
   * Deletes a role and its associated permissions. Global roles cannot be deleted.
   *
   * @example
   * ```ts
   * const role = await client.identity.roles.delete(
   *   'rl_01gf7a8200er3ar3pkfrb6kk29',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RoleDeleteResponse> {
    return this._client.delete(path`/v1/identity/roles/${id}`, options);
  }
}

/**
 * Role resource.
 */
export interface Role {
  /**
   * Role ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'role';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Permissions in `{domain}:{action}` format.
   */
  permissions: Array<string> | null;

  /**
   * Role type code.
   *
   * The role's type is sometimes used to gate special behaviors in the frontend and
   * to restrict some actions to only certain types of roles. For example, only roles
   * with the type `admin` can create and manage API keys.
   */
  type: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface RoleListResponse {
  /**
   * Resources in this page.
   */
  data: Array<Role>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
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
    type Role as Role,
    type RoleListResponse as RoleListResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };
}
