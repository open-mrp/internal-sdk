// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvoicesAPI from '../finance/invoices';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as CustomersAPI from '../sales/customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage shipping cases within shipments.
 */
export class ShippingCases extends APIResource {
  /**
   * Returns a shipping case by ID.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.retrieve(
   *     'shcs_01207a101ea1475c687a39cf76',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ShippingCaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingCase> {
    return this._client.get(path`/v1/operations/shipping-cases/${id}`, { query, ...options });
  }

  /**
   * Partially updates a shipping case's tracking number and freight quantities.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.update(
   *     'shcs_01207a101ea1475c687a39cf76',
   *     { tracking_number: '1Z999AA10123456784' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ShippingCaseUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingCase> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/shipping-cases/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Permanently deletes a shipping case.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.delete(
   *     'shcs_01207a101ea1475c687a39cf76',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingCaseDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipping-cases/${id}`, options);
  }

  /**
   * Returns a presigned URL for the shipping case's label image.
   *
   * @example
   * ```ts
   * const shippingCaseLabelURL =
   *   await client.operations.shippingCases.retrieveLabel(
   *     'shcs_01207a101ea1475c687a39cf76',
   *   );
   * ```
   */
  retrieveLabel(id: string, options?: RequestOptions): APIPromise<ShippingCaseLabelURL> {
    return this._client.get(path`/v1/operations/shipping-cases/${id}/label`, options);
  }
}

/**
 * Physical shipping case within a shipment.
 */
export interface ShippingCase {
  /**
   * Shipping case ID.
   */
  id: string;

  /**
   * Carrier resource.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  freight_amount: AccountUsersAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  freight_weight: AccountUsersAPI.Quantity | null;

  /**
   * Human-readable case number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_case';

  /**
   * Full shipment resource.
   */
  shipment: InvoicesAPI.Shipment | null;

  /**
   * Shipped timestamp.
   */
  shipped_at: string | null;

  /**
   * Serial Shipping Container Code.
   */
  sscc: string | null;

  /**
   * Carrier tracking number.
   */
  tracking_number: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Shipping case label URL.
 */
export interface ShippingCaseLabelURL {
  /**
   * Resource type identifier.
   */
  object: 'shipping_case_label_url';

  /**
   * Presigned label URL, or null if no label exists.
   */
  url: string | null;
}

/**
 * Request to update a shipping case.
 */
export interface UpdateShippingCaseRequest {
  /**
   * Freight amount unit ID.
   */
  freight_amount_unit_id?: string;

  /**
   * Freight amount value.
   */
  freight_amount_value?: string;

  /**
   * Freight weight unit ID.
   */
  freight_weight_unit_id?: string;

  /**
   * Freight weight value.
   */
  freight_weight_value?: string;

  /**
   * Tracking number.
   */
  tracking_number?: string;
}

export interface ShippingCaseDeleteResponse {}

export interface ShippingCaseRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'carrier' | 'shipment' | 'freight_amount.unit' | 'freight_weight.unit'>;
}

export interface ShippingCaseUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'carrier' | 'shipment' | 'freight_amount.unit' | 'freight_weight.unit'>;

  /**
   * Body param: Freight amount unit ID.
   */
  freight_amount_unit_id?: string;

  /**
   * Body param: Freight amount value.
   */
  freight_amount_value?: string;

  /**
   * Body param: Freight weight unit ID.
   */
  freight_weight_unit_id?: string;

  /**
   * Body param: Freight weight value.
   */
  freight_weight_value?: string;

  /**
   * Body param: Tracking number.
   */
  tracking_number?: string;
}

export declare namespace ShippingCases {
  export {
    type ShippingCase as ShippingCase,
    type ShippingCaseLabelURL as ShippingCaseLabelURL,
    type UpdateShippingCaseRequest as UpdateShippingCaseRequest,
    type ShippingCaseDeleteResponse as ShippingCaseDeleteResponse,
    type ShippingCaseRetrieveParams as ShippingCaseRetrieveParams,
    type ShippingCaseUpdateParams as ShippingCaseUpdateParams,
  };
}
