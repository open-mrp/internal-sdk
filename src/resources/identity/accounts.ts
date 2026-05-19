// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddressesAPI from '../sales/addresses';
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
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Account> {
    return this._client.get(path`/v1/identity/accounts/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account's name, branding, and portal settings.
   *
   * @example
   * ```ts
   * const account = await client.identity.accounts.update(
   *   'id',
   *   { name: 'Acme Inc.' },
   * );
   * ```
   */
  update(
    id: string,
    params: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Account> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/accounts/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a presigned URL for the account's logo. Expires after one hour.
   *
   * @example
   * ```ts
   * const response =
   *   await client.identity.accounts.retrieveLogo('id');
   * ```
   */
  retrieveLogo(id: string, options?: RequestOptions): APIPromise<AccountRetrieveLogoResponse> {
    return this._client.get(path`/v1/identity/accounts/${id}/logo`, options);
  }

  /**
   * Uploads an account logo. Send as raw binary body.
   *
   * @example
   * ```ts
   * const response = await client.identity.accounts.updatePhoto(
   *   'id',
   * );
   * ```
   */
  updatePhoto(id: string, options?: RequestOptions): APIPromise<AccountUpdatePhotoResponse> {
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
  branding: Account.Branding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: AddressesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: AddressesAPI.Address | null;

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
  portal: Account.Portal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace Account {
  /**
   * Branding metadata for an account.
   */
  export interface Branding {
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
  export interface Portal {
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
}

/**
 * Presigned URL for an account's logo.
 */
export interface AccountRetrieveLogoResponse {
  /**
   * Presigned URL. Null if no logo exists.
   */
  url: string | null;
}

/**
 * Result of an account photo upload.
 */
export interface AccountUpdatePhotoResponse {
  /**
   * Whether the upload was successful.
   */
  success: boolean;
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
    type AccountRetrieveLogoResponse as AccountRetrieveLogoResponse,
    type AccountUpdatePhotoResponse as AccountUpdatePhotoResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
