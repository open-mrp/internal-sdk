// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Connect a custom domain to the account's customer portal, verify its DNS, and resolve custom hosts to portal accounts.
 */
export class PortalDomains extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Connects a custom domain to the account's customer portal and returns the DNS
   * records to publish.
   *
   * An account can only have one custom domain at a time: adding a second one — or
   * claiming a domain another account already uses — returns a conflict error. The
   * new domain starts in `pending`; publish the returned records at your DNS
   * provider, then run the verify action to move it towards serving.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.create({
   *     domain: 'shop.acme.com',
   *   });
   * ```
   */
  create(body: PortalDomainCreateParams, options?: RequestOptions): APIPromise<PortalDomain> {
    return this._client.post('/v1/settings/portal-domains', { body, ...options });
  }

  /**
   * Returns a single portal domain, including its current status and the DNS records
   * that must be published for it.
   *
   * Reading a domain never re-checks it with the serving provider — the status is
   * the one recorded when the domain was connected or last verified — so run the
   * verify action to move a `pending` or `securing` domain forward.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.retrieve(
   *     'podn_ml44z5ggf169',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PortalDomain> {
    return this._client.get(path`/v1/settings/portal-domains/${id}`, options);
  }

  /**
   * Lists the account's portal domains.
   *
   * An account can only hold one custom portal domain, so this returns either zero
   * or one entry. Reading it is the usual way to discover whether a domain is
   * connected and what state it is in.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const listPortalDomain =
   *   await client.settings.portalDomains.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListPortalDomain> {
    return this._client.get('/v1/settings/portal-domains', options);
  }

  /**
   * Disconnects the custom domain from the account's customer portal.
   *
   * The domain is detached from the serving infrastructure and immediately stops
   * serving the portal; buyers must go back to the account's default slug-based
   * portal address. Because an account may only hold one custom domain, this is how
   * you free it up to connect a different one. The DNS records you published can
   * then be removed.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.delete(
   *     'podn_ml44z5ggf169',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PortalDomainDeleteResponse> {
    return this._client.delete(path`/v1/settings/portal-domains/${id}`, options);
  }
}

/**
 * Request to connect a custom domain to the account's customer portal.
 */
export interface CreatePortalDomainRequest {
  /**
   * The fully-qualified domain name to connect (e.g. `shop.acme.com`).
   *
   * A subdomain such as `shop.acme.com` is routed with a CNAME record and an apex
   * domain such as `acme.com` with an A record; either way the records to publish
   * come back on the response. The value is lowercased and any trailing dot is
   * stripped before it is stored, and OpenMRP-owned hostnames are rejected.
   */
  domain: string;
}

/**
 * A DNS record that must be published at your DNS provider before a portal domain
 * can be verified and serve traffic.
 */
export interface DNSRecord {
  /**
   * Record name (host) to publish.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'dns_record';

  /**
   * Why the record must be published.
   *
   * - `routing`: the record points traffic at the portal's serving infrastructure.
   * - `ownership`: the record proves control of a domain that is already claimed
   *   elsewhere.
   */
  reason: 'routing' | 'ownership';

  /**
   * The kind of DNS record to publish.
   *
   * - `CNAME`: points a subdomain at the portal's serving infrastructure.
   * - `A`: points an apex domain at the portal's serving infrastructure.
   * - `TXT`: carries an ownership-verification challenge.
   */
  type: 'CNAME' | 'A' | 'TXT';

  /**
   * Record value to publish.
   */
  value: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDNSRecord {
  /**
   * Resources in this page.
   */
  data: Array<DNSRecord>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPortalDomain {
  /**
   * Resources in this page.
   */
  data: Array<PortalDomain>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A custom domain that serves the account's customer portal (e.g.
 * `shop.acme.com`).
 *
 * After creation the domain starts in `pending`; publish the returned DNS records,
 * then poll the verify action. Once DNS is correct the domain moves to `securing`
 * while its TLS certificate is issued — it is not yet reachable over HTTPS during
 * this window — and finally to `verified` once the certificate is live and the
 * portal is served on the domain.
 */
export interface PortalDomain {
  /**
   * Portal domain ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  dns_records: ListDNSRecord | null;

  /**
   * The fully-qualified domain name (e.g. `shop.acme.com`).
   */
  domain: string;

  /**
   * Resource type identifier.
   */
  object: 'portal_domain';

  /**
   * How far the domain has progressed towards serving the portal.
   *
   * - `pending`: the domain is waiting on DNS. Publish the listed records, then run
   *   the verify action.
   * - `securing`: DNS is correct and the TLS certificate is being issued. The portal
   *   is not yet reachable over HTTPS.
   * - `verified`: the certificate is live and the portal is served on the domain.
   * - `failed`: the domain was rejected and cannot be used.
   */
  status: 'pending' | 'securing' | 'verified' | 'failed';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * When the domain became fully verified — its TLS certificate live and the portal
   * serving on it.
   */
  verified_at: string | null;
}

export interface PortalDomainDeleteResponse {}

export interface PortalDomainCreateParams {
  /**
   * The fully-qualified domain name to connect (e.g. `shop.acme.com`).
   *
   * A subdomain such as `shop.acme.com` is routed with a CNAME record and an apex
   * domain such as `acme.com` with an A record; either way the records to publish
   * come back on the response. The value is lowercased and any trailing dot is
   * stripped before it is stored, and OpenMRP-owned hostnames are rejected.
   */
  domain: string;
}

PortalDomains.Actions = Actions;

export declare namespace PortalDomains {
  export {
    type CreatePortalDomainRequest as CreatePortalDomainRequest,
    type DNSRecord as DNSRecord,
    type ListDNSRecord as ListDNSRecord,
    type ListPortalDomain as ListPortalDomain,
    type PortalDomain as PortalDomain,
    type PortalDomainDeleteResponse as PortalDomainDeleteResponse,
    type PortalDomainCreateParams as PortalDomainCreateParams,
  };

  export { Actions as Actions };
}
