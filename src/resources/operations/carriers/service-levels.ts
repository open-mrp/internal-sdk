// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../edi-runs';
import * as ActionsAPI from '../shipments/actions';
import * as LinesAPI from '../shipments/lines';
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
  ): APIPromise<ActionsAPI.ServiceLevel> {
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
  ): APIPromise<ActionsAPI.ServiceLevel> {
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
  ): APIPromise<ActionsAPI.ServiceLevel> {
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
  ): APIPromise<ActionsAPI.ListServiceLevel> {
    return this._client.get(path`/v1/operations/carriers/${carrierID}/service-levels`, { query, ...options });
  }

  /**
   * Permanently deletes a service level. Fails if the service level is a default
   * (system-synced) level.
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
 * Account with optional branding and portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: LinesAPI.AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create a service level.
 */
export interface CreateServiceLevelRequest {
  /**
   * Service level code.
   */
  code: string;

  /**
   * Default service levels are the default-selected service level for that carrier.
   */
  is_default: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Whether this service level will be available for customers to select in the
   * customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';
}

/**
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.ServiceLevel>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
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
  owner: LinesAPI.Owner | null;

  /**
   * Service level token.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to update a service level.
 */
export interface UpdateServiceLevelRequest {
  /**
   * Service level code.
   */
  code?: string;

  /**
   * Whether this service level will be available for customers to select in the
   * customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Default service levels are the default-selected service level for that carrier.
   */
  is_default?: boolean;

  /**
   * Display name.
   */
  name?: string;
}

export interface ServiceLevelDeleteResponse {}

export interface ServiceLevelCreateParams {
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

export interface ServiceLevelListParams {
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

export interface ServiceLevelDeleteParams {
  /**
   * Carrier ID.
   */
  carrier_id: string;
}

export declare namespace ServiceLevels {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreateServiceLevelRequest as CreateServiceLevelRequest,
    type Geolocation as Geolocation,
    type ListServiceLevel as ListServiceLevel,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type ServiceLevel as ServiceLevel,
    type UpdateServiceLevelRequest as UpdateServiceLevelRequest,
    type ServiceLevelDeleteResponse as ServiceLevelDeleteResponse,
    type ServiceLevelCreateParams as ServiceLevelCreateParams,
    type ServiceLevelRetrieveParams as ServiceLevelRetrieveParams,
    type ServiceLevelUpdateParams as ServiceLevelUpdateParams,
    type ServiceLevelListParams as ServiceLevelListParams,
    type ServiceLevelDeleteParams as ServiceLevelDeleteParams,
  };
}
