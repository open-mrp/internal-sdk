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
   * Adjusts or reconciles on-hand inventory for an item.
   *
   * With `operation` set to `adjust` (the default), `quantity_change` is added to
   * the current on-hand quantity; with `reconcile`, the on-hand quantity is set to
   * exactly `quantity_change`. The change is recorded in the item's inventory audit
   * trail as a user correction.
   *
   * @example
   * ```ts
   * const inventory =
   *   await client.catalog.items.inventory.update(
   *     'it_0131e386ac683e8c29a71f6f1f',
   *     {
   *       customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *       location_id: 'lc_014d187d99b31926f0c74af9d8',
   *       operation: 'adjust',
   *       quantity_change: 10.5,
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
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
   * ID of the customer account that owns the resulting inventory.
   *
   * When provided, added inventory is recorded as owned by this customer account
   * instead of your own; requires edit access to that customer.
   */
  customer_id?: string;

  /**
   * ID of the location to record the inventory change against.
   *
   * Must be a location in your account.
   */
  location_id?: string;

  /**
   * Lot number to record the inventory change against.
   *
   * The lot is created for the item if it does not already exist.
   */
  lot_number?: string;

  /**
   * How `quantity_change` is applied.
   *
   * - `adjust`: adds `quantity_change` to the current on-hand quantity.
   * - `reconcile`: sets the on-hand quantity to exactly `quantity_change`.
   */
  operation?: 'adjust' | 'reconcile';

  /**
   * The quantity to apply, interpreted according to `operation`.
   *
   * With `adjust`, it is added to the current on-hand quantity and may be negative;
   * with `reconcile`, the on-hand quantity is set to exactly this value.
   */
  quantity_change?: number;

  /**
   * ID of the unit `quantity_change` is expressed in.
   */
  unit_id?: string;
}

export interface InventoryUpdateResponse {}

export interface InventoryUpdateParams {
  /**
   * ID of the customer account that owns the resulting inventory.
   *
   * When provided, added inventory is recorded as owned by this customer account
   * instead of your own; requires edit access to that customer.
   */
  customer_id?: string;

  /**
   * ID of the location to record the inventory change against.
   *
   * Must be a location in your account.
   */
  location_id?: string;

  /**
   * Lot number to record the inventory change against.
   *
   * The lot is created for the item if it does not already exist.
   */
  lot_number?: string;

  /**
   * How `quantity_change` is applied.
   *
   * - `adjust`: adds `quantity_change` to the current on-hand quantity.
   * - `reconcile`: sets the on-hand quantity to exactly `quantity_change`.
   */
  operation?: 'adjust' | 'reconcile';

  /**
   * The quantity to apply, interpreted according to `operation`.
   *
   * With `adjust`, it is added to the current on-hand quantity and may be negative;
   * with `reconcile`, the on-hand quantity is set to exactly this value.
   */
  quantity_change?: number;

  /**
   * ID of the unit `quantity_change` is expressed in.
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
