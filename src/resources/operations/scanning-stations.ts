// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as DepartmentsAPI from './departments';
import * as ActionsAPI from './batches/actions';
import * as BatchesAPI from './production-runs/batches';
import * as ProductionStepsAPI from './production-steps/production-steps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ScanningStations extends APIResource {
  /**
   * Returns a scanning station by ID.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ScanningStationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScanningStation> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}`, { query, ...options });
  }

  /**
   * Partially updates a scanning station.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.update('id', {
   *     name: 'Station B',
   *   });
   * ```
   */
  update(
    id: string,
    params: ScanningStationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScanningStation> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/scanning-stations/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes a scanning station.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.delete('id');
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
   * const response =
   *   await client.operations.scanningStations.consumptions(
   *     'id',
   *     {
   *       batch_ids: ['bt_01jm4r6700f8nwq3v5hx2d9ktp'],
   *       production_step_id: 'prst_01jm4r6700f8nwq3v5hx2d9ktp',
   *       split_quantity: {
   *         id: 'bt_01jm4r6700f8nwq3v5hx2d9ktp',
   *         measure: '10.5',
   *         unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *       },
   *     },
   *   );
   * ```
   */
  consumptions(
    id: string,
    body: ScanningStationConsumptionsParams,
    options?: RequestOptions,
  ): APIPromise<ScanningStationConsumptionsResponse> {
    return this._client.post(path`/v1/operations/scanning-stations/${id}/consumptions`, { body, ...options });
  }

  /**
   * Returns a paginated list of batches for a given scanning station.
   *
   * @example
   * ```ts
   * const listBatch =
   *   await client.operations.scanningStations.retrieveBatches(
   *     'id',
   *   );
   * ```
   */
  retrieveBatches(
    id: string,
    query: ScanningStationRetrieveBatchesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchesAPI.ListBatch> {
    return this._client.get(path`/v1/operations/scanning-stations/${id}/batches`, { query, ...options });
  }

  /**
   * Returns a paginated list of scanning stations for the current account.
   *
   * @example
   * ```ts
   * const listScanningStation =
   *   await client.operations.scanningStations.retrieveScanningStations();
   * ```
   */
  retrieveScanningStations(
    query: ScanningStationRetrieveScanningStationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListScanningStation> {
    return this._client.get('/v1/operations/scanning-stations', { query, ...options });
  }

  /**
   * Creates a scanning station associated with a department.
   *
   * @example
   * ```ts
   * const scanningStation =
   *   await client.operations.scanningStations.scanningStations(
   *     {
   *       department_id: 'dp_01gf7a8200er3ar3pkfrb6kk30',
   *       name: 'Packaging Line 1',
   *       operator_requirement: 'none',
   *       type: 'init_batch',
   *       label_size: '1x1',
   *       label_type: 'tag',
   *     },
   *   );
   * ```
   */
  scanningStations(
    params: ScanningStationScanningStationsParams,
    options?: RequestOptions,
  ): APIPromise<ScanningStation> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/scanning-stations', { query: { include }, body, ...options });
  }

  /**
   * Connects production steps matching the provided name to a scanning station.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.scanningStations.updateProductionSteps(
   *     'id',
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
 * List represents a paginated list of resources.
 */
export interface ListScanningStation {
  /**
   * Resources in this page.
   */
  data: Array<ScanningStation>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Scanning station resource.
 */
export interface ScanningStation {
  /**
   * Scanning station ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Department resource.
   */
  department: DepartmentsAPI.Department | null;

  /**
   * Label size code.
   */
  label_size: '1x1' | '1x3' | '1x4' | '2x4' | null;

  /**
   * Label type code.
   */
  label_type: 'tag' | 'traveler' | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'scanning_station';

  /**
   * Operator requirement behavior for this station.
   */
  operator_requirement: 'none' | 'material_check';

  /**
   * List represents a paginated list of resources.
   */
  production_steps: ProductionStepsAPI.ListProductionStep | null;

  /**
   * Scanning station type.
   */
  type: 'init_batch' | 'merge_batch' | 'move_batch' | 'split_batch';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface ScanningStationDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface ScanningStationConsumptionsResponse {
  /**
   * Resources in this page.
   */
  data: Array<ScanningStationConsumptionsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ScanningStationConsumptionsResponse {
  /**
   * Material consumption data for a scanning operation.
   */
  export interface Data {
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
}

export interface ScanningStationUpdateProductionStepsResponse {}

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

export interface ScanningStationRetrieveScanningStationsParams {
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

export interface ScanningStationScanningStationsParams {
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

export interface ScanningStationUpdateProductionStepsParams {
  /**
   * Name or partial name of production steps to connect.
   */
  name: string;
}

export declare namespace ScanningStations {
  export {
    type ListScanningStation as ListScanningStation,
    type ScanningStation as ScanningStation,
    type ScanningStationDeleteResponse as ScanningStationDeleteResponse,
    type ScanningStationConsumptionsResponse as ScanningStationConsumptionsResponse,
    type ScanningStationUpdateProductionStepsResponse as ScanningStationUpdateProductionStepsResponse,
    type ScanningStationRetrieveParams as ScanningStationRetrieveParams,
    type ScanningStationUpdateParams as ScanningStationUpdateParams,
    type ScanningStationConsumptionsParams as ScanningStationConsumptionsParams,
    type ScanningStationRetrieveBatchesParams as ScanningStationRetrieveBatchesParams,
    type ScanningStationRetrieveScanningStationsParams as ScanningStationRetrieveScanningStationsParams,
    type ScanningStationScanningStationsParams as ScanningStationScanningStationsParams,
    type ScanningStationUpdateProductionStepsParams as ScanningStationUpdateProductionStepsParams,
  };
}
