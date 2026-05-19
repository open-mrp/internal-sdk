// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchesAPI from '../../operations/batches/batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Inventory extends APIResource {
  /**
   * Returns inventory quantities for an item, including on-hand, reserved,
   * available-to-promise, and short amounts.
   *
   * @example
   * ```ts
   * const inventories =
   *   await client.catalog.items.inventory.list('id');
   * ```
   */
  list(
    id: string,
    query: InventoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryListResponse> {
    return this._client.get(path`/v1/catalog/items/${id}/inventory`, { query, ...options });
  }

  /**
   * Adjusts or reconciles inventory for an item. When operation is reconcile,
   * inventory is set to the exact value; when operation is adjust, the quantity
   * change is added to the current inventory.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.items.inventory.patchAll('id', {
   *     customer_id: 'ac_01gf7a8200er3ar3pkfrb6kk29',
   *     location_id: 'lc_01gf7a8200er3ar3pkfrb6kk30',
   *     operation: 'adjust',
   *     quantity_change: 10.5,
   *     unit_id: 'un_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  patchAll(
    id: string,
    body: InventoryPatchAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryPatchAllResponse> {
    return this._client.patch(path`/v1/catalog/items/${id}/inventory`, { body, ...options });
  }
}

/**
 * ItemInventory contains inventory quantities for an item.
 */
export interface InventoryListResponse {
  /**
   * Value with an associated unit.
   */
  available_to_promise: BatchesAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_inventory';

  /**
   * Value with an associated unit.
   */
  on_hand: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  reserved: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  short: BatchesAPI.Quantity | null;
}

export interface InventoryPatchAllResponse {}

export interface InventoryListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'on_hand' | 'reserved' | 'available_to_promise' | 'short'>;
}

export interface InventoryPatchAllParams {
  /**
   * Customer ID.
   */
  customer_id?: string;

  /**
   * Location ID.
   */
  location_id?: string;

  /**
   * Lot number.
   */
  lot_number?: string;

  /**
   * How quantity_change is applied: adjust adds to current inventory; reconcile sets
   * inventory to the exact value.
   */
  operation?: 'adjust' | 'reconcile';

  /**
   * Quantity change to apply.
   */
  quantity_change?: number;

  /**
   * Unit ID for the quantity change.
   */
  unit_id?: string;
}

export declare namespace Inventory {
  export {
    type InventoryListResponse as InventoryListResponse,
    type InventoryPatchAllResponse as InventoryPatchAllResponse,
    type InventoryListParams as InventoryListParams,
    type InventoryPatchAllParams as InventoryPatchAllParams,
  };
}
