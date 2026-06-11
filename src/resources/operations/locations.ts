// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage locations.
 */
export class Locations extends APIResource {
  /**
   * Creates a storage location, optionally placing it in the location hierarchy.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.create({
   *   name: 'Warehouse A',
   *   type: 'building',
   * });
   * ```
   */
  create(params: LocationCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.Location> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/locations', { query: { include }, body, ...options });
  }

  /**
   * Returns a location by ID.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.retrieve(
   *   'lc_014d187d99b31926f0c74af9d8',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: LocationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Location> {
    return this._client.get(path`/v1/operations/locations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a location.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.update(
   *   'lc_014d187d99b31926f0c74af9d8',
   *   { name: 'Warehouse B' },
   * );
   * ```
   */
  update(
    id: string,
    params: LocationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Location> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/locations/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of locations in your account.
   *
   * @example
   * ```ts
   * const listLocation =
   *   await client.operations.locations.list();
   * ```
   */
  list(
    query: LocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ListLocation> {
    return this._client.get('/v1/operations/locations', { query, ...options });
  }

  /**
   * Deletes a location.
   *
   * Fails if the location has child locations; remove or reassign the children
   * first.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.delete(
   *   'lc_014d187d99b31926f0c74af9d8',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<LocationDeleteResponse> {
    return this._client.delete(path`/v1/operations/locations/${id}`, options);
  }
}

/**
 * Request to create a location.
 */
export interface CreateLocationRequest {
  /**
   * Display name of the location.
   *
   * Maximum 255 characters.
   */
  name: string;

  /**
   * Location type code, identifying this location's level in the storage hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  type: AccountUsersAPI.LocationTypeCode;

  /**
   * IDs of existing locations to attach as children of the new location.
   *
   * Listed locations are moved from their current parent, if any.
   */
  child_ids?: Array<string>;

  /**
   * ID of the parent location.
   *
   * Omit for top-level locations.
   */
  parent_id?: string;
}

/**
 * Request to partially update a location.
 */
export interface UpdateLocationRequest {
  /**
   * IDs of locations to set as this location's children.
   *
   * When provided, replaces the full set of children: current children not listed
   * are detached, and listed locations are moved from their current parent. Send
   * `null` to detach all children.
   */
  child_ids?: Array<string> | null;

  /**
   * Display name of the location.
   *
   * Maximum 255 characters.
   */
  name?: string;

  /**
   * ID of the parent location.
   *
   * Send `null` to clear the parent and make this a top-level location.
   */
  parent_id?: string | null;

  /**
   * Location type code, identifying this location's level in the storage hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  type?: AccountUsersAPI.LocationTypeCode;
}

export interface LocationDeleteResponse {}

export interface LocationCreateParams {
  /**
   * Body param: Display name of the location.
   *
   * Maximum 255 characters.
   */
  name: string;

  /**
   * Body param: Location type code, identifying this location's level in the storage
   * hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  type: AccountUsersAPI.LocationTypeCode;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'parent' | 'children'>;

  /**
   * Body param: IDs of existing locations to attach as children of the new location.
   *
   * Listed locations are moved from their current parent, if any.
   */
  child_ids?: Array<string>;

  /**
   * Body param: ID of the parent location.
   *
   * Omit for top-level locations.
   */
  parent_id?: string;
}

export interface LocationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'parent' | 'children'>;
}

export interface LocationUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'parent' | 'children'>;

  /**
   * Body param: IDs of locations to set as this location's children.
   *
   * When provided, replaces the full set of children: current children not listed
   * are detached, and listed locations are moved from their current parent. Send
   * `null` to detach all children.
   */
  child_ids?: Array<string> | null;

  /**
   * Body param: Display name of the location.
   *
   * Maximum 255 characters.
   */
  name?: string;

  /**
   * Body param: ID of the parent location.
   *
   * Send `null` to clear the parent and make this a top-level location.
   */
  parent_id?: string | null;

  /**
   * Body param: Location type code, identifying this location's level in the storage
   * hierarchy.
   *
   * - `building`: a building-level location.
   * - `section`: a section within a building.
   * - `aisle`: an aisle within a section.
   * - `rack`: a rack within an aisle.
   * - `shelf`: a shelf within a rack.
   * - `bin`: a bin within a shelf.
   */
  type?: AccountUsersAPI.LocationTypeCode;
}

export interface LocationListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'parent' | 'children'>;

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

export declare namespace Locations {
  export {
    type CreateLocationRequest as CreateLocationRequest,
    type UpdateLocationRequest as UpdateLocationRequest,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
  };
}
