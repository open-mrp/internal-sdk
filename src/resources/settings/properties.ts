// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage system properties (auto-incrementing counters).
 */
export class Properties extends APIResource {
  /**
   * Returns a system property by ID.
   *
   * @example
   * ```ts
   * const sysProperty =
   *   await client.settings.properties.retrieve(
   *     'sypp_01d8fd3a8b1a8e4c41be55ab5a',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SysProperty> {
    return this._client.get(path`/v1/settings/properties/${id}`, options);
  }

  /**
   * Partially updates the value of a system property.
   *
   * @example
   * ```ts
   * const sysProperty = await client.settings.properties.update(
   *   'sypp_01d8fd3a8b1a8e4c41be55ab5a',
   *   { value: 30 },
   * );
   * ```
   */
  update(
    id: string,
    body: PropertyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SysProperty> {
    return this._client.patch(path`/v1/settings/properties/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of system properties for the current account.
   *
   * @example
   * ```ts
   * const listSysProperty =
   *   await client.settings.properties.list();
   * ```
   */
  list(
    query: PropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSysProperty> {
    return this._client.get('/v1/settings/properties', { query, ...options });
  }

  /**
   * Returns the next available counter value for a system property type.
   *
   * Initializes the counter at `1` if it does not yet exist for the account. If the
   * current value is already used by an existing record (for example, a transaction
   * with that number), the counter is incremented before the value is returned. The
   * `sscc_count` counter is returned as-is, without a duplicate check.
   *
   * @example
   * ```ts
   * const sysPropertyValue =
   *   await client.settings.properties.retrieveLatestValue(
   *     'example',
   *   );
   * ```
   */
  retrieveLatestValue(typeCode: string, options?: RequestOptions): APIPromise<SysPropertyValue> {
    return this._client.get(path`/v1/settings/properties/${typeCode}/latest-value`, options);
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
 * Monotonic counter maintained by the system, such as the next transaction or
 * document number to assign.
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
   * The kind of counter a system property tracks.
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
 * The kind of counter a system property tracks.
 */
export interface SysPropertyType {
  /**
   * System property type ID.
   */
  id: string;

  /**
   * Machine-readable code identifying which counter this is, such as
   * `transaction_number` or `purchase_order_number`.
   */
  code: string;

  /**
   * Human-readable name of the counter, such as `Transaction Number`.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sys_property_type';
}

/**
 * The current value of a system property counter.
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
   * The new counter value, such as the next transaction or document number to
   * assign.
   */
  value?: number;
}

export interface PropertyUpdateParams {
  /**
   * The new counter value, such as the next transaction or document number to
   * assign.
   */
  value?: number;
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

export declare namespace Properties {
  export {
    type ListSysProperty as ListSysProperty,
    type SysProperty as SysProperty,
    type SysPropertyType as SysPropertyType,
    type SysPropertyValue as SysPropertyValue,
    type UpdateSysPropertyRequest as UpdateSysPropertyRequest,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };
}
