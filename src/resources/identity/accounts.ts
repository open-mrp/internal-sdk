// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
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
  ): APIPromise<APIKeysAPI.Account> {
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
  ): APIPromise<APIKeysAPI.Account> {
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
 * Presigned URL for an account's logo.
 */
export interface AccountLogoURL {
  /**
   * Resource type identifier.
   */
  object: 'account_logo_url';

  /**
   * Presigned URL.
   *
   * Null if no logo exists.
   */
  url: string | null;
}

/**
 * Result of an account photo upload.
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
    type AccountLogoURL as AccountLogoURL,
    type AccountPhotoUploadResult as AccountPhotoUploadResult,
    type UpdateAccountRequest as UpdateAccountRequest,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
