// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RequestLogsAPI from '../../core/request-logs';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as CustomersAPI from '../customers/customers';
import * as OrderDiscountsAPI from '../order-discounts/order-discounts';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionChangeStatusParams,
  Actions,
  BulkDeleteSalesOrdersRequest,
  ChangeSalesOrderStatusRequest,
  CreateProductionRunResponse,
  CreateProductionRunResponseRef,
} from './actions';
import * as LinesAPI from './lines';
import {
  CreateSalesOrderLineRequest,
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineUpdateParams,
  Lines,
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
   * const salesOrderDetail =
   *   await client.sales.salesOrders.create({
   *     buyer_account_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *     lines: [
   *       {
   *         product_id: 'pd_013c29ab3f1518d0004094c316',
   *         product_sku: 'WIDGET-001',
   *         quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *         quantity_value: '10',
   *         unit_price_denominator_unit_id:
   *           'un_01966263f74a5a0cae356000a1',
   *         unit_price_numerator_unit_id:
   *           'un_01966263f74a5a0cae356000a1',
   *         unit_price_value: '25.00',
   *       },
   *     ],
   *     priority_code: 'normal',
   *     sales_order_type_code: 'sales_order',
   *     carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *     note: 'Rush order for trade show',
   *     service_level_id: 'crop_01cfaf03f104e90ef9680e2a30',
   *     ship_to_country: 'US',
   *     ship_to_locality: 'San Francisco',
   *     ship_to_name: 'Acme Inc.',
   *     ship_to_postal_code: '94105',
   *     ship_to_state: 'CA',
   *     ship_to_street_line_1: '123 Main Street',
   *   });
   * ```
   */
  create(params: SalesOrderCreateParams, options?: RequestOptions): APIPromise<SalesOrderDetail> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/sales-orders', { query: { include }, body, ...options });
  }

  /**
   * Returns a sales order by ID.
   *
   * @example
   * ```ts
   * const salesOrderDetail =
   *   await client.sales.salesOrders.retrieve(
   *     'or_01d5034136c3ccc048abecc312',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: SalesOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrderDetail> {
    return this._client.get(path`/v1/sales/sales-orders/${id}`, { query, ...options });
  }

  /**
   * Partially updates a sales order.
   *
   * @example
   * ```ts
   * const salesOrderDetail =
   *   await client.sales.salesOrders.update(
   *     'or_01d5034136c3ccc048abecc312',
   *     {
   *       carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *       note: 'Updated shipping instructions',
   *       priority_code: 'normal',
   *       ship_to_name: 'Acme Inc.',
   *       ship_to_street_line_1: '123 Main Street',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: SalesOrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrderDetail> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/sales/sales-orders/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of sales orders for the current account.
   *
   * @example
   * ```ts
   * const listSalesOrderDetail =
   *   await client.sales.salesOrders.list();
   * ```
   */
  list(
    query: SalesOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesOrderDetail> {
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
   *     {
   *       email: 'operations@acme.example.com',
   *       cancel_url:
   *         'https://dashboard.example.com/checkout/cancel',
   *       success_url:
   *         'https://dashboard.example.com/checkout/success',
   *     },
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
 * Line item input for a create sales order request.
 */
export interface CreateSalesOrderLineInput extends OrderLineInput {
  /**
   * EDI line item ID.
   */
  edi_line_item_id?: string;
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
  carrier_billing_account?: string;

  /**
   * Carrier billing type.
   */
  carrier_billing_type?: string;

  /**
   * Carrier ID.
   */
  carrier_id?: string;

  /**
   * Customer purchase order number.
   */
  customer_po_number?: string;

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
 * List represents a paginated list of resources.
 */
export interface ListSalesOrderDetail {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderDetail>;

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
export interface ListSalesOrderLineDetail {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrderLineDetail>;

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
 * Minimal pick sub-resource.
 */
export interface Pick {
  /**
   * Pick ID.
   */
  id: string;

  /**
   * Resource type identifier.
   */
  object: 'pick';
}

/**
 * Production run sub-resource.
 */
export interface ProductionRun {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Production run number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';
}

/**
 * Full sales order resource.
 */
export interface SalesOrderDetail {
  /**
   * Sales order ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * Carrier resource.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Carrier billing account number.
   */
  carrier_billing_account: string | null;

  /**
   * Carrier billing type.
   */
  carrier_billing_type: string | null;

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
   * Customer purchase order number.
   */
  customer_po: string | null;

  /**
   * Expiration timestamp.
   */
  expired_at: string | null;

  /**
   * First shipment timestamp.
   */
  first_ship_at: string | null;

  /**
   * Whether the acknowledgment has been sent.
   */
  is_acknowledgment_sent: boolean;

  /**
   * Issued timestamp.
   */
  issued_at: string | null;

  /**
   * Count of order lines. Always populated in list responses.
   */
  line_count: number;

  /**
   * List represents a paginated list of resources.
   */
  lines: ListSalesOrderLineDetail | null;

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
   * Payment term resource.
   */
  payment_term: CustomersAPI.PaymentTerm | null;

  /**
   * Minimal pick sub-resource.
   */
  pick: Pick | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: CustomersAPI.Priority | null;

  /**
   * Production run sub-resource.
   */
  production_run: ProductionRun | null;

  /**
   * Promised timestamp.
   */
  promised_at: string | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  sales_rep: RequestLogsAPI.Actor | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: CustomersAPI.ServiceLevel | null;

  /**
   * Address with associated geolocation.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: CustomersAPI.ShippingTerm | null;

  /**
   * Sales order status sub-resource.
   */
  status: SalesOrderStatusDetail | null;

  /**
   * Sales order type sub-resource.
   */
  type: SalesOrderType | null;

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
export interface SalesOrderLineDetail {
  /**
   * Sales order line ID.
   */
  id: string;

  /**
   * Completed timestamp.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * EDI line item ID.
   */
  edi_line_item_id: string | null;

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
  object: 'sales_order_line';

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
  quantity_invoiced: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_ordered: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_packed: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_picked: AccountUsersAPI.Quantity | null;

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
 * Sales order status sub-resource.
 */
export interface SalesOrderStatusDetail {
  /**
   * Status code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_status';
}

/**
 * Sales order type sub-resource.
 */
export interface SalesOrderType {
  /**
   * Type code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_type';
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
  carrier_billing_account?: string;

  /**
   * Carrier billing type.
   */
  carrier_billing_type?: string;

  /**
   * Carrier ID.
   */
  carrier_id?: string;

  /**
   * Customer ID.
   */
  customer_id?: string;

  /**
   * Customer purchase order number.
   */
  customer_po_number?: string;

  /**
   * When set, replaces invoice email contacts on the order. An empty list clears all
   * contacts; omitted leaves existing contacts untouched.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Whether the acknowledgment has been sent.
   */
  is_acknowledgment_sent?: boolean;

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
    | 'bill_to_address'
    | 'ship_to_address'
    | 'carrier'
    | 'service_level'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'lines'
    | 'lines.item'
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
  carrier_billing_account?: string;

  /**
   * Body param: Carrier billing type.
   */
  carrier_billing_type?: string;

  /**
   * Body param: Carrier ID.
   */
  carrier_id?: string;

  /**
   * Body param: Customer purchase order number.
   */
  customer_po_number?: string;

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
    | 'bill_to_address'
    | 'ship_to_address'
    | 'carrier'
    | 'service_level'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'lines'
    | 'lines.item'
  >;
}

export interface SalesOrderUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'customer'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'carrier'
    | 'service_level'
    | 'payment_term'
    | 'shipping_term'
    | 'order_discount'
    | 'lines'
    | 'lines.item'
  >;

  /**
   * Body param: When set, replaces acknowledgement email contacts on the order. An
   * empty list clears all contacts; omitted leaves existing contacts untouched.
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
  carrier_billing_account?: string;

  /**
   * Body param: Carrier billing type.
   */
  carrier_billing_type?: string;

  /**
   * Body param: Carrier ID.
   */
  carrier_id?: string;

  /**
   * Body param: Customer ID.
   */
  customer_id?: string;

  /**
   * Body param: Customer purchase order number.
   */
  customer_po_number?: string;

  /**
   * Body param: When set, replaces invoice email contacts on the order. An empty
   * list clears all contacts; omitted leaves existing contacts untouched.
   */
  invoice_email_contacts?: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Whether the acknowledgment has been sent.
   */
  is_acknowledgment_sent?: boolean;

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
    type ListSalesOrderDetail as ListSalesOrderDetail,
    type ListSalesOrderLineDetail as ListSalesOrderLineDetail,
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type OrderLineInput as OrderLineInput,
    type Pick as Pick,
    type ProductionRun as ProductionRun,
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type SalesOrderStatus as SalesOrderStatus,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
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
    type ChangeSalesOrderStatusRequest as ChangeSalesOrderStatusRequest,
    type CreateProductionRunResponse as CreateProductionRunResponse,
    type CreateProductionRunResponseRef as CreateProductionRunResponseRef,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionChangeStatusParams as ActionChangeStatusParams,
  };

  export {
    Lines as Lines,
    type CreateSalesOrderLineRequest as CreateSalesOrderLineRequest,
    type UpdateSalesOrderLineRequest as UpdateSalesOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
