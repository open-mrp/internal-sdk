// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as InvoicesAPI from '../invoices';
import * as CustomersAPI from '../../sales/customers/customers';
import * as AccountsAPI from './accounts/accounts';
import { AccountRetrieveParams, Accounts } from './accounts/accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List, export, and email receivable entries.
 */
export class Receivables extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);

  /**
   * Returns a paginated list of receivable entries for the current account.
   *
   * @example
   * ```ts
   * const listReceivableEntry =
   *   await client.finance.receivables.list();
   * ```
   */
  list(
    query: ReceivableListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListReceivableEntry> {
    return this._client.get('/v1/finance/receivables', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListReceivableEntry {
  /**
   * Resources in this page.
   */
  data: Array<ListReceivableEntry.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ListReceivableEntry {
  /**
   * Outstanding receivable tied to an invoice.
   */
  export interface Data {
    /**
     * Customer account.
     */
    customer: CustomersAPI.Customer | null;

    /**
     * Full invoice with expandable lines and allocations.
     */
    invoice: InvoicesAPI.Invoice | null;

    /**
     * Invoice creation date.
     */
    invoiced_at: string;

    /**
     * Whether the invoice has been paid in full.
     */
    is_paid_in_full: boolean;

    /**
     * Resource type identifier.
     */
    object: 'receivable_entry';

    /**
     * Purchase order number, if any.
     */
    po_number: string | null;

    /**
     * Remaining balance on the invoice.
     */
    remaining_balance: string;
  }
}

export interface ReceivableListParams {
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

Receivables.Accounts = Accounts;

export declare namespace Receivables {
  export {
    type ListReceivableEntry as ListReceivableEntry,
    type ReceivableListParams as ReceivableListParams,
  };

  export { Accounts as Accounts, type AccountRetrieveParams as AccountRetrieveParams };
}
