// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import {
  AccountUsageResponse,
  Accounts,
  AgentSpendInfo,
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
   * Creates a Stripe billing portal session for the account and returns the URL to
   * send an admin to.
   *
   * The portal is where the account manages payment methods, invoices, and its
   * subscription directly in Stripe. The account must already have a Stripe
   * customer; create one with Ensure Billing Customer first.
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
 * A short-lived link into the Stripe billing portal, where an account admin can
 * manage payment methods, invoices, and the subscription.
 */
export interface BillingPortalSessionResponse {
  /**
   * Resource type identifier.
   */
  object: 'billing_portal_session_response';

  /**
   * URL to send the admin to.
   *
   * The link is issued by Stripe for a single visit and expires; generate a new
   * session each time. On leaving the portal the admin is returned to the
   * dashboard's billing page.
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
