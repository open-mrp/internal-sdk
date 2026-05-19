// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as PaymentTermsAPI from './payment-terms';
import * as TransactionsAPI from './transactions';
import * as OperationsAPI from '../operations/operations';
import * as AddressesAPI from '../sales/addresses';
import * as BatchesAPI from '../operations/batches/batches';
import * as ShipmentsAPI from '../operations/shipments/shipments';
import * as CustomersAPI from '../sales/customers/customers';
import * as LinesAPI from '../sales/sales-orders/lines';
import * as SalesOrdersAPI from '../sales/sales-orders/sales-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List, view, and update invoices.
 */
export class Invoices extends APIResource {
  /**
   * Returns an invoice by ID.
   *
   * @example
   * ```ts
   * const invoice = await client.finance.invoices.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: InvoiceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Invoice> {
    return this._client.get(path`/v1/finance/invoices/${id}`, { query, ...options });
  }

  /**
   * Partially updates an invoice.
   *
   * @example
   * ```ts
   * const invoiceSummary = await client.finance.invoices.update(
   *   'id',
   *   {
   *     has_been_sent: true,
   *     note: 'Payment received via wire transfer',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: InvoiceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceSummary> {
    return this._client.patch(path`/v1/finance/invoices/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of invoices for the current account.
   *
   * @example
   * ```ts
   * const invoices = await client.finance.invoices.list();
   * ```
   */
  list(
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListResponse> {
    return this._client.get('/v1/finance/invoices', { query, ...options });
  }
}

/**
 * Full invoice with expandable lines and allocations.
 */
export interface Invoice {
  /**
   * Invoice ID.
   */
  id: string;

  /**
   * Whether the customer accepts invoice emails.
   */
  accepts_invoice_emails: boolean;

  /**
   * List represents a paginated list of resources.
   */
  allocations: ListInvoiceAllocation | null;

  /**
   * Address with associated geolocation.
   */
  billing_address: AddressesAPI.Address | null;

  /**
   * Timestamp when the invoice was created.
   */
  created_at: string;

  /**
   * Whether the invoice has been sent.
   */
  has_been_sent: boolean;

  /**
   * Whether the invoice has been sent via EDI.
   */
  is_edi_sent: boolean;

  /**
   * Whether the invoice has been overpaid.
   */
  is_over_paid: boolean;

  /**
   * Whether the invoice has been paid in full.
   */
  is_paid_in_full: boolean;

  /**
   * List represents a paginated list of resources.
   */
  lines: Invoice.Lines | null;

  /**
   * Note attached to the invoice.
   */
  note: string | null;

  /**
   * Invoice number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'invoice';

  /**
   * Full sales order resource.
   */
  order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Full shipment resource.
   */
  shipment: ShipmentsAPI.ShipmentDetail | null;

  /**
   * Timestamp when the invoice was last updated.
   */
  updated_at: string;
}

export namespace Invoice {
  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<Lines.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Lines {
    /**
     * Line item in an invoice.
     */
    export interface Data {
      /**
       * Invoice line ID.
       */
      id: string;

      /**
       * Timestamp when the line was created.
       */
      created_at: string;

      /**
       * Resource type identifier.
       */
      object: 'invoice_line';

      /**
       * Full sales order line resource.
       */
      order_line: LinesAPI.SalesOrderLineDetail | null;

      /**
       * Value with an associated unit.
       */
      quantity: BatchesAPI.Quantity | null;

      /**
       * Rate resource.
       */
      unit_price: OperationsAPI.Rate | null;

      /**
       * Timestamp when the line was last updated.
       */
      updated_at: string;
    }
  }
}

/**
 * Transaction allocation against an invoice.
 */
export interface InvoiceAllocation {
  /**
   * Allocation ID.
   */
  id: string;

  /**
   * Value with an associated unit.
   */
  amount: BatchesAPI.Quantity | null;

  /**
   * Timestamp when the allocation was created.
   */
  created_at: string;

  /**
   * Note about this allocation.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'invoice_allocation';

  /**
   * Full transaction resource.
   */
  transaction: TransactionsAPI.TransactionDetail | null;

  /**
   * Timestamp when the allocation was last updated.
   */
  updated_at: string;
}

/**
 * Lightweight invoice for list views.
 */
export interface InvoiceSummary {
  /**
   * Invoice ID.
   */
  id: string;

  /**
   * Whether the customer accepts invoice emails.
   */
  accepts_invoice_emails: boolean;

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
   * Whether the customer is EDI enabled.
   */
  customer_is_edi_enabled: boolean;

  /**
   * Whether the invoice has been sent.
   */
  has_been_sent: boolean;

  /**
   * Whether the invoice has been sent via EDI.
   */
  is_edi_sent: boolean;

  /**
   * Whether the invoice has been paid in full.
   */
  is_paid_in_full: boolean;

  /**
   * Number of line items.
   */
  line_count: number;

  /**
   * Note attached to the invoice.
   */
  note: string | null;

  /**
   * Invoice number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'invoice_summary';

  /**
   * Full sales order resource.
   */
  order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Payment term resource.
   */
  payment_term: PaymentTermsAPI.PaymentTerm | null;

  /**
   * Customer priority code.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * Full shipment resource.
   */
  shipment: ShipmentsAPI.ShipmentDetail | null;

  /**
   * Total invoiced amount as a decimal string.
   */
  total_invoiced: string;

  /**
   * Timestamp when the invoice was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListInvoiceAllocation {
  /**
   * Resources in this page.
   */
  data: Array<InvoiceAllocation>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface InvoiceListResponse {
  /**
   * Resources in this page.
   */
  data: Array<InvoiceSummary>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface InvoiceRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'lines' | 'allocations'>;
}

export interface InvoiceUpdateParams {
  /**
   * Whether the invoice has been sent.
   */
  has_been_sent?: boolean;

  /**
   * Whether the invoice has been sent via EDI.
   */
  is_edi_sent?: boolean;

  /**
   * Whether the invoice has been paid in full.
   */
  is_paid_in_full?: boolean;

  /**
   * Note to attach to the invoice.
   */
  note?: string;
}

export interface InvoiceListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer account IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Filter by item IDs present in invoice lines.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by product line IDs.
   */
  product_line_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by sales rep user IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status: all, paid, unpaid, or overpaid.
   */
  status?: string;
}

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    type InvoiceAllocation as InvoiceAllocation,
    type InvoiceSummary as InvoiceSummary,
    type ListInvoiceAllocation as ListInvoiceAllocation,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
