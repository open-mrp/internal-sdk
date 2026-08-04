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
   * Assigns an attribute to an item and returns the updated item.
   *
   * Adding an attribute the item already carries succeeds and changes nothing, so
   * the call is safe to repeat.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.attributes.update(
   *   'at_rf1w295jt5ia',
   *   { id: 'it_pej07ckhvu62' },
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
   * Unassigns an attribute from an item and returns the updated item.
   *
   * Returns a not-found error if the attribute is not currently assigned to the
   * item, so unlike adding an attribute, this call is not safe to repeat blindly.
   * The attribute itself is not deleted and stays available for other items.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.attributes.delete(
   *   'at_rf1w295jt5ia',
   *   { id: 'it_pej07ckhvu62' },
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
