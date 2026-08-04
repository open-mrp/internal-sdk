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
   *   'iv_m982ezb0fgp7',
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
   * Updates an invoice's note and its sent and paid tracking flags.
   *
   * Only the fields supplied in the request are changed. The invoice's lines, its
   * customer, and the amounts it bills follow the sales order behind the invoice and
   * cannot be changed here.
   *
   * This endpoint requires the permissions: `invoices:update`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const invoice = await client.finance.invoices.update(
   *   'iv_m982ezb0fgp7',
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
   * Returns a paginated list of invoices for the current account, newest first.
   *
   * A free-text search term (`q`) is matched against the invoice number, the invoice
   * note, and the customer name, and still respects the other filters.
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
   * Whether the sales order behind this invoice has at least one contact set to
   * receive invoice emails.
   *
   * These contacts are the recipients used by Email Record. When no contact is
   * configured, emailing the invoice marks it sent without delivering anything.
   */
  accepts_invoice_emails: boolean;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   *
   * Set automatically when the invoice is emailed through Email Record, and can also
   * be set directly through Update Invoice.
   */
  has_been_sent: boolean;

  /**
   * Whether the invoice has been transmitted to the customer via EDI.
   *
   * Nothing in the platform sets this flag; it is recorded through Update Invoice
   * once the invoice has been transmitted elsewhere.
   */
  is_edi_sent: boolean;

  /**
   * Number of line items on the invoice.
   */
  line_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   * An order placed by a customer, tracked from estimate through fulfillment.
   */
  order: SalesOrdersAPI.SalesOrder | null;

  /**
   * Payment status of the invoice.
   *
   * Reported from the invoice's stored paid-in-full and overpaid flags, so marking
   * an invoice paid through Update Invoice changes this value even when no payment
   * has been allocated.
   *
   * - `unpaid`: the invoice is not marked paid in full, which includes invoices
   *   carrying partial payments.
   * - `paid`: the invoice is marked paid in full.
   * - `overpaid`: the payments applied to the invoice exceed the invoiced amount.
   *   List Invoices and Update Invoice report such an invoice as `paid`.
   * - `partially_paid`: not currently returned; an invoice carrying a partial
   *   payment reports `unpaid`.
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
   * Total amount billed by this invoice.
   *
   * The sum across the invoice's lines of the billed quantity multiplied by the unit
   * price on the sales order line.
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
 * memos) to the invoices they pay down. Recording a settlement refreshes the
 * invoice's paid-in-full and overpaid state — and so its `payment_status` — from
 * every allocation against it, but that state can also be set directly through
 * Update Invoice.
 */
export interface InvoiceAllocation {
  /**
   * Allocation ID.
   */
  id: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'invoice_line';

  /**
   * A single line item on a sales order.
   */
  order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A warehouse picking task for a sales order, tracking the quantities to pull from
 * inventory and pack for shipment.
 *
 * A pick is created automatically when a sales order is issued, with one line for
 * each order line whose product is of type `sale` — service, shipping, tax, credit
 * and return lines are skipped — and nothing picked yet. There is no endpoint that
 * creates a pick directly.
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
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  departments: ListDepartment | null;

  /**
   * Timestamp when the pick was finished.
   *
   * Set automatically once every line on the pick has been packed, and cleared
   * whenever picking work reopens — when the pick is voided, when a shipment for the
   * order is deleted, or when the order is reopened or its lines change so quantity
   * is outstanding again. It can also be set or cleared directly with Update Pick.
   */
  finished_at: string | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListPickLine | null;

  /**
   * Human-readable number that identifies the pick, distinct from the `id`.
   *
   * Copied from the sales order's number when the pick is created, and can be
   * renamed with Update Pick.
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
   * An order placed by a customer, tracked from estimate through fulfillment.
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  ordered_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Timestamp when the line was packed.
   *
   * Once packed, a line can no longer be picked or voided. If the sales order line
   * still has quantity outstanding, packing adds a fresh zero-quantity pick line for
   * the remainder rather than reopening this one.
   */
  packed_at: string | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * A single line item on a sales order.
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
   * configuration — a sales order, a purchase order, or a shipment.
   */
  freight: SalesOrdersAPI.Freight | null;

  /**
   * An invoice billing a customer for goods shipped against a sales order.
   */
  invoice: Invoice | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
   *
   * A pick is created automatically when a sales order is issued, with one line for
   * each order line whose product is of type `sale` — service, shipping, tax, credit
   * and return lines are skipped — and nothing picked yet. There is no endpoint that
   * creates a pick directly.
   */
  pick: Pick | null;

  /**
   * An order placed by a customer, tracked from estimate through fulfillment.
   */
  sales_order: SalesOrdersAPI.SalesOrder | null;

  /**
   * Timestamp when the shipment was shipped.
   *
   * Cleared if the shipment is voided.
   */
  shipped_at: string | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  shipped_by: AccountUsersAPI.AccountUser | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  shipping_address: APIKeysAPI.Address | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  shipping_cases: ListShippingCaseDetail | null;

  /**
   * Current status of the shipment.
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
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'shipment_line';

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * A single line item on a sales order.
   */
  sales_order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A physical case (package) within a shipment, with its own tracking number, label
 * and freight charge.
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  freight_amount: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
   * Timestamp when this case was shipped.
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
   * have one, and kept if the shipment is later voided.
   */
  sscc: string | null;

  /**
   * Carrier tracking number for this case.
   *
   * Cleared when the shipment is voided.
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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
   * Free-form note attached to this allocation, separate from any note on the
   * underlying transaction.
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
   * Adjustment types classify the `adjustment` transactions recorded against a
   * customer.
   */
  adjustment_type: FinanceAPI.AdjustmentType | null;

  /**
   * Number of allocations against invoices for this transaction.
   */
  allocation_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  allocations: ListTransactionAllocation | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
   * Whether the full transaction amount has been applied to invoices.
   *
   * Recording a settlement that uses this transaction sets the flag to `true`, and
   * deleting that settlement resets it to `false`. Editing or deleting an individual
   * allocation does not recompute it, so it can also be set directly with Update
   * Transaction.
   *
   * While it is `false`, the transaction is treated as an open credit and is
   * returned by List Open Credits.
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
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Identifier of the Stripe payment that produced this transaction.
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
   * Records whether the invoice has been sent to the customer.
   *
   * Emailing the invoice through Email Record sets this on its own, so it only needs
   * to be set here when the invoice was delivered outside the platform.
   */
  has_been_sent?: boolean;

  /**
   * Records whether the invoice has been transmitted to the customer via EDI.
   *
   * A tracking flag only; setting it does not transmit anything.
   */
  is_edi_sent?: boolean;

  /**
   * Whether the invoice has been paid in full.
   *
   * Setting this to `true` marks the invoice as paid regardless of the payments
   * recorded against it, which updates the invoice's `payment_status` and drops it
   * from receivables listings. Recording a settlement against the invoice later
   * recalculates the flag from its allocations and can overwrite the value set here.
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
   * Body param: Records whether the invoice has been sent to the customer.
   *
   * Emailing the invoice through Email Record sets this on its own, so it only needs
   * to be set here when the invoice was delivered outside the platform.
   */
  has_been_sent?: boolean;

  /**
   * Body param: Records whether the invoice has been transmitted to the customer via
   * EDI.
   *
   * A tracking flag only; setting it does not transmit anything.
   */
  is_edi_sent?: boolean;

  /**
   * Body param: Whether the invoice has been paid in full.
   *
   * Setting this to `true` marks the invoice as paid regardless of the payments
   * recorded against it, which updates the invoice's `payment_status` and drops it
   * from receivables listings. Recording a settlement against the invoice later
   * recalculates the flag from its allocations and can overwrite the value set here.
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
   * Restricts results to invoices billed to customers belonging to any of these
   * account groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Restricts results to invoices billed to any of these customers.
   */
  customer_ids?: Array<string>;

  /**
   * Latest invoice creation date to include, in `YYYY-MM-DD` format.
   *
   * Compared against the creation timestamp at the start of that day, so invoices
   * created later on the end date itself are excluded; pass the following day to
   * include them.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer' | 'order' | 'shipment' | 'billing_address' | 'payment_term' | 'lines'>;

  /**
   * Restricts results to invoices with at least one line billing any of these items.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Restricts results to invoices with at least one line whose product belongs to
   * any of these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Restricts results to invoices whose sales order is credited to any of these
   * sales reps.
   *
   * These are account user IDs, matching the `sales_rep` on the order.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Earliest invoice creation date to include, in `YYYY-MM-DD` format.
   */
  start_date?: string;

  /**
   * Restricts results to invoices in this payment state.
   *
   * - `all`: no payment-state filtering, the same as omitting the parameter.
   * - `paid`: only invoices marked paid in full.
   * - `unpaid`: only invoices that are neither paid in full nor overpaid, including
   *   invoices carrying partial payments.
   * - `overpaid`: only invoices whose applied payments exceed the invoiced amount.
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
