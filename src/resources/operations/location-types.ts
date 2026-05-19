// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
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
   *   await client.operations.locationTypes.retrieve('id');
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
   * const response =
   *   await client.operations.locationTypes.retrieveLocationTypes();
   * ```
   */
  retrieveLocationTypes(
    query: LocationTypeRetrieveLocationTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationTypeRetrieveLocationTypesResponse> {
    return this._client.get('/v1/operations/location-types', { query, ...options });
  }
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
   * Location type code.
   */
  code: 'building' | 'section' | 'aisle' | 'rack' | 'shelf' | 'bin';

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

/**
 * List represents a paginated list of resources.
 */
export interface LocationTypeRetrieveLocationTypesResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface LocationTypeRetrieveLocationTypesParams {
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
    type LocationType as LocationType,
    type LocationTypeRetrieveLocationTypesResponse as LocationTypeRetrieveLocationTypesResponse,
    type LocationTypeRetrieveLocationTypesParams as LocationTypeRetrieveLocationTypesParams,
  };
}
