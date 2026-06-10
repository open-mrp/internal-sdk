// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../../finance/invoices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as CustomersAPI from '../../sales/customers/customers';
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
   * const estimateRateResult =
   *   await client.operations.shipments.actions.estimateRate({
   *     carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *     from_address: {
   *       name: 'Origin Warehouse',
   *       street_line_1: '123 Main Street',
   *       locality: 'San Francisco',
   *       state: 'CA',
   *       postal_code: '94105',
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
   *     service_level_id: 'crop_01cfaf03f104e90ef9680e2a30',
   *     to_address: {
   *       name: 'Destination',
   *       street_line_1: '456 Oak Avenue',
   *       locality: 'Los Angeles',
   *       state: 'CA',
   *       postal_code: '90001',
   *       country: 'US',
   *     },
   *   });
   * ```
   */
  estimateRate(body: ActionEstimateRateParams, options?: RequestOptions): APIPromise<EstimateRateResult> {
    return this._client.post('/v1/operations/shipments/actions/estimate-rate', { body, ...options });
  }

  /**
   * Compares shipping rates across all available carriers and options for the given
   * addresses and parcels.
   *
   * @example
   * ```ts
   * const rateShopResult =
   *   await client.operations.shipments.actions.rateShop({
   *     from_address: {
   *       name: 'Origin Warehouse',
   *       street_line_1: '123 Main Street',
   *       locality: 'San Francisco',
   *       state: 'CA',
   *       postal_code: '94105',
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
   *       street_line_1: '456 Oak Avenue',
   *       locality: 'Los Angeles',
   *       state: 'CA',
   *       postal_code: '90001',
   *       country: 'US',
   *     },
   *   });
   * ```
   */
  rateShop(body: ActionRateShopParams, options?: RequestOptions): APIPromise<RateShopResult> {
    return this._client.post('/v1/operations/shipments/actions/rate-shop', { body, ...options });
  }

  /**
   * Marks a shipment as shipped and optionally sends a shipping notification email
   * to the customer.
   *
   * @example
   * ```ts
   * const shipment =
   *   await client.operations.shipments.actions.ship(
   *     'sh_018b3a946651bfb6572b06b2b2',
   *     { email_customer: true },
   *   );
   * ```
   */
  ship(id: string, params: ActionShipParams, options?: RequestOptions): APIPromise<InvoicesAPI.Shipment> {
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
   * const shipment =
   *   await client.operations.shipments.actions.void(
   *     'sh_018b3a946651bfb6572b06b2b2',
   *   );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<InvoicesAPI.Shipment> {
    return this._client.post(path`/v1/operations/shipments/${id}/actions/void`, options);
  }
}

/**
 * Request to estimate a shipping rate.
 */
export interface EstimateRateRequest {
  /**
   * Carrier ID.
   */
  carrier_id: string;

  /**
   * Request to create an address.
   */
  from_address: CustomersAPI.AddressInput;

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
  to_address: CustomersAPI.AddressInput;

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

/**
 * Result of estimating a shipping rate.
 */
export interface EstimateRateResult {
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
 * List represents a paginated list of resources.
 */
export interface ListRateShopOption {
  /**
   * Resources in this page.
   */
  data: Array<RateShopOption>;

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
 * Rate shop option.
 */
export interface RateShopOption {
  /**
   * Carrier resource.
   */
  carrier: CustomersAPI.Carrier | null;

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
  service_level: CustomersAPI.ServiceLevel | null;
}

/**
 * Request to rate shop across carriers.
 */
export interface RateShopRequest {
  /**
   * Request to create an address.
   */
  from_address: CustomersAPI.AddressInput;

  /**
   * Parcels to rate shop.
   */
  parcels: Array<ParcelInput>;

  /**
   * Request to create an address.
   */
  to_address: CustomersAPI.AddressInput;

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

/**
 * Result of rate shopping.
 */
export interface RateShopResult {
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
  options: ListRateShopOption | null;
}

/**
 * Request to mark a shipment as shipped.
 */
export interface ShipShipmentRequest {
  /**
   * Whether to email the customer a shipping notification.
   */
  email_customer: boolean;
}

export interface ActionEstimateRateParams {
  /**
   * Carrier ID.
   */
  carrier_id: string;

  /**
   * Request to create an address.
   */
  from_address: CustomersAPI.AddressInput;

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
  to_address: CustomersAPI.AddressInput;

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
  from_address: CustomersAPI.AddressInput;

  /**
   * Parcels to rate shop.
   */
  parcels: Array<ParcelInput>;

  /**
   * Request to create an address.
   */
  to_address: CustomersAPI.AddressInput;

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
    | 'freight'
    | 'shipping_address'
    | 'shipped_by'
    | 'shipped_by.user'
    | 'invoice'
    | 'pick'
  >;
}

export declare namespace Actions {
  export {
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
}
