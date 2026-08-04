// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PortalRegistrationSessionsAPI from './portal-registration-sessions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Session-based registration of a buyer into a seller's customer portal: start or resume, advance step by step, then complete or abandon.
 */
export class Actions extends APIResource {
  /**
   * Abandons the buyer's in-progress registration session.
   *
   * The session moves to `abandoned` and is never resumed, so starting a
   * registration with the same seller afterwards begins a fresh one. A registration
   * that has already completed cannot be abandoned.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.actions.abandon(
   *     'porgse_q1hs0mapqh6x',
   *   );
   * ```
   */
  abandon(
    id: string,
    options?: RequestOptions,
  ): APIPromise<PortalRegistrationSessionsAPI.PortalRegistrationSession> {
    return this._client.post(path`/v1/sales/portal-registration-sessions/${id}/actions/abandon`, options);
  }

  /**
   * Completes the buyer's registration and registers them as a customer of the
   * seller from the session's saved data.
   *
   * What happens depends on the session's `is_existing_customer` flag. When it is
   * set, the buyer is linked to the seller's existing customer matching the saved
   * `customer_number`. Otherwise a new customer is created — which requires a
   * customer name, a billing address, a customer group, a payment term, and a
   * shipping term in the session data — and is assigned the seller's next customer
   * number. Either way the buyer's user is attached to that customer and the
   * seller's customer-service team is notified.
   *
   * Completing an already-completed session returns it unchanged; an abandoned
   * session cannot be completed.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.actions.complete(
   *     'porgse_q1hs0mapqh6x',
   *   );
   * ```
   */
  complete(
    id: string,
    options?: RequestOptions,
  ): APIPromise<PortalRegistrationSessionsAPI.PortalRegistrationSession> {
    return this._client.post(path`/v1/sales/portal-registration-sessions/${id}/actions/complete`, options);
  }
}
