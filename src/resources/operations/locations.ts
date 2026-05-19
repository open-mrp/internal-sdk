// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
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
  create(params: LocationCreateParams, options?: RequestOptions): APIPromise<Location> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/locations', { query: { include }, body, ...options });
  }

  /**
   * Returns a location by ID.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.retrieve(
   *   'lc_01gf7a8200er3ar3pkfrb6kk30',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: LocationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Location> {
    return this._client.get(path`/v1/operations/locations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a location.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.update(
   *   '',
   *   { name: 'Warehouse B' },
   * );
   * ```
   */
  update(
    id: string,
    params: LocationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Location> {
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
  ): APIPromise<ListLocation> {
    return this._client.get('/v1/operations/locations', { query, ...options });
  }

  /**
   * Deletes a location. Fails if the location has child locations.
   *
   * @example
   * ```ts
   * const location = await client.operations.locations.delete(
   *   'lc_01gf7a8200er3ar3pkfrb6kk30',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<LocationDeleteResponse> {
    return this._client.delete(path`/v1/operations/locations/${id}`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListLocation {
  /**
   * Resources in this page.
   */
  data: Array<Location>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Location resource.
 */
export interface Location {
  /**
   * Location ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  children: ListLocation | null;

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
  object: 'location';

  /**
   * Location resource.
   */
  parent: Location | null;

  /**
   * Location type code.
   */
  type: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
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
  child_ids?: Array<string> | null;

  /**
   * Body param: Parent location ID. Null for top-level locations.
   */
  parent_id?: string | null;
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
    type ListLocation as ListLocation,
    type Location as Location,
    type LocationDeleteResponse as LocationDeleteResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
  };
}
