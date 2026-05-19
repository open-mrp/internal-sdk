// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PicksAPI from './picks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, update, pick, void, and pack picks and pick lines.
 */
export class Actions extends APIResource {
  /**
   * Packs a pick and creates a shipment from the picked lines.
   *
   * @example
   * ```ts
   * const response = await client.operations.picks.actions.pack(
   *   'id',
   *   { shipment_case_count: 3 },
   * );
   * ```
   */
  pack(id: string, body: ActionPackParams, options?: RequestOptions): APIPromise<ActionPackResponse> {
    return this._client.post(path`/v1/operations/picks/${id}/actions/pack`, { body, ...options });
  }

  /**
   * Marks all lines on a pick as picked.
   *
   * @example
   * ```ts
   * const pickDetail =
   *   await client.operations.picks.actions.updatePick('id');
   * ```
   */
  updatePick(id: string, options?: RequestOptions): APIPromise<PicksAPI.PickDetail> {
    return this._client.put(path`/v1/operations/picks/${id}/actions/pick`, options);
  }

  /**
   * Voids a pick, cancelling all lines.
   *
   * @example
   * ```ts
   * const pickDetail =
   *   await client.operations.picks.actions.updateVoid('id');
   * ```
   */
  updateVoid(id: string, options?: RequestOptions): APIPromise<PicksAPI.PickDetail> {
    return this._client.put(path`/v1/operations/picks/${id}/actions/void`, options);
  }
}

/**
 * PackPickResponse is the result of packing a pick.
 */
export interface ActionPackResponse {
  /**
   * PickDetail is a full pick resource.
   */
  pick: PicksAPI.PickDetail | null;

  /**
   * Created shipment number.
   */
  shipment_number: string;
}

export interface ActionPackParams {
  /**
   * Number of cases for the shipment.
   */
  shipment_case_count: number;
}

export declare namespace Actions {
  export { type ActionPackResponse as ActionPackResponse, type ActionPackParams as ActionPackParams };
}
