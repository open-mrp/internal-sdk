// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as InvoicesAPI from '../invoices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionEmailReceivablesParams,
  ActionEmailReceivablesResponse,
  Actions,
  EmailReceivablesForCustomerRequest,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a paginated list of a customer's open invoices, newest first, in the
   * shape used to apply a payment.
   *
   * Only invoices that still owe a balance are returned; invoices marked paid in
   * full are omitted, while overpaid ones are kept because they still need
   * correcting. Invoices billed to the customer's child accounts are included
   * alongside its own, because the parent settles for them. Each invoice carries the
   * payments already allocated to it, so the remaining balance can be worked out
   * client-side.
   *
   * This endpoint requires the permissions: `invoices:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listInvoiceForPayment =
   *   await client.finance.accounts.retrieveInvoices('example');
   * ```
   */
  retrieveInvoices(
    accountID: string,
    query: AccountRetrieveInvoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListInvoiceForPayment> {
    return this._client.get(path`/v1/finance/accounts/${accountID}/invoices`, { query, ...options });
  }

  /**
   * Returns a paginated list of the transactions recorded against one customer
   * account, newest first.
   *
   * Transactions recorded against that customer's child accounts are included by
   * default. Free-text search matches the transaction number and note.
   *
   * This endpoint requires the permission: `transactions:read`.
   *
   * @example
   * ```ts
   * const listTransactionDetail =
   *   await client.finance.accounts.retrieveTransactions(
   *     'example',
   *   );
   * ```
   */
  retrieveTransactions(
    accountID: string,
    query: AccountRetrieveTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListTransactionDetail> {
    return this._client.get(path`/v1/finance/accounts/${accountID}/transactions`, { query, ...options });
  }
}

/**
 * A payment-oriented view of an invoice, as returned by List Customer Invoices.
 *
 * Carries the fields needed to apply a customer payment: the invoice total, the
 * allocations already applied, and the billing relationship of the customer being
 * charged. Only invoices that still owe a balance are represented.
 */
export interface InvoiceForPayment {
  /**
   * Invoice ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  allocations: InvoicesAPI.ListInvoiceAllocation | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  billing_address: APIKeysAPI.Address | null;

  /**
   * Timestamp when the invoice was created.
   */
  created_at: string;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: AnalyticsAPI.Customer | null;

  /**
   * Purchase order number the customer supplied for the underlying order.
   */
  customer_po: string | null;

  /**
   * Total amount billed by this invoice.
   */
  invoice_total: string;

  /**
   * Whether the invoice has been paid in full.
   *
   * Always `false` here, because only invoices that still owe a balance are listed.
   */
  is_paid_in_full: boolean;

  /**
   * Whether the billed customer is a child of a parent account.
   *
   * When `true`, `parent_account` identifies that parent.
   */
  is_parent_account: boolean;

  /**
   * Whether the billed customer's payment term is prepaid.
   */
  is_prepaid: boolean;

  /**
   * Invoice number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'invoice_for_payment';

  /**
   * An organization on OpenMRP, including its branding and customer portal
   * sub-resources.
   *
   * Your own account and any customer or supplier account you trade with are both
   * represented by this object.
   */
  parent_account: APIKeysAPI.Account | null;

  /**
   * Timestamp when the invoice was last updated.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListInvoiceForPayment {
  /**
   * Resources in this page.
   */
  data: Array<InvoiceForPayment>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListTransactionDetail {
  /**
   * Resources in this page.
   */
  data: Array<InvoicesAPI.TransactionDetail>;

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

export interface AccountRetrieveInvoicesParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer' | 'parent_account' | 'allocations'>;

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

export interface AccountRetrieveTransactionsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'allocations' | 'customer' | 'responsible_user' | 'responsible_user.user'>;

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

  /**
   * Filter by allocation status: `allocated` (marked fully applied to invoices) or
   * `unallocated` (still counted as an open credit).
   */
  status?: string;

  /**
   * Filter by transaction type code (`payment`, `credit_memo`, `adjustment`, or
   * `rebate`).
   */
  type?: string;
}

Accounts.Actions = Actions;

export declare namespace Accounts {
  export {
    type InvoiceForPayment as InvoiceForPayment,
    type ListInvoiceForPayment as ListInvoiceForPayment,
    type ListTransactionDetail as ListTransactionDetail,
    type AccountRetrieveInvoicesParams as AccountRetrieveInvoicesParams,
    type AccountRetrieveTransactionsParams as AccountRetrieveTransactionsParams,
  };

  export {
    Actions as Actions,
    type EmailReceivablesForCustomerRequest as EmailReceivablesForCustomerRequest,
    type ActionEmailReceivablesResponse as ActionEmailReceivablesResponse,
    type ActionEmailReceivablesParams as ActionEmailReceivablesParams,
  };
}
