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
   * Creates multiple items of a single type in one call, returning a per-item result
   * indicating success or failure.
   *
   * An input whose SKU already exists updates the existing item in place instead of
   * creating a duplicate. A failure on one item does not abort the rest of the
   * batch; check each result's status.
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
   * Reconciles on-hand inventory for multiple items by SKU in one call.
   *
   * `reconcile_type` controls whether each quantity is added to the item's current
   * on-hand quantity (`addition`) or replaces it (`force`). The response reports
   * each item as reconciled, skipped (e.g. unknown SKU), or errored (e.g. unknown
   * unit), so a problem with one item does not fail the rest of the batch.
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
   * Exports all items, with their on-hand inventory quantities, as an Excel file
   * (`items.xlsx`).
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
   * ID of the category to assign to the item.
   *
   * The category determines the base unit the item's rates are expressed in.
   */
  item_category_id: string;

  /**
   * SKU for the new item, unique within the account.
   *
   * If an item with this SKU already exists, that item is updated in place
   * (description, category, and product line) instead of a new item being created;
   * this path additionally requires permission to update items.
   */
  sku: string;

  /**
   * Item description.
   */
  description?: string;

  /**
   * ID of the product line to assign the item's product to.
   *
   * Only applies when `type` is `product`; ignored for materials and parts.
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
   * The item type applied to every item in the request.
   *
   * - `product`: a finished product.
   * - `material`: a raw material or component consumed in production.
   * - `part`: a part used in production.
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
   * Quantity to apply, interpreted according to the request's `reconcile_type`.
   */
  quantity: number;

  /**
   * SKU of the item to reconcile.
   *
   * Items whose SKU does not match an existing item are reported in the response's
   * `skipped_items` rather than failing the request.
   */
  sku: string;

  /**
   * Abbreviation of the unit the quantity is expressed in (e.g. `kg`).
   *
   * Must match a unit defined on the account; items with an unknown unit are
   * reported in the response's `errors`.
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
   * How each item's quantity is applied to its current on-hand inventory.
   *
   * - `addition`: adds the quantity to the item's current on-hand quantity.
   * - `force`: sets the item's on-hand quantity to exactly the given quantity.
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
   * On-hand quantity after the reconciliation.
   */
  new_quantity: number;

  /**
   * On-hand quantity before the reconciliation.
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
   * Human-readable reason the item was skipped.
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
   * The item type applied to every item in the request.
   *
   * - `product`: a finished product.
   * - `material`: a raw material or component consumed in production.
   * - `part`: a part used in production.
   */
  type: string;
}

export interface ActionBulkReconcileParams {
  /**
   * Items to reconcile.
   */
  data: Array<BulkReconcileItemInput>;

  /**
   * How each item's quantity is applied to its current on-hand inventory.
   *
   * - `addition`: adds the quantity to the item's current on-hand quantity.
   * - `force`: sets the item's on-hand quantity to exactly the given quantity.
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
