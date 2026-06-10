// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as BatchesAPI from './batches';
import {
  AddBatchInputRequest,
  AddBatchesToProductionRunRequest,
  BatchCreateParams,
  BatchListParams,
  Batches,
} from './batches';
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
   * @example
   * ```ts
   * const productionRunDetail =
   *   await client.operations.productionRuns.create({
   *     responsible_user_id: 'us_0151164dcaea4cbded27b50aae',
   *   });
   * ```
   */
  create(params: ProductionRunCreateParams, options?: RequestOptions): APIPromise<ProductionRunDetail> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/production-runs', { query: { include }, body, ...options });
  }

  /**
   * Returns a production run by ID.
   *
   * @example
   * ```ts
   * const productionRunDetail =
   *   await client.operations.productionRuns.retrieve(
   *     'prru_0141c28081df4faac0fe726c41',
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
  ): APIPromise<ProductionRunDetail> {
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
   * @example
   * ```ts
   * const listProductionRunSummary =
   *   await client.operations.productionRuns.list();
   * ```
   */
  list(
    query: ProductionRunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductionRunSummary> {
    return this._client.get('/v1/operations/production-runs', { query, ...options });
  }

  /**
   * Deletes a production run and its associated batches and order links.
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
   * Responsible user ID.
   */
  responsible_user_id: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductionRunSummary {
  /**
   * Resources in this page.
   */
  data: Array<ProductionRunSummary>;

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
   * Account user with role and department. Profile fields (name, email, username,
   * image URL) live on the expandable user sub-resource.
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

/**
 * Production run resource for list views.
 */
export interface ProductionRunSummary {
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
   * Account user with role and department. Profile fields (name, email, username,
   * image URL) live on the expandable user sub-resource.
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

/**
 * Request to update a production run.
 */
export interface UpdateProductionRunRequest {
  /**
   * Production run number.
   */
  number?: string;

  /**
   * Responsible user ID.
   */
  responsible_user_id?: string;
}

export interface ProductionRunDeleteResponse {}

export interface ProductionRunCreateParams {
  /**
   * Body param: Responsible user ID.
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
   * Body param: Production run number.
   */
  number?: string;

  /**
   * Body param: Responsible user ID.
   */
  responsible_user_id?: string;
}

export interface ProductionRunListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'responsible_user' | 'responsible_user.user'>;

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
    type CreateProductionRunRequest as CreateProductionRunRequest,
    type ListProductionRunSummary as ListProductionRunSummary,
    type ProductionRunDetail as ProductionRunDetail,
    type ProductionRunSummary as ProductionRunSummary,
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
