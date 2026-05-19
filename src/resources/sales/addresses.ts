// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
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
   *   locality: 'Springfield',
   *   postal_code: '62701',
   *   state: 'IL',
   *   street_line_1: '123 Main St',
   * });
   * ```
   */
  create(body: AddressCreateParams, options?: RequestOptions): APIPromise<Address> {
    return this._client.post('/v1/sales/addresses', { body, ...options });
  }

  /**
   * Retrieves an address by ID.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.retrieve(
   *   'ad_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Address> {
    return this._client.get(path`/v1/sales/addresses/${id}`, options);
  }

  /**
   * Partially updates an address.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.update('', {
   *   name: 'Warehouse',
   * });
   * ```
   */
  update(
    id: string,
    body: AddressUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Address> {
    return this._client.patch(path`/v1/sales/addresses/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of addresses.
   *
   * @example
   * ```ts
   * const addresses = await client.sales.addresses.list();
   * ```
   */
  list(
    query: AddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressListResponse> {
    return this._client.get('/v1/sales/addresses', { query, ...options });
  }

  /**
   * Deletes an address. Fails if the address is in use as a billing or shipping
   * address on a sales order, invoice, or shipment, or as a default account address.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.delete(
   *   'ad_01jm4r6700f8nwq3v5hx2d9ktp',
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
  geolocation: Address.Geolocation | null;

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

export namespace Address {
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
 * List represents a paginated list of resources.
 */
export interface AddressListResponse {
  /**
   * Resources in this page.
   */
  data: Array<Address>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
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
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };
}
