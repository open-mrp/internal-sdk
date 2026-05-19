// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class Accounts extends APIResource {
  /**
   * Ensures a Stripe billing customer exists for the account.
   *
   * @example
   * ```ts
   * const account = await client.billing.accounts.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.put('/v1/billing/accounts', options);
  }

  /**
   * Returns resource usage for the account, including seats, invoices, batches,
   * sandboxes, and subscription details.
   *
   * @example
   * ```ts
   * const response =
   *   await client.billing.accounts.retrieveUsage();
   * ```
   */
  retrieveUsage(options?: RequestOptions): APIPromise<AccountRetrieveUsageResponse> {
    return this._client.get('/v1/billing/accounts/usage', options);
  }
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
   * Maximum allowed usage. Null means unlimited.
   */
  limit: number | null;

  /**
   * Resource type identifier.
   */
  object: 'usage_item';
}

/**
 * Result of ensuring a billing customer exists.
 */
export interface AccountCreateResponse {
  /**
   * Billing profile ID, if one was created.
   */
  billing_profile_id: string | null;

  /**
   * Whether a Stripe customer was created.
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
 * Account usage metrics across all resource types.
 */
export interface AccountRetrieveUsageResponse {
  /**
   * Estimated agent LLM spending for the current billing month.
   */
  agent_spend: AccountRetrieveUsageResponse.AgentSpend | null;

  /**
   * Detailed agent token usage breakdown.
   */
  agent_token_detail: AccountRetrieveUsageResponse.AgentTokenDetail | null;

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
  subscription: AccountRetrieveUsageResponse.Subscription | null;
}

export namespace AccountRetrieveUsageResponse {
  /**
   * Estimated agent LLM spending for the current billing month.
   */
  export interface AgentSpend {
    /**
     * Monthly spending cap in cents. Null means no cap.
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
     * Cost per million tokens for overage usage.
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
   * Subscription status information.
   */
  export interface Subscription {
    /**
     * Collection status (e.g., "current", "paused").
     */
    collection_status: string;

    /**
     * Resource type identifier.
     */
    object: 'subscription_info';

    /**
     * Servicing status of the subscription (e.g., "active", "canceled").
     */
    servicing_status: string;
  }
}

export declare namespace Accounts {
  export {
    type UsageItem as UsageItem,
    type AccountCreateResponse as AccountCreateResponse,
    type AccountRetrieveUsageResponse as AccountRetrieveUsageResponse,
  };
}
