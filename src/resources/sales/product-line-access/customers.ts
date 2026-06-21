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
   * Grants a customer direct access to a set of product lines.
   *
   * Each customer can have at most one access record; fails with a conflict error if
   * one already exists. Use Update Customer Product Line Access to change an
   * existing record.
   *
   * This endpoint requires the permission: `relevant_products:create`.
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
   * Returns a customer's direct product line access record.
   *
   * This endpoint requires the permission: `relevant_products:read`.
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
   * Replaces a customer's direct product line access with the provided set.
   *
   * This endpoint requires the permission: `relevant_products:update`.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.update(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *     { product_line_ids: ['pl_01996357326a0d3f7b129542ea'] },
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
   * This endpoint requires the permission: `relevant_products:read`.
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
   * Removes a customer's direct product line access record.
   *
   * Access the customer inherits through its type group or pricing groups is not
   * affected.
   *
   * This endpoint requires the permission: `relevant_products:delete`.
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
   * ID of the customer to grant product line access to.
   */
  customer_id: string;

  /**
   * IDs of the product lines the customer can access.
   */
  product_line_ids: Array<string>;
}

/**
 * The product lines directly accessible to a customer.
 *
 * Determines which product lines (and their products) the customer can browse and
 * order. Direct access granted here combines with any access the customer inherits
 * through its type group or pricing groups.
 */
export interface CustomerProductLineAccess {
  /**
   * When this record was created.
   */
  created_at: string;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
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
   * The full set of product line IDs the customer can access.
   *
   * Replaces all existing direct product line access. Omitting this field or sending
   * an empty list removes all direct access.
   */
  product_line_ids?: Array<string>;
}

export interface CustomerDeleteResponse {}

export interface CustomerCreateParams {
  /**
   * ID of the customer to grant product line access to.
   */
  customer_id: string;

  /**
   * IDs of the product lines the customer can access.
   */
  product_line_ids: Array<string>;
}

export interface CustomerUpdateParams {
  /**
   * The full set of product line IDs the customer can access.
   *
   * Replaces all existing direct product line access. Omitting this field or sending
   * an empty list removes all direct access.
   */
  product_line_ids?: Array<string>;
}

export interface CustomerListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
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
