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
   * A body that is empty or not a PNG, JPEG, GIF, or WebP image is refused with a
   * 400, and one over 10 MB with a 413; the existing logo is kept either way.
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
 * An address saved together with the record that uses it, under that record's own
 * permission.
 *
 * Without `id`, a new address is created from these fields, so `name` and
 * `country` are required. With `id`, that saved address is updated: omitted fields
 * are left unchanged, and `null` clears `phone`, `email`, `receive_calendar_id` or
 * `street_line_2`. The address must already belong to the account the record saves
 * it in.
 */
export interface InlineAddressInput {
  /**
   * ID of a saved address to update instead of creating a new one.
   */
  id?: string;

  /**
   * Two-letter ISO 3166-1 country code, such as `US`. Required when `id` is omitted.
   */
  country?: string;

  /**
   * Email address associated with the address.
   */
  email?: string | null;

  /**
   * City or locality.
   */
  locality?: string;

  /**
   * Display name of the address. Required when `id` is omitted.
   */
  name?: string;

  /**
   * Phone number associated with the address.
   */
  phone?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string;

  /**
   * The operating calendar naming the days this dock accepts freight, overriding the
   * customer's own.
   */
  receive_calendar_id?: string | null;

  /**
   * State or administrative area.
   */
  state?: string;

  /**
   * First line of the street address.
   */
  street_line_1?: string;

  /**
   * Second line of the street address.
   */
  street_line_2?: string | null;

  /**
   * How the address is used.
   *
   * - `standard`: a normal shipping or billing address.
   * - `drop_ship`: an address an order is shipped to directly, typically a third
   *   party or end customer rather than the account itself.
   */
  type?: 'standard' | 'drop_ship';
}

/**
 * Request to partially update an account.
 */
export interface UpdateAccountRequest {
  /**
   * An address saved together with the record that uses it, under that record's own
   * permission.
   *
   * Without `id`, a new address is created from these fields, so `name` and
   * `country` are required. With `id`, that saved address is updated: omitted fields
   * are left unchanged, and `null` clears `phone`, `email`, `receive_calendar_id` or
   * `street_line_2`. The address must already belong to the account the record saves
   * it in.
   */
  default_billing_address?: InlineAddressInput;

  /**
   * Default billing address for the account's orders. Must be one of the account's
   * own addresses.
   */
  default_billing_address_id?: string;

  /**
   * An address saved together with the record that uses it, under that record's own
   * permission.
   *
   * Without `id`, a new address is created from these fields, so `name` and
   * `country` are required. With `id`, that saved address is updated: omitted fields
   * are left unchanged, and `null` clears `phone`, `email`, `receive_calendar_id` or
   * `street_line_2`. The address must already belong to the account the record saves
   * it in.
   */
  default_shipping_address?: InlineAddressInput;

  /**
   * Default shipping address for the account's orders. Must be one of the account's
   * own addresses.
   */
  default_shipping_address_id?: string;

  /**
   * Facebook handle.
   */
  facebook_handle?: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle?: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle?: string | null;

  /**
   * The account's display name.
   */
  name?: string;

  /**
   * The account's public contact phone number.
   */
  phone_number?: string | null;

  /**
   * URL slug for the account's customer portal.
   *
   * Letters and digits, in runs joined by single hyphens (`acme-inc`); letters are
   * saved lowercase. The slug is unique across all accounts, ignoring case; updating
   * to one that is already taken returns a conflict error. Changing it changes the
   * portal address customers use, so existing portal links stop resolving. An
   * account without a portal gets one at this slug.
   */
  slug?: string;

  /**
   * The email address customers are directed to for support. Pass null to remove it,
   * as for the other branding fields.
   */
  support_email?: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle?: string | null;

  /**
   * The account's public website, as an `http` or `https` URL.
   */
  website_url?: string | null;
}

export interface AccountRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'branding' | 'portal' | 'default_billing_address' | 'default_shipping_address'>;
}

export interface AccountUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'branding' | 'portal' | 'default_billing_address' | 'default_shipping_address'>;

  /**
   * Body param: An address saved together with the record that uses it, under that
   * record's own permission.
   *
   * Without `id`, a new address is created from these fields, so `name` and
   * `country` are required. With `id`, that saved address is updated: omitted fields
   * are left unchanged, and `null` clears `phone`, `email`, `receive_calendar_id` or
   * `street_line_2`. The address must already belong to the account the record saves
   * it in.
   */
  default_billing_address?: InlineAddressInput;

  /**
   * Body param: Default billing address for the account's orders. Must be one of the
   * account's own addresses.
   */
  default_billing_address_id?: string;

  /**
   * Body param: An address saved together with the record that uses it, under that
   * record's own permission.
   *
   * Without `id`, a new address is created from these fields, so `name` and
   * `country` are required. With `id`, that saved address is updated: omitted fields
   * are left unchanged, and `null` clears `phone`, `email`, `receive_calendar_id` or
   * `street_line_2`. The address must already belong to the account the record saves
   * it in.
   */
  default_shipping_address?: InlineAddressInput;

  /**
   * Body param: Default shipping address for the account's orders. Must be one of
   * the account's own addresses.
   */
  default_shipping_address_id?: string;

  /**
   * Body param: Facebook handle.
   */
  facebook_handle?: string | null;

  /**
   * Body param: Instagram handle.
   */
  instagram_handle?: string | null;

  /**
   * Body param: LinkedIn handle.
   */
  linkedin_handle?: string | null;

  /**
   * Body param: The account's display name.
   */
  name?: string;

  /**
   * Body param: The account's public contact phone number.
   */
  phone_number?: string | null;

  /**
   * Body param: URL slug for the account's customer portal.
   *
   * Letters and digits, in runs joined by single hyphens (`acme-inc`); letters are
   * saved lowercase. The slug is unique across all accounts, ignoring case; updating
   * to one that is already taken returns a conflict error. Changing it changes the
   * portal address customers use, so existing portal links stop resolving. An
   * account without a portal gets one at this slug.
   */
  slug?: string;

  /**
   * Body param: The email address customers are directed to for support. Pass null
   * to remove it, as for the other branding fields.
   */
  support_email?: string | null;

  /**
   * Body param: Twitter handle.
   */
  twitter_handle?: string | null;

  /**
   * Body param: The account's public website, as an `http` or `https` URL.
   */
  website_url?: string | null;
}

Accounts.Favicon = Favicon;

export declare namespace Accounts {
  export {
    type AccountLogoURL as AccountLogoURL,
    type AccountPhotoUploadResult as AccountPhotoUploadResult,
    type InlineAddressInput as InlineAddressInput,
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
