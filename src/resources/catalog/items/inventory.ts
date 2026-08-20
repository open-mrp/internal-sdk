// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Inventory extends APIResource {
  /**
   * Adjusts or reconciles the quantity of an item you hold.
   *
   * With `operation` set to `adjust` (the behavior when it is omitted), `quantity`
   * is added to the current quantity; with `reconcile`, the current quantity is set
   * to exactly `quantity`. Either way it is the resulting difference that gets
   * written, so a difference of zero moves no stock.
   *
   * The figure a `reconcile` measures against is what is on hand net of demand
   * nothing has covered — the same figure `available_to_promise` is derived from,
   * not the raw on-hand total. Reconciling to the quantity already reported
   * therefore writes nothing.
   *
   * Stock that arrives is allocated against unfilled demand for the item, so an
   * adjustment can settle a shortfall instead of raising the quantity free to
   * promise. That allocation happens just after the request rather than inside it,
   * because it walks every open issue for the item. The change is recorded in the
   * item's inventory audit trail as a user correction attributed to the caller.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const inventory =
   *   await client.catalog.items.inventory.update(
   *     'it_pej07ckhvu62',
   *     {
   *       quantity: {
   *         value: '10.5',
   *         unit_id: 'un_82bd37dae5po',
   *       },
   *       customer_id: 'ac_opnlh43ymyee',
   *       location_id: 'lc_yonnys0hx3ju',
   *       operation: 'adjust',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: InventoryUpdateParams,
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
 * category. Derived figures, not stored rows: each is netted out of the ledger at
 * read time, so none of them carries a quantity id.
 */
export interface ItemInventory {
  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  available_to_promise: AnalyticsAPI.ComputedQuantity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_inventory';

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  on_hand: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  reserved: AnalyticsAPI.ComputedQuantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  short: AnalyticsAPI.ComputedQuantity | null;
}

/**
 * Request to adjust or reconcile inventory for an item.
 */
export interface UpdateItemInventoryRequest {
  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

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
   * How `quantity` is applied.
   *
   * - `adjust`: adds `quantity` to the current quantity.
   * - `reconcile`: sets the current quantity to exactly `quantity`.
   */
  operation?: 'adjust' | 'reconcile';
}

export interface InventoryUpdateResponse {}

export interface InventoryUpdateParams {
  /**
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

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
   * How `quantity` is applied.
   *
   * - `adjust`: adds `quantity` to the current quantity.
   * - `reconcile`: sets the current quantity to exactly `quantity`.
   */
  operation?: 'adjust' | 'reconcile';
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
