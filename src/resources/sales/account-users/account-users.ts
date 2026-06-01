// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SalesTargetsAPI from './sales-targets';
import {
  CreateSalesTargetRequest,
  ListSalesTarget,
  SalesTarget,
  SalesTargetCreateParams,
  SalesTargetListParams,
  SalesTargetUpdateParams,
  SalesTargets,
  UpsertSalesTargetRequest,
} from './sales-targets';

export class AccountUsers extends APIResource {
  salesTargets: SalesTargetsAPI.SalesTargets = new SalesTargetsAPI.SalesTargets(this._client);
}

AccountUsers.SalesTargets = SalesTargets;

export declare namespace AccountUsers {
  export {
    SalesTargets as SalesTargets,
    type CreateSalesTargetRequest as CreateSalesTargetRequest,
    type ListSalesTarget as ListSalesTarget,
    type SalesTarget as SalesTarget,
    type UpsertSalesTargetRequest as UpsertSalesTargetRequest,
    type SalesTargetCreateParams as SalesTargetCreateParams,
    type SalesTargetUpdateParams as SalesTargetUpdateParams,
    type SalesTargetListParams as SalesTargetListParams,
  };
}
