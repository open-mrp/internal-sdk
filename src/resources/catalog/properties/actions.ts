// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage properties and their attributes.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple properties and their attributes for the account,
   * matched by name (case-insensitive), then writes asynchronously — 202 with a job
   * to poll.
   *
   * @example
   * ```ts
   * const job =
   *   await client.catalog.properties.actions.bulkUpsert({
   *     properties: [
   *       {
   *         name: 'Color',
   *         attributes: [{ value: 'Premium', color: 'red' }],
   *       },
   *     ],
   *   });
   * ```
   */
  bulkUpsert(body: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/catalog/properties/actions/bulk-upsert', { body, ...options });
  }

  /**
   * Starts an export of every matching property, one row per attribute, and returns
   * the job that tracks it.
   *
   * @example
   * ```ts
   * const job = await client.catalog.properties.actions.export({
   *   q: null,
   * });
   * ```
   */
  export(body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/catalog/properties/actions/export', { body, ...options });
  }
}

/**
 * carries the properties to bulk upsert
 */
export interface BulkUpsertPropertiesRequest {
  /**
   * Properties to create or update, matched by name (case-insensitive) within the
   * account.
   */
  properties: Array<UpsertPropertyInput>;
}

/**
 * Filters which properties land in the exported file.
 */
export interface ExportPropertiesRequest {
  /**
   * Free-text search term matched against property names.
   */
  q: string | null;
}

/**
 * carries one attribute under a bulk-upserted property
 */
export interface UpsertPropertyAttributeInput {
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
   * When omitted, one of the nine named colors is assigned. Ignored for a value the
   * property already defines.
   */
  color?: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';
}

/**
 * carries one property in a bulk upsert
 */
export interface UpsertPropertyInput {
  /**
   * The selectable values to define under this property, in the order they should be
   * arranged.
   *
   * Additive — values the property already defines are left as they stand, and none
   * are removed. New values are appended after the existing ones.
   */
  attributes: Array<UpsertPropertyAttributeInput>;

  /**
   * Display name of the property, used to match existing properties within the
   * account.
   */
  name: string;
}

export interface ActionBulkUpsertParams {
  /**
   * Properties to create or update, matched by name (case-insensitive) within the
   * account.
   */
  properties: Array<UpsertPropertyInput>;
}

export interface ActionExportParams {
  /**
   * Free-text search term matched against property names.
   */
  q: string | null;
}

export declare namespace Actions {
  export {
    type BulkUpsertPropertiesRequest as BulkUpsertPropertiesRequest,
    type ExportPropertiesRequest as ExportPropertiesRequest,
    type UpsertPropertyAttributeInput as UpsertPropertyAttributeInput,
    type UpsertPropertyInput as UpsertPropertyInput,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
