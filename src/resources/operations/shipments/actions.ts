// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
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
   * Estimates the shipping rate for one specific carrier and service level.
   *
   * Freight rules are applied before live rating, in order: freight-exempt product
   * lines, a freight-exempt customer or customer group, then the customer's default
   * shipping term. A free-freight term and a met free-shipping minimum order value
   * both return `0`, and a flat-rate term returns its flat rate without contacting
   * the carrier. Live rates require the Shippo integration; without it, or for a
   * carrier that is not linked to a live-rating account, the estimate is `0`.
   *
   * Use rate shop instead to compare every carrier and service level at once.
   *
   * This endpoint requires the permissions: `shipments:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const estimateRateResult =
   *   await client.operations.shipments.actions.estimateRate({
   *     carrier_id: 'cr_tv5vfjtgu1n3',
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
   *     service_level_id: 'crop_4ilk9p6gccrx',
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
   * eligible options.
   *
   * Live carrier rates require the Shippo integration. Carriers that are not linked
   * to a live-rating account are returned at a rate of `0`, while carriers that are
   * linked but whose rates cannot be fetched are left out of the results entirely.
   * Customer portal callers only see carriers and service levels that have been
   * enabled for the portal.
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
   * Dispatches a packed shipment, marking it and its cases as shipped.
   *
   * Sets the shipment status to `shipped`, records `shipped_at` and the acting user
   * as `shipped_by`, marks all shipping cases as shipped, and assigns an SSCC to any
   * case that does not already have one. Fails with a conflict error if the shipment
   * has already been shipped, so shipping is a one-way move that can only be
   * reversed with the void action.
   *
   * This endpoint requires the permission: `shipments:update`.
   *
   * @example
   * ```ts
   * const shipment =
   *   await client.operations.shipments.actions.ship(
   *     'sh_pfygp2gl45y4',
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
   * Voids a shipped shipment, returning it to the `packed` status so it can be
   * corrected and shipped again.
   *
   * Only shipments in the `shipped` status can be voided; otherwise a conflict error
   * is returned. Voiding clears `shipped_at`, `shipped_by` and the master tracking
   * number, clears the shipped timestamp, tracking number and label on every
   * shipping case and resets each case's freight charge to zero, deletes the invoice
   * raised for the shipment if one exists, and returns the associated sales order to
   * its unfulfilled state. Case SSCCs are kept.
   *
   * This endpoint requires the permission: `shipments:update`.
   *
   * @example
   * ```ts
   * const shipment =
   *   await client.operations.shipments.actions.void(
   *     'sh_pfygp2gl45y4',
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
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
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
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A customer that is freight exempt through its own policy or through one of its
   * groups, or whose shipping term is free freight, yields a rate of `0`; a
   * flat-rate shipping term returns the flat rate. Omitting the customer skips all
   * of these rules and quotes the plain carrier rate.
   */
  customer_id?: string;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   *
   * Free shipping applies only when the total is strictly above the threshold, and
   * only for the service levels the shipping term allows.
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
 * The shipping rate estimated for a single carrier and service level.
 */
export interface EstimateRateResult {
  /**
   * Resource type identifier.
   */
  object: 'estimate_rate_result';

  /**
   * Estimated shipping rate.
   *
   * `0` when freight is exempt (a freight-exempt product line, a customer exempted
   * by its own policy or by one of its groups, or a free-freight shipping term),
   * when the free-shipping minimum order value is met for a service level the
   * shipping term allows, or when the account has no live-rating integration or the
   * carrier is not linked to one. When the customer's shipping term has a flat rate,
   * the flat rate is returned instead.
   */
  rate: number;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
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
  carrier: AnalyticsAPI.Carrier | null;

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
   * `0` when the carrier is not linked to a live-rating account, or when the
   * shipping term's free-shipping minimum order value has been met and this option
   * qualifies for free shipping. When the customer's shipping term applies a flat
   * rate, that amount replaces the rate on every option that is not already free.
   */
  rate: number;

  /**
   * A shipping speed or method offered by a carrier, such as ground or overnight.
   *
   * Carriers connected through Shippo have their service levels synced from the
   * carrier itself; any carrier can also have service levels you create by hand.
   */
  service_level: AnalyticsAPI.ServiceLevel | null;
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
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A customer that is freight exempt through its own policy or through one of its
   * groups, or whose shipping term is free freight, returns no options with
   * `exemption_type` set to `freight_exempt`; a flat-rate shipping term replaces
   * carrier rates with the flat rate. Omitting the customer skips all of these rules
   * and returns plain carrier rates.
   */
  customer_id?: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  from_address?: CustomersAPI.AddressInput;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   *
   * Free shipping applies only when the total is strictly above the threshold, and
   * only for the service levels the shipping term allows.
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
 * The carrier and service level options returned by rate shopping, along with the
 * freight rule that shaped their rates.
 */
export interface RateShopResult {
  /**
   * Why a special freight outcome was applied to these options, if any.
   *
   * - `freight_exempt`: the order is exempt from freight; no options are returned.
   * - `minimum_order_met`: the customer's shipping term sets a free-shipping minimum
   *   order value and the order total exceeded it, so options are rated at zero. If
   *   the shipping term restricts free shipping to specific service levels, only
   *   those options are zeroed and the rest keep their carrier or flat rate.
   * - `flat_rate`: the customer's shipping term applies a flat shipping rate, which
   *   replaced every option's carrier rate.
   * - `none`: standard carrier rates apply with no exemption.
   */
  exemption_type: string | null;

  /**
   * Flat shipping amount applied to the options.
   *
   * Set when the customer's shipping term applies a flat rate, including when a met
   * free-shipping minimum has already rated some options at zero.
   */
  flat_rate: number | null;

  /**
   * Resource type identifier.
   */
  object: 'rate_shop_result';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  options: ListRateShopOption | null;
}

/**
 * Request to mark a shipment as shipped.
 */
export interface ShipShipmentRequest {
  /**
   * Whether to email the customer a shipping notification.
   *
   * Shipping notification emails are not dispatched yet, so this flag has no effect
   * today.
   */
  email_customer: boolean;
}

export interface ActionEstimateRateParams {
  /**
   * ID of the carrier to rate.
   */
  carrier_id: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
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
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A customer that is freight exempt through its own policy or through one of its
   * groups, or whose shipping term is free freight, yields a rate of `0`; a
   * flat-rate shipping term returns the flat rate. Omitting the customer skips all
   * of these rules and quotes the plain carrier rate.
   */
  customer_id?: string;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   *
   * Free shipping applies only when the total is strictly above the threshold, and
   * only for the service levels the shipping term allows.
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
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  to_address: CustomersAPI.AddressInput;

  /**
   * ID of the customer the shipment is for, used to apply the customer's freight
   * policy and default shipping term.
   *
   * A customer that is freight exempt through its own policy or through one of its
   * groups, or whose shipping term is free freight, returns no options with
   * `exemption_type` set to `freight_exempt`; a flat-rate shipping term replaces
   * carrier rates with the flat rate. Omitting the customer skips all of these rules
   * and returns plain carrier rates.
   */
  customer_id?: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  from_address?: CustomersAPI.AddressInput;

  /**
   * Total value of the order, used to evaluate the free-shipping minimum order value
   * on the customer's shipping term.
   *
   * Free shipping applies only when the total is strictly above the threshold, and
   * only for the service levels the shipping term allows.
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
   *
   * Shipping notification emails are not dispatched yet, so this flag has no effect
   * today.
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
