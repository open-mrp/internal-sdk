// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as AnalyticsAPI from '../../../../../core/analytics';
import * as APIKeysAPI from '../../../../../auth/api-keys/api-keys';
import * as SyncAPI from '../sync';
import * as ActionsAPI from './actions';
import {
  ActionBulkResolveParams,
  ActionExportParams,
  ActionLinkParams,
  ActionSkipParams,
  Actions,
  BulkResolveHubspotCompanyReviewsRequest,
  ExportHubspotCompanyReviewsRequest,
  HubspotCompanyReviewResolutionInput,
  LinkHubspotCompanyReviewRequest,
} from './actions';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

/**
 * Start and manage the one-time HubSpot backfill/reconciliation of existing customers and orders.
 */
export class CompanyReviews extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Resolves a reviewed customer by creating a new HubSpot company for it during the
   * sync (rather than linking to an existing one).
   *
   * This endpoint requires the permission: `integrations:create`.
   *
   * @example
   * ```ts
   * const hubspotCompanyReview =
   *   await client.settings.integrations.hubspot.sync.companyReviews.create(
   *     'igrv_w88uo6y5g8bu',
   *     { id: 'igjb_pbxu4l5ujuym' },
   *   );
   * ```
   */
  create(
    reviewID: string,
    params: CompanyReviewCreateParams,
    options?: RequestOptions,
  ): APIPromise<HubspotCompanyReview> {
    const { id } = params;
    return this._client.post(
      path`/v1/settings/integrations/hubspot/sync/${id}/company-reviews/${reviewID}`,
      options,
    );
  }

  /**
   * Lists the company-match review queue for a sync job — the customers that could
   * not be confidently matched to a HubSpot company and need a human decision before
   * the sync executes.
   *
   * The whole queue is returned in a single response, without pagination.
   *
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const listHubspotCompanyReview =
   *   await client.settings.integrations.hubspot.sync.companyReviews.list(
   *     'igjb_pbxu4l5ujuym',
   *   );
   * ```
   */
  list(
    id: string,
    query: CompanyReviewListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListHubspotCompanyReview> {
    return this._client.get(path`/v1/settings/integrations/hubspot/sync/${id}/company-reviews`, {
      query,
      ...options,
    });
  }
}

/**
 * A possible HubSpot company match for a customer.
 */
export interface HubspotCompanyCandidate {
  /**
   * HubSpot company domain.
   */
  domain: string;

  /**
   * HubSpot company id.
   */
  hubspot_id: string;

  /**
   * HubSpot company name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'hubspot_company_candidate';
}

/**
 * One customer that needs a human company-match decision before the backfill can
 * write to HubSpot.
 */
export interface HubspotCompanyReview {
  /**
   * Review ID.
   */
  id: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  candidates: ListHubspotCompanyCandidate | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: AnalyticsAPI.Customer | null;

  /**
   * The customer's email address as it stood when the review was raised.
   *
   * Snapshotted on the review rather than read from the customer, because matching a
   * company means comparing what OpenMRP held at match time against what HubSpot holds
   * — a later edit to the customer must not silently change what a reviewer is
   * deciding on.
   */
  customer_email: string | null;

  /**
   * The customer's website as it stood when the review was raised — the field the
   * domain match was derived from.
   */
  customer_url: string | null;

  /**
   * A one-time run that brings the account's existing customers, contacts, and
   * orders into HubSpot.
   *
   * A sync runs in two phases: a read-only preview that matches customers to HubSpot
   * companies and produces a report, then an execute phase that does the writing
   * once any ambiguous matches have been resolved.
   */
  job: SyncAPI.HubspotSyncJob | null;

  /**
   * Resource type identifier.
   */
  object: 'hubspot_company_review';

  /**
   * How a resolved review was handled.
   *
   * - `link`: the customer was matched to an existing HubSpot company (see
   *   `resolved_hubspot_id`).
   * - `create_new`: a new HubSpot company will be created for the customer.
   */
  resolution: string | null;

  /**
   * The HubSpot company id this customer was linked to (when `resolution` is
   * `link`).
   */
  resolved_hubspot_id: string | null;

  /**
   * Resolution status.
   *
   * - `pending`: awaiting a decision.
   * - `resolved`: linked or marked create-new.
   * - `skipped`: the customer and its orders are left out of the sync entirely.
   */
  status: 'pending' | 'resolved' | 'skipped';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListHubspotCompanyCandidate {
  /**
   * Resources in this page.
   */
  data: Array<HubspotCompanyCandidate>;

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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListHubspotCompanyReview {
  /**
   * Resources in this page.
   */
  data: Array<HubspotCompanyReview>;

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

export interface CompanyReviewCreateParams {
  /**
   * HubSpot sync job ID.
   */
  id: string;
}

export interface CompanyReviewListParams {
  /**
   * Restrict the results to reviews in this resolution status.
   */
  status?: 'pending' | 'resolved' | 'skipped';
}

CompanyReviews.Actions = Actions;

export declare namespace CompanyReviews {
  export {
    type HubspotCompanyCandidate as HubspotCompanyCandidate,
    type HubspotCompanyReview as HubspotCompanyReview,
    type ListHubspotCompanyCandidate as ListHubspotCompanyCandidate,
    type ListHubspotCompanyReview as ListHubspotCompanyReview,
    type CompanyReviewCreateParams as CompanyReviewCreateParams,
    type CompanyReviewListParams as CompanyReviewListParams,
  };

  export {
    Actions as Actions,
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
