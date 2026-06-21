// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../items/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage materials.
 */
export class Actions extends APIResource {
  /**
   * Exports all matching materials as an Excel file.
   *
   * This endpoint requires the permissions: `materials:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.catalog.materials.actions.export();
   * ```
   */
  export(
    query: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.FileDownload> {
    return this._client.get('/v1/catalog/materials/actions/export', { query, ...options });
  }
}

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
   * Free-text search query matched against materials.
   */
  q?: string;

  /**
   * Start of creation date range.
   */
  start_date?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
