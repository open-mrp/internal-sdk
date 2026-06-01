// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionInitiateOAuthParams,
  ActionSyncOptionsParams,
  Actions,
  InitiateOAuthRequest,
  OAuthResponse,
} from './actions';
import * as ServiceLevelsAPI from './service-levels';
import {
  CreateServiceLevelRequest,
  ServiceLevelCreateParams,
  ServiceLevelDeleteParams,
  ServiceLevelDeleteResponse,
  ServiceLevelListParams,
  ServiceLevelRetrieveParams,
  ServiceLevelUpdateParams,
  ServiceLevels,
  UpdateServiceLevelRequest,
} from './service-levels';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carriers and their Shippo integrations.
 */
export class Carriers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  serviceLevels: ServiceLevelsAPI.ServiceLevels = new ServiceLevelsAPI.ServiceLevels(this._client);

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
  create(params: CarrierCreateParams, options?: RequestOptions): APIPromise<CustomersAPI.Carrier> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/carriers', { query: { include }, body, ...options });
  }

  /**
   * Returns a carrier by ID.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.retrieve(
   *   'cr_01784fd54c9ba197bb4e42f0e6',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: CarrierRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.Carrier> {
    return this._client.get(path`/v1/operations/carriers/${id}`, { query, ...options });
  }

  /**
   * Partially updates a carrier's name and portal visibility.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.update(
   *   'cr_01784fd54c9ba197bb4e42f0e6',
   *   { name: 'FedEx Express' },
   * );
   * ```
   */
  update(
    id: string,
    params: CarrierUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.Carrier> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/carriers/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of carriers for the current account.
   *
   * @example
   * ```ts
   * const listCarrier = await client.operations.carriers.list();
   * ```
   */
  list(query: CarrierListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListCarrier> {
    return this._client.get('/v1/operations/carriers', { query, ...options });
  }

  /**
   * Deletes a carrier and cascades to remove all options. If the carrier is managed
   * by Shippo, the Shippo account is deactivated.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.delete(
   *   'cr_01784fd54c9ba197bb4e42f0e6',
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
   * const oauthStatusResponse =
   *   await client.operations.carriers.retrieveOAuthStatus(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *   );
   * ```
   */
  retrieveOAuthStatus(id: string, options?: RequestOptions): APIPromise<OAuthStatusResponse> {
    return this._client.get(path`/v1/operations/carriers/${id}/oauth-status`, options);
  }
}

/**
 * Request to create a carrier.
 */
export interface CreateCarrierRequest {
  /**
   * Carrier account number. Required for UPS and USPS carriers.
   */
  account_number: string | null;

  /**
   * Carrier code.
   */
  code: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect' | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Carrier visibility in the customer portal.
   *
   * If `visible`, this carrier will be available for your customers to utilize when
   * they go to checkout. If `hidden`, this carrier will not be an option on
   * checkout.
   */
  customer_portal_visibility?: 'visible' | 'hidden';
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCarrier {
  /**
   * Resources in this page.
   */
  data: Array<CustomersAPI.Carrier>;

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
 * OAuth connection status for a carrier.
 */
export interface OAuthStatusResponse {
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

/**
 * Request to update a carrier.
 */
export interface UpdateCarrierRequest {
  /**
   * Carrier visibility in the customer portal.
   *
   * If `visible`, this carrier will be available for your customers to utilize when
   * they go to checkout. If `hidden`, this carrier will not be an option on
   * checkout.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Display name.
   */
  name?: string;
}

export interface CarrierDeleteResponse {}

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
   * Body param: Carrier visibility in the customer portal.
   *
   * If `visible`, this carrier will be available for your customers to utilize when
   * they go to checkout. If `hidden`, this carrier will not be an option on
   * checkout.
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
   * Body param: Carrier visibility in the customer portal.
   *
   * If `visible`, this carrier will be available for your customers to utilize when
   * they go to checkout. If `hidden`, this carrier will not be an option on
   * checkout.
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

Carriers.Actions = Actions;
Carriers.ServiceLevels = ServiceLevels;

export declare namespace Carriers {
  export {
    type CreateCarrierRequest as CreateCarrierRequest,
    type ListCarrier as ListCarrier,
    type OAuthStatusResponse as OAuthStatusResponse,
    type UpdateCarrierRequest as UpdateCarrierRequest,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierRetrieveParams as CarrierRetrieveParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
  };

  export {
    Actions as Actions,
    type InitiateOAuthRequest as InitiateOAuthRequest,
    type OAuthResponse as OAuthResponse,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
    type ActionSyncOptionsParams as ActionSyncOptionsParams,
  };

  export {
    ServiceLevels as ServiceLevels,
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
