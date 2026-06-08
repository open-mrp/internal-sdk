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
   * Creates a scanning station associated with a department.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.create({
   *     department_id: 'dp_01791c25ab59da4704cba61874',
   *     name: 'Packaging Line 1',
   *     operator_requirement: 'none',
   *     type: 'init_batch',
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
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.update(
   *     'scst_0129335dd6286056a97024fcc1',
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
   * Returns a paginated list of scanning stations for the current account.
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
   * Returns material consumption data for the specified batches at a scanning
   * station, optionally scoped to a production step and split quantity.
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
   * Connects production steps matching the provided name to a scanning station.
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
   * Name or partial name of production steps to connect.
   */
  name: string;
}

/**
 * Request to create a scanning station.
 */
export interface CreateScanningStationRequest {
  /**
   * Department ID.
   */
  department_id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Notes.
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
   */
  production_step_id: string | null;

  /**
   * Quantity input for a split operation.
   */
  split_quantity: ActionsAPI.SplitQuantityInput | null;
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
 */
export interface ScanningConsumption {
  /**
   * Demand measure value.
   */
  demand_measure: string;

  /**
   * Demand unit abbreviation.
   */
  demand_unit: string;

  /**
   * Consumption instructions.
   */
  instructions: string | null;

  /**
   * Inventory measure value.
   */
  inventory_measure: string;

  /**
   * Inventory unit abbreviation.
   */
  inventory_unit: string;

  /**
   * Resource type identifier.
   */
  object: 'scanning_consumption';

  /**
   * SKU.
   */
  sku: string;
}

/**
 * Request to partially update a scanning station.
 */
export interface UpdateScanningStationRequest {
  /**
   * Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Display name.
   */
  name?: string;

  /**
   * Notes.
   */
  notes?: string | null;

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationDeleteResponse {}

export interface ScanningStationUpdateProductionStepsResponse {}

export interface ScanningStationCreateParams {
  /**
   * Body param: Department ID.
   */
  department_id: string;

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * Body param: Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Body param: Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Notes.
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
   * Body param: Label size code.
   */
  label_size?: '1x1' | '1x3' | '1x4' | '2x4';

  /**
   * Body param: Label type code.
   */
  label_type?: 'tag' | 'traveler';

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Notes.
   */
  notes?: string | null;

  /**
   * Body param: Operator requirement behavior for this station.
   */
  operator_requirement?: 'none' | 'material_check';
}

export interface ScanningStationListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'department' | 'production_steps'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
   */
  production_step_id: string | null;

  /**
   * Quantity input for a split operation.
   */
  split_quantity: ActionsAPI.SplitQuantityInput | null;
}

export interface ScanningStationRetrieveBatchesParams {
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

export interface ScanningStationUpdateProductionStepsParams {
  /**
   * Name or partial name of production steps to connect.
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
