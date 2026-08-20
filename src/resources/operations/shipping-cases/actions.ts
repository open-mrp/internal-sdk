// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ShippingCasesAPI from './shipping-cases';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage shipping cases within shipments.
 */
export class Actions extends APIResource {
  /**
   * Rewrites the tracking number of a shipping case that has already shipped.
   * Administrators only: it is the deliberate override for a case dispatched under
   * the wrong number, and it rejects a case that has not shipped yet.
   *
   * This endpoint requires the permission: `shipments:update`.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.actions.adminUpdateTracking(
   *     'shcs_fgqy1eu256af',
   *     { tracking_number: '1Z999AA10123456784' },
   *   );
   * ```
   */
  adminUpdateTracking(
    id: string,
    params: ActionAdminUpdateTrackingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingCasesAPI.ShippingCase> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/operations/shipping-cases/${id}/actions/admin-update-tracking`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * ! separate endpoint due to SDK type resttrictions Request to correct a shipped
 * shipping case's tracking number.
 */
export interface AdminUpdateShippingCaseTrackingRequest {
  /**
   * Carrier tracking number the case actually travelled under, replacing any number
   * already recorded.
   */
  tracking_number?: string;
}

export interface ActionAdminUpdateTrackingParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'carrier' | 'shipment' | 'freight_amount.unit' | 'freight_weight.unit'>;

  /**
   * Body param: Carrier tracking number the case actually travelled under, replacing
   * any number already recorded.
   */
  tracking_number?: string;
}

export declare namespace Actions {
  export {
    type AdminUpdateShippingCaseTrackingRequest as AdminUpdateShippingCaseTrackingRequest,
    type ActionAdminUpdateTrackingParams as ActionAdminUpdateTrackingParams,
  };
}
