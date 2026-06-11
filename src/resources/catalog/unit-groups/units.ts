// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage unit groups and their associated units.
 */
export class Units extends APIResource {
  /**
   * Adds a unit to a unit group. If the unit is already in the group, its existing
   * association is updated with the provided settings instead.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.create(
   *     'ug_01aad07abb8e41fd392d2d7013',
   *     {
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *       customer_portal_visibility: 'visible',
   *       discount_percentage: 1,
   *     },
   *   );
   * ```
   */
  create(
    unitGroupID: string,
    params: UnitCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.UnitGroupUnit> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/catalog/unit-groups/${unitGroupID}/units`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns an associated unit within a unit group by ID.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.retrieve(
   *     'un_01966263f74a5a0cae356000a1',
   *     { unit_group_id: 'ug_01aad07abb8e41fd392d2d7013' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: UnitRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.UnitGroupUnit> {
    const { unit_group_id, ...query } = params;
    return this._client.get(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates an associated unit within a unit group.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.update(
   *     'un_01966263f74a5a0cae356000a1',
   *     {
   *       unit_group_id: 'ug_01aad07abb8e41fd392d2d7013',
   *       discount_percentage: 0.9,
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: UnitUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.UnitGroupUnit> {
    const { unit_group_id, include, ...body } = params;
    return this._client.patch(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a list of associated units within a unit group.
   *
   * @example
   * ```ts
   * const listUnitGroupUnit =
   *   await client.catalog.unitGroups.units.list(
   *     'ug_01aad07abb8e41fd392d2d7013',
   *   );
   * ```
   */
  list(
    unitGroupID: string,
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ListUnitGroupUnit> {
    return this._client.get(path`/v1/catalog/unit-groups/${unitGroupID}/units`, { query, ...options });
  }

  /**
   * Removes a unit from a unit group. The unit itself is not deleted.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.unitGroups.units.delete(
   *   'un_01966263f74a5a0cae356000a1',
   *   { unit_group_id: 'ug_01aad07abb8e41fd392d2d7013' },
   * );
   * ```
   */
  delete(id: string, params: UnitDeleteParams, options?: RequestOptions): APIPromise<UnitDeleteResponse> {
    const { unit_group_id } = params;
    return this._client.delete(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, options);
  }
}

/**
 * Request to add a unit to a unit group.
 */
export interface CreateUnitGroupUnitRequest {
  /**
   * ID of the unit to associate with the group.
   *
   * The unit's dimension must match the group's `type`.
   */
  unit_id: string;

  /**
   * Whether the unit is shown to customers in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Flat amount subtracted from the unit's price when an order is placed in this
   * unit.
   */
  discount_fixed?: number;

  /**
   * Percentage discount applied to the unit's price when an order is placed in this
   * unit (e.g. `10` is a 10% discount).
   */
  discount_percentage?: number;
}

/**
 * Request to partially update an associated unit within a unit group.
 */
export interface UpdateUnitGroupUnitRequest {
  /**
   * Whether the unit is shown to customers in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Flat amount subtracted from the unit's price when an order is placed in this
   * unit.
   */
  discount_fixed?: number;

  /**
   * Percentage discount applied to the unit's price when an order is placed in this
   * unit (e.g. `10` is a 10% discount).
   */
  discount_percentage?: number;

  /**
   * ID of the unit this association refers to.
   *
   * The unit's dimension must match the group's `type`.
   */
  unit_id?: string;
}

export interface UnitDeleteResponse {}

export interface UnitCreateParams {
  /**
   * Body param: ID of the unit to associate with the group.
   *
   * The unit's dimension must match the group's `type`.
   */
  unit_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: Whether the unit is shown to customers in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Flat amount subtracted from the unit's price when an order is placed
   * in this unit.
   */
  discount_fixed?: number;

  /**
   * Body param: Percentage discount applied to the unit's price when an order is
   * placed in this unit (e.g. `10` is a 10% discount).
   */
  discount_percentage?: number;
}

export interface UnitRetrieveParams {
  /**
   * Path param: Unit group ID.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;
}

export interface UnitUpdateParams {
  /**
   * Path param: Unit group ID.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: Whether the unit is shown to customers in the customer portal.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Flat amount subtracted from the unit's price when an order is placed
   * in this unit.
   */
  discount_fixed?: number;

  /**
   * Body param: Percentage discount applied to the unit's price when an order is
   * placed in this unit (e.g. `10` is a 10% discount).
   */
  discount_percentage?: number;

  /**
   * Body param: ID of the unit this association refers to.
   *
   * The unit's dimension must match the group's `type`.
   */
  unit_id?: string;
}

export interface UnitListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'unit'>;
}

export interface UnitDeleteParams {
  /**
   * Unit group ID.
   */
  unit_group_id: string;
}

export declare namespace Units {
  export {
    type CreateUnitGroupUnitRequest as CreateUnitGroupUnitRequest,
    type UpdateUnitGroupUnitRequest as UpdateUnitGroupUnitRequest,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
    type UnitDeleteParams as UnitDeleteParams,
  };
}
