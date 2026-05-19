// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
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
   * const response =
   *   await client.finance.receivables.accounts.actions.retrieveExport(
   *     'ac_01gf7a8200eaj8fke1xvw4h50x',
   *   );
   * ```
   */
  retrieveExport(
    accountID: string,
    query: ActionRetrieveExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveExportResponse> {
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
export interface ActionRetrieveExportResponse {}

export interface ActionRetrieveExportParams {
  /**
   * Cutoff date for the receivables snapshot.
   */
  cutoff_date?: string;
}

export declare namespace Actions {
  export {
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
  };
}
