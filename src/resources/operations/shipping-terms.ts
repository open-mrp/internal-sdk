// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as BatchesAPI from './batches/batches';
import * as ServiceLevelsAPI from './carriers/service-levels';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage shipping terms.
 */
export class ShippingTerms extends APIResource {
  /**
   * Returns a shipping term by ID.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.retrieve(
   *     'shtm_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ShippingTermRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingTerm> {
    return this._client.get(path`/v1/operations/shipping-terms/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account-owned shipping term. Default shipping terms cannot
   * be updated.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.update('', {
   *     name: 'Collect',
   *   });
   * ```
   */
  update(
    id: string,
    params: ShippingTermUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingTerm> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/shipping-terms/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes an account-owned shipping term. Default shipping terms cannot be
   * deleted.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.delete(
   *     'shtm_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingTermDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipping-terms/${id}`, options);
  }

  /**
   * Returns a paginated list of shipping terms for the account, including default
   * system shipping terms.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.shippingTerms.retrieveShippingTerms();
   * ```
   */
  retrieveShippingTerms(
    query: ShippingTermRetrieveShippingTermsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingTermRetrieveShippingTermsResponse> {
    return this._client.get('/v1/operations/shipping-terms', { query, ...options });
  }

  /**
   * Creates an account-owned shipping term.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.shippingTerms({
   *     free_shipping_service_level_ids: ['string'],
   *     name: 'Prepaid',
   *     type: 'carrier_rate_freight',
   *   });
   * ```
   */
  shippingTerms(params: ShippingTermShippingTermsParams, options?: RequestOptions): APIPromise<ShippingTerm> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/shipping-terms', { query: { include }, body, ...options });
  }
}

/**
 * QuantityInput represents a value with an associated unit for create/update
 * requests.
 */
export interface QuantityInput {
  /**
   * The unit ID for the value.
   */
  unit_id: string;

  /**
   * The decimal value.
   */
  value: string;
}

/**
 * ShippingTerm resource.
 */
export interface ShippingTerm {
  /**
   * Shipping term ID.
   */
  id: string;

  /**
   * When this shipping term was created.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  flat_rate: BatchesAPI.Quantity | null;

  /**
   * List represents a paginated list of resources.
   */
  free_shipping_service_levels: ServiceLevelsAPI.ListServiceLevel | null;

  /**
   * Value with an associated unit.
   */
  minimum_order_value: BatchesAPI.Quantity | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
}

export interface ShippingTermDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface ShippingTermRetrieveShippingTermsResponse {
  /**
   * Resources in this page.
   */
  data: Array<ShippingTerm>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
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
  flat_rate?: QuantityInput | null;

  /**
   * Body param: Service level IDs that qualify for free shipping. Send null to
   * clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  minimum_order_value?: QuantityInput | null;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Shipping term type.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermRetrieveShippingTermsParams {
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

export interface ShippingTermShippingTermsParams {
  /**
   * Body param: Service level IDs that qualify for free shipping.
   */
  free_shipping_service_level_ids: Array<string>;

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
  flat_rate?: QuantityInput | null;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  minimum_order_value?: QuantityInput | null;
}

export declare namespace ShippingTerms {
  export {
    type QuantityInput as QuantityInput,
    type ShippingTerm as ShippingTerm,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermRetrieveShippingTermsResponse as ShippingTermRetrieveShippingTermsResponse,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermRetrieveShippingTermsParams as ShippingTermRetrieveShippingTermsParams,
    type ShippingTermShippingTermsParams as ShippingTermShippingTermsParams,
  };
}
