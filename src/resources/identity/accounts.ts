// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LinesAPI from '../operations/shipments/lines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage account details, branding, portal, and logo.
 */
export class Accounts extends APIResource {
  /**
   * Returns an account by ID.
   *
   * @example
   * ```ts
   * const account = await client.identity.accounts.retrieve(
   *   'ac_01148680966698341a9c0976db',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinesAPI.Account> {
    return this._client.get(path`/v1/identity/accounts/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account's name, branding, and portal settings.
   *
   * @example
   * ```ts
   * const account = await client.identity.accounts.update(
   *   'ac_01148680966698341a9c0976db',
   *   { name: 'Acme Inc.' },
   * );
   * ```
   */
  update(
    id: string,
    params: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinesAPI.Account> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/accounts/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a presigned URL for the account's logo. Expires after one hour.
   *
   * @example
   * ```ts
   * const accountLogoURL =
   *   await client.identity.accounts.retrieveLogo(
   *     'ac_01148680966698341a9c0976db',
   *   );
   * ```
   */
  retrieveLogo(id: string, options?: RequestOptions): APIPromise<AccountLogoURL> {
    return this._client.get(path`/v1/identity/accounts/${id}/logo`, options);
  }

  /**
   * Uploads an account logo. Send as raw binary body.
   *
   * @example
   * ```ts
   * const accountPhotoUploadResult =
   *   await client.identity.accounts.updatePhoto(
   *     'ac_01148680966698341a9c0976db',
   *   );
   * ```
   */
  updatePhoto(id: string, options?: RequestOptions): APIPromise<AccountPhotoUploadResult> {
    return this._client.put(path`/v1/identity/accounts/${id}/photo`, options);
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
 * Presigned URL for an account's logo.
 */
export interface AccountLogoURL {
  /**
   * Presigned URL. Null if no logo exists.
   */
  url: string | null;
}

/**
 * Result of an account photo upload.
 */
export interface AccountPhotoUploadResult {
  /**
   * Whether the upload was successful.
   */
  success: boolean;
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
 * Request to partially update an account.
 */
export interface UpdateAccountRequest {
  /**
   * Facebook handle.
   */
  facebook_handle?: string;

  /**
   * Instagram handle.
   */
  instagram_handle?: string;

  /**
   * LinkedIn handle.
   */
  linkedin_handle?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Support phone number.
   */
  phone_number?: string;

  /**
   * Portal slug.
   */
  slug?: string;

  /**
   * Support email address.
   */
  support_email?: string;

  /**
   * Twitter handle.
   */
  twitter_handle?: string;

  /**
   * Website URL.
   */
  website_url?: string;
}

export interface AccountRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'branding' | 'portal'>;
}

export interface AccountUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'branding' | 'portal'>;

  /**
   * Body param: Facebook handle.
   */
  facebook_handle?: string;

  /**
   * Body param: Instagram handle.
   */
  instagram_handle?: string;

  /**
   * Body param: LinkedIn handle.
   */
  linkedin_handle?: string;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Support phone number.
   */
  phone_number?: string;

  /**
   * Body param: Portal slug.
   */
  slug?: string;

  /**
   * Body param: Support email address.
   */
  support_email?: string;

  /**
   * Body param: Twitter handle.
   */
  twitter_handle?: string;

  /**
   * Body param: Website URL.
   */
  website_url?: string;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountLogoURL as AccountLogoURL,
    type AccountPhotoUploadResult as AccountPhotoUploadResult,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Geolocation as Geolocation,
    type UpdateAccountRequest as UpdateAccountRequest,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
