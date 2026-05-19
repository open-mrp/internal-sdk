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
   * Deletes multiple customers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.customers.actions.bulkDelete({
   *     customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/sales/customers/actions/bulk-delete', { body, ...options });
  }

  /**
   * Merges one or more source customers into a target customer, reassigning all
   * associated records and deleting the source accounts.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.actions.merge(
   *   'id',
   *   {
   *     source_customer_ids: ['ac_01gf7a8200er3ar3pkfrb6kk29'],
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

export interface ActionBulkDeleteResponse {}

export interface ActionBulkDeleteParams {
  /**
   * Customer IDs to delete.
   */
  customer_ids: Array<string>;
}

export interface ActionMergeParams {
  /**
   * Body param: Source customer IDs.
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
    | 'freight_preferences.service_level'
    | 'defaults.payment_term'
    | 'defaults.shipping_term'
    | 'defaults.sales_rep'
    | 'defaults.priority'
    | 'contact_info'
    | 'freight_preferences'
    | 'defaults'
    | 'notification_preferences'
    | 'price_groups'
    | 'child_accounts'
    | 'credit_limit'
  >;
}

export declare namespace Actions {
  export {
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionMergeParams as ActionMergeParams,
  };
}
