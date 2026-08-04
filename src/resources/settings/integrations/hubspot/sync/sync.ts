// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as APIKeysAPI from '../../../../auth/api-keys/api-keys';
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
   * sync is executed. Poll the returned job to know when the preview has finished.
   *
   * Only one sync can be underway at a time: starting another while a sync is
   * previewing, awaiting review, or executing is rejected. If the account has no
   * active HubSpot integration, the job is still created but its preview pass fails
   * immediately.
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
   * report produced by the preview pass.
   *
   * Poll this endpoint to track the progress of a running sync.
   *
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.retrieve(
   *     'igjb_pbxu4l5ujuym',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<HubspotSyncJob> {
    return this._client.get(path`/v1/settings/integrations/hubspot/sync/${id}`, options);
  }

  /**
   * Retrieves the account's most recent HubSpot sync job so a dashboard can resume
   * an in-progress sync after a refresh.
   *
   * Returns a not-found error when no sync has ever been started for the account.
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

  /**
   * Lists the mappings the HubSpot sync has recorded for the account — each Augno
   * record and the HubSpot object it maps to.
   *
   * A mapping is recorded as soon as the sync resolves a record's HubSpot object,
   * which for a confidently matched customer happens during the read-only preview,
   * before anything has been written to HubSpot. Results are ordered by Augno record
   * id.
   *
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const listHubspotSyncRecord =
   *   await client.settings.integrations.hubspot.sync.retrieveRecords();
   * ```
   */
  retrieveRecords(
    query: SyncRetrieveRecordsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListHubspotSyncRecord> {
    return this._client.get('/v1/settings/integrations/hubspot/sync/records', { query, ...options });
  }
}

/**
 * A one-time run that brings the account's existing customers, contacts, and
 * orders into HubSpot.
 *
 * A sync runs in two phases: a read-only preview that matches customers to HubSpot
 * companies and produces a report, then an execute phase that does the writing
 * once any ambiguous matches have been resolved.
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
   * Orders placed on or after this cutoff are backfilled as Closed-Won deals.
   *
   * Only the UTC date is used, so the whole of that day is included regardless of
   * the time of day given. When unset, no historical deals are created; companies
   * and contacts still sync.
   */
  go_live_cutoff_at: string | null;

  /**
   * Explanation of why the run stopped.
   *
   * A cancelled sync records who cancelled it here.
   */
  last_error: string | null;

  /**
   * Resource type identifier.
   */
  object: 'hubspot_sync_job';

  /**
   * A tally of what the execute phase would do, produced by the read-only preview
   * pass.
   */
  report: HubspotSyncReport | null;

  /**
   * When the execute phase started.
   */
  started_at: string | null;

  /**
   * Lifecycle status of the job.
   *
   * - `previewing`: matching customers to HubSpot companies; nothing is written to
   *   HubSpot yet.
   * - `review_pending`: awaiting resolution of ambiguous company matches and
   *   confirmation to execute.
   * - `executing`: writing companies, contacts, and deals to HubSpot.
   * - `completed`: the write phase finished successfully.
   * - `failed`: stopped on an error, or was cancelled (see `last_error`).
   *
   * A run that failed while writing to HubSpot can be executed again to resume where
   * it stopped; a run that failed before its preview finished cannot, and a new sync
   * has to be started instead. Only one sync per account can be `previewing`,
   * `review_pending`, or `executing` at a time.
   */
  status: 'previewing' | 'review_pending' | 'executing' | 'completed' | 'failed';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * One Augno record and the HubSpot object the sync has mapped it to.
 */
export interface HubspotSyncRecord {
  /**
   * Sync record ID.
   */
  id: string;

  /**
   * ID of the Augno record that was synced.
   *
   * A `contact` record carries the customer's id, because a customer keeps a single
   * primary contact in HubSpot.
   */
  augno_id: string;

  /**
   * Name of the Augno record that was synced.
   *
   * Empty when the record has since been deleted.
   */
  augno_name: string;

  /**
   * The kind of Augno record that was synced.
   *
   * - `customer`: a customer, mapped to a HubSpot company.
   * - `contact`: a customer's primary contact person, mapped to a HubSpot contact.
   * - `deal`: a sales order, mapped to a HubSpot deal.
   */
  augno_type: 'customer' | 'contact' | 'deal';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * ID of the HubSpot object it maps to.
   */
  hubspot_id: string;

  /**
   * The kind of HubSpot object it maps to.
   *
   * These are HubSpot's own object-type names, so they can be used directly against
   * HubSpot's API.
   */
  hubspot_type: 'companies' | 'contacts' | 'deals';

  /**
   * Why the last attempt to sync this record failed.
   */
  last_error: string | null;

  /**
   * When the sync last updated this mapping.
   */
  last_synced_at: string | null;

  /**
   * Resource type identifier.
   */
  object: 'hubspot_sync_record';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A tally of what the execute phase would do, produced by the read-only preview
 * pass.
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
   * Customers with an email address, each of which becomes a HubSpot contact.
   *
   * A customer with no email address gets no contact, since HubSpot matches contacts
   * by email.
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListHubspotSyncRecord {
  /**
   * Resources in this page.
   */
  data: Array<HubspotSyncRecord>;

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
 * Request to start a HubSpot backfill.
 */
export interface StartHubspotSyncRequest {
  /**
   * Orders placed on or after this date are backfilled as Closed-Won deals during
   * the sync.
   *
   * Only the UTC date is used, so the whole of that day is included regardless of
   * the time of day given. Omit to sync companies and contacts only, with no
   * historical deals.
   */
  go_live_cutoff_at?: string;
}

export interface SyncCreateParams {
  /**
   * Orders placed on or after this date are backfilled as Closed-Won deals during
   * the sync.
   *
   * Only the UTC date is used, so the whole of that day is included regardless of
   * the time of day given. Omit to sync companies and contacts only, with no
   * historical deals.
   */
  go_live_cutoff_at?: string;
}

export interface SyncRetrieveRecordsParams {
  /**
   * The kind of mapping to list.
   *
   * One request returns one kind of mapping; omit this to list the
   * customer-to-company mappings.
   */
  augno_type?: 'customer' | 'contact' | 'deal';

  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` to
   * fetch the next page. Omit to start from the first page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;
}

Sync.CompanyReviews = CompanyReviews;
Sync.Actions = Actions;

export declare namespace Sync {
  export {
    type HubspotSyncJob as HubspotSyncJob,
    type HubspotSyncRecord as HubspotSyncRecord,
    type HubspotSyncReport as HubspotSyncReport,
    type ListHubspotSyncRecord as ListHubspotSyncRecord,
    type StartHubspotSyncRequest as StartHubspotSyncRequest,
    type SyncCreateParams as SyncCreateParams,
    type SyncRetrieveRecordsParams as SyncRetrieveRecordsParams,
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
