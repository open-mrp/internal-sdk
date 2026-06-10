// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvoicesAPI from '../../finance/invoices';
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
   * const packPickResponse =
   *   await client.operations.picks.actions.pack(
   *     'pk_016452192feb7952d8393f0105',
   *     { shipment_case_count: 3 },
   *   );
   * ```
   */
  pack(id: string, body: ActionPackParams, options?: RequestOptions): APIPromise<PackPickResponse> {
    return this._client.post(path`/v1/operations/picks/${id}/actions/pack`, { body, ...options });
  }

  /**
   * Marks all lines on a pick as picked.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.actions.pick(
   *   'pk_016452192feb7952d8393f0105',
   * );
   * ```
   */
  pick(id: string, options?: RequestOptions): APIPromise<InvoicesAPI.Pick> {
    return this._client.put(path`/v1/operations/picks/${id}/actions/pick`, options);
  }

  /**
   * Voids a pick, cancelling all lines.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.actions.void(
   *   'pk_016452192feb7952d8393f0105',
   * );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<InvoicesAPI.Pick> {
    return this._client.put(path`/v1/operations/picks/${id}/actions/void`, options);
  }
}

/**
 * PackPickRequest is the request to pack a pick, creating a shipment from the
 * picked lines.
 */
export interface PackPickRequest {
  /**
   * Number of cases for the shipment.
   */
  shipment_case_count: number;
}

/**
 * PackPickResponse is the result of packing a pick.
 */
export interface PackPickResponse {
  /**
   * Resource type identifier.
   */
  object: 'pack_pick_response';

  /**
   * Pick is a full pick resource.
   */
  pick: InvoicesAPI.Pick | null;

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
  export {
    type PackPickRequest as PackPickRequest,
    type PackPickResponse as PackPickResponse,
    type ActionPackParams as ActionPackParams,
  };
}
