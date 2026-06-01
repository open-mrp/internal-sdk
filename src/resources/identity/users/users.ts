// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from '../../auth/auth';
import * as PhotoAPI from './photo';
import { Photo, UserPhotoURL, UserPhotoUploadResult } from './photo';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve and manage user profiles.
 */
export class Users extends APIResource {
  photo: PhotoAPI.Photo = new PhotoAPI.Photo(this._client);

  /**
   * Returns a user by ID.
   *
   * @example
   * ```ts
   * const user = await client.identity.users.retrieve(
   *   'us_0151164dcaea4cbded27b50aae',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AuthAPI.User> {
    return this._client.get(path`/v1/identity/users/${id}`, options);
  }

  /**
   * Partially updates a user's profile.
   *
   * @example
   * ```ts
   * const user = await client.identity.users.update(
   *   'us_0151164dcaea4cbded27b50aae',
   *   {
   *     email_verified: '2019-12-27T18:11:19.117Z',
   *     image_url:
   *       'https://cdn.augno.com/avatars/us_0151164dcaea4cbded27b50aae.jpg',
   *     name: 'John Doe',
   *   },
   * );
   * ```
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<AuthAPI.User> {
    return this._client.patch(path`/v1/identity/users/${id}`, { body, ...options });
  }
}

/**
 * Request to update a user.
 */
export interface UpdateUserRequest {
  /**
   * Email verification timestamp. Set to null to mark as unverified.
   */
  email_verified: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * Display name.
   */
  name: string | null;
}

export interface UserUpdateParams {
  /**
   * Email verification timestamp. Set to null to mark as unverified.
   */
  email_verified: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * Display name.
   */
  name: string | null;
}

Users.Photo = Photo;

export declare namespace Users {
  export { type UpdateUserRequest as UpdateUserRequest, type UserUpdateParams as UserUpdateParams };

  export {
    Photo as Photo,
    type UserPhotoUploadResult as UserPhotoUploadResult,
    type UserPhotoURL as UserPhotoURL,
  };
}
