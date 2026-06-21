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
   * This endpoint requires the permissions: `invoices:read`, `customers:read`,
   * `suppliers:read`.
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
   * This endpoint requires the permissions: `invoices:update`, `customers:update`,
   * `suppliers:update`.
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
   * This endpoint requires the permissions: `invoices:read`, `customers:read`,
   * `suppliers:read`.
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
 * An invoice billing a customer for goods shipped against a sales order.
 */
export interface Invoice {
  /**
   * Invoice ID.
   */
  id: string;

  /**
   * Whether the billed customer is configured to receive invoices by email.
   */
  accepts_invoice_emails: boolean;

  /**
   * List represents a paginated list of resources.
   */
  allocations: ListInvoiceAllocation | null;

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
   * Whether the billed customer is configured to exchange documents via EDI.
   */
  customer_is_edi_enabled: boolean;

  /**
   * Whether the invoice has been sent to the customer.
   */
  has_been_sent: boolean;

  /**
   * Whether the invoice has been transmitted to the customer via EDI.
   */
  is_edi_sent: boolean;

  /**
   * Number of line items on the invoice.
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
   * Payment status of the invoice, derived from its paid-in-full and overpaid flags
   * rather than computed directly from allocations.
   *
   * - `overpaid`: the applied allocations exceed the invoiced amount.
   * - `partially_paid`: reserved for a future signal and not currently emitted.
   */
  payment_status: 'unpaid' | 'partially_paid' | 'paid' | 'overpaid';

  /**
   * A payment term describing when payment is due (e.g. `Net 30`), assignable to
   * customers, sales orders, purchase orders, and invoices.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Priority level carried onto the invoice from the order it bills.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * A shipment of packed goods fulfilling a sales order, from packing through
   * dispatch.
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
 * A portion of a transaction applied against an invoice.
 *
 * Allocations connect transactions (payments, rebates, adjustments, and credit
 * memos) to the invoices they pay down. The invoice's paid-in-full / overpaid
 * state (and thus `payment_status`) is tracked separately and is not recomputed
 * from these allocations.
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
   * A financial transaction recorded against a customer, such as a payment, credit
   * memo, adjustment, or rebate.
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
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
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
 * A warehouse picking task for a sales order, tracking the quantities to pull from
 * inventory and pack for shipment.
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
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * List represents a paginated list of resources.
   */
  departments: ListDepartment | null;

  /**
   * Timestamp when the pick was finished.
   *
   * Unset while the pick is still in progress. Set automatically when packing leaves
   * no unpacked lines with a remaining quantity to pick, and cleared when the pick
   * is voided; it can also be set or cleared directly via Update Pick.
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
   * Priority used to order picks for fulfillment, inherited from the associated
   * sales order.
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
 * A single line on a pick, tracking the quantity picked against one sales order
 * line.
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
   *
   * Unset until the line has been packed. Once packed, a line can no longer be
   * picked or voided.
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
 * A shipment of packed goods fulfilling a sales order, from packing through
 * dispatch.
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
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Freight describes the carrier selection and freight billing for a record.
   *
   * It is a generic, reusable sub-resource shared by anything that carries shipping
   * configuration — e.g. a sales order's chosen freight, or a customer's default
   * freight preferences. It is itself expanded via its parent (e.g.
   * include[]=freight); when present, the full carrier and service level are
   * included.
   */
  freight: SalesOrdersAPI.Freight | null;

  /**
   * An invoice billing a customer for goods shipped against a sales order.
   */
  invoice: Invoice | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListShipmentLine | null;

  /**
   * Carrier master tracking number covering the shipment as a whole.
   *
   * Individual shipping cases carry their own per-case tracking numbers.
   */
  master_tracking_number: string | null;

  /**
   * Note attached to this shipment.
   */
  note: string | null;

  /**
   * Human-readable shipment number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'shipment';

  /**
   * A warehouse picking task for a sales order, tracking the quantities to pull from
   * inventory and pack for shipment.
   */
  pick: Pick | null;

  /**
   * Full sales order resource.
   */
  sales_order: SalesOrdersAPI.SalesOrder | null;

  /**
   * Timestamp when the shipment was shipped.
   *
   * Null until the shipment is shipped; cleared again if the shipment is voided.
   */
  shipped_at: string | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  shipped_by: AccountUsersAPI.AccountUser | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  shipping_address: APIKeysAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  shipping_cases: ListShippingCaseDetail | null;

