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
   * Returns the pricing plans an account can sign up for, with their limits and
   * marketing copy.
   *
   * Only publicly listed plans that are currently in effect are returned, so
   * privately negotiated and retired plans never appear here.
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
   * Returns what it would cost to switch the account to a different pricing plan.
   *
   * The preview covers the prorated amount due now and the estimated recurring
   * monthly bill afterwards. Nothing is charged and the subscription is left
   * unchanged. Amounts are quoted by Stripe where possible; when Stripe cannot quote
   * the change, OpenMRP estimates them and flags the result with `is_estimate`. A
   * switch to the free plan always previews as zero.
   *
   * This endpoint requires the `admin` role type.
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
   * Switches the account to a different pricing plan, effective immediately.
   *
   * Free-to-paid, paid-to-free, and paid-to-paid changes are all handled: moving to
   * the free plan cancels the current subscription, while moving to a paid plan
   * subscribes the account at no fewer seats than that plan's seat minimum. A change
   * that owes a prorated amount is charged straight away to the account's payment
   * method on file, so use Preview Plan Change first to see the cost. Moving to a
   * paid plan requires the account to already have a Stripe customer and billing
   * profile.
   *
   * This endpoint requires the `admin` role type.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * Line item in a plan change cost preview.
 */
export interface PlanChangeLineItem {
  /**
   * Amount in cents this line contributes to the net total.
   *
   * Negative amounts are credits, such as unused time already paid for on the
   * current plan.
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
 * Cost preview for switching to a different pricing plan.
 *
 * Producing a preview neither changes the subscription nor charges anything.
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
   * Whether the amounts are locally estimated rather than quoted by Stripe.
   *
   * OpenMRP falls back to its own calculation when Stripe cannot quote the change,
   * usually because another billing change is still in flight. The amounts are then
   * approximations and the final charge may differ.
   */
  is_estimate: boolean;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  line_items: ListPlanChangeLineItem | null;

  /**
   * Estimated recurring monthly bill in cents once the change takes effect.
   *
   * Calculated from the target plan's price and the number of users on the account,
   * billed at no fewer seats than the plan's seat minimum.
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
   * Resource this limit applies to.
   *
   * - `seats_maximum`: users that can belong to the account.
   * - `sandboxes_maximum`: sandbox environments the account can have.
   * - `invoices_maximum`: invoices the account can issue per billing period.
   * - `batches_maximum`: production batches the account can create per billing
   *   period.
   */
  key: 'invoices_maximum' | 'batches_maximum' | 'seats_maximum' | 'sandboxes_maximum';

  /**
   * Resource type identifier.
   */
  object: 'plan_limit';

  /**
   * Maximum allowed value.
   *
   * Null means the plan places no limit on this resource.
   */
  value: number | null;
}

/**
 * A subscription plan an account can be billed on.
 */
export interface PricingPlan {
  /**
   * Plan ID.
   *
   * Pass this value when previewing or performing a plan switch.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
 * Result of a plan switch.
 */
export interface SwitchPlanResponse {
  /**
   * ID of the Stripe billing intent that was committed to apply the change.
   *
   * Returned when switching to a paid plan; absent when switching to the free plan.
   */
  intent_id: string | null;

  /**
   * Resource type identifier.
   */
  object: 'switch_plan_response';

  /**
   * Whether the plan switch was applied successfully.
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
