// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage addresses for accounts.
 */
export class Addresses extends APIResource {
  /**
   * Creates an address.
   *
   * This endpoint requires the permissions: `addresses:create`, `customers:update`,
   * `suppliers:update`.
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
  create(body: AddressCreateParams, options?: RequestOptions): APIPromise<APIKeysAPI.Address> {
    return this._client.post('/v1/sales/addresses', { body, ...options });
  }

  /**
   * Retrieves an address by ID.
   *
   * This endpoint requires the permissions: `addresses:read`, `customers:read`,
   * `suppliers:read`.
   *
   * @example
   * ```ts
   * const address = await client.sales.addresses.retrieve(
   *   'ad_012100950cfaa34aa0e0ad7258',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<APIKeysAPI.Address> {
    return this._client.get(path`/v1/sales/addresses/${id}`, options);
  }

  /**
   * Partially updates an address.
   *
   * Changing a street, locality, state, postal code, or country field may replace
   * the address's geolocation, so the geolocation `id` in the response can change.
   *
   * This endpoint requires the permissions: `addresses:update`, `customers:update`,
   * `suppliers:update`.
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
  ): APIPromise<APIKeysAPI.Address> {
    return this._client.patch(path`/v1/sales/addresses/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of addresses.
   *
   * This endpoint requires the permissions: `addresses:read`, `customers:read`,
   * `suppliers:read`.
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
   * Deletes an address.
   *
   * Deletion fails if the address is in use as a billing or shipping address on a
   * sales order, invoice, or shipment, or as a default account address.
   *
   * This endpoint requires the permissions: `addresses:delete`, `customers:update`,
   * `suppliers:update`.
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
 * List represents a paginated list of resources.
 */
export interface ListAddress {
  /**
   * Resources in this page.
   */
  data: Array<APIKeysAPI.Address>;

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
 * Request to partially update an address.
 *
 * Omitted fields are left unchanged.
 */
export interface UpdateAddressRequest {
  /**
   * Two-letter country code.
   */
  country?: string;

  /**
   * Email address associated with the address.
   *
   * Send `null` to clear.
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
   *
   * Send `null` to clear.
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
   *
   * Send `null` to clear.
   */
  street_line_2?: string | null;

  /**
   * How the address is used.
   *
   * - `standard`: a normal shipping or billing address.
   * - `drop_ship`: an address an order is shipped to directly, typically a third
   *   party or end customer rather than the account itself.
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
  email?: string;

  /**
   * City or locality.
   */
  locality?: string;

  /**
   * Phone number associated with the address.
   */
  phone?: string;

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
  street_line_2?: string;

  /**
   * How the address is used.
   *
   * - `standard`: a normal shipping or billing address.
   * - `drop_ship`: an address an order is shipped to directly, typically a third
   *   party or end customer rather than the account itself.
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
   *
   * Send `null` to clear.
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
   *
   * Send `null` to clear.
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
   *
   * Send `null` to clear.
   */
  street_line_2?: string | null;

  /**
   * How the address is used.
   *
   * - `standard`: a normal shipping or billing address.
   * - `drop_ship`: an address an order is shipped to directly, typically a third
   *   party or end customer rather than the account itself.
   */
  type?: 'standard' | 'drop_ship';
}

export interface AddressListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

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

  /**
   * Filter results to a single address type.
   */
  type?: 'standard' | 'drop_ship';
}

export declare namespace Addresses {
  export {
    type ListAddress as ListAddress,
    type UpdateAddressRequest as UpdateAddressRequest,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
  };
}
