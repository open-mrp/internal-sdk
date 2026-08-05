// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../items/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage parts.
 */
export class Actions extends APIResource {
  /**
   * Exports the parts matching the given filters as an Excel workbook.
   *
   * The workbook holds one row per part with its ID, SKU, description, category, and
   * unit price and unit cost alongside the units they are quoted in, followed by one
   * column for each property defined on the exported parts' categories. Every match
   * is exported in a single file, so this endpoint is not paginated.
   *
   * This endpoint requires the permissions: `parts:read`, `customers:read`,
   * `suppliers:read`.
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
  ): APIPromise<ActionsAPI.FileDownload> {
    return this._client.get('/v1/catalog/parts/actions/export', { query, ...options });
  }
}

export interface ActionExportParams {
  /**
   * Only return parts carrying at least one of these attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Only return parts belonging to any of these item categories.
   */
  category_ids?: Array<string>;

  /**
   * Only return parts created at or before this time.
   */
  ends_at?: string;

  /**
   * Free-text search term matched against the part's SKU or description.
   */
  q?: string;

  /**
   * Only return parts created at or after this time.
   */
  starts_at?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
