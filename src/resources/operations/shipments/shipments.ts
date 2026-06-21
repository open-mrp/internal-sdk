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
   * This endpoint requires the permission: `shipments:read`.
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
   * This endpoint requires the permission: `shipments:update`.
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
   * This endpoint requires the permission: `shipments:read`.
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
   * Deletes a shipment along with its lines and shipping cases.
   *
   * Deleting a shipment also unpacks the associated pick lines and reopens the pick
   * for the shipment's order so the items can be repacked.
   *
   * This endpoint requires the permission: `shipments:update`.
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
   * ID of the carrier to set on the shipment's freight.
   */
  carrier_id?: string;

  /**
   * Carrier master tracking number covering the shipment as a whole.
   */
  master_tracking_number?: string;

  /**
   * Note for the shipment.
   */
  note?: string;

  /**
   * Human-readable shipment number.
   */
  number?: string;

  /**
   * ID of the carrier service level to set on the shipment's freight.
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
   * Body param: ID of the carrier to set on the shipment's freight.
   */
  carrier_id?: string;

  /**
   * Body param: Carrier master tracking number covering the shipment as a whole.
   */
  master_tracking_number?: string;

  /**
   * Body param: Note for the shipment.
   */
  note?: string;

  /**
   * Body param: Human-readable shipment number.
   */
  number?: string;

  /**
   * Body param: ID of the carrier service level to set on the shipment's freight.
   */
  service_level_id?: string;
}

export interface ShipmentListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only include shipments whose customer belongs to any of these customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Only include shipments for any of these customers.
   */
  customer_ids?: Array<string>;

  /**
   * Only include shipments created on or before this date (`YYYY-MM-DD`).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer' | 'sales_order' | 'lines'>;

  /**
   * Only include shipments containing at least one line for any of these items.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Only include shipments containing at least one line whose product belongs to any
   * of these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only include shipments whose customer is assigned to any of these sales reps.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Only include shipments created on or after this date (`YYYY-MM-DD`).
   */
  start_date?: string;

  /**
   * Filter by shipment status (`packed` or `shipped`).
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
