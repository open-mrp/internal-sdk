// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete purchase orders.
 */
export class Actions extends APIResource {
  /**
   * Deletes multiple purchase orders.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.purchaseOrders.actions.bulkDelete(
   *     {
   *       purchase_order_ids: ['po_0169aa3a722b081b117ac0e44f'],
   *     },
   *   );
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/operations/purchase-orders/actions/bulk-delete', { body, ...options });
  }

  /**
   * Changes the status of a purchase order. Supported actions: issue (draft to
   * issued), unissue (issued to draft), close (issued to closed), open (closed to
   * issued).
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.actions.changeStatus(
   *     'po_0169aa3a722b081b117ac0e44f',
   *     { send_email: true, status_change: 'issue' },
   *   );
   * ```
   */
  changeStatus(
    id: string,
    params: ActionChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.PurchaseOrder> {
    const { include, ...body } = params;
    return this._client.put(path`/v1/operations/purchase-orders/${id}/actions/change-status`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * Request to delete multiple purchase orders.
 */
export interface BulkDeletePurchaseOrdersRequest {
  /**
   * Purchase order IDs.
   */
  purchase_order_ids: Array<string>;
}

/**
 * Request to change the status of a purchase order.
 */
export interface ChangePurchaseOrderStatusRequest {
  /**
   * Whether to send a notification email.
   */
  send_email: boolean;

  /**
   * Status change action (e.g., "issue", "unissue", "close", "open").
   */
  status_change: string;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Purchase order IDs.
   */
  purchase_order_ids: Array<string>;
}

export interface ActionChangeStatusParams {
  /**
   * Body param: Whether to send a notification email.
   */
  send_email: boolean;

  /**
   * Body param: Status change action (e.g., "issue", "unissue", "close", "open").
   */
  status_change: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'supplier'
    | 'bill_to_address'
    | 'ship_to_address'
    | 'freight'
    | 'payment_term'
    | 'shipping_term'
    | 'receiving_order'
    | 'lines'
    | 'contacts'
  >;
}

export declare namespace Actions {
  export {
    type BulkDeletePurchaseOrdersRequest as BulkDeletePurchaseOrdersRequest,
    type ChangePurchaseOrderStatusRequest as ChangePurchaseOrderStatusRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionChangeStatusParams as ActionChangeStatusParams,
  };
}
