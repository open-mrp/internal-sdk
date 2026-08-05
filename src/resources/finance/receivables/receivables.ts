// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../invoices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
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
   * Returns a paginated list of outstanding receivable entries for the current
   * account, newest invoice first.
   *
   * One entry is returned per invoice that is not marked paid in full, across every
   * customer. A free-text search term (`q`) is matched against the invoice number
   * and the customer name.
   *
   * This endpoint requires the permission: `invoices:read`.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListReceivableEntry {
  /**
   * Resources in this page.
   */
  data: Array<ReceivableEntry>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * An outstanding balance owed on an invoice.
 *
 * Receivable entries are derived from invoices that have not been paid in full;
 * one entry is returned per open invoice.
 */
export interface ReceivableEntry {
  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * An invoice billing a customer for goods shipped against a sales order.
   */
  invoice: InvoicesAPI.Invoice | null;

  /**
   * Date the invoice was created.
   */
  invoiced_at: string;

  /**
   * Whether the invoice has been paid in full.
   *
   * Always `false` here, because only invoices that still owe a balance produce a
   * receivable entry.
   */
  is_paid_in_full: boolean;

  /**
   * Resource type identifier.
   */
  object: 'receivable_entry';

  /**
   * Purchase order number the customer supplied on the underlying sales order.
   */
  po_number: string | null;

  /**
   * Remaining unpaid balance on the invoice.
   *
   * Calculated as the invoiced total minus all transaction allocations applied to
   * the invoice. When a `cutoff_at` is supplied to the listing endpoint, only
   * allocations made before that date are subtracted.
   */
  remaining_balance: string;
}

export interface ReceivableListParams {
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
  cutoff_at?: string;

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

Receivables.Accounts = Accounts;

export declare namespace Receivables {
  export {
    type ListReceivableEntry as ListReceivableEntry,
    type ReceivableEntry as ReceivableEntry,
    type ReceivableListParams as ReceivableListParams,
  };

  export { Accounts as Accounts, type AccountRetrieveParams as AccountRetrieveParams };
}
