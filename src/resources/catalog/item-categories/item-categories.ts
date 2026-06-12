// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesAPI from '../../sales/account-prices';
import * as PropertiesAPI from './properties';
import {
  Properties,
  PropertyDeleteParams,
  PropertyDeleteResponse,
  PropertyUpdateParams,
  PropertyUpdateResponse,
} from './properties';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage item categories.
 */
export class ItemCategories extends APIResource {
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);

  /**
   * Creates an account-owned item category.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.create({
   *     name: 'Electronics',
   *     type: 'material_category',
   *     unit_group_id: 'ug_01aad07abb8e41fd392d2d7013',
   *   });
   * ```
   */
  create(
    params: ItemCategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ItemCategory> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/item-categories', { query: { include }, body, ...options });
  }

  /**
   * Returns an item category by ID.
   *
   * Both account-owned categories and global system categories can be retrieved.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.retrieve(
   *     'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ItemCategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ItemCategory> {
    return this._client.get(path`/v1/catalog/item-categories/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account-owned item category.
   *
   * Only the fields provided in the request body are changed. Default system
   * categories cannot be updated.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.update(
   *     'ic_01ae7bd7bfd21ca0ab81e1357e',
   *     { name: 'Electronic Components' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ItemCategoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ItemCategory> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/item-categories/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of item categories for the current account, including
   * account-specific and global system categories.
   *
   * @example
   * ```ts
   * const listItemCategory =
   *   await client.catalog.itemCategories.list();
   * ```
   */
  list(
    query: ItemCategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountPricesAPI.ListItemCategory> {
    return this._client.get('/v1/catalog/item-categories', { query, ...options });
  }

  /**
   * Deletes an account-owned item category.
   *
   * Default system categories cannot be deleted.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.delete(
   *     'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ItemCategoryDeleteResponse> {
    return this._client.delete(path`/v1/catalog/item-categories/${id}`, options);
  }

  /**
   * Changes the unit group associated with an item category.
   *
   * The new unit group must have the same unit type as the current one — for
   * example, a category measured in `mass` units can only switch to another `mass`
   * unit group. Default system categories cannot be modified.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.itemCategories.changeUnitGroup(
   *     'ug_01aad07abb8e41fd392d2d7013',
   *     { id: 'ic_01ae7bd7bfd21ca0ab81e1357e' },
   *   );
   * ```
   */
  changeUnitGroup(
    unitGroupID: string,
    params: ItemCategoryChangeUnitGroupParams,
    options?: RequestOptions,
  ): APIPromise<ItemCategoryChangeUnitGroupResponse> {
    const { id } = params;
    return this._client.put(path`/v1/catalog/item-categories/${id}/unit-groups/${unitGroupID}`, options);
  }
}

/**
 * Request to create an item category.
 */
export interface CreateItemCategoryRequest {
  /**
   * Display name of the item category.
   */
  name: string;

  /**
   * What kind of items this category groups.
   *
   * - `material_category`: groups raw materials and components (items of type
   *   `material`).
   * - `product_category`: groups finished products and parts (items of type
   *   `product` or `part`).
   */
  type: 'material_category' | 'product_category';

  /**
   * ID of the unit group that determines the units of measure available to items in
   * this category.
   *
   * After creation, the unit group can only be replaced by another unit group of the
   * same unit type via the Change Item Category Unit Group endpoint.
   */
  unit_group_id: string;
}

/**
 * Request to partially update an item category.
 */
export interface UpdateItemCategoryRequest {
  /**
   * Display name of the item category.
   */
  name?: string;

  /**
   * Free-form notes about the item category.
   */
  notes?: string;
}

export interface ItemCategoryDeleteResponse {}

export interface ItemCategoryChangeUnitGroupResponse {}

export interface ItemCategoryCreateParams {
  /**
   * Body param: Display name of the item category.
   */
  name: string;

  /**
   * Body param: What kind of items this category groups.
   *
   * - `material_category`: groups raw materials and components (items of type
   *   `material`).
   * - `product_category`: groups finished products and parts (items of type
   *   `product` or `part`).
   */
  type: 'material_category' | 'product_category';

  /**
   * Body param: ID of the unit group that determines the units of measure available
   * to items in this category.
   *
   * After creation, the unit group can only be replaced by another unit group of the
   * same unit type via the Change Item Category Unit Group endpoint.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'owner'
    | 'owner.account'
    | 'properties'
    | 'unit_group'
    | 'unit_group.base_unit'
    | 'unit_group.associated_units'
    | 'unit_group.associated_units.unit'
  >;
}

export interface ItemCategoryRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'owner'
    | 'owner.account'
    | 'properties'
    | 'unit_group'
    | 'unit_group.base_unit'
    | 'unit_group.associated_units'
    | 'unit_group.associated_units.unit'
  >;
}

export interface ItemCategoryUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'owner'
    | 'owner.account'
    | 'properties'
    | 'unit_group'
    | 'unit_group.base_unit'
    | 'unit_group.associated_units'
    | 'unit_group.associated_units.unit'
  >;

  /**
   * Body param: Display name of the item category.
   */
  name?: string;

  /**
   * Body param: Free-form notes about the item category.
   */
  notes?: string;
}

export interface ItemCategoryListParams {
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
  include?: Array<
    | 'owner'
    | 'owner.account'
    | 'properties'
    | 'unit_group'
    | 'unit_group.base_unit'
    | 'unit_group.associated_units'
    | 'unit_group.associated_units.unit'
  >;

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
   * Filter by item category type.
   */
  type?: 'material_category' | 'product_category';
}

export interface ItemCategoryChangeUnitGroupParams {
  /**
   * Item category ID.
   */
  id: string;
}

ItemCategories.Properties = Properties;

export declare namespace ItemCategories {
  export {
    type CreateItemCategoryRequest as CreateItemCategoryRequest,
    type UpdateItemCategoryRequest as UpdateItemCategoryRequest,
    type ItemCategoryDeleteResponse as ItemCategoryDeleteResponse,
    type ItemCategoryChangeUnitGroupResponse as ItemCategoryChangeUnitGroupResponse,
    type ItemCategoryCreateParams as ItemCategoryCreateParams,
    type ItemCategoryRetrieveParams as ItemCategoryRetrieveParams,
    type ItemCategoryUpdateParams as ItemCategoryUpdateParams,
    type ItemCategoryListParams as ItemCategoryListParams,
    type ItemCategoryChangeUnitGroupParams as ItemCategoryChangeUnitGroupParams,
  };

  export {
    Properties as Properties,
    type PropertyUpdateResponse as PropertyUpdateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };
}
