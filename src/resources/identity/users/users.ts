// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../../auth/actions';
import * as PhotoAPI from './photo';
import { Photo, PhotoCreateResponse, PhotoListResponse } from './photo';
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
   *   'us_01gf7a8200e9pvbd6bgyq395ae',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ActionsAPI.User> {
    return this._client.get(path`/v1/identity/users/${id}`, options);
  }

  /**
   * Partially updates a user's profile.
   *
   * @example
   * ```ts
   * const user = await client.identity.users.update(
   *   'us_01gf7a8200e9pvbd6bgyq395ae',
   *   {
   *     email_verified: null,
   *     image_url:
   *       'https://cdn.augno.com/avatars/us_01gf7a8200e9pvbd6bgyq395ae.jpg',
   *     name: 'John Doe',
   *   },
   * );
   * ```
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<ActionsAPI.User> {
    return this._client.patch(path`/v1/identity/users/${id}`, { body, ...options });
  }
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
  export { type UserUpdateParams as UserUpdateParams };

  export {
    Photo as Photo,
    type PhotoCreateResponse as PhotoCreateResponse,
    type PhotoListResponse as PhotoListResponse,
  };
}
