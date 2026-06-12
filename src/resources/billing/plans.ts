// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Billing and pricing plan operations.
 */
export class Plans extends APIResource {
  /**
   * Returns a paginated list of available pricing plans with their limits and
   * features.
   *
   * @example
   * ```ts
   * const listPricingPlan = await client.billing.plans.list();
   * ```
   */
  list(query: PlanListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListPricingPlan> {
    return this._client.get('/v1/billing/plans', { query, ...options });
  }

  /**
   * Returns a proration preview for switching the account to a different pricing
   * plan.
   *
   * @example
   * ```ts
   * const planChangeProration =
   *   await client.billing.plans.retrieveProration('example');
   * ```
   */
  retrieveProration(id: string, options?: RequestOptions): APIPromise<PlanChangeProration> {
    return this._client.get(path`/v1/billing/plans/${id}/proration`, options);
  }

  /**
   * Switches the account to a different pricing plan.
   *
   * Handles free-to-paid, paid-to-free, and paid-to-paid changes. Switches that owe
   * a prorated amount are charged immediately; use Preview Plan Change to see the
   * cost first.
   *
   * @example
   * ```ts
   * const switchPlanResponse =
   *   await client.billing.plans.switch('example');
   * ```
   */
  switch(id: string, options?: RequestOptions): APIPromise<SwitchPlanResponse> {
    return this._client.post(path`/v1/billing/plans/${id}/switch`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListPlanChangeLineItem {
  /**
   * Resources in this page.
   */
  data: Array<PlanChangeLineItem>;

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
export interface ListPlanLimit {
  /**
   * Resources in this page.
   */
  data: Array<PlanLimit>;

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
export interface ListPricingPlan {
  /**
   * Resources in this page.
   */
  data: Array<PricingPlan>;

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
 * Line item in a plan change cost preview.
 */
export interface PlanChangeLineItem {
  /**
   * Amount in cents (negative for credits).
   */
  amount: number;

  /**
   * Description of the line item.
   */
  description: string;

  /**
   * Resource type identifier.
   */
  object: 'plan_change_line_item';
}

/**
 * Cost preview for a plan change.
 */
export interface PlanChangeProration {
  /**
   * Formatted monthly bill amount for display.
   */
  formatted_monthly_bill_amount: string;

  /**
   * Formatted net amount for display (e.g., "$49.00").
   */
  formatted_net_amount: string;

  /**
   * Whether the amounts are locally estimated rather than calculated by Stripe.
   *
   * When `true`, the amounts are approximations and the final charge may differ.
   */
  is_estimate: boolean;

  /**
   * List represents a paginated list of resources.
   */
  line_items: ListPlanChangeLineItem | null;

  /**
   * Estimated monthly bill amount in cents after the change.
   */
  monthly_bill_amount: number;

  /**
   * Net amount due in cents for the plan change, after proration.
   *
   * A negative value indicates a credit to the account.
   */
  net_amount: number;

  /**
   * Resource type identifier.
   */
  object: 'plan_change_proration';
}

/**
 * Resource limit for a pricing plan.
 */
export interface PlanLimit {
  /**
   * Resource key this limit applies to (e.g., `seats_maximum`, `sandboxes_maximum`,
   * `invoices_maximum`, `batches_maximum`).
   */
  key: string;

  /**
   * Resource type identifier.
   */
  object: 'plan_limit';

  /**
   * Maximum allowed value.
   *
   * Null means unlimited.
   */
  value: number | null;
}

/**
 * Pricing plan available for purchase.
 */
export interface PricingPlan {
  /**
   * Plan ID.
   */
  id: string;

  /**
   * Call-to-action button text.
   */
  button_text: string;

  /**
   * Features to display on the pricing page.
   */
  display_features: Array<string>;

  /**
   * Display order for sorting on the pricing page.
   */
  display_order: number;

  /**
   * Name of the lower plan tier whose features this plan also includes, for an
   * "everything in X, plus..." callout on the pricing page.
   *
   * Null for the entry tier, which builds on no prior plan.
   */
  includes_previous_plan: string | null;

  /**
   * Whether this plan should be visually highlighted.
   */
  is_highlighted: boolean;

  /**
   * List represents a paginated list of resources.
   */
  limits: ListPlanLimit | null;

  /**
   * Display name of the plan.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'pricing_plan';

  /**
   * Tier of this pricing plan.
   */
  plan_type: 'free' | 'starter' | 'pro';

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
   * Minimum number of seats billed on this plan.
   *
   * When the account has fewer users than this minimum, the monthly bill is still
   * calculated using this seat count. Null means no minimum.
   */
  seat_minimum: number | null;
}

/**
 * Result of initiating a plan switch.
 */
export interface SwitchPlanResponse {
  /**
   * ID of the billing intent committed for the switch.
   *
   * Set to the committed billing intent ID for paid plan changes. Null for switches
   * to the free plan, where no intent is surfaced.
   */
  intent_id: string | null;

  /**
   * Resource type identifier.
   */
  object: 'switch_plan_response';

  /**
   * Whether the plan switch was initiated successfully.
   */
  success: boolean;
}

export interface PlanListParams {
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

export declare namespace Plans {
  export {
    type ListPlanChangeLineItem as ListPlanChangeLineItem,
    type ListPlanLimit as ListPlanLimit,
    type ListPricingPlan as ListPricingPlan,
    type PlanChangeLineItem as PlanChangeLineItem,
    type PlanChangeProration as PlanChangeProration,
    type PlanLimit as PlanLimit,
    type PricingPlan as PricingPlan,
    type SwitchPlanResponse as SwitchPlanResponse,
    type PlanListParams as PlanListParams,
  };
}
