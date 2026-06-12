// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActionsAPI from '../../../catalog/items/actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, export, and email receivable entries.
 */
export class Actions extends APIResource {
  /**
   * Exports all outstanding receivable entries for a specific customer account as a
   * CSV file.
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

export interface ActionExportParams {
  /**
   * Compute receivable balances as of this timestamp.
   *
   * Only invoices created before the cutoff are included, and only allocations made
   * before the cutoff are subtracted from each remaining balance. When omitted,
   * current balances are returned.
   */
  cutoff_date?: string;
}

export declare namespace Actions {
  export { type ActionExportParams as ActionExportParams };
}
