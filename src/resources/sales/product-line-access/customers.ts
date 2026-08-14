// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
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
   * The customer can then browse and order those product lines, on top of anything
   * it already reaches through its type group or pricing groups.
   *
   * Each customer can have at most one access record; creating one for a customer
   * that already has one returns a conflict error. Use Update Customer Product Line
   * Access to change an existing record.
   *
   * This endpoint requires the permission: `relevant_products:create`.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.create({
   *     customer_id: 'ac_opnlh43ymyee',
   *     product_line_ids: ['pdln_k9bnlgvxhxjh'],
   *   });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerProductLineAccess> {
    return this._client.post('/v1/sales/product-line-access/customers', { body, ...options });
  }

  /**
   * Returns a customer's direct product line access record.
   *
   * A customer with no direct grants has no record and returns a not-found error;
   * product lines the customer reaches through its type group or pricing groups are
   * not reported here.
   *
   * This endpoint requires the permission: `relevant_products:read`.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.retrieve(
   *     'ac_opnlh43ymyee',
   *   );
   * ```
   */
  retrieve(customerID: string, options?: RequestOptions): APIPromise<CustomerProductLineAccess> {
    return this._client.get(path`/v1/sales/product-line-access/customers/${customerID}`, options);
  }

  /**
   * Replaces a customer's direct product line access with the provided set.
   *
   * This is a full replacement, not a merge: product lines omitted from the request
   * lose access. The customer must already have a direct access record; create one
   * with Create Customer Product Line Access first.
   *
   * This endpoint requires the permission: `relevant_products:update`.
   *
   * @example
   * ```ts
   * const customerProductLineAccess =
   *   await client.sales.productLineAccess.customers.update(
   *     'ac_opnlh43ymyee',
   *     { product_line_ids: ['pdln_k9bnlgvxhxjh'] },
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
   * Returns a paginated list of direct product line access records, one per
   * customer.
   *
   * Only customers granted at least one product line directly appear; access
   * inherited through a type group or pricing group is not listed here. The `q`
   * search term is matched against the customer name and customer number.
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
   * affected. Deleting a record that was already deleted returns an already-deleted
   * error rather than succeeding silently.
   *
   * This endpoint requires the permission: `relevant_products:delete`.
   *
   * @example
   * ```ts
   * const customer =
   *   await client.sales.productLineAccess.customers.delete(
   *     'ac_opnlh43ymyee',
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
   *
   * Must contain at least one ID, and each one must be a product line your account
   * owns; the shared system product lines cannot be granted.
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
   * When the relationship with this customer was created.
   */
  created_at: string;

  /**
   * A business you sell to, with its contact details, default fulfillment settings,
   * and order policies.
   */
  customer: AnalyticsAPI.Customer | null;

  /**
   * Resource type identifier.
   */
  object: 'customer_product_line_access';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  product_lines: AccountGroupsAPI.ListProductLine | null;

  /**
   * When the relationship with this customer was last updated.
   */
  updated_at: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to update product line access for a customer.
 */
export interface UpdateCustomerProductLineAccessRequest {
  /**
   * The full set of product line IDs the customer has direct access to.
   *
   * Replaces the customer's existing direct grants, and each ID must be a product
   * line your account owns.
   *
   * The list has to name at least one product line: omitting the field or sending an
   * empty list leaves the customer with no record at all, which the request rejects
   * as not found without changing anything. Use Delete Customer Product Line Access
   * to revoke direct access entirely.
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
   *
   * Must contain at least one ID, and each one must be a product line your account
   * owns; the shared system product lines cannot be granted.
   */
  product_line_ids: Array<string>;
}

export interface CustomerUpdateParams {
  /**
   * The full set of product line IDs the customer has direct access to.
   *
   * Replaces the customer's existing direct grants, and each ID must be a product
   * line your account owns.
   *
   * The list has to name at least one product line: omitting the field or sending an
   * empty list leaves the customer with no record at all, which the request rejects
   * as not found without changing anything. Use Delete Customer Product Line Access
   * to revoke direct access entirely.
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
