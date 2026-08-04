// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PortalDomainsAPI from './portal-domains';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Connect a custom domain to the account's customer portal, verify its DNS, and resolve custom hosts to portal accounts.
 */
export class Actions extends APIResource {
  /**
   * Re-checks a portal domain against the serving provider and advances its status.
   *
   * Run this after publishing the DNS records, and keep polling it: the domain stays
   * `pending` while its records are missing or misconfigured, moves to `securing`
   * once they are correct and its TLS certificate is being issued, and reaches
   * `verified` only once that certificate is live and the portal answers on the
   * domain. The response carries the updated domain along with the records still
   * required. Verifying an already-verified domain returns it unchanged.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.actions.verify(
   *     'podn_ml44z5ggf169',
   *   );
   * ```
   */
  verify(id: string, options?: RequestOptions): APIPromise<PortalDomainsAPI.PortalDomain> {
    return this._client.post(path`/v1/settings/portal-domains/${id}/actions/verify`, options);
  }
}
