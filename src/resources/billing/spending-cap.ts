// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class SpendingCap extends APIResource {
  /**
   * Returns the monthly agent spending cap for the account. Null cap_cents means no
   * cap.
   *
   * @example
   * ```ts
   * const spendingCapResponse =
   *   await client.billing.spendingCap.retrieveSpendingCap();
   * ```
   */
  retrieveSpendingCap(options?: RequestOptions): APIPromise<SpendingCapResponse> {
    return this._client.get('/v1/billing/spending-cap', options);
  }

  /**
   * Sets or removes the monthly agent spending cap for the account.
   *
   * @example
   * ```ts
   * const spendingCapResponse =
   *   await client.billing.spendingCap.updateSpendingCap({
   *     cap_cents: 50000,
   *   });
   * ```
   */
  updateSpendingCap(
    body: SpendingCapUpdateSpendingCapParams,
    options?: RequestOptions,
  ): APIPromise<SpendingCapResponse> {
    return this._client.put('/v1/billing/spending-cap', { body, ...options });
  }
}

/**
 * Monthly agent spending cap for an account.
 */
export interface SpendingCapResponse {
  /**
   * Monthly spending cap in cents. Null means no cap.
   */
  cap_cents: number | null;

  /**
   * Resource type identifier.
   */
  object: 'spending_cap_response';
}

export interface SpendingCapUpdateSpendingCapParams {
  /**
   * Monthly spending cap in cents. Null removes the cap.
   */
  cap_cents: number | null;
}

export declare namespace SpendingCap {
  export {
    type SpendingCapResponse as SpendingCapResponse,
    type SpendingCapUpdateSpendingCapParams as SpendingCapUpdateSpendingCapParams,
  };
}
