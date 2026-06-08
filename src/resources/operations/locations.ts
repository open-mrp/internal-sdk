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
   * Creates a location for the caller's account.
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
   * Returns a paginated list of locations for the caller's account.
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
   * Deletes a location. Fails if the location has child locations.
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
   * Display name.
   */
  name: string;

  /**
   * Location type code.
   */
  type: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

  /**
   * IDs of child locations to attach.
   */
  child_ids?: Array<string>;

  /**
   * Parent location ID. Null for top-level locations.
   */
  parent_id?: string;
}

/**
 * Request to partially update a location.
 */
export interface UpdateLocationRequest {
  /**
   * Child location IDs. Replaces all current children when provided. Send null to
   * clear.
   */
  child_ids?: Array<string> | null;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Parent location ID. Send null to clear.
   */
  parent_id?: string | null;

  /**
   * Location type code.
   */
  type?: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';
}

export interface LocationDeleteResponse {}

export interface LocationCreateParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Location type code.
   */
  type: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'parent' | 'children'>;

  /**
   * Body param: IDs of child locations to attach.
   */
  child_ids?: Array<string>;

  /**
   * Body param: Parent location ID. Null for top-level locations.
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
   * Body param: Child location IDs. Replaces all current children when provided.
   * Send null to clear.
   */
  child_ids?: Array<string> | null;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Parent location ID. Send null to clear.
   */
  parent_id?: string | null;

  /**
   * Body param: Location type code.
   */
  type?: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';
}

export interface LocationListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'parent' | 'children'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
