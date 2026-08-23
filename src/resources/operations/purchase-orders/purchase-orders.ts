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
  ): APIPromise<DeliveriesAPI.PurchaseOrder> {
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
  ): APIPromise<DeliveriesAPI.PurchaseOrder> {
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

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: AccountPricesAPI.RateInput;
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: AccountPricesAPI.RateInput;
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
    type ListPurchaseOrder as ListPurchaseOrder,
    type OrderLineInput as OrderLineInput,
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
