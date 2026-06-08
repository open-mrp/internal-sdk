// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as CustomersAPI from '../customers/customers';
import * as AccountGroupsAPI from './account-groups';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage product line access for customers.
 */
export class Customers extends APIResource {
  /**
   * Creates product line access for a customer.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.create({
   *     customer_id: 'ac_0170df1ac58e4d24c66fc89f5f',
   *     product_line_ids: ['pl_01996357326a0d3f7b129542ea'],
   *   });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerProductLineAccess> {
    return this._client.post('/v1/sales/product-line-access/customers', { body, ...options });
  }

  /**
   * Returns the product line access for a customer.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.retrieve(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *   );
   * ```
   */
  retrieve(customerID: string, options?: RequestOptions): APIPromise<CustomerProductLineAccess> {
    return this._client.get(path`/v1/sales/product-line-access/customers/${customerID}`, options);
  }

  /**
   * Replaces all product line access for a customer.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.update(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *   );
   * ```
   */
  update(
    customerID: string,
    body: CustomerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerProductLineAccess> {
    return this._client.patch(path`/v1/sales/product-line-access/customers/${customerID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of product line access records grouped by customer.
   *
   * @example
   * ```ts
   * const listCustomerProductLineAccess =
   *   await client.sales.productLineAccess.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCustomerProductLineAccess> {
    return this._client.get('/v1/sales/product-line-access/customers', { query, ...options });
  }

  /**
   * Removes all product line access for a customer.
   *
   * @example
   * ```ts
   * const customer =
   *   await client.sales.productLineAccess.customers.delete(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *   );
   * ```
   */
  delete(customerID: string, options?: RequestOptions): APIPromise<CustomerDeleteResponse> {
    return this._client.delete(path`/v1/sales/product-line-access/customers/${customerID}`, options);
  }
}

/**
 * Request to create product line access for a customer.
 */
export interface CreateCustomerProductLineAccessRequest {
  /**
   * Customer ID.
   */
  customer_id: string;

  /**
   * Product line IDs to grant access to.
   */
  product_line_ids: Array<string>;
}

/**
 * Product lines accessible to a customer.
 */
export interface CustomerProductLineAccess {
  /**
   * When this record was created.
   */
  created_at: string;

  /**
   * Customer account.
   */
  customer: CustomersAPI.Customer | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_product_line_access';

  /**
   * List represents a paginated list of resources.
   */
  product_lines: AccountGroupsAPI.ListProductLine | null;

  /**
   * When this record was last updated.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListCustomerProductLineAccess {
  /**
   * Resources in this page.
   */
  data: Array<CustomerProductLineAccess>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to update product line access for a customer.
 */
export interface UpdateCustomerProductLineAccessRequest {
  /**
   * Product line IDs to grant access to.
   */
  product_line_ids?: Array<string>;
}

export interface CustomerDeleteResponse {}

export interface CustomerCreateParams {
  /**
   * Customer ID.
   */
  customer_id: string;

  /**
   * Product line IDs to grant access to.
   */
  product_line_ids: Array<string>;
}

export interface CustomerUpdateParams {
  /**
   * Product line IDs to grant access to.
   */
  product_line_ids?: Array<string>;
}

export interface CustomerListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace Customers {
  export {
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
