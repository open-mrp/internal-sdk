// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as JobsAPI from '../../../../../core/jobs';
import * as CompanyReviewsAPI from './company-reviews';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

/**
 * Start and manage the one-time HubSpot backfill/reconciliation of existing customers and orders.
 */
export class Actions extends APIResource {
  /**
   * Applies many company-match decisions to a sync at once, the way a reviewed
   * spreadsheet comes back in.
   *
   * The decisions are validated against the sync synchronously — an unknown review,
   * or one belonging to another sync, fails the whole request — and then applied by
   * a background job. Poll the returned job to follow it: each decision that could
   * not be applied lands in the job's `errors`, keyed by its index in `reviews`,
   * while the rest still take effect.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const job =
   *   await client.settings.integrations.hubspot.sync.companyReviews.actions.bulkResolve(
   *     'igjb_pbxu4l5ujuym',
   *     {
   *       reviews: [
   *         {
   *           review_id: 'igrv_w88uo6y5g8bu',
   *           action: 'link',
   *           resolved_hubspot_id: '12345',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  bulkResolve(id: string, body: ActionBulkResolveParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post(
      path`/v1/settings/integrations/hubspot/sync/${id}/company-reviews/actions/bulk-resolve`,
      { body, ...options },
    );
  }

  /**
   * Starts an export of a sync's company-match review queue and returns the job that
   * tracks it.
   *
   * The file carries each customer's name, email, and website alongside its
   * candidate HubSpot companies, plus blank `Decision` and `HubSpot Company ID`
   * columns. Filling those in and posting the rows back to the bulk-resolve endpoint
   * applies them, so the queue can be worked outside the dashboard.
   *
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const job =
   *   await client.settings.integrations.hubspot.sync.companyReviews.actions.export(
   *     'igjb_pbxu4l5ujuym',
   *     { status: null },
   *   );
   * ```
   */
  export(id: string, body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post(
      path`/v1/settings/integrations/hubspot/sync/${id}/company-reviews/actions/export`,
      { body, ...options },
    );
  }

  /**
   * Links a reviewed customer to an existing HubSpot company, resolving the review
   * so the sync can proceed.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const hubspotCompanyReview =
   *   await client.settings.integrations.hubspot.sync.companyReviews.actions.link(
   *     'igrv_w88uo6y5g8bu',
   *     {
   *       id: 'igjb_pbxu4l5ujuym',
   *       resolved_hubspot_id: '12345',
   *     },
   *   );
   * ```
   */
  link(
    reviewID: string,
    params: ActionLinkParams,
    options?: RequestOptions,
  ): APIPromise<CompanyReviewsAPI.HubspotCompanyReview> {
    const { id, ...body } = params;
    return this._client.post(
      path`/v1/settings/integrations/hubspot/sync/${id}/company-reviews/${reviewID}/actions/link`,
      { body, ...options },
    );
  }

  /**
   * Skips a reviewed customer, excluding it (and its orders) from the sync entirely.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const hubspotCompanyReview =
   *   await client.settings.integrations.hubspot.sync.companyReviews.actions.skip(
   *     'igrv_w88uo6y5g8bu',
   *     { id: 'igjb_pbxu4l5ujuym' },
   *   );
   * ```
   */
  skip(
    reviewID: string,
    params: ActionSkipParams,
    options?: RequestOptions,
  ): APIPromise<CompanyReviewsAPI.HubspotCompanyReview> {
    const { id } = params;
    return this._client.post(
      path`/v1/settings/integrations/hubspot/sync/${id}/company-reviews/${reviewID}/actions/skip`,
      options,
    );
  }
}

/**
 * Request to resolve many company reviews at once.
 */
export interface BulkResolveHubspotCompanyReviewsRequest {
  /**
   * The decisions to apply. Every review must belong to this sync.
   */
  reviews: Array<HubspotCompanyReviewResolutionInput>;
}

/**
 * Filters which of a sync's company reviews land in the exported file.
 */
export interface ExportHubspotCompanyReviewsRequest {
  /**
   * Restrict the file to reviews in this resolution status.
   */
  status: 'pending' | 'resolved' | 'skipped' | null;
}

/**
 * One company-match decision.
 */
export interface HubspotCompanyReviewResolutionInput {
  /**
   * What to do with the customer.
   *
   * - `link`: match it to the existing HubSpot company named by
   *   `resolved_hubspot_id`.
   * - `create_new`: create a new HubSpot company for it.
   * - `skip`: leave the customer and its orders out of the sync.
   */
  action: 'link' | 'create_new' | 'skip';

  /**
   * The HubSpot company id to link to. Required when `action` is `link`.
   */
  resolved_hubspot_id: string | null;

  /**
   * The review being decided.
   */
  review_id: string;
}

/**
 * Request to link a company review to an existing HubSpot company.
 */
export interface LinkHubspotCompanyReviewRequest {
  /**
   * The HubSpot company id to link this customer to.
   */
  resolved_hubspot_id: string;
}

export interface ActionBulkResolveParams {
  /**
   * The decisions to apply. Every review must belong to this sync.
   */
  reviews: Array<HubspotCompanyReviewResolutionInput>;
}

export interface ActionExportParams {
  /**
   * Restrict the file to reviews in this resolution status.
   */
  status: 'pending' | 'resolved' | 'skipped' | null;
}

export interface ActionLinkParams {
  /**
   * Path param: HubSpot sync job ID.
   */
  id: string;

  /**
   * Body param: The HubSpot company id to link this customer to.
   */
  resolved_hubspot_id: string;
}

export interface ActionSkipParams {
  /**
   * HubSpot sync job ID.
   */
  id: string;
}

export declare namespace Actions {
  export {
    type BulkResolveHubspotCompanyReviewsRequest as BulkResolveHubspotCompanyReviewsRequest,
    type ExportHubspotCompanyReviewsRequest as ExportHubspotCompanyReviewsRequest,
    type HubspotCompanyReviewResolutionInput as HubspotCompanyReviewResolutionInput,
    type LinkHubspotCompanyReviewRequest as LinkHubspotCompanyReviewRequest,
    type ActionBulkResolveParams as ActionBulkResolveParams,
    type ActionExportParams as ActionExportParams,
    type ActionLinkParams as ActionLinkParams,
    type ActionSkipParams as ActionSkipParams,
  };
}
