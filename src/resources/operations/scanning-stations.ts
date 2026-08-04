// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as ActionsAPI from './batches/actions';
import * as BatchesAPI from './batches/batches';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ScanningStations extends APIResource {
  /**
   * Creates a scanning station and assigns it to a department.
   *
   * The new station has no production steps connected to it; use Connect Production
   * Steps to Scanning Station to attach them.
   *
   * Returns a conflict error if a scanning station with the same name already
   * exists, and a not-found error if the department does not exist in your account.
   *
   * This endpoint requires the permission: `scanners:create`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.create({
   *     department_id: 'dp_m0jayebxnkos',
   *     name: 'Packaging Line 1',
   *     operator_requirement: 'none',
   *     type: 'init_batch',
   *     label_size: '1x1',
   *     label_type: 'tag',
   *     notes: 'Primary intake station on the receiving dock.',
   *   });
   * ```
   */
  create(
    params: ScanningStationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ScanningStation> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/scanning-stations', { query: { include }, body, ...options });
  }

  /**
   * Returns a scanning station by ID.
   *
   * This endpoint requires the permission: `scanners:read`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.retrieve(
   *     'scst_t71bn7lq5yov',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ScanningStationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ScanningStation> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a scanning station.
   *
   * Only the fields provided in the request are changed. Returns a conflict error if
   * the new name is already in use by another scanning station.
   *
   * This endpoint requires the permission: `scanners:update`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.update(
   *     'scst_t71bn7lq5yov',
   *     {
   *       label_size: '1x1',
   *       label_type: 'tag',
   *       name: 'Station B',
   *       notes: 'Relocated to the finishing area.',
   *       operator_requirement: 'material_check',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ScanningStationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ScanningStation> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/scanning-stations/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of scanning stations in your account.
   *
   * The `q` search term matches the station name.
   *
   * This endpoint requires the permission: `scanners:read`.
   *
   * @example
   * ```ts
   * const listScanningStation =
   *   await client.operations.scanningStations.list();
   * ```
   */
  list(
    query: ScanningStationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.ListScanningStation> {
    return this._client.get('/v1/operations/scanning-stations', { query, ...options });
  }

  /**
   * Deletes a scanning station.
   *
   * Production steps connected to the station are not deleted, but they are left
   * without a station to scan at until you connect them to another one. Deleting a
   * station that was already deleted returns an already-deleted error rather than a
   * not-found error.
   *
   * This endpoint requires the permission: `scanners:delete`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.delete(
   *     'scst_t71bn7lq5yov',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ScanningStationDeleteResponse> {
    return this._client.delete(path`/v1/operations/scanning-stations/${id}`, options);
  }

  /**
   * Returns the material demand and current inventory for the operation a scanning
   * station would perform on the given batches.
   *
   * Use this to preview what a scan will draw from stock, and to compare that
   * against what is on hand, before committing the operation. Demand is each of the
   * step's configured material quantities scaled by how much output the operation
   * produces relative to the step's standard run size, so it grows with the batch
   * quantities (or the proposed split quantity). How the step is determined depends
   * on the station's type: `init_batch` stations derive it from the station and the
   * batch's item, while `move_batch`, `split_batch`, and `merge_batch` stations use
   * `production_step_id`. Nothing is consumed by this call.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listScanningConsumption =
   *   await client.operations.scanningStations.consumptions(
   *     'scst_t71bn7lq5yov',
   *     {
   *       batch_ids: ['bt_fuies8j4pk45'],
   *       production_step_id: 'prst_0ht5mkqx5a6t',
   *       split_quantity: {
   *         id: 'bt_fuies8j4pk45',
   *         measure: '10.5',
   *         unit_id: 'un_82bd37dae5po',
   *       },
   *     },
   *   );
   * ```
   */
  consumptions(
    id: string,
    body: ScanningStationConsumptionsParams,
    options?: RequestOptions,
  ): APIPromise<ListScanningConsumption> {
    return this._client.post(path`/v1/operations/scanning-stations/${id}/consumptions`, { body, ...options });
  }

  /**
   * Returns a paginated list of the batches scanned at a given scanning station,
   * most recently scanned first.
   *
   * Only batches that have actually been scanned at the station appear. Batches
   * created there by a move, merge, or split are attached to the station but never
   * marked as scanned, so they are not listed. The search term matches on item SKU.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.scanningStations.retrieveBatches(
   *     'scst_t71bn7lq5yov',
   *   );
   * ```
   */
  retrieveBatches(
    id: string,
    query: ScanningStationRetrieveBatchesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListBatch> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}/batches`, { query, ...options });
  }

  /**
   * Connects production steps to a scanning station by name.
   *
   * Every production step in your account whose name contains the provided value is
   * connected. A production step can be connected to at most one scanning station,
   * so matching steps are moved off any station they were previously connected to.
   * Steps already connected to this station that do not match are left connected, so
   * this adds to the station's steps rather than replacing them.
   *
   * Nothing about the station is returned, so retrieve the scanning station
   * afterward to confirm which steps are now connected.
   *
   * This endpoint requires the permission: `scanners:update`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.scanningStations.updateProductionSteps(
   *     'scst_t71bn7lq5yov',
   *     { name: 'Mixing' },
   *   );
   * ```
   */
  updateProductionSteps(
    id: string,
    body: ScanningStationUpdateProductionStepsParams,
    options?: RequestOptions,
  ): APIPromise<ScanningStationUpdateProductionStepsResponse> {
    return this._client.put(path`/v1/operations/scanning-stations/${id}/production-steps`, {
      body,
      ...options,
    });
  }
}

/**
 * Request to connect production steps to a scanning station.
 */
export interface ConnectProductionStepsRequest {
  /**
   * Full or partial production step name to match.
   *
   * Matching is a case-insensitive substring match, so a broad value such as a
   * single letter can capture far more steps than intended.
   */
  name: string;
}

/**
 * Request to create a scanning station.
 */
export interface CreateScanningStationRequest {
  /**
   * ID of the department this station belongs to.
   *
   * Must be a department in your account, and cannot be changed after creation.
   */
  department_id: string;

  /**
   * Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name: string;

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Scanning station type, determining which batch operation an operator performs
   * when they scan here.
   *
   * - `init_batch`: starts a new batch at the beginning of a production flow.
   * - `merge_batch`: combines several scanned batches into one.
   * - `move_batch`: advances a batch through a production step connected to this
   *   station.
   * - `split_batch`: divides a batch into several batches.
   *
   * The type cannot be changed after creation.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Free-form notes about the scanning station.
   */
  notes?: string;
}

/**
 * Request to get material consumption data for a scanning station.
 */
export interface GetScanningStationConsumptionRequest {
  /**
   * Batch IDs the scanning operation would be performed on.
   *
   * At an `init_batch` station only the first ID is used, since demand comes from
   * that batch's own item and quantity. At the other station types each ID is
   * resolved forward through its production flow to the batch that is actually
   * available at the step, and the demand of all of them is added together.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to scope the consumption calculation.
   *
   * Required for `move_batch`, `split_batch`, and `merge_batch` stations. Ignored
   * for `init_batch` stations, where the step is derived from the station and the
   * batch's item.
   */
  production_step_id?: string;

  /**
   * Quantity input for a split operation.
   */
  split_quantity?: ActionsAPI.SplitQuantityInput;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListBatch {
  /**
   * Resources in this page.
   */
  data: Array<BatchesAPI.Batch>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListScanningConsumption {
  /**
   * Resources in this page.
   */
  data: Array<ScanningConsumption>;

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
 * Material consumption data for a scanning operation.
 *
 * The `demand_*` pair is how much of the material this operation requires. The
 * `inventory_*` pair is the material's currently available-to-promise (ATP)
 * inventory — an independent value, not the demand amount converted.
 */
export interface ScanningConsumption {
  /**
   * Amount the operation requires, as a decimal measure expressed in `demand_unit`.
   */
  demand_measure: string;

  /**
   * Unit abbreviation that `demand_measure` is expressed in.
   */
  demand_unit: string;

  /**
   * Free-text instructions for consuming this material.
   */
  instructions: string | null;

  /**
   * Material's currently available-to-promise (ATP) inventory, as a decimal measure
   * expressed in `inventory_unit`.
   */
  inventory_measure: string;

  /**
   * Unit abbreviation that the available-to-promise `inventory_measure` is expressed
   * in.
   */
  inventory_unit: string;

  /**
   * Resource type identifier.
   */
  object: 'scanning_consumption';

  /**
   * SKU of the material to consume.
   */
  sku: string;
}

/**
 * Request to partially update a scanning station.
 *
 * The station's type and department are set at creation and cannot be changed
 * here.
 */
export interface UpdateScanningStationRequest {
  /**
   * Size of the labels printed at this station, given as width-by-height (for
   * example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;

  /**
   * Free-form notes about the scanning station.
   *
   * Send `null` to clear.
   */
  notes?: string | null;

  /**
   * Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationDeleteResponse {}

export interface ScanningStationUpdateProductionStepsResponse {}

export interface ScanningStationCreateParams {
  /**
   * Body param: ID of the department this station belongs to.
   *
   * Must be a department in your account, and cannot be changed after creation.
   */
  department_id: string;

  /**
   * Body param: Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name: string;

  /**
   * Body param: Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Body param: Scanning station type, determining which batch operation an operator
   * performs when they scan here.
   *
   * - `init_batch`: starts a new batch at the beginning of a production flow.
   * - `merge_batch`: combines several scanned batches into one.
   * - `move_batch`: advances a batch through a production step connected to this
   *   station.
   * - `split_batch`: divides a batch into several batches.
   *
   * The type cannot be changed after creation.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Size of the labels printed at this station, given as width-by-height
   * (for example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Free-form notes about the scanning station.
   */
  notes?: string;
}

export interface ScanningStationRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department' | 'production_steps'>;
}

export interface ScanningStationUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Size of the labels printed at this station, given as width-by-height
   * (for example, `1x1`).
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Type of label printed at this station.
   *
   * - `tag`: a label attached to the physical product.
   * - `traveler`: a routing sheet that accompanies the batch through every
   *   production step.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Display name of the scanning station.
   *
   * Must be unique within your account; maximum 255 characters.
   */
  name?: string;

  /**
   * Body param: Free-form notes about the scanning station.
   *
   * Send `null` to clear.
   */
  notes?: string | null;

  /**
   * Body param: Whether operators must perform a material check at this station.
   *
   * - `none`: no additional operator check is required.
   * - `material_check`: a material check is expected before the operation.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationListParams {
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
  include?: Array<'department' | 'production_steps'>;

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

export interface ScanningStationConsumptionsParams {
  /**
   * Batch IDs the scanning operation would be performed on.
   *
   * At an `init_batch` station only the first ID is used, since demand comes from
   * that batch's own item and quantity. At the other station types each ID is
   * resolved forward through its production flow to the batch that is actually
   * available at the step, and the demand of all of them is added together.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to scope the consumption calculation.
   *
   * Required for `move_batch`, `split_batch`, and `merge_batch` stations. Ignored
   * for `init_batch` stations, where the step is derived from the station and the
   * batch's item.
   */
  production_step_id?: string;

  /**
   * Quantity input for a split operation.
   */
  split_quantity?: ActionsAPI.SplitQuantityInput;
}

export interface ScanningStationRetrieveBatchesParams {
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

export interface ScanningStationUpdateProductionStepsParams {
  /**
   * Full or partial production step name to match.
   *
   * Matching is a case-insensitive substring match, so a broad value such as a
   * single letter can capture far more steps than intended.
   */
  name: string;
}

export declare namespace ScanningStations {
  export {
    type ConnectProductionStepsRequest as ConnectProductionStepsRequest,
    type CreateScanningStationRequest as CreateScanningStationRequest,
    type GetScanningStationConsumptionRequest as GetScanningStationConsumptionRequest,
    type ListBatch as ListBatch,
    type ListScanningConsumption as ListScanningConsumption,
    type ScanningConsumption as ScanningConsumption,
    type UpdateScanningStationRequest as UpdateScanningStationRequest,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationUpdateProductionStepsResponse as ScanningStationUpdateProductionStepsResponse,
    type ScanningStationCreateParams as ScanningStationCreateParams,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationListParams as ScanningStationListParams,
    type ScanningStationConsumptionsParams as ScanningStationConsumptionsParams,
    type ScanningStationRetrieveBatchesParams as ScanningStationRetrieveBatchesParams,
    type ScanningStationUpdateProductionStepsParams as ScanningStationUpdateProductionStepsParams,
  };
}
