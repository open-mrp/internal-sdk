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
   * Returns a conflict error if a scanning station with the same name already
   * exists.
   *
   * This endpoint requires the permission: `scanners:create`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.create({
   *     department_id: 'dp_01791c25ab59da4704cba61874',
   *     name: 'Packaging Line 1',
   *     operator_requirement: 'none',
   *     type: 'init_batch',
   *     label_size: '1x1',
   *     label_type: 'tag',
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
   *     'scst_0129335dd6286056a97024fcc1',
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
   *     'scst_0129335dd6286056a97024fcc1',
   *     { name: 'Station B' },
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
   * This endpoint requires the permission: `scanners:delete`.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.delete(
   *     'scst_0129335dd6286056a97024fcc1',
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
   * Demand is calculated from the production step's configured consumptions, scaled
   * to the batch quantities (or the proposed split quantity). How the step is
   * determined depends on the station's type: initialize stations derive it from the
   * station and the batch's item, while move, split, and merge stations use
   * `production_step_id`.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listScanningConsumption =
   *   await client.operations.scanningStations.consumptions(
   *     'scst_0129335dd6286056a97024fcc1',
   *     {
   *       batch_ids: ['bt_017313a7df2d7ac8d895809747'],
   *       production_step_id: 'prst_0159474175bb59f4b1990404ee',
   *       split_quantity: {
   *         id: 'bt_017313a7df2d7ac8d895809747',
   *         measure: '10.5',
   *         unit_id: 'un_01966263f74a5a0cae356000a1',
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
   * Returns a paginated list of batches for a given scanning station.
   *
   * This endpoint requires the permission: `batches:read`.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.scanningStations.retrieveBatches(
   *     'scst_0129335dd6286056a97024fcc1',
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
   * Every production step whose name contains the provided value is connected. A
   * production step can be connected to at most one scanning station, so matching
   * steps are moved from any station they were previously connected to.
   *
   * This endpoint requires the permission: `scanners:update`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.scanningStations.updateProductionSteps(
   *     'scst_0129335dd6286056a97024fcc1',
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
   * Every production step in your account whose name contains this value is
   * connected to the station.
   */
  name: string;
}

/**
 * Request to create a scanning station.
 */
export interface CreateScanningStationRequest {
  /**
   * ID of the department this station belongs to.
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
   * Scanning station type, determining which batch operation the station performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
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
   * Batch IDs to calculate consumption for.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to scope the consumption calculation.
   *
   * Required when the scanning station is a move, split, or merge station. Ignored
   * for initialize stations, where the step is derived from the station and the
   * batch's item.
   */
  production_step_id?: string;

  /**
   * Quantity input for a split operation.
   */
  split_quantity?: ActionsAPI.SplitQuantityInput;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * Body param: Scanning station type, determining which batch operation the station
   * performs.
   *
   * - `init_batch`: initializes a new batch.
   * - `merge_batch`: merges multiple batches into one.
   * - `move_batch`: moves a batch to another location or step.
   * - `split_batch`: splits a batch into multiple batches.
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
   * Batch IDs to calculate consumption for.
   */
  batch_ids: Array<string>;

  /**
   * Production step ID to scope the consumption calculation.
   *
   * Required when the scanning station is a move, split, or merge station. Ignored
   * for initialize stations, where the step is derived from the station and the
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
   * Every production step in your account whose name contains this value is
   * connected to the station.
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
