// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SalesTargetsAPI from './sales-targets';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Address,
  CreateSalesTargetRequest,
  Geolocation,
  ListSalesTarget,
  Owner,
  PageInfo,
  Quantity,
  SalesTarget,
  SalesTargetCreateParams,
  SalesTargetListParams,
  SalesTargetUpdateParams,
  SalesTargets,
  Unit,
  UpsertSalesTargetRequest,
  User,
} from './sales-targets';

export class AccountUsers extends APIResource {
  salesTargets: SalesTargetsAPI.SalesTargets = new SalesTargetsAPI.SalesTargets(this._client);
}

AccountUsers.SalesTargets = SalesTargets;

export declare namespace AccountUsers {
  export {
    SalesTargets as SalesTargets,
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreateSalesTargetRequest as CreateSalesTargetRequest,
    type Geolocation as Geolocation,
    type ListSalesTarget as ListSalesTarget,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Quantity as Quantity,
    type SalesTarget as SalesTarget,
    type Unit as Unit,
    type UpsertSalesTargetRequest as UpsertSalesTargetRequest,
    type User as User,
    type SalesTargetCreateParams as SalesTargetCreateParams,
    type SalesTargetUpdateParams as SalesTargetUpdateParams,
    type SalesTargetListParams as SalesTargetListParams,
  };
}
