// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AccountsAPI from '../../identity/accounts';
import * as PropertiesAPI from './properties';
import {
  Properties,
  PropertyDeleteParams,
  PropertyDeleteResponse,
  PropertyUpdateParams,
  PropertyUpdateResponse,
} from './properties';
import * as CatalogPropertiesAPI from '../properties/properties';
import * as UnitGroupsAPI from '../unit-groups/unit-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage item categories.
 */
export class ItemCategories extends APIResource {
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);

  /**
   * Returns an item category by ID. Includes account-specific and global system
   * categories.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ItemCategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemCategory> {
    return this._client.get(path`/v1/catalog/item-categories/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account-owned item category. Default system categories
   * cannot be updated.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.update('id', {
   *     name: 'Electronic Components',
   *   });
   * ```
   */
  update(
    id: string,
    params: ItemCategoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemCategory> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/item-categories/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes an account-owned item category. Default system categories cannot be
   * deleted.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ItemCategoryDeleteResponse> {
    return this._client.delete(path`/v1/catalog/item-categories/${id}`, options);
  }

  /**
   * Creates an account-owned item category.
   *
   * @example
   * ```ts
   * const itemCategory =
   *   await client.catalog.itemCategories.itemCategories({
   *     name: 'Electronics',
   *     type: 'material_category',
   *     unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  itemCategories(
    params: ItemCategoryItemCategoriesParams,
    options?: RequestOptions,
  ): APIPromise<ItemCategory> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/item-categories', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of item categories for the current account, including
   * account-specific and global system categories.
   *
   * @example
   * ```ts
   * const listItemCategory =
   *   await client.catalog.itemCategories.retrieveItemCategories();
   * ```
   */
  retrieveItemCategories(
    query: ItemCategoryRetrieveItemCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListItemCategory> {
    return this._client.get('/v1/catalog/item-categories', { query, ...options });
  }
}

/**
 * ItemCategory resource.
 */
export interface ItemCategory {
  /**
   * Item category ID.
   */
  id: string;

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
  object: 'item_category';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  properties: CatalogPropertiesAPI.ListProperty | null;

  /**
   * Item category type.
   */
  type: 'material_category' | 'product_category';

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: UnitGroupsAPI.UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListItemCategory {
  /**
   * Resources in this page.
   */
  data: Array<ItemCategory>;

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
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: AccountsAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
}

export interface ItemCategoryDeleteResponse {}

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
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Notes.
   */
  notes?: string;
}

export interface ItemCategoryItemCategoriesParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Item category type. Material categories are used to group materials,
   * while product categories are used to group products and parts.
   */
  type: 'material_category' | 'product_category';

  /**
   * Body param: Unit group ID.
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

export interface ItemCategoryRetrieveItemCategoriesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
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
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by item category type.
   */
  type?: 'material_category' | 'product_category';
}

ItemCategories.Properties = Properties;

export declare namespace ItemCategories {
  export {
    type ItemCategory as ItemCategory,
    type ListItemCategory as ListItemCategory,
    type Owner as Owner,
    type ItemCategoryDeleteResponse as ItemCategoryDeleteResponse,
    type ItemCategoryRetrieveParams as ItemCategoryRetrieveParams,
    type ItemCategoryUpdateParams as ItemCategoryUpdateParams,
    type ItemCategoryItemCategoriesParams as ItemCategoryItemCategoriesParams,
    type ItemCategoryRetrieveItemCategoriesParams as ItemCategoryRetrieveItemCategoriesParams,
  };

  export {
    Properties as Properties,
    type PropertyUpdateResponse as PropertyUpdateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };
}
