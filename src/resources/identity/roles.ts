// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as ActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
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
  create(params: RoleCreateParams, options?: RequestOptions): APIPromise<ActionsAPI.Role> {
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
  ): APIPromise<ActionsAPI.Role> {
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
  ): APIPromise<ActionsAPI.Role> {
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
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: LinesAPI.AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRole {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.Role>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
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
  owner: LinesAPI.Owner | null;

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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreateRoleRequest as CreateRoleRequest,
    type Geolocation as Geolocation,
    type ListRole as ListRole,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Role as Role,
    type UpdateRoleRequest as UpdateRoleRequest,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };
}
