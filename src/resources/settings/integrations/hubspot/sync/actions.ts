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
   * Executes a reviewed HubSpot sync job, writing companies, contacts, and
   * Closed-Won deals to HubSpot.
   *
   * Every company review must be resolved first. A failed run can be re-executed to
   * resume where it stopped.
   *
   * This endpoint requires the permission: `integrations:update`.
   *
   * @example
   * ```ts
   * const hubspotSyncJob =
   *   await client.settings.integrations.hubspot.sync.actions.execute(
   *     'igjb_zwfvfjfxl4lj',
   *   );
   * ```
   */
  execute(id: string, options?: RequestOptions): APIPromise<SyncAPI.HubspotSyncJob> {
    return this._client.post(path`/v1/settings/integrations/hubspot/sync/${id}/actions/execute`, options);
  }
}
