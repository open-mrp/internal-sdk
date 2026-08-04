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
   * This endpoint requires the permission: `shipments:read`.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.retrieve(
   *     'shcs_fgqy1eu256af',
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
   * Fields left out of the request keep their current values. The freight cost and
   * weight recorded here are the case's own actual charge and weight; they do not
   * change the freight billed on the sales order.
   *
   * This endpoint requires the permission: `shipments:update`.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.update(
   *     'shcs_fgqy1eu256af',
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
   * Only the case is removed; its shipment, the shipment's lines, and the shipment's
   * other cases are left untouched. Deleting a case that has already been deleted
   * returns an error rather than succeeding again.
   *
   * This endpoint requires the permission: `shipments:delete`.
   *
   * @example
   * ```ts
   * const shippingCase =
   *   await client.operations.shippingCases.delete(
   *     'shcs_fgqy1eu256af',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingCaseDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipping-cases/${id}`, options);
  }

  /**
   * Returns a temporary download link for the shipping case's label image.
   *
   * The link expires one hour after it is issued, so fetch it when the label is
   * about to be printed rather than storing it. No link is returned until a label
   * has been generated for the case.
   *
   * This endpoint requires the permission: `shipments:read`.
   *
   * @example
   * ```ts
   * const shippingCaseLabelURL =
   *   await client.operations.shippingCases.retrieveLabel(
   *     'shcs_fgqy1eu256af',
   *   );
   * ```
   */
  retrieveLabel(id: string, options?: RequestOptions): APIPromise<ShippingCaseLabelURL> {
    return this._client.get(path`/v1/operations/shipping-cases/${id}/label`, options);
  }
}

/**
 * A physical case packed within a shipment.
 *
 * Cases are created when a pick is packed, one for each case counted on the pack,
 * and each carries its own SSCC, carrier tracking number, shipping label, freight
 * cost and shipping weight.
 */
export interface ShippingCase {
  /**
   * Shipping case ID.
   */
  id: string;

  /**
   * A shipping carrier configured for fulfilling orders.
   *
   * Carriers with a Shippo-supported `code` (`fedex`, `ups`, `usps`) are connected
   * through Shippo for live rating and label purchase; other carriers represent
   * self-managed shipping methods such as will call or local delivery.
   */
  carrier: CustomersAPI.Carrier | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  freight_amount: AccountUsersAPI.Quantity | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  freight_weight: AccountUsersAPI.Quantity | null;

  /**
   * Human-readable case number.
   *
   * Built from the shipment's number and the case's position within that shipment
   * when the case is created.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_case';

  /**
   * A shipment of packed goods fulfilling a sales order, from packing through
   * dispatch.
   */
  shipment: InvoicesAPI.Shipment | null;

  /**
   * When the case shipped.
   *
   * Stamped on every case in the shipment when the shipment ships, and cleared if
   * the shipment is voided.
   */
  shipped_at: string | null;

  /**
   * Serial Shipping Container Code (SSCC) identifying this case.
   *
   * An 18-digit code assigned automatically when the shipment ships, if the case
   * does not already have one. It is kept when the shipment is voided, so a case
   * that ships again keeps the same code.
   */
  sscc: string | null;

  /**
   * Carrier tracking number.
   *
   * Recorded when a label is purchased for the case, can be overwritten manually,
   * and is cleared if the shipment is voided.
   */
  tracking_number: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A temporary download link for a shipping case's label image.
 */
export interface ShippingCaseLabelURL {
  /**
   * Resource type identifier.
   */
  object: 'shipping_case_label_url';

  /**
   * Presigned link to the shipping case's label image.
   *
   * The link expires one hour after it is issued, and is absent until a label has
   * been generated for the case.
   */
  url: string | null;
}

/**
 * Request to update a shipping case.
 */
export interface UpdateShippingCaseRequest {
  /**
   * ID of the currency unit the case's freight cost is expressed in.
   *
   * Changing the unit relabels the stored freight cost; the number itself is never
   * converted, so send `freight_amount_value` alongside it when the amount should
   * change too.
   */
  freight_amount_unit_id?: string;

  /**
   * New value for the case's freight cost, as a decimal string.
   */
  freight_amount_value?: string;

  /**
   * ID of the unit the case's freight weight is expressed in.
   *
   * Changing the unit relabels the stored weight; the number itself is never
   * converted, so send `freight_weight_value` alongside it when the weight should
   * change too.
   */
  freight_weight_unit_id?: string;

  /**
   * New value for the case's freight weight, as a decimal string.
   */
  freight_weight_value?: string;

  /**
   * Carrier tracking number to set on the case, replacing any number already
   * recorded.
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
   * Body param: ID of the currency unit the case's freight cost is expressed in.
   *
   * Changing the unit relabels the stored freight cost; the number itself is never
   * converted, so send `freight_amount_value` alongside it when the amount should
   * change too.
   */
  freight_amount_unit_id?: string;

  /**
   * Body param: New value for the case's freight cost, as a decimal string.
   */
  freight_amount_value?: string;

  /**
   * Body param: ID of the unit the case's freight weight is expressed in.
   *
   * Changing the unit relabels the stored weight; the number itself is never
   * converted, so send `freight_weight_value` alongside it when the weight should
   * change too.
   */
  freight_weight_unit_id?: string;

  /**
   * Body param: New value for the case's freight weight, as a decimal string.
   */
  freight_weight_value?: string;

  /**
   * Body param: Carrier tracking number to set on the case, replacing any number
   * already recorded.
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
