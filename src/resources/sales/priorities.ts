// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from '../core/analytics';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve priorities.
 */
export class Priorities extends APIResource {
  /**
   * Retrieves a single priority level by ID or by code.
   *
   * Looking one up by code is usually more convenient, because other resources refer
   * to a priority by code rather than by ID.
   *
   * This endpoint requires the permission: `priorities:read`.
   *
   * @example
   * ```ts
   * const priority = await client.sales.priorities.retrieve(
   *   'pi_dubkbqpnz45f',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PriorityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.Priority> {
    return this._client.get(path`/v1/sales/priorities/${id}`, { query, ...options });
  }

  /**
   * Lists the priority levels that can be set on a sales order or purchase order.
   *
   * The levels are platform-provided and the same for every account, so the result
   * is small and stable enough to cache. Results are ordered newest first rather
   * than by urgency.
   *
   * This endpoint requires the permission: `priorities:read`.
   *
   * @example
   * ```ts
   * const listPriority = await client.sales.priorities.list();
   * ```
   */
  list(
    query: PriorityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPriority> {
    return this._client.get('/v1/sales/priorities', { query, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPriority {
  /**
   * Resources in this page.
   */
  data: Array<AnalyticsAPI.Priority>;

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

export interface PriorityRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;
}

export interface PriorityListParams {
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
  include?: Array<'owner'>;

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

export declare namespace Priorities {
  export {
    type ListPriority as ListPriority,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };
}
