// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../../core/actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * EDI action endpoints for pulling orders and resubmitting invoices.
 */
export class Actions extends APIResource {
  /**
   * Triggers the target account's EDI pull-orders operation.
   *
   * Returns a confirmation message.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.operations.edi.actions.pullOrders();
   * ```
   */
  pullOrders(options?: RequestOptions): APIPromise<ActionsAPI.MessageResource> {
    return this._client.put('/v1/operations/edi/actions/pull-orders', options);
  }

  /**
   * Triggers an EDI resubmission request for an invoice.
   *
   * Returns a confirmation message.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.operations.edi.actions.resubmitInvoice({
   *     invoice_id: 'iv_018b5949ada8abca36358bbea9',
   *   });
   * ```
   */
  resubmitInvoice(
    body: ActionResubmitInvoiceParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.MessageResource> {
    return this._client.post('/v1/operations/edi/actions/resubmit-invoice', { body, ...options });
  }
}

/**
 * Request to resubmit an invoice via EDI.
 */
export interface ResubmitEdiInvoiceRequest {
  /**
   * ID of the invoice to resubmit.
   */
  invoice_id: string;
}

export interface ActionResubmitInvoiceParams {
  /**
   * ID of the invoice to resubmit.
   */
  invoice_id: string;
}

export declare namespace Actions {
  export {
    type ResubmitEdiInvoiceRequest as ResubmitEdiInvoiceRequest,
    type ActionResubmitInvoiceParams as ActionResubmitInvoiceParams,
  };
}
