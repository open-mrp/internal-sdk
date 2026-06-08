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
   *     { unit_id: 'un_01966263f74a5a0cae356000a1' },
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
 * CreateUnitGroupRequest is a request to create a unit group.
 */
export interface CreateUnitGroupRequest {
  /**
   * Base unit ID.
   */
  base_unit_id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Unit type.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Associated units to create with the group.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Notes.
   */
  notes?: string;
}

/**
 * CreateUnitGroupUnitParam contains parameters for an associated unit.
 */
export interface CreateUnitGroupUnitParam {
  /**
   * Unit ID.
   */
  unit_id: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Discount percentage.
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
 * UpdateUnitGroupRequest is a request to partially update a unit group.
 */
export interface UpdateUnitGroupRequest {
  /**
   * Upserts associated units when provided. Existing units not in the list are
   * preserved.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Base unit ID.
   */
  base_unit_id?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Notes. Set to null to clear.
   */
  notes?: string | null;
}

export interface UnitGroupDeleteResponse {}

export interface UnitGroupCreateParams {
  /**
   * Body param: Base unit ID.
   */
  base_unit_id: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Unit type.
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
   * Body param: Notes.
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
   * Body param: Upserts associated units when provided. Existing units not in the
   * list are preserved.
   */
  associated_units?: Array<CreateUnitGroupUnitParam>;

  /**
   * Body param: Base unit ID.
   */
  base_unit_id?: string;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Notes. Set to null to clear.
   */
  notes?: string | null;
}

export interface UnitGroupListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'base_unit' | 'associated_units'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by the unit type.
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
