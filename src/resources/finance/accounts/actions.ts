// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, export, and email receivable entries.
 */
export class Actions extends APIResource {
  /**
   * Emails a statement of account for a specific customer to the provided
   * recipients.
   *
   * The email carries an Excel attachment listing the customer's outstanding
   * receivables and its open credits, which are transactions such as payments and
   * credit memos whose funds have been received and that still have an unapplied
   * balance; each credit is aged from the day its funds arrived. The statement
   * always reflects current balances; there is no cutoff date. Delivery is
   * asynchronous: the endpoint returns `202 Accepted` once the email is queued.
   *
   * Returns `404` when the account is not one of your customers.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.accounts.actions.emailReceivables(
   *     'ac_ykxoradjoeb3',
   *     { recipient_emails: ['jdoe@openmrp.ai'] },
   *   );
   * ```
   */
  emailReceivables(
    accountID: string,
    body: ActionEmailReceivablesParams,
    options?: RequestOptions,
  ): APIPromise<ActionEmailReceivablesResponse> {
    return this._client.post(path`/v1/finance/accounts/${accountID}/actions/email-receivables`, {
      body,
      ...options,
    });
  }
}

/**
 * Request to email a statement of account for a specific customer.
 */
export interface EmailReceivablesForCustomerRequest {
  /**
   * Email addresses to send the statement of account to.
   *
   * The statement goes only to these addresses; the customer's own notification
   * contacts are not added.
   */
  recipient_emails: Array<string>;
}

export interface ActionEmailReceivablesResponse {}

export interface ActionEmailReceivablesParams {
  /**
   * Email addresses to send the statement of account to.
   *
   * The statement goes only to these addresses; the customer's own notification
   * contacts are not added.
   */
  recipient_emails: Array<string>;
}

export declare namespace Actions {
  export {
    type EmailReceivablesForCustomerRequest as EmailReceivablesForCustomerRequest,
    type ActionEmailReceivablesResponse as ActionEmailReceivablesResponse,
    type ActionEmailReceivablesParams as ActionEmailReceivablesParams,
  };
}
