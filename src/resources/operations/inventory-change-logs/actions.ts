// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../../catalog/items/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and export inventory change logs.
 */
export class Actions extends APIResource {
  /**
   * Exports inventory change logs matching the provided filters as an Excel file.
   *
   * Unlike the list endpoint, results are not paginated — every matching change log
   * is included in the download.
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
  ): APIPromise<ActionsAPI.FileDownload> {
    return this._client.get('/v1/operations/inventory-change-logs/actions/export', { query, ...options });
  }
}

export interface ActionExportParams {
  /**
   * Filter by the action that produced the change.
   */
  action_type_codes?: Array<string>;

  /**
   * Filter by the user responsible for the change.
   */
  changed_by_user_ids?: Array<string>;

  /**
   * Restricts results to change logs created on or before this timestamp.
   */
  end_date?: string;

  /**
   * Filter by item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Restricts results to change logs created on or after this timestamp.
   */
  start_date?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
