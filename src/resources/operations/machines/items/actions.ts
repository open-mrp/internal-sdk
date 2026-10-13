// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as APIKeysAPI from '../../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../../identity/account-users/account-users';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List and manage machines.
 */
export class Actions extends APIResource {
  /**
   * Suggests items from a machine's scan history without changing its configured
   * set.
   *
   * Use the response to curate a list, then save with Replace Machine Items.
   * Suggestions are ordered by most recent scan.
   *
   * This endpoint requires the permission: `machines:read`.
   *
   * @example
   * ```ts
   * const listMachineItemScanSuggestion =
   *   await client.operations.machines.items.actions.suggestFromScans(
   *     'mc_ffcfk9dxixis',
   *     { window_months: 24 },
   *   );
   * ```
   */
  suggestFromScans(
    id: string,
    params: ActionSuggestFromScansParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMachineItemScanSuggestion> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/operations/machines/${id}/items/actions/suggest-from-scans`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListMachineItemScanSuggestion {
  /**
   * Resources in this page.
   */
  data: Array<MachineItemScanSuggestion>;

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
 * MachineItemScanSuggestion is a scan-history candidate for curating a machine's
 * runnable items.
 */
export interface MachineItemScanSuggestion {
  /**
   * The suggested item's ID; used as the row identity for includes.
   */
  id: string;

  /**
   * How many scanned batches of this item were found on the machine in the
   * suggestion window.
   */
  batch_count: number;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * When this item was last scanned on the machine.
   */
  last_scanned_at: string;

  /**
   * The resource type identifier.
   */
  object: 'machine_item_scan_suggestion';
}

/**
 * Request to suggest items from a machine's scan history.
 */
export interface SuggestMachineItemsFromScansRequest {
  /**
   * How many months of scan history to consider.
   *
   * Defaults to 24 when omitted.
   */
  window_months?: number;
}

export interface ActionSuggestFromScansParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'item'>;

  /**
   * Body param: How many months of scan history to consider.
   *
   * Defaults to 24 when omitted.
   */
  window_months?: number;
}

export declare namespace Actions {
  export {
    type ListMachineItemScanSuggestion as ListMachineItemScanSuggestion,
    type MachineItemScanSuggestion as MachineItemScanSuggestion,
    type SuggestMachineItemsFromScansRequest as SuggestMachineItemsFromScansRequest,
    type ActionSuggestFromScansParams as ActionSuggestFromScansParams,
  };
}
