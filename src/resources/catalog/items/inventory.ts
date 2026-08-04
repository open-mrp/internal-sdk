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
   * With `operation` set to `adjust` (the behavior when it is omitted),
   * `quantity_change` is added to the current on-hand quantity; with `reconcile`,
   * the on-hand quantity is set to exactly `quantity_change`. Either way it is the
   * resulting difference that gets written, so a difference of zero moves no stock.
   *
   * Added stock is immediately allocated against any unfilled demand for the item,
   * so an adjustment can settle a shortfall instead of raising the quantity free on
   * hand. The change is recorded in the item's inventory audit trail as a user
   * correction attributed to the caller.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const inventory =
   *   await client.catalog.items.inventory.update(
   *     'it_pej07ckhvu62',
   *     {
   *       customer_id: 'ac_opnlh43ymyee',
   *       location_id: 'lc_yonnys0hx3ju',
   *       operation: 'adjust',
   *       quantity_change: 10.5,
   *       unit_id: 'un_82bd37dae5po',
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
   * Returns the stock position for an item: what is on hand, what is reserved
   * against existing orders, what is free to promise, and what is short.
   *
   * Stock your account either owns or holds counts toward the on-hand figure, so
   * customer-supplied material sitting in your facility is included. All four
   * quantities are reported in the base unit of the item's category.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemInventory =
   *   await client.catalog.items.inventory.list(
   *     'it_pej07ckhvu62',
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
 * The stock position for an item: what is in stock, what is already committed, and
 * what is still free to sell.
 *
 * All four quantities are reported in the same unit — the base unit of the item's
 * category.
 */
export interface ItemInventory {
  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  available_to_promise: AccountUsersAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_inventory';

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  on_hand: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  reserved: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  short: AccountUsersAPI.Quantity | null;
}

/**
 * Request to adjust or reconcile inventory for an item.
 */
export interface UpdateItemInventoryRequest {
  /**
   * ID of the customer account that owns the resulting inventory.
   *
   * Use this for stock you hold but do not own, such as customer-supplied material.
   * It only affects quantity being added: your account stays the holder, the
   * customer becomes the owner, and the current quantity a `reconcile` measures
   * against is still your account's. Requires edit access to that customer.
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
   *
   * The figure is recorded exactly as sent, with no conversion, so send it in the
   * base unit of the item's category to keep it comparable with the quantities the
   * inventory endpoints report.
   */
  unit_id?: string;
}

export interface InventoryUpdateResponse {}

export interface InventoryUpdateParams {
  /**
   * ID of the customer account that owns the resulting inventory.
   *
   * Use this for stock you hold but do not own, such as customer-supplied material.
   * It only affects quantity being added: your account stays the holder, the
   * customer becomes the owner, and the current quantity a `reconcile` measures
   * against is still your account's. Requires edit access to that customer.
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
   *
   * The figure is recorded exactly as sent, with no conversion, so send it in the
   * base unit of the item's category to keep it comparable with the quantities the
   * inventory endpoints report.
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
