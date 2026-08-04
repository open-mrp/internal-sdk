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
   * An attribute is one selectable value of the property, such as `Red` under
   * `Color`, and can then be assigned to items. Returns a conflict error if another
   * attribute in the account already uses the same value.
   *
   * This endpoint requires the permission: `properties:create`.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.create(
   *     'pp_fhnnvtt3q3ov',
   *     {
   *       value: 'Red',
   *       color: 'red',
   *       sort_order: 1,
   *     },
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
   * This endpoint requires the permission: `properties:read`.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.retrieve(
   *     'at_rf1w295jt5ia',
   *     { property_id: 'pp_fhnnvtt3q3ov' },
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
   * Items reference attributes by ID, so changing the value renames the attribute
   * everywhere it is already assigned.
   *
   * This endpoint requires the permission: `properties:update`.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.update(
   *     'at_rf1w295jt5ia',
   *     {
   *       property_id: 'pp_fhnnvtt3q3ov',
   *       color: 'blue',
   *       sort_order: 2,
   *       value: 'Blue',
   *     },
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
   * Attributes come back in the order they are arranged within the property, first
   * to last. The `q` search term is matched against the attribute value.
   *
   * This endpoint requires the permission: `properties:read`.
   *
   * @example
   * ```ts
   * const listAttribute =
   *   await client.catalog.properties.attributes.list(
   *     'pp_fhnnvtt3q3ov',
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
   * Remaining attributes in the property are shifted so their sort orders stay
   * contiguous.
   *
   * This endpoint requires the permission: `properties:delete`.
   *
   * @example
   * ```ts
   * const attribute =
   *   await client.catalog.properties.attributes.delete(
   *     'at_rf1w295jt5ia',
   *     { property_id: 'pp_fhnnvtt3q3ov' },
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
   * The selectable value this attribute represents, such as `Red`.
   *
   * Must be unique across all attributes in the account, not just within the
   * property. Leading and trailing whitespace is trimmed.
   */
  value: string;

  /**
   * Swatch color used to display this attribute in the UI.
   *
   * When omitted, one of the nine named colors (everything except `default`) is
   * assigned at random.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Position of the new attribute relative to its siblings within the property,
   * starting at `1`.
   *
   * Must be at most the property's current attribute count plus one; siblings at or
   * after this position are shifted one position later. Defaults to the last
   * position if not provided.
   */
  sort_order?: number;
}

/**
 * Request to update an attribute.
 */
export interface UpdateAttributeRequest {
  /**
   * Swatch color used to display this attribute in the UI.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * New position of this attribute relative to its siblings within the property,
   * starting at `1`.
   *
   * Must be at most the property's current attribute count; the attributes between
   * the old and new positions shift to make room.
   */
  sort_order?: number;

  /**
   * The selectable value this attribute represents, such as `Red`.
   *
   * Must be non-blank and unique across all attributes in the account, not just
   * within the property.
   */
  value?: string;
}

export interface AttributeDeleteResponse {}

export interface AttributeCreateParams {
  /**
   * The selectable value this attribute represents, such as `Red`.
   *
   * Must be unique across all attributes in the account, not just within the
   * property. Leading and trailing whitespace is trimmed.
   */
  value: string;

  /**
   * Swatch color used to display this attribute in the UI.
   *
   * When omitted, one of the nine named colors (everything except `default`) is
   * assigned at random.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Position of the new attribute relative to its siblings within the property,
   * starting at `1`.
   *
   * Must be at most the property's current attribute count plus one; siblings at or
   * after this position are shifted one position later. Defaults to the last
   * position if not provided.
   */
  sort_order?: number;
}

export interface AttributeRetrieveParams {
  /**
   * The property the attribute belongs to.
   */
  property_id: string;
}

export interface AttributeUpdateParams {
  /**
   * Path param: The property the attribute belongs to.
   */
  property_id: string;

  /**
   * Body param: Swatch color used to display this attribute in the UI.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Body param: New position of this attribute relative to its siblings within the
   * property, starting at `1`.
   *
   * Must be at most the property's current attribute count; the attributes between
   * the old and new positions shift to make room.
   */
  sort_order?: number;

  /**
   * Body param: The selectable value this attribute represents, such as `Red`.
   *
   * Must be non-blank and unique across all attributes in the account, not just
   * within the property.
   */
  value?: string;
}

export interface AttributeListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

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

export interface AttributeDeleteParams {
  /**
   * The property the attribute belongs to.
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
