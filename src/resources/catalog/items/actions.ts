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
   * Newly created items start with a unit value, unit cost, and burn rate of zero,
   * counted in their category's base unit; set the real figures afterwards.
   *
   * This endpoint requires the permission: `items:create`.
   *
   * @example
   * ```ts
   * const bulkCreateItemsResponse =
   *   await client.catalog.items.actions.bulkCreate({
   *     items: [
   *       {
   *         sku: 'ALM-FLOUR-25LB',
   *         description: 'Raw almond flour, 25 lb bag',
   *         item_category_id: 'ic_d06g9c6yc9ck',
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
   * Reconciles inventory for multiple items by SKU in one call, the bulk equivalent
   * of counting stock and correcting the books.
   *
   * `reconcile_type` controls whether each quantity is added to the item's current
   * quantity (`addition`) or replaces it (`force`). The figure a `force` measures
   * against is what is on hand net of demand nothing has covered, the same basis the
   * single-item endpoint uses. The response reports each item as reconciled, skipped
   * (e.g. unknown SKU), or errored (e.g. unknown unit), so a problem with one item
   * does not fail the rest of the batch.
   *
   * Each correction is written to the item's inventory audit trail as a user
   * correction, attributed to the caller.
   *
   * This endpoint requires the permission: `items:create`.
   *
   * @example
   * ```ts
   * const bulkReconcileItemsResponse =
   *   await client.catalog.items.actions.bulkReconcile({
   *     data: [
   *       {
   *         sku: 'ALM-2024-1001',
   *         unit: 'kg',
   *         quantity: '10.5',
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
   * Downloads every item in your account, with its category and on-hand inventory,
   * as an Excel workbook named `items.xlsx`.
   *
   * The export takes no filters and is not paginated: it always covers the whole
   * catalog, one row per item, ordered by SKU.
   *
   * This endpoint requires the permission: `items:read`.
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
 * One item to create in a bulk create request.
 */
export interface BulkCreateItemInput {
  /**
   * ID of the category to assign to the item.
   *
   * The category determines the base unit the item's rates are expressed in, so
   * choose one whose unit group matches how the item is counted.
   */
  item_category_id: string;

  /**
   * SKU for the new item, unique within the account.
   *
   * If an item with this SKU already exists, that item is updated in place
   * (description, category, and product line) instead of a new item being created;
   * this path additionally requires permission to update items, and the result for
   * the row is still reported with status `created`.
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
 * Request to create multiple items of the same type.
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
 * One item to reconcile in a bulk reconcile request.
 */
export interface BulkReconcileItemInput {
  /**
   * Quantity to apply, interpreted according to the request's `reconcile_type`.
   *
   * A decimal string rather than a number: a quantity that has been through a binary
   * float is not the quantity you sent.
   */
  quantity: string;

  /**
   * SKU of the item to reconcile.
   *
   * Items whose SKU does not match an existing item are reported in the response's
   * `skipped_items` rather than failing the request.
   */
  sku: string;

  /**
   * Abbreviation of a unit available to your account (e.g. `kg`).
   *
   * The unit is checked for existence only: the quantity is always recorded in the
   * item's own base unit, so send figures already expressed in that unit. Rows
   * naming an abbreviation that matches no built-in or account-defined unit are
   * reported in the response's `errors`.
   */
  unit: string;
}

/**
 * Request to reconcile inventory for many items at once.
 */
export interface BulkReconcileItemsRequest {
  /**
   * Items to reconcile.
   */
  data: Array<BulkReconcileItemInput>;

  /**
   * How each item's quantity is applied to its current quantity.
   *
   * - `addition`: adds the quantity to the item's current quantity.
   * - `force`: sets the item's current quantity to exactly the given quantity.
   */
  reconcile_type: string;
}

/**
 * The outcome of a bulk inventory reconciliation, reported as three separate
 * lists.
 */
export interface BulkReconcileItemsResponse {
  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  errors: ListReconcileErrorResult | null;

  /**
   * Resource type identifier.
   */
  object: 'bulk_reconcile_items_response';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  reconciled_items: ListReconciledItemResult | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A submitted row that could not be reconciled.
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
 * An item whose on-hand quantity was successfully reconciled.
 *
 * Both quantities are expressed in the item's own base unit, not in the unit
 * submitted with the request.
 */
export interface ReconciledItemResult {
  /**
   * Item ID.
   */
  item_id: string;

  /**
   * Quantity after the reconciliation, as a decimal string.
   */
  new_quantity: string;

  /**
   * Quantity before the reconciliation, as a decimal string.
   */
  previous_quantity: string;

  /**
   * Item SKU.
   */
  sku: string;
}

/**
 * A submitted row that was skipped rather than reconciled.
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
   * How each item's quantity is applied to its current quantity.
   *
   * - `addition`: adds the quantity to the item's current quantity.
   * - `force`: sets the item's current quantity to exactly the given quantity.
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
