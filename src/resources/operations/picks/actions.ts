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
   * Every unpacked line with a picked quantity greater than zero is marked as packed
   * and added to a new shipment. When a sales order line still has outstanding
   * quantity afterward, a new zero-quantity pick line is created for the remainder.
   * The pick is marked finished once no unpacked line still has a quantity left to
   * pick.
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
   * Sets each unpacked line's picked quantity to the quantity still outstanding on
   * its sales order line. Lines that have already been packed are unaffected.
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
   * Resets the picked quantity on every unpacked line to zero and clears the pick's
   * `finished_at` timestamp. Fails if a shipment has already been created for the
   * pick's sales order.
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
   * Number of shipping cases to create on the new shipment.
   *
   * Must be at least 1. Cases are numbered sequentially from the shipment number
   * (e.g. `SH-001-1`, `SH-001-2`).
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
   * A warehouse picking task for a sales order, tracking the quantities to pull from
   * inventory and pack for shipment.
   */
  pick: InvoicesAPI.Pick | null;

  /**
   * Number of the shipment created by the pack operation.
   *
   * Derived from the sales order number: the first shipment for an order uses the
   * order number itself; later shipments append a sequence suffix (e.g. `SO-123-2`).
   */
  shipment_number: string;
}

export interface ActionPackParams {
  /**
   * Number of shipping cases to create on the new shipment.
   *
   * Must be at least 1. Cases are numbered sequentially from the shipment number
   * (e.g. `SH-001-1`, `SH-001-2`).
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
