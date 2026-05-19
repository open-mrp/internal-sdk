// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ActionsAPI from '../../auth/actions';
import * as ScanningStationsAPI from '../scanning-stations';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../batches/batches';
import * as InventoryChangeLogsActionsAPI from './actions';
import { ActionRetrieveExportParams, ActionRetrieveExportResponse, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and export inventory change logs.
 */
export class InventoryChangeLogs extends APIResource {
  actions: InventoryChangeLogsActionsAPI.Actions = new InventoryChangeLogsActionsAPI.Actions(this._client);

  /**
   * Returns an inventory change log by ID.
   *
   * @example
   * ```ts
   * const inventoryChangeLog =
   *   await client.operations.inventoryChangeLogs.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: InventoryChangeLogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryChangeLog> {
    return this._client.get(path`/v1/operations/inventory-change-logs/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of inventory change logs for the target account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operations.inventoryChangeLogs.retrieveInventoryChangeLogs();
   * ```
   */
  retrieveInventoryChangeLogs(
    query: InventoryChangeLogRetrieveInventoryChangeLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryChangeLogRetrieveInventoryChangeLogsResponse> {
    return this._client.get('/v1/operations/inventory-change-logs', { query, ...options });
  }
}

/**
 * InventoryChangeLog is an inventory change log entry.
 */
export interface InventoryChangeLog {
  /**
   * Inventory change log ID.
   */
  id: string;

  /**
   * Inventory action type code.
   */
  action_type: 'scan' | 'user_action' | 'system_action' | 'user_correction';

  /**
   * Timestamp when this change was recorded.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: ItemsAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'inventory_change_log';

  /**
   * Value with an associated unit.
   */
  quantity: BatchesAPI.Quantity | null;

  /**
   * Scanning station resource.
   */
  responsible_scanning_station: ScanningStationsAPI.ScanningStation | null;

  /**
   * User resource.
   */
  responsible_user: ActionsAPI.User | null;

  /**
   * Timestamp when this record was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface InventoryChangeLogRetrieveInventoryChangeLogsResponse {
  /**
   * Resources in this page.
   */
  data: Array<InventoryChangeLog>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface InventoryChangeLogRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'item' | 'quantity' | 'quantity.unit' | 'responsible_user' | 'responsible_scanning_station'
  >;
}

export interface InventoryChangeLogRetrieveInventoryChangeLogsParams {
  /**
   * Filter by action type codes.
   */
  action_type_codes?: Array<string>;

  /**
   * Filter by responsible user IDs.
   */
  changed_by_user_ids?: Array<string>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter change logs created on or before this date.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'item' | 'quantity' | 'quantity.unit' | 'responsible_user' | 'responsible_scanning_station'
  >;

  /**
   * Filter by item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter change logs created on or after this date.
   */
  start_date?: string;
}

InventoryChangeLogs.Actions = Actions;

export declare namespace InventoryChangeLogs {
  export {
    type InventoryChangeLog as InventoryChangeLog,
    type InventoryChangeLogRetrieveInventoryChangeLogsResponse as InventoryChangeLogRetrieveInventoryChangeLogsResponse,
    type InventoryChangeLogRetrieveParams as InventoryChangeLogRetrieveParams,
    type InventoryChangeLogRetrieveInventoryChangeLogsParams as InventoryChangeLogRetrieveInventoryChangeLogsParams,
  };

  export {
    Actions as Actions,
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
  };
}
