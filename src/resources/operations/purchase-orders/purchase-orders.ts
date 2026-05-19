// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PurchaseOrdersAPI from './purchase-orders';
import * as AgentsAPI from '../../ai/agents';
import * as PaymentTermsAPI from '../../finance/payment-terms';
import * as ShippingTermsAPI from '../shipping-terms';
import * as AddressesAPI from '../../sales/addresses';
import * as PrioritiesAPI from '../../sales/priorities';
import * as ItemCategoriesAPI from '../../catalog/item-categories/item-categories';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as CarriersAPI from '../carriers/carriers';
import * as ServiceLevelsAPI from '../carriers/service-levels';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  ActionUpdateChangeStatusParams,
  Actions,
} from './actions';
import * as LinesAPI from './lines';
import {
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineUpdateParams,
  Lines as LinesAPILines,
  OrderLineInput,
  PurchaseOrderLineDetail,
} from './lines';
import * as ReceivingOrdersAPI from '../receiving-orders/receiving-orders';
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
   * Returns a purchase order by ID.
   *
   * @example
   * ```ts
   * const purchaseOrderDetail =
   *   await client.operations.purchaseOrders.retrieve(
   *     'po_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: PurchaseOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderDetail> {
    return this._client.get(path`/v1/operations/purchase-orders/${id}`, { query, ...options });
  }

  /**
   * Partially updates a purchase order.
   *
   * @example
   * ```ts
   * const purchaseOrderDetail =
   *   await client.operations.purchaseOrders.update('', {
   *     contact_account_user_ids: ['string'],
   *     note: 'Updated delivery notes',
   *     number: 'PO-001',
   *     priority_code: 'normal',
   *     promised_at: '2026-05-15T00:00:00Z',
   *   });
   * ```
   */
  update(
    id: string,
    params: PurchaseOrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderDetail> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/operations/purchase-orders/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes a purchase order and all its related records.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.delete(
   *     'po_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PurchaseOrderDeleteResponse> {
    return this._client.delete(path`/v1/operations/purchase-orders/${id}`, options);
  }

  /**
   * Creates a purchase order.
   *
   * @example
   * ```ts
   * const purchaseOrderDetail =
   *   await client.operations.purchaseOrders.purchaseOrders({
   *     contact_account_user_ids: ['string'],
   *     lines: [
   *       {
   *         product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
   *         product_sku: 'RAW-100',
   *         quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *         quantity_value: '500',
   *         unit_price_denominator_unit_id:
   *           'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *         unit_price_numerator_unit_id:
   *           'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *         unit_price_value: '12.50',
   *       },
   *     ],
   *     priority_code: 'normal',
   *     supplier_account_id: 'ac_02kn5s7811g9qwce7cizr4e0mq',
   *     carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *     note: 'Urgent restock order',
   *     service_level_id: 'crop_01jm4r6700f8nwq3v5hx2d9ktp',
   *     ship_to_country: 'US',
   *     ship_to_locality: 'San Francisco',
   *     ship_to_name: 'Acme Inc.',
   *     ship_to_postal_code: '94105',
   *     ship_to_state: 'CA',
   *     ship_to_street_line_1: '123 Main Street',
   *   });
   * ```
   */
  purchaseOrders(
    params: PurchaseOrderPurchaseOrdersParams,
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderDetail> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/purchase-orders', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of purchase orders for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.purchaseOrders.retrievePurchaseOrders();
   * ```
   */
  retrievePurchaseOrders(
    query: PurchaseOrderRetrievePurchaseOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderRetrievePurchaseOrdersResponse> {
    return this._client.get('/v1/operations/purchase-orders', { query, ...options });
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
  ): APIPromise<ListSalesOrderStatus> {
    return this._client.get('/v1/operations/purchase-orders/statuses', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSalesOrderStatus {
  /**
   * Resources in this page.
   */
  data: Array<ListSalesOrderStatus.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ListSalesOrderStatus {
  /**
   * Sales order status lookup value.
   */
  export interface Data {
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
    owner: ItemCategoriesAPI.Owner | null;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }
}

/**
 * Full purchase order resource.
 */
export interface PurchaseOrderDetail {
  /**
   * Purchase order ID.
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
   * List represents a paginated list of resources.
   */
  contacts: PurchaseOrderDetail.Contacts | null;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * Whether the acknowledgment has been sent.
   */
  is_acknowledgment_sent: boolean;

  /**
   * Issued timestamp.
   */
  issued_at: string | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: PurchaseOrderDetail.Lines | null;

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
  payment_term: PaymentTermsAPI.PaymentTerm | null;

  /**
   * Priority level used by sales orders and picks.
   */
  priority: PrioritiesAPI.Priority | null;

  /**
   * Receiving order with lines.
   */
  receiving_order: ReceivingOrdersAPI.ReceivingOrder | null;

  /**
   * Scheduled/promised timestamp.
   */
  scheduled_at: string | null;

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
  status: SalesOrderStatusDetail | null;

  /**
   * Supplier sub-resource.
   */
  supplier: Supplier | null;

  /**
   * Sales order type sub-resource.
   */
  type: SalesOrderType | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

export namespace PurchaseOrderDetail {
  /**
   * List represents a paginated list of resources.
   */
  export interface Contacts {
    /**
     * Resources in this page.
     */
    data: Array<Contacts.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Contacts {
    /**
     * Email contact sub-resource.
     */
    export interface Data {
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
  }

  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<LinesAPI.PurchaseOrderLineDetail>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }
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

export interface PurchaseOrderDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface PurchaseOrderRetrievePurchaseOrdersResponse {
  /**
   * Resources in this page.
   */
  data: Array<PurchaseOrderRetrievePurchaseOrdersResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace PurchaseOrderRetrievePurchaseOrdersResponse {
  /**
   * Lightweight purchase order for list views.
   */
  export interface Data {
    /**
     * Purchase order ID.
     */
    id: string;

    /**
     * Completed timestamp.
     */
    completed_at: string | null;

    /**
     * Created timestamp.
     */
    created_at: string;

    /**
     * Whether the acknowledgment has been sent.
     */
    is_acknowledgment_sent: boolean;

    /**
     * Issued timestamp.
     */
    issued_at: string | null;

    /**
     * Line item count.
     */
    line_count: number;

    /**
     * Purchase order number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'purchase_order';

    /**
     * Priority level used by sales orders and picks.
     */
    priority: PrioritiesAPI.Priority | null;

    /**
     * Sales order status sub-resource.
     */
    status: PurchaseOrdersAPI.SalesOrderStatusDetail | null;

    /**
     * Supplier sub-resource.
     */
    supplier: PurchaseOrdersAPI.Supplier | null;

    /**
     * Sales order type sub-resource.
     */
    type: PurchaseOrdersAPI.SalesOrderType | null;

    /**
     * Updated timestamp.
     */
    updated_at: string;
  }
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
    | 'carrier'
    | 'service_level'
    | 'payment_term'
    | 'shipping_term'
    | 'receiving_order'
    | 'lines'
    | 'contacts'
  >;
}

export interface PurchaseOrderUpdateParams {
  /**
   * Body param: Account user IDs for email contacts. Replaces existing contacts.
   */
  contact_account_user_ids: Array<string>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'supplier'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'carrier'
    | 'service_level'
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

export interface PurchaseOrderPurchaseOrdersParams {
  /**
   * Body param: Account user IDs for email contacts.
   */
  contact_account_user_ids: Array<string>;

  /**
   * Body param: Order lines to create.
   */
  lines: Array<LinesAPI.OrderLineInput>;

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
    | 'carrier'
    | 'service_level'
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

export interface PurchaseOrderRetrievePurchaseOrdersParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

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
PurchaseOrders.Lines = LinesAPILines;

export declare namespace PurchaseOrders {
  export {
    type ListSalesOrderStatus as ListSalesOrderStatus,
    type PurchaseOrderDetail as PurchaseOrderDetail,
    type SalesOrderStatusDetail as SalesOrderStatusDetail,
    type SalesOrderType as SalesOrderType,
    type Supplier as Supplier,
    type PurchaseOrderDeleteResponse as PurchaseOrderDeleteResponse,
    type PurchaseOrderRetrievePurchaseOrdersResponse as PurchaseOrderRetrievePurchaseOrdersResponse,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderPurchaseOrdersParams as PurchaseOrderPurchaseOrdersParams,
    type PurchaseOrderRetrievePurchaseOrdersParams as PurchaseOrderRetrievePurchaseOrdersParams,
    type PurchaseOrderRetrieveStatusesParams as PurchaseOrderRetrieveStatusesParams,
  };

  export {
    Actions as Actions,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionUpdateChangeStatusParams as ActionUpdateChangeStatusParams,
  };

  export {
    LinesAPILines as Lines,
    type OrderLineInput as OrderLineInput,
    type PurchaseOrderLineDetail as PurchaseOrderLineDetail,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
