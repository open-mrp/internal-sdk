// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionBulkUpsertParams,
  ActionExportParams,
  Actions,
  BulkUpsertUnitGroupsRequest,
  ExportUnitGroupsRequest,
  UnitIdentifier,
  UpsertUnitGroupConversionInput,
  UpsertUnitGroupInput,
} from './actions';
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
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a unit group, optionally associating units with it in the same request.
   *
   * The name must be unique within the account, and the base unit and every
   * associated unit must share the group's dimension.
   *
   * This endpoint requires the permission: `unit_groups:create`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.create({
   *   base_unit_id: 'un_82bd37dae5po',
   *   name: 'Weight Units',
   *   type: 'mass',
   *   associated_units: [
   *     {
   *       unit_id: 'un_82bd37dae5po',
   *       discount_percentage: 1,
   *       discount_fixed: 0,
   *       customer_portal_visibility: 'visible',
   *     },
   *   ],
   *   notes:
   *     'Used for raw-material weight tracking across the warehouse.',
   * });
   * ```
   */
  create(params: UnitGroupCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.UnitGroup> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/unit-groups', { query: { include }, body, ...options });
  }

  /**
   * Returns a unit group by ID, including the system unit groups shared across all
   * accounts.
   *
   * This endpoint requires the permission: `unit_groups:read`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.retrieve(
   *   'ug_andst6m79n41',
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
   * Partially updates a unit group.
   *
   * System unit groups cannot be modified, and a group's dimension is fixed once it
   * is created.
   *
   * This endpoint requires the permission: `unit_groups:update`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.update(
   *   'ug_andst6m79n41',
   *   {
   *     associated_units: [
   *       {
   *         unit_id: 'un_82bd37dae5po',
   *         discount_percentage: 1,
   *         discount_fixed: 0,
   *         customer_portal_visibility: 'visible',
   *       },
   *     ],
   *     base_unit_id: 'un_82bd37dae5po',
   *     name: 'Weight Units (Updated)',
   *     notes: 'Added kilogram association for metric orders.',
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
   * This endpoint requires the permission: `unit_groups:read`.
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
   * Deletes a unit group along with every unit association it contains.
   *
   * The units themselves are not deleted and remain available to other groups.
   * System unit groups, which are shared across all accounts, cannot be deleted.
   *
   * This endpoint requires the permission: `unit_groups:delete`.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.delete(
   *   'ug_andst6m79n41',
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
   *
   * Must be a unit of the group's `type`.
   */
  base_unit_id: string;

  /**
   * Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * The dimension shared by every unit in this group, such as mass, volume, or
   * currency.
   *
   * The base unit and all associated units must be of this dimension, and the
   * dimension cannot be changed after the group is created.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Units to associate with the group, each with its own discount and customer
   * portal visibility.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to partially update a unit group.
 */
export interface UpdateUnitGroupRequest {
  /**
   * Units to add to the group.
   *
   * Only units that are not already in the group can be listed here; use the
   * associated-unit update and delete endpoints to change or remove an existing
   * association. Associations left out of the list are untouched.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * ID of the unit to designate as the group's reference unit.
   *
   * Must be a unit of the group's dimension, which cannot itself be changed.
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
   *
   * Must be a unit of the group's `type`.
   */
  base_unit_id: string;

  /**
   * Body param: Display name of the unit group.
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Body param: The dimension shared by every unit in this group, such as mass,
   * volume, or currency.
   *
   * The base unit and all associated units must be of this dimension, and the
   * dimension cannot be changed after the group is created.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Body param: Units to associate with the group, each with its own discount and
   * customer portal visibility.
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
   * Body param: Units to add to the group.
   *
   * Only units that are not already in the group can be listed here; use the
   * associated-unit update and delete endpoints to change or remove an existing
   * association. Associations left out of the list are untouched.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Body param: ID of the unit to designate as the group's reference unit.
   *
   * Must be a unit of the group's dimension, which cannot itself be changed.
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
   * Filter by unit dimension.
   */
  type?: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';
}

UnitGroups.Units = Units;
UnitGroups.Actions = Actions;

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

  export {
    Actions as Actions,
    type BulkUpsertUnitGroupsRequest as BulkUpsertUnitGroupsRequest,
    type ExportUnitGroupsRequest as ExportUnitGroupsRequest,
    type UnitIdentifier as UnitIdentifier,
    type UpsertUnitGroupConversionInput as UpsertUnitGroupConversionInput,
    type UpsertUnitGroupInput as UpsertUnitGroupInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
