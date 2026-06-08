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
   * Returns a paginated list of invoices for a specific customer account, optionally
   * including child account invoices.
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
 * Invoice in the customer payment context.
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
   * Address with associated geolocation.
   */
  billing_address: APIKeysAPI.Address | null;

  /**
   * Timestamp when the invoice was created.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Customer's purchase order number.
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
   * Whether the customer is a parent account.
   */
  is_parent_account: boolean;

  /**
   * Whether the order was prepaid.
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
   * Account with optional branding and portal sub-resources.
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer' | 'parent_account'>;

  /**
   * Whether to include child account invoices.
   */
  include_child_accounts?: boolean;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface AccountRetrieveTransactionsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Include transactions from child accounts. Defaults to true.
   */
  include_child_accounts?: boolean;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by allocation status.
   */
  status?: string;

  /**
   * Filter by transaction type.
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
