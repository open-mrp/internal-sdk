// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class Accounts extends APIResource {
  /**
   * Ensures a Stripe billing customer exists for the account, creating one if
   * necessary.
   *
   * A new customer is created from the account's name and the email address of one
   * of its admin users. Calling this repeatedly is safe: an account that already has
   * a Stripe customer gets that customer back untouched.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const ensureBillingCustomerResponse =
   *   await client.billing.accounts.update();
   * ```
   */
  update(options?: RequestOptions): APIPromise<EnsureBillingCustomerResponse> {
    return this._client.put('/v1/billing/accounts', options);
  }

  /**
   * Returns the account's resource usage against its plan limits, along with
   * subscription status, plan pricing, and estimated agent spending.
   *
   * Seats and sandboxes are current totals, while invoices and batches are counted
   * from the start of the current billing period. The plan name and base fee come
   * from the pricing plan configured in Stripe, so they can differ from the name and
   * price the same plan advertises on the pricing page.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const accountUsageResponse =
   *   await client.billing.accounts.retrieveUsage();
   * ```
   */
  retrieveUsage(options?: RequestOptions): APIPromise<AccountUsageResponse> {
    return this._client.get('/v1/billing/accounts/usage', options);
  }
}

/**
 * Account usage metrics across all resource types.
 *
 * Per-period counts are measured from the start of the account's current billing
 * period, which falls back to the start of the calendar month when the account has
 * no active subscription.
 */
export interface AccountUsageResponse {
  /**
   * Estimated agent LLM spending for the current billing month.
   */
  agent_spend: AgentSpendInfo | null;

  /**
   * Flat base fee in cents charged each `base_fee_interval`, resolved live from
   * Stripe.
   *
   * `0` when the plan is priced per seat rather than a flat base fee.
   */
  base_fee_cents: number;

  /**
   * Interval the base fee recurs on (e.g. `month`).
   *
   * Empty when there is no base fee.
   */
  base_fee_interval: string;

  /**
   * A usage metric with its current value and any applicable limit.
   */
  batches: UsageItem;

  /**
   * A usage metric with its current value and any applicable limit.
   */
  invoices: UsageItem;

  /**
   * Resource type identifier.
   */
  object: 'account_usage_response';

  /**
   * Display name of the plan the account is actually billed on, resolved live from
   * Stripe (e.g. `Founder`).
   *
   * Empty when the account has no Stripe pricing plan.
   */
  plan_name: string;

  /**
   * A usage metric with its current value and any applicable limit.
   */
  sandboxes: UsageItem;

  /**
   * A usage metric with its current value and any applicable limit.
   */
  seats: UsageItem;

  /**
   * Subscription status information.
   */
  subscription: SubscriptionInfo | null;
}

/**
 * Estimated agent LLM spending for the current billing month.
 */
export interface AgentSpendInfo {
  /**
   * Ceiling in cents on estimated agent spending per billing month.
   *
   * Null means agent spending is uncapped.
   */
  cap_cents: number | null;

  /**
   * Estimated spend in cents for the current billing month.
   *
   * Priced at the same token rates the account is billed at, and cached briefly, so
   * it can trail live usage by a short interval.
   */
  estimated_spend_cents: number;

  /**
   * Resource type identifier.
   */
  object: 'agent_spend_info';
}

/**
 * Result of ensuring a billing customer exists.
 */
export interface EnsureBillingCustomerResponse {
  /**
   * ID of the account's Stripe billing profile.
   *
   * The billing profile and its billing cadence are set up when the account is first
   * prepared for paid billing, not by creating the Stripe customer.
   */
  billing_profile_id: string | null;

  /**
   * Whether a new Stripe customer was created by this call.
   *
   * `false` means the account already had a Stripe customer, which was returned
   * instead.
   */
  created: boolean;

  /**
   * Resource type identifier.
   */
  object: 'ensure_billing_customer_response';

  /**
   * Stripe customer ID.
   */
  stripe_customer_id: string;
}

/**
 * Subscription status information.
 */
export interface SubscriptionInfo {
  /**
   * Payment collection status of the subscription.
   *
   * Typically one of:
   *
   * - `current`: payments are being collected normally.
   * - `paused`: payment collection is temporarily suspended.
   * - `awaiting_customer_action`: a payment requires action from the customer (e.g.,
   *   updating a payment method).
   */
  collection_status: string;

  /**
   * Resource type identifier.
   */
  object: 'subscription_info';

  /**
   * Whether the subscription is actively being serviced.
   *
   * Typically one of:
   *
   * - `active`: the subscription is in good standing.
   * - `paused`: servicing is temporarily suspended.
   * - `canceled`: the subscription has been canceled.
   */
  servicing_status: string;
}

/**
 * A usage metric with its current value and any applicable limit.
 */
export interface UsageItem {
  /**
   * Current usage count.
   */
  current: number;

  /**
   * Maximum allowed usage.
   *
   * Null means unlimited.
   */
  limit: number | null;

  /**
   * Resource type identifier.
   */
  object: 'usage_item';
}

export declare namespace Accounts {
  export {
    type AccountUsageResponse as AccountUsageResponse,
    type AgentSpendInfo as AgentSpendInfo,
    type EnsureBillingCustomerResponse as EnsureBillingCustomerResponse,
    type SubscriptionInfo as SubscriptionInfo,
    type UsageItem as UsageItem,
  };
}
