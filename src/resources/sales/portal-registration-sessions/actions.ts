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
   * Abandons the buyer's in-progress registration session, so it is no longer
   * resumed. A completed session cannot be abandoned.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.actions.abandon(
   *     'example',
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
   * Completes the buyer's registration: registers them as a customer of the seller
   * from the session's saved data, then marks the session complete. Idempotent —
   * completing an already-complete session returns it unchanged.
   *
   * @example
   * ```ts
   * const portalRegistrationSession =
   *   await client.sales.portalRegistrationSessions.actions.complete(
   *     'example',
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
