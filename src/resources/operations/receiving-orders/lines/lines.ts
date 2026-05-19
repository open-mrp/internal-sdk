// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchesAPI from '../../batches/batches';
import * as LinesAPI from '../../../sales/sales-orders/lines';
import * as ActionsAPI from './actions';
import { ActionUpdateReceiveParams, ActionUpdateVoidParams, Actions } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Lines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Partially updates a receiving order line's quantity value.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.update('', {
   *     receiving_order_id: '',
   *     quantity_value: '50',
   *   });
   * ```
   */
  update(id: string, params: LineUpdateParams, options?: RequestOptions): APIPromise<ReceivingOrderLine> {
    const { receiving_order_id, ...body } = params;
    return this._client.patch(path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}`, {
      body,
      ...options,
    });
  }
}

/**
 * Line item in a receiving order.
 */
export interface ReceivingOrderLine {
  /**
   * Receiving order line ID.
   */
  id: string;

  /**
   * Timestamp when the line was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'receiving_order_line';

  /**
   * Full sales order line resource.
   */
  order_line: LinesAPI.SalesOrderLineDetail | null;

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  rejected_quantity: BatchesAPI.Quantity | null;

  /**
   * Timestamp when the line was stocked.
   */
  stocked_at: string | null;

  /**
   * Timestamp when the line was last updated.
   */
  updated_at: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Receiving order ID.
   */
  receiving_order_id: string;

  /**
   * Body param: Quantity value to set for this line.
   */
  quantity_value?: string;
}

Lines.Actions = Actions;

export declare namespace Lines {
  export { type ReceivingOrderLine as ReceivingOrderLine, type LineUpdateParams as LineUpdateParams };

  export {
    Actions as Actions,
    type ActionUpdateReceiveParams as ActionUpdateReceiveParams,
    type ActionUpdateVoidParams as ActionUpdateVoidParams,
  };
}
