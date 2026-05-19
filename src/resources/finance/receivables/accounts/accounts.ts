// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReceivablesAPI from '../receivables';
import * as ActionsAPI from './actions';
import { ActionRetrieveExportParams, ActionRetrieveExportResponse, Actions } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, export, and email receivable entries.
 */
export class Accounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a paginated list of receivable entries for a specific customer account.
   *
   * @example
   * ```ts
   * const listReceivableEntry =
   *   await client.finance.receivables.accounts.retrieve(
   *     'account_id',
   *   );
   * ```
   */
  retrieve(
    accountID: string,
    query: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReceivablesAPI.ListReceivableEntry> {
    return this._client.get(path`/v1/finance/receivables/accounts/${accountID}`, { query, ...options });
  }
}

export interface AccountRetrieveParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Cutoff date for the receivables snapshot.
   */
  cutoff_date?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

Accounts.Actions = Actions;

export declare namespace Accounts {
  export { type AccountRetrieveParams as AccountRetrieveParams };

  export {
    Actions as Actions,
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
  };
}
