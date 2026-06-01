// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage inventory items.
 */
export class Actions extends APIResource {
  /**
   * Creates multiple items in a single operation, returning per-item results
   * indicating success or failure.
   *
   * @example
   * ```ts
   * const bulkCreateItemsResponse =
   *   await client.catalog.items.actions.bulkCreate({
   *     items: [
   *       {
   *         sku: 'ALM-FLOUR-25LB',
   *         description: 'Raw almond flour, 25 lb bag',
   *         item_category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
   *       },
   *     ],
   *     type: 'material',
   *   });
   * ```
   */
  bulkCreate(body: ActionBulkCreateParams, options?: RequestOptions): APIPromise<BulkCreateItemsResponse> {
    return this._client.post('/v1/catalog/items/actions/bulk-create', { body, ...options });
  }

  /**
   * Reconciles inventory for multiple items by SKU, either adding to or forcing the
   * exact quantity depending on reconcile_type.
   *
   * @example
   * ```ts
   * const bulkReconcileItemsResponse =
   *   await client.catalog.items.actions.bulkReconcile({
   *     data: [
   *       {
   *         sku: 'ALM-2024-1001',
   *         unit: 'kg',
   *         quantity: 10.5,
   *       },
   *     ],
   *     reconcile_type: 'addition',
   *   });
   * ```
   */
  bulkReconcile(
    body: ActionBulkReconcileParams,
    options?: RequestOptions,
  ): APIPromise<BulkReconcileItemsResponse> {
    return this._client.post('/v1/catalog/items/actions/bulk-reconcile', { body, ...options });
  }

  /**
   * Exports all items with on-hand inventory as an Excel file.
   *
   * @example
   * ```ts
   * const fileDownload =
   *   await client.catalog.items.actions.export();
   * ```
   */
  export(options?: RequestOptions): APIPromise<FileDownload> {
    return this._client.get('/v1/catalog/items/actions/export', options);
  }
}

/**
 * BulkCreateItemInput is the input for a single item in a bulk create operation.
 */
export interface BulkCreateItemInput {
  /**
   * Item category ID.
   */
  item_category_id: string;

  /**
   * Item SKU.
   */
  sku: string;

  /**
   * Item description.
   */
  description?: string;

  /**
   * Product line ID.
   */
  product_line_id?: string;
}

/**
 * BulkCreateItemResult represents the result of creating a single item in a bulk
 * operation.
 */
export interface BulkCreateItemResult {
  /**
   * The error message if the item failed to create.
   */
  error: string | null;

  /**
   * The ID of the created item.
   */
  item_id: string | null;

  /**
   * The SKU of the item.
   */
  sku: string;

  /**
   * Outcome of the create attempt: "created" or "failed".
   */
  status: string;
}

/**
 * BulkCreateItemsRequest is the request to create multiple items.
 */
export interface BulkCreateItemsRequest {
  /**
   * Items to create.
   */
  items: Array<BulkCreateItemInput>;

  /**
   * Item type (product, material, or part).
   */
  type: string;
}

/**
 * BulkCreateItemsResponse represents the response from the bulk create items
 * endpoint.
 */
export interface BulkCreateItemsResponse {
  /**
   * The results of each item creation.
   */
  data: Array<BulkCreateItemResult>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

/**
 * BulkReconcileItemInput is the input for a single item in a bulk reconcile
 * operation.
 */
export interface BulkReconcileItemInput {
  /**
   * Quantity.
   */
  quantity: number;

  /**
   * Item SKU.
   */
  sku: string;

  /**
   * Unit abbreviation for the quantity.
   */
  unit: string;
}

/**
 * BulkReconcileItemsRequest is the request to bulk reconcile item inventory.
 */
export interface BulkReconcileItemsRequest {
  /**
   * Items to reconcile.
   */
  data: Array<BulkReconcileItemInput>;

  /**
   * Reconcile type: "addition" or "force".
   */
  reconcile_type: string;
}

/**
 * BulkReconcileItemsResponse is the response from bulk reconciling items.
 */
export interface BulkReconcileItemsResponse {
  /**
   * List represents a paginated list of resources.
   */
  errors: ListReconcileErrorResult | null;

  /**
   * Resource type identifier.
   */
  object: 'bulk_reconcile_items_response';

  /**
   * List represents a paginated list of resources.
   */
  reconciled_items: ListReconciledItemResult | null;

  /**
   * List represents a paginated list of resources.
   */
  skipped_items: ListSkippedItemResult | null;
}

/**
 * FileDownload is a response type for endpoints that return a file (e.g. Excel
 * export). When the service returns \*FileDownload, the handler writes the body
 * with Content-Type and Content-Disposition.
 */
export interface FileDownload {}

/**
 * List represents a paginated list of resources.
 */
export interface ListReconcileErrorResult {
  /**
   * Resources in this page.
   */
  data: Array<ReconcileErrorResult>;

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
export interface ListReconciledItemResult {
  /**
   * Resources in this page.
   */
  data: Array<ReconciledItemResult>;

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
export interface ListSkippedItemResult {
  /**
   * Resources in this page.
   */
  data: Array<SkippedItemResult>;

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
 * ReconcileErrorResult is an error during reconciliation.
 */
export interface ReconcileErrorResult {
  /**
   * Error message.
   */
  error: string;

  /**
   * Item SKU.
   */
  sku: string;
}

/**
 * ReconciledItemResult is a successfully reconciled item.
 */
export interface ReconciledItemResult {
  /**
   * Item ID.
   */
  item_id: string;

  /**
   * New quantity.
   */
  new_quantity: number;

  /**
   * Previous quantity.
   */
  previous_quantity: number;

  /**
   * Item SKU.
   */
  sku: string;
}

/**
 * SkippedItemResult is a skipped item during reconciliation.
 */
export interface SkippedItemResult {
  /**
   * Reason for skipping.
   */
  reason: string;

  /**
   * Item SKU.
   */
  sku: string;
}

export interface ActionBulkCreateParams {
  /**
   * Items to create.
   */
  items: Array<BulkCreateItemInput>;

  /**
   * Item type (product, material, or part).
   */
  type: string;
}

export interface ActionBulkReconcileParams {
  /**
   * Items to reconcile.
   */
  data: Array<BulkReconcileItemInput>;

  /**
   * Reconcile type: "addition" or "force".
   */
  reconcile_type: string;
}

export declare namespace Actions {
  export {
    type BulkCreateItemInput as BulkCreateItemInput,
    type BulkCreateItemResult as BulkCreateItemResult,
    type BulkCreateItemsRequest as BulkCreateItemsRequest,
    type BulkCreateItemsResponse as BulkCreateItemsResponse,
    type BulkReconcileItemInput as BulkReconcileItemInput,
    type BulkReconcileItemsRequest as BulkReconcileItemsRequest,
    type BulkReconcileItemsResponse as BulkReconcileItemsResponse,
    type FileDownload as FileDownload,
    type ListReconcileErrorResult as ListReconcileErrorResult,
    type ListReconciledItemResult as ListReconciledItemResult,
    type ListSkippedItemResult as ListSkippedItemResult,
    type ReconcileErrorResult as ReconcileErrorResult,
    type ReconciledItemResult as ReconciledItemResult,
    type SkippedItemResult as SkippedItemResult,
    type ActionBulkCreateParams as ActionBulkCreateParams,
    type ActionBulkReconcileParams as ActionBulkReconcileParams,
  };
}
