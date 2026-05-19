// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemCategoriesAPI from '../item-categories/item-categories';
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
   * const response =
   *   await client.catalog.units.actions.updateValidate({
   *     unit_map: { '0': 'kg' },
   *   });
   * ```
   */
  updateValidate(
    body: ActionUpdateValidateParams,
    options?: RequestOptions,
  ): APIPromise<ActionUpdateValidateResponse> {
    return this._client.put('/v1/catalog/units/actions/validate', { body, ...options });
  }
}

/**
 * Result of unit abbreviation validation.
 */
export interface ActionUpdateValidateResponse {
  /**
   * Resource type identifier.
   */
  object: 'map';

  /**
   * Validated units keyed by the original map key.
   */
  units: { [key: string]: ActionUpdateValidateResponse.Units };
}

export namespace ActionUpdateValidateResponse {
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
     * Whether this is the base unit for its dimension. Conversion ratios are relative
     * to this unit.
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
     * Conversion offset denominator. Typically 1. Cannot be zero.
     */
    offset_denominator: string;

    /**
     * Conversion offset numerator, used for temperature-like conversions. Zero for
     * most unit types.
     */
    offset_numerator: string;

    /**
     * Owner describes the provenance of a resource.
     */
    owner: ItemCategoriesAPI.Owner | null;

    /**
     * Conversion ratio denominator relative to the base unit in the same dimension.
     * Cannot be zero.
     */
    ratio_denominator: string;

    /**
     * Conversion ratio numerator relative to the base unit in the same dimension.
     */
    ratio_numerator: string;

    /**
     * Unit dimension.
     */
    type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

    /**
     * When this unit was last updated.
     */
    updated_at: string;
  }
}

export interface ActionUpdateValidateParams {
  /**
   * Map of arbitrary keys to unit abbreviation values to validate.
   */
  unit_map: { [key: string]: string };
}

export declare namespace Actions {
  export {
    type ActionUpdateValidateResponse as ActionUpdateValidateResponse,
    type ActionUpdateValidateParams as ActionUpdateValidateParams,
  };
}
