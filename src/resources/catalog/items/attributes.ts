// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Attributes extends APIResource {
  /**
   * Adds an attribute to an item and returns the updated item.
   *
   * If the attribute is already associated with the item, this is a no-op.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.attributes.update(
   *   'at_01c9493ec0c46bb0ed12708ae4',
   *   { id: 'it_0131e386ac683e8c29a71f6f1f' },
   * );
   * ```
   */
  update(
    attributeID: string,
    params: AttributeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Item> {
    const { id, include } = params;
    return this._client.put(path`/v1/catalog/items/${id}/attributes/${attributeID}`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Removes an attribute from an item.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.attributes.delete(
   *   'at_01c9493ec0c46bb0ed12708ae4',
   *   { id: 'it_0131e386ac683e8c29a71f6f1f' },
   * );
   * ```
   */
  delete(
    attributeID: string,
    params: AttributeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Item> {
    const { id, include } = params;
    return this._client.delete(path`/v1/catalog/items/${id}/attributes/${attributeID}`, {
      query: { include },
      ...options,
    });
  }
}

export interface AttributeUpdateParams {
  /**
   * Path param: Item ID.
   */
  id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;
}

export interface AttributeDeleteParams {
  /**
   * Path param: Item ID.
   */
  id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;
}

export declare namespace Attributes {
  export {
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
