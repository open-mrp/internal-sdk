// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage properties and their attributes.
 */
export class Attributes extends APIResource {
  /**
   * Creates an attribute under a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.create(
   *     'pp_01e21344878064372f69e67093',
   *     { value: 'Red' },
   *   );
   * ```
   */
  create(
    propertyID: string,
    body: AttributeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Attribute> {
    return this._client.post(path`/v1/catalog/properties/${propertyID}/attributes`, { body, ...options });
  }

  /**
   * Returns an attribute by ID within a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.retrieve(
   *     'at_01c9493ec0c46bb0ed12708ae4',
   *     { property_id: 'pp_01e21344878064372f69e67093' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: AttributeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Attribute> {
    const { property_id } = params;
    return this._client.get(path`/v1/catalog/properties/${property_id}/attributes/${id}`, options);
  }

  /**
   * Partially updates an attribute.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.update(
   *     'at_01c9493ec0c46bb0ed12708ae4',
   *     { property_id: 'pp_01e21344878064372f69e67093' },
   *   );
   * ```
   */
  update(
    id: string,
    params: AttributeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Attribute> {
    const { property_id, ...body } = params;
    return this._client.patch(path`/v1/catalog/properties/${property_id}/attributes/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of attributes for a property.
   *
   * @example
   * ```ts
   * const listAttribute =
   *   await client.catalog.properties.attributes.list(
   *     'pp_01e21344878064372f69e67093',
   *   );
   * ```
   */
  list(
    propertyID: string,
    query: AttributeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ListAttribute> {
    return this._client.get(path`/v1/catalog/properties/${propertyID}/attributes`, { query, ...options });
  }

  /**
   * Deletes an attribute from a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.delete(
   *     'at_01c9493ec0c46bb0ed12708ae4',
   *     { property_id: 'pp_01e21344878064372f69e67093' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: AttributeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AttributeDeleteResponse> {
    const { property_id } = params;
    return this._client.delete(path`/v1/catalog/properties/${property_id}/attributes/${id}`, options);
  }
}

/**
 * Request to create an attribute.
 */
export interface CreateAttributeRequest {
  /**
   * Attribute value.
   */
  value: string;

  /**
   * Color code. Randomly assigned if not provided.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Display order. Defaults to last position if not provided.
   */
  sort_order?: number;
}

/**
 * Request to update an attribute.
 */
export interface UpdateAttributeRequest {
  /**
   * Color code.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Display order. Must be a positive integer.
   */
  sort_order?: number;

  /**
   * Attribute value.
   */
  value?: string;
}

export interface AttributeDeleteResponse {}

export interface AttributeCreateParams {
  /**
   * Attribute value.
   */
  value: string;

  /**
   * Color code. Randomly assigned if not provided.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Display order. Defaults to last position if not provided.
   */
  sort_order?: number;
}

export interface AttributeRetrieveParams {
  /**
   * Property ID.
   */
  property_id: string;
}

export interface AttributeUpdateParams {
  /**
   * Path param: Property ID.
   */
  property_id: string;

  /**
   * Body param: Color code.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Body param: Display order. Must be a positive integer.
   */
  sort_order?: number;

  /**
   * Body param: Attribute value.
   */
  value?: string;
}

export interface AttributeListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface AttributeDeleteParams {
  /**
   * Property ID.
   */
  property_id: string;
}

export declare namespace Attributes {
  export {
    type CreateAttributeRequest as CreateAttributeRequest,
    type UpdateAttributeRequest as UpdateAttributeRequest,
    type AttributeDeleteResponse as AttributeDeleteResponse,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeRetrieveParams as AttributeRetrieveParams,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeListParams as AttributeListParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
