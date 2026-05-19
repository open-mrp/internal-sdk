// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as InvoicesAPI from '../invoices';
import * as TransactionsAPI from '../transactions';
import * as AccountsAPI from '../../identity/accounts';
import * as AddressesAPI from '../../sales/addresses';
import * as ActionsAPI from './actions';
import { ActionEmailReceivablesParams, ActionEmailReceivablesResponse, Actions } from './actions';
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
   * const response =
   *   await client.finance.accounts.retrieveInvoices(
   *     'account_id',
   *   );
   * ```
   */
  retrieveInvoices(
    accountID: string,
    query: AccountRetrieveInvoicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveInvoicesResponse> {
    return this._client.get(path`/v1/finance/accounts/${accountID}/invoices`, { query, ...options });
  }

  /**
   * Returns a paginated list of transactions for a customer account, optionally
   * including child account transactions.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.accounts.retrieveTransactions(
   *     'account_id',
   *   );
   * ```
   */
  retrieveTransactions(
    accountID: string,
    query: AccountRetrieveTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveTransactionsResponse> {
    return this._client.get(path`/v1/finance/accounts/${accountID}/transactions`, { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface AccountRetrieveInvoicesResponse {
  /**
   * Resources in this page.
   */
  data: Array<AccountRetrieveInvoicesResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace AccountRetrieveInvoicesResponse {
  /**
   * Invoice in the customer payment context.
   */
  export interface Data {
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
    billing_address: AddressesAPI.Address | null;

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
    parent_account: AccountsAPI.Account | null;

    /**
     * Timestamp when the invoice was last updated.
     */
    updated_at: string;
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface AccountRetrieveTransactionsResponse {
  /**
   * Resources in this page.
   */
  data: Array<TransactionsAPI.TransactionDetail>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AccountRetrieveInvoicesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

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
    type AccountRetrieveInvoicesResponse as AccountRetrieveInvoicesResponse,
    type AccountRetrieveTransactionsResponse as AccountRetrieveTransactionsResponse,
    type AccountRetrieveInvoicesParams as AccountRetrieveInvoicesParams,
    type AccountRetrieveTransactionsParams as AccountRetrieveTransactionsParams,
  };

  export {
    Actions as Actions,
    type ActionEmailReceivablesResponse as ActionEmailReceivablesResponse,
    type ActionEmailReceivablesParams as ActionEmailReceivablesParams,
  };
}
