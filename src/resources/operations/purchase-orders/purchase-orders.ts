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
 * Used as an embedded struct in purchase order and sales order line inputs.
 */
export interface CreatePurchaseOrderLineInput {
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
 * Request to create a purchase order.
 */
export interface CreatePurchaseOrderRequest {
  /**
   * Order lines to create.
   */
  lines: Array<CreatePurchaseOrderLineInput>;

  /**
   * Priority code.
   */
  priority_code: string;

  /**
   * Supplier account ID.
   */
  supplier_account_id: string;

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
   * Account user IDs for email contacts.
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
   * Promised delivery date.
   */
  promised_at?: string;

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
   * Billing address ID.
   */
  billing_address_id?: string;

  /**
   * Account user IDs for email contacts. Replaces existing contacts.
   */
  contact_account_user_ids?: Array<string>;

  /**
   * Order note.
   */
  note?: string;

  /**
   * Purchase order number.
   */
  number?: string;

  /**
   * Priority code.
   */
  priority_code?: string;

  /**
   * Promised delivery date.
   */
  promised_at?: string;

  /**
   * Shipping address ID.
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
   * Body param: Priority code.
   */
  priority_code: string;

  /**
   * Body param: Supplier account ID.
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
   * Body param: Account user IDs for email contacts.
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
   * Body param: Promised delivery date.
   */
  promised_at?: string;

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
   * Body param: Billing address ID.
   */
  billing_address_id?: string;

  /**
   * Body param: Account user IDs for email contacts. Replaces existing contacts.
   */
  contact_account_user_ids?: Array<string>;

  /**
   * Body param: Order note.
   */
  note?: string;

  /**
   * Body param: Purchase order number.
   */
  number?: string;

  /**
   * Body param: Priority code.
   */
  priority_code?: string;

  /**
   * Body param: Promised delivery date.
   */
  promised_at?: string;

  /**
   * Body param: Shipping address ID.
   */
  shipping_address_id?: string;
}

export interface PurchaseOrderListParams {
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
  include?: Array<'supplier' | 'lines'>;

  /**
   * Filter by item IDs.
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
   * Filter by status codes.
   */
  status_codes?: Array<string>;

  /**
   * Filter by supplier IDs.
   */
  supplier_ids?: Array<string>;
}

export interface PurchaseOrderRetrieveStatusesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
