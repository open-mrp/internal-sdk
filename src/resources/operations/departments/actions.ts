// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as ActionsAPI from '../../catalog/item-categories/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage departments.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple departments matched by name (case-insensitive), then
   * writes asynchronously — 202 with a job to poll. Scanning stations and machines
   * are not assigned here.
   *
   * @example
   * ```ts
   * const job =
   *   await client.operations.departments.actions.bulkUpsert({
   *     departments: [{ name: 'Fabrication' }],
   *   });
   * ```
   */
  bulkUpsert(body: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/operations/departments/actions/bulk-upsert', { body, ...options });
  }

  /**
   * Starts an export of every matching department and returns the job that tracks
   * it.
   *
   * @example
   * ```ts
   * const job =
   *   await client.operations.departments.actions.export({
   *     q: null,
   *   });
   * ```
   */
  export(body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/operations/departments/actions/export', { body, ...options });
  }
}

/**
 * BulkUpsertDepartmentsRequest is the request to bulk upsert departments.
 */
export interface BulkUpsertDepartmentsRequest {
  /**
   * Departments to create or update, matched by name (case-insensitive) within the
   * account.
   */
  departments: Array<UpsertDepartmentInput>;
}

/**
 * Filters which departments land in the exported file.
 */
export interface ExportDepartmentsRequest {
  /**
   * Free-text search term matched against department names.
   */
  q: string | null;
}

/**
 * UpsertDepartmentInput is the input for a single department in a bulk upsert
 * operation.
 */
export interface UpsertDepartmentInput {
  /**
   * Display name of the department, used to match existing departments within the
   * account (case-insensitive). If it exists the department is updated in place;
   * otherwise a new department is created.
   */
  name: string;

  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  location?: ActionsAPI.ObjectIdentifier;

  /**
   * Free-form notes about the department. Preserved when omitted on update.
   */
  notes?: string;
}

export interface ActionBulkUpsertParams {
  /**
   * Departments to create or update, matched by name (case-insensitive) within the
   * account.
   */
  departments: Array<UpsertDepartmentInput>;
}

export interface ActionExportParams {
  /**
   * Free-text search term matched against department names.
   */
  q: string | null;
}

export declare namespace Actions {
  export {
    type BulkUpsertDepartmentsRequest as BulkUpsertDepartmentsRequest,
    type ExportDepartmentsRequest as ExportDepartmentsRequest,
    type UpsertDepartmentInput as UpsertDepartmentInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
