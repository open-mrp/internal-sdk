// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LinesAPI from './lines';
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
   *   await client.operations.picks.lines.actions.updatePick(
   *     'example',
   *     { pick_id: 'pk_01jm4r6700f8nwq3v5hx2d9ktp' },
   *   );
   * ```
   */
  updatePick(
    id: string,
    params: ActionUpdatePickParams,
    options?: RequestOptions,
  ): APIPromise<LinesAPI.PickLineDetail> {
    const { pick_id } = params;
    return this._client.put(path`/v1/operations/picks/${pick_id}/lines/${id}/actions/pick`, options);
  }

  /**
   * Voids a pick line.
   *
   * @example
   * ```ts
   * const pickLineDetail =
   *   await client.operations.picks.lines.actions.updateVoid(
   *     'example',
   *     { pick_id: 'pk_01jm4r6700f8nwq3v5hx2d9ktp' },
   *   );
   * ```
   */
  updateVoid(
    id: string,
    params: ActionUpdateVoidParams,
    options?: RequestOptions,
  ): APIPromise<LinesAPI.PickLineDetail> {
    const { pick_id } = params;
    return this._client.put(path`/v1/operations/picks/${pick_id}/lines/${id}/actions/void`, options);
  }
}

export interface ActionUpdatePickParams {
  /**
   * Pick ID.
   */
  pick_id: string;
}

export interface ActionUpdateVoidParams {
  /**
   * Pick ID.
   */
  pick_id: string;
}

export declare namespace Actions {
  export {
    type ActionUpdatePickParams as ActionUpdatePickParams,
    type ActionUpdateVoidParams as ActionUpdateVoidParams,
  };
}
