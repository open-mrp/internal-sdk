// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage customer accounts.
 */
export class Actions extends APIResource {
  /**
   * Deletes multiple customers in a single atomic operation.
   *
   * Fails with a conflict error if any sales orders still reference any of the
   * customers; if any customer cannot be deleted, none are.
   *
   * This endpoint requires the permission: `customers:delete`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.customers.actions.bulkDelete({
   *     customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/sales/customers/actions/bulk-delete', { body, ...options });
  }

  /**
   * Merges one or more source customers into a target customer.
   *
   * Sales orders, invoices, shipments, deliveries, and other transaction records
   * from the source customers are reassigned to the target; price groups, product
   * line access, addresses, and users are consolidated without duplicates; the
   * source customers are then deleted.
   *
   * This endpoint requires the permissions: `customers:update`, `customers:delete`.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.actions.merge(
   *   'ac_0170df1ac58e4d24c66fc89f5f',
   *   {
   *     source_customer_ids: ['ac_0170df1ac58e4d24c66fc89f5f'],
   *   },
   * );
   * ```
   */
  merge(id: string, params: ActionMergeParams, options?: RequestOptions): APIPromise<CustomersAPI.Customer> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/sales/customers/${id}/actions/merge`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * Request to delete multiple customers.
 */
export interface BulkDeleteCustomersRequest {
  /**
   * Customer IDs to delete.
   */
  customer_ids: Array<string>;
}

/**
 * Request to merge source customers into a target customer.
 */
export interface MergeCustomersRequest {
  /**
   * IDs of the source customers to merge into the target.
   *
   * Sources are deleted after the merge. The list must not contain duplicates or the
   * target customer's ID.
   */
  source_customer_ids: Array<string>;
}

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Customer IDs to delete.
   */
  customer_ids: Array<string>;
}

export interface ActionMergeParams {
  /**
   * Body param: IDs of the source customers to merge into the target.
   *
   * Sources are deleted after the merge. The list must not contain duplicates or the
   * target customer's ID.
   */
  source_customer_ids: Array<string>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'bill_to_address'
    | 'ship_to_address'
    | 'type'
    | 'parent_account'
    | 'freight_preferences.carrier'
    | 'freight_preferences.carrier.service_levels'
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.sales_rep.user'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
    | 'credit_limit.unit'
  >;
}

export declare namespace Actions {
  export {
    type BulkDeleteCustomersRequest as BulkDeleteCustomersRequest,
    type MergeCustomersRequest as MergeCustomersRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionMergeParams as ActionMergeParams,
  };
}
