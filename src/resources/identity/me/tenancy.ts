// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
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
   * The user must have access to the requested account; switching to an account
   * where the user is disabled or removed, or to a suspended or deactivated account,
   * is rejected. Switching into a sandbox is also rejected when the user is disabled
   * or removed on the production account that owns it.
   *
   * A successful switch marks the account as the user's most recently used one,
   * which Get Tenancy takes into account when it picks a current account for a
   * request that does not target one.
   *
   * @example
   * ```ts
   * const tenancy = await client.identity.me.tenancy.update({
   *   account_id: 'ac_ykxoradjoeb3',
   * });
   * ```
   */
  update(body: TenancyUpdateParams, options?: RequestOptions): APIPromise<Tenancy> {
    return this._client.put('/v1/identity/me/tenancy', { body, ...options });
  }

  /**
   * Returns the authenticated user's tenancy context.
   *
   * The tenancy describes which account the user is currently acting in and every
   * other account they can switch to, including sandboxes. It can be called before
   * an account is selected, such as immediately after authentication; when the
   * request does not target an account, one is chosen automatically, preferring paid
   * accounts and then the account the user most recently used.
   *
   * Accounts where the user has been disabled or removed are left out, and sandboxes
   * are only listed when the current account is a production account and the user is
   * an administrator of it. A user who belongs to no usable account gets an empty
   * tenancy, along with any registration they started but never finished.
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
   * Returns the customer accounts of the given seller account that the authenticated
   * user belongs to.
   *
   * This is how a buyer with access to more than one of a seller's customer accounts
   * chooses which one to act as. Only accounts where the user's membership is still
   * active are returned. The paging and search parameters are ignored: every match
   * comes back in a single page.
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
 * A customer account under a vendor that the authenticated user is able to act on
 * behalf of in that vendor's customer portal.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * Request to switch the authenticated user's active account.
 */
export interface SwitchAccountRequest {
  /**
   * ID of the account to switch to.
   */
  account_id: string;
}

/**
 * The authenticated user's tenancy context: which account they are currently
 * acting in and every other account they can switch to.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  other_accounts: ListTenancyOtherAccount | null;

  /**
   * The production account that the current account belongs to.
   */
  owner_account: TenancyOwnerAccount | null;

  /**
   * An in-progress registration session, present only partway through signup before
   * an account exists.
   */
  pending_registration: TenancyPendingRegistration | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  sandboxes: ListTenancySandboxAccount | null;
}

/**
 * The resolved subscription plan for the current account, including its limits and
 * features.
 */
export interface TenancyAccountPlan {
  /**
   * Which capabilities this plan unlocks, keyed by feature code (for example
   * `customer_portal`).
   */
  features: { [key: string]: boolean };

  /**
   * Ceilings this plan imposes, keyed by limit code (for example `seats_maximum`).
   *
   * A `null` value means that resource is unlimited on this plan.
   */
  limits: { [key: string]: number };

  /**
   * Display name of the plan, as shown in billing.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_plan';

  /**
   * Stable code for the plan tier.
   */
  plan_type_code: 'free' | 'starter' | 'pro' | 'enterprise' | 'enterprise_template';

  /**
   * Per-seat price override in dollars used in place of `price_per_seat` when set.
   *
   * The monthly bill multiplies this by the number of seats (at least
   * `seat_minimum`). `null` or `0` falls back to `price_per_seat`.
   */
  price_per_month: number | null;

  /**
   * Price per seat per month in dollars.
   */
  price_per_seat: number;

  /**
   * Fewest seats the account is billed for, regardless of how many users it actually
   * has.
   */
  seat_minimum: number | null;

  /**
   * Identifier of the plan definition the account is subscribed to.
   */
  type_id: string;

  /**
   * Revision of the plan definition the account is on.
   *
   * Plans are versioned so existing subscribers keep the pricing, limits, and
   * features they signed up under when a newer version of the same plan is
   * published.
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
   * The resolved subscription plan for the current account, including its limits and
   * features.
   */
  account_plan: TenancyAccountPlan | null;

  /**
   * ID of the authenticated user's membership record within this account.
   */
  account_user_id: string;

  /**
   * The Stripe customer that OpenMRP bills this account's own subscription and usage
   * against.
   *
   * This is not the account's own Stripe customer for charging their customers.
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
   * How far the account has progressed through onboarding.
   *
   * The account is fully set up and usable once this is `active`.
   */
  onboarding_status: 'unclaimed' | 'active' | 'suspended' | 'deactivated';

  /**
   * Code of the account's subscription plan.
   *
   * The same code appears as `account_plan.plan_type_code`, alongside the plan's
   * resolved limits and features.
   */
  plan: 'free' | 'starter' | 'pro' | 'enterprise' | 'enterprise_template';

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: APIKeysAPI.Role | null;

  /**
   * The slug this account's customer portal is addressed by.
   *
   * Absent until the account enables its customer portal.
   */
  slug: string | null;

  /**
   * Account type.
   *
   * - `company`: a standard production account.
   * - `sandbox`: an isolated testing account.
   */
  type: 'company' | 'sandbox';
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
   *
   * - `company`: a standard production account.
   * - `sandbox`: an isolated testing account.
   */
  type: 'company' | 'sandbox';
}

/**
 * The production account that the current account belongs to.
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
 * An in-progress registration session, present only partway through signup before
 * an account exists.
 */
export interface TenancyPendingRegistration {
  /**
   * Session creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'tenancy_pending_registration';

  /**
   * Plan code selected during registration.
   */
  plan_code: 'free' | 'starter' | 'pro' | 'enterprise' | 'enterprise_template';

  /**
   * Registration session ID.
   */
  session_id: string;

  /**
   * How far the signup has progressed, so the flow can be resumed where the user
   * left off.
   *
   * Steps run `verification`, `user_details`, `account_details`, `review`,
   * `payment`, then `completed`.
   */
  step: 'verification' | 'user_details' | 'account_details' | 'review' | 'payment' | 'completed';
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
   * ID of the account to switch to.
   */
  account_id: string;
}

export interface TenancyRetrieveCustomerAccountsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

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

export declare namespace TenancyResource {
  export {
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
