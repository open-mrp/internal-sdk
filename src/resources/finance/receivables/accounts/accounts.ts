// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReceivablesAPI from '../receivables';
import * as ActionsAPI from './actions';
import { ActionExportParams, Actions } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, export, and email receivable entries.
 */
export class Accounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a paginated list of outstanding receivable entries for a specific
   * customer account.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const listReceivableEntry =
   *   await client.finance.receivables.accounts.retrieve(
   *     'ac_01148680966698341a9c0976db',
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
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Compute receivable balances as of this timestamp.
   *
   * Only invoices created before the cutoff are included, and only allocations made
   * before the cutoff are subtracted from each remaining balance. When omitted,
   * current balances are returned.
   */
  cutoff_date?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

Accounts.Actions = Actions;

export declare namespace Accounts {
  export { type AccountRetrieveParams as AccountRetrieveParams };

  export { Actions as Actions, type ActionExportParams as ActionExportParams };
}
