// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as BatchesAPI from '../batches/batches';
import * as SalesOrdersLinesAPI from '../../sales/sales-orders/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage shipments, shipment lines, and shipping operations.
 */
export class Lines extends APIResource {
  /**
   * Creates a line on a shipment.
   *
   * @example
   * ```ts
   * const shipmentLine =
   *   await client.operations.shipments.lines.create(
   *     'sh_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '10.000000000000000000000000000000',
   *       sales_order_line_id:
   *         'orln_01jm4r6700f8nwq3v5hx2d9ktp',
   *     },
   *   );
   * ```
   */
  create(shipmentID: string, body: LineCreateParams, options?: RequestOptions): APIPromise<ShipmentLine> {
    return this._client.post(path`/v1/operations/shipments/${shipmentID}/lines`, { body, ...options });
  }

  /**
   * Returns a shipment line by ID.
   *
   * @example
   * ```ts
   * const shipmentLine =
   *   await client.operations.shipments.lines.retrieve(
   *     'example',
   *     { shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp' },
   *   );
   * ```
   */
  retrieve(id: string, params: LineRetrieveParams, options?: RequestOptions): APIPromise<ShipmentLine> {
    const { shipment_id } = params;
    return this._client.get(path`/v1/operations/shipments/${shipment_id}/lines/${id}`, options);
  }

  /**
   * Partially updates a shipment line.
   *
   * @example
   * ```ts
   * const shipmentLine =
   *   await client.operations.shipments.lines.update(
   *     'example',
   *     {
   *       shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       quantity_value: '5.000000000000000000000000000000',
   *     },
   *   );
   * ```
   */
  update(id: string, params: LineUpdateParams, options?: RequestOptions): APIPromise<ShipmentLine> {
    const { shipment_id, ...body } = params;
    return this._client.patch(path`/v1/operations/shipments/${shipment_id}/lines/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of lines for the specified shipment.
   *
   * @example
   * ```ts
   * const lines = await client.operations.shipments.lines.list(
   *   'sh_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  list(
    shipmentID: string,
    query: LineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LineListResponse> {
    return this._client.get(path`/v1/operations/shipments/${shipmentID}/lines`, { query, ...options });
  }

  /**
   * Deletes a line from a shipment.
   *
   * @example
   * ```ts
   * const line = await client.operations.shipments.lines.delete(
   *   'example',
   *   { shipment_id: 'sh_01jm4r6700f8nwq3v5hx2d9ktp' },
   * );
   * ```
   */
  delete(id: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { shipment_id } = params;
    return this._client.delete(path`/v1/operations/shipments/${shipment_id}/lines/${id}`, options);
  }
}

/**
 * Shipment line resource.
 */
export interface ShipmentLine {
  /**
   * Shipment line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'shipment_line';

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Full sales order line resource.
   */
  sales_order_line: SalesOrdersLinesAPI.SalesOrderLineDetail | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface LineListResponse {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentLine>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * Quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * Quantity value.
   */
  quantity_value: string;

  /**
   * Sales order line ID.
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
   * Body param: Quantity unit ID.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Quantity value.
   */
  quantity_value?: string;
}

export interface LineListParams {
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

export interface LineDeleteParams {
  /**
   * Shipment ID.
   */
  shipment_id: string;
}

export declare namespace Lines {
  export {
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
