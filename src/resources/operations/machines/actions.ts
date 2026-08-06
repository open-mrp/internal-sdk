// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as ActionsAPI from '../../catalog/item-categories/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage machines.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple machines for the account, matched by name or serial
   * number (case-insensitive), then writes asynchronously — 202 with a job to poll.
   *
   * @example
   * ```ts
   * const job =
   *   await client.operations.machines.actions.bulkUpsert({
   *     machines: [
   *       {
   *         name: 'CNC Router',
   *         serial_number: 'SN-2024-0001',
   *         department: {
   *           id: 'dp_m0jayebxnkos',
   *           name: 'Fabrication',
   *         },
   *       },
   *     ],
   *   });
   * ```
   */
  bulkUpsert(body: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/operations/machines/actions/bulk-upsert', { body, ...options });
  }

  /**
   * Starts an export of every matching machine and returns the job that tracks it.
   *
   * @example
   * ```ts
   * const job = await client.operations.machines.actions.export(
   *   { q: null },
   * );
   * ```
   */
  export(body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/operations/machines/actions/export', { body, ...options });
  }
}

/**
 * BulkUpsertMachinesRequest is the request to bulk upsert machines.
 */
export interface BulkUpsertMachinesRequest {
  /**
   * Machines to create or update, matched by name or serial number
   * (case-insensitive) within the account.
   */
  machines: Array<UpsertMachineInput>;
}

/**
 * Filters which machines land in the exported file.
 */
export interface ExportMachinesRequest {
  /**
   * Free-text search term matched against machine names.
   */
  q: string | null;
}

/**
 * UpsertMachineInput is the input for a single machine in a bulk upsert operation.
 */
export interface UpsertMachineInput {
  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  department: ActionsAPI.ObjectIdentifier;

  /**
   * Display name of the machine. Rows match existing machines by name or serial
   * number (case-insensitive); a row whose name and serial match two different
   * machines fails.
   */
  name: string;

  /**
   * Serial number of the machine. Also used for matching — see `name`.
   */
  serial_number: string;

  /**
   * Free-form notes about the machine. Preserved when omitted on update.
   */
  notes?: string;
}

export interface ActionBulkUpsertParams {
  /**
   * Machines to create or update, matched by name or serial number
   * (case-insensitive) within the account.
   */
  machines: Array<UpsertMachineInput>;
}

export interface ActionExportParams {
  /**
   * Free-text search term matched against machine names.
   */
  q: string | null;
}

export declare namespace Actions {
  export {
    type BulkUpsertMachinesRequest as BulkUpsertMachinesRequest,
    type ExportMachinesRequest as ExportMachinesRequest,
    type UpsertMachineInput as UpsertMachineInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
