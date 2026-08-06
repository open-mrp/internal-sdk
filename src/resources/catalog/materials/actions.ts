// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as ActionsAPI from '../item-categories/actions';
import * as MaterialsAPI from './materials';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage materials.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple materials for the account, matched by SKU. Validates
   * and resolves synchronously, then writes asynchronously — 202 with a job to poll.
   *
   * @example
   * ```ts
   * const job =
   *   await client.catalog.materials.actions.bulkUpsert({
   *     materials: [
   *       {
   *         sku: 'MAT-001',
   *         category: { id: 'ic_d06g9c6yc9ck' },
   *         properties: [],
   *       },
   *     ],
   *   });
   * ```
   */
  bulkUpsert(body: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/catalog/materials/actions/bulk-upsert', { body, ...options });
  }

  /**
   * Starts an export of every matching material and returns the job that tracks it.
   *
   * @example
   * ```ts
   * const job = await client.catalog.materials.actions.export({
   *   attribute_ids: [],
   *   category_ids: [],
   *   ends_at: null,
   *   q: null,
   *   starts_at: null,
   * });
   * ```
   */
  export(body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/catalog/materials/actions/export', { body, ...options });
  }
}

/**
 * Request to bulk upsert materials.
 */
export interface BulkUpsertMaterialsRequest {
  /**
   * Materials to create or update, matched by SKU within the account.
   */
  materials: Array<UpsertMaterialInput>;
}

/**
 * Filters which materials land in the exported file.
 */
export interface ExportMaterialsRequest {
  /**
   * Filter to materials carrying any of these attributes.
   */
  attribute_ids: Array<string>;

  /**
   * Filter to materials in any of these categories.
   */
  category_ids: Array<string>;

  /**
   * Filter to materials created on or before this date.
   */
  ends_at: string | null;

  /**
   * Free-text search term matched against material SKU and description.
   */
  q: string | null;

  /**
   * Filter to materials created on or after this date.
   */
  starts_at: string | null;
}

/**
 * Input for a single material in a bulk upsert operation.
 */
export interface UpsertMaterialInput {
  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  category: ActionsAPI.ObjectIdentifier;

  /**
   * Properties to attach to the material, matched/created by name + value. Additive
   * — existing attributes are not removed.
   */
  properties: Array<UpsertMaterialProperty>;

  /**
   * SKU for the material, used to match an existing material within the account. If
   * it exists the material is updated in place; otherwise a new material is created.
   * A SKU already used by a non-material item fails that row.
   */
  sku: string;

  /**
   * Material description.
   */
  description?: string;

  /**
   * A quantity, given as a decimal value and the unit it is measured in.
   */
  lead_time?: MaterialsAPI.QuantityInputRequest;

  /**
   * Material notes.
   */
  notes?: string;

  /**
   * A quantity, given as a decimal value and the unit it is measured in.
   */
  order_point?: MaterialsAPI.QuantityInputRequest;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price?: SalesOrdersAPI.RateInput;
}

/**
 * Property name + value pair attached to a material. The property and its value
 * (an attribute) are created if they do not yet exist.
 */
export interface UpsertMaterialProperty {
  /**
   * Property name (e.g. "Grade"). Matched case-insensitively; created if missing.
   */
  name: string;

  /**
   * Property value (e.g. "A36"). Matched case-insensitively; created under the
   * property if missing. A value already in use under a different property fails the
   * whole job.
   */
  value: string;
}

export interface ActionBulkUpsertParams {
  /**
   * Materials to create or update, matched by SKU within the account.
   */
  materials: Array<UpsertMaterialInput>;
}

export interface ActionExportParams {
  /**
   * Filter to materials carrying any of these attributes.
   */
  attribute_ids: Array<string>;

  /**
   * Filter to materials in any of these categories.
   */
  category_ids: Array<string>;

  /**
   * Filter to materials created on or before this date.
   */
  ends_at: string | null;

  /**
   * Free-text search term matched against material SKU and description.
   */
  q: string | null;

  /**
   * Filter to materials created on or after this date.
   */
  starts_at: string | null;
}

export declare namespace Actions {
  export {
    type BulkUpsertMaterialsRequest as BulkUpsertMaterialsRequest,
    type ExportMaterialsRequest as ExportMaterialsRequest,
    type UpsertMaterialInput as UpsertMaterialInput,
    type UpsertMaterialProperty as UpsertMaterialProperty,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
  };
}
