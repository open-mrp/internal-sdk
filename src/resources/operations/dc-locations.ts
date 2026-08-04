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
   * Creates a distribution-center (DC) location for a customer.
   *
   * The location text is not checked for uniqueness, so one customer can hold
   * several locations with identical text.
   *
   * This endpoint requires the permission: `edi_runs:create`.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.create({
   *     customer_id: 'ac_opnlh43ymyee',
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
   * This endpoint requires the permission: `edi_runs:read`.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.retrieve(
   *     'dclo_qucvv7xm6trv',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DcLocation> {
    return this._client.get(path`/v1/operations/dc-locations/${id}`, options);
  }

  /**
   * Partially updates a DC location.
   *
   * Omitted fields are left unchanged.
   *
   * This endpoint requires the permission: `edi_runs:update`.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.update(
   *     'dclo_qucvv7xm6trv',
   *     { location: 'Warehouse B - Bay 1' },
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
   * Returns a paginated list of DC locations for the target account.
   *
   * Locations are ordered by creation time, newest first. The `q` search term
   * matches the location text and the name of the customer the location belongs to.
   *
   * This endpoint requires the permission: `edi_runs:read`.
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
   * Deletion is permanent. Deleting the same location again reports that it has
   * already been deleted rather than succeeding silently.
   *
   * This endpoint requires the permission: `edi_runs:delete`.
   *
   * @example
   * ```ts
   * const dcLocation =
   *   await client.operations.dcLocations.delete(
   *     'dclo_qucvv7xm6trv',
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
   * ID of the customer account this DC location belongs to.
   */
  customer_id: string;

  /**
   * Free-form description identifying the distribution-center location, such as a
   * warehouse name and bay (for example, `Warehouse A - Bay 3`).
   */
  location: string;
}

/**
 * A distribution-center (DC) location belonging to a customer, used when
 * processing orders received via EDI.
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
   * Identifying details of the customer a DC location belongs to.
   */
  customer: DcLocationCustomer | null;

  /**
   * Free-form description identifying this distribution-center location, such as a
   * warehouse name and bay (for example, `Warehouse A - Bay 3`).
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
 * Identifying details of the customer a DC location belongs to.
 */
export interface DcLocationCustomer {
  /**
   * Customer ID.
   */
  id: string;

  /**
   * Display name of the customer.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'customer';
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * Request to partially update a DC location.
 */
export interface UpdateDcLocationRequest {
  /**
   * ID of the customer account to reassign this DC location to.
   */
  customer_id?: string;

  /**
   * Free-form description identifying the distribution-center location, such as a
   * warehouse name and bay (for example, `Warehouse B - Bay 1`).
   */
  location?: string;
}

export interface DcLocationDeleteResponse {}

export interface DcLocationCreateParams {
  /**
   * ID of the customer account this DC location belongs to.
   */
  customer_id: string;

  /**
   * Free-form description identifying the distribution-center location, such as a
   * warehouse name and bay (for example, `Warehouse A - Bay 3`).
   */
  location: string;
}

export interface DcLocationUpdateParams {
  /**
   * ID of the customer account to reassign this DC location to.
   */
  customer_id?: string;

  /**
   * Free-form description identifying the distribution-center location, such as a
   * warehouse name and bay (for example, `Warehouse B - Bay 1`).
   */
  location?: string;
}

export interface DcLocationListParams {
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
