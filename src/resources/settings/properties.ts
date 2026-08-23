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
   * This endpoint requires the permission: `system_properties:read`.
   *
   * @example
   * ```ts
   * const sysProperty =
   *   await client.settings.properties.retrieve(
   *     'sypp_1czynnv1b8kc',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SysProperty> {
    return this._client.get(path`/v1/settings/properties/${id}`, options);
  }

  /**
   * Overrides the value of a system property counter.
   *
   * Use this to restart or realign a number series, for example to continue the
   * numbering used in a previous system. Records that already carry a number keep
   * it; only the numbers handed out from now on are affected.
   *
   * This endpoint requires the permission: `system_properties:update`.
   *
   * @example
   * ```ts
   * const sysProperty = await client.settings.properties.update(
   *   'sypp_1czynnv1b8kc',
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
   * A counter appears here only once its number series has been used at least once,
   * so an account may have fewer counters than there are counter types. The `q`
   * search term is matched against the counter type name.
   *
   * This endpoint requires the permission: `system_properties:read`.
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
   * This endpoint requires the permission: `system_properties:update`.
   *
   * @example
   * ```ts
   * const sysPropertyValue =
   *   await client.settings.properties.retrieveLatestValue(
   *     'transaction_number',
   *   );
   * ```
   */
  retrieveLatestValue(
    typeCode:
      | 'transaction_number'
      | 'settlement_number'
      | 'sales_order_number'
      | 'purchase_order_number'
      | 'supplier_number'
      | 'customer_number'
      | 'sscc_count'
      | 'production_run_number',
    options?: RequestOptions,
  ): APIPromise<SysPropertyValue> {
    return this._client.get(path`/v1/settings/properties/${typeCode}/latest-value`, options);
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A counter maintained by the system for a numbered series, such as transaction or
 * sales order numbers.
 *
 * Each account keeps at most one counter per counter type, created the first time
 * that number series is used.
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
   * The counter's current position in its number series.
   *
   * The system advances the counter as it hands out numbers, so this normally
   * matches the most recent number assigned in the series rather than the next one
   * to be issued.
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
   * Machine-readable code identifying which number series this counter feeds.
   *
   * - `transaction_number`: numbering for financial transactions such as payments,
   *   credit memos, adjustments, and rebates.
   * - `settlement_number`: numbering for settlements that apply transactions to
   *   invoices.
   * - `sales_order_number`: numbering for sales orders.
   * - `purchase_order_number`: numbering for purchase orders.
   * - `customer_number`: identifiers assigned to new customers.
   * - `supplier_number`: identifiers assigned to new suppliers.
   * - `production_run_number`: numbering for production runs.
   * - `sscc_count`: serial component of the GS1 SSCC-18 codes assigned to shipping
   *   cases.
   */
  code:
    | 'transaction_number'
    | 'settlement_number'
    | 'sales_order_number'
    | 'purchase_order_number'
    | 'supplier_number'
    | 'customer_number'
    | 'sscc_count'
    | 'production_run_number';

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
 * The value read from a system property counter.
 */
export interface SysPropertyValue {
  /**
   * Resource type identifier.
   */
  object: 'sys_property_value';

  /**
   * The number the counter holds after this read.
   */
  value: string;
}

/**
 * Request to update a system property.
 */
export interface UpdateSysPropertyRequest {
  /**
   * The number to move the counter to, so the series carries on from there.
   */
  value?: number;
}

export interface PropertyUpdateParams {
  /**
   * The number to move the counter to, so the series carries on from there.
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
