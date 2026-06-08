// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RequestLogsAPI from '../../core/request-logs';
import * as AccountPricesAPI from '../account-prices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as CustomersAPI from '../customers/customers';
import * as OrderDiscountsAPI from '../order-discounts/order-discounts';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionCloseParams,
  ActionIssueParams,
  ActionOpenParams,
  ActionUnissueParams,
  Actions,
  BulkDeleteSalesOrdersRequest,
  CloseSalesOrderRequest,
  CreateProductionRunResponse,
  CreateProductionRunResponseRef,
  IssueSalesOrderRequest,
  OpenSalesOrderRequest,
  UnissueSalesOrderRequest,
} from './actions';
import * as LinesAPI from './lines';
import {
  CreateSalesOrderLineRequest,
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineUpdateParams,
  Lines,
  RateInput,
  UpdateSalesOrderLineRequest,
} from './lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SalesOrders extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);

  /**
   * Creates a sales order.
   *
   * @example
   * ```ts
   * const salesOrder = await client.sales.salesOrders.create({
   *   buyer_account_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *   lines: [
   *     {
   *       product_id: 'pd_013c29ab3f1518d0004094c316',
   *       product_sku: 'WIDGET-001',
   *       quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       quantity_value: '10',
   *       unit_price_denominator_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
   *       unit_price_numerator_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
   *       unit_price_value: '25.00',
   *     },
   *   ],
   *   priority_code: 'normal',
   *   sales_order_type_code: 'sales_order',
   * });
   * ```
   */
  create(params: SalesOrderCreateParams, options?: RequestOptions): APIPromise<SalesOrder> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/sales-orders', { query: { include }, body, ...options });
  }

  /**
   * Returns a sales order by ID.
   *
   * @example
   * ```ts
   * const salesOrder = await client.sales.salesOrders.retrieve(
   *   'or_01d5034136c3ccc048abecc312',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: SalesOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrder> {
    return this._client.get(path`/v1/sales/sales-orders/${id}`, { query, ...options });
  }

  /**
   * Partially updates a sales order.
   *
   * @example
   * ```ts
   * const salesOrder = await client.sales.salesOrders.update(
   *   'or_01d5034136c3ccc048abecc312',
   * );
   * ```
   */
  update(
    id: string,
    params: SalesOrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrder> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/sales/sales-orders/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of sales orders for the current account.
   *
   * @example
   * ```ts
   * const listSalesOrder =
   *   await client.sales.salesOrders.list();
   * ```
   */
  list(
    query: SalesOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesOrder> {
    return this._client.get('/v1/sales/sales-orders', { query, ...options });
  }

  /**
   * Deletes a sales order and all its related records.
   *
   * @example
   * ```ts
   * const salesOrder = await client.sales.salesOrders.delete(
   *   'or_01d5034136c3ccc048abecc312',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SalesOrderDeleteResponse> {
    return this._client.delete(path`/v1/sales/sales-orders/${id}`, options);
  }

  /**
   * Creates a checkout session for a sales order.
   *
   * @example
   * ```ts
   * const checkoutSalesOrderResponse =
   *   await client.sales.salesOrders.checkout(
   *     'or_01d5034136c3ccc048abecc312',
   *     { email: 'operations@acme.example.com' },
   *   );
   * ```
   */
  checkout(
    id: string,
    body: SalesOrderCheckoutParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSalesOrderResponse> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/checkout`, { body, ...options });
  }

  /**
   * Returns a paginated list of sales order statuses.
   *
   * @example
   * ```ts
   * const listSalesOrderStatus =
   *   await client.sales.salesOrders.retrieveStatuses();
   * ```
   */
  retrieveStatuses(
    query: SalesOrderRetrieveStatusesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesOrderStatus> {
    return this._client.get('/v1/sales/sales-orders/statuses', { query, ...options });
  }
}

/**
 * Request to create a checkout session for a sales order.
 */
export interface CheckoutSalesOrderRequest {
  /**
   * Email for the checkout session.
   */
  email: string;

  /**
   * Redirect URL on cancel.
   */
  cancel_url?: string;

  /**
   * Redirect URL on success.
   */
  success_url?: string;
}

/**
 * Checkout session result.
 */
export interface CheckoutSalesOrderResponse {
  /**
   * Checkout URL.
   */
  checkout_url: string;
}

/**
 * OrderLineInput represents the shared fields for creating an order line item.
 * Used as an embedded struct in purchase order and sales order line inputs.
 */
export interface CreateSalesOrderLineInput {
  /**
   * The product ID.
   */
  product_id: string;

  /**
   * The product SKU.
   */
  product_sku: string;

  /**
   * The quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * The quantity value.
   */
  quantity_value: string;

  /**
   * The unit price denominator unit ID.
   */
  unit_price_denominator_unit_id: string;

  /**
   * The unit price numerator unit ID.
   */
  unit_price_numerator_unit_id: string;

  /**
   * The unit price value.
   */
  unit_price_value: string;

  /**
   * The item ID.
   */
  item_id?: string;

  /**
   * The product description.
   */
  product_description?: string;

  /**
   * The unit cost denominator unit ID.
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * The unit cost numerator unit ID.
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * The unit cost value.
   */
  unit_cost_value?: string;
}

/**
 * Request to create a sales order.
 */
export interface CreateSalesOrderRequest {
  /**
   * Buyer account ID.
   */
  buyer_account_id: string;

  /**
   * Order lines to create.
   */
  lines: Array<CreateSalesOrderLineInput>;

  /**
   * Priority code.
   */
  priority_code: string;

  /**
   * Sales order type code.
   */
  sales_order_type_code: string;

  /**
   * Account users who should receive order acknowledgement emails.
   */
  acknowledgement_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Bill-to country.
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
   * Carrier billing account number.
   */
  carrier_billing_account_number?: string;

  /**
   * Who is billed for freight (sender or third_party).
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Carrier ID.
   */
  carrier_id?: string;

  /**
   * Customer's purchase order number.
   */
  customer_purchase_order_number?: string;

  /**
   * Account users who should receive invoice emails.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Order note.
   */
  note?: string;

  /**
   * Order discount ID.
   */
  order_discount_id?: string;

  /**
   * Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Sales rep ID.
   */
  sales_rep_id?: string;

  /**
   * Service level ID.
   */
  service_level_id?: string;

  /**
   * Ship-to country.
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
   * Shipping term ID.
   */
  shipping_term_id?: string;
}

/**
 * Freight describes the carrier selection and freight billing for a record. It is
 * a generic, reusable sub-resource shared by anything that carries shipping
 * configuration — e.g. a sales order's chosen freight, or a customer's default
 * freight preferences. It is itself expanded via its parent (e.g.
 * include[]=freight); when present, the full carrier and service level are
 * included.
 */
export interface Freight {
  /**
   * Carrier billing account number, used when a third party is billed.
   */
  billing_account_number: string | null;

  /**
   * Who is billed for freight (sender or third_party).
   */
  billing_type: 'sender' | 'third_party' | null;

  /**
   * Carrier resource.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Resource type identifier.
   */
  object: 'freight';

  /**
   * Freight policy (who arranges and pays for freight). Populated where a policy
   * applies, such as customer defaults.
   */
  policy: 'free_freight' | 'billed_freight' | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: CustomersAPI.ServiceLevel | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRecord {
  /**
   * Resources in this page.
   */
  data: Array<Record>;

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
export interface ListSalesOrder {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrder>;

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
export interface ListSalesOrderLine {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderLine>;

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
export interface ListSalesOrderStatus {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderStatus>;

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
 * OrderLineInput represents the shared fields for creating an order line item.
 * Used as an embedded struct in purchase order and sales order line inputs.
 */
export interface OrderLineInput {
  /**
   * The product ID.
   */
  product_id: string;

  /**
   * The product SKU.
   */
  product_sku: string;

  /**
   * The quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * The quantity value.
   */
  quantity_value: string;

  /**
   * The unit price denominator unit ID.
   */
  unit_price_denominator_unit_id: string;

  /**
   * The unit price numerator unit ID.
   */
  unit_price_numerator_unit_id: string;

  /**
   * The unit price value.
   */
  unit_price_value: string;

  /**
   * The item ID.
   */
  item_id?: string;

  /**
   * The product description.
   */
  product_description?: string;

  /**
   * The unit cost denominator unit ID.
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * The unit cost numerator unit ID.
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * The unit cost value.
   */
  unit_cost_value?: string;
}

/**
 * Product with expandable item, product line, and product type.
 */
export interface Product {
  /**
   * Product ID.
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
  object: 'product';

  /**
   * Product portal visibility.
   */
  portal_visibility: 'visible' | 'hidden';

  /**
   * Product line resource.
   */
  product_line: AccountPricesAPI.ProductLine | null;

  /**
   * Product type code.
   */
  type: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Record is a lightweight reference to a business record — a sales order, purchase
 * order, pick, shipment, production run, invoice, etc. Like Actor and Entity, it
 * carries just enough to identify and label the referenced record without
 * embedding its full resource. The optional status and metadata fields hold
 * type-specific detail that varies by the kind of record referenced.
 */
export interface Record {
  /**
   * Record ID.
   */
  id: string;

  /**
   * Type-specific metadata. The set of keys varies by record type.
   */
  metadata: { [key: string]: string };

  /**
   * Human-readable record number, when the record has one.
   */
  number: string | null;

  /**
   * Resource type identifier.
   */
  object: 'record';

  /**
   * Type-specific status code, when applicable.
   */
  status: string | null;

  /**
   * The kind of record referenced.
   */
  type:
    | 'sales_order'
    | 'purchase_order'
    | 'receiving_order'
    | 'pick'
    | 'shipment'
    | 'delivery'
    | 'production_run'
    | 'invoice'
    | 'transaction'
    | 'settlement';
}

/**
 * Full sales order resource.
 */
export interface SalesOrder {
  /**
   * Sales order ID.
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
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Customer's purchase order number.
   */
  customer_purchase_order_number: string | null;

  /**
   * Expiration timestamp.
   */
  expired_at: string | null;

  /**
   * First shipment timestamp.
   */
  first_ship_at: string | null;

  /**
   * Freight describes the carrier selection and freight billing for a record. It is
   * a generic, reusable sub-resource shared by anything that carries shipping
   * configuration — e.g. a sales order's chosen freight, or a customer's default
   * freight preferences. It is itself expanded via its parent (e.g.
   * include[]=freight); when present, the full carrier and service level are
   * included.
   */
  freight: Freight | null;

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
  lines: ListSalesOrderLine | null;

  /**
   * Order note.
   */
  note: string | null;

  /**
   * Sales order number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order';

  /**
   * Order discount resource.
   */
  order_discount: OrderDiscountsAPI.OrderDiscount | null;

  /**
   * Payment status.
   */
  payment_status: 'unpaid' | 'partially_paid' | 'paid';

  /**
   * Payment term resource.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Priority code.
   */
  priority: 'low' | 'normal' | 'high';

  /**
   * Promised timestamp.
   */
  promised_at: string | null;

  /**
   * SalesOrderRelated groups the records related to a sales order. The members are
   * individually expandable (e.g. include[]=related.pick); the group itself is
   * always present.
   */
  related: SalesOrderRelated | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  sales_rep: RequestLogsAPI.Actor | null;

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
   * SalesOrderTotals holds the derived monetary totals for a sales order or one of
   * its lines, following the lifecycle ordered -> packed -> invoiced.
   */
  totals: SalesOrderTotals | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SalesOrderEmailContactInput represents an account user subscribed to a
 * sales-order email notification type.
 */
export interface SalesOrderEmailContactInput {
  /**
   * Account user ID to receive the notification.
   */
  account_user_id: string;
}

/**
 * Full sales order line resource.
 */
export interface SalesOrderLine {
  /**
   * Sales order line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Line item number.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_line';

  /**
   * Product with expandable item, product line, and product type.
   */
  product: Product | null;

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
   * SalesOrderTotals holds the derived monetary totals for a sales order or one of
   * its lines, following the lifecycle ordered -> packed -> invoiced.
   */
  totals: SalesOrderTotals | null;

  /**
   * Rate resource.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_price: AccountUsersAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SalesOrderRelated groups the records related to a sales order. The members are
 * individually expandable (e.g. include[]=related.pick); the group itself is
 * always present.
 */
export interface SalesOrderRelated {
  /**
   * Resource type identifier.
   */
  object: 'sales_order_related';

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc. Like Actor and Entity, it
   * carries just enough to identify and label the referenced record without
   * embedding its full resource. The optional status and metadata fields hold
   * type-specific detail that varies by the kind of record referenced.
   */
  pick: Record | null;

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc. Like Actor and Entity, it
   * carries just enough to identify and label the referenced record without
   * embedding its full resource. The optional status and metadata fields hold
   * type-specific detail that varies by the kind of record referenced.
   */
  production_run: Record | null;

  /**
   * List represents a paginated list of resources.
   */
  shipments: ListRecord | null;
}

/**
 * Sales order status lookup value.
 */
export interface SalesOrderStatus {
  /**
   * Sales order status ID.
   */
  id: string;

  /**
   * Machine-readable status code.
   */
  code: 'estimate' | 'issued' | 'fulfilled';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_status';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: APIKeysAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SalesOrderTotals holds the derived monetary totals for a sales order or one of
 * its lines, following the lifecycle ordered -> packed -> invoiced.
 */
export interface SalesOrderTotals {
  /**
   * Total invoiced amount as a decimal string (unit price x quantity invoiced).
   */
  invoiced: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_totals';

  /**
   * Total ordered amount as a decimal string (unit price x quantity ordered).
   */
  ordered: string;

  /**
   * Total packed amount as a decimal string (unit price x quantity packed).
   */
  packed: string;
}

/**
 * Request to update a sales order.
 */
export interface UpdateSalesOrderRequest {
  /**
   * When set, replaces acknowledgement email contacts on the order. An empty list
   * clears all contacts; omitted leaves existing contacts untouched.
   */
  acknowledgement_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Acknowledgment status (not_sent, sent).
   */
  acknowledgment_status?: 'not_sent' | 'sent';

  /**
   * Billing address ID. Re-points the order to an existing address. To change an
   * address's contents, use the update-address endpoint.
   */
  billing_address_id?: string;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account_number?: string;

  /**
   * Who is billed for freight (sender or third_party).
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Carrier ID.
   */
  carrier_id?: string;

  /**
   * Customer ID.
   */
  customer_id?: string;

  /**
   * Customer's purchase order number.
   */
  customer_purchase_order_number?: string;

  /**
   * When set, replaces invoice email contacts on the order. An empty list clears all
   * contacts; omitted leaves existing contacts untouched.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Order note.
   */
  note?: string;

  /**
   * Order number.
   */
  number?: string;

  /**
   * Order discount ID.
   */
  order_discount_id?: string;

  /**
   * Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Priority code.
   */
  priority_code?: string;

  /**
   * Promised delivery date.
   */
  promised_at?: string;

  /**
   * Sales rep ID.
   */
  sales_rep_id?: string;

  /**
   * Service level ID.
   */
  service_level_id?: string;

  /**
   * Shipping address ID. Re-points the order to an existing address. To change an
   * address's contents, use the update-address endpoint.
   */
  shipping_address_id?: string;

  /**
   * Shipping term ID.
   */
  shipping_term_id?: string;
}

export interface SalesOrderDeleteResponse {}

export interface SalesOrderCreateParams {
  /**
   * Body param: Buyer account ID.
   */
  buyer_account_id: string;

  /**
   * Body param: Order lines to create.
   */
  lines: Array<CreateSalesOrderLineInput>;

  /**
   * Body param: Priority code.
   */
  priority_code: string;

  /**
   * Body param: Sales order type code.
   */
  sales_order_type_code: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'customer'
    | 'sales_rep'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'totals'
    | 'related.pick'
    | 'related.production_run'
    | 'related.shipments'
    | 'lines'
    | 'lines.product'
    | 'lines.quantity_ordered'
    | 'lines.unit_price'
    | 'lines.unit_cost'
    | 'lines.totals'
  >;

  /**
   * Body param: Account users who should receive order acknowledgement emails.
   */
  acknowledgement_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Bill-to country.
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
   * Body param: Carrier billing account number.
   */
  carrier_billing_account_number?: string;

  /**
   * Body param: Who is billed for freight (sender or third_party).
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Carrier ID.
   */
  carrier_id?: string;

  /**
   * Body param: Customer's purchase order number.
   */
  customer_purchase_order_number?: string;

  /**
   * Body param: Account users who should receive invoice emails.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Order note.
   */
  note?: string;

  /**
   * Body param: Order discount ID.
   */
  order_discount_id?: string;

  /**
   * Body param: Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Body param: Sales rep ID.
   */
  sales_rep_id?: string;

  /**
   * Body param: Service level ID.
   */
  service_level_id?: string;

  /**
   * Body param: Ship-to country.
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
   * Body param: Shipping term ID.
   */
  shipping_term_id?: string;
}

export interface SalesOrderRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'customer'
    | 'sales_rep'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'totals'
    | 'related.pick'
    | 'related.production_run'
    | 'related.shipments'
    | 'lines'
    | 'lines.product'
    | 'lines.quantity_ordered'
    | 'lines.unit_price'
    | 'lines.unit_cost'
    | 'lines.totals'
  >;
}

export interface SalesOrderUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'customer'
    | 'sales_rep'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'totals'
    | 'related.pick'
    | 'related.production_run'
    | 'related.shipments'
    | 'lines'
    | 'lines.product'
    | 'lines.quantity_ordered'
    | 'lines.unit_price'
    | 'lines.unit_cost'
    | 'lines.totals'
  >;

  /**
   * Body param: When set, replaces acknowledgement email contacts on the order. An
   * empty list clears all contacts; omitted leaves existing contacts untouched.
   */
  acknowledgement_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Acknowledgment status (not_sent, sent).
   */
  acknowledgment_status?: 'not_sent' | 'sent';

  /**
   * Body param: Billing address ID. Re-points the order to an existing address. To
   * change an address's contents, use the update-address endpoint.
   */
  billing_address_id?: string;

  /**
   * Body param: Carrier billing account number.
   */
  carrier_billing_account_number?: string;

  /**
   * Body param: Who is billed for freight (sender or third_party).
   */
  carrier_billing_type?: 'sender' | 'third_party';

  /**
   * Body param: Carrier ID.
   */
  carrier_id?: string;

  /**
   * Body param: Customer ID.
   */
  customer_id?: string;

  /**
   * Body param: Customer's purchase order number.
   */
  customer_purchase_order_number?: string;

  /**
   * Body param: When set, replaces invoice email contacts on the order. An empty
   * list clears all contacts; omitted leaves existing contacts untouched.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Order note.
   */
  note?: string;

  /**
   * Body param: Order number.
   */
  number?: string;

  /**
   * Body param: Order discount ID.
   */
  order_discount_id?: string;

  /**
   * Body param: Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Body param: Priority code.
   */
  priority_code?: string;

  /**
   * Body param: Promised delivery date.
   */
  promised_at?: string;

  /**
   * Body param: Sales rep ID.
   */
  sales_rep_id?: string;

  /**
   * Body param: Service level ID.
   */
  service_level_id?: string;

  /**
   * Body param: Shipping address ID. Re-points the order to an existing address. To
   * change an address's contents, use the update-address endpoint.
   */
  shipping_address_id?: string;

  /**
   * Body param: Shipping term ID.
   */
  shipping_term_id?: string;
}

export interface SalesOrderListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Whether to exclude internal orders.
   */
  exclude_internal_orders?: boolean;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer'>;

  /**
   * Filter by item IDs.
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
   * Filter by sales rep IDs.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status codes.
   */
  status_codes?: Array<string>;
}

export interface SalesOrderCheckoutParams {
  /**
   * Email for the checkout session.
   */
  email: string;

  /**
   * Redirect URL on cancel.
   */
  cancel_url?: string;

  /**
   * Redirect URL on success.
   */
  success_url?: string;
}

export interface SalesOrderRetrieveStatusesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

SalesOrders.Actions = Actions;
SalesOrders.Lines = Lines;

export declare namespace SalesOrders {
  export {
    type CheckoutSalesOrderRequest as CheckoutSalesOrderRequest,
    type CheckoutSalesOrderResponse as CheckoutSalesOrderResponse,
    type CreateSalesOrderLineInput as CreateSalesOrderLineInput,
    type CreateSalesOrderRequest as CreateSalesOrderRequest,
    type Freight as Freight,
    type ListRecord as ListRecord,
    type ListSalesOrder as ListSalesOrder,
    type ListSalesOrderLine as ListSalesOrderLine,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type OrderLineInput as OrderLineInput,
    type Product as Product,
    type Record as Record,
    type SalesOrder as SalesOrder,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderLine as SalesOrderLine,
    type SalesOrderRelated as SalesOrderRelated,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderTotals as SalesOrderTotals,
    type UpdateSalesOrderRequest as UpdateSalesOrderRequest,
    type SalesOrderDeleteResponse as SalesOrderDeleteResponse,
    type SalesOrderCreateParams as SalesOrderCreateParams,
    type SalesOrderRetrieveParams as SalesOrderRetrieveParams,
    type SalesOrderUpdateParams as SalesOrderUpdateParams,
    type SalesOrderListParams as SalesOrderListParams,
    type SalesOrderCheckoutParams as SalesOrderCheckoutParams,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
  };

  export {
    Actions as Actions,
    type BulkDeleteSalesOrdersRequest as BulkDeleteSalesOrdersRequest,
    type CloseSalesOrderRequest as CloseSalesOrderRequest,
    type CreateProductionRunResponse as CreateProductionRunResponse,
    type CreateProductionRunResponseRef as CreateProductionRunResponseRef,
    type IssueSalesOrderRequest as IssueSalesOrderRequest,
    type OpenSalesOrderRequest as OpenSalesOrderRequest,
    type UnissueSalesOrderRequest as UnissueSalesOrderRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionCloseParams as ActionCloseParams,
    type ActionIssueParams as ActionIssueParams,
    type ActionOpenParams as ActionOpenParams,
    type ActionUnissueParams as ActionUnissueParams,
  };

  export {
    Lines as Lines,
    type CreateSalesOrderLineRequest as CreateSalesOrderLineRequest,
    type RateInput as RateInput,
    type UpdateSalesOrderLineRequest as UpdateSalesOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
