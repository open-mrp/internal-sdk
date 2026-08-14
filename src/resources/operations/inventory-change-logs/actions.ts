// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesActionsAPI from '../../sales/account-prices/actions';
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
   * is included in the download, newest first. The download is named for the date
   * range you requested, using `all` in place of a bound you left open.
   *
   * This endpoint requires the permission: `inventory_logs:read`.
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
  ): APIPromise<AccountPricesActionsAPI.FileDownload> {
    return this._client.get('/v1/operations/inventory-change-logs/actions/export', { query, ...options });
  }
}

export interface ActionExportParams {
  /**
   * Restricts results to these action types (`scan`, `user_action`, `system_action`,
   * `user_correction`).
   */
  action_type_codes?: Array<string>;

  /**
   * Restricts results to changes made by these users.
   *
   * Changes that were recorded without a responsible user are excluded whenever this
   * filter is set.
   */
  changed_by_user_ids?: Array<string>;

  /**
   * Restricts results to change logs created on or before this timestamp.
   */
  ends_at?: string;

  /**
   * Restricts results to changes affecting these items.
   */
  item_ids?: Array<string>;

  /**
   * Restricts results to change logs created on or after this timestamp.
   */
  starts_at?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
