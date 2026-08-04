// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as CustomersAPI from '../sales/customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage shipping terms.
 */
export class ShippingTerms extends APIResource {
  /**
   * Creates a shipping term owned by your account.
   *
   * The new term takes effect on freight quoting once it is assigned as a customer's
   * default shipping term.
   *
   * This endpoint requires the permission: `shipping_terms:create`.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.create({
   *     name: 'Prepaid',
   *     type: 'flat_rate_freight',
   *     flat_rate: {
   *       value: '15.00',
   *       unit_id: 'un_82bd37dae5po',
   *     },
   *     free_shipping_service_level_ids: ['crop_4ilk9p6gccrx'],
   *     minimum_order_value: {
   *       value: '500.00',
   *       unit_id: 'un_82bd37dae5po',
   *     },
   *   });
   * ```
   */
  create(params: ShippingTermCreateParams, options?: RequestOptions): APIPromise<CustomersAPI.ShippingTerm> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/shipping-terms', { query: { include }, body, ...options });
  }

  /**
   * Returns a shipping term by ID.
   *
   * This endpoint requires the permission: `shipping_terms:read`.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.retrieve(
   *     'shtm_c5gxy05whw6r',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ShippingTermRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ShippingTerm> {
    return this._client.get(path`/v1/operations/shipping-terms/${id}`, { query, ...options });
  }

  /**
   * Partially updates a shipping term owned by your account.
   *
   * System-provided default shipping terms cannot be updated. Changes affect freight
   * quoted after the update; freight already recorded on existing orders is not
   * recalculated.
   *
   * This endpoint requires the permission: `shipping_terms:update`.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.update(
   *     'shtm_c5gxy05whw6r',
   *     {
   *       flat_rate: {
   *         value: '15.00',
   *         unit_id: 'un_82bd37dae5po',
   *       },
   *       free_shipping_service_level_ids: [
   *         'crop_4ilk9p6gccrx',
   *       ],
   *       minimum_order_value: {
   *         value: '500.00',
   *         unit_id: 'un_82bd37dae5po',
   *       },
   *       name: 'Collect',
   *       type: 'flat_rate_freight',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ShippingTermUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ShippingTerm> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/shipping-terms/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of shipping terms, newest first.
   *
   * Both the terms your account has created and the system-provided default terms
   * are returned. The `q` parameter matches on the shipping term name.
   *
   * This endpoint requires the permission: `shipping_terms:read`.
   *
   * @example
   * ```ts
   * const listShippingTerm =
   *   await client.operations.shippingTerms.list();
   * ```
   */
  list(
    query: ShippingTermListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListShippingTerm> {
    return this._client.get('/v1/operations/shipping-terms', { query, ...options });
  }

  /**
   * Deletes a shipping term owned by your account.
   *
   * System-provided default shipping terms cannot be deleted. The term's
   * free-shipping service level rules, flat rate and minimum order value go with it,
   * and deleting a term that has already been deleted returns an error rather than
   * succeeding again.
   *
   * This endpoint requires the permission: `shipping_terms:delete`.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.delete(
   *     'shtm_c5gxy05whw6r',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingTermDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipping-terms/${id}`, options);
  }
}

/**
 * Request to create a shipping term.
 */
export interface CreateShippingTermRequest {
  /**
   * Human-readable name for the shipping term, used to identify it when assigning
   * shipping terms to customers and orders.
   */
  name: string;

  /**
   * Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: the buyer is never charged for shipping.
   * - `flat_rate_freight`: the buyer is charged the fixed amount in `flat_rate`,
   *   regardless of what the carrier would have charged.
   * - `carrier_rate_freight`: the buyer is charged the rate the carrier quotes for
   *   the order's carrier and service level.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  flat_rate?: CustomersAPI.QuantityInput;

  /**
   * IDs of the service levels that ship for free once an order exceeds
   * `minimum_order_value`.
   *
   * Leave this empty to let every service level ship free above the threshold. The
   * request is rejected if any ID is not a service level available to your account.
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  minimum_order_value?: CustomersAPI.QuantityInput;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListShippingTerm {
  /**
   * Resources in this page.
   */
  data: Array<CustomersAPI.ShippingTerm>;

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
 * Request to partially update a shipping term.
 *
 * Fields left out of the request keep their current values. Send an explicit JSON
 * `null` for `flat_rate`, `minimum_order_value`, or
 * `free_shipping_service_level_ids` to clear the stored value.
 */
export interface UpdateShippingTermRequest {
  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  flat_rate?: CustomersAPI.QuantityInput | null;

  /**
   * IDs of the service levels that ship for free once an order exceeds
   * `minimum_order_value`.
   *
   * Replaces the whole list rather than adding to it, and clearing it lets every
   * service level ship free above the threshold. The request is rejected if any ID
   * is not a service level available to your account.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  minimum_order_value?: CustomersAPI.QuantityInput | null;

  /**
   * Human-readable name for the shipping term, used to identify it when assigning
   * shipping terms to customers and orders.
   */
  name?: string;

  /**
   * Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: the buyer is never charged for shipping.
   * - `flat_rate_freight`: the buyer is charged the fixed amount in `flat_rate`,
   *   regardless of what the carrier would have charged.
   * - `carrier_rate_freight`: the buyer is charged the rate the carrier quotes for
   *   the order's carrier and service level.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermDeleteResponse {}

export interface ShippingTermCreateParams {
  /**
   * Body param: Human-readable name for the shipping term, used to identify it when
   * assigning shipping terms to customers and orders.
   */
  name: string;

  /**
   * Body param: Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: the buyer is never charged for shipping.
   * - `flat_rate_freight`: the buyer is charged the fixed amount in `flat_rate`,
   *   regardless of what the carrier would have charged.
   * - `carrier_rate_freight`: the buyer is charged the rate the carrier quotes for
   *   the order's carrier and service level.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  flat_rate?: CustomersAPI.QuantityInput;

  /**
   * Body param: IDs of the service levels that ship for free once an order exceeds
   * `minimum_order_value`.
   *
   * Leave this empty to let every service level ship free above the threshold. The
   * request is rejected if any ID is not a service level available to your account.
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  minimum_order_value?: CustomersAPI.QuantityInput;
}

export interface ShippingTermRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;
}

export interface ShippingTermUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  flat_rate?: CustomersAPI.QuantityInput | null;

  /**
   * Body param: IDs of the service levels that ship for free once an order exceeds
   * `minimum_order_value`.
   *
   * Replaces the whole list rather than adding to it, and clearing it lets every
   * service level ship free above the threshold. The request is rejected if any ID
   * is not a service level available to your account.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  minimum_order_value?: CustomersAPI.QuantityInput | null;

  /**
   * Body param: Human-readable name for the shipping term, used to identify it when
   * assigning shipping terms to customers and orders.
   */
  name?: string;

  /**
   * Body param: Freight pricing model applied by this shipping term.
   *
   * - `free_freight`: the buyer is never charged for shipping.
   * - `flat_rate_freight`: the buyer is charged the fixed amount in `flat_rate`,
   *   regardless of what the carrier would have charged.
   * - `carrier_rate_freight`: the buyer is charged the rate the carrier quotes for
   *   the order's carrier and service level.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;

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

export declare namespace ShippingTerms {
  export {
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type ListShippingTerm as ListShippingTerm,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };
}
