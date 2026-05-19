// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AddressesAPI from '../../sales/addresses';
import * as CarriersAPI from '../carriers/carriers';
import * as ServiceLevelsAPI from '../carriers/service-levels';
import * as ShipmentsAPI from './shipments';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage shipments, shipment lines, and shipping operations.
 */
export class Actions extends APIResource {
  /**
   * Estimates a shipping rate for a given carrier, carrier option, addresses, and
   * parcels.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.shipments.actions.estimateRate({
   *     carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *     from_address: {
   *       name: 'Origin Warehouse',
   *       type: null,
   *       country: 'US',
   *     },
   *     parcels: [
   *       {
   *         weight: 5,
   *         length: 12,
   *         width: 8,
   *         height: 6,
   *       },
   *     ],
   *     service_level_id: 'crop_01jm4r6700f8nwq3v5hx2d9ktp',
   *     to_address: {
   *       name: 'Destination',
   *       type: null,
   *       country: 'US',
   *     },
   *   });
   * ```
   */
  estimateRate(
    body: ActionEstimateRateParams,
    options?: RequestOptions,
  ): APIPromise<ActionEstimateRateResponse> {
    return this._client.post('/v1/operations/shipments/actions/estimate-rate', { body, ...options });
  }

  /**
   * Compares shipping rates across all available carriers and options for the given
   * addresses and parcels.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.shipments.actions.rateShop({
   *     from_address: {
   *       name: 'Origin Warehouse',
   *       type: null,
   *       country: 'US',
   *     },
   *     parcels: [
   *       {
   *         weight: 5,
   *         length: 12,
   *         width: 8,
   *         height: 6,
   *       },
   *     ],
   *     to_address: {
   *       name: 'Destination',
   *       type: null,
   *       country: 'US',
   *     },
   *   });
   * ```
   */
  rateShop(body: ActionRateShopParams, options?: RequestOptions): APIPromise<ActionRateShopResponse> {
    return this._client.post('/v1/operations/shipments/actions/rate-shop', { body, ...options });
  }

  /**
   * Marks a shipment as shipped and optionally sends a shipping notification email
   * to the customer.
   *
   * @example
   * ```ts
   * const shipmentDetail =
   *   await client.operations.shipments.actions.ship(
   *     'sh_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { email_customer: true },
   *   );
   * ```
   */
  ship(
    id: string,
    params: ActionShipParams,
    options?: RequestOptions,
  ): APIPromise<ShipmentsAPI.ShipmentDetail> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/operations/shipments/${id}/actions/ship`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Voids a shipment, cancelling it and returning its lines to the sales order.
   *
   * @example
   * ```ts
   * const shipmentDetail =
   *   await client.operations.shipments.actions.void(
   *     'sh_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<ShipmentsAPI.ShipmentDetail> {
    return this._client.post(path`/v1/operations/shipments/${id}/actions/void`, options);
  }
}

/**
 * Parcel for rate estimation.
 */
export interface ParcelInput {
  /**
   * Height.
   */
  height: number;

  /**
   * Length.
   */
  length: number;

  /**
   * Weight.
   */
  weight: number;

  /**
   * Width.
   */
  width: number;
}

/**
 * Result of estimating a shipping rate.
 */
export interface ActionEstimateRateResponse {
  /**
   * Resource type identifier.
   */
  object: 'estimate_rate_result';

  /**
   * Estimated rate amount.
   */
  rate: number;
}

/**
 * Result of rate shopping.
 */
export interface ActionRateShopResponse {
  /**
   * Exemption type, if applicable.
   */
  exemption_type: string | null;

  /**
   * Flat rate amount, if applicable.
   */
  flat_rate: number | null;

  /**
   * Resource type identifier.
   */
  object: 'rate_shop_result';

  /**
   * List represents a paginated list of resources.
   */
  options: ActionRateShopResponse.Options | null;
}

export namespace ActionRateShopResponse {
  /**
   * List represents a paginated list of resources.
   */
  export interface Options {
    /**
     * Resources in this page.
     */
    data: Array<Options.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Options {
    /**
     * Rate shop option.
     */
    export interface Data {
      /**
       * Carrier resource.
       */
      carrier: CarriersAPI.Carrier | null;

      /**
       * Estimated delivery days.
       */
      estimated_days: number | null;

      /**
       * Resource type identifier.
       */
      object: 'rate_shop_option';

      /**
       * Rate amount.
       */
      rate: number;

      /**
       * Shipping service level for a carrier.
       */
      service_level: ServiceLevelsAPI.ServiceLevel | null;
    }
  }
}

export interface ActionEstimateRateParams {
  /**
   * Carrier ID.
   */
  carrier_id: string;

  /**
   * Request to create an address.
   */
  from_address: AddressesAPI.AddressInput;

  /**
   * Parcels to estimate rates for.
   */
  parcels: Array<ParcelInput>;

  /**
   * Service level ID.
   */
  service_level_id: string;

  /**
   * Request to create an address.
   */
  to_address: AddressesAPI.AddressInput;

  /**
   * Customer ID.
   */
  customer_id?: string;

  /**
   * Total order value.
   */
  order_total?: number;

  /**
   * Product line IDs.
   */
  product_line_ids?: Array<string>;
}

export interface ActionRateShopParams {
  /**
   * Request to create an address.
   */
  from_address: AddressesAPI.AddressInput;

  /**
   * Parcels to rate shop.
   */
  parcels: Array<ParcelInput>;

  /**
   * Request to create an address.
   */
  to_address: AddressesAPI.AddressInput;

  /**
   * Customer ID.
   */
  customer_id?: string;

  /**
   * Total order value.
   */
  order_total?: number;

  /**
   * Product line IDs.
   */
  product_line_ids?: Array<string>;
}

export interface ActionShipParams {
  /**
   * Body param: Whether to email the customer a shipping notification.
   */
  email_customer: boolean;

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
}

export declare namespace Actions {
  export {
    type ParcelInput as ParcelInput,
    type ActionEstimateRateResponse as ActionEstimateRateResponse,
    type ActionRateShopResponse as ActionRateShopResponse,
    type ActionEstimateRateParams as ActionEstimateRateParams,
    type ActionRateShopParams as ActionRateShopParams,
    type ActionShipParams as ActionShipParams,
  };
}
