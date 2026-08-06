// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionBulkUpsertParams,
  ActionExportParams,
  Actions,
  BulkUpsertPropertiesRequest,
  ExportPropertiesRequest,
  UpsertPropertyAttributeInput,
  UpsertPropertyInput,
} from './actions';
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
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a property.
   *
   * The property starts with no attributes; add its selectable values afterwards
   * with the create attribute endpoint. Returns a conflict error if a property with
   * the same name already exists.
   *
   * This endpoint requires the permission: `properties:create`.
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
   * This endpoint requires the permission: `properties:read`.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.retrieve(
   *   'pp_fhnnvtt3q3ov',
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
   * This endpoint requires the permission: `properties:update`.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.update(
   *   'pp_fhnnvtt3q3ov',
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
   * Properties come back newest first. The `q` search term is matched against the
   * property name.
   *
   * This endpoint requires the permission: `properties:read`.
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
   * Deletes a property and every attribute defined under it.
   *
   * Items previously classified by those attributes lose that classification.
   *
   * This endpoint requires the permission: `properties:delete`.
   *
   * @example
   * ```ts
   * const property = await client.catalog.properties.delete(
   *   'pp_fhnnvtt3q3ov',
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
   * Display name of the property, such as `Color` or `Size`.
   *
   * Must be unique within your account.
   */
  name: string;
}

/**
 * Request to update a property.
 */
export interface UpdatePropertyRequest {
  /**
   * Display name of the property, such as `Color` or `Size`.
   *
   * Must be unique within your account.
   */
  name?: string;
}

export interface PropertyDeleteResponse {}

export interface PropertyCreateParams {
  /**
   * Body param: Display name of the property, such as `Color` or `Size`.
   *
   * Must be unique within your account.
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
   * Body param: Display name of the property, such as `Color` or `Size`.
   *
   * Must be unique within your account.
   */
  name?: string;
}

export interface PropertyListParams {
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
  include?: Array<'attributes'>;

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
}

Properties.Attributes = Attributes;
Properties.Actions = Actions;

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

  export {
    Actions as Actions,
    type BulkUpsertPropertiesRequest as BulkUpsertPropertiesRequest,
    type ExportPropertiesRequest as ExportPropertiesRequest,
    type UpsertPropertyAttributeInput as UpsertPropertyAttributeInput,
    type UpsertPropertyInput as UpsertPropertyInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
