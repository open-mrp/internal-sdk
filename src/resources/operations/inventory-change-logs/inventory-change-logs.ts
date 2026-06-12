// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from '../../auth/auth';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as ActionsAPI from './actions';
import { ActionExportParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and export inventory change logs.
 */
export class InventoryChangeLogs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns an inventory change log by ID.
   *
   * @example
   * ```ts
   * const inventoryChangeLog =
   *   await client.operations.inventoryChangeLogs.retrieve(
   *     'icl_01424a802cb48a96f94196f4f1',
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
   * Returns a paginated list of inventory change logs, newest first.
   *
   * @example
   * ```ts
   * const listInventoryChangeLog =
   *   await client.operations.inventoryChangeLogs.list();
   * ```
   */
  list(
    query: InventoryChangeLogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListInventoryChangeLog> {
    return this._client.get('/v1/operations/inventory-change-logs', { query, ...options });
  }
}

/**
 * InventoryChangeLog is a record of a single change to an item's on-hand
 * inventory.
 *
 * Every inventory movement — production scans, manual user adjustments, and
 * automatic system actions — produces one entry, forming an audit trail of how
 * on-hand quantities changed over time.
 */
export interface InventoryChangeLog {
  /**
   * Inventory change log ID.
   */
  id: string;

  /**
   * Action that produced this inventory change.
   *
   * - `scan`: change driven by a scan, typically a production step.
   * - `user_action`: change made manually by a user.
   * - `system_action`: change made automatically by the system.
   * - `user_correction`: manual adjustment a user made to correct an inventory
   *   discrepancy.
   */
  action_type: 'scan' | 'user_action' | 'system_action' | 'user_correction';

  /**
   * Timestamp when this change was recorded.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'inventory_change_log';

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * A station on the production floor where operators scan batches to perform a
   * batch operation, such as initializing or moving a batch.
   */
  responsible_scanning_station: AccountUsersAPI.ScanningStation | null;

  /**
   * A user's global profile, shared across every account they belong to.
   *
   * Account-specific settings (status, role, department) live on the account user
   * resource that links the user to each account.
   */
  responsible_user: AuthAPI.User | null;

  /**
   * Timestamp when this record was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListInventoryChangeLog {
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
  page_info: APIKeysAPI.PageInfo;
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

export interface InventoryChangeLogListParams {
  /**
   * Filter by the action that produced the change.
   */
  action_type_codes?: Array<string>;

  /**
   * Filter by the user responsible for the change.
   */
  changed_by_user_ids?: Array<string>;

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Restricts results to change logs created on or before this timestamp.
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
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Restricts results to change logs created on or after this timestamp.
   */
  start_date?: string;
}

InventoryChangeLogs.Actions = Actions;

export declare namespace InventoryChangeLogs {
  export {
    type InventoryChangeLog as InventoryChangeLog,
    type ListInventoryChangeLog as ListInventoryChangeLog,
    type InventoryChangeLogRetrieveParams as InventoryChangeLogRetrieveParams,
    type InventoryChangeLogListParams as InventoryChangeLogListParams,
  };

  export { Actions as Actions, type ActionExportParams as ActionExportParams };
}
