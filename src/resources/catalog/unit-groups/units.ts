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
   * Adds a unit to a unit group so that products using the group can be ordered in
   * it.
   *
   * A unit can appear in a group only once, so use the update endpoint to change the
   * discount or visibility of a unit that is already associated. Units cannot be
   * added to system unit groups.
   *
   * This endpoint requires the permission: `unit_groups:update`.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.create(
   *     'ug_andst6m79n41',
   *     {
   *       unit_id: 'un_82bd37dae5po',
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
   * Returns a single unit association within a unit group, including the discount
   * and customer portal visibility applied to it.
   *
   * This endpoint requires the permission: `unit_groups:read`.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.retrieve(
   *     'un_82bd37dae5po',
   *     { unit_group_id: 'ug_andst6m79n41' },
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
   * Partially updates a unit's association with a unit group, changing the discount
   * or customer portal visibility applied when ordering in that unit.
   *
   * Associations within system unit groups cannot be modified.
   *
   * This endpoint requires the permission: `unit_groups:update`.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.update(
   *     'un_82bd37dae5po',
   *     {
   *       unit_group_id: 'ug_andst6m79n41',
   *       customer_portal_visibility: 'visible',
   *       discount_fixed: 2.5,
   *       discount_percentage: 0.9,
   *       unit_id: 'un_82bd37dae5po',
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
   * Returns the units associated with a unit group, along with the discount and
   * customer portal visibility applied to each.
   *
   * Every association in the group is returned in a single response; this list is
   * not paginated.
   *
   * This endpoint requires the permission: `unit_groups:read`.
   *
   * @example
   * ```ts
   * const listUnitGroupUnit =
   *   await client.catalog.unitGroups.units.list(
   *     'ug_andst6m79n41',
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
   * Removes a unit from a unit group so that products using the group can no longer
   * be ordered in it.
   *
   * Only the association is deleted; the unit itself remains available. Associations
   * cannot be removed from system unit groups.
   *
   * This endpoint requires the permission: `unit_groups:delete`.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.unitGroups.units.delete(
   *   'un_82bd37dae5po',
   *   { unit_group_id: 'ug_andst6m79n41' },
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
   *
   * Subtracted before `discount_percentage` is applied.
   */
  discount_fixed?: number;

  /**
   * Share of the unit's price removed when an order is placed in this unit.
   *
   * Expressed as a decimal fraction rather than a whole number, so `0.1` is a 10%
   * discount. Send `0` explicitly for no discount — omitting the field stores a
   * discount of `1`, which removes the entire price.
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
   *
   * Subtracted before `discount_percentage` is applied.
   */
  discount_fixed?: number;

  /**
   * Share of the unit's price removed when an order is placed in this unit.
   *
   * Expressed as a decimal fraction rather than a whole number, so `0.1` is a 10%
   * discount and `0` is no discount.
   */
  discount_percentage?: number;

  /**
   * ID of the unit this association refers to.
   *
   * Sending a different unit does not repoint the association; remove the
   * association and add a new one instead. A unit sent here must still match the
   * group's `type`.
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
   *
   * Subtracted before `discount_percentage` is applied.
   */
  discount_fixed?: number;

  /**
   * Body param: Share of the unit's price removed when an order is placed in this
   * unit.
   *
   * Expressed as a decimal fraction rather than a whole number, so `0.1` is a 10%
   * discount. Send `0` explicitly for no discount — omitting the field stores a
   * discount of `1`, which removes the entire price.
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
   *
   * Subtracted before `discount_percentage` is applied.
   */
  discount_fixed?: number;

  /**
   * Body param: Share of the unit's price removed when an order is placed in this
   * unit.
   *
   * Expressed as a decimal fraction rather than a whole number, so `0.1` is a 10%
   * discount and `0` is no discount.
   */
  discount_percentage?: number;

  /**
   * Body param: ID of the unit this association refers to.
   *
   * Sending a different unit does not repoint the association; remove the
   * association and add a new one instead. A unit sent here must still match the
   * group's `type`.
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
