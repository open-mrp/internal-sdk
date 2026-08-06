// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionBulkUpsertParams,
  ActionExportParams,
  Actions,
  BulkUpsertLocationsRequest,
  ExportLocationsRequest,
  UpsertLocationInput,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage locations.
 */
export class Locations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a storage location, optionally placing it in the location hierarchy.
   *
   * This endpoint requires the permission: `locations:create`.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.create({
   *   name: 'Warehouse A',
   *   type: 'building',
   *   child_ids: ['lc_yonnys0hx3ju'],
   *   parent_id: 'lc_yonnys0hx3ju',
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
   * This endpoint requires the permission: `locations:read`.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.retrieve(
   *   'lc_yonnys0hx3ju',
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
   * This endpoint requires the permission: `locations:update`.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.update(
   *   'lc_yonnys0hx3ju',
   *   {
   *     child_ids: ['lc_yonnys0hx3ju'],
   *     name: 'Warehouse B',
   *     parent_id: 'lc_yonnys0hx3ju',
   *     type: 'section',
   *   },
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
   * Returns a paginated list of locations in your account, newest first.
   *
   * Every location is returned regardless of its depth in the hierarchy, so
   * top-level locations and their descendants appear side by side. The `q` search
   * term matches on location name.
   *
   * This endpoint requires the permission: `locations:read`.
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
   * This endpoint requires the permission: `locations:delete`.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.delete(
   *   'lc_yonnys0hx3ju',
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
   * This location's level in the storage hierarchy.
   *
   * The levels run from largest to smallest: `building`, `section`, `aisle`, `rack`,
   * `shelf`, `bin`. They are descriptive labels rather than a rule — the parent you
   * choose is not required to be the next level up.
   */
  type: AccountUsersAPI.LocationTypeCode;

  /**
   * Existing locations to attach beneath the new location.
   *
   * Each listed location is reparented onto the new location, detaching it from its
   * current parent. Every ID must belong to your account.
   */
  child_ids?: Array<string>;

  /**
   * The location this one sits under in the storage hierarchy.
   *
   * Must be an existing location in your account. Omit to create a top-level
   * location.
   */
  parent_id?: string;
}

/**
 * Request to partially update a location.
 */
export interface UpdateLocationRequest {
  /**
   * The locations that sit directly beneath this one.
   *
   * This replaces the full set of children: current children that are not listed are
   * detached and become top-level locations, and listed locations are reparented
   * onto this location. Send `null` to detach every child. Omit the field to leave
   * the existing children untouched.
   */
  child_ids?: Array<string> | null;

  /**
   * Display name of the location.
   *
   * Maximum 255 characters.
   */
  name?: string;

  /**
   * The location this one sits under in the storage hierarchy.
   *
   * Must be an existing location in your account, and cannot be the location being
   * updated. Send `null` to detach it from its parent and make it a top-level
   * location.
   */
  parent_id?: string | null;

  /**
   * This location's level in the storage hierarchy.
   *
   * The levels run from largest to smallest: `building`, `section`, `aisle`, `rack`,
   * `shelf`, `bin`. They are descriptive labels rather than a rule — the parent is
   * not required to be the next level up.
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
   * Body param: This location's level in the storage hierarchy.
   *
   * The levels run from largest to smallest: `building`, `section`, `aisle`, `rack`,
   * `shelf`, `bin`. They are descriptive labels rather than a rule — the parent you
   * choose is not required to be the next level up.
   */
  type: AccountUsersAPI.LocationTypeCode;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'parent' | 'children'>;

  /**
   * Body param: Existing locations to attach beneath the new location.
   *
   * Each listed location is reparented onto the new location, detaching it from its
   * current parent. Every ID must belong to your account.
   */
  child_ids?: Array<string>;

  /**
   * Body param: The location this one sits under in the storage hierarchy.
   *
   * Must be an existing location in your account. Omit to create a top-level
   * location.
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
   * Body param: The locations that sit directly beneath this one.
   *
   * This replaces the full set of children: current children that are not listed are
   * detached and become top-level locations, and listed locations are reparented
   * onto this location. Send `null` to detach every child. Omit the field to leave
   * the existing children untouched.
   */
  child_ids?: Array<string> | null;

  /**
   * Body param: Display name of the location.
   *
   * Maximum 255 characters.
   */
  name?: string;

  /**
   * Body param: The location this one sits under in the storage hierarchy.
   *
   * Must be an existing location in your account, and cannot be the location being
   * updated. Send `null` to detach it from its parent and make it a top-level
   * location.
   */
  parent_id?: string | null;

  /**
   * Body param: This location's level in the storage hierarchy.
   *
   * The levels run from largest to smallest: `building`, `section`, `aisle`, `rack`,
   * `shelf`, `bin`. They are descriptive labels rather than a rule — the parent is
   * not required to be the next level up.
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

Locations.Actions = Actions;

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

  export {
    Actions as Actions,
    type BulkUpsertLocationsRequest as BulkUpsertLocationsRequest,
    type ExportLocationsRequest as ExportLocationsRequest,
    type UpsertLocationInput as UpsertLocationInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