  /**
   * Shipment status code.
   *
   * - `packed`: the shipment has been packed but not yet dispatched.
   * - `shipped`: the shipment has left the facility (`shipped_at` is set).
   */
  status: 'packed' | 'shipped';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A shipment line recording the quantity of a sales order line included in a
 * shipment.
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
 * A physical case (package) in a shipment, as shown in shipment detail views.
 */
export interface ShippingCaseDetail {
  /**
   * Shipping case ID.
   */
  id: string;

  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
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
   * URL of the printable shipping label for this case.
   */
  shipping_label_url: string | null;

  /**
   * ID of the Shippo transaction for this case's shipping label, when the label was
   * purchased through the Shippo integration.
   */
  shippo_transaction_id: string | null;

  /**
   * Serial Shipping Container Code (SSCC) identifying this case.
   *
   * Assigned automatically when the shipment is shipped if the case does not already
   * have one.
   */
  sscc: string | null;

  /**
   * Carrier tracking number for this case.
   */
  tracking_number: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A portion of a transaction's amount applied to a specific invoice.
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
   * Note attached to this allocation.
   */
  note: string | null;

  /**
   * Resource type identifier.
   */
  object: 'transaction_allocation';

  /**
   * A financial transaction recorded against a customer, such as a payment, credit
   * memo, adjustment, or rebate.
   */
  transaction: TransactionDetail | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A financial transaction recorded against a customer, such as a payment, credit
 * memo, adjustment, or rebate.
 */
export interface TransactionDetail {
  /**
   * Transaction ID.
   */
  id: string;

  /**
   * A category of financial adjustment, such as a discount, fee, or write-off.
   *
   * Adjustment types classify adjustment transactions recorded against customer
   * invoices.
   */
  adjustment_type: FinanceAPI.AdjustmentType | null;

  /**
   * Number of allocations against invoices for this transaction.
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
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Whether the full transaction amount has been allocated against invoices.
   *
   * When `false`, some of the amount remains as an open (unapplied) balance and the
   * transaction appears in the open credits list. This flag is set explicitly (see
   * Update Transaction); it is not recomputed automatically when allocations change.
   */
  is_fully_allocated: boolean;

  /**
   * Free-form note attached to the transaction.
   */
  note: string | null;

  /**
   * Human-readable transaction number.
   *
   * Generated automatically as a per-account sequence when the transaction is
   * created. It can be changed later, but must remain unique within the account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'transaction';

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Stripe payment ID.
   *
   * Set only for transactions collected through Stripe; null for transactions
   * recorded outside Stripe.
   */
  stripe_payment_id: string | null;

  /**
   * The payment method used to make a transaction, such as cash or check.
   */
  transaction_method: FinanceAPI.TransactionMethod | null;

  /**
   * The category of a financial transaction, such as a payment or credit memo.
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
   * Whether the invoice has been sent to the customer.
   */
  has_been_sent?: boolean;

  /**
   * Whether the invoice has been sent via EDI.
   */
  is_edi_sent?: boolean;

  /**
   * Whether the invoice has been paid in full.
   *
   * Setting this to `true` marks the invoice as paid regardless of recorded
   * allocations, which updates the invoice's `payment_status` and removes it from
   * receivables listings.
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
   * Body param: Whether the invoice has been sent to the customer.
   */
  has_been_sent?: boolean;

  /**
   * Body param: Whether the invoice has been sent via EDI.
   */
  is_edi_sent?: boolean;

  /**
   * Body param: Whether the invoice has been paid in full.
   *
   * Setting this to `true` marks the invoice as paid regardless of recorded
   * allocations, which updates the invoice's `payment_status` and removes it from
   * receivables listings.
   */
  is_paid_in_full?: boolean;

  /**
   * Body param: Note to attach to the invoice.
   */
  note?: string;
}

export interface InvoiceListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
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
   * Only return invoices created before this date (`YYYY-MM-DD`).
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
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter by product line IDs.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter by sales rep user IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Only return invoices created on or after this date (`YYYY-MM-DD`).
   */
  start_date?: string;

  /**
   * Filter invoices by payment status.
   *
   * - `all`: no payment-status filtering (same as omitting the parameter).
   * - `paid`: only invoices paid in full.
   * - `unpaid`: only invoices that are neither paid in full nor overpaid.
   * - `overpaid`: only invoices whose allocations exceed the invoiced amount.
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
