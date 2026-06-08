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
   * Returns a delivery by ID, including all delivery lines.
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
 * Delivery with line items.
 */
export interface Delivery {
  /**
   * Delivery ID.
   */
  id: string;

  /**
   * Accepted timestamp.
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
   * Delivery number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'delivery';

  /**
   * Full purchase order resource.
   */
  purchase_order: PurchaseOrder | null;

  /**
   * Rejected timestamp.
   */
  rejected_at: string | null;

  /**
   * Delivery status (accepted or rejected).
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
   * Accepted timestamp.
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
   * Location resource.
   */
  location: AccountUsersAPI.Location | null;

  /**
   * Lot sub-resource.
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
   * Rejected timestamp.
   */
  rejected_at: string | null;

  /**
   * Rate resource.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Email contact sub-resource.
 */
export interface EmailContact {
  /**
   * Email contact ID.
   */
  id: string;

  /**
   * Account user with profile, role, and department.
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
 * Lot sub-resource.
 */
export interface Lot {
  /**
   * Lot ID.
   */
  id: string;

  /**
   * Lot number.
   */
  lot_number: string;

  /**
   * Resource type identifier.
   */
  object: 'lot';
}

/**
 * Full purchase order resource.
 */
export interface PurchaseOrder {
  /**
   * Purchase order ID.
   */
  id: string;

  /**
   * Acknowledgment status.
   */
  acknowledgment_status: 'not_sent' | 'sent';

  /**
   * Address with associated geolocation.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * Completed timestamp.
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
   * Freight describes the carrier selection and freight billing for a record. It is
   * a generic, reusable sub-resource shared by anything that carries shipping
   * configuration — e.g. a sales order's chosen freight, or a customer's default
   * freight preferences. It is itself expanded via its parent (e.g.
   * include[]=freight); when present, the full carrier and service level are
   * included.
   */
  freight: SalesOrdersAPI.Freight | null;

  /**
   * Issued timestamp.
   */
  issued_at: string | null;

  /**
   * Count of order lines.
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
   * Purchase order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order';

  /**
   * Payment term resource.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Priority code.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * Receiving order resource. The list endpoint returns this same type with only
   * base fields populated; expandable references (purchase_order, supplier, lines)
   * are populated via include[]=.
   */
  receiving_order: ReceivingOrder | null;

  /**
   * Scheduled/promised timestamp.
   */
  scheduled_at: string | null;

  /**
   * Address with associated geolocation.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: CustomersAPI.ShippingTerm | null;

  /**
   * Order status code.
   */
  status: 'estimate' | 'issued' | 'fulfilled';

  /**
   * Supplier sub-resource.
   */
  supplier: Supplier | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * Full purchase order line resource.
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
   * Line item number.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order_line';

  /**
   * Product description.
   */
  product_description: string | null;

  /**
   * Product SKU.
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
   * Rate resource.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_price: AccountUsersAPI.Rate | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * Receiving order resource. The list endpoint returns this same type with only
 * base fields populated; expandable references (purchase_order, supplier, lines)
 * are populated via include[]=.
 */
export interface ReceivingOrder {
  /**
   * Receiving order ID.
   */
  id: string;

  /**
   * Timestamp when the receiving order was completed.
   */
  completed_at: string | null;

  /**
   * Completion percentage of this receiving order.
   */
  completion_percentage: number;

  /**
   * Timestamp when the receiving order was created.
   */
  created_at: string;

  /**
   * Number of lines in this receiving order.
   */
  line_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListReceivingOrderLine | null;

  /**
   * Note on the receiving order.
   */
  note: string | null;

  /**
   * Receiving order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order';

  /**
   * Full purchase order resource.
   */
  purchase_order: PurchaseOrder | null;

  /**
   * Account with optional branding and portal sub-resources.
   */
  supplier: APIKeysAPI.Account | null;

  /**
   * Timestamp when the receiving order was last updated.
   */
  updated_at: string;
}

/**
 * Line item in a receiving order.
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
   * Timestamp when the line was stocked.
   */
  stocked_at: string | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
}

/**
 * Supplier sub-resource.
 */
export interface Supplier {
  /**
   * Supplier ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Supplier number.
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'purchase_order'>;

  /**
   * Filter by item IDs present in delivery lines.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status: all, accepted, or rejected. Defaults to accepted.
   */
  status?: string;

  /**
   * Filter by supplier account IDs.
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
