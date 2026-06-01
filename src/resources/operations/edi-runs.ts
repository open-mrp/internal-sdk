// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and view EDI runs.
 */
export class EdiRuns extends APIResource {
  /**
   * Returns an EDI run by ID.
   *
   * @example
   * ```ts
   * const ediRun = await client.operations.ediRuns.retrieve(
   *   'edru_016aa43a99df34b744f6e2b878',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EdiRun> {
    return this._client.get(path`/v1/operations/edi-runs/${id}`, options);
  }

  /**
   * Returns a paginated list of EDI runs for the target account.
   *
   * @example
   * ```ts
   * const listEdiRun = await client.operations.ediRuns.list();
   * ```
   */
  list(query: EdiRunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListEdiRun> {
    return this._client.get('/v1/operations/edi-runs', { query, ...options });
  }
}

/**
 * EDI run resource.
 */
export interface EdiRun {
  /**
   * EDI run ID.
   */
  id: string;

  /**
   * Timestamp when the EDI run completed.
   */
  completed_at: string;

  /**
   * Timestamp when the EDI run was created.
   */
  created_at: string;

  /**
   * Whether the EDI run succeeded.
   */
  has_succeeded: boolean;

  /**
   * Resource type identifier.
   */
  object: 'edi_run';

  /**
   * Timestamp when the EDI run was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListEdiRun {
  /**
   * Resources in this page.
   */
  data: Array<EdiRun>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: PageInfo;
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
}

export interface EdiRunListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Success status filter.
   */
  has_succeeded?: boolean;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace EdiRuns {
  export {
    type EdiRun as EdiRun,
    type ListEdiRun as ListEdiRun,
    type PageInfo as PageInfo,
    type EdiRunListParams as EdiRunListParams,
  };
}
