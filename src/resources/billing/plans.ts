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
   * Switches the account to a different pricing plan, handling free-to-paid,
   * paid-to-free, and paid-to-paid scenarios.
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
   * Net amount in cents.
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
   * Resource key this limit applies to (e.g., "sandboxes", "seats", "invoices").
   */
  key: string;

  /**
   * Resource type identifier.
   */
  object: 'plan_limit';

  /**
   * Maximum allowed value. Null means unlimited.
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
   * Name of the previous plan tier this plan includes.
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
   * Plan type code.
   */
  plan_type: 'free' | 'starter' | 'pro';

  /**
   * Flat monthly price in dollars, if applicable.
   */
  price_per_month: number | null;

  /**
   * Price per seat per month in dollars.
   */
  price_per_seat: number;

  /**
   * Minimum seats required for this plan.
   */
  seat_minimum: number | null;
}

/**
 * Result of initiating a plan switch.
 */
export interface SwitchPlanResponse {
  /**
   * Billing intent ID, if a billing intent was created.
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
