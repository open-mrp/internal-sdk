// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as CustomersAPI from './customers/customers';
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
   *   'pi_01fc435701244bb3978bfb77ff',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PriorityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.Priority> {
    return this._client.get(path`/v1/sales/priorities/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of priorities.
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
 * List represents a paginated list of resources.
 */
export interface ListPriority {
  /**
   * Resources in this page.
   */
  data: Array<CustomersAPI.Priority>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
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
