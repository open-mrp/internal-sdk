// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from '../../auth/auth';
import * as TenancyAPI from './tenancy';
import {
  CustomerAccountSummary,
  ListCustomerAccountSummary,
  ListTenancyOtherAccount,
  ListTenancySandboxAccount,
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
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Manage the authenticated user's tenancy context, including account switching and customer account access.
 */
export class Me extends APIResource {
  tenancy: TenancyAPI.TenancyResource = new TenancyAPI.TenancyResource(this._client);

  /**
   * Returns the profile of the user the request is authenticated as.
   *
   * This can be called before an account is selected, such as immediately after
   * authentication. Unlike elsewhere, the `image_url` returned here is a short-lived
   * signed link to the image itself, and it is only produced when the request
   * targets an account; without one, no `image_url` is returned even for a user who
   * has uploaded a photo.
   *
   * @example
   * ```ts
   * const user = await client.identity.me.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AuthAPI.User> {
    return this._client.get('/v1/identity/me', options);
  }
}

Me.TenancyResource = TenancyResource;

export declare namespace Me {
  export {
    TenancyResource as TenancyResource,
    type CustomerAccountSummary as CustomerAccountSummary,
    type ListCustomerAccountSummary as ListCustomerAccountSummary,
    type ListTenancyOtherAccount as ListTenancyOtherAccount,
    type ListTenancySandboxAccount as ListTenancySandboxAccount,
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
