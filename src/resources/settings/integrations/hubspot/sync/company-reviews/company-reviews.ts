// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as APIKeysAPI from '../../../../../auth/api-keys/api-keys';
import * as CustomersAPI from '../../../../../sales/customers/customers';
import * as SyncAPI from '../sync';
import * as ActionsAPI from './actions';
import { ActionLinkParams, ActionSkipParams, Actions, LinkHubspotCompanyReviewRequest } from './actions';
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
   *     'igrv_mkhn7eo9qexh',
   *     { id: 'igjb_zwfvfjfxl4lj' },
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
   * This endpoint requires the permission: `integrations:read`.
   *
   * @example
   * ```ts
   * const listHubspotCompanyReview =
   *   await client.settings.integrations.hubspot.sync.companyReviews.list(
   *     'igjb_zwfvfjfxl4lj',
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
   * List represents a paginated list of resources.
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
  customer: CustomersAPI.Customer | null;

  /**
   * A one-time HubSpot backfill/reconciliation run for the account.
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
   * - `skipped`: excluded from the sync.
   */
  status: 'pending' | 'resolved' | 'skipped';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
    type LinkHubspotCompanyReviewRequest as LinkHubspotCompanyReviewRequest,
    type ActionLinkParams as ActionLinkParams,
    type ActionSkipParams as ActionSkipParams,
  };
}
