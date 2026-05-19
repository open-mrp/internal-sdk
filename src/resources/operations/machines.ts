// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as DepartmentsAPI from './departments';
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
   *   department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
   *   name: 'CNC Router',
   *   serial_number: 'SN-2024-0001',
   * });
   * ```
   */
  create(body: MachineCreateParams, options?: RequestOptions): APIPromise<Machine> {
    return this._client.post('/v1/operations/machines', { body, ...options });
  }

  /**
   * Returns a machine by ID.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.retrieve(
   *   'mc_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: MachineRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Machine> {
    return this._client.get(path`/v1/operations/machines/${id}`, { query, ...options });
  }

  /**
   * Partially updates a machine.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.update(
   *   'mc_01jm4r6700f8nwq3v5hx2d9ktp',
   *   { name: 'Updated CNC Router' },
   * );
   * ```
   */
  update(
    id: string,
    body: MachineUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Machine> {
    return this._client.patch(path`/v1/operations/machines/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of machines for the target account.
   *
   * @example
   * ```ts
   * const listMachine = await client.operations.machines.list();
   * ```
   */
  list(query: MachineListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListMachine> {
    return this._client.get('/v1/operations/machines', { query, ...options });
  }

  /**
   * Deletes a machine.
   *
   * @example
   * ```ts
   * const machine = await client.operations.machines.delete(
   *   'mc_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MachineDeleteResponse> {
    return this._client.delete(path`/v1/operations/machines/${id}`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMachine {
  /**
   * Resources in this page.
   */
  data: Array<Machine>;

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
 * Machine within an account.
 */
export interface Machine {
  /**
   * Machine ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'machine';

  /**
   * Serial number.
   */
  serial_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface MachineDeleteResponse {}

export interface MachineCreateParams {
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

export interface MachineRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department'>;
}

export interface MachineUpdateParams {
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
    type ListMachine as ListMachine,
    type Machine as Machine,
    type MachineDeleteResponse as MachineDeleteResponse,
    type MachineCreateParams as MachineCreateParams,
    type MachineRetrieveParams as MachineRetrieveParams,
    type MachineUpdateParams as MachineUpdateParams,
    type MachineListParams as MachineListParams,
  };
}
