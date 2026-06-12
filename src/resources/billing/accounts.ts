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
   * Returns resource usage for the account, including seats, invoices, batches,
   * sandboxes, and subscription details.
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
 */
export interface AccountUsageResponse {
  /**
   * Estimated agent LLM spending for the current billing month.
   */
  agent_spend: AgentSpendInfo | null;

  /**
   * Detailed agent token usage breakdown.
   */
  agent_token_detail: AgentTokenDetail | null;

  /**
   * Usage metric with current value and optional limit.
   */
  batches: UsageItem;

  /**
   * Usage metric with current value and optional limit.
   */
  invoices: UsageItem;

  /**
   * Resource type identifier.
   */
  object: 'account_usage_response';

  /**
   * Usage metric with current value and optional limit.
   */
  sandboxes: UsageItem;

  /**
   * Usage metric with current value and optional limit.
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
   * Monthly spending cap in cents.
   *
   * Null means no cap.
   */
  cap_cents: number | null;

  /**
   * Estimated spend in cents for the current billing month.
   */
  estimated_spend_cents: number;

  /**
   * Resource type identifier.
   */
  object: 'agent_spend_info';
}

/**
 * Detailed agent token usage breakdown.
 */
export interface AgentTokenDetail {
  /**
   * Additional tokens purchased via token packs.
   */
  additional_tokens_purchased: number;

  /**
   * When the current billing period ends (ISO 8601).
   */
  billing_period_end: string;

  /**
   * Estimated cost in dollars for the current billing period.
   *
   * This is a rough estimate for display purposes; the actual billed amount is
   * calculated by the billing provider and may differ.
   */
  current_period_cost: number;

  /**
   * Tokens included in the plan.
   */
  included_tokens: number;

  /**
   * Input tokens used in the current billing period.
   */
  input_tokens: number;

  /**
   * Resource type identifier.
   */
  object: 'agent_token_detail';

  /**
   * Output tokens used in the current billing period.
   */
  output_tokens: number;

  /**
   * Cost in dollars per million tokens for usage beyond the available token balance.
   */
  overage_cost_per_million_tokens: number;

  /**
   * Total tokens available (included + purchased).
   */
  total_available: number;

  /**
   * Tokens used in the current billing period.
   */
  used_tokens: number;
}

/**
 * Result of ensuring a billing customer exists.
 */
export interface EnsureBillingCustomerResponse {
  /**
   * Billing profile ID, if one was created.
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
 * Usage metric with current value and optional limit.
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
    type AgentTokenDetail as AgentTokenDetail,
    type EnsureBillingCustomerResponse as EnsureBillingCustomerResponse,
    type SubscriptionInfo as SubscriptionInfo,
    type UsageItem as UsageItem,
  };
}
