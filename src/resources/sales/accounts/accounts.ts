// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TerritoriesAPI from './territories';
import {
  CreateTerritoryRequest,
  ListTerritory,
  Territories,
  Territory,
  TerritoryCreateParams,
  TerritoryDeleteParams,
  TerritoryDeleteResponse,
  TerritoryListParams,
  TerritoryRetrieveParams,
  TerritoryUpdateParams,
  UpdateTerritoryRequest,
} from './territories';

export class Accounts extends APIResource {
  territories: TerritoriesAPI.Territories = new TerritoriesAPI.Territories(this._client);
}

Accounts.Territories = Territories;

export declare namespace Accounts {
  export {
    Territories as Territories,
    type CreateTerritoryRequest as CreateTerritoryRequest,
    type ListTerritory as ListTerritory,
    type Territory as Territory,
    type UpdateTerritoryRequest as UpdateTerritoryRequest,
    type TerritoryDeleteResponse as TerritoryDeleteResponse,
    type TerritoryCreateParams as TerritoryCreateParams,
    type TerritoryRetrieveParams as TerritoryRetrieveParams,
    type TerritoryUpdateParams as TerritoryUpdateParams,
    type TerritoryListParams as TerritoryListParams,
    type TerritoryDeleteParams as TerritoryDeleteParams,
  };
}
