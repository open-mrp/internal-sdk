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
   * const photo = await client.identity.users.photo.create(
   *   'id',
   * );
   * ```
   */
  create(id: string, options?: RequestOptions): APIPromise<PhotoCreateResponse> {
    return this._client.put(path`/v1/identity/users/${id}/photo`, options);
  }

  /**
   * Returns a presigned URL for the user's profile photo. Expires after one hour.
   *
   * @example
   * ```ts
   * const photos = await client.identity.users.photo.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<PhotoListResponse> {
    return this._client.get(path`/v1/identity/users/${id}/photo`, options);
  }
}

/**
 * Result of a user photo upload.
 */
export interface PhotoCreateResponse {
  /**
   * Upload success status.
   */
  success: boolean;
}

/**
 * Presigned URL for a user's profile photo.
 */
export interface PhotoListResponse {
  /**
   * Presigned URL for the profile photo, or null if no photo exists.
   */
  url: string | null;
}

export declare namespace Photo {
  export { type PhotoCreateResponse as PhotoCreateResponse, type PhotoListResponse as PhotoListResponse };
}
