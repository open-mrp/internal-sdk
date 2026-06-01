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
   * Sends a receivables report for a specific customer account to the provided email
   * addresses.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.accounts.actions.emailReceivables(
   *     'ac_01148680966698341a9c0976db',
   *     { recipient_emails: ['jdoe@augno.com'] },
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
 * Request to email receivable entries for a specific customer.
 */
export interface EmailReceivablesForCustomerRequest {
  /**
   * Email addresses to send the receivables report to.
   */
  recipient_emails: Array<string>;
}

export interface ActionEmailReceivablesResponse {}

export interface ActionEmailReceivablesParams {
  /**
   * Email addresses to send the receivables report to.
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
