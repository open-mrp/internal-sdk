// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
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
   *   'id',
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
   * const response =
   *   await client.operations.ediRuns.retrieveEdiRuns();
   * ```
   */
  retrieveEdiRuns(
    query: EdiRunRetrieveEdiRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EdiRunRetrieveEdiRunsResponse> {
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
export interface EdiRunRetrieveEdiRunsResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface EdiRunRetrieveEdiRunsParams {
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
    type EdiRunRetrieveEdiRunsResponse as EdiRunRetrieveEdiRunsResponse,
    type EdiRunRetrieveEdiRunsParams as EdiRunRetrieveEdiRunsParams,
  };
}
