// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
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
   * const response =
   *   await client.catalog.items.actions.bulkCreate({
   *     items: [
   *       {
   *         sku: 'ALM-FLOUR-25LB',
   *         description: 'Raw almond flour, 25 lb bag',
   *         item_category_id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp',
   *       },
   *     ],
   *     type: 'material',
   *   });
   * ```
   */
  bulkCreate(body: ActionBulkCreateParams, options?: RequestOptions): APIPromise<ActionBulkCreateResponse> {
    return this._client.post('/v1/catalog/items/actions/bulk-create', { body, ...options });
  }

  /**
   * Reconciles inventory for multiple items by SKU, either adding to or forcing the
   * exact quantity depending on reconcile_type.
   *
   * @example
   * ```ts
   * const response =
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
  ): APIPromise<ActionBulkReconcileResponse> {
    return this._client.post('/v1/catalog/items/actions/bulk-reconcile', { body, ...options });
  }

  /**
   * Exports all items with on-hand inventory as an Excel file.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.items.actions.retrieveExport();
   * ```
   */
  retrieveExport(options?: RequestOptions): APIPromise<ActionRetrieveExportResponse> {
    return this._client.get('/v1/catalog/items/actions/export', options);
  }
}

/**
 * BulkCreateItemsResponse represents the response from the bulk create items
 * endpoint.
 */
export interface ActionBulkCreateResponse {
  /**
   * The results of each item creation.
   */
  data: Array<ActionBulkCreateResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';
}

export namespace ActionBulkCreateResponse {
  /**
   * BulkCreateItemResult represents the result of creating a single item in a bulk
   * operation.
   */
  export interface Data {
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
}

/**
 * BulkReconcileItemsResponse is the response from bulk reconciling items.
 */
export interface ActionBulkReconcileResponse {
  /**
   * List represents a paginated list of resources.
   */
  errors: ActionBulkReconcileResponse.Errors | null;

  /**
   * Resource type identifier.
   */
  object: 'bulk_reconcile_items_response';

  /**
   * List represents a paginated list of resources.
   */
  reconciled_items: ActionBulkReconcileResponse.ReconciledItems | null;

  /**
   * List represents a paginated list of resources.
   */
  skipped_items: ActionBulkReconcileResponse.SkippedItems | null;
}

export namespace ActionBulkReconcileResponse {
  /**
   * List represents a paginated list of resources.
   */
  export interface Errors {
    /**
     * Resources in this page.
     */
    data: Array<Errors.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Errors {
    /**
     * ReconcileErrorResult is an error during reconciliation.
     */
    export interface Data {
      /**
       * Error message.
       */
      error: string;

      /**
       * Item SKU.
       */
      sku: string;
    }
  }

  /**
   * List represents a paginated list of resources.
   */
  export interface ReconciledItems {
    /**
     * Resources in this page.
     */
    data: Array<ReconciledItems.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace ReconciledItems {
    /**
     * ReconciledItemResult is a successfully reconciled item.
     */
    export interface Data {
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
  }

  /**
   * List represents a paginated list of resources.
   */
  export interface SkippedItems {
    /**
     * Resources in this page.
     */
    data: Array<SkippedItems.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace SkippedItems {
    /**
     * SkippedItemResult is a skipped item during reconciliation.
     */
    export interface Data {
      /**
       * Reason for skipping.
       */
      reason: string;

      /**
       * Item SKU.
       */
      sku: string;
    }
  }
}

/**
 * FileDownload is a response type for endpoints that return a file (e.g. Excel
 * export). When the service returns \*FileDownload, the handler writes the body
 * with Content-Type and Content-Disposition.
 */
export interface ActionRetrieveExportResponse {}

export interface ActionBulkCreateParams {
  /**
   * Items to create.
   */
  items: Array<ActionBulkCreateParams.Item>;

  /**
   * Item type (product, material, or part).
   */
  type: string;
}

export namespace ActionBulkCreateParams {
  /**
   * BulkCreateItemInput is the input for a single item in a bulk create operation.
   */
  export interface Item {
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
}

export interface ActionBulkReconcileParams {
  /**
   * Items to reconcile.
   */
  data: Array<ActionBulkReconcileParams.Data>;

  /**
   * Reconcile type: "addition" or "force".
   */
  reconcile_type: string;
}

export namespace ActionBulkReconcileParams {
  /**
   * BulkReconcileItemInput is the input for a single item in a bulk reconcile
   * operation.
   */
  export interface Data {
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
}

export declare namespace Actions {
  export {
    type ActionBulkCreateResponse as ActionBulkCreateResponse,
    type ActionBulkReconcileResponse as ActionBulkReconcileResponse,
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionBulkCreateParams as ActionBulkCreateParams,
    type ActionBulkReconcileParams as ActionBulkReconcileParams,
  };
}
