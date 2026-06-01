// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class Actions extends APIResource {
  /**
   * Submits an enterprise plan inquiry to the sales team.
   *
   * @example
   * ```ts
   * const enterpriseInquiry =
   *   await client.billing.actions.requestEnterprise();
   * ```
   */
  requestEnterprise(options?: RequestOptions): APIPromise<EnterpriseInquiry> {
    return this._client.post('/v1/billing/actions/request-enterprise', options);
  }
}

/**
 * Enterprise plan upgrade request.
 */
export interface EnterpriseInquiry {
  /**
   * Enterprise inquiry ID.
   */
  id: string;

  /**
   * When this inquiry was submitted.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'enterprise_inquiry';
}

export declare namespace Actions {
  export { type EnterpriseInquiry as EnterpriseInquiry };
}
