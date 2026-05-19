// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as CatalogUnitsAPI from '../units/units';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage unit groups and their associated units.
 */
export class Units extends APIResource {
  /**
   * Creates an associated unit within a unit group.
   *
   * @example
   * ```ts
   * const unitGroupUnit =
   *   await client.catalog.unitGroups.units.create('', {
   *     unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     customer_portal_visibility: 'visible',
   *     discount_percentage: 1,
   *   });
   * ```
   */
  create(unitGroupID: string, params: UnitCreateParams, options?: RequestOptions): APIPromise<UnitGroupUnit> {
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
   *     'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp' },
   *   );
   * ```
   */
  retrieve(id: string, params: UnitRetrieveParams, options?: RequestOptions): APIPromise<UnitGroupUnit> {
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
   *   await client.catalog.unitGroups.units.update('', {
   *     unit_group_id: '',
   *     discount_percentage: 0.9,
   *     unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  update(id: string, params: UnitUpdateParams, options?: RequestOptions): APIPromise<UnitGroupUnit> {
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
   *     'ug_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  list(
    unitGroupID: string,
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUnitGroupUnit> {
    return this._client.get(path`/v1/catalog/unit-groups/${unitGroupID}/units`, { query, ...options });
  }

  /**
   * Deletes an associated unit from a unit group.
   *
   * @example
   * ```ts
   * const unit = await client.catalog.unitGroups.units.delete(
   *   'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   { unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp' },
   * );
   * ```
   */
  delete(id: string, params: UnitDeleteParams, options?: RequestOptions): APIPromise<UnitDeleteResponse> {
    const { unit_group_id } = params;
    return this._client.delete(path`/v1/catalog/unit-groups/${unit_group_id}/units/${id}`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListUnitGroupUnit {
  /**
   * Resources in this page.
   */
  data: Array<UnitGroupUnit>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * UnitGroupUnit is an associated unit within a unit group.
 */
export interface UnitGroupUnit {
  /**
   * Unit group unit ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Fixed discount amount.
   */
  discount_fixed: number;

  /**
   * Discount percentage.
   */
  discount_percentage: number;

  /**
   * Resource type identifier.
   */
  object: 'unit_group_unit';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: CatalogUnitsAPI.Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface UnitDeleteResponse {}

export interface UnitCreateParams {
  /**
   * Body param: Unit ID.
   */
  unit_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'unit'>;

  /**
   * Body param: Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Body param: Discount percentage.
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
   * Body param: Customer portal visibility.
   */
  customer_portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Fixed discount amount.
   */
  discount_fixed?: number;

  /**
   * Body param: Discount percentage.
   */
  discount_percentage?: number;

  /**
   * Body param: Unit ID.
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
