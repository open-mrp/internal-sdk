// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and export inventory change logs.
 */
export class Actions extends APIResource {
  /**
   * Exports inventory change logs matching the provided filters as an Excel file.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.operations.inventoryChangeLogs.actions.export();
   * ```
   */
  export(
    query: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileDownload> {
    return this._client.get('/v1/operations/inventory-change-logs/actions/export', { query, ...options });
  }
}

/**
 * FileDownload is a response type for endpoints that return a file (e.g. Excel
 * export). When the service returns \*FileDownload, the handler writes the body
 * with Content-Type and Content-Disposition.
 */
export interface FileDownload {}

export interface ActionExportParams {
  /**
   * Filter by action type codes.
   */
  action_type_codes?: Array<string>;

  /**
   * Filter by responsible user IDs.
   */
  changed_by_user_ids?: Array<string>;

  /**
   * Filter change logs created on or before this date.
   */
  end_date?: string;

  /**
   * Filter by item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Filter change logs created on or after this date.
   */
  start_date?: string;
}

export declare namespace Actions {
  export { type FileDownload as FileDownload, type ActionExportParams as ActionExportParams };
}
