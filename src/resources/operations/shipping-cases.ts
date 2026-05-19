// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchesAPI from './batches/batches';
import * as CarriersAPI from './carriers/carriers';
import * as ShipmentsAPI from './shipments/shipments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage shipping cases within shipments.
 */
export class ShippingCases extends APIResource {
  /**
   * Returns a shipping case by ID.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.retrieve(
   *     'shcs_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ShippingCaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingCase> {
    return this._client.get(path`/v1/operations/shipping-cases/${id}`, { query, ...options });
  }

  /**
   * Partially updates a shipping case's tracking number and freight quantities.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.update('', {
   *     freight_amount_unit_id: null,
   *     freight_amount_value: null,
   *     freight_weight_unit_id: null,
   *     freight_weight_value: null,
   *     tracking_number: '1Z999AA10123456784',
   *   });
   * ```
   */
  update(id: string, params: ShippingCaseUpdateParams, options?: RequestOptions): APIPromise<ShippingCase> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/operations/shipping-cases/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a shipping case.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.delete(
   *     'shcs_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingCaseDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipping-cases/${id}`, options);
  }

  /**
   * Returns a presigned URL for the shipping case's label image.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.shippingCases.retrieveLabel(
   *     'shcs_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieveLabel(id: string, options?: RequestOptions): APIPromise<ShippingCaseRetrieveLabelResponse> {
    return this._client.get(path`/v1/operations/shipping-cases/${id}/label`, options);
  }
}

/**
 * Physical shipping case within a shipment.
 */
export interface ShippingCase {
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
   * Full shipment resource.
   */
  shipment: ShipmentsAPI.ShipmentDetail | null;

  /**
   * Shipped timestamp.
   */
  shipped_at: string | null;

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

export interface ShippingCaseDeleteResponse {}

/**
 * Shipping case label URL.
 */
export interface ShippingCaseRetrieveLabelResponse {
  /**
   * Resource type identifier.
   */
  object: 'shipping_case_label_url';

  /**
   * Presigned label URL, or null if no label exists.
   */
  url: string | null;
}

export interface ShippingCaseRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'carrier' | 'shipment' | 'freight_amount.unit' | 'freight_weight.unit'>;
}

export interface ShippingCaseUpdateParams {
  /**
   * Body param: Freight amount unit ID.
   */
  freight_amount_unit_id: string | null;

  /**
   * Body param: Freight amount value.
   */
  freight_amount_value: string | null;

  /**
   * Body param: Freight weight unit ID.
   */
  freight_weight_unit_id: string | null;

  /**
   * Body param: Freight weight value.
   */
  freight_weight_value: string | null;

  /**
   * Body param: Tracking number.
   */
  tracking_number: string | null;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'carrier' | 'shipment' | 'freight_amount.unit' | 'freight_weight.unit'>;
}

export declare namespace ShippingCases {
  export {
    type ShippingCase as ShippingCase,
    type ShippingCaseDeleteResponse as ShippingCaseDeleteResponse,
    type ShippingCaseRetrieveLabelResponse as ShippingCaseRetrieveLabelResponse,
    type ShippingCaseRetrieveParams as ShippingCaseRetrieveParams,
    type ShippingCaseUpdateParams as ShippingCaseUpdateParams,
  };
}
