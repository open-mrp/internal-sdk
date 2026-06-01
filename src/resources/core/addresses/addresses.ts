// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../../operations/edi-runs';
import * as ActionsAPI from './actions';
import { ActionValidateParams, Actions, ValidateAddressRequest, ValidatedAddress } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Autocomplete, look up details, and validate addresses.
 */
export class Addresses extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns parsed address components for a Google Places ID.
   *
   * @example
   * ```ts
   * const addressDetailsResult =
   *   await client.core.addresses.retrieveDetails(
   *     'ChIJN1gggt_t2Z44AR4PVM_67p73Y',
   *   );
   * ```
   */
  retrieveDetails(
    id: string,
    query: AddressRetrieveDetailsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressDetailsResult> {
    return this._client.get(path`/v1/core/addresses/details/${id}`, { query, ...options });
  }

  /**
   * Returns address suggestions based on input text.
   *
   * @example
   * ```ts
   * const listAddressSuggestion =
   *   await client.core.addresses.retrieveSuggestions({
   *     input: 'input',
   *   });
   * ```
   */
  retrieveSuggestions(
    query: AddressRetrieveSuggestionsParams,
    options?: RequestOptions,
  ): APIPromise<ListAddressSuggestion> {
    return this._client.get('/v1/core/addresses/suggestions', { query, ...options });
  }
}

/**
 * Parsed address components.
 */
export interface AddressComponents {
  /**
   * First line of the street address.
   */
  address_line_1: string;

  /**
   * Second line of the street address.
   */
  address_line_2: string | null;

  /**
   * City or locality.
   */
  city: string;

  /**
   * Country name or code.
   */
  country: string;

  /**
   * Two-letter country code.
   */
  country_code: string;

  /**
   * Resource type identifier.
   */
  object: 'address_components';

  /**
   * Postal or ZIP code.
   */
  postal_code: string;

  /**
   * State or administrative area.
   */
  state: string;
}

/**
 * Result of a place details lookup.
 */
export interface AddressDetailsResult {
  /**
   * Parsed address components.
   */
  address: ActionsAPI.AddressComponents | null;

  /**
   * Formatted full address string.
   */
  formatted_address: string;

  /**
   * Resource type identifier.
   */
  object: 'address_details_result';
}

/**
 * Autocomplete address suggestion.
 */
export interface AddressSuggestion {
  /**
   * Address suggestion ID.
   */
  id: string;

  /**
   * Full description of the address.
   */
  description: string;

  /**
   * Main text (typically the street address).
   */
  main_text: string;

  /**
   * Resource type identifier.
   */
  object: 'address_suggestion';

  /**
   * Secondary text (typically city, state, country).
   */
  secondary_text: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAddressSuggestion {
  /**
   * Resources in this page.
   */
  data: Array<AddressSuggestion>;

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

export interface AddressRetrieveDetailsParams {
  /**
   * Session token for grouping with a previous autocomplete request.
   */
  session_token?: string;
}

export interface AddressRetrieveSuggestionsParams {
  /**
   * Autocomplete input text.
   */
  input: string;

  /**
   * Session token for grouping autocomplete requests.
   */
  session_token?: string;
}

Addresses.Actions = Actions;

export declare namespace Addresses {
  export {
    type AddressComponents as AddressComponents,
    type AddressDetailsResult as AddressDetailsResult,
    type AddressSuggestion as AddressSuggestion,
    type ListAddressSuggestion as ListAddressSuggestion,
    type PageInfo as PageInfo,
    type AddressRetrieveDetailsParams as AddressRetrieveDetailsParams,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    Actions as Actions,
    type ValidateAddressRequest as ValidateAddressRequest,
    type ValidatedAddress as ValidatedAddress,
    type ActionValidateParams as ActionValidateParams,
  };
}
