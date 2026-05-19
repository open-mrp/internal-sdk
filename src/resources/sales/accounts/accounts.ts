// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TerritoriesAPI from './territories';
import {
  Territories,
  Territory,
  TerritoryCreateParams,
  TerritoryDeleteParams,
  TerritoryDeleteResponse,
  TerritoryListParams,
  TerritoryListResponse,
  TerritoryRetrieveParams,
  TerritoryUpdateParams,
} from './territories';

export class Accounts extends APIResource {
  territories: TerritoriesAPI.Territories = new TerritoriesAPI.Territories(this._client);
}

Accounts.Territories = Territories;

export declare namespace Accounts {
  export {
    Territories as Territories,
    type Territory as Territory,
    type TerritoryListResponse as TerritoryListResponse,
    type TerritoryDeleteResponse as TerritoryDeleteResponse,
    type TerritoryCreateParams as TerritoryCreateParams,
    type TerritoryRetrieveParams as TerritoryRetrieveParams,
    type TerritoryUpdateParams as TerritoryUpdateParams,
    type TerritoryListParams as TerritoryListParams,
    type TerritoryDeleteParams as TerritoryDeleteParams,
  };
}
