// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchesAPI from '../../batches/batches';
import * as LinesAPI from '../../../sales/sales-orders/lines';
import * as ActionsAPI from './actions';
import { ActionUpdatePickParams, ActionUpdateVoidParams, Actions } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, update, pick, void, and pack picks and pick lines.
 */
export class Lines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Partially updates a pick line's quantity value.
   *
   * @example
   * ```ts
   * const pickLineDetail =
   *   await client.operations.picks.lines.update('', {
   *     pick_id: '',
   *     quantity_value: '10.000000000000000000000000000000',
   *   });
   * ```
   */
  update(id: string, params: LineUpdateParams, options?: RequestOptions): APIPromise<PickLineDetail> {
    const { pick_id, ...body } = params;
    return this._client.patch(path`/v1/operations/picks/${pick_id}/lines/${id}`, { body, ...options });
  }
}

/**
 * PickLineDetail is a pick line resource.
 */
export interface PickLineDetail {
  /**
   * Pick line ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'pick_line';

  /**
   * Value with an associated unit.
   */
  ordered_quantity: BatchesAPI.Quantity | null;

  /**
   * Timestamp when the line was packed.
   */
  packed_at: string | null;

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Full sales order line resource.
   */
  sales_order_line: LinesAPI.SalesOrderLineDetail | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Pick ID.
   */
  pick_id: string;

  /**
   * Body param: Quantity value to set for this line.
   */
  quantity_value?: string;
}

Lines.Actions = Actions;

export declare namespace Lines {
  export { type PickLineDetail as PickLineDetail, type LineUpdateParams as LineUpdateParams };

  export {
    Actions as Actions,
    type ActionUpdatePickParams as ActionUpdatePickParams,
    type ActionUpdateVoidParams as ActionUpdateVoidParams,
  };
}
