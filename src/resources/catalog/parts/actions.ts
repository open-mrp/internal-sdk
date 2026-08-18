// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as ActionsAPI from '../item-categories/actions';
import * as AccountPricesAPI from '../../sales/account-prices/account-prices';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage parts.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple parts for the account, matched by SKU, then writes
   * asynchronously — 202 with a job to poll.
   *
   * @example
   * ```ts
   * const job = await client.catalog.parts.actions.bulkUpsert({
   *   parts: [
   *     {
   *       sku: 'BRG-6204-2RS',
   *       category: { id: 'ic_d06g9c6yc9ck' },
   *       properties: [],
   *     },
   *   ],
   * });
   * ```
   */
  bulkUpsert(params: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/parts/actions/bulk-upsert', {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Starts an export of every matching part and returns the job that tracks it.
   *
   * @example
   * ```ts
   * const job = await client.catalog.parts.actions.export({
   *   attribute_ids: [],
   *   category_ids: [],
   *   ends_at: null,
   *   q: null,
   *   starts_at: null,
   * });
   * ```
   */
  export(params: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/parts/actions/export', { query: { include }, body, ...options });
  }
}

/**
 * BulkUpsertPartsRequest is the request to bulk upsert parts.
 */
export interface BulkUpsertPartsRequest {
  /**
   * Parts to create or update, matched by SKU within the account.
   */
  parts: Array<UpsertPartInput>;
}

/**
 * Filters which parts land in the exported file.
 */
export interface ExportPartsRequest {
  /**
   * Filter to parts carrying at least one of these attributes.
   */
  attribute_ids: Array<string>;

  /**
   * Filter to parts belonging to any of these item categories.
   */
  category_ids: Array<string>;

  /**
   * Filter to parts created at or before this time.
   */
  ends_at: string | null;

  /**
   * Free-text search term matched against the part's SKU or description.
   */
  q: string | null;

  /**
   * Filter to parts created at or after this time.
   */
  starts_at: string | null;
}

/**
 * UpsertPartInput is the input for a single part in a bulk upsert operation.
 */
export interface UpsertPartInput {
  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  category: ActionsAPI.ObjectIdentifier;

  /**
   * Properties to attach to the part, matched/created by name + value. Additive —
   * existing attributes are not removed.
   */
  properties: Array<UpsertPartProperty>;

  /**
   * SKU for the part, matched against existing parts in the account: a match updates
   * in place, otherwise a part is created. A SKU held by a non-part item fails that
   * row.
   */
  sku: string;

  /**
   * Free-form description of the part.
   */
  description?: string;

  /**
   * Free-form notes about the part.
   */
  notes?: string;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: AccountPricesAPI.RateInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price?: AccountPricesAPI.RateInput;
}

/**
 * UpsertPartProperty is a property name + value pair attached to a part. The
 * property and its value (an attribute) are created if they do not yet exist.
 */
export interface UpsertPartProperty {
  /**
   * Property name (e.g. "Material"). Matched case-insensitively; created if missing.
   */
  name: string;

  /**
   * Property value (e.g. "Steel"). Matched exactly; created under the property if
   * missing.
   */
  value: string;
}

export interface ActionBulkUpsertParams {
  /**
   * Body param: Parts to create or update, matched by SKU within the account.
   */
  parts: Array<UpsertPartInput>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;
}

export interface ActionExportParams {
  /**
   * Body param: Filter to parts carrying at least one of these attributes.
   */
  attribute_ids: Array<string>;

  /**
   * Body param: Filter to parts belonging to any of these item categories.
   */
  category_ids: Array<string>;

  /**
   * Body param: Filter to parts created at or before this time.
   */
  ends_at: string | null;

  /**
   * Body param: Free-text search term matched against the part's SKU or description.
   */
  q: string | null;

  /**
   * Body param: Filter to parts created at or after this time.
   */
  starts_at: string | null;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;
}

export declare namespace Actions {
  export {
    type BulkUpsertPartsRequest as BulkUpsertPartsRequest,
    type ExportPartsRequest as ExportPartsRequest,
    type UpsertPartInput as UpsertPartInput,
    type UpsertPartProperty as UpsertPartProperty,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
