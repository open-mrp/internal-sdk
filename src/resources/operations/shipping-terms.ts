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
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.create({
   *     name: 'Prepaid',
   *     type: 'carrier_rate_freight',
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
   * Partially updates an account-owned shipping term. Default shipping terms cannot
   * be updated.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.update(
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *     { name: 'Collect' },
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
   * Deletes an account-owned shipping term. Default shipping terms cannot be
   * deleted.
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
   * Display name.
   */
  name: string;

  /**
   * Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  flat_rate?: CustomersAPI.QuantityInput;

  /**
   * Service level IDs that qualify for free shipping.
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
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
 * Request to partially update a shipping term. All fields are optional. Absent
 * fields are left unchanged. Send an explicit JSON null for flat_rate,
 * minimum_order_value, or free_shipping_service_level_ids to clear the existing
 * value.
 */
export interface UpdateShippingTermRequest {
  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  flat_rate?: CustomersAPI.QuantityInput | null;

  /**
   * Service level IDs that qualify for free shipping. Send null to clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  minimum_order_value?: CustomersAPI.QuantityInput | null;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Shipping term type.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermDeleteResponse {}

export interface ShippingTermCreateParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Shipping term type.
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
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  flat_rate?: CustomersAPI.QuantityInput;

  /**
   * Body param: Service level IDs that qualify for free shipping.
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
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
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  flat_rate?: CustomersAPI.QuantityInput | null;

  /**
   * Body param: Service level IDs that qualify for free shipping. Send null to
   * clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  minimum_order_value?: CustomersAPI.QuantityInput | null;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Shipping term type.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
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
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
