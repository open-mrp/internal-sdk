// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TenancyAPI from './tenancy';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Address,
  CustomerAccountSummary,
  Geolocation,
  ListCustomerAccountSummary,
  ListTenancyOtherAccount,
  ListTenancySandboxAccount,
  Owner,
  PageInfo,
  Role,
  SwitchAccountRequest,
  Tenancy,
  TenancyAccountPlan,
  TenancyCurrentAccount,
  TenancyOtherAccount,
  TenancyOwnerAccount,
  TenancyPendingRegistration,
  TenancyResource,
  TenancyRetrieveCustomerAccountsParams,
  TenancySandboxAccount,
  TenancyUpdateParams,
} from './tenancy';
import * as InventoryChangeLogsAPI from '../../operations/inventory-change-logs/inventory-change-logs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage the authenticated user's tenancy context, including account switching and customer account access.
 */
export class Me extends APIResource {
  tenancy: TenancyAPI.TenancyResource = new TenancyAPI.TenancyResource(this._client);

  /**
   * Returns the authenticated user's profile information.
   *
   * @example
   * ```ts
   * const user = await client.identity.me.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<InventoryChangeLogsAPI.User> {
    return this._client.get('/v1/identity/me', options);
  }
}

/**
 * User resource.
 */
export interface User {
  /**
   * User ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * Email verified timestamp, null if unverified.
   */
  email_verified_at: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
}

Me.TenancyResource = TenancyResource;

export declare namespace Me {
  export { type User as User };

  export {
    TenancyResource as TenancyResource,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CustomerAccountSummary as CustomerAccountSummary,
    type Geolocation as Geolocation,
    type ListCustomerAccountSummary as ListCustomerAccountSummary,
    type ListTenancyOtherAccount as ListTenancyOtherAccount,
    type ListTenancySandboxAccount as ListTenancySandboxAccount,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Role as Role,
    type SwitchAccountRequest as SwitchAccountRequest,
    type Tenancy as Tenancy,
    type TenancyAccountPlan as TenancyAccountPlan,
    type TenancyCurrentAccount as TenancyCurrentAccount,
    type TenancyOtherAccount as TenancyOtherAccount,
    type TenancyOwnerAccount as TenancyOwnerAccount,
    type TenancyPendingRegistration as TenancyPendingRegistration,
    type TenancySandboxAccount as TenancySandboxAccount,
    type TenancyUpdateParams as TenancyUpdateParams,
    type TenancyRetrieveCustomerAccountsParams as TenancyRetrieveCustomerAccountsParams,
  };
}
