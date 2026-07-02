// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountLogoURL,
  AccountPhotoUploadResult,
  AccountRetrieveParams,
  AccountUpdateParams,
  Accounts,
  UpdateAccountRequest,
} from './accounts';
import * as ChildAccountsAPI from './child-accounts';
import {
  ChildAccount,
  ChildAccountDeleteResponse,
  ChildAccountListParams,
  ChildAccounts,
  ListChildAccount,
} from './child-accounts';
import * as RolesAPI from './roles';
import {
  CreateRoleRequest,
  ListRole,
  RoleCreateParams,
  RoleDeleteResponse,
  RoleListParams,
  RoleRetrieveParams,
  RoleUpdateParams,
  Roles,
  UpdateRoleRequest,
} from './roles';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from './account-users/account-users';
import {
  AccountUser,
  AccountUserCreateParams,
  AccountUserListParams,
  AccountUserRetrieveParams,
  AccountUserUpdateParams,
  AccountUsers,
  Attribute,
  Consumption,
  CreateAccountUserRequest,
  Department,
  Item,
  ItemCategory,
  ListAccountUser,
  ListAttribute,
  ListConsumption,
  ListLocation,
  ListMachine,
  ListProductionStep,
  ListProperty,
  ListScanningStation,
  ListUnitGroupUnit,
  Location,
  LocationTypeCode,
  Machine,
  NotificationPreferenceItem,
  ProductionOutput,
  ProductionStep,
  Property,
  Quantity,
  Rate,
  ScanningStation,
  Unit,
  UnitGroup,
  UnitGroupUnit,
  UpdateAccountUserRequest,
} from './account-users/account-users';
import * as MeAPI from './me/me';
import { Me } from './me/me';
import * as UsersAPI from './users/users';
import { UpdateUserRequest, UserUpdateParams, Users } from './users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * List permission groups and their permissions.
 */
export class Identity extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  childAccounts: ChildAccountsAPI.ChildAccounts = new ChildAccountsAPI.ChildAccounts(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Returns a paginated list of permission groups with their nested permissions.
   *
   * This endpoint requires the permission: `permissions:read`.
   *
   * @example
   * ```ts
   * const listPermissionGroup =
   *   await client.identity.retrievePermissionGroups();
   * ```
   */
  retrievePermissionGroups(
    query: IdentityRetrievePermissionGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPermissionGroup> {
    return this._client.get('/v1/identity/permission-groups', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListPermission {
  /**
   * Resources in this page.
   */
  data: Array<Permission>;

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
 * List represents a paginated list of resources.
 */
export interface ListPermissionGroup {
  /**
   * Resources in this page.
   */
  data: Array<PermissionGroup>;

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
 * An individual permission that can be granted to a role, identified by a code in
 * `{domain}:{action}` format.
 */
export interface Permission {
  /**
   * Permission ID.
   */
  id: string;

  /**
   * Permission code in `{domain}:{action}` format, such as `customers:read`.
   */
  code: string;

  /**
   * When the permission was created.
   */
  created_at: string;

  /**
   * Human-readable description of what this permission controls.
   */
  description: string | null;

  /**
   * Code of the permission group this permission belongs to, such as `customers`.
   */
  group: string;

  /**
   * Human-readable name for the permission.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'permission';

  /**
   * When the permission was last updated.
   */
  updated_at: string;
}

/**
 * Grouping of related permissions.
 */
export interface PermissionGroup {
  /**
   * Permission group ID.
   */
  id: string;

  /**
   * Unique code identifying the permission group, such as `customers`.
   */
  code: string;

  /**
   * When the permission group was created.
   */
  created_at: string;

  /**
   * Free-form description of the permission group.
   */
  description: string | null;

  /**
   * Human-readable name for the permission group.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'permission_group';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  permissions: ListPermission | null;

  /**
   * When the permission group was last updated.
   */
  updated_at: string;
}

export interface IdentityRetrievePermissionGroupsParams {
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
  include?: Array<'owner'>;

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
}

Identity.Me = Me;
Identity.AccountUsers = AccountUsers;
Identity.Users = Users;
Identity.Accounts = Accounts;
Identity.ChildAccounts = ChildAccounts;
Identity.Roles = Roles;

export declare namespace Identity {
  export {
    type ListPermission as ListPermission,
    type ListPermissionGroup as ListPermissionGroup,
    type Permission as Permission,
    type PermissionGroup as PermissionGroup,
    type IdentityRetrievePermissionGroupsParams as IdentityRetrievePermissionGroupsParams,
  };

  export { Me as Me };

  export {
    AccountUsers as AccountUsers,
    type AccountUser as AccountUser,
    type Attribute as Attribute,
    type Consumption as Consumption,
    type CreateAccountUserRequest as CreateAccountUserRequest,
    type Department as Department,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAccountUser as ListAccountUser,
    type ListAttribute as ListAttribute,
    type ListConsumption as ListConsumption,
    type ListLocation as ListLocation,
    type ListMachine as ListMachine,
    type ListProductionStep as ListProductionStep,
    type ListProperty as ListProperty,
    type ListScanningStation as ListScanningStation,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Location as Location,
    type LocationTypeCode as LocationTypeCode,
    type Machine as Machine,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type ProductionOutput as ProductionOutput,
    type ProductionStep as ProductionStep,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type ScanningStation as ScanningStation,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateAccountUserRequest as UpdateAccountUserRequest,
    type AccountUserCreateParams as AccountUserCreateParams,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserListParams as AccountUserListParams,
  };

  export {
    Users as Users,
    type UpdateUserRequest as UpdateUserRequest,
    type UserUpdateParams as UserUpdateParams,
  };

  export {
    Accounts as Accounts,
    type AccountLogoURL as AccountLogoURL,
    type AccountPhotoUploadResult as AccountPhotoUploadResult,
    type UpdateAccountRequest as UpdateAccountRequest,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    ChildAccounts as ChildAccounts,
    type ChildAccount as ChildAccount,
    type ListChildAccount as ListChildAccount,
    type ChildAccountDeleteResponse as ChildAccountDeleteResponse,
    type ChildAccountListParams as ChildAccountListParams,
  };

  export {
    Roles as Roles,
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
