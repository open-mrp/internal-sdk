// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AttributesAPI from './attributes';
import {
  Attribute,
  AttributeCreateParams,
  AttributeDeleteParams,
  AttributeDeleteResponse,
  AttributeListParams,
  AttributeRetrieveParams,
  AttributeUpdateParams,
  Attributes,
  ListAttribute,
} from './attributes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage properties and their attributes.
 */
export class Properties extends APIResource {
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);

  /**
   * Creates a property.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.create({
   *   name: 'Color',
   * });
   * ```
   */
  create(params: PropertyCreateParams, options?: RequestOptions): APIPromise<Property> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/properties', { query: { include }, body, ...options });
  }

  /**
   * Returns a property by ID.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.retrieve(
   *   'pp_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PropertyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Property> {
    return this._client.get(path`/v1/catalog/properties/${id}`, { query, ...options });
  }

  /**
   * Partially updates a property.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.update(
   *   '',
   *   { name: 'Size' },
   * );
   * ```
   */
  update(
    id: string,
    params: PropertyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Property> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/properties/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of properties for the target account.
   *
   * @example
   * ```ts
   * const listProperty = await client.catalog.properties.list();
   * ```
   */
  list(
    query: PropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProperty> {
    return this._client.get('/v1/catalog/properties', { query, ...options });
  }

  /**
   * Deletes a property and all associated attributes.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.delete(
   *   'pp_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PropertyDeleteResponse> {
    return this._client.delete(path`/v1/catalog/properties/${id}`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProperty {
  /**
   * Resources in this page.
   */
  data: Array<Property>;

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
 * Property that groups attributes.
 */
export interface Property {
  /**
   * Property ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: AttributesAPI.ListAttribute | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'property';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

export interface PropertyDeleteResponse {}

export interface PropertyCreateParams {
  /**
   * Body param: Name.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'attributes'>;
}

export interface PropertyRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'attributes'>;
}

export interface PropertyUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'attributes'>;

  /**
   * Body param: Name.
   */
  name?: string;
}

export interface PropertyListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'attributes'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

Properties.Attributes = Attributes;

export declare namespace Properties {
  export {
    type ListProperty as ListProperty,
    type Property as Property,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };

  export {
    Attributes as Attributes,
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
