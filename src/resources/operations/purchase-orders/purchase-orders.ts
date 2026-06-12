// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
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
   * The order number is assigned automatically and the order starts in `estimate`
   * status. Bill-to and ship-to addresses are created from the inline address
   * fields, and any provided lines and email contacts are created with the order.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.create({
   *     lines: [
   *       {
   *         product_id: 'pd_013c29ab3f1518d0004094c316',
   *         product_sku: 'RAW-100',
   *         quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *         quantity_value: '500',
   *         unit_price_denominator_unit_id:
   *           'un_01966263f74a5a0cae356000a1',
   *         unit_price_numerator_unit_id:
   *           'un_01966263f74a5a0cae356000a1',
   *         unit_price_value: '12.50',
   *       },
   *     ],
   *     priority_code: 'normal',
   *     supplier_account_id: 'ac_0177902104bccac5fbb173cd96',
   *     carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *     note: 'Urgent restock order',
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
  create(
    params: PurchaseOrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.PurchaseOrder> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/purchase-orders', { query: { include }, body, ...options });
  }

  /**
   * Returns a purchase order by ID.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.retrieve(
   *     'po_0169aa3a722b081b117ac0e44f',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: PurchaseOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.PurchaseOrder> {
    return this._client.get(path`/v1/operations/purchase-orders/${id}`, { query, ...options });
  }

  /**
   * Partially updates a purchase order.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.update(
   *     'po_0169aa3a722b081b117ac0e44f',
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
  ): APIPromise<DeliveriesAPI.PurchaseOrder> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/purchase-orders/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of purchase orders for the current account.
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
   * Deletes a purchase order and all its related records.
   *
   * Orders in `fulfilled` status cannot be deleted.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.delete(
   *     'po_0169aa3a722b081b117ac0e44f',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PurchaseOrderDeleteResponse> {
    return this._client.delete(path`/v1/operations/purchase-orders/${id}`, options);
  }

  /**
   * Returns a paginated list of available purchase order status values.
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
 * OrderLineInput represents the shared fields for creating an order line item.
 *
 * Used as an embedded struct in purchase order and sales order line inputs.
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
   * ID of the unit of measure for the quantity.
   */
  quantity_unit_id: string;

  /**
   * Quantity ordered, as a decimal string.
   */
  quantity_value: string;

  /**
   * Unit ID for the unit price's denominator (the unit being sold, e.g. `each`).
   */
  unit_price_denominator_unit_id: string;

  /**
   * Unit ID for the unit price's numerator (the unit being charged, e.g. a currency
   * unit).
   */
  unit_price_numerator_unit_id: string;

  /**
   * Price charged per unit, as a decimal string.
   */
  unit_price_value: string;

  /**
   * ID of the inventory item to tie the line to.
   *
   * Lines tied to an item have inventory reserved for them when the order is issued.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;

  /**
   * Unit ID for the unit cost's denominator (the unit being costed, e.g. `each`).
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Unit ID for the unit cost's numerator (the unit being charged, e.g. a currency
   * unit).
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Internal cost per unit, as a decimal string.
   */
  unit_cost_value?: string;
}

/**
 * Request to create a purchase order.
 */
export interface CreatePurchaseOrderRequest {
  /**
   * Order lines to create.
   */
  lines: Array<CreatePurchaseOrderLineInput>;

  /**
   * Priority level for fulfilling the order (`low`, `normal`, or `high`).
   */
  priority_code: string;

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
   * Which party the carrier bills for freight (`sender` or `third_party`).
   */
  carrier_billing_type?: string;

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
   * Order note.
   */
  note?: string;

  /**
   * Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Promised delivery date in `YYYY-MM-DD` format.
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
   * Shipping term ID.
   */
  shipping_term_id?: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListPurchaseOrder {
  /**
   * Resources in this page.
   */
  data: Array<DeliveriesAPI.PurchaseOrder>;

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
   * Order note.
   */
  note?: string;

  /**
   * New purchase order number.
   *
   * Must be unique within the account.
   */
  number?: string;

  /**
   * Priority level for fulfilling the order (`low`, `normal`, or `high`).
   */
  priority_code?: string;

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
   * Body param: Order lines to create.
   */
  lines: Array<CreatePurchaseOrderLineInput>;

  /**
   * Body param: Priority level for fulfilling the order (`low`, `normal`, or
   * `high`).
   */
  priority_code: string;

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
    | 'receiving_order'
    | 'lines'
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
   * Body param: Which party the carrier bills for freight (`sender` or
   * `third_party`).
   */
  carrier_billing_type?: string;

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
   * Body param: Order note.
   */
  note?: string;

  /**
   * Body param: Payment term ID.
   */
  payment_term_id?: string;

  /**
   * Body param: Promised delivery date in `YYYY-MM-DD` format.
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
   * Body param: Shipping term ID.
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
    | 'receiving_order'
    | 'lines'
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
    | 'receiving_order'
    | 'lines'
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
   * Body param: Order note.
   */
  note?: string;

  /**
   * Body param: New purchase order number.
   *
   * Must be unique within the account.
   */
  number?: string;

  /**
   * Body param: Priority level for fulfilling the order (`low`, `normal`, or
   * `high`).
   */
  priority_code?: string;

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
   * Filter to orders created on or before this date (inclusive).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'supplier' | 'lines'>;

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
   * Filter to orders created on or after this date (inclusive).
   */
  start_date?: string;

  /**
   * Filter to orders with any of these statuses (`estimate`, `issued`, `fulfilled`).
   */
  status_codes?: Array<string>;

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
    type ListPurchaseOrder as ListPurchaseOrder,
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
