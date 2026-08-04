// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Billing and pricing plan operations.
 */
export class SpendingCap extends APIResource {
  /**
   * Sets or removes the monthly agent spending cap for the account.
   *
   * When estimated agent spend reaches the cap, new agent runs are blocked and
   * in-progress runs are stopped until the cap is raised, removed, or the next
   * billing month begins.
   *
   * @example
   * ```ts
   * const spendingCapResponse =
   *   await client.billing.spendingCap.update({
   *     cap_cents: 50000,
   *   });
   * ```
   */
  update(
    body: SpendingCapUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpendingCapResponse> {
    return this._client.put('/v1/billing/spending-cap', { body, ...options });
  }

  /**
   * Returns the monthly cap on agent spending for the account.
   *
   * The cap limits estimated agent LLM spend within a billing month; Get Account
   * Usage reports how much of it has been spent so far.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const spendingCapResponse =
   *   await client.billing.spendingCap.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SpendingCapResponse> {
    return this._client.get('/v1/billing/spending-cap', options);
  }
}

/**
 * Request to set or remove the monthly spending cap.
 */
export interface SetSpendingCapRequest {
  /**
   * Ceiling in cents on estimated agent spending per billing month.
   *
   * Send `null` to remove the cap entirely; omit the field to leave the current cap
   * unchanged.
   */
  cap_cents?: number | null;
}

/**
 * Monthly agent spending cap for an account.
 */
export interface SpendingCapResponse {
  /**
   * Ceiling in cents on estimated agent spending per billing month.
   *
   * Null means agent spending is uncapped.
   */
  cap_cents: number | null;

  /**
   * Resource type identifier.
   */
  object: 'spending_cap_response';
}

export interface SpendingCapUpdateParams {
  /**
   * Ceiling in cents on estimated agent spending per billing month.
   *
   * Send `null` to remove the cap entirely; omit the field to leave the current cap
   * unchanged.
   */
  cap_cents?: number | null;
}

export declare namespace SpendingCap {
  export {
    type SetSpendingCapRequest as SetSpendingCapRequest,
    type SpendingCapResponse as SpendingCapResponse,
    type SpendingCapUpdateParams as SpendingCapUpdateParams,
  };
}
