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
   * The photo replaces any existing one, and the user's `image_url` is repointed at
   * an internal path rather than a fetchable image URL. Because the stored image is
   * not publicly readable, use Get User Photo URL to obtain a temporary link for
   * displaying it.
   *
   * This endpoint requires the permission: `team:update`.
   *
   * @example
   * ```ts
   * const userPhotoUploadResult =
   *   await client.identity.users.photo.update(
   *     'us_43irtlt2ajz6',
   *   );
   * ```
   */
  update(id: string, options?: RequestOptions): APIPromise<UserPhotoUploadResult> {
    return this._client.put(path`/v1/identity/users/${id}/photo`, options);
  }

  /**
   * Returns a temporary link that can be used to fetch the user's profile photo
   * image.
   *
   * The link expires one hour after it is issued, and no link is returned for a user
   * who has never uploaded a photo. Users may always fetch their own photo; fetching
   * another user's photo requires read access to team users.
   *
   * @example
   * ```ts
   * const userPhotoURL = await client.identity.users.photo.list(
   *   'us_43irtlt2ajz6',
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
