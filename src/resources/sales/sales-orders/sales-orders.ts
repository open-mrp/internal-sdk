// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as PaymentTermsAPI from '../../finance/payment-terms';
import * as ShippingTermsAPI from '../../operations/shipping-terms';
import * as AddressesAPI from '../addresses';
import * as PrioritiesAPI from '../priorities';
import * as AlertsAPI from '../../ai/alerts/alerts';
import * as ActionsAPI from '../../operations/batches/actions';
import * as CarriersAPI from '../../operations/carriers/carriers';
import * as ServiceLevelsAPI from '../../operations/carriers/service-levels';
import * as LinesAPI from '../../operations/purchase-orders/lines';
import * as PurchaseOrdersAPI from '../../operations/purchase-orders/purchase-orders';
import * as CustomersAPI from '../customers/customers';
import * as OrderDiscountsAPI from '../order-discounts/order-discounts';
import * as SalesOrdersActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionCreateProductionRunResponse,
  ActionUpdateChangeStatusParams,
  Actions,
} from './actions';
import * as SalesOrdersLinesAPI from './lines';
import {
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineUpdateParams,
  Lines as LinesAPILines,
  SalesOrderLineDetail,
} from './lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SalesOrders extends APIResource {
  actions: SalesOrdersActionsAPI.Actions = new SalesOrdersActionsAPI.Actions(this._client);
  lines: SalesOrdersLinesAPI.Lines = new SalesOrdersLinesAPI.Lines(this._client);

  /**
   * Returns a sales order by ID.
   *
   * @example
   * ```ts
   * const salesOrderDetail =
   *   await client.sales.salesOrders.retrieve(
   *     'or_01jm4r6700f8nwq3v5hx2d9ktp',
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
   *   await client.sales.salesOrders.update('', {
   *     carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *     note: 'Updated shipping instructions',
   *     priority_code: 'normal',
   *     ship_to_name: 'Acme Inc.',
   *     ship_to_street_line_1: '123 Main Street',
   *   });
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
   * Deletes a sales order and all its related records.
   *
   * @example
   * ```ts
   * const salesOrder = await client.sales.salesOrders.delete(
   *   'or_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * const response = await client.sales.salesOrders.checkout(
   *   'or_01jm4r6700f8nwq3v5hx2d9ktp',
   *   { email: 'email' },
   * );
   * ```
   */
  checkout(
    id: string,
    body: SalesOrderCheckoutParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrderCheckoutResponse> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/checkout`, { body, ...options });
  }

  /**
   * Returns a paginated list of sales orders for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.salesOrders.retrieveSalesOrders();
   * ```
   */
  retrieveSalesOrders(
    query: SalesOrderRetrieveSalesOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrderRetrieveSalesOrdersResponse> {
    return this._client.get('/v1/sales/sales-orders', { query, ...options });
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
  ): APIPromise<PurchaseOrdersAPI.ListSalesOrderStatus> {
    return this._client.get('/v1/sales/sales-orders/statuses', { query, ...options });
  }

  /**
   * Creates a sales order.
   *
   * @example
   * ```ts
   * const salesOrderDetail = await client.sales.salesOrders.salesOrders({
   *   acknowledgement_email_contacts: [{ account_user_id: 'account_user_id' }],
   *   buyer_account_id: 'ac_01gf7a8200er3ar3pkfrb6kk29',
   *   invoice_email_contacts: [{ account_user_id: 'account_user_id' }],
   *   lines: [
   *     {
   *       product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
   *       product_sku: 'WIDGET-001',
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '10',
   *       unit_price_denominator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       unit_price_numerator_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       unit_price_value: '25.00',
   *     },
   *   ],
   *   priority_code: 'normal',
   *   sales_order_type_code: 'sales_order',
   *   carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   note: 'Rush order for trade show',
   *   service_level_id: 'crop_01jm4r6700f8nwq3v5hx2d9ktp',
   *   ship_to_country: 'US',
   *   ship_to_locality: 'San Francisco',
   *   ship_to_name: 'Acme Inc.',
   *   ship_to_postal_code: '94105',
   *   ship_to_state: 'CA',
   *   ship_to_street_line_1: '123 Main Street',
   * });
   * ```
   */
  salesOrders(params: SalesOrderSalesOrdersParams, options?: RequestOptions): APIPromise<SalesOrderDetail> {
    const { include, ...body } = params;
    return this._client.post('/v1/sales/sales-orders', { query: { include }, body, ...options });
  }
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
  bill_to_address: AddressesAPI.Address | null;

  /**
   * Carrier resource.
   */
  carrier: CarriersAPI.Carrier | null;

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
  lines: SalesOrderDetail.Lines | null;

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
  payment_term: PaymentTermsAPI.PaymentTerm | null;

  /**
   * Minimal pick sub-resource.
   */
  pick: SalesOrderDetail.Pick | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: PrioritiesAPI.Priority | null;

  /**
   * Production run sub-resource.
   */
  production_run: ActionsAPI.ProductionRun | null;

  /**
   * Promised timestamp.
   */
  promised_at: string | null;

  /**
   * Reference to an actor (user, API key, or agent).
   */
  sales_rep: AlertsAPI.Actor | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: ServiceLevelsAPI.ServiceLevel | null;

  /**
   * Address with associated geolocation.
   */
  ship_to_address: AddressesAPI.Address | null;

  /**
   * ShippingTerm resource.
   */
  shipping_term: ShippingTermsAPI.ShippingTerm | null;

  /**
   * Sales order status sub-resource.
   */
  status: PurchaseOrdersAPI.SalesOrderStatusDetail | null;

  /**
   * Sales order type sub-resource.
   */
  type: PurchaseOrdersAPI.SalesOrderType | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace SalesOrderDetail {
  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<SalesOrdersLinesAPI.SalesOrderLineDetail>;

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

export interface SalesOrderDeleteResponse {}

/**
 * Checkout session result.
 */
export interface SalesOrderCheckoutResponse {
  /**
   * Checkout URL.
   */
  checkout_url: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface SalesOrderRetrieveSalesOrdersResponse {
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
  page_info: AgentsAPI.PageInfo;
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

export interface SalesOrderRetrieveSalesOrdersParams {
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

export interface SalesOrderSalesOrdersParams {
  /**
   * Body param: Account users who should receive order acknowledgement emails.
   */
  acknowledgement_email_contacts: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Buyer account ID.
   */
  buyer_account_id: string;

  /**
   * Body param: Account users who should receive invoice emails.
   */
  invoice_email_contacts: Array<SalesOrderEmailContactInput>;

  /**
   * Body param: Order lines to create.
   */
  lines: Array<SalesOrderSalesOrdersParams.Line>;

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

export namespace SalesOrderSalesOrdersParams {
  /**
   * Line item input for a create sales order request.
   */
  export interface Line extends LinesAPI.OrderLineInput {
    /**
     * EDI line item ID.
     */
    edi_line_item_id?: string;
  }
}

SalesOrders.Actions = Actions;
SalesOrders.Lines = LinesAPILines;

export declare namespace SalesOrders {
  export {
    type SalesOrderDetail as SalesOrderDetail,
    type SalesOrderEmailContactInput as SalesOrderEmailContactInput,
    type SalesOrderDeleteResponse as SalesOrderDeleteResponse,
    type SalesOrderCheckoutResponse as SalesOrderCheckoutResponse,
    type SalesOrderRetrieveSalesOrdersResponse as SalesOrderRetrieveSalesOrdersResponse,
    type SalesOrderRetrieveParams as SalesOrderRetrieveParams,
    type SalesOrderUpdateParams as SalesOrderUpdateParams,
    type SalesOrderCheckoutParams as SalesOrderCheckoutParams,
    type SalesOrderRetrieveSalesOrdersParams as SalesOrderRetrieveSalesOrdersParams,
    type SalesOrderRetrieveStatusesParams as SalesOrderRetrieveStatusesParams,
    type SalesOrderSalesOrdersParams as SalesOrderSalesOrdersParams,
  };

  export {
    Actions as Actions,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionCreateProductionRunResponse as ActionCreateProductionRunResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionUpdateChangeStatusParams as ActionUpdateChangeStatusParams,
  };

  export {
    LinesAPILines as Lines,
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
