// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountGroupsAPI from './account-groups';
import {
  AccountGroupCreateParams,
  AccountGroupDeleteResponse,
  AccountGroupListParams,
  AccountGroupProductLineAccess,
  AccountGroupUpdateParams,
  AccountGroups,
  CreateAccountGroupProductLineAccessRequest,
  ListAccountGroupProductLineAccess,
  ListProductLine,
  UpdateAccountGroupProductLineAccessRequest,
} from './account-groups';
import * as CustomersAPI from './customers';
import {
  CreateCustomerProductLineAccessRequest,
  CustomerCreateParams,
  CustomerDeleteResponse,
  CustomerListParams,
  CustomerProductLineAccess,
  CustomerUpdateParams,
  Customers,
  ListCustomerProductLineAccess,
  UpdateCustomerProductLineAccessRequest,
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
    type CreateAccountGroupProductLineAccessRequest as CreateAccountGroupProductLineAccessRequest,
    type ListAccountGroupProductLineAccess as ListAccountGroupProductLineAccess,
    type ListProductLine as ListProductLine,
    type UpdateAccountGroupProductLineAccessRequest as UpdateAccountGroupProductLineAccessRequest,
    type AccountGroupDeleteResponse as AccountGroupDeleteResponse,
    type AccountGroupCreateParams as AccountGroupCreateParams,
    type AccountGroupUpdateParams as AccountGroupUpdateParams,
    type AccountGroupListParams as AccountGroupListParams,
  };

  export {
    Customers as Customers,
    type CreateCustomerProductLineAccessRequest as CreateCustomerProductLineAccessRequest,
    type CustomerProductLineAccess as CustomerProductLineAccess,
    type ListCustomerProductLineAccess as ListCustomerProductLineAccess,
    type UpdateCustomerProductLineAccessRequest as UpdateCustomerProductLineAccessRequest,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
