// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReceivingOrdersAPI from '../receiving-orders';
import * as CustomersAPI from '../../../sales/customers/customers';
import * as ActionsAPI from './actions';
import { ActionReceiveParams, ActionVoidParams, Actions } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, stock, receive, void, and update receiving orders and receiving order lines.
 */
export class Lines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Updates the received quantity on a receiving order line.
   *
   * Use this to record the quantity that actually arrived — a partial delivery, for
   * example — before stocking the order. Nothing enters inventory until the order is
   * stocked.
   *
   * A line that has been stocked, or a line of a completed order, cannot be changed.
   *
   * This endpoint requires the permission: `receiving_orders:update`.
   *
   * @example
   * ```ts
   * const receivingOrderLine =
   *   await client.operations.receivingOrders.lines.update(
   *     'orln_la01fxgrwcnr',
   *     {
   *       receiving_order_id: 'rcor_iy0usuxcrjj8',
   *       quantity: { value: '50', unit_id: 'un_82bd37dae5po' },
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReceivingOrdersAPI.ReceivingOrderLine> {
    const { receiving_order_id, include, ...body } = params;
    return this._client.patch(path`/v1/operations/receiving-orders/${receiving_order_id}/lines/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * Request to update a receiving order line's quantity.
 */
export interface UpdateReceivingOrderLineRequest {
  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity?: CustomersAPI.QuantityInput;
}

export interface LineUpdateParams {
  /**
   * Path param: Receiving order ID.
   */
  receiving_order_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'order_line'
    | 'order_line.item'
    | 'order_line.quantity_ordered'
    | 'order_line.quantity_ordered.unit'
    | 'order_line.unit_price'
    | 'order_line.unit_price.numerator_unit'
    | 'order_line.unit_price.denominator_unit'
    | 'quantity'
    | 'quantity.unit'
    | 'quantity_ordered'
    | 'quantity_ordered.unit'
  >;

  /**
   * Body param: An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity?: CustomersAPI.QuantityInput;
}

Lines.Actions = Actions;

export declare namespace Lines {
  export {
    type UpdateReceivingOrderLineRequest as UpdateReceivingOrderLineRequest,
    type LineUpdateParams as LineUpdateParams,
  };

  export {
    Actions as Actions,
    type ActionReceiveParams as ActionReceiveParams,
    type ActionVoidParams as ActionVoidParams,
  };
}
