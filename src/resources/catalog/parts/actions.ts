// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InventoryChangeLogsActionsAPI from '../../operations/inventory-change-logs/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage parts.
 */
export class Actions extends APIResource {
  /**
   * Exports all matching parts as an Excel file.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.catalog.parts.actions.export();
   * ```
   */
  export(
    query: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryChangeLogsActionsAPI.FileDownload> {
    return this._client.get('/v1/catalog/parts/actions/export', { query, ...options });
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
   * Filter by attribute IDs.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by category IDs.
   */
  category_ids?: Array<string>;

  /**
   * End of creation date range.
   */
  end_date?: string;

  /**
   * Optional search query.
   */
  q?: string;

  /**
   * Start of creation date range.
   */
  start_date?: string;
}

export declare namespace Actions {
  export { type FileDownload as FileDownload, type ActionExportParams as ActionExportParams };
}
