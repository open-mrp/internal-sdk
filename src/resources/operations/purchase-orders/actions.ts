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
   * Deletes multiple purchase orders, each along with its lines, email contacts, and
   * receiving order.
   *
   * The whole request is all-or-nothing: if any ID cannot be found in your account
   * or refers to an order in `fulfilled` status, nothing is deleted.
   *
   * This endpoint requires the permission: `purchase_orders:delete`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.purchaseOrders.actions.bulkDelete(
   *     { purchase_order_ids: ['po_3ov2ym1pca8m'] },
   *   );
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/operations/purchase-orders/actions/bulk-delete', { body, ...options });
  }

  /**
   * Moves a purchase order through its lifecycle.
   *
   * Supported actions: `issue` (`estimate` to `issued`), `unissue` (`issued` back to
   * `estimate`), `close` (`issued` to `fulfilled`), and `open` (`fulfilled` back to
   * `issued`). Each action is only valid from the status noted; otherwise the
   * request fails validation.
   *
   * This endpoint requires the permission: `purchase_orders:update`.
   *
   * @example
   * ```ts
   * const purchaseOrder =
   *   await client.operations.purchaseOrders.actions.changeStatus(
   *     'po_3ov2ym1pca8m',
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
   * IDs of the purchase orders to delete.
   */
  purchase_order_ids: Array<string>;
}

/**
 * Request to change the status of a purchase order.
 */
export interface ChangePurchaseOrderStatusRequest {
  /**
   * Whether to email the purchase order to the order's contacts.
   *
   * Only applies to the `issue` action. When `true`, the purchase order submission
   * email is sent to the order's email contacts and `acknowledgment_status` is set
   * to `sent`. An order with no email contacts still moves to `sent` even though no
   * email goes out.
   */
  send_email: boolean;

  /**
   * The lifecycle transition to apply.
   *
   * - `issue`: move an `estimate` order to `issued`. Creates the order's receiving
   *   order with a line for each order line.
   * - `unissue`: move an `issued` order back to `estimate`. Deletes the receiving
   *   order.
   * - `close`: move an `issued` order to `fulfilled`. Marks the receiving order
   *   complete.
   * - `open`: move a `fulfilled` order back to `issued`. Re-opens the receiving
   *   order.
   */
  status_change: string;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * IDs of the purchase orders to delete.
   */
  purchase_order_ids: Array<string>;
}

export interface ActionChangeStatusParams {
  /**
   * Body param: Whether to email the purchase order to the order's contacts.
   *
   * Only applies to the `issue` action. When `true`, the purchase order submission
   * email is sent to the order's email contacts and `acknowledgment_status` is set
   * to `sent`. An order with no email contacts still moves to `sent` even though no
   * email goes out.
   */
  send_email: boolean;

  /**
   * Body param: The lifecycle transition to apply.
   *
   * - `issue`: move an `estimate` order to `issued`. Creates the order's receiving
   *   order with a line for each order line.
   * - `unissue`: move an `issued` order back to `estimate`. Deletes the receiving
   *   order.
   * - `close`: move an `issued` order to `fulfilled`. Marks the receiving order
   *   complete.
   * - `open`: move a `fulfilled` order back to `issued`. Re-opens the receiving
   *   order.
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
