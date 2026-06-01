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
   * @example
   * ```ts
   * const listItem = await client.catalog.items.list();
   * ```
   */
  list(query: ItemListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListItem> {
    return this._client.get('/v1/catalog/items', { query, ...options });
  }

  /**
   * Changes the category of an item. When the category changes, the item's rate
   * units are updated to the new category's base unit.
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
   * Returns the production cost breakdown for an item, including direct material,
   * direct labor, overhead, and total costs.
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
   * Returns historical trend data for an item for the specified metric.
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
 * ItemCosts is the cost breakdown for an item.
 */
export interface ItemCosts {
  /**
   * Direct labor cost.
   */
  direct_labor_cost: string;

  /**
   * Direct material cost.
   */
  direct_material_cost: string;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Overhead cost.
   */
  overhead_cost: string;

  /**
   * Total cost.
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
   * Timestamp of the data point.
   */
  occurred_at: string;

  /**
   * Value at this date.
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
   * Requested trend type.
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
   * Cursor token used to retrieve the next or previous page of results.
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
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by product line IDs (only items whose product belongs to one of these
   * lines).
   */
  product_line_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter items created on or after this date.
   */
  start_date?: string;

  /**
   * Which subassemblies to include when listing (default: all).
   */
  subassembly_filter?: 'all' | 'initial_only';

  /**
   * Filter by supplier ID.
   */
  supplier_id?: string;

  /**
   * Filter by item type codes.
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
   * Trend type (e.g. "on_hand", "cost").
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
