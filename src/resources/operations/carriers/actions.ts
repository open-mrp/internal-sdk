// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../edi-runs';
import * as ShipmentsActionsAPI from '../shipments/actions';
import * as LinesAPI from '../shipments/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carriers and their Shippo integrations.
 */
export class Actions extends APIResource {
  /**
   * Initiates the OAuth flow for a Shippo-managed carrier and returns an OAuth URL.
   * Not available in sandbox mode.
   *
   * @example
   * ```ts
   * const oauthResponse =
   *   await client.operations.carriers.actions.initiateOAuth(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *     {
   *       redirect_uri:
   *         'https://app.example.com/carriers/oauth/callback',
   *       state: 'state',
   *     },
   *   );
   * ```
   */
  initiateOAuth(
    id: string,
    body: ActionInitiateOAuthParams,
    options?: RequestOptions,
  ): APIPromise<OAuthResponse> {
    return this._client.post(path`/v1/operations/carriers/${id}/actions/initiate-oauth`, {
      body,
      ...options,
    });
  }

  /**
   * Syncs carrier options from Shippo service levels, adding new and removing stale
   * ones. Not available in sandbox mode.
   *
   * @example
   * ```ts
   * const carrier =
   *   await client.operations.carriers.actions.syncOptions(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *   );
   * ```
   */
  syncOptions(
    id: string,
    params: ActionSyncOptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShipmentsActionsAPI.Carrier> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/operations/carriers/${id}/actions/sync-options`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: LinesAPI.AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Carrier resource.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Account number.
   */
  account_number: string | null;

  /**
   * Carrier code.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'carrier';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  service_levels: ShipmentsActionsAPI.ListServiceLevel | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * Request to initiate carrier OAuth.
 */
export interface InitiateOAuthRequest {
  /**
   * Redirect URI after OAuth completes.
   */
  redirect_uri: string;

  /**
   * Opaque state value passed through the OAuth flow.
   */
  state: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.ServiceLevel>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * Response from initiating carrier OAuth.
 */
export interface OAuthResponse {
  /**
   * OAuth URL to redirect the user to.
   */
  oauth_url: string;

  /**
   * Resource type identifier.
   */
  object: 'oauth_response';
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
}

/**
 * Shipping service level for a carrier.
 */
export interface ServiceLevel {
  /**
   * Service level ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Default service level for the carrier.
   */
  is_default: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Service level token.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ActionInitiateOAuthParams {
  /**
   * Redirect URI after OAuth completes.
   */
  redirect_uri: string;

  /**
   * Opaque state value passed through the OAuth flow.
   */
  state: string | null;
}

export interface ActionSyncOptionsParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;
}

export declare namespace Actions {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Carrier as Carrier,
    type Geolocation as Geolocation,
    type InitiateOAuthRequest as InitiateOAuthRequest,
    type ListServiceLevel as ListServiceLevel,
    type OAuthResponse as OAuthResponse,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type ServiceLevel as ServiceLevel,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
    type ActionSyncOptionsParams as ActionSyncOptionsParams,
  };
}
