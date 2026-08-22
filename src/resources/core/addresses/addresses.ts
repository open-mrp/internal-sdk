// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
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
   * Returns the full parsed address for a suggestion returned by address
   * autocomplete.
   *
   * Use this after the user picks a suggestion to get the street, city, state,
   * postal code, and country to prefill an address form. Nothing is saved by this
   * lookup; create an address separately to keep it.
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
   * Returns address suggestions for partial address text, for use in type-ahead
   * address entry.
   *
   * Only street addresses are suggested; cities, regions, and business listings are
   * not returned. Suggestions are lookup results, not saved addresses in your
   * account. Pass a suggestion's `id` to the address details endpoint to get the
   * full parsed address.
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
 * The full address behind an autocomplete suggestion.
 */
export interface AddressDetailsResult {
  /**
   * Parsed address components.
   */
  address: AddressComponents | null;

  /**
   * Full address formatted as a single line.
   */
  formatted_address: string;

  /**
   * Resource type identifier.
   */
  object: 'address_details_result';
}

/**
 * A candidate address returned by address autocomplete.
 *
 * A suggestion is a lookup result from the address provider, not a saved address
 * in your account. Creating an address from one is a separate step.
 */
export interface AddressSuggestion {
  /**
   * Identifier of the suggested place.
   *
   * Pass this value as the `id` path parameter of the address details endpoint to
   * retrieve the full parsed address. It is issued by the underlying address
   * provider rather than by OpenMRP, so it is not a durable OpenMRP resource ID.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

export interface AddressRetrieveDetailsParams {
  /**
   * Opaque token that ties this lookup to the autocomplete requests the suggestion
   * came from.
   *
   * Pass the same token used for those autocomplete requests so the whole address
   * entry is treated as one lookup.
   */
  session_token?: string;
}

export interface AddressRetrieveSuggestionsParams {
  /**
   * Partial address text to generate suggestions for.
   */
  input: string;

  /**
   * Opaque token that groups a series of related autocomplete requests into a single
   * session.
   *
   * Reuse the same token for each keystroke of one address entry, and again when you
   * retrieve the details of the suggestion the user picks, so the whole entry is
   * treated as one lookup.
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
