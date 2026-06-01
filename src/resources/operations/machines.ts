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
   * Creates a machine and associates it with a department.
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
   * Returns a paginated list of machines for the target account.
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
   * Department ID.
   */
  department_id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Serial number.
   */
  serial_number: string;

  /**
   * Notes.
   */
  notes?: string;
}

/**
 * Request to partially update a machine.
 */
export interface UpdateMachineRequest {
  /**
   * Display name.
   */
  name?: string;

  /**
   * Notes.
   */
  notes?: string;

  /**
   * Serial number.
   */
  serial_number?: string;
}

export interface MachineDeleteResponse {}

export interface MachineCreateParams {
  /**
   * Body param: Department ID.
   */
  department_id: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Serial number.
   */
  serial_number: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department'>;

  /**
   * Body param: Notes.
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
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Notes.
   */
  notes?: string;

  /**
   * Body param: Serial number.
   */
  serial_number?: string;
}

export interface MachineListParams {
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
