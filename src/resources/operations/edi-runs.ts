// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
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
   * This endpoint requires the permission: `edi_runs:read`.
   *
   * @example
   * ```ts
   * const ediRun = await client.operations.ediRuns.retrieve(
   *   'edru_bpgd8fix7eeh',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EdiRun> {
    return this._client.get(path`/v1/operations/edi-runs/${id}`, options);
  }

  /**
   * Returns a paginated list of EDI runs for the target account.
   *
   * Runs are ordered by completion time, most recent first. The `q` search term
   * matches the EDI run ID.
   *
   * This endpoint requires the permission: `edi_runs:read`.
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
 * A record of a single EDI processing run.
 *
 * EDI runs are created automatically by the platform's EDI processing and are
 * read-only through the API.
 */
export interface EdiRun {
  /**
   * EDI run ID.
   */
  id: string;

  /**
   * Timestamp when the EDI run finished processing.
   */
  completed_at: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether the run finished its EDI exchange without errors.
   */
  has_succeeded: boolean;

  /**
   * Resource type identifier.
   */
  object: 'edi_run';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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

export interface EdiRunListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Filters runs by outcome.
   *
   * Pass `true` to return only successful runs or `false` to return only failed
   * runs. Omit to return runs regardless of outcome.
   */
  has_succeeded?: boolean;

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

export declare namespace EdiRuns {
  export { type EdiRun as EdiRun, type ListEdiRun as ListEdiRun, type EdiRunListParams as EdiRunListParams };
}
