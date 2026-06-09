// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FinanceAPI from './finance';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as CustomersAPI from '../sales/customers/customers';
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
   *   'iv_018b5949ada8abca36358bbea9',
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
   * const invoice = await client.finance.invoices.update(
   *   'iv_018b5949ada8abca36358bbea9',
   *   {
   *     has_been_sent: true,
   *     note: 'Payment received via wire transfer',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: InvoiceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Invoice> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/finance/invoices/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of invoices for the current account.
   *
   * @example
   * ```ts
   * const listInvoice = await client.finance.invoices.list();
   * ```
   */
  list(query: InvoiceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListInvoice> {
    return this._client.get('/v1/finance/invoices', { query, ...options });
  }
}

/**
 * Minimal invoice sub-resource for allocation entries.
 */
export interface AllocationInvoice {
  /**
   * Invoice ID.
   */
  id: string;

  /**
   * Invoice number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'invoice_summary';
}

/**
 * Invoice resource.
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
   * Number of line items.
   */
  line_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListInvoiceLine | null;

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
  order: SalesOrdersAPI.SalesOrder | null;

  /**
   * Payment status of the invoice.
   */
  payment_status: 'unpaid' | 'partially_paid' | 'paid' | 'overpaid';

  /**
   * Payment term resource.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Customer priority code.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * Full shipment resource.
   */
  shipment: Shipment | null;

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
  amount: AccountUsersAPI.Quantity | null;

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
  transaction: TransactionDetail | null;

  /**
   * Timestamp when the allocation was last updated.
   */
  updated_at: string;
}

/**
 * Line item in an invoice.
 */
export interface InvoiceLine {
  /**
   * Invoice line ID.
   */
  id: string;

  /**
   * Timestamp when the line was created.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'invoice_line';

  /**
   * Full sales order line resource.
   */
  order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Rate resource.
   */
  unit_price: AccountUsersAPI.Rate | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListDepartment {
  /**
   * Resources in this page.
   */
  data: Array<AccountUsersAPI.Department>;

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
export interface ListInvoice {
  /**
   * Resources in this page.
   */
  data: Array<Invoice>;

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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListInvoiceLine {
  /**
   * Resources in this page.
   */
  data: Array<InvoiceLine>;

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
export interface ListPickLine {
  /**
   * Resources in this page.
   */
  data: Array<PickLine>;

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
export interface ListShipmentLine {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentLine>;

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
export interface ListShippingCaseDetail {
  /**
   * Resources in this page.
   */
  data: Array<ShippingCaseDetail>;

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
export interface ListTransactionAllocation {
  /**
   * Resources in this page.
   */
  data: Array<TransactionAllocation>;

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
 * Pick is a full pick resource.
 */
export interface Pick {
  /**
   * Pick ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  departments: ListDepartment | null;

  /**
   * Timestamp when the pick was finished.
   */
  finished_at: string | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListPickLine | null;

  /**
   * Pick number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'pick';

  /**
   * Pick priority code.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * Full sales order resource.
   */
  sales_order: SalesOrdersAPI.SalesOrder | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * PickLine is a pick line resource.
 */
export interface PickLine {
  /**
   * Pick line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'pick_line';

  /**
   * Value with an associated unit.
   */
  ordered_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Timestamp when the line was packed.
   */
  packed_at: string | null;

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Full sales order line resource.
   */
  sales_order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Full shipment resource.
 */
export interface Shipment {
  /**
   * Shipment ID.
   */
  id: string;

  /**
   * Bill of lading number.
   */
  bill_of_lading: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Freight describes the carrier selection and freight billing for a record. It is
   * a generic, reusable sub-resource shared by anything that carries shipping
   * configuration — e.g. a sales order's chosen freight, or a customer's default
   * freight preferences. It is itself expanded via its parent (e.g.
   * include[]=freight); when present, the full carrier and service level are
   * included.
   */
  freight: SalesOrdersAPI.Freight | null;

  /**
   * Invoice resource.
   */
  invoice: Invoice | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListShipmentLine | null;

  /**
   * Master tracking number.
   */
  master_tracking_number: string | null;

  /**
   * Note attached to this shipment.
   */
  note: string | null;

  /**
   * Shipment number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'shipment';

  /**
   * Pick is a full pick resource.
   */
  pick: Pick | null;

  /**
   * Full sales order resource.
   */
  sales_order: SalesOrdersAPI.SalesOrder | null;

  /**
   * Timestamp when shipped.
   */
  shipped_at: string | null;

  /**
   * Account user with profile, role, and department.
   */
  shipped_by: AccountUsersAPI.AccountUser | null;

  /**
   * Address with associated geolocation.
   */
  shipping_address: APIKeysAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  shipping_cases: ListShippingCaseDetail | null;

  /**
   * Shipment status code.
   */
  status: 'packed' | 'shipped';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Shipment line resource.
 */
export interface ShipmentLine {
  /**
   * Shipment line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'shipment_line';

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Full sales order line resource.
   */
  sales_order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Shipping case resource in shipment detail views.
 */
export interface ShippingCaseDetail {
  /**
   * Shipping case ID.
   */
  id: string;

  /**
   * Carrier resource.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  freight_amount: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  freight_weight: AccountUsersAPI.Quantity | null;

  /**
   * Human-readable case number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_case';

  /**
   * Timestamp when shipped.
   */
  shipped_at: string | null;

  /**
   * Shipping label URL.
   */
  shipping_label_url: string | null;

  /**
   * Shippo transaction ID.
   */
  shippo_transaction_id: string | null;

  /**
   * Serial Shipping Container Code.
   */
  sscc: string | null;

  /**
   * Carrier tracking number.
   */
  tracking_number: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Allocation of a transaction against an invoice.
 */
export interface TransactionAllocation {
  /**
   * Allocation ID.
   */
  id: string;

  /**
   * Value with an associated unit.
   */
  amount: AccountUsersAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Minimal invoice sub-resource for allocation entries.
   */
  invoice: AllocationInvoice | null;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'transaction_allocation';

  /**
   * Full transaction resource.
   */
  transaction: TransactionDetail | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Full transaction resource.
 */
export interface TransactionDetail {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * Adjustment type resource.
   */
  adjustment_type: FinanceAPI.AdjustmentType | null;

  /**
   * Number of allocations.
   */
  allocation_count: number;

  /**
   * List represents a paginated list of resources.
   */
  allocations: ListTransactionAllocation | null;

  /**
   * Value with an associated unit.
   */
  amount: AccountUsersAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Whether fully allocated against invoices.
   */
  is_fully_allocated: boolean;

  /**
   * Note.
   */
  note: string | null;

  /**
   * Transaction number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction';

  /**
   * Account user with profile, role, and department.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Stripe payment ID.
   */
  stripe_payment_id: string | null;

  /**
   * Transaction method resource.
   */
  transaction_method: FinanceAPI.TransactionMethod | null;

  /**
   * Transaction type resource.
   */
  transaction_type: FinanceAPI.TransactionType | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update an invoice.
 */
export interface UpdateInvoiceRequest {
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

export interface InvoiceRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'customer' | 'order' | 'shipment' | 'billing_address' | 'payment_term' | 'lines' | 'allocations'
  >;
}

export interface InvoiceUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'customer' | 'order' | 'shipment' | 'billing_address' | 'payment_term' | 'lines' | 'allocations'
  >;

  /**
   * Body param: Whether the invoice has been sent.
   */
  has_been_sent?: boolean;

  /**
   * Body param: Whether the invoice has been sent via EDI.
   */
  is_edi_sent?: boolean;

  /**
   * Body param: Whether the invoice has been paid in full.
   */
  is_paid_in_full?: boolean;

  /**
   * Body param: Note to attach to the invoice.
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
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer' | 'order' | 'shipment' | 'billing_address' | 'payment_term' | 'lines'>;

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
    type AllocationInvoice as AllocationInvoice,
    type Invoice as Invoice,
    type InvoiceAllocation as InvoiceAllocation,
    type InvoiceLine as InvoiceLine,
    type ListDepartment as ListDepartment,
    type ListInvoice as ListInvoice,
    type ListInvoiceAllocation as ListInvoiceAllocation,
    type ListInvoiceLine as ListInvoiceLine,
    type ListPickLine as ListPickLine,
    type ListShipmentLine as ListShipmentLine,
    type ListShippingCaseDetail as ListShippingCaseDetail,
    type ListTransactionAllocation as ListTransactionAllocation,
    type Pick as Pick,
    type PickLine as PickLine,
    type Shipment as Shipment,
    type ShipmentLine as ShipmentLine,
    type ShippingCaseDetail as ShippingCaseDetail,
    type TransactionAllocation as TransactionAllocation,
    type TransactionDetail as TransactionDetail,
    type UpdateInvoiceRequest as UpdateInvoiceRequest,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
