// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as BatchesAPI from './batches';
import { BatchCreateParams, BatchListParams, Batches, ListBatch } from './batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete production runs.
 */
export class ProductionRuns extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);

  /**
   * Returns a production run by ID.
   *
   * @example
   * ```ts
   * const productionRunDetail =
   *   await client.operations.productionRuns.retrieve(
   *     'prru_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductionRunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionRunDetail> {
    return this._client.get(path`/v1/operations/production-runs/${id}`, { query, ...options });
  }

  /**
   * Partially updates a production run. Fails if the run is completed.
   *
   * @example
   * ```ts
   * const productionRunDetail =
   *   await client.operations.productionRuns.update(
   *     'prru_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       number: 'PR-00042',
   *       responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ProductionRunUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductionRunDetail> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/operations/production-runs/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes a production run and its associated batches and order links.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.delete(
   *     'prru_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionRunDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-runs/${id}`, options);
  }

  /**
   * Creates a production run.
   *
   * @example
   * ```ts
   * const productionRunDetail =
   *   await client.operations.productionRuns.productionRuns({
   *     responsible_user_id: 'us_01gf7a8200e9pvbd6bgyq395ae',
   *   });
   * ```
   */
  productionRuns(
    params: ProductionRunProductionRunsParams,
    options?: RequestOptions,
  ): APIPromise<ProductionRunDetail> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/production-runs', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of production runs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.productionRuns.retrieveProductionRuns();
   * ```
   */
  retrieveProductionRuns(
    query: ProductionRunRetrieveProductionRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductionRunRetrieveProductionRunsResponse> {
    return this._client.get('/v1/operations/production-runs', { query, ...options });
  }
}

/**
 * Production run resource for single-object responses.
 */
export interface ProductionRunDetail {
  /**
   * Production run ID.
   */
  id: string;

  /**
   * Batch count.
   */
  batch_count: number;

  /**
   * Completion timestamp.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Production run number, unique per account.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'production_run';

  /**
   * Account user with profile, role, and department.
   */
  responsible_user: AccountUsersAPI.AccountUser | null;

  /**
   * Start timestamp.
   */
  started_at: string | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export interface ProductionRunDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface ProductionRunRetrieveProductionRunsResponse {
  /**
   * Resources in this page.
   */
  data: Array<ProductionRunRetrieveProductionRunsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ProductionRunRetrieveProductionRunsResponse {
  /**
   * Production run resource for list views.
   */
  export interface Data {
    /**
     * Production run ID.
     */
    id: string;

    /**
     * Batch count.
     */
    batch_count: number;

    /**
     * Completion timestamp.
     */
    completed_at: string | null;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Production run number, unique per account.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'production_run';

    /**
     * Account user with profile, role, and department.
     */
    responsible_user: AccountUsersAPI.AccountUser | null;

    /**
     * Start timestamp.
     */
    started_at: string | null;

    /**
     * Last-updated timestamp.
     */
    updated_at: string;
  }
}

export interface ProductionRunRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user'>;
}

export interface ProductionRunUpdateParams {
  /**
   * Body param: Production run number.
   */
  number: string | null;

  /**
   * Body param: Responsible user ID.
   */
  responsible_user_id: string | null;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'responsible_user'>;
}

export interface ProductionRunProductionRunsParams {
  /**
   * Body param: Responsible user ID.
   */
  responsible_user_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'responsible_user'>;
}

export interface ProductionRunRetrieveProductionRunsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Filter by item IDs (batches containing these items).
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by machine IDs (batches using these machines).
   */
  machine_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status: "open" or "closed".
   */
  status?: string;
}

ProductionRuns.Batches = Batches;

export declare namespace ProductionRuns {
  export {
    type ProductionRunDetail as ProductionRunDetail,
    type ProductionRunDeleteResponse as ProductionRunDeleteResponse,
    type ProductionRunRetrieveProductionRunsResponse as ProductionRunRetrieveProductionRunsResponse,
    type ProductionRunRetrieveParams as ProductionRunRetrieveParams,
    type ProductionRunUpdateParams as ProductionRunUpdateParams,
    type ProductionRunProductionRunsParams as ProductionRunProductionRunsParams,
    type ProductionRunRetrieveProductionRunsParams as ProductionRunRetrieveProductionRunsParams,
  };

  export {
    Batches as Batches,
    type ListBatch as ListBatch,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
