// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../../finance/invoices';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage shipments, shipment lines, and shipping operations.
 */
export class Lines extends APIResource {
  /**
   * Adds a line to a shipment, recording how much of a sales order line the shipment
   * carries.
   *
   * The line only records what the shipment carries: it does not touch the pick for
   * the order, so the pick's lines keep their existing packed state.
   *
   * This endpoint requires the permission: `shipments:create`.
   *
   * @example
   * ```ts
   * const shipmentLine =
   *   await client.operations.shipments.lines.create(
   *     'sh_pfygp2gl45y4',
   *     {
   *       quantity_unit_id: 'un_82bd37dae5po',
   *       quantity_value: '10.000000000000000000000000000000',
   *       sales_order_line_id: 'orln_la01fxgrwcnr',
   *     },
   *   );
   * ```
   */
  create(
    shipmentID: string,
    body: LineCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.ShipmentLine> {
    return this._client.post(path`/v1/operations/shipments/${shipmentID}/lines`, { body, ...options });
  }

  /**
   * Returns a shipment line by ID.
   *
   * This endpoint requires the permissions: `shipments:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const shipmentLine =
   *   await client.operations.shipments.lines.retrieve(
   *     'example',
   *     { shipment_id: 'sh_pfygp2gl45y4' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: LineRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.ShipmentLine> {
    const { shipment_id } = params;
    return this._client.get(path`/v1/operations/shipments/${shipment_id}/lines/${id}`, options);
  }

  /**
   * Changes the shipped quantity on a shipment line.
   *
   * The line stays attached to the sales order line it was created against, and
   * changing the quantity does not touch the pick for the order.
   *
   * This endpoint requires the permission: `shipments:update`.
   *
   * @example
   * ```ts
   * const shipmentLine =
   *   await client.operations.shipments.lines.update(
   *     'example',
   *     {
   *       shipment_id: 'sh_pfygp2gl45y4',
   *       quantity_unit_id: 'un_82bd37dae5po',
   *       quantity_value: '5.000000000000000000000000000000',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.ShipmentLine> {
    const { shipment_id, ...body } = params;
    return this._client.patch(path`/v1/operations/shipments/${shipment_id}/lines/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of lines for the specified shipment.
   *
   * This endpoint requires the permissions: `shipments:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listShipmentLine =
   *   await client.operations.shipments.lines.list(
   *     'sh_pfygp2gl45y4',
   *   );
   * ```
   */
  list(
    shipmentID: string,
    query: LineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.ListShipmentLine> {
    return this._client.get(path`/v1/operations/shipments/${shipmentID}/lines`, { query, ...options });
  }

  /**
   * Removes a line from a shipment.
   *
   * Unlike deleting the whole shipment, removing a single line leaves the pick for
   * the order untouched, so the pick's lines keep their existing packed state.
   *
   * This endpoint requires the permission: `shipments:delete`.
   *
   * @example
   * ```ts
   * const line = await client.operations.shipments.lines.delete(
   *   'example',
   *   { shipment_id: 'sh_pfygp2gl45y4' },
   * );
   * ```
   */
  delete(id: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { shipment_id } = params;
    return this._client.delete(path`/v1/operations/shipments/${shipment_id}/lines/${id}`, options);
  }
}

/**
 * Request to create a shipment line.
 */
export interface CreateShipmentLineRequest {
  /**
   * ID of the unit of measure for `quantity_value`.
   */
  quantity_unit_id: string;

  /**
   * Quantity shipped, as a decimal string.
   */
  quantity_value: string;

  /**
   * ID of the sales order line this shipment line fulfills.
   */
  sales_order_line_id: string;
}

/**
 * Request to partially update a shipment line.
 */
export interface UpdateShipmentLineRequest {
  /**
   * ID of the unit of measure for `quantity_value`.
   */
  quantity_unit_id?: string;

  /**
   * Quantity shipped, as a decimal string.
   */
  quantity_value?: string;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * ID of the unit of measure for `quantity_value`.
   */
  quantity_unit_id: string;

  /**
   * Quantity shipped, as a decimal string.
   */
  quantity_value: string;

  /**
   * ID of the sales order line this shipment line fulfills.
   */
  sales_order_line_id: string;
}

export interface LineRetrieveParams {
  /**
   * Shipment ID.
   */
  shipment_id: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Shipment ID.
   */
  shipment_id: string;

  /**
   * Body param: ID of the unit of measure for `quantity_value`.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Quantity shipped, as a decimal string.
   */
  quantity_value?: string;
}

export interface LineListParams {
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

export interface LineDeleteParams {
  /**
   * Shipment ID.
   */
  shipment_id: string;
}

export declare namespace Lines {
  export {
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
