// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as RolesAPI from '../roles';
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
   * const tenancy = await client.identity.me.tenancy.create({
   *   account_id: 'ac_01gf7a8200eaj8fke1xvw4h50x',
   * });
   * ```
   */
  create(body: TenancyCreateParams, options?: RequestOptions): APIPromise<Tenancy> {
    return this._client.put('/v1/identity/me/tenancy', { body, ...options });
  }

  /**
   * Returns a paginated list of customer accounts accessible to the authenticated
   * user under the specified vendor account.
   *
   * @example
   * ```ts
   * const tenancy = await client.identity.me.tenancy.retrieve(
   *   'vendor_account_id',
   * );
   * ```
   */
  retrieve(
    vendorAccountID: string,
    query: TenancyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenancyRetrieveResponse> {
    return this._client.get(path`/v1/identity/me/tenancy/customer-accounts/${vendorAccountID}`, {
      query,
      ...options,
    });
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
}

/**
 * Authenticated user's tenancy context.
 */
export interface Tenancy {
  /**
   * Account the user is currently operating in.
   */
  current_account: Tenancy.CurrentAccount | null;

  /**
   * Resource type identifier.
   */
  object: 'tenancy';

  /**
   * List represents a paginated list of resources.
   */
  other_accounts: Tenancy.OtherAccounts | null;

  /**
   * Owner account for the user's tenancy.
   */
  owner_account: Tenancy.OwnerAccount | null;

  /**
   * TenancyPendingRegistration represents an in-progress registration session for
   * the authenticated user.
   */
  pending_registration: Tenancy.PendingRegistration | null;

  /**
   * List represents a paginated list of resources.
   */
  sandboxes: Tenancy.Sandboxes | null;
}

export namespace Tenancy {
  /**
   * Account the user is currently operating in.
   */
  export interface CurrentAccount {
    /**
     * Account ID.
     */
    id: string;

    /**
     * TenancyAccountPlan is the resolved plan for the current account.
     */
    account_plan: CurrentAccount.AccountPlan | null;

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
    role: RolesAPI.Role | null;

    /**
     * Account slug.
     */
    slug: string | null;

    /**
     * Account type.
     */
    type: string;
  }

  export namespace CurrentAccount {
    /**
     * TenancyAccountPlan is the resolved plan for the current account.
     */
    export interface AccountPlan {
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
  }

  /**
   * List represents a paginated list of resources.
   */
  export interface OtherAccounts {
    /**
     * Resources in this page.
     */
    data: Array<OtherAccounts.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace OtherAccounts {
    /**
     * Additional account the user has access to.
     */
    export interface Data {
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
  }

  /**
   * Owner account for the user's tenancy.
   */
  export interface OwnerAccount {
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
  export interface PendingRegistration {
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
   * List represents a paginated list of resources.
   */
  export interface Sandboxes {
    /**
     * Resources in this page.
     */
    data: Array<Sandboxes.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Sandboxes {
    /**
     * Sandbox account available to the user.
     */
    export interface Data {
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
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface TenancyRetrieveResponse {
  /**
   * Resources in this page.
   */
  data: Array<TenancyRetrieveResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace TenancyRetrieveResponse {
  /**
   * Minimal customer account summary.
   */
  export interface Data {
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
}

export interface TenancyCreateParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TenancyRetrieveParams {
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
    type Tenancy as Tenancy,
    type TenancyRetrieveResponse as TenancyRetrieveResponse,
    type TenancyCreateParams as TenancyCreateParams,
    type TenancyRetrieveParams as TenancyRetrieveParams,
  };
}
