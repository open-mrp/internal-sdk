// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The planning assumptions production schedules are solved against, and the per-resource overrides that mark which machines constrain the plan.
 */
export class Items extends APIResource {
  /**
   * Returns the planning overrides for one item.
   *
   * Fails with a not-found error when the item has none, rather than returning an
   * empty set of overrides: an item with no overrides is planned on the account
   * defaults and its product line's conventions, and reporting that as a resource
   * would suggest there is something here to edit.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const productionScheduleItemSetting =
   *   await client.operations.productionScheduleSettings.items.retrieve(
   *     'example',
   *   );
   * ```
   */
  retrieve(itemID: string, options?: RequestOptions): APIPromise<ProductionScheduleItemSetting> {
    return this._client.get(path`/v1/operations/production-schedule-settings/items/${itemID}`, options);
  }

  /**
   * Writes the planning overrides for one item.
   *
   * An item has at most one set of overrides, so this replaces the existing entry
   * rather than adding a second, and the entry keeps the ID it already had.
   *
   * The fulfillment policy is the most consequential of these. A `make_to_order`
   * item contributes no forecast demand and holds no safety stock, so it is built
   * only against orders already on the book — which is what stops a slow mover
   * accumulating inventory nobody asked for. It also propagates: an intermediate
   * item is planned to order only when every finished good it becomes is, so one
   * stocked sibling keeps the whole family buffered.
   *
   * Overrides are read when a plan is generated, so a change takes effect on the
   * next generated version and leaves existing ones untouched.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const productionScheduleItemSetting =
   *   await client.operations.productionScheduleSettings.items.update(
   *     'example',
   *     {
   *       participation_status: 'included',
   *       fulfillment_policy: 'make_to_order',
   *     },
   *   );
   * ```
   */
  update(
    itemID: string,
    body: ItemUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductionScheduleItemSetting> {
    return this._client.put(path`/v1/operations/production-schedule-settings/items/${itemID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns every per-item planning override in the account.
   *
   * Only items that have been given an override appear here. An item with none is
   * planned on the account defaults and its product line's conventions, which is the
   * normal case — this is the list of exceptions, not a list of every item.
   *
   * This endpoint requires the permission: `production_schedules:read`.
   *
   * @example
   * ```ts
   * const listProductionScheduleItemSetting =
   *   await client.operations.productionScheduleSettings.items.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListProductionScheduleItemSetting> {
    return this._client.get('/v1/operations/production-schedule-settings/items', options);
  }

  /**
   * Removes one item's planning overrides, returning it to the account defaults and
   * its product line's conventions.
   *
   * Fails with a not-found error when the item has no overrides, rather than
   * reporting success: a mistyped item ID would otherwise read as a change that
   * never happened.
   *
   * This endpoint requires the permission: `production_schedules:update`.
   *
   * @example
   * ```ts
   * const item =
   *   await client.operations.productionScheduleSettings.items.delete(
   *     'example',
   *   );
   * ```
   */
  delete(itemID: string, options?: RequestOptions): APIPromise<ItemDeleteResponse> {
    return this._client.delete(path`/v1/operations/production-schedule-settings/items/${itemID}`, options);
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListProductionScheduleItemSetting {
  /**
   * Resources in this page.
   */
  data: Array<ProductionScheduleItemSetting>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Planning overrides for one item, on top of the account-wide assumptions.
 */
export interface ProductionScheduleItemSetting {
  /**
   * Item setting ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * How this item is produced.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   *
   * Null inherits from the item's product line, then from the account default.
   */
  fulfillment_policy: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Units in one production lot for this item, overriding the lot its product line
   * would supply.
   */
  lot_multiple_units: number | null;

  /**
   * Resource type identifier.
   */
  object: 'production_schedule_item_setting';

  /**
   * Whether this item takes part in planning.
   *
   * An excluded item is left out of the plan entirely: no campaigns, no policy, no
   * capacity.
   */
  participation_status: 'included' | 'excluded';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to write one item's planning overrides.
 */
export interface UpsertItemSettingRequest {
  /**
   * Whether this item takes part in planning.
   *
   * An excluded item is left out of the plan entirely: no campaigns, no policy, no
   * capacity.
   */
  participation_status: 'included' | 'excluded';

  /**
   * How this item is produced.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   *
   * Clearing it returns the item to its product line's policy, then to the account
   * default.
   */
  fulfillment_policy?: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Units in one production lot for this item, overriding the lot its product line
   * would supply.
   */
  lot_multiple_units?: number;
}

export interface ItemDeleteResponse {}

export interface ItemUpdateParams {
  /**
   * Whether this item takes part in planning.
   *
   * An excluded item is left out of the plan entirely: no campaigns, no policy, no
   * capacity.
   */
  participation_status: 'included' | 'excluded';

  /**
   * How this item is produced.
   *
   * - `make_to_stock`: built to the forecast, holding a safety stock against its
   *   variability.
   * - `make_to_order`: built only against orders already on the book, holding no
   *   buffer.
   *
   * Clearing it returns the item to its product line's policy, then to the account
   * default.
   */
  fulfillment_policy?: 'make_to_stock' | 'make_to_order' | null;

  /**
   * Units in one production lot for this item, overriding the lot its product line
   * would supply.
   */
  lot_multiple_units?: number;
}

export declare namespace Items {
  export {
    type ListProductionScheduleItemSetting as ListProductionScheduleItemSetting,
    type ProductionScheduleItemSetting as ProductionScheduleItemSetting,
    type UpsertItemSettingRequest as UpsertItemSettingRequest,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemUpdateParams as ItemUpdateParams,
  };
}
