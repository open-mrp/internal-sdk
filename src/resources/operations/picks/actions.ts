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
   * and added to a new shipment in `packed` status, which inherits the sales order's
   * carrier, service level, and shipping address. When a sales order line still has
   * outstanding quantity afterward, a new zero-quantity pick line is created for the
   * remainder, so packing a partial pick leaves the pick open for the next round.
   * The pick is marked finished only once every one of its lines is packed.
   *
   * Returns a validation error if no line on the pick has a picked quantity greater
   * than zero.
   *
   * This endpoint requires the permission: `picks:update`.
   *
   * @example
   * ```ts
   * const packPickResponse =
   *   await client.operations.picks.actions.pack(
   *     'pk_6eilj488bq8d',
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
   * its sales order line, after accounting for what other pick lines for that order
   * line have already picked. Lines that have already been packed are unaffected.
   * Use this to fill in a full pick in one call instead of picking each line
   * individually; nothing is shipped until the pick is packed.
   *
   * This endpoint requires the permission: `picks:update`.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.actions.pick(
   *   'pk_6eilj488bq8d',
   * );
   * ```
   */
  pick(id: string, options?: RequestOptions): APIPromise<InvoicesAPI.Pick> {
    return this._client.put(path`/v1/operations/picks/${id}/actions/pick`, options);
  }

  /**
   * Voids a pick, undoing all picking work recorded on it.
   *
   * Resets the picked quantity on every unpacked line to zero and clears the pick's
   * `finished_at` timestamp, so the pick starts over as open with nothing picked.
   * The pick itself is not deleted, and the sales order is unaffected.
   *
   * Returns a validation error if any shipment exists for the pick's sales order.
   * Voiding those shipments is not enough — they must be deleted, since a voided
   * shipment still exists.
   *
   * This endpoint requires the permission: `picks:update`.
   *
   * @example
   * ```ts
   * const pick = await client.operations.picks.actions.void(
   *   'pk_6eilj488bq8d',
   * );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<InvoicesAPI.Pick> {
    return this._client.put(path`/v1/operations/picks/${id}/actions/void`, options);
  }
}

/**
 * Request to pack a pick, creating a shipment from the picked lines.
 */
export interface PackPickRequest {
  /**
   * Number of shipping cases to create on the new shipment.
   *
   * Must be at least 1. Cases are numbered sequentially from the shipment number
   * (e.g. `SH-001-1`, `SH-001-2`), and each starts with zero freight weight and
   * freight cost for you to fill in later.
   */
  shipment_case_count: number;
}

/**
 * The result of packing a pick: the pick as it stands after packing, plus the
 * number of the shipment that packing created.
 */
export interface PackPickResponse {
  /**
   * Resource type identifier.
   */
  object: 'pack_pick_response';

  /**
   * A warehouse picking task for a sales order, tracking the quantities to pull from
   * inventory and pack for shipment.
   *
   * A pick is created automatically when a sales order is issued, with one line for
   * each order line whose product is of type `sale` — service, shipping, tax, credit
   * and return lines are skipped — and nothing picked yet. There is no endpoint that
   * creates a pick directly.
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
   * (e.g. `SH-001-1`, `SH-001-2`), and each starts with zero freight weight and
   * freight cost for you to fill in later.
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
