// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Inventory extends APIResource {
  /**
   * Adjusts or reconciles inventory for an item. When operation is reconcile,
   * inventory is set to the exact value; when operation is adjust, the quantity
   * change is added to the current inventory.
   *
   * @example
   * ```ts
   * const inventory =
   *   await client.catalog.items.inventory.update(
   *     'it_0131e386ac683e8c29a71f6f1f',
   *   );
   * ```
   */
  update(
    id: string,
    body: InventoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryUpdateResponse> {
    return this._client.patch(path`/v1/catalog/items/${id}/inventory`, { body, ...options });
  }

  /**
   * Returns inventory quantities for an item, including on-hand, reserved,
   * available-to-promise, and short amounts.
   *
   * @example
   * ```ts
   * const itemInventory =
   *   await client.catalog.items.inventory.list(
   *     'it_0131e386ac683e8c29a71f6f1f',
   *   );
   * ```
   */
  list(
    id: string,
    query: InventoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemInventory> {
    return this._client.get(path`/v1/catalog/items/${id}/inventory`, { query, ...options });
  }
}

/**
 * ItemInventory contains inventory quantities for an item.
 */
export interface ItemInventory {
  /**
   * Value with an associated unit.
   */
  available_to_promise: AccountUsersAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_inventory';

  /**
   * Value with an associated unit.
   */
  on_hand: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  reserved: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  short: AccountUsersAPI.Quantity | null;
}

/**
 * UpdateItemInventoryRequest is the request to adjust or reconcile inventory for
 * an item.
 */
export interface UpdateItemInventoryRequest {
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

export interface InventoryUpdateResponse {}

export interface InventoryUpdateParams {
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

export interface InventoryListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'on_hand' | 'reserved' | 'available_to_promise' | 'short'>;
}

export declare namespace Inventory {
  export {
    type ItemInventory as ItemInventory,
    type UpdateItemInventoryRequest as UpdateItemInventoryRequest,
    type InventoryUpdateResponse as InventoryUpdateResponse,
    type InventoryUpdateParams as InventoryUpdateParams,
    type InventoryListParams as InventoryListParams,
  };
}
