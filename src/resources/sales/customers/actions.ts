// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from '../../core/jobs';
import * as AnalyticsAPI from '../../core/analytics/analytics';
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
   *     customer_ids: ['ac_opnlh43ymyee'],
   *   });
   * ```
   */
  bulkDelete(body: ActionBulkDeleteParams, options?: RequestOptions): APIPromise<ActionBulkDeleteResponse> {
    return this._client.post('/v1/sales/customers/actions/bulk-delete', { body, ...options });
  }

  /**
   * Starts an export of every customer the filters select and returns the job that
   * tracks it.
   *
   * The file has one row per customer, newest first, with its defaults, default
   * addresses and contacts. An export matching more than 50,000 customers fails with
   * a request to narrow the filters.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const job = await client.sales.customers.actions.export({
   *   customer_group_ids: ['acgp_6p4z57e9alaf'],
   *   status_codes: ['normal'],
   * });
   * ```
   */
  export(
    params: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobsAPI.Job> {
    const { include, ...body } = params ?? {};
    return this._client.post('/v1/sales/customers/actions/export', { query: { include }, body, ...options });
  }

  /**
   * Merges one or more source customers into a target customer.
   *
   * Sales orders, invoices, shipments, deliveries, and other transaction records
   * from the source customers are reassigned to the target; price groups, product
   * line access, addresses, and users are consolidated without duplicates; child
   * accounts of the sources are re-parented to the target; the source customers are
   * then deleted.
   *
   * The target keeps its own name, number, default addresses, and default settings —
   * none of those are copied over from the sources, and the sources' notification
   * recipients are discarded rather than transferred.
   *
   * This endpoint requires the permissions: `customers:update` and
   * `customers:delete`.
   *
   * @example
   * ```ts
   * const customer = await client.sales.customers.actions.merge(
   *   'ac_opnlh43ymyee',
   *   { source_customer_ids: ['ac_opnlh43ymyee'] },
   * );
   * ```
   */
  merge(id: string, params: ActionMergeParams, options?: RequestOptions): APIPromise<AnalyticsAPI.Customer> {
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
 * Filters which customers land in the exported file: the customer list's filters,
 * which select the same customers here.
 */
export interface ExportCustomersRequest {
  /**
   * Filter by default carrier IDs.
   */
  carrier_ids?: Array<string>;

  /**
   * Filter to customers with any address in this city (exact match).
   *
   * When combined with `state` or `postal_code`, a single address must match all
   * provided values.
   */
  city?: string;

  /**
   * Filter by the commission policy set on the customer itself.
   *
   * Policies inherited from the customer's type group or price groups are not
   * considered here.
   */
  commission_status_codes?: Array<'commission_applied' | 'commission_exempt'>;

  /**
   * Filter by customer type group IDs (the account group of type `type_group`
   * returned in the customer's `type` field).
   */
  customer_group_ids?: Array<string>;

  /**
   * Filter to customers created at or before this timestamp (inclusive).
   */
  ends_at?: string;

  /**
   * Filter by the freight policy set on the customer itself.
   *
   * Policies inherited from the customer's type group or price groups are not
   * considered here.
   */
  freight_status_codes?: Array<'free_freight' | 'billed_freight'>;

  /**
   * Filter by whether the customer has child accounts.
   */
  parent_account_status?: 'parent' | 'non_parent';

  /**
   * Filter by default payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Filter to customers with any address in this postal code (exact match).
   */
  postal_code?: string;

  /**
   * Filter to customers that belong to any of these pricing groups.
   */
  pricing_group_ids?: Array<string>;

  /**
   * Free-text search matched against each customer's name, number, notes and email.
   */
  q?: string;

  /**
   * Filter to customers whose default sales rep is one of these account users.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Filter by default service level IDs.
   */
  service_level_ids?: Array<string>;

  /**
   * Filter by default shipping term IDs.
   */
  shipping_term_ids?: Array<string>;

  /**
   * Filter to customers created at or after this timestamp (inclusive).
   */
  starts_at?: string;

  /**
   * Filter to customers with any address in this state (exact match).
   */
  state?: string;

  /**
   * Filter by the customer's account standing.
   */
  status_codes?: Array<'normal' | 'preferred' | 'hold_shipment' | 'hold_all'>;
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

export interface ActionExportParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'created_by' | 'created_by.role'>;

  /**
   * Body param: Filter by default carrier IDs.
   */
  carrier_ids?: Array<string>;

  /**
   * Body param: Filter to customers with any address in this city (exact match).
   *
   * When combined with `state` or `postal_code`, a single address must match all
   * provided values.
   */
  city?: string;

  /**
   * Body param: Filter by the commission policy set on the customer itself.
   *
   * Policies inherited from the customer's type group or price groups are not
   * considered here.
   */
  commission_status_codes?: Array<'commission_applied' | 'commission_exempt'>;

  /**
   * Body param: Filter by customer type group IDs (the account group of type
   * `type_group` returned in the customer's `type` field).
   */
  customer_group_ids?: Array<string>;

  /**
   * Body param: Filter to customers created at or before this timestamp (inclusive).
   */
  ends_at?: string;

  /**
   * Body param: Filter by the freight policy set on the customer itself.
   *
   * Policies inherited from the customer's type group or price groups are not
   * considered here.
   */
  freight_status_codes?: Array<'free_freight' | 'billed_freight'>;

  /**
   * Body param: Filter by whether the customer has child accounts.
   */
  parent_account_status?: 'parent' | 'non_parent';

  /**
   * Body param: Filter by default payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Body param: Filter to customers with any address in this postal code (exact
   * match).
   */
  postal_code?: string;

  /**
   * Body param: Filter to customers that belong to any of these pricing groups.
   */
  pricing_group_ids?: Array<string>;

  /**
   * Body param: Free-text search matched against each customer's name, number, notes
   * and email.
   */
  q?: string;

  /**
   * Body param: Filter to customers whose default sales rep is one of these account
   * users.
   */
  sales_rep_ids?: Array<string>;

  /**
   * Body param: Filter by default service level IDs.
   */
  service_level_ids?: Array<string>;

  /**
   * Body param: Filter by default shipping term IDs.
   */
  shipping_term_ids?: Array<string>;

  /**
   * Body param: Filter to customers created at or after this timestamp (inclusive).
   */
  starts_at?: string;

  /**
   * Body param: Filter to customers with any address in this state (exact match).
   */
  state?: string;

  /**
   * Body param: Filter by the customer's account standing.
   */
  status_codes?: Array<'normal' | 'preferred' | 'hold_shipment' | 'hold_all'>;
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
    type ExportCustomersRequest as ExportCustomersRequest,
    type MergeCustomersRequest as MergeCustomersRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
    type ActionExportParams as ActionExportParams,
    type ActionMergeParams as ActionMergeParams,
  };
}
