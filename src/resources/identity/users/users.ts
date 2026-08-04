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
   * Retrieves a user's global profile.
   *
   * The profile is shared across every account the user belongs to; account-specific
   * details such as their status, role, and department live on the account user
   * record instead.
   *
   * This endpoint requires the permission: `team:read`.
   *
   * @example
   * ```ts
   * const user = await client.identity.users.retrieve(
   *   'us_43irtlt2ajz6',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AuthAPI.User> {
    return this._client.get(path`/v1/identity/users/${id}`, options);
  }

  /**
   * Updates a user's global profile.
   *
   * Changes apply everywhere the user appears, in every account they belong to.
   * Account-specific details such as their status, role, and department are changed
   * on the account user record instead.
   *
   * This endpoint requires the permission: `team:update`.
   *
   * @example
   * ```ts
   * const user = await client.identity.users.update(
   *   'us_43irtlt2ajz6',
   *   {
   *     image_url:
   *       'https://cdn.augno.com/avatars/us_43irtlt2ajz6.jpg',
   *     name: 'John Doe',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthAPI.User> {
    return this._client.patch(path`/v1/identity/users/${id}`, { body, ...options });
  }
}

/**
 * Request to update a user.
 */
export interface UpdateUserRequest {
  /**
   * When the user's email address was verified.
   *
   * Setting this marks the address as verified outright; no verification email is
   * sent and no verification link is checked.
   */
  email_verified?: string;

  /**
   * Location of the user's profile image.
   *
   * Uploading a photo through Upload User Photo overwrites whatever is set here.
   */
  image_url?: string;

  /**
   * The user's full display name.
   */
  name?: string;
}

export interface UserUpdateParams {
  /**
   * When the user's email address was verified.
   *
   * Setting this marks the address as verified outright; no verification email is
   * sent and no verification link is checked.
   */
  email_verified?: string;

  /**
   * Location of the user's profile image.
   *
   * Uploading a photo through Upload User Photo overwrites whatever is set here.
   */
  image_url?: string;

  /**
   * The user's full display name.
   */
  name?: string;
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
