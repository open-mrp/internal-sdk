// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from '../auth/auth';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Submit and review the feedback and bug reports users send from the dashboard.
 */
export class FeedbackReports extends APIResource {
  /**
   * Creates a feedback report from the signed-in user.
   *
   * The report is attributed to the user who submitted it and the account they were
   * acting on. API keys and agents cannot submit feedback.
   *
   * @example
   * ```ts
   * const feedbackReport =
   *   await client.core.feedbackReports.create({
   *     message:
   *       'The item list loses its filters when I open an item and come back.',
   *     page: '/dashboard/items',
   *   });
   * ```
   */
  create(params: FeedbackReportCreateParams, options?: RequestOptions): APIPromise<FeedbackReport> {
    const { include, ...body } = params;
    return this._client.post('/v1/core/feedback-reports', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of the feedback reports submitted on your account, most
   * recently submitted first.
   *
   * Only account administrators can list feedback reports.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const listFeedbackReport =
   *   await client.core.feedbackReports.list();
   * ```
   */
  list(
    query: FeedbackReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListFeedbackReport> {
    return this._client.get('/v1/core/feedback-reports', { query, ...options });
  }
}

/**
 * Request to create a feedback report.
 */
export interface CreateFeedbackReportRequest {
  /**
   * What the user is reporting, in their own words.
   */
  message: string;

  /**
   * Dashboard page the user was on when they submitted the report, recorded so the
   * report can be read in context.
   */
  page?: string;
}

/**
 * Feedback or a bug report a user submitted from the dashboard.
 */
export interface FeedbackReport {
  /**
   * Feedback report ID.
   */
  id: string;

  /**
   * When the report was submitted.
   */
  created_at: string;

  /**
   * What the user reported, in their own words.
   */
  message: string;

  /**
   * Resource type identifier.
   */
  object: 'feedback_report';

  /**
   * Dashboard page the user was on when they submitted the report.
   */
  page: string | null;

  /**
   * When the report was last updated.
   */
  updated_at: string;

  /**
   * A user's global profile, shared across every account they belong to.
   *
   * Account-specific settings (status, role, department) live on the account user
   * resource that links the user to each account.
   */
  user: AuthAPI.User | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListFeedbackReport {
  /**
   * Resources in this page.
   */
  data: Array<FeedbackReport>;

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

export interface FeedbackReportCreateParams {
  /**
   * Body param: What the user is reporting, in their own words.
   */
  message: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'user'>;

  /**
   * Body param: Dashboard page the user was on when they submitted the report,
   * recorded so the report can be read in context.
   */
  page?: string;
}

export interface FeedbackReportListParams {
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
  include?: Array<'user'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;
}

export declare namespace FeedbackReports {
  export {
    type CreateFeedbackReportRequest as CreateFeedbackReportRequest,
    type FeedbackReport as FeedbackReport,
    type ListFeedbackReport as ListFeedbackReport,
    type FeedbackReportCreateParams as FeedbackReportCreateParams,
    type FeedbackReportListParams as FeedbackReportListParams,
  };
}
