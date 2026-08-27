// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as FaviconAPI from './favicon';
import { AccountFaviconURL, Favicon, FaviconUpdateResponse } from './favicon';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage account details, branding, portal, logo, and favicon.
 */
export class Accounts extends APIResource {
  favicon: FaviconAPI.Favicon = new FaviconAPI.Favicon(this._client);

  /**
   * Returns an account by ID.
   *
   * You can only retrieve the account you are acting in; requesting any other
   * account is rejected.
   *
   * This endpoint requires the permission: `self:read`.
   *
   * @example
   * ```ts
   * const account = await client.identity.accounts.retrieve(
   *   'ac_ykxoradjoeb3',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.Account> {
    return this._client.get(path`/v1/identity/accounts/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account's name, branding, and portal settings.
   *
   * Only the fields provided in the request are changed. You can only update the
   * account you are acting in. The logo and favicon are not set here; upload them
   * through their own endpoints.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const account = await client.identity.accounts.update(
   *   'ac_ykxoradjoeb3',
   *   { name: 'Acme Inc.' },
   * );
   * ```
   */
  update(
    id: string,
    params: AccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.Account> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/identity/accounts/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a download URL for the account's logo.
   *
   * The URL is a stable public CDN link, safe to cache and embed. The response
   * carries no URL when the account has never uploaded a logo or the stored image is
   * no longer available.
   *
   * @example
   * ```ts
   * const accountLogoURL =
   *   await client.identity.accounts.retrieveLogo(
   *     'ac_ykxoradjoeb3',
   *   );
   * ```
   */
  retrieveLogo(id: string, options?: RequestOptions): APIPromise<AccountLogoURL> {
    return this._client.get(path`/v1/identity/accounts/${id}/logo`, options);
  }

  /**
   * Uploads an account logo.
   *
   * Send the image as the raw request body, not as multipart form data. The uploaded
   * image replaces any existing logo and can be retrieved via the Get Account Logo
   * URL endpoint. You can only upload a logo for the account you are acting in.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const accountPhotoUploadResult =
   *   await client.identity.accounts.updatePhoto(
   *     'ac_ykxoradjoeb3',
   *   );
   * ```
   */
  updatePhoto(id: string, options?: RequestOptions): APIPromise<AccountPhotoUploadResult> {
    return this._client.put(path`/v1/identity/accounts/${id}/photo`, options);
  }
}

/**
 * Download URL for an account's logo.
 */
export interface AccountLogoURL {
  /**
   * Resource type identifier.
   */
  object: 'account_logo_url';

  /**
   * Stable public CDN URL for downloading the account's logo.
   *
   * Safe to cache and embed. No URL is returned when the account has never uploaded
   * a logo or the stored image is no longer available.
   */
  url: string | null;
}

/**
 * Result of an account logo upload.
 */
export interface AccountPhotoUploadResult {
  /**
   * Resource type identifier.
   */
  object: 'account_photo_upload_result';

  /**
   * Whether the upload was successful.
   */
  success: boolean;
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
   * The account's display name.
   */
  name?: string;

  /**
   * The account's public contact phone number.
   */
  phone_number?: string;

  /**
   * URL slug for the account's customer portal.
   *
   * The slug is unique across all accounts; updating to one that is already taken
   * returns a conflict error. Changing it changes the portal address customers use,
   * so existing portal links stop resolving.
   */
  slug?: string;

  /**
   * The email address customers are directed to for support.
   */
  support_email?: string;

  /**
   * Twitter handle.
   */
  twitter_handle?: string;

  /**
   * The account's public website.
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
   * Body param: The account's display name.
   */
  name?: string;

  /**
   * Body param: The account's public contact phone number.
   */
  phone_number?: string;

  /**
   * Body param: URL slug for the account's customer portal.
   *
   * The slug is unique across all accounts; updating to one that is already taken
   * returns a conflict error. Changing it changes the portal address customers use,
   * so existing portal links stop resolving.
   */
  slug?: string;

  /**
   * Body param: The email address customers are directed to for support.
   */
  support_email?: string;

  /**
   * Body param: Twitter handle.
   */
  twitter_handle?: string;

  /**
   * Body param: The account's public website.
   */
  website_url?: string;
}

Accounts.Favicon = Favicon;

export declare namespace Accounts {
  export {
    type AccountLogoURL as AccountLogoURL,
    type AccountPhotoUploadResult as AccountPhotoUploadResult,
    type UpdateAccountRequest as UpdateAccountRequest,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    Favicon as Favicon,
    type AccountFaviconURL as AccountFaviconURL,
    type FaviconUpdateResponse as FaviconUpdateResponse,
  };
}
