// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as CustomersAPI from '../sales/customers/customers';
import * as SalesOrdersAPI from '../sales/sales-orders/sales-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and view deliveries.
 */
export class Deliveries extends APIResource {
  /**
   * Returns a delivery by ID.
   *
   * This endpoint requires the permission: `deliveries:read`.
   *
   * @example
   * ```ts
   * const delivery =
   *   await client.operations.deliveries.retrieve(
   *     'dlv_9xsjlqx5753y',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: DeliveryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Delivery> {
    return this._client.get(path`/v1/operations/deliveries/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of deliveries for the current account, newest first.
   *
   * Only deliveries where goods were accepted into inventory are returned by
   * default; pass `status` to include fully rejected ones.
   *
   * This endpoint requires the permission: `deliveries:read`.
   *
   * @example
   * ```ts
   * const listDelivery =
   *   await client.operations.deliveries.list();
   * ```
   */
  list(
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListDelivery> {
    return this._client.get('/v1/operations/deliveries', { query, ...options });
  }
}

/**
 * A delivery of goods received against a purchase order.
 *
 * Deliveries are not created directly. One is recorded each time a receiving order
 * is stocked, capturing what arrived in that shipment, where it was put away, and
 * what was refused on inspection. A purchase order received in several shipments
 * therefore has several deliveries.
 */
export interface Delivery {
  /**
   * Delivery ID.
   */
  id: string;

  /**
   * When goods on this delivery were accepted into inventory.
   *
   * A delivery that also had quantities refused has both this and `rejected_at` set.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListDeliveryLine | null;

  /**
   * Human-readable delivery number.
   *
   * The first delivery against a purchase order takes that order's number; each
   * later delivery appends a sequence suffix, such as `PO-001-2`.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'delivery';

  /**
   * An order placed with a supplier to purchase materials or products.
   *
   * The list endpoint returns this same resource as the retrieve endpoint, except
   * that list rows never carry the note or the scheduled date and can only expand
   * the supplier and the lines.
   */
  purchase_order: PurchaseOrder | null;

  /**
   * When goods on this delivery were refused on inspection.
   */
  rejected_at: string | null;

  /**
   * Whether any of the delivered goods were accepted into inventory.
   *
   * - `accepted`: at least part of the shipment was put into inventory. Quantities
   *   refused on inspection can still appear on the delivery's lines.
   * - `rejected`: nothing on the delivery entered inventory.
   */
  status: 'accepted' | 'rejected';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * A quantity of one item recorded on a delivery.
 *
 * Stocking a receiving order creates one line for each storage allocation of
 * accepted goods, plus one further line for any quantity refused on inspection.
 * Exactly one of `accepted_at` and `rejected_at` is set on each line, so a single
 * receiving order line can produce several delivery lines.
 */
export interface DeliveryLine {
  /**
   * Delivery line ID.
   */
  id: string;

  /**
   * When the goods on this line were accepted into inventory.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  location: AccountUsersAPI.Location | null;

  /**
   * An inventory lot — a batch of an item received together and tracked under a
   * single lot number.
   */
  lot: Lot | null;

  /**
   * Resource type identifier.
   */
  object: 'delivery_line';

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * When the goods on this line were refused on inspection.
   */
  rejected_at: string | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * A contact that receives the purchase order email when an order is issued with
 * the `send_email` option.
 */
export interface EmailContact {
  /**
   * Email contact ID.
   */
  id: string;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  account_user: AccountUsersAPI.AccountUser | null;

