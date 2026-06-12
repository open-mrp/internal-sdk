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
   * @example
   * ```ts
   * const delivery =
   *   await client.operations.deliveries.retrieve(
   *     'dlv_0143cbea89e0f17c3d19828a3a',
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
   * Returns a paginated list of deliveries for the caller's account.
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
 * Each delivery records the items received and whether the delivery was accepted
 * or rejected.
 */
export interface Delivery {
  /**
   * Delivery ID.
   */
  id: string;

  /**
   * When the delivery was accepted, or null if it was rejected.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListDeliveryLine | null;

  /**
   * Human-readable delivery number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'delivery';

  /**
   * An order placed with a supplier to purchase materials or products.
   *
   * The list endpoint returns this same type as the retrieve endpoint, with the same
   * fields available.
   */
  purchase_order: PurchaseOrder | null;

  /**
   * When the delivery was rejected, or null if it was accepted.
   */
  rejected_at: string | null;

  /**
   * Whether the delivery was accepted or rejected on receipt.
   *
   * - `accepted`: the delivery was received and accepted (`accepted_at` is set).
   * - `rejected`: the delivery was refused (`rejected_at` is set).
   */
  status: 'accepted' | 'rejected';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Delivery line item.
 */
export interface DeliveryLine {
  /**
   * Delivery line ID.
   */
  id: string;

  /**
   * When this line was accepted.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
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
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * When this line was rejected.
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
 * A contact that receives email communications for an order.
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
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  account_user: AccountUsersAPI.AccountUser | null;

  /**
   * Resource type identifier.
   */
  object: 'email_contact';
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
 * The list endpoint returns this same type as the retrieve endpoint, with the same
 * fields available.
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
   * When the order was completed.
   *
   * Null until status reaches `fulfilled`.
   */
  completed_at: string | null;

  /**
   * List represents a paginated list of resources.
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
   * configuration — e.g. a sales order's chosen freight, or a customer's default
   * freight preferences. It is itself expanded via its parent (e.g.
   * include[]=freight); when present, the full carrier and service level are
   * included.
   */
  freight: SalesOrdersAPI.Freight | null;

  /**
   * When the order was issued to the supplier.
   *
   * Null until status reaches `issued`.
   */
  issued_at: string | null;

  /**
   * Total number of lines on the order.
   */
  line_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListPurchaseOrderLine | null;

  /**
   * Order note.
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
   * every line is stocked.
   *
   * The list endpoint returns this same type as the retrieve endpoint, with the same
   * fields available.
   */
  receiving_order: ReceivingOrder | null;

  /**
   * Promised or scheduled date for the order, if one has been set.
   *
   * Set via the `promised_at` request field.
   */
  scheduled_at: string | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * A shipping term defining how freight charges are calculated for an order.
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
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Position of this line within the order, starting at 1.
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
   * Value with an associated unit.
   */
  quantity_ordered: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
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
 * every line is stocked.
 *
 * The list endpoint returns this same type as the retrieve endpoint, with the same
 * fields available.
 */
export interface ReceivingOrder {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed, set automatically once all of
   * its lines have been stocked.
   */
  completed_at: string | null;

  /**
   * Percentage of lines that have been stocked, from `0` to `100`, rounded to two
   * decimal places.
   *
   * A line counts toward completion once its `stocked_at` is set. Reaches `100` when
   * every line is stocked, at which point the order is marked complete.
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
   * List represents a paginated list of resources.
   */
  lines: ListReceivingOrderLine | null;

  /**
   * Free-text note carried over from the originating purchase order.
   *
   * Present only on the retrieve response; it is not returned in list results.
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
   * The list endpoint returns this same type as the retrieve endpoint, with the same
   * fields available.
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
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_line';

  /**
   * Full sales order line resource.
   */
  order_line: SalesOrdersAPI.SalesOrderLine | null;

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  rejected_quantity: AccountUsersAPI.Quantity | null;

  /**
   * Timestamp when the received quantity was stocked into inventory.
   *
   * Once set, the line counts toward the order's `completion_percentage`.
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
   * Only include deliveries created on or before this date (`YYYY-MM-DD`).
   */
  end_date?: string;

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
  start_date?: string;

  /**
   * Filter by delivery status.
   *
   * When omitted, only accepted deliveries are returned; rejected deliveries are
   * hidden unless you opt in.
   *
   * - `all`: deliveries of any status, including rejected.
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
