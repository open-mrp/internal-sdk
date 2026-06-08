// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as InvoicesAPI from '../../../finance/invoices';
import * as ActionsAPI from './actions';
import { ActionPickParams, ActionVoidParams, Actions } from './actions';
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
   * const pickLine = await client.operations.picks.lines.update(
   *   'example',
   *   { pick_id: 'pk_016452192feb7952d8393f0105' },
   * );
   * ```
   */
  update(id: string, params: LineUpdateParams, options?: RequestOptions): APIPromise<InvoicesAPI.PickLine> {
    const { pick_id, ...body } = params;
    return this._client.patch(path`/v1/operations/picks/${pick_id}/lines/${id}`, { body, ...options });
  }
}

/**
 * UpdatePickLineRequest is the request to update a pick line's quantity.
 */
export interface UpdatePickLineRequest {
  /**
   * Quantity value to set for this line.
   */
  quantity_value?: string;
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
  export { type UpdatePickLineRequest as UpdatePickLineRequest, type LineUpdateParams as LineUpdateParams };

  export {
    Actions as Actions,
    type ActionPickParams as ActionPickParams,
    type ActionVoidParams as ActionVoidParams,
  };
}
