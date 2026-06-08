// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage DC locations.
 */
export class DcLocations extends APIResource {
  /**
   * Creates a DC location.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.create({
   *     customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *     location: 'Warehouse A - Bay 3',
   *   });
   * ```
   */
  create(body: DcLocationCreateParams, options?: RequestOptions): APIPromise<DcLocation> {
    return this._client.post('/v1/operations/dc-locations', { body, ...options });
  }

  /**
   * Returns a DC location by ID.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.retrieve(
   *     'dclo_0191ce9223b21dc31c9ee09b3e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DcLocation> {
    return this._client.get(path`/v1/operations/dc-locations/${id}`, options);
  }

  /**
   * Partially updates a DC location.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.update(
   *     'dclo_0191ce9223b21dc31c9ee09b3e',
   *   );
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
   * Returns a paginated list of DC locations for the current account.
   *
   * @example
   * ```ts
   * const listDcLocation =
   *   await client.operations.dcLocations.list();
   * ```
   */
  list(
    query: DcLocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListDcLocation> {
    return this._client.get('/v1/operations/dc-locations', { query, ...options });
  }

  /**
   * Deletes a DC location.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.delete(
   *     'dclo_0191ce9223b21dc31c9ee09b3e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DcLocationDeleteResponse> {
    return this._client.delete(path`/v1/operations/dc-locations/${id}`, options);
  }
}

/**
 * Request to create a DC location.
 */
export interface CreateDcLocationRequest {
  /**
   * Customer account ID.
   */
  customer_id: string;

  /**
   * Location description.
   */
  location: string;
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
  customer: DcLocationCustomer | null;

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

/**
 * Customer sub-resource on a DC location.
 */
export interface DcLocationCustomer {
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

/**
 * List represents a paginated list of resources.
 */
export interface ListDcLocation {
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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to partially update a DC location.
 */
export interface UpdateDcLocationRequest {
  /**
   * Customer account ID.
   */
  customer_id?: string;

  /**
   * Location description.
   */
  location?: string;
}

export interface DcLocationDeleteResponse {}

export interface DcLocationCreateParams {
  /**
   * Customer account ID.
   */
  customer_id: string;

  /**
   * Location description.
   */
  location: string;
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

export interface DcLocationListParams {
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
    type CreateDcLocationRequest as CreateDcLocationRequest,
    type DcLocation as DcLocation,
    type DcLocationCustomer as DcLocationCustomer,
    type ListDcLocation as ListDcLocation,
    type UpdateDcLocationRequest as UpdateDcLocationRequest,
    type DcLocationDeleteResponse as DcLocationDeleteResponse,
    type DcLocationCreateParams as DcLocationCreateParams,
    type DcLocationUpdateParams as DcLocationUpdateParams,
    type DcLocationListParams as DcLocationListParams,
  };
}
