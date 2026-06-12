// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage suppliers.
 */
export class Actions extends APIResource {
  /**
   * Deletes multiple suppliers in a single atomic operation.
   *
   * Each supplier's saved addresses and any users belonging to it are deleted along
   * with it. If any supplier ID is not found, no suppliers are deleted.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.suppliers.actions.bulkDelete({
   *     supplier_ids: ['ac_0177902104bccac5fbb173cd96'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/operations/suppliers/actions/bulk-delete', { body, ...options });
  }
}

/**
 * BulkDeleteSuppliersRequest is the request to bulk delete suppliers.
 */
export interface BulkDeleteSuppliersRequest {
  /**
   * Supplier IDs to delete.
   */
  supplier_ids: Array<string>;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Supplier IDs to delete.
   */
  supplier_ids: Array<string>;
}

export declare namespace Actions {
  export {
    type BulkDeleteSuppliersRequest as BulkDeleteSuppliersRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
  };
}
