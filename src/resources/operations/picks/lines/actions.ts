// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as InvoicesAPI from '../../../finance/invoices';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, update, pick, void, and pack picks and pick lines.
 */
export class Actions extends APIResource {
  /**
   * Marks a pick line as picked.
   *
   * @example
   * ```ts
   * const pickLineDetail =
   *   await client.operations.picks.lines.actions.pick(
   *     'example',
   *     { pick_id: 'pk_016452192feb7952d8393f0105' },
   *   );
   * ```
   */
  pick(
    id: string,
    params: ActionPickParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.PickLineDetail> {
    const { pick_id } = params;
    return this._client.put(path`/v1/operations/picks/${pick_id}/lines/${id}/actions/pick`, options);
  }

  /**
   * Voids a pick line.
   *
   * @example
   * ```ts
   * const pickLineDetail =
   *   await client.operations.picks.lines.actions.void(
   *     'example',
   *     { pick_id: 'pk_016452192feb7952d8393f0105' },
   *   );
   * ```
   */
  void(
    id: string,
    params: ActionVoidParams,
    options?: RequestOptions,
  ): APIPromise<InvoicesAPI.PickLineDetail> {
    const { pick_id } = params;
    return this._client.put(path`/v1/operations/picks/${pick_id}/lines/${id}/actions/void`, options);
  }
}

export interface ActionPickParams {
  /**
   * Pick ID.
   */
  pick_id: string;
}

export interface ActionVoidParams {
  /**
   * Pick ID.
   */
  pick_id: string;
}

export declare namespace Actions {
  export { type ActionPickParams as ActionPickParams, type ActionVoidParams as ActionVoidParams };
}
