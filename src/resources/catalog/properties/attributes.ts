// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as PropertiesAPI from './properties';
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
   *     'property_id',
   *     {
   *       sort_order: 1,
   *       value: 'Red',
   *       color: 'red',
   *     },
   *   );
   * ```
   */
  create(propertyID: string, body: AttributeCreateParams, options?: RequestOptions): APIPromise<Attribute> {
    return this._client.post(path`/v1/catalog/properties/${propertyID}/attributes`, { body, ...options });
  }

  /**
   * Returns an attribute by ID within a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.retrieve(
   *     'id',
   *     { property_id: 'property_id' },
   *   );
   * ```
   */
  retrieve(id: string, params: AttributeRetrieveParams, options?: RequestOptions): APIPromise<Attribute> {
    const { property_id } = params;
    return this._client.get(path`/v1/catalog/properties/${property_id}/attributes/${id}`, options);
  }

  /**
   * Partially updates an attribute.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.update('id', {
   *     property_id: 'property_id',
   *     value: 'Blue',
   *   });
   * ```
   */
  update(id: string, params: AttributeUpdateParams, options?: RequestOptions): APIPromise<Attribute> {
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
   *     'property_id',
   *   );
   * ```
   */
  list(
    propertyID: string,
    query: AttributeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAttribute> {
    return this._client.get(path`/v1/catalog/properties/${propertyID}/attributes`, { query, ...options });
  }

  /**
   * Deletes an attribute from a property.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.delete('id', {
   *     property_id: 'property_id',
   *   });
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
 * Value option within a property.
 */
export interface Attribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Color code.
   */
  color: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attribute';

  /**
   * Property that groups attributes.
   */
  property: PropertiesAPI.Property | null;

  /**
   * Display order.
   */
  sort_order: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Attribute value.
   */
  value: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAttribute {
  /**
   * Resources in this page.
   */
  data: Array<Attribute>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface AttributeDeleteResponse {}

export interface AttributeCreateParams {
  /**
   * Display order. Defaults to last position if not provided.
   */
  sort_order: number | null;

  /**
   * Attribute value.
   */
  value: string;

  /**
   * Color code. Randomly assigned if not provided.
   */
  color?:
    | 'blue'
    | 'brown'
    | 'default'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'yellow'
    | null;
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
    type Attribute as Attribute,
    type ListAttribute as ListAttribute,
    type AttributeDeleteResponse as AttributeDeleteResponse,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeRetrieveParams as AttributeRetrieveParams,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeListParams as AttributeListParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
