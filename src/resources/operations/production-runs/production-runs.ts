// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as BatchesAPI from './batches';
import {
  AddBatchInputRequest,
  AddBatchesToProductionRunRequest,
  BatchCreateParams,
  BatchListParams,
  Batches,
} from './batches';
import * as ActionsAPI from '../../sales/sales-orders/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete production runs.
 */
export class ProductionRuns extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);

  /**
   * Creates a production run.
   *
   * The run number is assigned automatically as the next sequential number for the
   * account.
   *
   * This endpoint requires the permission: `production_runs:create`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.create({
   *     responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
   *   });
   * ```
   */
  create(params: ProductionRunCreateParams, options?: RequestOptions): APIPromise<ActionsAPI.ProductionRun> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/production-runs', { query: { include }, body, ...options });
  }

  /**
   * Returns a production run by ID.
   *
   * This endpoint requires the permission: `production_runs:read`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.retrieve(
   *     'prru_0141c28081df4faac0fe726c41',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductionRunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.ProductionRun> {
    return this._client.get(path`/v1/operations/production-runs/${id}`, { query, ...options });
  }

  /**
   * Partially updates a production run.
   *
   * Fails if the run has been completed.
   *
   * This endpoint requires the permission: `production_runs:update`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.update(
   *     'prru_0141c28081df4faac0fe726c41',
   *     {
   *       number: 'PR-00042',
   *       responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ProductionRunUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.ProductionRun> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/production-runs/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of production runs.
   *
   * This endpoint requires the permission: `production_runs:read`.
   *
   * @example
   * ```ts
   * const listProductionRun =
   *   await client.operations.productionRuns.list();
   * ```
   */
  list(
    query: ProductionRunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionRun> {
    return this._client.get('/v1/operations/production-runs', { query, ...options });
  }

  /**
   * Deletes a production run.
   *
   * All batches recorded against the run are deleted, linked orders are detached
   * from the run, and reserved inventory for those orders is released.
   *
   * This endpoint requires the permission: `production_runs:delete`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.delete(
   *     'prru_0141c28081df4faac0fe726c41',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionRunDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-runs/${id}`, options);
  }
}

/**
 * Request to create a production run.
 */
export interface CreateProductionRunRequest {
  /**
   * ID of the account user accountable for executing the run.
   *
   * Accepts either an account user ID or a user ID; it is resolved and stored as the
   * account user.
   */
  responsible_user_id: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionRun {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.ProductionRun>;

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
 * Request to update a production run.
 */
export interface UpdateProductionRunRequest {
  /**
   * New production run number.
   *
   * Must be unique within the account.
   */
  number?: string;

  /**
   * ID of the account user accountable for executing the run.
   *
   * Accepts either an account user ID or a user ID; it is resolved and stored as the
   * account user.
   */
  responsible_user_id?: string;
}

export interface ProductionRunDeleteResponse {}

export interface ProductionRunCreateParams {
  /**
   * Body param: ID of the account user accountable for executing the run.
   *
   * Accepts either an account user ID or a user ID; it is resolved and stored as the
   * account user.
   */
  responsible_user_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user'>;
}

export interface ProductionRunRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user'>;
}

export interface ProductionRunUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user'>;

  /**
   * Body param: New production run number.
   *
   * Must be unique within the account.
   */
  number?: string;

  /**
   * Body param: ID of the account user accountable for executing the run.
   *
   * Accepts either an account user ID or a user ID; it is resolved and stored as the
   * account user.
   */
  responsible_user_id?: string;
}

export interface ProductionRunListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only return runs created on or before this date (inclusive), formatted as
   * `YYYY-MM-DD`.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user'>;

  /**
   * Only return runs containing at least one batch that produces any of these items.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Only return runs containing at least one batch that used any of these machines.
   */
  machine_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only return runs created on or after this date (inclusive), formatted as
   * `YYYY-MM-DD`.
   */
  start_date?: string;

  /**
   * Filter by run status.
   *
   * - `open`: runs that have not been completed.
   * - `closed`: runs that have been completed.
   */
  status?: string;
}

ProductionRuns.Batches = Batches;

export declare namespace ProductionRuns {
  export {
    type CreateProductionRunRequest as CreateProductionRunRequest,
    type ListProductionRun as ListProductionRun,
    type UpdateProductionRunRequest as UpdateProductionRunRequest,
    type ProductionRunDeleteResponse as ProductionRunDeleteResponse,
    type ProductionRunCreateParams as ProductionRunCreateParams,
    type ProductionRunRetrieveParams as ProductionRunRetrieveParams,
    type ProductionRunUpdateParams as ProductionRunUpdateParams,
    type ProductionRunListParams as ProductionRunListParams,
  };

  export {
    Batches as Batches,
    type AddBatchInputRequest as AddBatchInputRequest,
    type AddBatchesToProductionRunRequest as AddBatchesToProductionRunRequest,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
