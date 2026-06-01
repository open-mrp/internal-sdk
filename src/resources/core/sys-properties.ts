// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage system properties (auto-incrementing counters).
 */
export class SysProperties extends APIResource {
  /**
   * Returns a system property by ID.
   *
   * @example
   * ```ts
   * const sysProperty =
   *   await client.core.sysProperties.retrieve(
   *     'sypp_01d8fd3a8b1a8e4c41be55ab5a',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SysProperty> {
    return this._client.get(path`/v1/core/sys-properties/${id}`, options);
  }

  /**
   * Partially updates the value of a system property.
   *
   * @example
   * ```ts
   * const sysProperty = await client.core.sysProperties.update(
   *   'sypp_01d8fd3a8b1a8e4c41be55ab5a',
   *   { value: 30 },
   * );
   * ```
   */
  update(
    id: string,
    body: SysPropertyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SysProperty> {
    return this._client.patch(path`/v1/core/sys-properties/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of system properties for the current account.
   *
   * @example
   * ```ts
   * const listSysProperty =
   *   await client.core.sysProperties.list();
   * ```
   */
  list(
    query: SysPropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSysProperty> {
    return this._client.get('/v1/core/sys-properties', { query, ...options });
  }

  /**
   * Returns the next available counter value for a system property type,
   * initializing it if it does not exist for the account.
   *
   * @example
   * ```ts
   * const sysPropertyValue =
   *   await client.core.sysProperties.retrieveLatestValue(
   *     'example',
   *   );
   * ```
   */
  retrieveLatestValue(typeCode: string, options?: RequestOptions): APIPromise<SysPropertyValue> {
    return this._client.get(path`/v1/core/sys-properties/${typeCode}/latest-value`, options);
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSysProperty {
  /**
   * Resources in this page.
   */
  data: Array<SysProperty>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * System property counter.
 */
export interface SysProperty {
  /**
   * System property ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'sys_property';

  /**
   * System property type.
   */
  type: SysPropertyType | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Current counter value.
   */
  value: number;
}

/**
 * System property type.
 */
export interface SysPropertyType {
  /**
   * System property ID.
   */
  id: string;

  /**
   * Type code.
   */
  code: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sys_property_type';
}

/**
 * System property value response.
 */
export interface SysPropertyValue {
  /**
   * Resource type identifier.
   */
  object: 'sys_property_value';

  /**
   * Counter value as a string.
   */
  value: string;
}

/**
 * Request to update a system property.
 */
export interface UpdateSysPropertyRequest {
  /**
   * Counter value.
   */
  value?: number;
}

export interface SysPropertyUpdateParams {
  /**
   * Counter value.
   */
  value?: number;
}

export interface SysPropertyListParams {
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

export declare namespace SysProperties {
  export {
    type ListSysProperty as ListSysProperty,
    type SysProperty as SysProperty,
    type SysPropertyType as SysPropertyType,
    type SysPropertyValue as SysPropertyValue,
    type UpdateSysPropertyRequest as UpdateSysPropertyRequest,
    type SysPropertyUpdateParams as SysPropertyUpdateParams,
    type SysPropertyListParams as SysPropertyListParams,
  };
}
