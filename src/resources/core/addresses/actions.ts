// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AddressesAPI from './addresses';
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
   * const validatedAddress =
   *   await client.core.addresses.actions.validate({
   *     address_line_1: '123 Main St',
   *     city: 'Springfield',
   *     country: 'US',
   *     postal_code: '62701',
   *     state: 'IL',
   *   });
   * ```
   */
  validate(body: ActionValidateParams, options?: RequestOptions): APIPromise<ValidatedAddress> {
    return this._client.put('/v1/core/addresses/actions/validate', { body, ...options });
  }
}

/**
 * Request to validate an address.
 */
export interface ValidateAddressRequest {
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

/**
 * Result of address validation.
 */
export interface ValidatedAddress {
  /**
   * Parsed address components.
   */
  components: AddressesAPI.AddressComponents | null;

  /**
   * Formatted, single-line address as standardized by the validation service.
   *
   * `null` when the service did not return a formatted address (this can occur
   * regardless of `status`).
   */
  formatted_address: string | null;

  /**
   * Resource type identifier.
   */
  object: 'validated_address';

  /**
   * Address validation status.
   *
   * - `valid`: the address was validated successfully.
   * - `invalid`: the address could not be validated; see `validation_messages` for
   *   the issues found.
   */
  status: 'valid' | 'invalid';

  /**
   * Human-readable messages describing issues found during validation.
   *
   * Empty when no issues were reported.
   */
  validation_messages: Array<string>;
}

export interface ActionValidateParams {
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
    type ValidateAddressRequest as ValidateAddressRequest,
    type ValidatedAddress as ValidatedAddress,
    type ActionValidateParams as ActionValidateParams,
  };
}
