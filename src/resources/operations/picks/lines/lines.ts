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
   * Updates a pick line's picked quantity.
   *
   * Use this to record a short or partial pick; Pick Pick Line fills in the full
   * outstanding quantity instead.
   *
   * This endpoint requires the permission: `picks:update`.
   *
   * @example
   * ```ts
   * const pickLine = await client.operations.picks.lines.update(
   *   'example',
   *   {
   *     pick_id: 'pk_6eilj488bq8d',
   *     quantity_value: '10.000000000000000000000000000000',
   *   },
   * );
   * ```
   */
  update(id: string, params: LineUpdateParams, options?: RequestOptions): APIPromise<InvoicesAPI.PickLine> {
    const { pick_id, ...body } = params;
    return this._client.patch(path`/v1/operations/picks/${pick_id}/lines/${id}`, { body, ...options });
  }
}

/**
 * Request to update a pick line's picked quantity.
 */
export interface UpdatePickLineRequest {
  /**
   * New picked quantity for the line, as a decimal string.
   *
   * Interpreted in the line's existing quantity unit, which this endpoint cannot
   * change. The value is stored as given and is not capped at the ordered quantity.
   */
  quantity_value?: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Pick ID.
   */
  pick_id: string;

  /**
   * Body param: New picked quantity for the line, as a decimal string.
   *
   * Interpreted in the line's existing quantity unit, which this endpoint cannot
   * change. The value is stored as given and is not capped at the ordered quantity.
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
