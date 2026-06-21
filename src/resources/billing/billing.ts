// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountUsageResponse,
  Accounts,
  AgentSpendInfo,
  AgentTokenDetail,
  EnsureBillingCustomerResponse,
  SubscriptionInfo,
  UsageItem,
} from './accounts';
import * as ActionsAPI from './actions';
import { Actions, EnterpriseInquiry } from './actions';
import * as PlansAPI from './plans';
import {
  ListPlanChangeLineItem,
  ListPlanLimit,
  ListPricingPlan,
  PlanChangeLineItem,
  PlanChangeProration,
  PlanLimit,
  PlanListParams,
  Plans,
  PricingPlan,
  SwitchPlanResponse,
} from './plans';
import * as SpendingCapAPI from './spending-cap';
import {
  SetSpendingCapRequest,
  SpendingCap,
  SpendingCapResponse,
  SpendingCapUpdateParams,
} from './spending-cap';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class Billing extends APIResource {
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  spendingCap: SpendingCapAPI.SpendingCap = new SpendingCapAPI.SpendingCap(this._client);

  /**
   * Creates a Stripe billing portal session and returns a redirect URL for managing
   * subscriptions.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const billingPortalSessionResponse =
   *   await client.billing.portalSessions();
   * ```
   */
  portalSessions(options?: RequestOptions): APIPromise<BillingPortalSessionResponse> {
    return this._client.post('/v1/billing/portal-sessions', options);
  }
}

/**
 * Stripe billing portal session.
 */
export interface BillingPortalSessionResponse {
  /**
   * Resource type identifier.
   */
  object: 'billing_portal_session_response';

  /**
   * Redirect URL for the Stripe billing portal.
   */
  url: string;
}

Billing.Plans = Plans;
Billing.Accounts = Accounts;
Billing.Actions = Actions;
Billing.SpendingCap = SpendingCap;

export declare namespace Billing {
  export { type BillingPortalSessionResponse as BillingPortalSessionResponse };

  export {
    Plans as Plans,
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

  export {
    Accounts as Accounts,
    type AccountUsageResponse as AccountUsageResponse,
    type AgentSpendInfo as AgentSpendInfo,
    type AgentTokenDetail as AgentTokenDetail,
    type EnsureBillingCustomerResponse as EnsureBillingCustomerResponse,
    type SubscriptionInfo as SubscriptionInfo,
    type UsageItem as UsageItem,
  };

  export { Actions as Actions, type EnterpriseInquiry as EnterpriseInquiry };

  export {
    SpendingCap as SpendingCap,
    type SetSpendingCapRequest as SetSpendingCapRequest,
    type SpendingCapResponse as SpendingCapResponse,
    type SpendingCapUpdateParams as SpendingCapUpdateParams,
  };
}
