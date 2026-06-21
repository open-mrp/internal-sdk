// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   * Returns an item by ID.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.retrieve(
   *   'it_0131e386ac683e8c29a71f6f1f',
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
   * Returns a paginated list of items.
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
   * Moves an item to a different category.
   *
   * The item's rate units (unit value, unit cost, burn rate) and any related
   * order-point, consumption, and production quantity units are updated to the new
   * category's base unit. Re-assigning the item's current category is a no-op.
   *
   * This endpoint requires the permission: `items:update`.
   *
   * @example
   * ```ts
   * const item = await client.catalog.items.changeCategory(
   *   'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   { id: 'it_0131e386ac683e8c29a71f6f1f' },
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
   * Returns the per-unit production cost breakdown for an item, including direct
   * material, direct labor, overhead, and total costs.
   *
   * Costs are computed from the production flow that produces the item; items not
   * produced by any production flow return a not-found error. As a side effect, the
   * item's `unit_cost` rate is refreshed to the computed total.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemCosts = await client.catalog.items.retrieveCosts(
   *   'it_0131e386ac683e8c29a71f6f1f',
   * );
   * ```
   */
  retrieveCosts(id: string, options?: RequestOptions): APIPromise<ItemCosts> {
    return this._client.get(path`/v1/catalog/items/${id}/costs`, options);
  }

  /**
   * Returns historical trend data for an item as a time-ordered series of data
   * points.
   *
   * This endpoint requires the permission: `items:read`.
   *
   * @example
   * ```ts
   * const itemTrends =
   *   await client.catalog.items.retrieveTrends(
   *     'it_0131e386ac683e8c29a71f6f1f',
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
 * ItemCosts is the per-unit production cost breakdown for an item, computed from
 * the production flow that produces it.
 */
export interface ItemCosts {
  /**
   * Labor cost to produce one unit of the item.
   */
  direct_labor_cost: string;

  /**
   * Cost of materials consumed to produce one unit of the item.
   */
  direct_material_cost: string;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Overhead cost allocated to one unit of the item.
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
 * ItemTrendPoint is a single trend data point.
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
 * ItemTrends is the historical trend data for an item.
 */
export interface ItemTrends {
  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * List represents a paginated list of resources.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * Filter by attribute IDs.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by category IDs.
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
   * Filter by customer account IDs (only items whose product line is accessible to
   * any of these customers).
   */
  customer_ids?: Array<string>;

  /**
   * Filter items created on or before this date.
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
   * Filter by product line IDs (only items whose product belongs to one of these
   * lines).
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Filter items created on or after this date.
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
   * Filter by supplier ID.
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
    type ItemTrendPoint as ItemTrendPoint,
    type ItemTrends as ItemTrends,
    type ListItem as ListItem,
    type ListItemTrendPoint as ListItemTrendPoint,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
    type ItemChangeCategoryParams as ItemChangeCategoryParams,
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
