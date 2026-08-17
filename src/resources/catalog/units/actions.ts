// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage units.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple units of measure for the account, matched by name or
   * abbreviation, then writes asynchronously — 202 with a job to poll.
   *
   * @example
   * ```ts
   * const job = await client.catalog.units.actions.bulkUpsert({
   *   units: [
   *     {
   *       name: 'Kilogram',
   *       abbreviation: 'kg',
   *       type: 'mass',
   *       ratio_numerator: '1000',
   *       ratio_denominator: '1',
   *       offset_numerator: '0',
   *       offset_denominator: '1',
   *       is_base_unit: false,
   *     },
   *   ],
   * });
   * ```
   */
  bulkUpsert(params: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/units/actions/bulk-upsert', {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Starts an export of every matching unit and returns the job that tracks it;
   * system units are included, as on the list.
   *
   * @example
   * ```ts
   * const job = await client.catalog.units.actions.export({
   *   q: null,
   * });
   * ```
   */
  export(params: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/units/actions/export', { query: { include }, body, ...options });
  }

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
 * BulkUpsertUnitsRequest is the request to bulk upsert units.
 */
export interface BulkUpsertUnitsRequest {
  /**
   * Units to create or update, matched by name or abbreviation within the account.
   */
  units: Array<UpsertUnitInput>;
}

/**
 * Filters which units land in the exported file.
 */
export interface ExportUnitsRequest {
  /**
   * Free-text search term matched against unit names.
   */
  q: string | null;
}

/**
 * UpsertUnitInput is the input for a single unit in a bulk upsert operation.
 */
export interface UpsertUnitInput {
  /**
   * Short abbreviation for the unit (e.g. "g"). Also used for matching — see `name`.
   */
  abbreviation: string;

  /**
   * Whether the unit is its dimension's base unit. Bulk upsert never creates a base
   * unit and rejects a change to an existing one.
   */
  is_base_unit: boolean;

  /**
   * Display name of the unit (e.g. "Gram"). A row matching a system unit fails —
   * system units cannot be modified.
   */
  name: string;

  /**
   * Conversion offset denominator, as a decimal string.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, as a decimal string.
   */
  offset_numerator: string;

  /**
   * Conversion ratio denominator relative to the base unit, as a decimal string.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit, as a decimal string.
   */
  ratio_numerator: string;

  /**
   * Unit dimension code. Create-only — a row that changes an existing unit's
   * dimension fails.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
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

export interface ActionBulkUpsertParams {
  /**
   * Body param: Units to create or update, matched by name or abbreviation within
   * the account.
   */
  units: Array<UpsertUnitInput>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;
}

export interface ActionExportParams {
  /**
   * Body param: Free-text search term matched against unit names.
   */
  q: string | null;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;
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
    type BulkUpsertUnitsRequest as BulkUpsertUnitsRequest,
    type ExportUnitsRequest as ExportUnitsRequest,
    type UpsertUnitInput as UpsertUnitInput,
    type ValidateUnitsRequest as ValidateUnitsRequest,
    type ValidateUnitsResponse as ValidateUnitsResponse,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
    type ActionValidateParams as ActionValidateParams,
  };
}
