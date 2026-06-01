// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve and manage user profiles.
 */
export class Photo extends APIResource {
  /**
   * Uploads a profile photo for a user.
   *
   * @example
   * ```ts
   * const userPhotoUploadResult =
   *   await client.identity.users.photo.update(
   *     'us_0151164dcaea4cbded27b50aae',
   *   );
   * ```
   */
  update(id: string, options?: RequestOptions): APIPromise<UserPhotoUploadResult> {
    return this._client.put(path`/v1/identity/users/${id}/photo`, options);
  }

  /**
   * Returns a presigned URL for the user's profile photo. Expires after one hour.
   *
   * @example
   * ```ts
   * const userPhotoURL = await client.identity.users.photo.list(
   *   'us_0151164dcaea4cbded27b50aae',
   * );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<UserPhotoURL> {
    return this._client.get(path`/v1/identity/users/${id}/photo`, options);
  }
}

/**
 * Result of a user photo upload.
 */
export interface UserPhotoUploadResult {
  /**
   * Upload success status.
   */
  success: boolean;
}

/**
 * Presigned URL for a user's profile photo.
 */
export interface UserPhotoURL {
  /**
   * Presigned URL for the profile photo, or null if no photo exists.
   */
  url: string | null;
}

export declare namespace Photo {
  export { type UserPhotoUploadResult as UserPhotoUploadResult, type UserPhotoURL as UserPhotoURL };
}
