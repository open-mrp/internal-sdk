// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as CompanyReviewsAPI from './company-reviews/company-reviews';
import {
  CompanyReviewCreateParams,
  CompanyReviewListParams,
  CompanyReviews,
  HubspotCompanyCandidate,
  HubspotCompanyReview,
  ListHubspotCompanyCandidate,
  ListHubspotCompanyReview,
} from './company-reviews/company-reviews';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Start and manage the one-time HubSpot backfill/reconciliation of existing customers and orders.
 */
export class Sync extends APIResource {
  companyReviews: CompanyReviewsAPI.CompanyReviews = new CompanyReviewsAPI.CompanyReviews(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Starts a one-time HubSpot backfill for the account and kicks off the read-only
   * preview pass.
   *
   * The job matches existing customers to HubSpot companies and produces a dry-run
   * report; it writes nothing to HubSpot until the review queue is resolved and the
   * sync is executed.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.create({
   *     go_live_cutoff_at: '2026-05-10T00:00:00Z',
   *   });
   * ```
   */
  create(
    body: SyncCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HubspotSyncJob> {
    return this._client.post('/v1/settings/integrations/hubspot/sync', { body, ...options });
  }

  /**
   * Retrieves a HubSpot sync job, including its current status and the dry-run
   * report produced by the preview pass. Poll this to track a running sync.
   *
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.retrieve(
   *     'igjb_zwfvfjfxl4lj',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<HubspotSyncJob> {
    return this._client.get(path`/v1/settings/integrations/hubspot/sync/${id}`, options);
  }

  /**
   * Retrieves the account's most recent HubSpot sync job so a dashboard can resume
   * an in-progress sync after a refresh. Returns 404 when no sync has been started.
   *
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.retrieveCurrent();
   * ```
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<HubspotSyncJob> {
    return this._client.get('/v1/settings/integrations/hubspot/sync/current', options);
  }
}

/**
 * HubspotSyncJob is a one-time HubSpot backfill/reconciliation run for the
 * account.
 */
export interface HubspotSyncJob {
  /**
   * HubSpot sync job ID.
   */
  id: string;

  /**
   * When the job finished.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether this run is in dry-run/preview mode.
   */
  dry_run: boolean;

  /**
   * Orders on or after this instant become Closed-Won deals; `null` means no
   * historical deals are backfilled.
   */
  go_live_cutoff_at: string | null;

  /**
   * Failure detail when `status` is `failed`.
   */
  last_error: string | null;

  /**
   * Resource type identifier.
   */
  object: 'hubspot_sync_job';

  /**
   * HubspotSyncReport tallies what the execute phase would do, produced by the
   * read-only preview pass.
   */
  report: HubspotSyncReport | null;

  /**
   * When the execute phase started.
   */
  started_at: string | null;

  /**
   * Lifecycle status of the job.
   *
   * - `previewing`: matching customers to HubSpot companies (no writes yet).
   * - `review_pending`: awaiting resolution of ambiguous company matches and
   *   confirmation to execute.
   * - `executing`: writing companies, contacts, and deals to HubSpot.
   * - `completed`: finished.
   * - `failed`: stopped on an error (see `last_error`); re-run to resume.
   */
  status: 'previewing' | 'review_pending' | 'executing' | 'completed' | 'failed';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * HubspotSyncReport tallies what the execute phase would do, produced by the
 * read-only preview pass.
 */
export interface HubspotSyncReport {
  /**
   * Customers queued for human company-match review.
   */
  companies_ambiguous: number;

  /**
   * Customers auto-linked to a HubSpot company by a unique domain match.
   */
  companies_confident: number;

  /**
   * Customers with no match — a new company will be created.
   */
  companies_to_create: number;

  /**
   * Customers with an email — contact upsert candidates.
   */
  contacts_with_email: number;

  /**
   * Total customers considered.
   */
  customers_total: number;

  /**
   * Resource type identifier.
   */
  object: 'hubspot_sync_report';
}

/**
 * Request to start a HubSpot backfill.
 */
export interface StartHubspotSyncRequest {
  /**
   * Orders on or after this date become Closed-Won deals during the sync. Omit to
   * backfill companies and contacts only, with no historical deals.
   */
  go_live_cutoff_at?: string;
}

export interface SyncCreateParams {
  /**
   * Orders on or after this date become Closed-Won deals during the sync. Omit to
   * backfill companies and contacts only, with no historical deals.
   */
  go_live_cutoff_at?: string;
}

Sync.CompanyReviews = CompanyReviews;
Sync.Actions = Actions;

export declare namespace Sync {
  export {
    type HubspotSyncJob as HubspotSyncJob,
    type HubspotSyncReport as HubspotSyncReport,
    type StartHubspotSyncRequest as StartHubspotSyncRequest,
    type SyncCreateParams as SyncCreateParams,
  };

  export {
    CompanyReviews as CompanyReviews,
    type HubspotCompanyCandidate as HubspotCompanyCandidate,
    type HubspotCompanyReview as HubspotCompanyReview,
    type ListHubspotCompanyCandidate as ListHubspotCompanyCandidate,
    type ListHubspotCompanyReview as ListHubspotCompanyReview,
    type CompanyReviewCreateParams as CompanyReviewCreateParams,
    type CompanyReviewListParams as CompanyReviewListParams,
  };

  export { Actions as Actions };
}
