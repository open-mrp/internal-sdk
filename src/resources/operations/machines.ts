// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage machines.
 */
export class Machines extends APIResource {
  /**
   * Creates a machine and assigns it to a department.
   *
   * Returns a conflict error if a machine with the same name already exists.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.create({
   *   department_id: 'dp_01791c25ab59da4704cba61874',
   *   name: 'CNC Router',
   *   serial_number: 'SN-2024-0001',
   * });
   * ```
   */
  create(params: MachineCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.Machine> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/machines', { query: { include }, body, ...options });
  }

  /**
   * Returns a machine by ID.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.retrieve(
   *   'mc_0177d18f55a1615f783d3bf8d0',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: MachineRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Machine> {
    return this._client.get(path`/v1/operations/machines/${id}`, { query, ...options });
  }

  /**
   * Partially updates a machine.
   *
   * Only the fields provided in the request are changed. Returns a conflict error if
   * the new name is already in use by another machine.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.update(
   *   'mc_0177d18f55a1615f783d3bf8d0',
   *   { name: 'Updated CNC Router' },
   * );
   * ```
   */
  update(
    id: string,
    params: MachineUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Machine> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/machines/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of machines in your account.
   *
   * @example
   * ```ts
   * const listMachine = await client.operations.machines.list();
   * ```
   */
  list(
    query: MachineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ListMachine> {
    return this._client.get('/v1/operations/machines', { query, ...options });
  }

  /**
   * Deletes a machine.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.delete(
   *   'mc_0177d18f55a1615f783d3bf8d0',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MachineDeleteResponse> {
    return this._client.delete(path`/v1/operations/machines/${id}`, options);
  }
}

/**
 * Request to create a machine.
 */
export interface CreateMachineRequest {
  /**
   * ID of the department this machine belongs to.
   *
   * Must reference a department in your account.
   */
  department_id: string;

  /**
   * Display name of the machine.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name: string;

  /**
   * Serial number of the machine.
   *
   * Maximum 255 characters.
   */
  serial_number: string;

  /**
   * Free-form notes about the machine.
   */
  notes?: string;
}

/**
 * Request to partially update a machine.
 */
export interface UpdateMachineRequest {
  /**
   * Display name of the machine.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;

  /**
   * Free-form notes about the machine.
   */
  notes?: string;

  /**
   * Serial number of the machine.
   *
   * Maximum 255 characters.
   */
  serial_number?: string;
}

export interface MachineDeleteResponse {}

export interface MachineCreateParams {
  /**
   * Body param: ID of the department this machine belongs to.
   *
   * Must reference a department in your account.
   */
  department_id: string;

  /**
   * Body param: Display name of the machine.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name: string;

  /**
   * Body param: Serial number of the machine.
   *
   * Maximum 255 characters.
   */
  serial_number: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department'>;

  /**
   * Body param: Free-form notes about the machine.
   */
  notes?: string;
}

export interface MachineRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department'>;
}

export interface MachineUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department'>;

  /**
   * Body param: Display name of the machine.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;

  /**
   * Body param: Free-form notes about the machine.
   */
  notes?: string;

  /**
   * Body param: Serial number of the machine.
   *
   * Maximum 255 characters.
   */
  serial_number?: string;
}

export interface MachineListParams {
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

export declare namespace Machines {
  export {
    type CreateMachineRequest as CreateMachineRequest,
    type UpdateMachineRequest as UpdateMachineRequest,
    type MachineDeleteResponse as MachineDeleteResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
  };
}
