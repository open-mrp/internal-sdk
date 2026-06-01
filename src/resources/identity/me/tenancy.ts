// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../../operations/edi-runs';
import * as ActionsAPI from '../../operations/shipments/actions';
import * as LinesAPI from '../../operations/shipments/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage the authenticated user's tenancy context, including account switching and customer account access.
 */
export class TenancyResource extends APIResource {
  /**
   * Switches the authenticated user's active account and returns the updated tenancy
   * context.
   *
   * @example
   * ```ts
   * const tenancy = await client.identity.me.tenancy.update({
   *   account_id: 'ac_01148680966698341a9c0976db',
   * });
   * ```
   */
  update(body: TenancyUpdateParams, options?: RequestOptions): APIPromise<Tenancy> {
    return this._client.put('/v1/identity/me/tenancy', { body, ...options });
  }

  /**
   * Returns the authenticated user's tenancy context.
   *
   * @example
   * ```ts
   * const tenancy = await client.identity.me.tenancy.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<Tenancy> {
    return this._client.get('/v1/identity/me/tenancy', options);
  }

  /**
   * Returns a paginated list of customer accounts accessible to the authenticated
   * user under the specified vendor account.
   *
   * @example
   * ```ts
   * const listCustomerAccountSummary =
   *   await client.identity.me.tenancy.retrieveCustomerAccounts(
   *     'example',
   *   );
   * ```
   */
  retrieveCustomerAccounts(
    vendorAccountID: string,
    query: TenancyRetrieveCustomerAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCustomerAccountSummary> {
    return this._client.get(path`/v1/identity/me/tenancy/customer-accounts/${vendorAccountID}`, {
      query,
      ...options,
    });
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
 * Minimal customer account summary.
 */
export interface CustomerAccountSummary {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';
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
export interface ListCustomerAccountSummary {
  /**
   * Resources in this page.
   */
  data: Array<CustomerAccountSummary>;

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
 * List represents a paginated list of resources.
 */
export interface ListTenancyOtherAccount {
  /**
   * Resources in this page.
   */
  data: Array<TenancyOtherAccount>;

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
 * List represents a paginated list of resources.
 */
export interface ListTenancySandboxAccount {
  /**
   * Resources in this page.
   */
  data: Array<TenancySandboxAccount>;

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
 * Request to switch the authenticated user's active account.
 */
export interface SwitchAccountRequest {
  /**
   * Account ID.
   */
  account_id: string;
}

/**
 * Authenticated user's tenancy context.
 */
export interface Tenancy {
  /**
   * Account the user is currently operating in.
   */
  current_account: TenancyCurrentAccount | null;

  /**
   * Resource type identifier.
   */
  object: 'tenancy';

  /**
   * List represents a paginated list of resources.
   */
  other_accounts: ListTenancyOtherAccount | null;

  /**
   * Owner account for the user's tenancy.
   */
  owner_account: TenancyOwnerAccount | null;

  /**
   * TenancyPendingRegistration represents an in-progress registration session for
   * the authenticated user.
   */
  pending_registration: TenancyPendingRegistration | null;

  /**
   * List represents a paginated list of resources.
   */
  sandboxes: ListTenancySandboxAccount | null;
}

/**
 * TenancyAccountPlan is the resolved plan for the current account.
 */
export interface TenancyAccountPlan {
  /**
   * Feature flags.
   */
  features: { [key: string]: boolean };

  /**
   * Resource limits; null value means unlimited.
   */
  limits: { [key: string]: number };

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_plan';

  /**
   * Plan type code.
   */
  plan_type_code: string;

  /**
   * Flat monthly price, if applicable.
   */
  price_per_month: number | null;

  /**
   * Price per seat per month.
   */
  price_per_seat: number;

  /**
   * Minimum seats required for this plan.
   */
  seat_minimum: number | null;

  /**
   * Plan ID.
   */
  type_id: string;

  /**
   * Plan version.
   */
  version: number;
}

/**
 * Account the user is currently operating in.
 */
export interface TenancyCurrentAccount {
  /**
   * Account ID.
   */
  id: string;

  /**
   * TenancyAccountPlan is the resolved plan for the current account.
   */
  account_plan: TenancyAccountPlan | null;

  /**
   * Internal Stripe customer ID for this account.
   */
  internal_stripe_customer_id: string | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Onboarding status.
   */
  onboarding_status: string;

  /**
   * Plan code.
   */
  plan: string;

  /**
   * Role resource.
   */
  role: ActionsAPI.Role | null;

  /**
   * Account slug.
   */
  slug: string | null;

  /**
   * Account type.
   */
  type: string;
}

/**
 * Additional account the user has access to.
 */
export interface TenancyOtherAccount {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Account type.
   */
  type: string;
}

/**
 * Owner account for the user's tenancy.
 */
export interface TenancyOwnerAccount {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';
}

/**
 * TenancyPendingRegistration represents an in-progress registration session for
 * the authenticated user.
 */
export interface TenancyPendingRegistration {
  /**
   * Session creation timestamp.
   */
  created_at: string;

  /**
   * Plan code selected during registration.
   */
  plan_code: string;

  /**
   * Registration session ID.
   */
  session_id: string;

  /**
   * Current step in the registration flow.
   */
  step: string;
}

/**
 * Sandbox account available to the user.
 */
export interface TenancySandboxAccount {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';
}

export interface TenancyUpdateParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TenancyRetrieveCustomerAccountsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace TenancyResource {
  export {
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
