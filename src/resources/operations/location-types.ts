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
   * This endpoint requires the permission: `locations:read`.
   *
   * @example
   * ```ts
   * const locationType =
   *   await client.operations.locationTypes.retrieve(
   *     'lc_ra08sngd0fxr',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LocationType> {
    return this._client.get(path`/v1/operations/location-types/${id}`, options);
  }

  /**
   * Returns a paginated list of location types.
   *
   * Location types are platform-defined and the same for every account, so this list
   * is the complete set of levels you can assign when creating a location. The `q`
   * search term matches on location type name.
   *
   * This endpoint requires the permission: `locations:read`.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A level in the storage location hierarchy, such as a building or a bin.
 *
 * Location types are platform-defined and identical for every account: you choose
 * one when creating a location, but you cannot add or modify the types themselves.
 */
export interface LocationType {
  /**
   * Location type ID.
   */
  id: string;

  /**
   * The level of the storage hierarchy this type represents.
   *
   * The levels run from largest to smallest: `building`, `section`, `aisle`, `rack`,
   * `shelf`, `bin`.
   */
  code: AccountUsersAPI.LocationTypeCode;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name of the location type.
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
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
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
