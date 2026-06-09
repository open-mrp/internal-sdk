// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VolumeDiscountsAPI from '../../sales/volume-discounts';
import * as ActionsAPI from './actions';
import { ActionValidateParams, Actions, ValidateUnitsRequest, ValidateUnitsResponse } from './actions';
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
   * Creates an account-owned unit.
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
   * @example
   * ```ts
   * const unit = await client.catalog.units.retrieve(
   *   'un_01966263f74a5a0cae356000a1',
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
   * Partially updates an account-owned unit; system units cannot be updated.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.update(
   *   'un_01966263f74a5a0cae356000a1',
   *   { abbreviation: 'kg', name: 'Kilogram' },
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
   * Deletes an account-owned unit. Associated unit group memberships are also
   * removed, and system units cannot be deleted.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.units.delete(
   *   'un_01966263f74a5a0cae356000a1',
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
   */
  abbreviation: string;

  /**
   * Display name of the unit (e.g. "Gram").
   */
  name: string;

  /**
   * Conversion offset denominator, as a decimal string. Must not be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, as a decimal string.
   */
  offset_numerator: string;

  /**
   * Conversion ratio denominator relative to the base unit, as a decimal string.
   * Must not be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit, as a decimal string.
   */
  ratio_numerator: string;

  /**
   * Unit dimension code.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

/**
 * Request to partially update a unit.
 */
export interface UpdateUnitRequest {
  /**
   * Short abbreviation for the unit.
   */
  abbreviation?: string;

  /**
   * Display name of the unit.
   */
  name?: string;

  /**
   * Conversion offset denominator, as a decimal string. Must not be zero.
   */
  offset_denominator?: string;

  /**
   * Conversion offset numerator, as a decimal string.
   */
  offset_numerator?: string;

  /**
   * Conversion ratio denominator, as a decimal string. Must not be zero.
   */
  ratio_denominator?: string;

  /**
   * Conversion ratio numerator, as a decimal string.
   */
  ratio_numerator?: string;
}

export interface UnitDeleteResponse {}

export interface UnitCreateParams {
  /**
   * Body param: Short abbreviation for the unit (e.g. "g").
   */
  abbreviation: string;

  /**
   * Body param: Display name of the unit (e.g. "Gram").
   */
  name: string;

  /**
   * Body param: Conversion offset denominator, as a decimal string. Must not be
   * zero.
   */
  offset_denominator: string;

  /**
   * Body param: Conversion offset numerator, as a decimal string.
   */
  offset_numerator: string;

  /**
   * Body param: Conversion ratio denominator relative to the base unit, as a decimal
   * string. Must not be zero.
   */
  ratio_denominator: string;

  /**
   * Body param: Conversion ratio numerator relative to the base unit, as a decimal
   * string.
   */
  ratio_numerator: string;

  /**
   * Body param: Unit dimension code.
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
   */
  abbreviation?: string;

  /**
   * Body param: Display name of the unit.
   */
  name?: string;

  /**
   * Body param: Conversion offset denominator, as a decimal string. Must not be
   * zero.
   */
  offset_denominator?: string;

  /**
   * Body param: Conversion offset numerator, as a decimal string.
   */
  offset_numerator?: string;

  /**
   * Body param: Conversion ratio denominator, as a decimal string. Must not be zero.
   */
  ratio_denominator?: string;

  /**
   * Body param: Conversion ratio numerator, as a decimal string.
   */
  ratio_numerator?: string;
}

export interface UnitListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by unit dimension code.
   */
  type?: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Filter by unit group membership.
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
    type ValidateUnitsRequest as ValidateUnitsRequest,
    type ValidateUnitsResponse as ValidateUnitsResponse,
    type ActionValidateParams as ActionValidateParams,
  };
}
