// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ItemCategoriesAPI from '../item-categories/item-categories';
import * as UnitsAPI from './units';
import {
  ListUnitGroupUnit,
  UnitCreateParams,
  UnitDeleteParams,
  UnitDeleteResponse,
  UnitGroupUnit,
  UnitListParams,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
} from './units';
import * as CatalogUnitsAPI from '../units/units';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage unit groups and their associated units.
 */
export class UnitGroups extends APIResource {
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);

  /**
   * Returns a unit group by ID.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: UnitGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitGroup> {
    return this._client.get(path`/v1/catalog/unit-groups/${id}`, { query, ...options });
  }

  /**
   * Partially updates a unit group. System unit groups cannot be updated.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.update(
   *   'id',
   *   {
   *     base_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     name: 'Weight Units (Updated)',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: UnitGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitGroup> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/unit-groups/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Deletes a unit group and all associated unit conversions. System unit groups
   * cannot be deleted.
   *
   * @example
   * ```ts
   * const unitGroup = await client.catalog.unitGroups.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<UnitGroupDeleteResponse> {
    return this._client.delete(path`/v1/catalog/unit-groups/${id}`, options);
  }

  /**
   * Returns a paginated list of unit groups, including system unit groups.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.unitGroups.retrieveUnitGroups();
   * ```
   */
  retrieveUnitGroups(
    query: UnitGroupRetrieveUnitGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitGroupRetrieveUnitGroupsResponse> {
    return this._client.get('/v1/catalog/unit-groups', { query, ...options });
  }

  /**
   * Creates a unit group with optional associated units.
   *
   * @example
   * ```ts
   * const unitGroup =
   *   await client.catalog.unitGroups.unitGroups({
   *     associated_units: [
   *       {
   *         unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *         discount_percentage: 1,
   *         discount_fixed: 0,
   *         customer_portal_visibility: 'visible',
   *       },
   *     ],
   *     base_unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     name: 'Weight Units',
   *     type: 'mass',
   *   });
   * ```
   */
  unitGroups(params: UnitGroupUnitGroupsParams, options?: RequestOptions): APIPromise<UnitGroup> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/unit-groups', { query: { include }, body, ...options });
  }
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
 * UnitGroup is a unit group resource.
 */
export interface UnitGroup {
  /**
   * Unit group ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  associated_units: UnitsAPI.ListUnitGroupUnit | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  base_unit: CatalogUnitsAPI.Unit | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'unit_group';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Unit type.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface UnitGroupDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface UnitGroupRetrieveUnitGroupsResponse {
  /**
   * Resources in this page.
   */
  data: Array<UnitGroup>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
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

export interface UnitGroupRetrieveUnitGroupsParams {
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

export interface UnitGroupUnitGroupsParams {
  /**
   * Body param: Associated units to create with the group.
   */
  associated_units: Array<CreateUnitGroupUnitParam>;

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
   * Body param: Notes.
   */
  notes?: string;
}

UnitGroups.Units = Units;

export declare namespace UnitGroups {
  export {
    type CreateUnitGroupUnitParam as CreateUnitGroupUnitParam,
    type UnitGroup as UnitGroup,
    type UnitGroupDeleteResponse as UnitGroupDeleteResponse,
    type UnitGroupRetrieveUnitGroupsResponse as UnitGroupRetrieveUnitGroupsResponse,
    type UnitGroupRetrieveParams as UnitGroupRetrieveParams,
    type UnitGroupUpdateParams as UnitGroupUpdateParams,
    type UnitGroupRetrieveUnitGroupsParams as UnitGroupRetrieveUnitGroupsParams,
    type UnitGroupUnitGroupsParams as UnitGroupUnitGroupsParams,
  };

  export {
    Units as Units,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type UnitGroupUnit as UnitGroupUnit,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
    type UnitDeleteParams as UnitDeleteParams,
  };
}
