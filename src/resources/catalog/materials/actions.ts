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
   * Downloads the materials matching the given filters as an Excel workbook named
   * `materials.xlsx`.
   *
   * The filters and ordering work the same way as on the material list endpoint, but
   * the export is not paginated: every match lands in a single `Materials` sheet,
   * one row per material. Columns cover the ID, SKU, description, category, and the
   * unit price and unit cost with their units, plus one column for each property
   * defined on the exported materials' categories, filled in from their attributes.
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
   * Filter to materials carrying any of these attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter to materials in any of these categories.
   */
  category_ids?: Array<string>;

  /**
   * Filter to materials created on or before this date.
   */
  ends_at?: string;

  /**
   * Free-text search term matched against material SKU and description.
   */
  q?: string;

  /**
   * Filter to materials created on or after this date.
   */
  starts_at?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
