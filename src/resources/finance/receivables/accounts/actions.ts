// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActionsAPI from '../../../operations/inventory-change-logs/actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, export, and email receivable entries.
 */
export class Actions extends APIResource {
  /**
   * Exports all receivable entries for a specific customer account as a CSV file.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.finance.receivables.accounts.actions.export(
   *     'ac_01148680966698341a9c0976db',
   *   );
   * ```
   */
  export(
    accountID: string,
    query: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.FileDownload> {
    return this._client.get(path`/v1/finance/receivables/accounts/${accountID}/actions/export`, {
      query,
      ...options,
    });
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
   * Cutoff date for the receivables snapshot.
   */
  cutoff_date?: string;
}

export declare namespace Actions {
  export { type FileDownload as FileDownload, type ActionExportParams as ActionExportParams };
}
