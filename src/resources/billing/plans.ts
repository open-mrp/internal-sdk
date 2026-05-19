// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
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
   * const plans = await client.billing.plans.list();
   * ```
   */
  list(
    query: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanListResponse> {
    return this._client.get('/v1/billing/plans', { query, ...options });
  }

  /**
   * Returns a proration preview for switching the account to a different pricing
   * plan.
   *
   * @example
   * ```ts
   * const response =
   *   await client.billing.plans.retrieveProration('id');
   * ```
   */
  retrieveProration(id: string, options?: RequestOptions): APIPromise<PlanRetrieveProrationResponse> {
    return this._client.get(path`/v1/billing/plans/${id}/proration`, options);
  }

  /**
   * Switches the account to a different pricing plan, handling free-to-paid,
   * paid-to-free, and paid-to-paid scenarios.
   *
   * @example
   * ```ts
   * const response = await client.billing.plans.switch('id');
   * ```
   */
  switch(id: string, options?: RequestOptions): APIPromise<PlanSwitchResponse> {
    return this._client.post(path`/v1/billing/plans/${id}/switch`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface PlanListResponse {
  /**
   * Resources in this page.
   */
  data: Array<PlanListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace PlanListResponse {
  /**
   * Pricing plan available for purchase.
   */
  export interface Data {
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
    limits: Data.Limits | null;

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

  export namespace Data {
    /**
     * List represents a paginated list of resources.
     */
    export interface Limits {
      /**
       * Resources in this page.
       */
      data: Array<Limits.Data>;

      /**
       * Resource type identifier.
       */
      object: 'list';

      /**
       * PageInfo contains URL-based pagination metadata.
       */
      page_info: AgentsAPI.PageInfo;
    }

    export namespace Limits {
      /**
       * Resource limit for a pricing plan.
       */
      export interface Data {
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
    }
  }
}

/**
 * Cost preview for a plan change.
 */
export interface PlanRetrieveProrationResponse {
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
  line_items: PlanRetrieveProrationResponse.LineItems | null;

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

export namespace PlanRetrieveProrationResponse {
  /**
   * List represents a paginated list of resources.
   */
  export interface LineItems {
    /**
     * Resources in this page.
     */
    data: Array<LineItems.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace LineItems {
    /**
     * Line item in a plan change cost preview.
     */
    export interface Data {
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
  }
}

/**
 * Result of initiating a plan switch.
 */
export interface PlanSwitchResponse {
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
    type PlanListResponse as PlanListResponse,
    type PlanRetrieveProrationResponse as PlanRetrieveProrationResponse,
    type PlanSwitchResponse as PlanSwitchResponse,
    type PlanListParams as PlanListParams,
  };
}
