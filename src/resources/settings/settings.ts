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
   * portal branding lookups.
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
 * PortalProfile is the authenticated seller portal profile served to logged-in
 * customer-portal pages: the seller's identity plus its public letterhead address.
 * Unlike PublicAccount (public, minimal, for pre-login pages), this requires
 * authentication and includes the address inline as a plain field.
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
   * Logo URL.
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
   * Portal slug.
   */
  slug: string;

  /**
   * Support email address.
   */
  support_email: string | null;
}

/**
 * Minimal account representation for unauthenticated slug lookups.
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
   * Logo URL.
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
   * Portal slug.
   */
  slug: string;

  /**
   * Support email address.
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
