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
   * Resubmits an invoice via EDI. Fails if the invoice does not exist or EDI is not
   * enabled on the account.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.operations.edi.actions.resubmitInvoice({
   *     invoice_id: 'inv_abc123',
   *   });
   * ```
   */
  resubmitInvoice(
    body: ActionResubmitInvoiceParams,
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.MessageResource> {
    return this._client.post('/v1/operations/edi/actions/resubmit-invoice', { body, ...options });
  }

  /**
   * Triggers an EDI pull-orders operation, pulling orders from FTP and processing
   * invoices via Stedi.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.operations.edi.actions.updatePullOrders();
   * ```
   */
  updatePullOrders(options?: RequestOptions): APIPromise<ActionsAPI.MessageResource> {
    return this._client.put('/v1/operations/edi/actions/pull-orders', options);
  }
}

export interface ActionResubmitInvoiceParams {
  /**
   * Invoice ID.
   */
  invoice_id: string;
}

export declare namespace Actions {
  export { type ActionResubmitInvoiceParams as ActionResubmitInvoiceParams };
}
