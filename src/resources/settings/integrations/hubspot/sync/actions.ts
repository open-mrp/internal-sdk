// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SyncAPI from './sync';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Start and manage the one-time HubSpot backfill/reconciliation of existing customers and orders.
 */
export class Actions extends APIResource {
  /**
   * Cancels a HubSpot sync job that is still in progress, releasing the account to
   * start a new one.
   *
   * Use this when a sync is stuck — for example when the worker running it stopped
   * without recording an outcome. The job is marked failed, with the cancelling user
   * recorded in `last_error`. Anything already written to HubSpot stays there;
   * cancelling only stops the run. A sync that has already completed or failed
   * cannot be cancelled.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.actions.cancel(
   *     'igjb_pbxu4l5ujuym',
   *   );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<SyncAPI.HubspotSyncJob> {
    return this._client.post(path`/v1/settings/integrations/hubspot/sync/${id}/actions/cancel`, options);
  }

  /**
   * Executes a reviewed HubSpot sync job, writing companies, contacts, and
   * Closed-Won deals to HubSpot.
   *
   * Every company review must be resolved or skipped first, and the job's preview
   * pass must have finished — a sync that failed mid-preview has incomplete matches
   * and cannot be executed, so start a new one instead. Writing happens in the
   * background: this returns as soon as the job is claimed, and the job moves to
   * `executing`. Calling it again while the sync is running is rejected, but a run
   * that failed part-way can be executed again to resume where it stopped.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.actions.execute(
   *     'igjb_pbxu4l5ujuym',
   *   );
   * ```
   */
  execute(id: string, options?: RequestOptions): APIPromise<SyncAPI.HubspotSyncJob> {
    return this._client.post(path`/v1/settings/integrations/hubspot/sync/${id}/actions/execute`, options);
  }
}
