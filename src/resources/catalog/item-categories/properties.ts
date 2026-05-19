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
   * Adds a property to an item category. Default system categories cannot be
   * modified.
   *
   * @example
   * ```ts
   * const property =
   *   await client.catalog.itemCategories.properties.update(
   *     'pp_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp' },
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
   * Removes a property from an item category. Default system categories cannot be
   * modified.
   *
   * @example
   * ```ts
   * const property =
   *   await client.catalog.itemCategories.properties.delete(
   *     'pp_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp' },
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
