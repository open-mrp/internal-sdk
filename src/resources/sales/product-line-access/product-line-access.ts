// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroupAccountGroupsParams,
  AccountGroupDeleteResponse,
  AccountGroupProductLineAccess,
  AccountGroupRetrieveAccountGroupsParams,
  AccountGroupRetrieveAccountGroupsResponse,
  AccountGroupUpdateParams,
  AccountGroups,
} from './account-groups';
import * as CustomersAPI from './customers';
import {
  CustomerCreateParams,
  CustomerDeleteResponse,
  CustomerListParams,
  CustomerListResponse,
  CustomerProductLineAccess,
  CustomerUpdateParams,
  Customers,
} from './customers';

export class ProductLineAccess extends APIResource {
  accountGroups: AccountGroupsAPI.AccountGroups = new AccountGroupsAPI.AccountGroups(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
}

ProductLineAccess.AccountGroups = AccountGroups;
ProductLineAccess.Customers = Customers;

export declare namespace ProductLineAccess {
  export {
    AccountGroups as AccountGroups,
    type AccountGroupProductLineAccess as AccountGroupProductLineAccess,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupRetrieveAccountGroupsResponse as AccountGroupRetrieveAccountGroupsResponse,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupAccountGroupsParams as AccountGroupAccountGroupsParams,
    type AccountGroupRetrieveAccountGroupsParams as AccountGroupRetrieveAccountGroupsParams,
  };

  export {
    Customers as Customers,
    type CustomerProductLineAccess as CustomerProductLineAccess,
    type CustomerListResponse as CustomerListResponse,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
