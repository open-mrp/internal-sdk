// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage units.
 */
export class Actions extends APIResource {
  /**
   * Validates unit abbreviations and returns matching units keyed by the original
   * map keys.
   *
   * @example
   * ```ts
   * const validateUnitsResponse =
   *   await client.catalog.units.actions.validate({
   *     unit_map: { '0': 'kg' },
   *   });
   * ```
   */
  validate(body: ActionValidateParams, options?: RequestOptions): APIPromise<ValidateUnitsResponse> {
    return this._client.put('/v1/catalog/units/actions/validate', { body, ...options });
  }
}

/**
 * Request to validate units by abbreviation.
 */
export interface ValidateUnitsRequest {
  /**
   * Map of arbitrary keys to unit abbreviation values to validate.
   */
  unit_map: { [key: string]: string };
}

/**
 * Result of unit abbreviation validation.
 */
export interface ValidateUnitsResponse {
  /**
   * Resource type identifier.
   */
  object: 'map';

  /**
   * Validated units keyed by the original map key.
   */
  units: { [key: string]: ValidateUnitsResponse.Units };
}

export namespace ValidateUnitsResponse {
  /**
   * Unit of measurement used for conversions and product quantities.
   */
  export interface Units {
    /**
     * Unit ID.
     */
    id: string;

    /**
     * Short abbreviation for the unit (e.g. "g", "kg").
     */
    abbreviation: string;

    /**
     * When this unit was created.
     */
    created_at: string;

    /**
     * Whether this is the base unit for its dimension.
     *
     * Conversion ratios are relative to this unit.
     */
    is_base_unit: boolean;

    /**
     * Display name of the unit (e.g. "Gram", "Kilogram").
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'unit';

    /**
     * Conversion offset denominator.
     *
     * Typically 1. Cannot be zero.
     */
    offset_denominator: string;

    /**
     * Conversion offset numerator, used for temperature-like conversions.
     *
     * Zero for most unit types.
     */
    offset_numerator: string;

    /**
     * Owner describes the provenance of a resource.
     */
    owner: APIKeysAPI.Owner | null;

    /**
     * Conversion ratio denominator relative to the base unit in the same dimension.
     *
     * Cannot be zero.
     */
    ratio_denominator: string;

    /**
     * Conversion ratio numerator relative to the base unit in the same dimension.
     */
    ratio_numerator: string;

    /**
     * Unit dimension.
     *
     * Units can only be converted to other units sharing the same dimension.
     *
     * - `currency`: monetary units such as dollars or euros.
     * - `quantity`: discrete countable units.
     * - `time`: time-based units such as hours or minutes.
     * - `mass`: weight-based units such as kilograms or pounds.
     * - `volume`: volumetric units such as liters or gallons.
     * - `length`: distance-based units such as meters or feet.
     * - `temperature`: temperature units such as Celsius or Fahrenheit.
     * - `area`: area-based units such as square meters or acres.
     */
    type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

    /**
     * When this unit was last updated.
     */
    updated_at: string;
  }
}

export interface ActionValidateParams {
  /**
   * Map of arbitrary keys to unit abbreviation values to validate.
   */
  unit_map: { [key: string]: string };
}

export declare namespace Actions {
  export {
    type ValidateUnitsRequest as ValidateUnitsRequest,
    type ValidateUnitsResponse as ValidateUnitsResponse,
    type ActionValidateParams as ActionValidateParams,
  };
}
