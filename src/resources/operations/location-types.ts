// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage locations.
 */
export class LocationTypes extends APIResource {
  /**
   * Returns a location type by ID or code.
   *
   * @example
   * ```ts
   * const locationType =
   *   await client.operations.locationTypes.retrieve(
   *     'lc_01e69cd3745a1bc0dd485986c0',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LocationType> {
    return this._client.get(path`/v1/operations/location-types/${id}`, options);
  }

  /**
   * Returns a paginated list of location types.
   *
   * @example
   * ```ts
   * const listLocationType =
   *   await client.operations.locationTypes.list();
   * ```
   */
  list(
    query: LocationTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListLocationType> {
    return this._client.get('/v1/operations/location-types', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListLocationType {
  /**
   * Resources in this page.
   */
  data: Array<LocationType>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * LocationType resource.
 */
export interface LocationType {
  /**
   * Location ID.
   */
  id: string;

  /**
   * Location type code, identifying the level of the storage hierarchy this type
   * represents.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  code: AccountUsersAPI.LocationTypeCode;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'location_type';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export interface LocationTypeListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace LocationTypes {
  export {
    type ListLocationType as ListLocationType,
    type LocationType as LocationType,
    type LocationTypeListParams as LocationTypeListParams,
  };
}
