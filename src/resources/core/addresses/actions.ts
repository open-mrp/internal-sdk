// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Autocomplete, look up details, and validate addresses.
 */
export class Actions extends APIResource {
  /**
   * Validates an address and returns whether it is valid, a formatted version, and
   * any validation messages.
   *
   * @example
   * ```ts
   * const response =
   *   await client.core.addresses.actions.updateValidate({
   *     address_line_1: '123 Main St',
   *     city: 'Springfield',
   *     country: 'US',
   *     postal_code: '62701',
   *     state: 'IL',
   *   });
   * ```
   */
  updateValidate(
    body: ActionUpdateValidateParams,
    options?: RequestOptions,
  ): APIPromise<ActionUpdateValidateResponse> {
    return this._client.put('/v1/core/addresses/actions/validate', { body, ...options });
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
 * Result of address validation.
 */
export interface ActionUpdateValidateResponse {
  /**
   * Parsed address components.
   */
  components: AddressComponents | null;

  /**
   * Formatted address from the validation service.
   */
  formatted_address: string | null;

  /**
   * Resource type identifier.
   */
  object: 'validated_address';

  /**
   * Address validation status.
   */
  status: 'valid' | 'invalid';

  /**
   * Validation messages for issues found.
   */
  validation_messages: Array<string>;
}

export interface ActionUpdateValidateParams {
  /**
   * First line of the street address.
   */
  address_line_1: string;

  /**
   * City or locality.
   */
  city: string;

  /**
   * Country name or code.
   */
  country: string;

  /**
   * Postal or ZIP code.
   */
  postal_code: string;

  /**
   * State or administrative area.
   */
  state: string;

  /**
   * Second line of the street address.
   */
  address_line_2?: string;
}

export declare namespace Actions {
  export {
    type AddressComponents as AddressComponents,
    type ActionUpdateValidateResponse as ActionUpdateValidateResponse,
    type ActionUpdateValidateParams as ActionUpdateValidateParams,
  };
}
