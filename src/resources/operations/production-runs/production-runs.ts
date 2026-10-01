// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionBulkCreateParams,
  ActionExportParams,
  Actions,
  BulkCreateBatchInput,
  BulkCreateProductionRunInput,
  BulkCreateProductionRunsRequest,
  ExportProductionRunsRequest,
} from './actions';
import * as BatchesAPI from './batches';
import { AddBatchesToProductionRunRequest, BatchCreateParams, BatchListParams, Batches } from './batches';
import * as SalesOrdersActionsAPI from '../../sales/sales-orders/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete production runs.
 */
export class ProductionRuns extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a production run.
   *
   * The run number is assigned automatically as the next sequential number for the
   * account. The new run is neither started nor completed. Its work can be planned
   * up front with `batches`, or added later with the add-batches endpoint.
   *
   * This endpoint requires the permission: `production_runs:create`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.create({
   *     responsible_user_id: 'us_43irtlt2ajz6',
   *     batches: [
   *       {
   *         item_id: 'it_pej07ckhvu62',
   *         quantity_value: '100',
   *         quantity_unit_id: 'un_82bd37dae5po',
   *         production_step_id: 'prst_0ht5mkqx5a6t',
   *         machine_ids: ['mc_ffcfk9dxixis'],
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    params: ProductionRunCreateParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersActionsAPI.ProductionRun> {
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
   *     'prru_sglzcyflxk59',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductionRunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrdersActionsAPI.ProductionRun> {
    return this._client.get(path`/v1/operations/production-runs/${id}`, { query, ...options });
  }

  /**
   * Partially updates a production run.
   *
   * Fields not provided retain their current values. A run that has already
   * completed can no longer be updated.
   *
   * This endpoint requires the permission: `production_runs:update`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.update(
   *     'prru_sglzcyflxk59',
   *     {
   *       number: 'PR-00042',
   *       responsible_user_id: 'us_43irtlt2ajz6',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ProductionRunUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesOrdersActionsAPI.ProductionRun> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/production-runs/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of production runs, most recently created first.
   *
   * The `q` search term matches the run number.
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
   * from the run, and the inventory those orders had reserved is released. Any
   * production schedule lines that were released as this run revert to planned so
   * the same work can be released again.
   *
   * This endpoint requires the permission: `production_runs:delete`.
   *
   * @example
   * ```ts
   * const productionRun =
   *   await client.operations.productionRuns.delete(
   *     'prru_sglzcyflxk59',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductionRunDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-runs/${id}`, options);
  }
}

/**
 * Batch to add to a production run.
 */
export interface AddBatchInputRequest {
  /**
   * ID of the item the batch produces.
   */
  item_id: string;

  /**
   * Unit ID for `quantity_value`.
   */
  quantity_unit_id: string;

  /**
   * Good (first-quality) quantity for the batch, as a decimal string.
   */
  quantity_value: string;

  /**
   * IDs of the machines the batch is planned to run on.
   *
   * Printed on the batch's label, and the run's machine filter matches on them.
   */
  machine_ids?: Array<string>;

  /**
   * ID of the production step the batch is recorded against.
   */
  production_step_id?: string;

  /**
   * ID of the scanning station where the batch is expected to be scanned.
   */
  scanning_station_id?: string;

  /**
   * Unit ID for `seconds_value`.
   */
  seconds_unit_id?: string;

  /**
   * Seconds-quality (B-grade) output recorded for the batch, as a decimal string.
   *
   * Ignored unless `seconds_unit_id` is also provided.
   */
  seconds_value?: string;

  /**
   * Unit ID for `waste_value`.
   */
  waste_unit_id?: string;

  /**
   * Scrap quantity generated by the batch, as a decimal string.
   *
   * Ignored unless `waste_unit_id` is also provided.
   */
  waste_value?: string;
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

  /**
   * Batches of work to plan on the new run, at most 500; add more with the
   * add-batches endpoint, or use bulk create.
   *
   * Created in the same transaction as the run, so either the run and all of its
   * batches are created or nothing is. Omit to create an empty run and add batches
   * later.
   */
  batches?: Array<AddBatchInputRequest>;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionRun {
  /**
   * Resources in this page.
   */
  data: Array<SalesOrdersActionsAPI.ProductionRun>;

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
 * Request to update a production run.
 */
export interface UpdateProductionRunRequest {
  /**
   * New production run number.
   *
   * Must be unique within the account; reusing another run's number returns a
   * conflict error.
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

  /**
   * Body param: Batches of work to plan on the new run, at most 500; add more with
   * the add-batches endpoint, or use bulk create.
   *
   * Created in the same transaction as the run, so either the run and all of its
   * batches are created or nothing is. Omit to create an empty run and add batches
   * later.
   */
  batches?: Array<AddBatchInputRequest>;
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
   * Must be unique within the account; reusing another run's number returns a
   * conflict error.
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
   * Only return runs created before this time: a `YYYY-MM-DD` date (the start of
   * that day in UTC) or an RFC 3339 timestamp.
   *
   * A date cuts off at the start of the given day, so runs created during that day
   * are not returned; pass the following day to include them.
   */
  ends_at?: string;

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
   * Only return runs created at or after this time: a `YYYY-MM-DD` date (the start
   * of that day in UTC) or an RFC 3339 timestamp.
   */
  starts_at?: string;

  /**
   * Filter by run status.
   *
   * A run is `open` until every batch in it has been scanned or deleted, at which
   * point it completes and becomes `closed`. Only open runs are returned when this
   * filter is omitted; ask for `closed` to see finished runs, or `all` for both.
   */
  status?: 'open' | 'closed' | 'all';
}

ProductionRuns.Batches = Batches;
ProductionRuns.Actions = Actions;

export declare namespace ProductionRuns {
  export {
    type AddBatchInputRequest as AddBatchInputRequest,
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
    type AddBatchesToProductionRunRequest as AddBatchesToProductionRunRequest,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };

  export {
    Actions as Actions,
    type BulkCreateBatchInput as BulkCreateBatchInput,
    type BulkCreateProductionRunInput as BulkCreateProductionRunInput,
    type BulkCreateProductionRunsRequest as BulkCreateProductionRunsRequest,
    type ExportProductionRunsRequest as ExportProductionRunsRequest,
    type ActionBulkCreateParams as ActionBulkCreateParams,
    type ActionExportParams as ActionExportParams,
  };
}
