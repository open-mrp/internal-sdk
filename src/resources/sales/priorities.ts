// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and retrieve priorities.
 */
export class Priorities extends APIResource {
  /**
   * Returns a priority by ID or code.
   *
   * @example
   * ```ts
   * const priority = await client.sales.priorities.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PriorityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Priority> {
    return this._client.get(path`/v1/sales/priorities/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of priorities.
   *
   * @example
   * ```ts
   * const priorities = await client.sales.priorities.list();
   * ```
   */
  list(
    query: PriorityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriorityListResponse> {
    return this._client.get('/v1/sales/priorities', { query, ...options });
  }
}

/**
 * Priority level used by sales orders and picks.
 */
export interface Priority {
  /**
   * Priority ID.
   */
  id: string;

  /**
   * Machine-readable code.
   */
  code: 'low' | 'normal' | 'high';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'priority';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface PriorityListResponse {
  /**
   * Resources in this page.
   */
  data: Array<Priority>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace Priorities {
  export {
    type Priority as Priority,
    type PriorityListResponse as PriorityListResponse,
    type PriorityRetrieveParams as PriorityRetrieveParams,
    type PriorityListParams as PriorityListParams,
  };
}
