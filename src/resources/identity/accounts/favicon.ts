// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage account details, branding, portal, logo, and favicon.
 */
export class Favicon extends APIResource {
  /**
   * Uploads a customer-portal favicon.
   *
   * Send the image as the raw request body, not as multipart form data. Use a small
   * square PNG (e.g. 32x32 or 64x64) for the best result in browser tabs. The
   * uploaded image replaces any existing favicon and is shown on the account's
   * customer portal. You can only upload a favicon for the account you are acting
   * in.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const favicon =
   *   await client.identity.accounts.favicon.update(
   *     'ac_01148680966698341a9c0976db',
   *   );
   * ```
   */
  update(id: string, options?: RequestOptions): APIPromise<FaviconUpdateResponse> {
    return this._client.put(path`/v1/identity/accounts/${id}/favicon`, options);
  }

  /**
   * Returns a presigned download URL for the account's customer-portal favicon.
   *
   * The URL expires one hour after it is generated, so fetch the favicon promptly
   * rather than caching it.
   *
   * @example
   * ```ts
   * const accountFaviconURL =
   *   await client.identity.accounts.favicon.list(
   *     'ac_01148680966698341a9c0976db',
   *   );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<AccountFaviconURL> {
    return this._client.get(path`/v1/identity/accounts/${id}/favicon`, options);
  }
}

/**
 * Presigned URL for an account's customer-portal favicon.
 */
export interface AccountFaviconURL {
  /**
   * Resource type identifier.
   */
  object: 'account_favicon_url';

  /**
   * Presigned URL for downloading the account's favicon.
   *
   * The URL expires one hour after it is generated, so fetch the favicon promptly
   * rather than caching this URL.
   */
  url: string | null;
}

export interface FaviconUpdateResponse {}

export declare namespace Favicon {
  export { type AccountFaviconURL as AccountFaviconURL, type FaviconUpdateResponse as FaviconUpdateResponse };
}
