// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as CompanyReviewsAPI from './company-reviews';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

/**
 * Start and manage the one-time HubSpot backfill/reconciliation of existing customers and orders.
 */
export class Actions extends APIResource {
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
 * Request to link a company review to an existing HubSpot company.
 */
export interface LinkHubspotCompanyReviewRequest {
  /**
   * The HubSpot company id to link this customer to.
   */
  resolved_hubspot_id: string;
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
    type LinkHubspotCompanyReviewRequest as LinkHubspotCompanyReviewRequest,
    type ActionLinkParams as ActionLinkParams,
    type ActionSkipParams as ActionSkipParams,
  };
}
