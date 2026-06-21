// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SyncAPI from './sync/sync';
import {
  HubspotSyncJob,
  HubspotSyncReport,
  StartHubspotSyncRequest,
  Sync,
  SyncCreateParams,
} from './sync/sync';

export class Hubspot extends APIResource {
  sync: SyncAPI.Sync = new SyncAPI.Sync(this._client);
}

Hubspot.Sync = Sync;

export declare namespace Hubspot {
  export {
    Sync as Sync,
    type HubspotSyncJob as HubspotSyncJob,
    type HubspotSyncReport as HubspotSyncReport,
    type StartHubspotSyncRequest as StartHubspotSyncRequest,
    type SyncCreateParams as SyncCreateParams,
  };
}
