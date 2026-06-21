// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage service levels (shipping service levels).
 */
export class ServiceLevels extends APIResource {
  /**
   * Creates a service level for a carrier.
   *
   * This endpoint requires the permission: `carriers:create`.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.create(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *     {
   *       code: 'ground',
   *       is_default: false,
   *       name: 'Ground Shipping',
   *     },
   *   );
   * ```
   */
  create(
    carrierID: string,
    params: ServiceLevelCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ServiceLevel> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/operations/carriers/${carrierID}/service-levels`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a service level by ID.
   *
   * This endpoint requires the permissions: `carriers:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.retrieve(
   *     'crop_01cfaf03f104e90ef9680e2a30',
   *     { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ServiceLevelRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ServiceLevel> {
    const { carrier_id, ...query } = params;
    return this._client.get(path`/v1/operations/carriers/${carrier_id}/service-levels/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates a service level.
   *
   * System-owned service levels cannot be updated.
   *
   * This endpoint requires the permission: `carriers:update`.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.update(
   *     'crop_01cfaf03f104e90ef9680e2a30',
   *     {
   *       carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6',
   *       name: 'Express Shipping',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ServiceLevelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ServiceLevel> {
    const { carrier_id, include, ...body } = params;
    return this._client.patch(path`/v1/operations/carriers/${carrier_id}/service-levels/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of service levels for a carrier.
   *
   * This endpoint requires the permissions: `carriers:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const listServiceLevel =
   *   await client.operations.carriers.serviceLevels.list(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *   );
   * ```
   */
  list(
    carrierID: string,
    query: ServiceLevelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ListServiceLevel> {
    return this._client.get(path`/v1/operations/carriers/${carrierID}/service-levels`, { query, ...options });
  }

  /**
   * Permanently deletes a service level.
   *
   * System-owned service levels and the carrier's default service level cannot be
   * deleted; unset `is_default` first to delete a default.
   *
   * This endpoint requires the permission: `carriers:delete`.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.delete(
   *     'crop_01cfaf03f104e90ef9680e2a30',
   *     { carrier_id: 'cr_01784fd54c9ba197bb4e42f0e6' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: ServiceLevelDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ServiceLevelDeleteResponse> {
    const { carrier_id } = params;
    return this._client.delete(path`/v1/operations/carriers/${carrier_id}/service-levels/${id}`, options);
  }
}

/**
 * Request to create a service level.
 */
export interface CreateServiceLevelRequest {
  /**
   * Carrier-specific code identifying this service level (e.g. `fedex_ground`).
   *
   * Must be unique among the carrier's service levels.
   */
  code: string;

  /**
   * Whether this becomes the carrier's default service level, pre-selected when the
   * carrier is chosen.
   *
   * Each carrier has at most one default; setting this to `true` clears the
   * carrier's existing default.
   */
  is_default: boolean;

  /**
   * Human-readable name for the service level, shown to customers at checkout when
   * the service level is visible.
   */
  name: string;

  /**
   * Service level visibility in the customer portal.
   *
   * A `visible` service level can be selected by your customers at checkout; a
   * `hidden` one is not offered there. New service levels are visible unless set to
   * `hidden`.
   */
  customer_portal_visibility?: 'visible' | 'hidden';
}

/**
 * Request to update a service level.
 */
export interface UpdateServiceLevelRequest {
  /**
   * Carrier-specific code identifying this service level (e.g. `fedex_ground`).
   *
   * Must be unique among the carrier's service levels.
   */
  code?: string;

  /**
   * Whether this service level will be available for customers to select in the
   * customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Whether this is the carrier's default service level, pre-selected when the
   * carrier is chosen.
   *
   * Each carrier has at most one default; setting this to `true` clears the
   * carrier's existing default.
   */
  is_default?: boolean;

  /**
   * Human-readable name for the service level, shown to customers at checkout when
   * the service level is visible.
   */
  name?: string;
}

export interface ServiceLevelDeleteResponse {}

export interface ServiceLevelCreateParams {
  /**
   * Body param: Carrier-specific code identifying this service level (e.g.
   * `fedex_ground`).
   *
   * Must be unique among the carrier's service levels.
   */
  code: string;

  /**
   * Body param: Whether this becomes the carrier's default service level,
   * pre-selected when the carrier is chosen.
   *
   * Each carrier has at most one default; setting this to `true` clears the
   * carrier's existing default.
   */
  is_default: boolean;

  /**
   * Body param: Human-readable name for the service level, shown to customers at
   * checkout when the service level is visible.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Body param: Service level visibility in the customer portal.
   *
   * A `visible` service level can be selected by your customers at checkout; a
   * `hidden` one is not offered there. New service levels are visible unless set to
   * `hidden`.
   */
  customer_portal_visibility?: 'visible' | 'hidden';
}

export interface ServiceLevelRetrieveParams {
  /**
   * Path param: Carrier ID.
   */
  carrier_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface ServiceLevelUpdateParams {
  /**
   * Path param: Carrier ID.
   */
  carrier_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Body param: Carrier-specific code identifying this service level (e.g.
   * `fedex_ground`).
   *
   * Must be unique among the carrier's service levels.
   */
  code?: string;

  /**
   * Body param: Whether this service level will be available for customers to select
   * in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Whether this is the carrier's default service level, pre-selected
   * when the carrier is chosen.
   *
   * Each carrier has at most one default; setting this to `true` clears the
   * carrier's existing default.
   */
  is_default?: boolean;

  /**
   * Body param: Human-readable name for the service level, shown to customers at
   * checkout when the service level is visible.
   */
  name?: string;
}

export interface ServiceLevelListParams {
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
  include?: Array<'owner' | 'owner.account'>;

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

export interface ServiceLevelDeleteParams {
  /**
   * Carrier ID.
   */
  carrier_id: string;
}

export declare namespace ServiceLevels {
  export {
    type CreateServiceLevelRequest as CreateServiceLevelRequest,
    type UpdateServiceLevelRequest as UpdateServiceLevelRequest,
    type ServiceLevelDeleteResponse as ServiceLevelDeleteResponse,
    type ServiceLevelCreateParams as ServiceLevelCreateParams,
    type ServiceLevelRetrieveParams as ServiceLevelRetrieveParams,
    type ServiceLevelUpdateParams as ServiceLevelUpdateParams,
    type ServiceLevelListParams as ServiceLevelListParams,
    type ServiceLevelDeleteParams as ServiceLevelDeleteParams,
  };
}
