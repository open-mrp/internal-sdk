// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as UnitsAPI from './units';
import {
  CreateUnitGroupUnitRequest,
  UnitCreateParams,
  UnitDeleteParams,
  UnitDeleteResponse,
  UnitListParams,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
  UpdateUnitGroupUnitRequest,
} from './units';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage unit groups and their associated units.
 */
export class UnitGroups extends APIResource {
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);

  /**
   * Creates a unit group with optional associated units.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.create({
   *   base_unit_id: 'un_01966263f74a5a0cae356000a1',
   *   name: 'Weight Units',
   *   type: 'mass',
   *   associated_units: [
   *     {
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *       discount_percentage: 1,
   *       discount_fixed: 0,
   *       customer_portal_visibility: 'visible',
   *     },
   *   ],
   * });
   * ```
   */
  create(params: UnitGroupCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.UnitGroup> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/unit-groups', { query: { include }, body, ...options });
  }

  /**
   * Returns a unit group by ID.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.retrieve(
   *   'ug_01aad07abb8e41fd392d2d7013',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: UnitGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.UnitGroup> {
    return this._client.get(path`/v1/catalog/unit-groups/${id}`, { query, ...options });
  }

  /**
   * Partially updates a unit group. System unit groups cannot be updated.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.update(
   *   'ug_01aad07abb8e41fd392d2d7013',
   *   {
   *     base_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     name: 'Weight Units (Updated)',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: UnitGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.UnitGroup> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/unit-groups/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of unit groups, including system unit groups.
   *
   * @example
   * ```ts
   * const listUnitGroup =
   *   await client.catalog.unitGroups.list();
   * ```
   */
  list(
    query: UnitGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUnitGroup> {
    return this._client.get('/v1/catalog/unit-groups', { query, ...options });
  }

  /**
   * Deletes a unit group and all associated unit conversions. System unit groups
   * cannot be deleted.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.delete(
   *   'ug_01aad07abb8e41fd392d2d7013',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<UnitGroupDeleteResponse> {
    return this._client.delete(path`/v1/catalog/unit-groups/${id}`, options);
  }
}

/**
 * Request to create a unit group.
 */
export interface CreateUnitGroupRequest {
  /**
   * ID of the unit to designate as the group's reference unit.
   */
  base_unit_id: string;

  /**
   * Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Dimension shared by every unit in this group (e.g. `mass`, `volume`).
   *
   * All associated units must be of this dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Associated units to create with the group.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Free-form notes about the unit group.
   */
  notes?: string;
}

/**
 * Parameters for associating a unit with a unit group.
 */
export interface CreateUnitGroupUnitParam {
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
 * List represents a paginated list of resources.
 */
export interface ListUnitGroup {
  /**
   * Resources in this page.
   */
  data: Array<AccountUsersAPI.UnitGroup>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to partially update a unit group.
 */
export interface UpdateUnitGroupRequest {
  /**
   * Associated units to add or update in the group.
   *
   * Upserted by unit: a listed unit already in the group has its association
   * updated, otherwise it is added. Existing units not in the list are preserved.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * ID of the group's base unit.
   */
  base_unit_id?: string;

  /**
   * Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Free-form notes about the unit group.
   *
   * Set to `null` to clear.
   */
  notes?: string | null;
}

export interface UnitGroupDeleteResponse {}

export interface UnitGroupCreateParams {
  /**
   * Body param: ID of the unit to designate as the group's reference unit.
   */
  base_unit_id: string;

  /**
   * Body param: Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Body param: Dimension shared by every unit in this group (e.g. `mass`,
   * `volume`).
   *
   * All associated units must be of this dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Body param: Associated units to create with the group.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Body param: Free-form notes about the unit group.
   */
  notes?: string;
}

export interface UnitGroupRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;
}

export interface UnitGroupUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Body param: Associated units to add or update in the group.
   *
   * Upserted by unit: a listed unit already in the group has its association
   * updated, otherwise it is added. Existing units not in the list are preserved.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Body param: ID of the group's base unit.
   */
  base_unit_id?: string;

  /**
   * Body param: Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Body param: Free-form notes about the unit group.
   *
   * Set to `null` to clear.
   */
  notes?: string | null;
}

export interface UnitGroupListParams {
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
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

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
   * Filter by unit dimension (e.g. `mass`).
   */
  type?: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

UnitGroups.Units = Units;

export declare namespace UnitGroups {
  export {
    type CreateUnitGroupRequest as CreateUnitGroupRequest,
    type CreateUnitGroupUnitParam as CreateUnitGroupUnitParam,
    type ListUnitGroup as ListUnitGroup,
    type UpdateUnitGroupRequest as UpdateUnitGroupRequest,
    type UnitGroupDeleteResponse as UnitGroupDeleteResponse,
    type UnitGroupCreateParams as UnitGroupCreateParams,
    type UnitGroupRetrieveParams as UnitGroupRetrieveParams,
    type UnitGroupUpdateParams as UnitGroupUpdateParams,
    type UnitGroupListParams as UnitGroupListParams,
  };

  export {
    Units as Units,
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
