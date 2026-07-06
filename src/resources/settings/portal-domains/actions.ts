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
   * Re-checks the domain's DNS configuration and flips it to `verified` once the
   * published records are confirmed.
   *
   * Returns the updated domain (still `pending` if DNS has not propagated yet) along
   * with the currently required DNS records.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.actions.verify(
   *     'podn_018e88072d1320808dc9aab42',
   *   );
   * ```
   */
  verify(id: string, options?: RequestOptions): APIPromise<PortalDomainsAPI.PortalDomain> {
    return this._client.post(path`/v1/settings/portal-domains/${id}/actions/verify`, options);
  }
}
