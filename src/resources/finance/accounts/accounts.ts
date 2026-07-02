// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../invoices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionEmailReceivablesParams,
  ActionEmailReceivablesResponse,
  Actions,
  EmailReceivablesForCustomerRequest,
} from './actions';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns a paginated list of payment-oriented invoices for a specific customer
   * account, including invoices billed to its child accounts.
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
   * Returns a paginated list of transactions for a customer account, optionally
   * including child account transactions.
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
 * Carries the fields needed to apply customer payments: the invoice total,
 * paid-in-full state, and the allocations already applied.
 */
export interface InvoiceForPayment {
  /**
   * Invoice ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
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
  customer: CustomersAPI.Customer | null;

  /**
   * Purchase order number the customer supplied for the underlying order.
   */
  customer_po: string | null;

  /**
   * Total invoiced amount as a decimal string.
   */
  invoice_total: string;

  /**
   * Whether the invoice has been paid in full.
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
   * A customer account, including its branding and customer portal sub-resources.
   */
  parent_account: APIKeysAPI.Account | null;

  /**
   * Timestamp when the invoice was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
  include?: Array<'customer' | 'parent_account'>;

  /**
   * Whether to also include invoices billed to the customer's child accounts.
   *
   * Currently has no effect: invoices for child accounts are always included.
   */
  include_child_accounts?: boolean;

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
   * Whether to also include transactions recorded against the customer's child
   * accounts.
   *
   * Child account transactions are included unless this is set to `false`.
   */
  include_child_accounts?: boolean;

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
   * Filter by allocation status: `allocated` (fully allocated against invoices) or
   * `unallocated` (has an open balance).
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
