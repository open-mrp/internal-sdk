// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import { AccountCreateResponse, AccountRetrieveUsageResponse, Accounts, UsageItem } from './accounts';
import * as ActionsAPI from './actions';
import { ActionRequestEnterpriseResponse, Actions } from './actions';
import * as PlansAPI from './plans';
import {
  PlanListParams,
  PlanListResponse,
  PlanRetrieveProrationResponse,
  PlanSwitchResponse,
  Plans,
} from './plans';
import * as SpendingCapAPI from './spending-cap';
import { SpendingCap, SpendingCapResponse, SpendingCapUpdateSpendingCapParams } from './spending-cap';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class Billing extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  spendingCap: SpendingCapAPI.SpendingCap = new SpendingCapAPI.SpendingCap(this._client);

  /**
   * Creates a Stripe billing portal session and returns a redirect URL for managing
   * subscriptions.
   *
   * @example
   * ```ts
   * const response = await client.billing.portalSessions();
   * ```
   */
  portalSessions(options?: RequestOptions): APIPromise<BillingPortalSessionsResponse> {
    return this._client.post('/v1/billing/portal-sessions', options);
  }
}

/**
 * Stripe billing portal session.
 */
export interface BillingPortalSessionsResponse {
  /**
   * Resource type identifier.
   */
  object: 'billing_portal_session_response';

  /**
   * Redirect URL for the Stripe billing portal.
   */
  url: string;
}

Billing.Accounts = Accounts;
Billing.Actions = Actions;
Billing.Plans = Plans;
Billing.SpendingCap = SpendingCap;

export declare namespace Billing {
  export { type BillingPortalSessionsResponse as BillingPortalSessionsResponse };

  export {
    Accounts as Accounts,
    type UsageItem as UsageItem,
    type AccountCreateResponse as AccountCreateResponse,
    type AccountRetrieveUsageResponse as AccountRetrieveUsageResponse,
  };

  export { Actions as Actions, type ActionRequestEnterpriseResponse as ActionRequestEnterpriseResponse };

  export {
    Plans as Plans,
    type PlanListResponse as PlanListResponse,
    type PlanRetrieveProrationResponse as PlanRetrieveProrationResponse,
    type PlanSwitchResponse as PlanSwitchResponse,
    type PlanListParams as PlanListParams,
  };

  export {
    SpendingCap as SpendingCap,
    type SpendingCapResponse as SpendingCapResponse,
    type SpendingCapUpdateSpendingCapParams as SpendingCapUpdateSpendingCapParams,
  };
}
