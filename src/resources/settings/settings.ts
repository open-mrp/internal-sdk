// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PropertiesAPI from './properties';
import {
  ListSysProperty,
  Properties,
  PropertyListParams,
  PropertyUpdateParams,
  SysProperty,
  SysPropertyType,
  SysPropertyValue,
  UpdateSysPropertyRequest,
} from './properties';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as IntegrationsAPI from './integrations/integrations';
import {
  AccountIntegration,
  CreateAccountIntegrationRequest,
  IntegrationCreateParams,
  IntegrationListParams,
  IntegrationUpdateParams,
  Integrations,
  ListAccountIntegration,
  UpdateAccountIntegrationRequest,
} from './integrations/integrations';
import * as PortalDomainsAPI from './portal-domains/portal-domains';
import {
  CreatePortalDomainRequest,
  DNSRecord,
  ListDNSRecord,
  ListPortalDomain,
  PortalDomain,
  PortalDomainCreateParams,
  PortalDomainDeleteResponse,
  PortalDomains,
} from './portal-domains/portal-domains';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Settings extends APIResource {
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  portalDomains: PortalDomainsAPI.PortalDomains = new PortalDomainsAPI.PortalDomains(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);

  /**
   * Returns a minimal public profile for the account that owns the given portal
   * slug.
   *
   * This endpoint does not require authentication; it is intended for customer
   * portal branding lookups. The logo and favicon are returned as stable public CDN
   * URLs, safe to embed in cached HTML (e.g. the portal favicon <link>) without the
   * expiry that makes a presigned URL 403 once a browser reuses it past its
   * signature.
   *
   * @example
   * ```ts
   * const publicAccount =
   *   await client.settings.retrieveBranding('acme');
   * ```
   */
  retrieveBranding(slug: string, options?: RequestOptions): APIPromise<PublicAccount> {
    return this._client.get(path`/v1/settings/branding/${slug}`, options);
  }

  /**
   * Resolves a verified custom portal domain to the public profile of the account it
   * serves.
   *
   * This endpoint does not require authentication; the frontend uses it to map a
   * request host to a customer portal. Unverified or unknown domains return a 404.
   *
   * @example
   * ```ts
   * const publicAccount =
   *   await client.settings.retrievePortalHosts('example');
   * ```
   */
  retrievePortalHosts(domain: string, options?: RequestOptions): APIPromise<PublicAccount> {
    return this._client.get(path`/v1/settings/portal-hosts/${domain}`, options);
  }

  /**
   * Returns the seller portal profile for the given slug: the seller's identity and
   * its public letterhead address.
   *
   * Unlike the public branding lookup, this endpoint requires an authenticated
   * caller. It is used by the logged-in customer portal (e.g. order documents) where
   * the seller's letterhead address is shown.
   *
   * @example
   * ```ts
   * const portalProfile =
   *   await client.settings.retrievePortalProfiles('acme');
   * ```
   */
  retrievePortalProfiles(slug: string, options?: RequestOptions): APIPromise<PortalProfile> {
    return this._client.get(path`/v1/settings/portal-profiles/${slug}`, options);
  }
}

/**
 * The seller's identity as presented inside a signed-in customer portal: display
 * name, branding, and letterhead address.
 *
 * This is the counterpart to the public branding profile used on pre-login pages,
 * and it additionally carries the seller's letterhead address for rendering order
 * documents.
 */
export interface PortalProfile {
  /**
   * Account ID.
   */
  id: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  address: APIKeysAPI.Address | null;

  /**
   * Stable public CDN URL for the seller's customer-portal favicon, safe to cache
   * and embed.
   */
  favicon_url: string | null;

  /**
   * Stable public CDN URL for the seller's logo, safe to cache and embed.
   */
  logo_url: string | null;

  /**
   * The seller's display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'portal_profile';

  /**
   * The URL slug that identifies the seller's customer portal.
   */
  slug: string;

  /**
   * The email address customers are directed to for support.
   */
  support_email: string | null;
}

/**
 * The publicly readable branding profile of an account, used to render customer
 * portal pages before anyone signs in.
 */
export interface PublicAccount {
  /**
   * Account ID.
   */
  id: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  default_billing_address: APIKeysAPI.Address | null;

  /**
   * Stable public CDN URL for the account's customer-portal favicon, safe to cache
   * and embed.
   */
  favicon_url: string | null;

  /**
   * Stable public CDN URL for the account's logo, safe to cache and embed.
   */
  logo_url: string | null;

  /**
   * The account's display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'public_account';

  /**
   * The account's custom portal domain (e.g. shop.acme.com).
   *
   * A custom domain only appears here once it has passed verification; until then
   * the portal is served from its slug URL.
   */
  portal_domain: string | null;

  /**
   * The URL slug that identifies the account's customer portal.
   */
  slug: string;

  /**
   * The email address customers are directed to for support.
   */
  support_email: string | null;
}

Settings.Properties = Properties;
Settings.PortalDomains = PortalDomains;
Settings.Integrations = Integrations;

export declare namespace Settings {
  export { type PortalProfile as PortalProfile, type PublicAccount as PublicAccount };

  export {
    Properties as Properties,
    type ListSysProperty as ListSysProperty,
    type SysProperty as SysProperty,
    type SysPropertyType as SysPropertyType,
    type SysPropertyValue as SysPropertyValue,
    type UpdateSysPropertyRequest as UpdateSysPropertyRequest,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };

  export {
    PortalDomains as PortalDomains,
    type CreatePortalDomainRequest as CreatePortalDomainRequest,
    type DNSRecord as DNSRecord,
    type ListDNSRecord as ListDNSRecord,
    type ListPortalDomain as ListPortalDomain,
    type PortalDomain as PortalDomain,
    type PortalDomainDeleteResponse as PortalDomainDeleteResponse,
    type PortalDomainCreateParams as PortalDomainCreateParams,
  };

  export {
    Integrations as Integrations,
    type AccountIntegration as AccountIntegration,
    type CreateAccountIntegrationRequest as CreateAccountIntegrationRequest,
    type ListAccountIntegration as ListAccountIntegration,
    type UpdateAccountIntegrationRequest as UpdateAccountIntegrationRequest,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
  };
}
