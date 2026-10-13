// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ItemsAPI from '../../../catalog/items/items';
import * as ActionsAPI from './actions';
import {
  ActionSuggestFromScansParams,
  Actions,
  ListMachineItemScanSuggestion,
  MachineItemScanSuggestion,
  SuggestMachineItemsFromScansRequest,
} from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List and manage machines.
 */
export class Items extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Replaces the items a machine is configured to run.
   *
   * This is a full replacement, not a merge: items omitted from the request are
   * removed. Production schedule generation uses this set for SKU discovery and
   * machine eligibility.
   *
   * This endpoint requires the permission: `machines:update`.
   *
   * @example
   * ```ts
   * const listItem =
   *   await client.operations.machines.items.update(
   *     'mc_ffcfk9dxixis',
   *     { item_ids: ['it_pej07ckhvu62'] },
   *   );
   * ```
   */
  update(
    id: string,
    params: ItemUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemsAPI.ListItem> {
    const { include, ...body } = params ?? {};
    return this._client.put(path`/v1/operations/machines/${id}/items`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns the items a machine is configured to run, newest association first.
   *
   * `q` matches against item SKU and description.
   *
   * This endpoint requires the permission: `machines:read`.
   *
   * @example
   * ```ts
   * const listItem =
   *   await client.operations.machines.items.list(
   *     'mc_ffcfk9dxixis',
   *   );
   * ```
   */
  list(
    id: string,
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemsAPI.ListItem> {
    return this._client.get(path`/v1/operations/machines/${id}/items`, { query, ...options });
  }
}

/**
 * Request to replace the items a machine is configured to run.
 */
export interface ReplaceMachineItemsRequest {
  /**
   * The full set of item IDs this machine should run.
   *
   * Replaces the existing set; send an empty list to clear all configured items.
   */
  item_ids?: Array<string>;
}

export interface ItemUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'category' | 'unit_value' | 'attributes'>;

  /**
   * Body param: The full set of item IDs this machine should run.
   *
   * Replaces the existing set; send an empty list to clear all configured items.
   */
  item_ids?: Array<string>;
}

export interface ItemListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'category' | 'unit_value' | 'attributes'>;

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
}

Items.Actions = Actions;

export declare namespace Items {
  export {
    type ReplaceMachineItemsRequest as ReplaceMachineItemsRequest,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
  };

  export {
    Actions as Actions,
    type ListMachineItemScanSuggestion as ListMachineItemScanSuggestion,
    type MachineItemScanSuggestion as MachineItemScanSuggestion,
    type SuggestMachineItemsFromScansRequest as SuggestMachineItemsFromScansRequest,
    type ActionSuggestFromScansParams as ActionSuggestFromScansParams,
  };
}
