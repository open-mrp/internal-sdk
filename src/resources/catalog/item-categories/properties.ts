// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage item categories.
 */
export class Properties extends APIResource {
  /**
   * Attaches one of your account's properties to an item category.
   *
   * The property then appears among the category's properties, including in the
   * customer-facing catalog, describing a dimension along which the category's items
   * vary. Each property name can appear only once per category, so attaching a
   * property whose name duplicates one already there returns a conflict error.
   *
   * This endpoint requires the permission: `item_categories:update`.
   *
   * @example
   * ```ts
   * const property =
   *   await client.catalog.itemCategories.properties.update(
   *     'pp_fhnnvtt3q3ov',
   *     { id: 'ic_d06g9c6yc9ck' },
   *   );
   * ```
   */
  update(
    propertyID: string,
    params: PropertyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyUpdateResponse> {
    const { id } = params;
    return this._client.put(path`/v1/catalog/item-categories/${id}/properties/${propertyID}`, options);
  }

  /**
   * Detaches a property from an item category.
   *
   * Only the link between the property and the category is removed; the property
   * itself and its attributes are left intact and stay available to other
   * categories. The property must belong to your account.
   *
   * This endpoint requires the permission: `item_categories:update`.
   *
   * @example
   * ```ts
   * const property =
   *   await client.catalog.itemCategories.properties.delete(
   *     'pp_fhnnvtt3q3ov',
   *     { id: 'ic_d06g9c6yc9ck' },
   *   );
   * ```
   */
  delete(
    propertyID: string,
    params: PropertyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PropertyDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/catalog/item-categories/${id}/properties/${propertyID}`, options);
  }
}

export interface PropertyUpdateResponse {}

export interface PropertyDeleteResponse {}

export interface PropertyUpdateParams {
  /**
   * Item category ID.
   */
  id: string;
}

export interface PropertyDeleteParams {
  /**
   * Item category ID.
   */
  id: string;
}

export declare namespace Properties {
  export {
    type PropertyUpdateResponse as PropertyUpdateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };
}
