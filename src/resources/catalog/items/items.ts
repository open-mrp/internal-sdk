// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoreAPI from '../../core/core';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionBulkCreateParams,
  ActionBulkReconcileParams,
  Actions,
  BulkCreateItemInput,
  BulkCreateItemResult,
  BulkCreateItemsRequest,
  BulkCreateItemsResponse,
  BulkReconcileItemInput,
  BulkReconcileItemsRequest,
  BulkReconcileItemsResponse,
  FileDownload,
  ListReconcileErrorResult,
  ListReconciledItemResult,
  ListSkippedItemResult,
  ReconcileErrorResult,
  ReconciledItemResult,
  SkippedItemResult,
} from './actions';
import * as AttributesAPI from './attributes';
import { AttributeDeleteParams, AttributeUpdateParams, Attributes } from './attributes';
import * as InventoryAPI from './inventory';
import {
  Inventory,
  InventoryListParams,
  InventoryUpdateParams,
  InventoryUpdateResponse,
  ItemInventory,
  UpdateItemInventoryRequest,
} from './inventory';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage inventory items.
 */
export class Items extends APIResource {
  inventory: InventoryAPI.Inventory = new InventoryAPI.Inventory(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);

  /**
   * Returns a single item by ID.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.retrieve(
   *   'it_pej07ckhvu62',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: ItemRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Item> {
    return this._client.get(path`/v1/catalog/items/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of items, newest first.
   *
   * Items backed by a non-sale product — the service, shipping, tax, credit, and
   * return products that carry charges on orders — are left out, so this reflects
   * the catalog you sell and stock rather than every item row. `q` matches against
   * SKU and description, with closer SKU matches ranked first.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const listItem = await client.catalog.items.list();
   * ```
   */
  list(query: ItemListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListItem> {
    return this._client.get('/v1/catalog/items', { query, ...options });
  }

  /**
   * Moves an item to a different category and returns the updated item.
   *
   * The item's rate units (unit value, unit cost, burn rate) and any related
   * order-point, consumption, and production quantity units are switched to the new
   * category's base unit. Only the units change — the numbers attached to them are
   * carried over as they were, so review any figure whose meaning depends on the
   * unit after moving between categories that count differently.
   *
   * Re-assigning the item's current category succeeds and changes nothing.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.changeCategory(
   *   'ic_d06g9c6yc9ck',
   *   { id: 'it_pej07ckhvu62' },
   * );
   * ```
   */
  changeCategory(
    categoryID: string,
    params: ItemChangeCategoryParams,
    options?: RequestOptions,
  ): APIPromise<AccountUsersAPI.Item> {
    const { id, include } = params;
    return this._client.put(path`/v1/catalog/items/${id}/category/${categoryID}`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Returns what it costs to make one unit of an item, split into direct material,
   * direct labor, and overhead.
   *
   * The figures are recomputed on each call by walking back through every production
   * step that feeds the step producing this item, so the answer reflects the current
   * recipe and the current cost of everything consumed along the way. Items that no
   * production flow produces — purchased materials, for instance — return a
   * not-found error rather than a zero breakdown.
   *
   * Calling this also writes the computed total back to the item's `unit_cost`, so
   * it is how a stale unit cost gets refreshed.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemCosts = await client.catalog.items.retrieveCosts(
   *   'it_pej07ckhvu62',
   * );
   * ```
   */
  retrieveCosts(id: string, options?: RequestOptions): APIPromise<ItemCosts> {
    return this._client.get(path`/v1/catalog/items/${id}/costs`, options);
  }

  /**
   * Returns the lot this item is made in — how many, counted in what.
   *
   * A lot is a doff, a pallet, a batch: the quantity production is issued in. The
   * unit is what makes it meaningful, since 60 pairs and 60 eaches are different
   * lots, so `quantity` should never be read without `unit`.
   *
   * Resolved through the same chain the production schedule uses, most specific
   * first: a per-item override, then the item's own product line, then the product
   * lines of the finished goods it becomes, then the account-wide default. `source`
   * names which rule applied. Intermediate items like greige are not sold and have
   * no product line of their own, which is why they inherit from what they become.
   *
   * `quantity` is `0` when nothing in the chain supplies a lot. That means the item
   * has no lot convention, not that its lot is zero.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemLotDefault =
   *   await client.catalog.items.retrieveLotDefault(
   *     'it_pej07ckhvu62',
   *   );
   * ```
   */
  retrieveLotDefault(
    id: string,
    query: ItemRetrieveLotDefaultParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemLotDefault> {
    return this._client.get(path`/v1/catalog/items/${id}/lot-default`, { query, ...options });
  }

  /**
   * Returns how an item's stock level has moved over the last 30 days, as a series
   * of point-in-time measurements.
   *
   * Days on which nothing was logged produce no point, and days with several entries
   * contribute only the first, so the series is sparse rather than one point per
   * calendar day.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemTrends =
   *   await client.catalog.items.retrieveTrends(
   *     'it_pej07ckhvu62',
   *     { trend_type: 'trend_type' },
   *   );
   * ```
   */
  retrieveTrends(
    id: string,
    query: ItemRetrieveTrendsParams,
    options?: RequestOptions,
  ): APIPromise<ItemTrends> {
    return this._client.get(path`/v1/catalog/items/${id}/trends`, { query, ...options });
  }
}

/**
 * The per-unit production cost breakdown for an item, computed from the production
 * flow that produces it.
 */
export interface ItemCosts {
  /**
   * Labor cost to produce one unit of the item.
   *
   * Based on each step's labor time after its leveling factor and allowances are
   * applied, priced at that step's labor rate.
   */
  direct_labor_cost: string;

  /**
   * Cost of materials consumed to produce one unit of the item, including the
   * portion consumed as waste.
   *
   * Counts raw materials only. Parts and sub-products consumed along the way are not
   * priced here; their labor, overhead, and material costs are already included
   * through the steps that produce them.
   */
  direct_material_cost: string;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Overhead cost allocated to one unit of the item.
   *
   * Applied over the same corrected labor time as `direct_labor_cost`, priced at
   * each step's overhead rate.
   */
  overhead_cost: string;

  /**
   * Total cost to produce one unit of the item (material + labor + overhead).
   */
  total_cost: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;
}

/**
 * The lot an item is made in — how many, counted in what.
 *
 * A lot is the quantity production is issued in: a doff, a pallet, a batch. The
 * unit is what makes it meaningful, since 60 pairs and 60 eaches are different
 * lots.
 */
export interface ItemLotDefault {
  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  item: CoreAPI.Entity | null;

  /**
   * Resource type identifier.
   */
  object: 'item_lot_default';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  product_line: CoreAPI.Entity | null;

  /**
   * Units in one lot.
   *
   * `0` means the item has no lot convention, not that its lot is zero.
   */
  quantity: number;

  /**
   * Which rule in the chain produced this lot.
   *
   * - `item_override`: a lot size set on the item itself.
   * - `product_line`: the convention of the line the item sells under.
   * - `downstream_product_line`: inherited from the finished goods this item
   *   becomes, for intermediates that are not themselves sold.
   * - `account_default`: the account-wide fallback.
   *
   * Empty when no rule in the chain supplies a lot, which is the same case
   * `quantity` reports as `0`.
   */
  source: 'item_override' | 'product_line' | 'downstream_product_line' | 'account_default' | '';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: AccountUsersAPI.Unit | null;
}

/**
 * A single measurement in an item's trend series.
 */
export interface ItemTrendPoint {
  /**
   * Resource type identifier.
   */
  object: 'item_trend_point';

  /**
   * Timestamp of the data point.
   */
  occurred_at: string;

  /**
   * Recorded value of the trend metric at `occurred_at`.
   */
  value: string;
}

/**
 * Historical trend data for an item, as a time-ordered series of measurements.
 */
export interface ItemTrends {
  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  points: ListItemTrendPoint | null;

  /**
   * The trend type that was requested.
   *
   * Currently the only supported value is `inventory`.
   */
  trend_type: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListItem {
  /**
   * Resources in this page.
   */
  data: Array<AccountUsersAPI.Item>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListItemTrendPoint {
  /**
   * Resources in this page.
   */
  data: Array<ItemTrendPoint>;

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

export interface ItemRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;
}

export interface ItemListParams {
  /**
   * Filter to items carrying any of these attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter to items in any of these categories.
   */
  category_ids?: Array<string>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filter to items any of these customers are allowed to order.
   *
   * A customer qualifies when its relationship, its account group, or its price
   * group grants access to the product line the item's product sits in. Items with
   * no product line, including materials and parts, never match.
   */
  customer_ids?: Array<string>;

  /**
   * Filter to items created on or before this date.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Filter to items whose product belongs to any of these product lines.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter to items created on or after this date.
   */
  start_date?: string;

  /**
   * Restricts results based on where the item is produced in its production flow.
   *
   * - `all`: no restriction.
   * - `initial_only`: only items produced by an initial production step, i.e. a step
   *   with no upstream steps feeding into it.
   */
  subassembly_filter?: 'all' | 'initial_only';

  /**
   * Filter to materials this supplier account supplies to you.
   *
   * Only materials can have suppliers, so combining this with a `types` filter that
   * excludes `material` returns nothing.
   */
  supplier_id?: string;

  /**
   * Filter to items of these types (`product`, `material`, `part`).
   */
  types?: Array<string>;
}

export interface ItemChangeCategoryParams {
  /**
   * Path param: Item ID.
   */
  id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'category'
    | 'unit_value'
    | 'unit_cost'
    | 'burn_rate'
    | 'attributes'
    | 'category.unit_group'
    | 'category.properties'
    | 'category.unit_group.base_unit'
    | 'category.unit_group.associated_units'
    | 'category.unit_group.associated_units.unit'
  >;
}

export interface ItemRetrieveLotDefaultParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'unit'>;
}

export interface ItemRetrieveTrendsParams {
  /**
   * The trend metric to fetch.
   *
   * Currently the only supported value is `inventory`, which returns the item's
   * inventory-level measurements from the last 30 days. Unsupported values are
   * rejected with a validation error.
   */
  trend_type: string;
}

Items.Inventory = Inventory;
Items.Actions = Actions;
Items.Attributes = Attributes;

export declare namespace Items {
  export {
    type ItemCosts as ItemCosts,
    type ItemLotDefault as ItemLotDefault,
    type ItemTrendPoint as ItemTrendPoint,
    type ItemTrends as ItemTrends,
    type ListItem as ListItem,
    type ListItemTrendPoint as ListItemTrendPoint,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
    type ItemChangeCategoryParams as ItemChangeCategoryParams,
    type ItemRetrieveLotDefaultParams as ItemRetrieveLotDefaultParams,
    type ItemRetrieveTrendsParams as ItemRetrieveTrendsParams,
  };

  export {
    Inventory as Inventory,
    type ItemInventory as ItemInventory,
    type UpdateItemInventoryRequest as UpdateItemInventoryRequest,
    type InventoryUpdateResponse as InventoryUpdateResponse,
    type InventoryUpdateParams as InventoryUpdateParams,
    type InventoryListParams as InventoryListParams,
  };

  export {
    Actions as Actions,
    type BulkCreateItemInput as BulkCreateItemInput,
    type BulkCreateItemResult as BulkCreateItemResult,
    type BulkCreateItemsRequest as BulkCreateItemsRequest,
    type BulkCreateItemsResponse as BulkCreateItemsResponse,
    type BulkReconcileItemInput as BulkReconcileItemInput,
    type BulkReconcileItemsRequest as BulkReconcileItemsRequest,
    type BulkReconcileItemsResponse as BulkReconcileItemsResponse,
    type FileDownload as FileDownload,
    type ListReconcileErrorResult as ListReconcileErrorResult,
    type ListReconciledItemResult as ListReconciledItemResult,
    type ListSkippedItemResult as ListSkippedItemResult,
    type ReconcileErrorResult as ReconcileErrorResult,
    type ReconciledItemResult as ReconciledItemResult,
    type SkippedItemResult as SkippedItemResult,
    type ActionBulkCreateParams as ActionBulkCreateParams,
    type ActionBulkReconcileParams as ActionBulkReconcileParams,
  };

  export {
    Attributes as Attributes,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeDeleteParams as AttributeDeleteParams,
  };
}
