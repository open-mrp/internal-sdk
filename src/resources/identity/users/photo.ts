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
   * The photo replaces any existing one, and the user's `image_url` is updated to
   * serve the new photo.
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
   * Returns a presigned URL for the user's profile photo.
   *
   * The URL expires one hour after it is issued.
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
   * Resource type identifier.
   */
  object: 'user_photo_upload_result';

  /**
   * Whether the photo was uploaded successfully.
   */
  success: boolean;
}

/**
 * Presigned URL for a user's profile photo.
 */
export interface UserPhotoURL {
  /**
   * Resource type identifier.
   */
  object: 'user_photo_url';

  /**
   * Presigned URL for the profile photo.
   *
   * The URL is valid for one hour after it is issued.
   */
  url: string | null;
}

export declare namespace Photo {
  export { type UserPhotoUploadResult as UserPhotoUploadResult, type UserPhotoURL as UserPhotoURL };
}
