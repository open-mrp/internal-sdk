// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ItemCategoriesAPI from '../../catalog/item-categories/item-categories';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage service levels (shipping service levels).
 */
export class ServiceLevels extends APIResource {
  /**
   * Returns a service level by ID.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.retrieve(
   *     'crop_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ServiceLevelRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ServiceLevel> {
    const { carrier_id, ...query } = params;
    return this._client.get(path`/v1/operations/carriers/${carrier_id}/service-levels/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates a service level.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.update(
   *     '',
   *     { carrier_id: '', name: 'Express Shipping' },
   *   );
   * ```
   */
  update(id: string, params: ServiceLevelUpdateParams, options?: RequestOptions): APIPromise<ServiceLevel> {
    const { carrier_id, include, ...body } = params;
    return this._client.patch(path`/v1/operations/carriers/${carrier_id}/service-levels/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a service level. Fails if the service level is a default
   * (system-synced) level.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.delete(
   *     'crop_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { carrier_id: 'cr_01jm4r6700f8nwq3v5hx2d9ktp' },
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

  /**
   * Returns a paginated list of service levels for a carrier.
   *
   * @example
   * ```ts
   * const listServiceLevel =
   *   await client.operations.carriers.serviceLevels.retrieveServiceLevels(
   *     'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieveServiceLevels(
    carrierID: string,
    query: ServiceLevelRetrieveServiceLevelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListServiceLevel> {
    return this._client.get(path`/v1/operations/carriers/${carrierID}/service-levels`, { query, ...options });
  }

  /**
   * Creates a service level for a carrier.
   *
   * @example
   * ```ts
   * const serviceLevel =
   *   await client.operations.carriers.serviceLevels.serviceLevels(
   *     '',
   *     {
   *       code: 'ground',
   *       is_default: false,
   *       name: 'Ground Shipping',
   *     },
   *   );
   * ```
   */
  serviceLevels(
    carrierID: string,
    params: ServiceLevelServiceLevelsParams,
    options?: RequestOptions,
  ): APIPromise<ServiceLevel> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/operations/carriers/${carrierID}/service-levels`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ServiceLevel>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Shipping service level for a carrier.
 */
export interface ServiceLevel {
  /**
   * Service level ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Default service level for the carrier.
   */
  is_default: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Service level token.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ServiceLevelDeleteResponse {}

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
   * Body param: Service level code.
   */
  code?: string;

  /**
   * Body param: Whether this service level will be available for customers to select
   * in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Default service levels are the default-selected service level for
   * that carrier.
   */
  is_default?: boolean;

  /**
   * Body param: Display name.
   */
  name?: string;
}

export interface ServiceLevelDeleteParams {
  /**
   * Carrier ID.
   */
  carrier_id: string;
}

export interface ServiceLevelRetrieveServiceLevelsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface ServiceLevelServiceLevelsParams {
  /**
   * Body param: Service level code.
   */
  code: string;

  /**
   * Body param: Default service levels are the default-selected service level for
   * that carrier.
   */
  is_default: boolean;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Body param: Whether this service level will be available for customers to select
   * in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';
}

export declare namespace ServiceLevels {
  export {
    type ListServiceLevel as ListServiceLevel,
    type ServiceLevel as ServiceLevel,
    type ServiceLevelDeleteResponse as ServiceLevelDeleteResponse,
    type ServiceLevelRetrieveParams as ServiceLevelRetrieveParams,
    type ServiceLevelUpdateParams as ServiceLevelUpdateParams,
    type ServiceLevelDeleteParams as ServiceLevelDeleteParams,
    type ServiceLevelRetrieveServiceLevelsParams as ServiceLevelRetrieveServiceLevelsParams,
    type ServiceLevelServiceLevelsParams as ServiceLevelServiceLevelsParams,
  };
}
