// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ItemCategoriesAPI from '../../catalog/item-categories/item-categories';
import * as ActionsAPI from './actions';
import { ActionInitiateOAuthParams, ActionInitiateOAuthResponse, Actions } from './actions';
import * as ServiceLevelsAPI from './service-levels';
import {
  ListServiceLevel,
  ServiceLevel,
  ServiceLevelDeleteParams,
  ServiceLevelDeleteResponse,
  ServiceLevelRetrieveParams,
  ServiceLevelRetrieveServiceLevelsParams,
  ServiceLevelServiceLevelsParams,
  ServiceLevelUpdateParams,
  ServiceLevels,
} from './service-levels';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carriers and their Shippo integrations.
 */
export class Carriers extends APIResource {
  serviceLevels: ServiceLevelsAPI.ServiceLevels = new ServiceLevelsAPI.ServiceLevels(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a carrier. If a Shippo-supported carrier code is provided, the carrier
   * will be registered with Shippo and service levels will be auto-synced as
   * options.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.create({
   *   account_number: '1234567890',
   *   code: 'fedex',
   *   name: 'FedEx',
   *   customer_portal_visibility: 'visible',
   * });
   * ```
   */
  create(params: CarrierCreateParams, options?: RequestOptions): APIPromise<Carrier> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/carriers', { query: { include }, body, ...options });
  }

  /**
   * Returns a carrier by ID.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.retrieve(
   *   'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: CarrierRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Carrier> {
    return this._client.get(path`/v1/operations/carriers/${id}`, { query, ...options });
  }

  /**
   * Partially updates a carrier's name and portal visibility.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.update(
   *   '',
   *   { name: 'FedEx Express' },
   * );
   * ```
   */
  update(
    id: string,
    params: CarrierUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Carrier> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/carriers/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of carriers for the current account.
   *
   * @example
   * ```ts
   * const carriers = await client.operations.carriers.list();
   * ```
   */
  list(
    query: CarrierListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CarrierListResponse> {
    return this._client.get('/v1/operations/carriers', { query, ...options });
  }

  /**
   * Deletes a carrier and cascades to remove all options. If the carrier is managed
   * by Shippo, the Shippo account is deactivated.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.delete(
   *   'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CarrierDeleteResponse> {
    return this._client.delete(path`/v1/operations/carriers/${id}`, options);
  }

  /**
   * Returns the OAuth connection status for a carrier. Sandbox accounts always
   * return disconnected.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.carriers.retrieveOAuthStatus(
   *     'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieveOAuthStatus(id: string, options?: RequestOptions): APIPromise<CarrierRetrieveOAuthStatusResponse> {
    return this._client.get(path`/v1/operations/carriers/${id}/oauth-status`, options);
  }
}

/**
 * Carrier resource.
 */
export interface Carrier {
  /**
   * Carrier ID.
   */
  id: string;

  /**
   * Account number.
   */
  account_number: string | null;

  /**
   * Carrier code.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Soft-delete timestamp.
   */
  deleted_at: string | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'carrier';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  service_levels: ServiceLevelsAPI.ListServiceLevel | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface CarrierListResponse {
  /**
   * Resources in this page.
   */
  data: Array<Carrier>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface CarrierDeleteResponse {}

/**
 * OAuth connection status for a carrier.
 */
export interface CarrierRetrieveOAuthStatusResponse {
  /**
   * Resource type identifier.
   */
  object: 'oauth_status_response';

  /**
   * OAuth connection status. One of "connected", "authorization_pending", or
   * "disconnected".
   */
  status: string;
}

export interface CarrierCreateParams {
  /**
   * Body param: Carrier account number. Required for UPS and USPS carriers.
   */
  account_number: string | null;

  /**
   * Body param: Carrier code.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;

  /**
   * Body param: Whether this carrier will be available for customers to select in
   * the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';
}

export interface CarrierRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;
}

export interface CarrierUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;

  /**
   * Body param: Whether this carrier will be available for customers to select in
   * the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Display name.
   */
  name?: string;
}

export interface CarrierListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

Carriers.ServiceLevels = ServiceLevels;
Carriers.Actions = Actions;

export declare namespace Carriers {
  export {
    type Carrier as Carrier,
    type CarrierListResponse as CarrierListResponse,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierRetrieveOAuthStatusResponse as CarrierRetrieveOAuthStatusResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    ServiceLevels as ServiceLevels,
    type ListServiceLevel as ListServiceLevel,
    type ServiceLevel as ServiceLevel,
    type ServiceLevelDeleteResponse as ServiceLevelDeleteResponse,
    type ServiceLevelRetrieveParams as ServiceLevelRetrieveParams,
    type ServiceLevelUpdateParams as ServiceLevelUpdateParams,
    type ServiceLevelDeleteParams as ServiceLevelDeleteParams,
    type ServiceLevelRetrieveServiceLevelsParams as ServiceLevelRetrieveServiceLevelsParams,
    type ServiceLevelServiceLevelsParams as ServiceLevelServiceLevelsParams,
  };

  export {
    Actions as Actions,
    type ActionInitiateOAuthResponse as ActionInitiateOAuthResponse,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
  };
}
