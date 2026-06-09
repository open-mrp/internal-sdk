// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvoicesAPI from '../finance/invoices';
import * as AccountUsersAPI from '../identity/account-users/account-users';
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
   *     name: 'Fabrication',
   *     machine_ids: ['mc_0177d18f55a1615f783d3bf8d0'],
   *     scanning_station_ids: [
   *       'scst_0129335dd6286056a97024fcc1',
   *     ],
   *   });
   * ```
   */
  create(params: DepartmentCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.Department> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/departments', { query: { include }, body, ...options });
  }

  /**
   * Returns a department by ID.
   *
   * @example
   * ```ts
   * const department =
   *   await client.operations.departments.retrieve(
   *     'dp_01791c25ab59da4704cba61874',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: DepartmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Department> {
    return this._client.get(path`/v1/operations/departments/${id}`, { query, ...options });
  }

  /**
   * Partially updates a department. Adding scanning stations or machines is additive
   * and does not remove existing ones.
   *
   * @example
   * ```ts
   * const department =
   *   await client.operations.departments.update(
   *     'dp_01791c25ab59da4704cba61874',
   *     { name: 'Production' },
   *   );
   * ```
   */
  update(
    id: string,
    params: DepartmentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Department> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/departments/${id}`, {
      query: { include },
      body,
      ...options,
    });
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
  ): APIPromise<InvoicesAPI.ListDepartment> {
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
   *     'dp_01791c25ab59da4704cba61874',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DepartmentDeleteResponse> {
    return this._client.delete(path`/v1/operations/departments/${id}`, options);
  }
}

/**
 * Request to create a department.
 */
export interface CreateDepartmentRequest {
  /**
   * Display name.
   */
  name: string;

  /**
   * Storage location ID.
   */
  location_id?: string;

  /**
   * Machine IDs to connect.
   */
  machine_ids?: Array<string>;

  /**
   * Notes about the department.
   */
  notes?: string;

  /**
   * Scanning station IDs to connect.
   */
  scanning_station_ids?: Array<string>;
}

/**
 * Request to partially update a department.
 */
export interface UpdateDepartmentRequest {
  /**
   * Storage location ID.
   */
  location_id?: string;

  /**
   * Machine IDs to connect (additive).
   */
  machine_ids?: Array<string>;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Notes about the department.
   */
  notes?: string;

  /**
   * Scanning station IDs to connect (additive).
   */
  scanning_station_ids?: Array<string>;
}

export interface DepartmentDeleteResponse {}

export interface DepartmentCreateParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'location' | 'scanning_stations' | 'machines'>;

  /**
   * Body param: Storage location ID.
   */
  location_id?: string;

  /**
   * Body param: Machine IDs to connect.
   */
  machine_ids?: Array<string>;

  /**
   * Body param: Notes about the department.
   */
  notes?: string;

  /**
   * Body param: Scanning station IDs to connect.
   */
  scanning_station_ids?: Array<string>;
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
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'location' | 'scanning_stations' | 'machines'>;

  /**
   * Body param: Storage location ID.
   */
  location_id?: string;

  /**
   * Body param: Machine IDs to connect (additive).
   */
  machine_ids?: Array<string>;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Notes about the department.
   */
  notes?: string;

  /**
   * Body param: Scanning station IDs to connect (additive).
   */
  scanning_station_ids?: Array<string>;
}

export interface DepartmentListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'location' | 'scanning_stations' | 'machines'>;

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
    type CreateDepartmentRequest as CreateDepartmentRequest,
    type UpdateDepartmentRequest as UpdateDepartmentRequest,
    type DepartmentDeleteResponse as DepartmentDeleteResponse,
    type DepartmentCreateParams as DepartmentCreateParams,
    type DepartmentRetrieveParams as DepartmentRetrieveParams,
    type DepartmentUpdateParams as DepartmentUpdateParams,
    type DepartmentListParams as DepartmentListParams,
  };
}
