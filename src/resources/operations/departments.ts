// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as LocationsAPI from './locations';
import * as MachinesAPI from './machines';
import * as ScanningStationsAPI from './scanning-stations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage departments.
 */
export class Departments extends APIResource {
  /**
   * Creates a department.
   *
   * @example
   * ```ts
   * const department =
   *   await client.operations.departments.create({
   *     machine_ids: ['mc_01jm4r6700f8nwq3v5hx2d9ktp'],
   *     name: 'Fabrication',
   *     scanning_station_ids: [
   *       'scst_01jm4r6700f8nwq3v5hx2d9ktp',
   *     ],
   *   });
   * ```
   */
  create(body: DepartmentCreateParams, options?: RequestOptions): APIPromise<Department> {
    return this._client.post('/v1/operations/departments', { body, ...options });
  }

  /**
   * Returns a department by ID.
   *
   * @example
   * ```ts
   * const department =
   *   await client.operations.departments.retrieve(
   *     'dp_01gf7a8200er3ar3pkfrb6kk30',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: DepartmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Department> {
    return this._client.get(path`/v1/operations/departments/${id}`, { query, ...options });
  }

  /**
   * Partially updates a department. Adding scanning stations or machines is additive
   * and does not remove existing ones.
   *
   * @example
   * ```ts
   * const department =
   *   await client.operations.departments.update('', {
   *     machine_ids: ['string'],
   *     scanning_station_ids: ['string'],
   *     name: 'Production',
   *   });
   * ```
   */
  update(id: string, body: DepartmentUpdateParams, options?: RequestOptions): APIPromise<Department> {
    return this._client.patch(path`/v1/operations/departments/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of departments.
   *
   * @example
   * ```ts
   * const listDepartment =
   *   await client.operations.departments.list();
   * ```
   */
  list(
    query: DepartmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListDepartment> {
    return this._client.get('/v1/operations/departments', { query, ...options });
  }

  /**
   * Deletes a department. Fails if the department still has associated scanning
   * stations or machines.
   *
   * @example
   * ```ts
   * const department =
   *   await client.operations.departments.delete(
   *     'dp_01gf7a8200er3ar3pkfrb6kk30',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DepartmentDeleteResponse> {
    return this._client.delete(path`/v1/operations/departments/${id}`, options);
  }
}

/**
 * Department resource.
 */
export interface Department {
  /**
   * Department ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Location resource.
   */
  location: LocationsAPI.Location | null;

  /**
   * List represents a paginated list of resources.
   */
  machines: MachinesAPI.ListMachine | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes about the department.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'department';

  /**
   * List represents a paginated list of resources.
   */
  scanning_stations: ScanningStationsAPI.ListScanningStation | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListDepartment {
  /**
   * Resources in this page.
   */
  data: Array<Department>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface DepartmentDeleteResponse {}

export interface DepartmentCreateParams {
  /**
   * Machine IDs to connect.
   */
  machine_ids: Array<string>;

  /**
   * Display name.
   */
  name: string;

  /**
   * Scanning station IDs to connect.
   */
  scanning_station_ids: Array<string>;

  /**
   * Storage location ID.
   */
  location_id?: string;

  /**
   * Notes about the department.
   */
  notes?: string;
}

export interface DepartmentRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'location' | 'scanning_stations' | 'machines'>;
}

export interface DepartmentUpdateParams {
  /**
   * Machine IDs to connect (additive).
   */
  machine_ids: Array<string>;

  /**
   * Scanning station IDs to connect (additive).
   */
  scanning_station_ids: Array<string>;

  /**
   * Storage location ID.
   */
  location_id?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Notes about the department.
   */
  notes?: string;
}

export interface DepartmentListParams {
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

export declare namespace Departments {
  export {
    type Department as Department,
    type ListDepartment as ListDepartment,
    type DepartmentDeleteResponse as DepartmentDeleteResponse,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentRetrieveParams as DepartmentRetrieveParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
    type DepartmentListParams as DepartmentListParams,
  };
}
