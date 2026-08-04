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
   * Resolves a batch of unit abbreviations to the units they refer to.
   *
   * Each abbreviation is matched case-insensitively against the account's units,
   * including shared system units, and returned under the key it was sent with. Keys
   * whose abbreviation matches no unit are omitted from the response, which is how
   * invalid abbreviations are identified.
   *
   * This endpoint requires the permissions: `units:read`, `customers:read`,
   * `suppliers:read`.
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
   * Abbreviations to look up, keyed by any identifier you choose.
   *
   * The keys are echoed back on the matching units, so a spreadsheet import can use
   * row numbers or column names to trace each abbreviation back to its source.
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
   *
   * Abbreviations are matched case-insensitively; keys whose abbreviation did not
   * match any unit are omitted.
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
     * Every other unit's conversion ratio is expressed relative to the base unit. Base
     * units are platform-defined; units created through the API are never base units.
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
     * Denominator of the conversion offset applied after the ratio.
     *
     * Never zero; a unit with no offset carries a numerator of `0` over a denominator
     * of `1`.
     */
    offset_denominator: string;

    /**
     * Numerator of the conversion offset, applied after the ratio for scales that do
     * not share a zero point, such as temperature.
     *
     * Zero for units that convert by ratio alone.
     */
    offset_numerator: string;

    /**
     * Owner describes the provenance of a resource.
     */
    owner: APIKeysAPI.Owner | null;

    /**
     * Denominator of the ratio that converts a quantity in this unit into the
     * dimension's base unit.
     *
     * Cannot be zero.
     */
    ratio_denominator: string;

    /**
     * Numerator of the ratio that converts a quantity in this unit into the
     * dimension's base unit.
     *
     * A quantity is converted with
     * `value × (ratio_numerator / ratio_denominator) + (offset_numerator / offset_denominator)`,
     * so a kilogram in a gram-based dimension has a numerator of `1000` and a
     * denominator of `1`.
     */
    ratio_numerator: string;

    /**
     * The dimension this unit measures, such as mass, volume, or currency.
     *
     * A unit can only be converted to another unit of the same dimension. The
     * `quantity` dimension is for discrete countable items rather than a physical
     * measure.
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
   * Abbreviations to look up, keyed by any identifier you choose.
   *
   * The keys are echoed back on the matching units, so a spreadsheet import can use
   * row numbers or column names to trace each abbreviation back to its source.
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
