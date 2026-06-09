// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AttributesAPI from './attributes';
import {
  AttributeCreateParams,
  AttributeDeleteParams,
  AttributeDeleteResponse,
  AttributeListParams,
  AttributeRetrieveParams,
  AttributeUpdateParams,
  Attributes,
  CreateAttributeRequest,
  UpdateAttributeRequest,
} from './attributes';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
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
  create(params: PropertyCreateParams, options?: RequestOptions): APIPromise<AccountUsersAPI.Property> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/properties', { query: { include }, body, ...options });
  }

  /**
   * Returns a property by ID.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.retrieve(
   *   'pp_01e21344878064372f69e67093',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PropertyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Property> {
    return this._client.get(path`/v1/catalog/properties/${id}`, { query, ...options });
  }

  /**
   * Partially updates a property.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.update(
   *   'pp_01e21344878064372f69e67093',
   *   { name: 'Size' },
   * );
   * ```
   */
  update(
    id: string,
    params: PropertyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Property> {
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
  ): APIPromise<AccountUsersAPI.ListProperty> {
    return this._client.get('/v1/catalog/properties', { query, ...options });
  }

  /**
   * Deletes a property and all associated attributes.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.delete(
   *   'pp_01e21344878064372f69e67093',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PropertyDeleteResponse> {
    return this._client.delete(path`/v1/catalog/properties/${id}`, options);
  }
}

/**
 * Request to create a property.
 */
export interface CreatePropertyRequest {
  /**
   * Name.
   */
  name: string;
}

/**
 * Request to update a property.
 */
export interface UpdatePropertyRequest {
  /**
   * Name.
   */
  name?: string;
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
    type CreatePropertyRequest as CreatePropertyRequest,
    type UpdatePropertyRequest as UpdatePropertyRequest,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };

  export {
    Attributes as Attributes,
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
