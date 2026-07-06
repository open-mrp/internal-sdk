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
   * Each account can have one custom domain. The domain starts in `pending` until
   * its DNS is verified.
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
   * Returns a single portal domain, including the DNS records the customer must
   * publish.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.retrieve(
   *     'podn_018e88072d1320808dc9aab42',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PortalDomain> {
    return this._client.get(path`/v1/settings/portal-domains/${id}`, options);
  }

  /**
   * Lists the account's portal domains.
   *
   * Accounts currently have at most one custom portal domain.
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
   * serving the portal.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const portalDomain =
   *   await client.settings.portalDomains.delete(
   *     'podn_018e88072d1320808dc9aab42',
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
   * The fully-qualified domain name to connect (e.g. `shop.acme.com`). Subdomains
   * are recommended; apex domains are supported via an A record.
   */
  domain: string;
}

/**
 * A DNS record the customer must publish for their portal domain.
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
   * Why the record is needed.
   *
   * Routing records point traffic at the portal's serving infrastructure; ownership
   * records prove control of a domain that is claimed elsewhere.
   */
  reason: 'routing' | 'ownership';

  /**
   * Record type.
   */
  type: 'CNAME' | 'A' | 'TXT';

  /**
   * Record value to publish.
   */
  value: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * List represents a paginated list of resources.
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
   * Verification status.
   *
   * - pending domains await DNS configuration
   * - securing domains have correct DNS and are waiting on TLS certificate issuance;
   *   the portal is not yet reachable over HTTPS
   * - verified domains serve the portal over HTTPS
   * - failed domains were rejected and cannot be used
   */
  status: 'pending' | 'securing' | 'verified' | 'failed';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * When the domain's DNS configuration was confirmed.
   */
  verified_at: string | null;
}

export interface PortalDomainDeleteResponse {}

export interface PortalDomainCreateParams {
  /**
   * The fully-qualified domain name to connect (e.g. `shop.acme.com`). Subdomains
   * are recommended; apex domains are supported via an A record.
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
