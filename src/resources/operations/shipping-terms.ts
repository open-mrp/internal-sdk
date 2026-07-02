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
   * Creates an account-owned shipping term.
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
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *     free_shipping_service_level_ids: [
   *       'crop_01cfaf03f104e90ef9680e2a30',
   *     ],
   *     minimum_order_value: {
   *       value: '500.00',
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
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
   *     'shtm_014341ab4bb5bf94d5b6936f86',
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
   * Partially updates an account-owned shipping term.
   *
   * System-provided default shipping terms cannot be updated.
   *
   * This endpoint requires the permission: `shipping_terms:update`.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.update(
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *     {
   *       flat_rate: {
   *         value: '15.00',
   *         unit_id: 'un_01966263f74a5a0cae356000a1',
   *       },
   *       free_shipping_service_level_ids: [
   *         'crop_01cfaf03f104e90ef9680e2a30',
   *       ],
   *       minimum_order_value: {
   *         value: '500.00',
   *         unit_id: 'un_01966263f74a5a0cae356000a1',
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
   * Returns a paginated list of shipping terms for the account, including default
   * system shipping terms.
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
   * Deletes an account-owned shipping term.
   *
   * System-provided default shipping terms cannot be deleted.
   *
   * This endpoint requires the permission: `shipping_terms:delete`.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.delete(
   *     'shtm_014341ab4bb5bf94d5b6936f86',
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
   * - `free_freight`: no shipping cost to the buyer.
   * - `flat_rate_freight`: a fixed shipping cost regardless of order details (see
   *   `flat_rate`).
   * - `carrier_rate_freight`: shipping cost is determined by the carrier's quoted
   *   rate.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * A value with an associated unit, used in create and update requests.
   */
  flat_rate?: CustomersAPI.QuantityInput;

  /**
   * IDs of service levels that ship for free under this term (typically once
   * `minimum_order_value` is met).
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * A value with an associated unit, used in create and update requests.
   */
  minimum_order_value?: CustomersAPI.QuantityInput;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to partially update a shipping term.
 *
 * All fields are optional and absent fields are left unchanged. Send an explicit
 * JSON `null` for `flat_rate`, `minimum_order_value`, or
 * `free_shipping_service_level_ids` to clear the existing value.
 */
export interface UpdateShippingTermRequest {
  /**
   * A value with an associated unit, used in create and update requests.
   */
  flat_rate?: CustomersAPI.QuantityInput | null;

  /**
   * IDs of service levels that ship for free under this term (typically once
   * `minimum_order_value` is met).
   *
   * Replaces the existing list. Send `null` to clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * A value with an associated unit, used in create and update requests.
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
   * - `free_freight`: no shipping cost to the buyer.
   * - `flat_rate_freight`: a fixed shipping cost regardless of order details (see
   *   `flat_rate`).
   * - `carrier_rate_freight`: shipping cost is determined by the carrier's quoted
   *   rate.
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
   * - `free_freight`: no shipping cost to the buyer.
   * - `flat_rate_freight`: a fixed shipping cost regardless of order details (see
   *   `flat_rate`).
   * - `carrier_rate_freight`: shipping cost is determined by the carrier's quoted
   *   rate.
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
   * Body param: A value with an associated unit, used in create and update requests.
   */
  flat_rate?: CustomersAPI.QuantityInput;

  /**
   * Body param: IDs of service levels that ship for free under this term (typically
   * once `minimum_order_value` is met).
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * Body param: A value with an associated unit, used in create and update requests.
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
   * Body param: A value with an associated unit, used in create and update requests.
   */
  flat_rate?: CustomersAPI.QuantityInput | null;

  /**
   * Body param: IDs of service levels that ship for free under this term (typically
   * once `minimum_order_value` is met).
   *
   * Replaces the existing list. Send `null` to clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * Body param: A value with an associated unit, used in create and update requests.
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
   * - `free_freight`: no shipping cost to the buyer.
   * - `flat_rate_freight`: a fixed shipping cost regardless of order details (see
   *   `flat_rate`).
   * - `carrier_rate_freight`: shipping cost is determined by the carrier's quoted
   *   rate.
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
