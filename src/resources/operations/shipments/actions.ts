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
   * Estimates the shipping rate for a specific carrier and service level.
   *
   * Freight rules are applied before live rating: freight-exempt product lines or
   * customers, free-freight shipping terms, and a met free-shipping minimum order
   * value all return `0`, and a flat-rate shipping term returns its flat rate. Live
   * rates require the Shippo integration; carriers without live rating configured
   * return `0`.
   *
   * This endpoint requires the permissions: `shipments:read`, `customers:read`,
   * `suppliers:read`.
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
   * Compares shipping rates across all of the account's carriers and service levels
   * for the given addresses and parcels.
   *
   * Returns options sorted by rate ascending, after applying the account's freight
   * rules: freight-exempt product lines or customers and free-freight shipping terms
   * return no options, a flat-rate shipping term replaces carrier rates with the
   * flat rate, and a met free-shipping minimum order value zeroes the rate on
   * eligible options. Live carrier rates require the Shippo integration; carriers
   * without live rating configured are returned with a rate of `0`.
   *
   * This endpoint requires the permissions: `shipments:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const rateShopResult =
   *   await client.operations.shipments.actions.rateShop({
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
   *     from_address: {
   *       name: 'Origin Warehouse',
   *       street_line_1: '123 Main Street',
   *       locality: 'San Francisco',
   *       state: 'CA',
   *       postal_code: '94105',
   *       country: 'US',
   *     },
   *   });
   * ```
   */
  rateShop(body: ActionRateShopParams, options?: RequestOptions): APIPromise<RateShopResult> {
    return this._client.post('/v1/operations/shipments/actions/rate-shop', { body, ...options });
  }

  /**
   * Marks a shipment as shipped.
   *
   * Sets the shipment status to `shipped`, records `shipped_at` and the acting user
   * as `shipped_by`, marks all shipping cases as shipped, and assigns an SSCC to any
   * case that does not already have one. Fails with a conflict error if the shipment
   * has already been shipped.
   *
   * This endpoint requires the permission: `shipments:update`.
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
   * Voids a shipped shipment, returning it to the `packed` status.
   *
   * Only shipments in the `shipped` status can be voided; otherwise a conflict error
   * is returned. Voiding clears `shipped_at` and `shipped_by`, clears tracking and
   * label details from the shipment's shipping cases, deletes the invoice created
   * for the shipment if one exists, and marks the associated sales order as
   * unfulfilled.
   *
   * This endpoint requires the permission: `shipments:update`.
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
   * ID of the carrier to rate.
   */
  carrier_id: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  from_address: CustomersAPI.AddressInput;

  /**
   * Parcels to estimate rates for.
   */
  parcels: Array<ParcelInput>;

  /**
   * ID of the carrier service level to rate.
   */
  service_level_id: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A freight-exempt customer or a free-freight shipping term yields a rate of `0`;
   * a flat-rate shipping term returns the flat rate.
   */
  customer_id?: string;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   */
  order_total?: number;

  /**
   * Product lines of the items being shipped, used to apply freight exemptions.
   *
   * If any listed product line is freight exempt, the estimated rate is `0`.
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
   * Estimated shipping rate.
   *
   * `0` when freight is exempt (a freight-exempt product line or customer, or a
   * free-freight shipping term), when the free-shipping minimum order value is met,
   * or when the carrier is not configured for live rating. When the customer's
   * shipping term has a flat rate, the flat rate is returned.
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
 * A parcel's weight and dimensions for shipping rate calculations.
 */
export interface ParcelInput {
  /**
   * Parcel height in inches.
   */
  height: number;

  /**
   * Parcel length in inches.
   */
  length: number;

  /**
   * Parcel weight in pounds.
   */
  weight: number;

  /**
   * Parcel width in inches.
   */
  width: number;
}

/**
 * A single carrier and service level option returned by rate shopping.
 */
export interface RateShopOption {
  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Estimated number of days until delivery, when the carrier provides an estimate.
   */
  estimated_days: number | null;

  /**
   * Resource type identifier.
   */
  object: 'rate_shop_option';

  /**
   * Quoted shipping rate for this carrier and service level.
   *
   * `0` when the carrier is not configured for live rating, or when a free-shipping
   * rule (such as a met minimum order value) applies to this option.
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
   * Parcels to rate shop.
   */
  parcels: Array<ParcelInput>;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A freight-exempt customer or a free-freight shipping term returns no options
   * with `exemption_type` set to `freight_exempt`; a flat-rate shipping term
   * replaces carrier rates with the flat rate.
   */
  customer_id?: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  from_address?: CustomersAPI.AddressInput;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   */
  order_total?: number;

  /**
   * Product lines of the items being shipped, used to apply freight exemptions.
   *
   * If any listed product line is freight exempt, no options are returned and
   * `exemption_type` is `freight_exempt`.
   */
  product_line_ids?: Array<string>;
}

/**
 * Result of rate shopping.
 */
export interface RateShopResult {
  /**
   * Why a special freight outcome was applied to these options, if any.
   *
   * - `freight_exempt`: the order is exempt from freight; no options are returned.
   * - `minimum_order_met`: the free-shipping minimum order value was reached, so
   *   eligible options are rated at zero.
   * - `flat_rate`: a flat shipping rate was applied to the options (see
   *   `flat_rate`).
   * - `none`: standard carrier rates apply with no exemption.
   */
  exemption_type: string | null;

  /**
   * Flat shipping amount applied to the options.
   *
   * Set only when `exemption_type` is `flat_rate`.
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
   * ID of the carrier to rate.
   */
  carrier_id: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  from_address: CustomersAPI.AddressInput;

  /**
   * Parcels to estimate rates for.
   */
  parcels: Array<ParcelInput>;

  /**
   * ID of the carrier service level to rate.
   */
  service_level_id: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A freight-exempt customer or a free-freight shipping term yields a rate of `0`;
   * a flat-rate shipping term returns the flat rate.
   */
  customer_id?: string;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   */
  order_total?: number;

  /**
   * Product lines of the items being shipped, used to apply freight exemptions.
   *
   * If any listed product line is freight exempt, the estimated rate is `0`.
   */
  product_line_ids?: Array<string>;
}

export interface ActionRateShopParams {
  /**
   * Parcels to rate shop.
   */
  parcels: Array<ParcelInput>;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A freight-exempt customer or a free-freight shipping term returns no options
   * with `exemption_type` set to `freight_exempt`; a flat-rate shipping term
   * replaces carrier rates with the flat rate.
   */
  customer_id?: string;

  /**
   * Address details used to create an address, either directly or inline on another
   * resource.
   */
  from_address?: CustomersAPI.AddressInput;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   */
  order_total?: number;

  /**
   * Product lines of the items being shipped, used to apply freight exemptions.
   *
   * If any listed product line is freight exempt, no options are returned and
   * `exemption_type` is `freight_exempt`.
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