  /**
   * Resource type identifier.
   */
  object: 'email_contact';
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDelivery {
  /**
   * Resources in this page.
   */
  data: Array<Delivery>;

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
export interface ListDeliveryLine {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryLine>;

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
export interface ListEmailContact {
  /**
   * Resources in this page.
   */
  data: Array<EmailContact>;

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
export interface ListPurchaseOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<PurchaseOrderLine>;

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
export interface ListReceivingOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<ReceivingOrderLine>;

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
 * An inventory lot — a batch of an item received together and tracked under a
 * single lot number.
 */
export interface Lot {
  /**
   * Lot ID.
   */
  id: string;

  /**
   * Lot number identifying the batch.
   *
   * Unique per item within the account: stocking goods under a lot number that
   * already exists for that item records them into the existing lot rather than
   * creating a new one.
   */
  lot_number: string;

  /**
   * Resource type identifier.
   */
  object: 'lot';
}

/**
 * An order placed with a supplier to purchase materials or products.
 *
 * The list endpoint returns this same resource as the retrieve endpoint, except
 * that list rows never carry the note or the scheduled date and can only expand
 * the supplier and the lines.
 */
export interface PurchaseOrder {
  /**
   * Purchase order ID.
   */
  id: string;

  /**
   * Whether the order acknowledgment email has been sent to the supplier.
   *
   * Advances to `sent` when the order is issued with the `send_email` option;
   * otherwise stays `not_sent`.
   */
  acknowledgment_status: 'not_sent' | 'sent';

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * When the order was closed as fulfilled.
   *
   * Cleared again if the order is re-opened.
   */
  completed_at: string | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  contacts: ListEmailContact | null;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * Freight describes the carrier selection and freight billing for a record.
   *
   * It is a generic, reusable sub-resource shared by anything that carries shipping
   * configuration — a sales order, a purchase order, or a shipment.
   */
  freight: SalesOrdersAPI.Freight | null;

  /**
   * When the order was issued to the supplier.
   *
   * Cleared again if the order is unissued back to `estimate`.
   */
  issued_at: string | null;

  /**
   * Total number of lines on the order.
   */
  line_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListPurchaseOrderLine | null;

  /**
   * Free-form note recorded on the order.
   */
  note: string | null;

  /**
   * Human-readable identifier for the order.
   *
   * Assigned automatically from a per-account sequence at creation; can be changed
   * via update but must stay unique within the account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order';

  /**
   * A payment term describing when payment is due (e.g. `Net 30`), assignable to
   * customers, sales orders, purchase orders, and invoices.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Priority level for fulfilling the order, relative to other open orders.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * A receiving order tracks inbound inventory against an issued purchase order.
   *
   * One receiving order is created automatically when a purchase order is issued,
   * with one line per purchase order line. As goods arrive, line quantities are
   * received and then stocked into inventory; the order is marked complete once
   * every line is stocked. Unissuing the purchase order deletes the receiving order
   * and its lines.
   */
  receiving_order: ReceivingOrder | null;

  /**
   * Date the supplier promised delivery for.
   *
   * Set through the `promised_at` field on create and update.
   */
  scheduled_at: string | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * A named freight pricing rule that decides what a buyer pays for shipping.
   *
   * A customer's default shipping term is evaluated whenever freight is quoted for
   * one of their orders. Freight exemptions on the customer, its type group, or any
   * of its price groups are checked first and zero the freight charge before the
   * shipping term is considered.
   */
  shipping_term: CustomersAPI.ShippingTerm | null;

  /**
   * Lifecycle status of the order.
   *
   * - `estimate`: a draft that has not yet been issued to the supplier.
   * - `issued`: the order has been issued to the supplier and is open for receiving.
   * - `fulfilled`: the order is complete and closed.
   */
  status: 'estimate' | 'issued' | 'fulfilled';

  /**
   * The supplier (selling account) an order is placed with.
   */
  supplier: Supplier | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * A single line item on a purchase order.
 */
export interface PurchaseOrderLine {
  /**
   * Purchase order line ID.
   */
  id: string;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Sequence number of this line within the order, starting at 1.
   *
   * Assigned automatically as one past the highest number currently on the order, so
   * deleting a line can leave a gap in the numbering.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order_line';

  /**
   * Free-text description of the ordered product.
   */
  product_description: string | null;

  /**
   * SKU of the ordered product, copied onto the line at order time.
   */
  product_sku: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_ordered: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_received: AccountUsersAPI.Quantity | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_price: AccountUsersAPI.Rate | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * A receiving order tracks inbound inventory against an issued purchase order.
 *
 * One receiving order is created automatically when a purchase order is issued,
 * with one line per purchase order line. As goods arrive, line quantities are
 * received and then stocked into inventory; the order is marked complete once
 * every line is stocked. Unissuing the purchase order deletes the receiving order
 * and its lines.
 */
export interface ReceivingOrder {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed.
   *
   * Set automatically once every line has been stocked, and also when the
   * originating purchase order is closed. It is cleared again when the receiving
   * order is voided or that purchase order is re-opened.
   */
  completed_at: string | null;

  /**
   * Percentage of lines that have been stocked, from `0` to `100`, rounded to two
   * decimal places.
   *
   * A line counts toward completion once its `stocked_at` is set, and the order is
   * marked complete when the figure reaches `100`. It is calculated for list results
   * only; on responses that return a single receiving order it is `0`, and progress
   * is best read from the lines' `stocked_at` values.
   */
  completion_percentage: number;

  /**
   * Timestamp when the receiving order was created.
   */
  created_at: string;

  /**
   * Total number of lines on this receiving order.
   *
   * Always populated, even when `lines` is not expanded.
   */
  line_count: number;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListReceivingOrderLine | null;

  /**
   * Free-text note carried over from the originating purchase order.
   *
   * Not returned in list results.
   */
  note: string | null;

  /**
   * Human-readable identifier for the receiving order, assigned when the originating
   * purchase order is issued.
   *
   * It mirrors that purchase order's number (e.g. `PO-001`). Distinct from `id`; use
   * it to reference the order in the UI and on documents.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order';

  /**
   * An order placed with a supplier to purchase materials or products.
   *
   * The list endpoint returns this same resource as the retrieve endpoint, except
   * that list rows never carry the note or the scheduled date and can only expand
   * the supplier and the lines.
   */
  purchase_order: PurchaseOrder | null;

  /**
   * The supplier (selling account) an order is placed with.
   */
  supplier: Supplier | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

/**
 * Line item in a receiving order.
 *
 * One line is created per purchase order line when the purchase order is issued,
 * with its quantity initialized to the full ordered quantity. When a line is
 * stocked short of the ordered quantity, a new line is created automatically for
 * the remainder.
 */
export interface ReceivingOrderLine {
  /**
   * Receiving order line ID.
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
  object: 'receiving_order_line';

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
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  rejected_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Timestamp when the received quantity was stocked into inventory.
   *
   * Once set, the line counts toward the order's `completion_percentage`. Voiding
   * the line or the whole order clears it, but does not reverse the inventory that
   * was already received.
   */
  stocked_at: string | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
}

/**
 * The supplier (selling account) an order is placed with.
 */
export interface Supplier {
  /**
   * Supplier ID.
   */
  id: string;

  /**
   * Name of the supplier account.
   */
  name: string;

  /**
   * Human-facing supplier code, unique per account (e.g. `SUP-001`).
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'supplier';
}

export interface DeliveryRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'purchase_order' | 'lines'>;
}

export interface DeliveryListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only include deliveries created up to this date (`YYYY-MM-DD`).
   *
   * Compared against the start of the given day, so deliveries created later that
   * same day are excluded.
   */
  ends_at?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'purchase_order' | 'purchase_order.supplier' | 'lines'>;

  /**
   * Filter to deliveries with at least one line for any of the given item IDs.
   */
  item_ids?: Array<string>;

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
   * Only include deliveries created on or after this date (`YYYY-MM-DD`).
   */
  starts_at?: string;

  /**
   * Filter by delivery status.
   *
   * Deliveries where nothing was accepted into inventory are hidden unless you ask
   * for `rejected` or `all`.
   */
  status?: string;

  /**
   * Filter to deliveries whose purchase order is with any of the given supplier
   * account IDs.
   */
  supplier_ids?: Array<string>;
}

export declare namespace Deliveries {
  export {
    type Delivery as Delivery,
    type DeliveryLine as DeliveryLine,
    type EmailContact as EmailContact,
    type ListDelivery as ListDelivery,
    type ListDeliveryLine as ListDeliveryLine,
    type ListEmailContact as ListEmailContact,
    type ListPurchaseOrderLine as ListPurchaseOrderLine,
    type ListReceivingOrderLine as ListReceivingOrderLine,
    type Lot as Lot,
    type PurchaseOrder as PurchaseOrder,
    type PurchaseOrderLine as PurchaseOrderLine,
    type ReceivingOrder as ReceivingOrder,
    type ReceivingOrderLine as ReceivingOrderLine,
    type Supplier as Supplier,
    type DeliveryRetrieveParams as DeliveryRetrieveParams,
    type DeliveryListParams as DeliveryListParams,
  };
}
