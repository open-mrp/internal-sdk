// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActionsAPI from '../../../sales/account-prices/actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, export, and email receivable entries.
 */
export class Actions extends APIResource {
  /**
   * Exports a single customer's outstanding receivable entries as a downloadable CSV
   * file.
   *
   * The response is the file itself rather than a JSON resource, and it covers every
   * open invoice for the customer instead of one page of results. When a cutoff date
   * is supplied, it is included in the generated file name.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.finance.receivables.accounts.actions.export(
   *     'ac_ykxoradjoeb3',
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

export interface ActionExportParams {
  /**
   * Compute receivable balances as of this timestamp.
   *
   * Only invoices created before the cutoff are included, and only allocations made
   * before the cutoff are subtracted from each remaining balance. When omitted,
   * current balances are returned.
   */
  cutoff_at?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
