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
   * Creates a carrier.
   *
   * If a Shippo-supported code (`fedex`, `ups`, `usps`) is provided, the carrier is
   * connected through Shippo and its service levels are auto-synced, initially
   * hidden from the customer portal. Sandbox accounts skip the Shippo connection.
   *
   * This endpoint requires the permission: `carriers:create`.
   *
   * @example
   * ```ts
   * const carrier = await client.operations.carriers.create({
   *   name: 'FedEx',
   *   account_number: '1234567890',
   *   code: 'fedex',
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
   * This endpoint requires the permissions: `carriers:read`, `customers:read`,
   * `suppliers:read`.
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
   * This endpoint requires the permission: `carriers:update`.
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
   * This endpoint requires the permissions: `carriers:read`, `customers:read`,
   * `suppliers:read`.
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
   * Deletes a carrier and all of its service levels.
   *
   * If the carrier is connected through Shippo, its Shippo carrier account is
   * deactivated. System-owned carriers cannot be deleted.
   *
   * This endpoint requires the permission: `carriers:delete`.
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
   * Returns the OAuth connection status for a carrier.
   *
   * The status is one of `connected`, `authorization_pending`, or `disconnected`.
   * Sandbox accounts always return `disconnected`.
   *
   * This endpoint requires the permission: `carriers:read`.
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
   * Human-readable name for the carrier.
   *
   * Must be unique among your account's carriers.
   */
  name: string;

  /**
   * Your account number with this carrier.
   *
   * Required when `code` is `ups` or `usps`, which connect to Shippo using this
   * number; FedEx connects via OAuth instead.
   */
  account_number?: string;

  /**
   * Well-known carrier code.
   *
   * Omit for a custom carrier. Providing a Shippo-supported code (`fedex`, `ups`,
   * `usps`) connects the carrier through Shippo and auto-syncs its service levels.
   */
  code?: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect';

  /**
   * Carrier visibility in the customer portal.
   *
   * A `visible` carrier can be selected by your customers at checkout; a `hidden`
   * carrier is not offered there. New carriers are visible unless set to `hidden`.
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
   * OAuth connection status.
   *
   * - `connected`: the carrier account is authorized and ready for live rating and
   *   labels.
   * - `authorization_pending`: the carrier account exists but OAuth authorization
   *   has not been completed.
   * - `disconnected`: no carrier account is connected. Sandbox accounts always
   *   report this status.
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
   * A `visible` carrier can be selected by your customers at checkout; a `hidden`
   * carrier is not offered there.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Human-readable name for the carrier, unique among your account's carriers.
   */
  name?: string;
}

export interface CarrierDeleteResponse {}

export interface CarrierCreateParams {
  /**
   * Body param: Human-readable name for the carrier.
   *
   * Must be unique among your account's carriers.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;

  /**
   * Body param: Your account number with this carrier.
   *
   * Required when `code` is `ups` or `usps`, which connect to Shippo using this
   * number; FedEx connects via OAuth instead.
   */
  account_number?: string;

  /**
   * Body param: Well-known carrier code.
   *
   * Omit for a custom carrier. Providing a Shippo-supported code (`fedex`, `ups`,
   * `usps`) connects the carrier through Shippo and auto-syncs its service levels.
   */
  code?: 'fedex' | 'ups' | 'usps' | 'will_call' | 'delivery' | 'ltl' | 'ltl1' | 'freight_collect';

  /**
   * Body param: Carrier visibility in the customer portal.
   *
   * A `visible` carrier can be selected by your customers at checkout; a `hidden`
   * carrier is not offered there. New carriers are visible unless set to `hidden`.
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
   * A `visible` carrier can be selected by your customers at checkout; a `hidden`
   * carrier is not offered there.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Human-readable name for the carrier, unique among your account's
   * carriers.
   */
  name?: string;
}

export interface CarrierListParams {
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
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;

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
