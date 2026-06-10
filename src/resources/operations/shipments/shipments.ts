// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../../finance/invoices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionEstimateRateParams,
  ActionRateShopParams,
  ActionShipParams,
  Actions,
  EstimateRateRequest,
  EstimateRateResult,
  ListRateShopOption,
  ParcelInput,
  RateShopOption,
  RateShopRequest,
  RateShopResult,
  ShipShipmentRequest,
} from './actions';
import * as LinesAPI from './lines';
import {
  CreateShipmentLineRequest,
  LineCreateParams,
  LineDeleteParams,
  LineDeleteResponse,
  LineListParams,
  LineRetrieveParams,
  LineUpdateParams,
  Lines,
  UpdateShipmentLineRequest,
} from './lines';
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
   * const shipment = await client.operations.shipments.retrieve(
   *   'sh_018b3a946651bfb6572b06b2b2',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: ShipmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.Shipment> {
    return this._client.get(path`/v1/operations/shipments/${id}`, { query, ...options });
  }

  /**
   * Partially updates a shipment.
   *
   * @example
   * ```ts
   * const shipment = await client.operations.shipments.update(
   *   'sh_018b3a946651bfb6572b06b2b2',
   *   { note: 'Updated shipping note' },
   * );
   * ```
   */
  update(
    id: string,
    params: ShipmentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.Shipment> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/shipments/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of shipments.
   *
   * @example
   * ```ts
   * const listShipment =
   *   await client.operations.shipments.list();
   * ```
   */
  list(
    query: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListShipment> {
    return this._client.get('/v1/operations/shipments', { query, ...options });
  }

  /**
   * Deletes a shipment. Fails if already shipped.
   *
   * @example
   * ```ts
   * const shipment = await client.operations.shipments.delete(
   *   'sh_018b3a946651bfb6572b06b2b2',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShipmentDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipments/${id}`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListShipment {
  /**
   * Resources in this page.
   */
  data: Array<InvoicesAPI.Shipment>;

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
 * Request to partially update a shipment.
 */
export interface UpdateShipmentRequest {
  /**
   * Carrier ID.
   */
  carrier_id?: string;

  /**
   * Master tracking number.
   */
  master_tracking_number?: string;

  /**
   * Note for the shipment.
   */
  note?: string;

  /**
   * Shipment number.
   */
  number?: string;

  /**
   * Service level ID.
   */
  service_level_id?: string;
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
    | 'freight'
    | 'shipping_address'
    | 'shipped_by'
    | 'shipped_by.user'
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
    | 'freight'
    | 'shipping_address'
    | 'shipped_by'
    | 'shipped_by.user'
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
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer' | 'sales_order' | 'lines'>;

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
Shipments.Lines = Lines;

export declare namespace Shipments {
  export {
    type ListShipment as ListShipment,
    type UpdateShipmentRequest as UpdateShipmentRequest,
    type ShipmentDeleteResponse as ShipmentDeleteResponse,
    type ShipmentRetrieveParams as ShipmentRetrieveParams,
    type ShipmentUpdateParams as ShipmentUpdateParams,
    type ShipmentListParams as ShipmentListParams,
  };

  export {
    Actions as Actions,
    type EstimateRateRequest as EstimateRateRequest,
    type EstimateRateResult as EstimateRateResult,
    type ListRateShopOption as ListRateShopOption,
    type ParcelInput as ParcelInput,
    type RateShopOption as RateShopOption,
    type RateShopRequest as RateShopRequest,
    type RateShopResult as RateShopResult,
    type ShipShipmentRequest as ShipShipmentRequest,
    type ActionEstimateRateParams as ActionEstimateRateParams,
    type ActionRateShopParams as ActionRateShopParams,
    type ActionShipParams as ActionShipParams,
  };

  export {
    Lines as Lines,
    type CreateShipmentLineRequest as CreateShipmentLineRequest,
    type UpdateShipmentLineRequest as UpdateShipmentLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineRetrieveParams as LineRetrieveParams,
    type LineUpdateParams as LineUpdateParams,
    type LineListParams as LineListParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
