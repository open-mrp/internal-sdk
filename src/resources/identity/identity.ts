// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as AccountsAPI from './accounts';
import {
  Account,
  AccountRetrieveLogoResponse,
  AccountRetrieveParams,
  AccountUpdateParams,
  AccountUpdatePhotoResponse,
  Accounts,
} from './accounts';
import * as ChildAccountsAPI from './child-accounts';
import {
  ChildAccount,
  ChildAccountDeleteResponse,
  ChildAccountRetrieveChildAccountsParams,
  ChildAccountRetrieveChildAccountsResponse,
  ChildAccounts,
} from './child-accounts';
import * as RolesAPI from './roles';
import {
  Role,
  RoleCreateParams,
  RoleDeleteResponse,
  RoleListParams,
  RoleListResponse,
  RoleRetrieveParams,
  RoleUpdateParams,
  Roles,
} from './roles';
import * as AddressesAPI from '../sales/addresses';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as AccountUsersAPI from './account-users/account-users';
import {
  AccountUser,
  AccountUserAccountUsersParams,
  AccountUserRetrieveAccountUsersParams,
  AccountUserRetrieveAccountUsersResponse,
  AccountUserRetrieveParams,
  AccountUserUpdateParams,
  AccountUsers,
  NotificationPreferenceItem,
} from './account-users/account-users';
import * as IntegrationsAPI from './integrations/integrations';
import {
  AccountIntegration,
  IntegrationCreateParams,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationUpdateParams,
  Integrations,
} from './integrations/integrations';
import * as MeAPI from './me/me';
import { Me } from './me/me';
import * as UsersAPI from './users/users';
import { UserUpdateParams, Users } from './users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Identity extends APIResource {
  accountUsers: AccountUsersAPI.AccountUsers = new AccountUsersAPI.AccountUsers(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  childAccounts: ChildAccountsAPI.ChildAccounts = new ChildAccountsAPI.ChildAccounts(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Returns a public account by portal slug. Unauthenticated.
   *
   * @example
   * ```ts
   * const identity = await client.identity.retrieve('acme');
   * ```
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<IdentityRetrieveResponse> {
    return this._client.get(path`/v1/identity/portal-branding/${slug}`, options);
  }

  /**
   * Returns a paginated list of permission groups with their nested permissions.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.retrievePermissionGroups();
   * ```
   */
  retrievePermissionGroups(
    query: IdentityRetrievePermissionGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IdentityRetrievePermissionGroupsResponse> {
    return this._client.get('/v1/identity/permission-groups', { query, ...options });
  }
}

/**
 * Minimal account representation for unauthenticated slug lookups.
 */
export interface IdentityRetrieveResponse {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: AddressesAPI.Address | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'public_account';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Support email address.
   */
  support_email: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface IdentityRetrievePermissionGroupsResponse {
  /**
   * Resources in this page.
   */
  data: Array<IdentityRetrievePermissionGroupsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace IdentityRetrievePermissionGroupsResponse {
  /**
   * Grouping of related permissions.
   */
  export interface Data {
    /**
     * Permission group ID.
     */
    id: string;

    /**
     * Permission group code.
     */
    code: string;

    /**
     * When the permission group was created.
     */
    created_at: string;

    /**
     * Description.
     */
    description: string | null;

    /**
     * Display name.
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'permission_group';

    /**
     * Owner describes the provenance of a resource.
     */
    owner: ItemCategoriesAPI.Owner | null;

    /**
     * List represents a paginated list of resources.
     */
    permissions: Data.Permissions | null;

    /**
     * When the permission group was last updated.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * List represents a paginated list of resources.
     */
    export interface Permissions {
      /**
       * Resources in this page.
       */
      data: Array<Permissions.Data>;

      /**
       * Resource type identifier.
       */
      object: 'list';

      /**
       * PageInfo contains URL-based pagination metadata.
       */
      page_info: AgentsAPI.PageInfo;
    }

    export namespace Permissions {
      /**
       * Permission within a permission group.
       */
      export interface Data {
        /**
         * Permission ID.
         */
        id: string;

        /**
         * Permission code.
         */
        code: string;

        /**
         * When the permission was created.
         */
        created_at: string;

        /**
         * Description of what this permission controls.
         */
        description: string | null;

        /**
         * Permission group code.
         */
        group: string;

        /**
         * Display name.
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
    }
  }
}

export interface IdentityRetrievePermissionGroupsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

Identity.AccountUsers = AccountUsers;
Identity.Accounts = Accounts;
Identity.ChildAccounts = ChildAccounts;
Identity.Integrations = Integrations;
Identity.Me = Me;
Identity.Roles = Roles;
Identity.Users = Users;

export declare namespace Identity {
  export {
    type IdentityRetrieveResponse as IdentityRetrieveResponse,
    type IdentityRetrievePermissionGroupsResponse as IdentityRetrievePermissionGroupsResponse,
    type IdentityRetrievePermissionGroupsParams as IdentityRetrievePermissionGroupsParams,
  };

  export {
    AccountUsers as AccountUsers,
    type AccountUser as AccountUser,
    type NotificationPreferenceItem as NotificationPreferenceItem,
    type AccountUserRetrieveAccountUsersResponse as AccountUserRetrieveAccountUsersResponse,
    type AccountUserRetrieveParams as AccountUserRetrieveParams,
    type AccountUserUpdateParams as AccountUserUpdateParams,
    type AccountUserAccountUsersParams as AccountUserAccountUsersParams,
    type AccountUserRetrieveAccountUsersParams as AccountUserRetrieveAccountUsersParams,
  };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountRetrieveLogoResponse as AccountRetrieveLogoResponse,
    type AccountUpdatePhotoResponse as AccountUpdatePhotoResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    ChildAccounts as ChildAccounts,
    type ChildAccount as ChildAccount,
    type ChildAccountDeleteResponse as ChildAccountDeleteResponse,
    type ChildAccountRetrieveChildAccountsResponse as ChildAccountRetrieveChildAccountsResponse,
    type ChildAccountRetrieveChildAccountsParams as ChildAccountRetrieveChildAccountsParams,
  };

  export {
    Integrations as Integrations,
    type AccountIntegration as AccountIntegration,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
  };

  export { Me as Me };

  export {
    Roles as Roles,
    type Role as Role,
    type RoleListResponse as RoleListResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleRetrieveParams as RoleRetrieveParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export { Users as Users, type UserUpdateParams as UserUpdateParams };
}
