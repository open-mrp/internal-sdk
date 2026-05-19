// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as InvoicesAPI from '../../finance/invoices';
import * as AddressesAPI from '../../sales/addresses';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as BatchesAPI from '../batches/batches';
import * as CarriersAPI from '../carriers/carriers';
import * as ServiceLevelsAPI from '../carriers/service-levels';
import * as PicksAPI from '../picks/picks';
import * as ActionsAPI from './actions';
import {
  ActionEstimateRateParams,
  ActionEstimateRateResponse,
  ActionRateShopParams,
  ActionRateShopResponse,
  ActionShipParams,
  Actions,
  ParcelInput,
} from './actions';
import * as LinesAPI from './lines';
import {
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineListParams,
  LineListResponse,
  LineRetrieveParams,
  LineUpdateParams,
  Lines as LinesAPILines,
  ShipmentLine,
} from './lines';
import * as CustomersAPI from '../../sales/customers/customers';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage shipments, shipment lines, and shipping operations.
 */
export class Shipments extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  lines: LinesAPI.Lines = new LinesAPI.Lines(this._client);

  /**
   * Returns a shipment by ID.
   *
   * @example
   * ```ts
   * const shipmentDetail =
   *   await client.operations.shipments.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ShipmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShipmentDetail> {
    return this._client.get(path`/v1/operations/shipments/${id}`, { query, ...options });
  }

  /**
   * Partially updates a shipment.
   *
   * @example
   * ```ts
   * const shipmentDetail =
   *   await client.operations.shipments.update('id', {
   *     note: 'Updated shipping note',
   *   });
   * ```
   */
  update(
    id: string,
    params: ShipmentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShipmentDetail> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/shipments/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of shipments.
   *
   * @example
   * ```ts
   * const shipments = await client.operations.shipments.list();
   * ```
   */
  list(
    query: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShipmentListResponse> {
    return this._client.get('/v1/operations/shipments', { query, ...options });
  }

  /**
   * Deletes a shipment. Fails if already shipped.
   *
   * @example
   * ```ts
   * const shipment = await client.operations.shipments.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShipmentDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipments/${id}`, options);
  }
}

/**
 * Full shipment resource.
 */
export interface ShipmentDetail {
  /**
   * Shipment ID.
   */
  id: string;

  /**
   * Bill of lading number.
   */
  bill_of_lading: string | null;

  /**
   * Carrier billing info on a shipment.
   */
  billing: ShipmentDetail.Billing | null;

  /**
   * Carrier resource.
   */
  carrier: CarriersAPI.Carrier | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Full invoice with expandable lines and allocations.
   */
  invoice: InvoicesAPI.Invoice | null;

  /**
   * List represents a paginated list of resources.
   */
  lines: ShipmentDetail.Lines | null;

  /**
   * Master tracking number.
   */
  master_tracking_number: string | null;

  /**
   * Note attached to this shipment.
   */
  note: string | null;

  /**
   * Shipment number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'shipment';

  /**
   * PickDetail is a full pick resource.
   */
  pick: PicksAPI.PickDetail | null;

  /**
   * Full sales order resource.
   */
  sales_order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Shipping service level for a carrier.
   */
  service_level: ServiceLevelsAPI.ServiceLevel | null;

  /**
   * Timestamp when shipped.
   */
  shipped_at: string | null;

  /**
   * Account user with profile, role, and department.
   */
  shipped_by: AccountUsersAPI.AccountUser | null;

  /**
   * Address with associated geolocation.
   */
  shipping_address: AddressesAPI.Address | null;

  /**
   * List represents a paginated list of resources.
   */
  shipping_cases: ShipmentDetail.ShippingCases | null;

  /**
   * Shipment status sub-resource.
   */
  status: ShipmentDetail.Status;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace ShipmentDetail {
  /**
   * Carrier billing info on a shipment.
   */
  export interface Billing {
    /**
     * Carrier billing account number.
     */
    account: string | null;

    /**
     * Billing address country.
     */
    country: string | null;

    /**
     * Carrier billing type (e.g. "third_party").
     */
    type: string;

    /**
     * Billing address postal code.
     */
    zip: string | null;
  }

  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<LinesAPI.ShipmentLine>;

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
   * List represents a paginated list of resources.
   */
  export interface ShippingCases {
    /**
     * Resources in this page.
     */
    data: Array<ShippingCases.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace ShippingCases {
    /**
     * Shipping case resource in shipment detail views.
     */
    export interface Data {
      /**
       * Shipping case ID.
       */
      id: string;

      /**
       * Carrier resource.
       */
      carrier: CarriersAPI.Carrier | null;

      /**
       * Creation timestamp.
       */
      created_at: string;

      /**
       * Value with an associated unit.
       */
      freight_amount: BatchesAPI.Quantity | null;

      /**
       * Value with an associated unit.
       */
      freight_weight: BatchesAPI.Quantity | null;

      /**
       * Human-readable case number.
       */
      number: string;

      /**
       * Resource type identifier.
       */
      object: 'shipping_case';

      /**
       * Timestamp when shipped.
       */
      shipped_at: string | null;

      /**
       * Shipping label URL.
       */
      shipping_label_url: string | null;

      /**
       * Shippo transaction ID.
       */
      shippo_transaction_id: string | null;

      /**
       * Serial Shipping Container Code.
       */
      sscc: string | null;

      /**
       * Carrier tracking number.
       */
      tracking_number: string | null;

      /**
       * Last updated timestamp.
       */
      updated_at: string;
    }
  }

  /**
   * Shipment status sub-resource.
   */
  export interface Status {
    /**
     * Status code.
     */
    code: string;

    /**
     * Display name.
     */
    name: string;
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ShipmentListResponse {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ShipmentListResponse {
  /**
   * Shipment list view resource.
   */
  export interface Data {
    /**
     * Shipment ID.
     */
    id: string;

    /**
     * Bill of lading number.
     */
    bill_of_lading: string | null;

    /**
     * Carrier resource.
     */
    carrier: CarriersAPI.Carrier | null;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Customer account.
     */
    customer: CustomersAPI.Customer | null;

    /**
     * Master tracking number.
     */
    master_tracking_number: string | null;

    /**
     * Note attached to this shipment.
     */
    note: string | null;

    /**
     * Shipment number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'shipment_summary';

    /**
     * Full sales order resource.
     */
    sales_order: SalesOrdersAPI.SalesOrderDetail | null;

    /**
     * Shipping service level for a carrier.
     */
    service_level: ServiceLevelsAPI.ServiceLevel | null;

    /**
     * Timestamp when shipped.
     */
    shipped_at: string | null;

    /**
     * Shipment status sub-resource.
     */
    status: Data.Status;

    /**
     * Last updated timestamp.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * Shipment status sub-resource.
     */
    export interface Status {
      /**
       * Status code.
       */
      code: string;

      /**
       * Display name.
       */
      name: string;
    }
  }
}

export interface ShipmentDeleteResponse {}

export interface ShipmentRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'lines'
    | 'shipping_cases'
    | 'sales_order'
    | 'customer'
    | 'carrier'
    | 'service_level'
    | 'shipping_address'
    | 'shipped_by'
    | 'invoice'
    | 'pick'
  >;
}

export interface ShipmentUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'lines'
    | 'shipping_cases'
    | 'sales_order'
    | 'customer'
    | 'carrier'
    | 'service_level'
    | 'shipping_address'
    | 'shipped_by'
    | 'invoice'
    | 'pick'
  >;

  /**
   * Body param: Carrier ID.
   */
  carrier_id?: string;

  /**
   * Body param: Master tracking number.
   */
  master_tracking_number?: string;

  /**
   * Body param: Note for the shipment.
   */
  note?: string;

  /**
   * Body param: Shipment number.
   */
  number?: string;

  /**
   * Body param: Service level ID.
   */
  service_level_id?: string;
}

export interface ShipmentListParams {
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
   * Filter by shipment status.
   */
  status?: string;
}

Shipments.Actions = Actions;
Shipments.Lines = LinesAPILines;

export declare namespace Shipments {
  export {
    type ShipmentDetail as ShipmentDetail,
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentDeleteResponse as ShipmentDeleteResponse,
    type ShipmentRetrieveParams as ShipmentRetrieveParams,
    type ShipmentUpdateParams as ShipmentUpdateParams,
    type ShipmentListParams as ShipmentListParams,
  };

  export {
    Actions as Actions,
    type ParcelInput as ParcelInput,
    type ActionEstimateRateResponse as ActionEstimateRateResponse,
    type ActionRateShopResponse as ActionRateShopResponse,
    type ActionEstimateRateParams as ActionEstimateRateParams,
    type ActionRateShopParams as ActionRateShopParams,
    type ActionShipParams as ActionShipParams,
  };

  export {
    LinesAPILines as Lines,
    type ShipmentLine as ShipmentLine,
    type LineListResponse as LineListResponse,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineRetrieveParams as LineRetrieveParams,
    type LineUpdateParams as LineUpdateParams,
    type LineListParams as LineListParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
