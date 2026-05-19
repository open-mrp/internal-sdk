// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage materials.
 */
export class Actions extends APIResource {
  /**
   * Exports all matching materials as an Excel file.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.materials.actions.retrieveExport();
   * ```
   */
  retrieveExport(
    query: ActionRetrieveExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveExportResponse> {
    return this._client.get('/v1/catalog/materials/actions/export', { query, ...options });
  }
}

/**
 * FileDownload is a response type for endpoints that return a file (e.g. Excel
 * export). When the service returns \*FileDownload, the handler writes the body
 * with Content-Type and Content-Disposition.
 */
export interface ActionRetrieveExportResponse {}

export interface ActionRetrieveExportParams {
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
  export {
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
  };
}
