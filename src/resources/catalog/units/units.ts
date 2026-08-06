// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VolumeDiscountsAPI from '../../sales/volume-discounts';
import * as ActionsAPI from './actions';
import {
  ActionBulkUpsertParams,
  ActionExportParams,
  ActionValidateParams,
  Actions,
  BulkUpsertUnitsRequest,
  ExportUnitsRequest,
  UpsertUnitInput,
  ValidateUnitsRequest,
  ValidateUnitsResponse,
} from './actions';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage units.
 */
export class Units extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a unit of measurement owned by your account, in addition to the system
   * units the platform already provides.
   *
   * The name and abbreviation must each be unique within the account. A unit created
   * here is never a base unit, so its conversion ratio is interpreted relative to
   * the base unit of the chosen dimension.
   *
   * This endpoint requires the permission: `units:create`.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.create({
   *   abbreviation: 'g',
   *   name: 'Gram',
   *   offset_denominator: '1',
   *   offset_numerator: '0',
   *   ratio_denominator: '1',
   *   ratio_numerator: '1',
   *   type: 'mass',
   * });
   * ```
   */
  create(params: UnitCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.Unit> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/units', { query: { include }, body, ...options });
  }

  /**
   * Returns a unit by ID, including both account-owned and global system units.
   *
   * This endpoint requires the permission: `units:read`.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.retrieve(
   *   'un_82bd37dae5po',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: UnitRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Unit> {
    return this._client.get(path`/v1/catalog/units/${id}`, { query, ...options });
  }

  /**
   * Partially updates a unit owned by your account.
   *
   * System units cannot be modified, and a unit's dimension is fixed once it is
   * created.
   *
   * This endpoint requires the permission: `units:update`.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.update(
   *   'un_82bd37dae5po',
   *   {
   *     abbreviation: 'kg',
   *     name: 'Kilogram',
   *     offset_denominator: '1',
   *     offset_numerator: '0',
   *     ratio_denominator: '1',
   *     ratio_numerator: '1000',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: UnitUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Unit> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/units/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of units for the current account, including both
   * account-owned and global system units.
   *
   * This endpoint requires the permission: `units:read`.
   *
   * @example
   * ```ts
   * const listUnit = await client.catalog.units.list();
   * ```
   */
  list(
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumeDiscountsAPI.ListUnit> {
    return this._client.get('/v1/catalog/units', { query, ...options });
  }

  /**
   * Deletes a unit owned by your account.
   *
   * The unit is also removed from every unit group it belongs to. System units,
   * which are shared across all accounts, cannot be deleted.
   *
   * This endpoint requires the permission: `units:delete`.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.delete(
   *   'un_82bd37dae5po',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<UnitDeleteResponse> {
    return this._client.delete(path`/v1/catalog/units/${id}`, options);
  }
}

/**
 * Request to create a unit.
 */
export interface CreateUnitRequest {
  /**
   * Short abbreviation for the unit (e.g. "g").
   *
   * Must be unique within the account.
   */
  abbreviation: string;

  /**
   * Display name of the unit (e.g. "Gram").
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Denominator of the conversion offset.
   *
   * Must not be zero, so send `1` when the unit has no offset.
   */
  offset_denominator: string;

  /**
   * Numerator of the conversion offset, applied after the ratio for scales that do
   * not share a zero point, such as temperature.
   *
   * Send `0` for units that convert by ratio alone.
   */
  offset_numerator: string;

  /**
   * Denominator of the ratio that converts a quantity in this unit into the
   * dimension's base unit.
   *
   * Must not be zero.
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
   * Units can only be converted to other units of the same dimension, and the
   * dimension cannot be changed after the unit is created.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

/**
 * Request to partially update a unit.
 */
export interface UpdateUnitRequest {
  /**
   * Short abbreviation for the unit.
   *
   * Must be unique within the account.
   */
  abbreviation?: string;

  /**
   * Display name of the unit.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Denominator of the conversion offset.
   *
   * Must not be zero.
   */
  offset_denominator?: string;

  /**
   * Numerator of the conversion offset, applied after the ratio for scales that do
   * not share a zero point, such as temperature.
   */
  offset_numerator?: string;

  /**
   * Denominator of the ratio that converts a quantity in this unit into the
   * dimension's base unit.
   *
   * Must not be zero.
   */
  ratio_denominator?: string;

  /**
   * Numerator of the ratio that converts a quantity in this unit into the
   * dimension's base unit.
   *
   * A quantity is converted with
   * `value × (ratio_numerator / ratio_denominator) + (offset_numerator / offset_denominator)`.
   */
  ratio_numerator?: string;
}

export interface UnitDeleteResponse {}

export interface UnitCreateParams {
  /**
   * Body param: Short abbreviation for the unit (e.g. "g").
   *
   * Must be unique within the account.
   */
  abbreviation: string;

  /**
   * Body param: Display name of the unit (e.g. "Gram").
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Body param: Denominator of the conversion offset.
   *
   * Must not be zero, so send `1` when the unit has no offset.
   */
  offset_denominator: string;

  /**
   * Body param: Numerator of the conversion offset, applied after the ratio for
   * scales that do not share a zero point, such as temperature.
   *
   * Send `0` for units that convert by ratio alone.
   */
  offset_numerator: string;

  /**
   * Body param: Denominator of the ratio that converts a quantity in this unit into
   * the dimension's base unit.
   *
   * Must not be zero.
   */
  ratio_denominator: string;

  /**
   * Body param: Numerator of the ratio that converts a quantity in this unit into
   * the dimension's base unit.
   *
   * A quantity is converted with
   * `value × (ratio_numerator / ratio_denominator) + (offset_numerator / offset_denominator)`,
   * so a kilogram in a gram-based dimension has a numerator of `1000` and a
   * denominator of `1`.
   */
  ratio_numerator: string;

  /**
   * Body param: The dimension this unit measures, such as mass, volume, or currency.
   *
   * Units can only be converted to other units of the same dimension, and the
   * dimension cannot be changed after the unit is created.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface UnitRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface UnitUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Body param: Short abbreviation for the unit.
   *
   * Must be unique within the account.
   */
  abbreviation?: string;

  /**
   * Body param: Display name of the unit.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Body param: Denominator of the conversion offset.
   *
   * Must not be zero.
   */
  offset_denominator?: string;

  /**
   * Body param: Numerator of the conversion offset, applied after the ratio for
   * scales that do not share a zero point, such as temperature.
   */
  offset_numerator?: string;

  /**
   * Body param: Denominator of the ratio that converts a quantity in this unit into
   * the dimension's base unit.
   *
   * Must not be zero.
   */
  ratio_denominator?: string;

  /**
   * Body param: Numerator of the ratio that converts a quantity in this unit into
   * the dimension's base unit.
   *
   * A quantity is converted with
   * `value × (ratio_numerator / ratio_denominator) + (offset_numerator / offset_denominator)`.
   */
  ratio_numerator?: string;
}

export interface UnitListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

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
   * Filter by unit dimension.
   */
  type?: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Return only units that belong to at least one of the given unit groups.
   */
  unit_group_ids?: Array<string>;
}

Units.Actions = Actions;

export declare namespace Units {
  export {
    type CreateUnitRequest as CreateUnitRequest,
    type UpdateUnitRequest as UpdateUnitRequest,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };

  export {
    Actions as Actions,
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
