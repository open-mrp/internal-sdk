// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as DeliveriesAPI from '../deliveries';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionChangeStatusParams,
  Actions,
  BulkDeletePurchaseOrdersRequest,
  ChangePurchaseOrderStatusRequest,
} from './actions';
import * as LinesAPI from './lines';
import {
  CreatePurchaseOrderLineRequest,
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineUpdateParams,
  Lines,
  UpdatePurchaseOrderLineRequest,
} from './lines';
import * as SuppliersAPI from '../suppliers/suppliers';
import * as AccountPricesAPI from '../../sales/account-prices/account-prices';
import * as CustomersAPI from '../../sales/customers/customers';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete purchase orders.
 */
export class PurchaseOrders extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);

  /**
   * Creates a purchase order.
   *
   * The order number is assigned automatically from a per-account sequence and the
   * order starts in `estimate` status; issue it separately to send it to the
   * supplier and open it for receiving. Bill-to and ship-to addresses are created as
   * new address records from the inline address fields, and any provided lines and
   * email contacts are created with the order.
   *
   * A line that references an inventory item also links that item's material to the
   * supplier, if it is not linked already, so the material shows up as sourced from
   * them.
   *
   * This endpoint requires the permission: `purchase_orders:create`.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.create({
   *     lines: [
   *       {
   *         product_id: 'pd_07oe0r7adh2w',
   *         product_sku: 'RAW-100',
   *         quantity: {
   *           unit_id: 'un_82bd37dae5po',
   *           value: '500',
   *         },
   *         unit_price: {
   *           denominator_unit_id: 'un_82bd37dae5po',
   *           numerator_unit_id: 'un_82bd37dae5po',
   *           value: '12.50',
   *         },
   *       },
   *     ],
   *     priority_code: 'normal',
   *     supplier_account_id: 'ac_gwy8tfbc074f',
   *     carrier_id: 'cr_tv5vfjtgu1n3',
   *     note: 'Urgent restock order',
   *     service_level_id: 'crop_4ilk9p6gccrx',
   *     ship_to_country: 'US',
   *     ship_to_locality: 'San Francisco',
   *     ship_to_name: 'Acme Inc.',
   *     ship_to_postal_code: '94105',
   *     ship_to_state: 'CA',
   *     ship_to_street_line_1: '123 Main Street',
   *   });
   * ```
   */
  create(params: PurchaseOrderCreateParams, options?: RequestOptions): APIPromise<PurchaseOrder> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/purchase-orders', { query: { include }, body, ...options });
  }

  /**
   * Returns a purchase order by ID.
   *
   * This endpoint requires the permission: `purchase_orders:read`.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.retrieve(
   *     'po_3ov2ym1pca8m',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: PurchaseOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseOrder> {
    return this._client.get(path`/v1/operations/purchase-orders/${id}`, { query, ...options });
  }

  /**
   * Partially updates a purchase order.
   *
   * Only the fields sent are changed. Addresses are repointed at existing address
   * records here, unlike create, which builds new addresses from inline fields; the
   * order's lifecycle status is changed through the change-status endpoint instead.
   *
   * This endpoint requires the permission: `purchase_orders:update`.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.update(
   *     'po_3ov2ym1pca8m',
   *     {
   *       note: 'Updated delivery notes',
   *       number: 'PO-001',
   *       priority_code: 'normal',
   *       promised_at: '2026-05-15T00:00:00Z',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: PurchaseOrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseOrder> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/purchase-orders/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of purchase orders for the current account, newest
   * first.
   *
   * Filters combine with AND, while the values within a single filter combine with
   * OR. The `q` search term matches on order number and supplier name.
   *
   * This endpoint requires the permission: `purchase_orders:read`.
   *
   * @example
   * ```ts
   * const listPurchaseOrder =
   *   await client.operations.purchaseOrders.list();
   * ```
   */
  list(
    query: PurchaseOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPurchaseOrder> {
    return this._client.get('/v1/operations/purchase-orders', { query, ...options });
  }

  /**
   * Deletes a purchase order along with its lines, email contacts, and receiving
   * order.
   *
   * Orders in `fulfilled` status cannot be deleted; re-open the order first.
   * Deleting is permanent, and a later request for the same order reports that it
   * has already been deleted rather than that it was never found.
   *
   * This endpoint requires the permission: `purchase_orders:delete`.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.delete(
   *     'po_3ov2ym1pca8m',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PurchaseOrderDeleteResponse> {
    return this._client.delete(path`/v1/operations/purchase-orders/${id}`, options);
  }

  /**
   * Returns a paginated list of purchase order statuses.
   *
   * These are the same platform-provided status records that sales orders use, so
   * they are identical for every account. An order's own status is changed through
   * the change-status endpoint rather than by referencing one of these records.
   *
   * @example
   * ```ts
   * const listSalesOrderStatus =
   *   await client.operations.purchaseOrders.retrieveStatuses();
   * ```
   */
  retrieveStatuses(
    query: PurchaseOrderRetrieveStatusesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.ListSalesOrderStatus> {
    return this._client.get('/v1/operations/purchase-orders/statuses', { query, ...options });
  }
}

/**
 * Details of a single line item ordered from a supplier, used when creating a
 * purchase order and when adding a line to an existing one.
 */
export interface CreatePurchaseOrderLineInput {
  /**
   * ID of the product being ordered.
   */
  product_id: string;

  /**
   * The product SKU recorded on the line.
   *
   * Stored on the line itself, so it stays stable even if the product's SKU changes
   * later.
   */
  product_sku: string;

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price: AccountPricesAPI.RateInput;

  /**
   * ID of the inventory item this line is linked to.
   *
   * Stock received against the line is booked into this item, so lines for goods you
   * hold in inventory should reference one. Supplying an item also records the
   * item's material as sourced from this order's supplier, with `product_sku` as the
   * supplier part number, when that link does not exist yet.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;
}

/**
 * Request to create a purchase order.
 */
export interface CreatePurchaseOrderRequest {
  /**
   * Order lines to create with the order.
   *
   * Lines can also be added afterwards through the create-line endpoint.
   */
  lines: Array<CreatePurchaseOrderLineInput>;

  /**
   * Priority level for fulfilling the order.
   */
  priority_code: 'low' | 'normal' | 'high';

  /**
   * ID of the supplier account to place the order with.
   */
  supplier_account_id: string;

  /**
   * Bill-to country as a two-letter code.
   */
  bill_to_country?: string;

  /**
   * Bill-to locality/city.
   */
  bill_to_locality?: string;

  /**
   * Bill-to address name.
   */
  bill_to_name?: string;

  /**
   * Bill-to postal code.
   */
  bill_to_postal_code?: string;

  /**
   * Bill-to state/province.
   */
  bill_to_state?: string;

  /**
   * Bill-to street line 1.
   */
  bill_to_street_line_1?: string;

  /**
   * Bill-to street line 2.
   */
  bill_to_street_line_2?: string;

  /**
   * Carrier account number to bill when the billing type is `third_party`.
   */
  carrier_billing_account?: string;

  /**
   * Which party the carrier bills for freight on this order.
   *
   * - `sender`: the carrier bills the party shipping the goods.
   * - `third_party`: the carrier bills the account given in
   *   `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * ID of the carrier for the order's freight.
   */
  carrier_id?: string;

  /**
   * IDs of account users to add as email contacts on the order.
   *
   * Contacts receive the purchase order email when the order is issued with
   * `send_email`.
   */
  contact_account_user_ids?: Array<string>;

  /**
   * Free-form note to record on the order.
   */
  note?: string;

  /**
   * ID of the payment term agreed with the supplier.
   */
  payment_term_id?: string;

  /**
   * Promised delivery date in `YYYY-MM-DD` format.
   *
   * Returned as `scheduled_at` on the purchase order resource.
   */
  promised_at?: string;

  /**
   * ID of the carrier service level for the order's freight.
   */
  service_level_id?: string;

  /**
   * Ship-to country as a two-letter code.
   */
  ship_to_country?: string;

  /**
   * Ship-to locality/city.
   */
  ship_to_locality?: string;

  /**
   * Ship-to address name.
   */
  ship_to_name?: string;

  /**
   * Ship-to postal code.
   */
  ship_to_postal_code?: string;

  /**
   * Ship-to state/province.
   */
  ship_to_state?: string;

  /**
   * Ship-to street line 1.
   */
  ship_to_street_line_1?: string;

  /**
   * Ship-to street line 2.
   */
  ship_to_street_line_2?: string;

  /**
   * ID of the shipping term that applies to the order.
   */
  shipping_term_id?: string;
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
export interface ListPurchaseOrder {
  /**
   * Resources in this page.
   */
  data: Array<PurchaseOrder>;

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
  data: Array<DeliveriesAPI.PurchaseOrderLine>;

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
 * Details of a single line item ordered from a supplier, used when creating a
 * purchase order and when adding a line to an existing one.
 */
export interface OrderLineInput {
  /**
   * ID of the product being ordered.
   */
  product_id: string;

  /**
   * The product SKU recorded on the line.
   *
   * Stored on the line itself, so it stays stable even if the product's SKU changes
   * later.
   */
  product_sku: string;

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price: AccountPricesAPI.RateInput;

  /**
   * ID of the inventory item this line is linked to.
   *
   * Stock received against the line is booked into this item, so lines for goods you
   * hold in inventory should reference one. Supplying an item also records the
   * item's material as sourced from this order's supplier, with `product_sku` as the
   * supplier part number, when that link does not exist yet.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;
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
  payment_term: AnalyticsAPI.PaymentTerm | null;

  /**
   * Priority level for fulfilling the order, relative to other open orders.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * PurchaseOrderRelated names the records produced from a purchase order.
   */
  related: PurchaseOrderRelated | null;

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
  shipping_term: AnalyticsAPI.ShippingTerm | null;

  /**
   * Lifecycle status of the order.
   *
   * - `estimate`: a draft that has not yet been issued to the supplier.
   * - `issued`: the order has been issued to the supplier and is open for receiving.
   * - `fulfilled`: the order is complete and closed.
   */
  status: 'estimate' | 'issued' | 'fulfilled';

  /**
   * An account you buy from.
   *
   * A supplier is another account in a selling relationship with yours, so it is
   * referenced from purchase orders, receiving orders and deliveries as well as
   * retrieved on its own. Everything past its identity is expandable or nullable,
   * because a supplier named from one of those documents is known by id, name and
   * number alone.
   */
  supplier: SuppliersAPI.Supplier | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

/**
 * PurchaseOrderRelated names the records produced from a purchase order.
 */
export interface PurchaseOrderRelated {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  deliveries: SalesOrdersAPI.ListRecord | null;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order_related';

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like the `actor` and `entity` references, it carries just enough to identify and
   * label the referenced record without embedding its full resource. The `status`
   * and `metadata` fields hold type-specific detail that varies by the kind of
   * record referenced.
   */
  receiving_order: SalesOrdersAPI.Record | null;
}

/**
 * Request to update a purchase order.
 */
export interface UpdatePurchaseOrderRequest {
  /**
   * ID of an existing address to use as the bill-to address.
   */
  billing_address_id?: string;

  /**
   * IDs of account users to set as the order's email contacts.
   *
   * Replaces the full set of existing contacts; omit the field to leave contacts
   * unchanged.
   */
  contact_account_user_ids?: Array<string>;

  /**
   * Free-form note to record on the order.
   */
  note?: string;

  /**
   * New purchase order number, replacing the one assigned at creation.
   *
   * Must be unique within the account; a number already used by another order is
   * rejected.
   */
  number?: string;

  /**
   * Priority level for fulfilling the order (`low`, `normal`, or `high`).
   */
  priority_code?: 'low' | 'normal' | 'high';

  /**
   * Promised delivery date in `YYYY-MM-DD` format.
   *
   * Returned as `scheduled_at` on the purchase order resource.
   */
  promised_at?: string;

  /**
   * ID of an existing address to use as the ship-to address.
   */
  shipping_address_id?: string;
}

export interface PurchaseOrderDeleteResponse {}

export interface PurchaseOrderCreateParams {
  /**
   * Body param: Order lines to create with the order.
   *
   * Lines can also be added afterwards through the create-line endpoint.
   */
  lines: Array<CreatePurchaseOrderLineInput>;

  /**
   * Body param: Priority level for fulfilling the order.
   */
  priority_code: 'low' | 'normal' | 'high';

  /**
   * Body param: ID of the supplier account to place the order with.
   */
  supplier_account_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'supplier'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'related'
    | 'related.receiving_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.unit_price'
    | 'lines.unit_price.numerator_unit'
    | 'lines.unit_price.denominator_unit'
    | 'contacts'
  >;

  /**
   * Body param: Bill-to country as a two-letter code.
   */
  bill_to_country?: string;

  /**
   * Body param: Bill-to locality/city.
   */
  bill_to_locality?: string;

  /**
   * Body param: Bill-to address name.
   */
  bill_to_name?: string;

  /**
   * Body param: Bill-to postal code.
   */
  bill_to_postal_code?: string;

  /**
   * Body param: Bill-to state/province.
   */
  bill_to_state?: string;

  /**
   * Body param: Bill-to street line 1.
   */
  bill_to_street_line_1?: string;

  /**
   * Body param: Bill-to street line 2.
   */
  bill_to_street_line_2?: string;

  /**
   * Body param: Carrier account number to bill when the billing type is
   * `third_party`.
   */
  carrier_billing_account?: string;

  /**
   * Body param: Which party the carrier bills for freight on this order.
   *
   * - `sender`: the carrier bills the party shipping the goods.
   * - `third_party`: the carrier bills the account given in
   *   `carrier_billing_account`.
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: ID of the carrier for the order's freight.
   */
  carrier_id?: string;

  /**
   * Body param: IDs of account users to add as email contacts on the order.
   *
   * Contacts receive the purchase order email when the order is issued with
   * `send_email`.
   */
  contact_account_user_ids?: Array<string>;

  /**
   * Body param: Free-form note to record on the order.
   */
  note?: string;

  /**
   * Body param: ID of the payment term agreed with the supplier.
   */
  payment_term_id?: string;

  /**
   * Body param: Promised delivery date in `YYYY-MM-DD` format.
   *
   * Returned as `scheduled_at` on the purchase order resource.
   */
  promised_at?: string;

  /**
   * Body param: ID of the carrier service level for the order's freight.
   */
  service_level_id?: string;

  /**
   * Body param: Ship-to country as a two-letter code.
   */
  ship_to_country?: string;

  /**
   * Body param: Ship-to locality/city.
   */
  ship_to_locality?: string;

  /**
   * Body param: Ship-to address name.
   */
  ship_to_name?: string;

  /**
   * Body param: Ship-to postal code.
   */
  ship_to_postal_code?: string;

  /**
   * Body param: Ship-to state/province.
   */
  ship_to_state?: string;

  /**
   * Body param: Ship-to street line 1.
   */
  ship_to_street_line_1?: string;

  /**
   * Body param: Ship-to street line 2.
   */
  ship_to_street_line_2?: string;

  /**
   * Body param: ID of the shipping term that applies to the order.
   */
  shipping_term_id?: string;
}

export interface PurchaseOrderRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'supplier'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'related'
    | 'related.receiving_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.unit_price'
    | 'lines.unit_price.numerator_unit'
    | 'lines.unit_price.denominator_unit'
    | 'contacts'
  >;
}

export interface PurchaseOrderUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'supplier'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'related'
    | 'related.receiving_order'
    | 'related.deliveries'
    | 'lines'
    | 'lines.item'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.unit_price'
    | 'lines.unit_price.numerator_unit'
    | 'lines.unit_price.denominator_unit'
    | 'contacts'
  >;

  /**
   * Body param: ID of an existing address to use as the bill-to address.
   */
  billing_address_id?: string;

  /**
   * Body param: IDs of account users to set as the order's email contacts.
   *
   * Replaces the full set of existing contacts; omit the field to leave contacts
   * unchanged.
   */
  contact_account_user_ids?: Array<string>;

  /**
   * Body param: Free-form note to record on the order.
   */
  note?: string;

  /**
   * Body param: New purchase order number, replacing the one assigned at creation.
   *
   * Must be unique within the account; a number already used by another order is
   * rejected.
   */
  number?: string;

  /**
   * Body param: Priority level for fulfilling the order (`low`, `normal`, or
   * `high`).
   */
  priority_code?: 'low' | 'normal' | 'high';

  /**
   * Body param: Promised delivery date in `YYYY-MM-DD` format.
   *
   * Returned as `scheduled_at` on the purchase order resource.
   */
  promised_at?: string;

  /**
   * Body param: ID of an existing address to use as the ship-to address.
   */
  shipping_address_id?: string;
}

export interface PurchaseOrderListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter to orders created up to this date, in `YYYY-MM-DD` format.
   *
   * Compared against the start of the given day, so orders created later that same
   * day are excluded.
   */
  ends_at?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'supplier'
    | 'lines'
    | 'lines.item'
    | 'lines.quantity_ordered'
    | 'lines.quantity_ordered.unit'
    | 'lines.unit_price'
    | 'lines.unit_price.numerator_unit'
    | 'lines.unit_price.denominator_unit'
  >;

  /**
   * Filter to orders with at least one line referencing any of these items.
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
   * Filter to orders created on or after this date, in `YYYY-MM-DD` format.
   */
  starts_at?: string;

  /**
   * Filter to orders with any of these statuses.
   */
  status_codes?: Array<'estimate' | 'issued' | 'fulfilled'>;

  /**
   * Filter to orders placed with any of these suppliers.
   */
  supplier_ids?: Array<string>;
}

export interface PurchaseOrderRetrieveStatusesParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

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

PurchaseOrders.Actions = Actions;
PurchaseOrders.Lines = Lines;

export declare namespace PurchaseOrders {
  export {
    type CreatePurchaseOrderLineInput as CreatePurchaseOrderLineInput,
    type CreatePurchaseOrderRequest as CreatePurchaseOrderRequest,
    type EmailContact as EmailContact,
    type ListEmailContact as ListEmailContact,
    type ListPurchaseOrder as ListPurchaseOrder,
    type ListPurchaseOrderLine as ListPurchaseOrderLine,
    type OrderLineInput as OrderLineInput,
    type PurchaseOrder as PurchaseOrder,
    type PurchaseOrderRelated as PurchaseOrderRelated,
    type UpdatePurchaseOrderRequest as UpdatePurchaseOrderRequest,
    type PurchaseOrderDeleteResponse as PurchaseOrderDeleteResponse,
    type PurchaseOrderCreateParams as PurchaseOrderCreateParams,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderListParams as PurchaseOrderListParams,
    type PurchaseOrderRetrieveStatusesParams as PurchaseOrderRetrieveStatusesParams,
  };

  export {
    Actions as Actions,
    type BulkDeletePurchaseOrdersRequest as BulkDeletePurchaseOrdersRequest,
    type ChangePurchaseOrderStatusRequest as ChangePurchaseOrderStatusRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionChangeStatusParams as ActionChangeStatusParams,
  };

  export {
    Lines as Lines,
    type CreatePurchaseOrderLineRequest as CreatePurchaseOrderLineRequest,
    type UpdatePurchaseOrderLineRequest as UpdatePurchaseOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
