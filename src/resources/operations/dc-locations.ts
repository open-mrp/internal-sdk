// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage DC locations.
 */
export class DcLocations extends APIResource {
  /**
   * Returns a DC location by ID.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: DcLocationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DcLocation> {
    return this._client.get(path`/v1/operations/dc-locations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a DC location.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.update('id', {
   *     location: 'Warehouse B - Bay 1',
   *   });
   * ```
   */
  update(
    id: string,
    body: DcLocationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DcLocation> {
    return this._client.patch(path`/v1/operations/dc-locations/${id}`, { body, ...options });
  }

  /**
   * Deletes a DC location.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DcLocationDeleteResponse> {
    return this._client.delete(path`/v1/operations/dc-locations/${id}`, options);
  }

  /**
   * Creates a DC location.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.dcLocations({
   *     customer_id: 'ac_01gf7a8200er3ar3pkfrb6kk29',
   *     location: 'Warehouse A - Bay 3',
   *   });
   * ```
   */
  dcLocations(body: DcLocationDcLocationsParams, options?: RequestOptions): APIPromise<DcLocation> {
    return this._client.post('/v1/operations/dc-locations', { body, ...options });
  }

  /**
   * Returns a paginated list of DC locations for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.dcLocations.retrieveDcLocations();
   * ```
   */
  retrieveDcLocations(
    query: DcLocationRetrieveDcLocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DcLocationRetrieveDcLocationsResponse> {
    return this._client.get('/v1/operations/dc-locations', { query, ...options });
  }
}

/**
 * DC location resource.
 */
export interface DcLocation {
  /**
   * DC location ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer sub-resource on a DC location.
   */
  customer: DcLocation.Customer | null;

  /**
   * Location description.
   */
  location: string;

  /**
   * Resource type identifier.
   */
  object: 'dc_location';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace DcLocation {
  /**
   * Customer sub-resource on a DC location.
   */
  export interface Customer {
    /**
     * Customer ID.
     */
    id: string;

    /**
     * Display name.
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'customer';
  }
}

export interface DcLocationDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface DcLocationRetrieveDcLocationsResponse {
  /**
   * Resources in this page.
   */
  data: Array<DcLocation>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface DcLocationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer'>;
}

export interface DcLocationUpdateParams {
  /**
   * Customer account ID.
   */
  customer_id?: string;

  /**
   * Location description.
   */
  location?: string;
}

export interface DcLocationDcLocationsParams {
  /**
   * Customer account ID.
   */
  customer_id: string;

  /**
   * Location description.
   */
  location: string;
}

export interface DcLocationRetrieveDcLocationsParams {
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

export declare namespace DcLocations {
  export {
    type DcLocation as DcLocation,
    type DcLocationDeleteResponse as DcLocationDeleteResponse,
    type DcLocationRetrieveDcLocationsResponse as DcLocationRetrieveDcLocationsResponse,
    type DcLocationRetrieveParams as DcLocationRetrieveParams,
    type DcLocationUpdateParams as DcLocationUpdateParams,
    type DcLocationDcLocationsParams as DcLocationDcLocationsParams,
    type DcLocationRetrieveDcLocationsParams as DcLocationRetrieveDcLocationsParams,
  };
}
