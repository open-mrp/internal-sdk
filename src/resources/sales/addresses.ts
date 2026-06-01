// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as LinesAPI from '../operations/shipments/lines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage addresses for accounts.
 */
export class Addresses extends APIResource {
  /**
   * Creates an address for the targeted account.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.create({
   *   country: 'US',
   *   name: 'Headquarters',
   * });
   * ```
   */
  create(body: AddressCreateParams, options?: RequestOptions): APIPromise<LinesAPI.Address> {
    return this._client.post('/v1/sales/addresses', { body, ...options });
  }

  /**
   * Retrieves an address by ID.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.retrieve(
   *   'ad_012100950cfaa34aa0e0ad7258',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LinesAPI.Address> {
    return this._client.get(path`/v1/sales/addresses/${id}`, options);
  }

  /**
   * Partially updates an address.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.update(
   *   'ad_012100950cfaa34aa0e0ad7258',
   *   { name: 'Warehouse' },
   * );
   * ```
   */
  update(
    id: string,
    body: AddressUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinesAPI.Address> {
    return this._client.patch(path`/v1/sales/addresses/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of addresses.
   *
   * @example
   * ```ts
   * const listAddress = await client.sales.addresses.list();
   * ```
   */
  list(query: AddressListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListAddress> {
    return this._client.get('/v1/sales/addresses', { query, ...options });
  }

  /**
   * Deletes an address. Fails if the address is in use as a billing or shipping
   * address on a sales order, invoice, or shipment, or as a default account address.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.delete(
   *   'ad_012100950cfaa34aa0e0ad7258',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressDeleteResponse> {
    return this._client.delete(path`/v1/sales/addresses/${id}`, options);
  }
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
 * Request to create an address.
 */
export interface AddressInput {
  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Email address associated with the address.
   */
  email?: string | null;

  /**
   * City or locality.
   */
  locality?: string | null;

  /**
   * Phone number associated with the address.
   */
  phone?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string | null;

  /**
   * State or administrative area.
   */
  state?: string | null;

  /**
   * First line of the street address.
   */
  street_line_1?: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2?: string | null;

  /**
   * Address type.
   */
  type?: 'standard' | 'drop_ship';
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
export interface ListAddress {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.Address>;

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
 * Request to partially update an address.
 */
export interface UpdateAddressRequest {
  /**
   * Two-letter country code.
   */
  country?: string;

  /**
   * Email address associated with the address.
   */
  email?: string | null;

  /**
   * City or locality.
   */
  locality?: string;

  /**
   * Display name of the address.
   */
  name?: string;

  /**
   * Phone number associated with the address.
   */
  phone?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string;

  /**
   * State or administrative area.
   */
  state?: string;

  /**
   * First line of the street address.
   */
  street_line_1?: string;

  /**
   * Second line of the street address.
   */
  street_line_2?: string | null;

  /**
   * Address type.
   */
  type?: 'standard' | 'drop_ship';
}

export interface AddressDeleteResponse {}

export interface AddressCreateParams {
  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Email address associated with the address.
   */
  email?: string | null;

  /**
   * City or locality.
   */
  locality?: string | null;

  /**
   * Phone number associated with the address.
   */
  phone?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string | null;

  /**
   * State or administrative area.
   */
  state?: string | null;

  /**
   * First line of the street address.
   */
  street_line_1?: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2?: string | null;

  /**
   * Address type.
   */
  type?: 'standard' | 'drop_ship';
}

export interface AddressUpdateParams {
  /**
   * Two-letter country code.
   */
  country?: string;

  /**
   * Email address associated with the address.
   */
  email?: string | null;

  /**
   * City or locality.
   */
  locality?: string;

  /**
   * Display name of the address.
   */
  name?: string;

  /**
   * Phone number associated with the address.
   */
  phone?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string;

  /**
   * State or administrative area.
   */
  state?: string;

  /**
   * First line of the street address.
   */
  street_line_1?: string;

  /**
   * Second line of the street address.
   */
  street_line_2?: string | null;

  /**
   * Address type.
   */
  type?: 'standard' | 'drop_ship';
}

export interface AddressListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by address type.
   */
  type?: 'standard' | 'drop_ship';
}

export declare namespace Addresses {
  export {
    type Address as Address,
    type AddressInput as AddressInput,
    type Geolocation as Geolocation,
    type ListAddress as ListAddress,
    type PageInfo as PageInfo,
    type UpdateAddressRequest as UpdateAddressRequest,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };
}
