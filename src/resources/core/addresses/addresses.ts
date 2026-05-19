// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from './actions';
import {
  ActionUpdateValidateParams,
  ActionUpdateValidateResponse,
  Actions,
  AddressComponents,
} from './actions';
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
   * const address = await client.core.addresses.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AddressRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressRetrieveResponse> {
    return this._client.get(path`/v1/core/addresses/details/${id}`, { query, ...options });
  }

  /**
   * Returns address suggestions based on input text.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.addresses.retrieveSuggestions({
   *     input: 'input',
   *   });
   * ```
   */
  retrieveSuggestions(
    query: AddressRetrieveSuggestionsParams,
    options?: RequestOptions,
  ): APIPromise<AddressRetrieveSuggestionsResponse> {
    return this._client.get('/v1/core/addresses/suggestions', { query, ...options });
  }
}

/**
 * Result of a place details lookup.
 */
export interface AddressRetrieveResponse {
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
 * List represents a paginated list of resources.
 */
export interface AddressRetrieveSuggestionsResponse {
  /**
   * Resources in this page.
   */
  data: Array<AddressRetrieveSuggestionsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace AddressRetrieveSuggestionsResponse {
  /**
   * Autocomplete address suggestion.
   */
  export interface Data {
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
}

export interface AddressRetrieveParams {
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
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressRetrieveSuggestionsResponse as AddressRetrieveSuggestionsResponse,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressRetrieveSuggestionsParams as AddressRetrieveSuggestionsParams,
  };

  export {
    Actions as Actions,
    type AddressComponents as AddressComponents,
    type ActionUpdateValidateResponse as ActionUpdateValidateResponse,
    type ActionUpdateValidateParams as ActionUpdateValidateParams,
  };
}
