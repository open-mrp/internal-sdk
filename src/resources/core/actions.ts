// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Utility action endpoints for checking duplicates and emailing records.
 */
export class Actions extends APIResource {
  /**
   * Checks whether a record number already exists on the account for the given type
   * (invoice number, sales order number, or customer PO number).
   *
   * @example
   * ```ts
   * const checkDuplicateResult =
   *   await client.core.actions.checkDuplicates({
   *     record_number: 'INV-001',
   *     type: 'invoice_number',
   *   });
   * ```
   */
  checkDuplicates(
    body: ActionCheckDuplicatesParams,
    options?: RequestOptions,
  ): APIPromise<CheckDuplicateResult> {
    return this._client.put('/v1/core/actions/check-duplicates', { body, ...options });
  }

  /**
   * Emails a record (invoice, sales order, or purchase order) to its configured
   * recipients and marks the record as sent.
   *
   * Delivery is asynchronous: the endpoint returns `202 Accepted` once the email is
   * queued. If the record has no configured recipients, the request succeeds without
   * sending an email.
   *
   * @example
   * ```ts
   * const response = await client.core.actions.emailRecord({
   *   id: 'iv_018b5949ada8abca36358bbea9',
   *   type: 'invoice',
   * });
   * ```
   */
  emailRecord(
    body: ActionEmailRecordParams,
    options?: RequestOptions,
  ): APIPromise<ActionEmailRecordResponse> {
    return this._client.post('/v1/core/actions/email-record', { body, ...options });
  }

  /**
   * Submits a demo request from a prospective customer.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.core.actions.requestDemo({
   *     company: 'Acme Corp',
   *     email: 'jane@example.com',
   *     name: 'Jane Smith',
   *   });
   * ```
   */
  requestDemo(body: ActionRequestDemoParams, options?: RequestOptions): APIPromise<MessageResource> {
    return this._client.post('/v1/core/actions/request-demo', { body, ...options });
  }

  /**
   * Submits user feedback for a given question and page.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.core.actions.submitFeedback({
   *     answer:
   *       'Very useful, but could use better documentation.',
   *     question: 'How would you rate this feature?',
   *   });
   * ```
   */
  submitFeedback(body: ActionSubmitFeedbackParams, options?: RequestOptions): APIPromise<MessageResource> {
    return this._client.post('/v1/core/actions/submit-feedback', { body, ...options });
  }
}

/**
 * Request to check for a duplicate record number.
 */
export interface CheckDuplicateRequest {
  /**
   * The record number to check for an existing match.
   */
  record_number: string;

  /**
   * The kind of record number to check.
   *
   * - `invoice_number`: checks invoice numbers.
   * - `order_number`: checks sales order numbers.
   * - `customer_po_number`: checks customer PO numbers on sales orders; requires
   *   `customer_id`.
   */
  type: string;

  /**
   * ID of the customer to scope the check to.
   *
   * Required when `type` is `customer_po_number`; ignored for other types.
   */
  customer_id?: string;
}

/**
 * Result of a duplicate check.
 */
export interface CheckDuplicateResult {
  /**
   * Whether a record with the given number already exists on the account.
   */
  is_duplicate: boolean;

  /**
   * Human-readable message describing the duplicate.
   *
   * Populated only when `is_duplicate` is `true`; names the type and value that
   * already exists.
   */
  message: string | null;

  /**
   * Resource type identifier.
   */
  object: 'check_duplicate_result';
}

/**
 * Request to email a record to its configured recipients.
 */
export interface EmailRecordRequest {
  /**
   * ID of the record to email.
   */
  id: string;

  /**
   * The type of record to email.
   *
   * - `invoice`: emails the invoice to the invoice's email recipients.
   * - `sales_order`: sends an order acknowledgement to the order's acknowledgement
   *   recipients.
   * - `purchase_order`: sends the purchase order submission to the order's
   *   submission recipients.
   */
  type: string;
}

/**
 * A human-readable confirmation returned by operations that do not produce a
 * resource.
 */
export interface MessageResource {
  /**
   * Human-readable message.
   */
  message: string;

  /**
   * Resource type identifier.
   */
  object: 'message';
}

/**
 * Request to submit a demo request.
 */
export interface RequestDemoRequest {
  /**
   * Company name.
   */
  company: string;

  /**
   * Email address of the requester.
   */
  email: string;

  /**
   * Name of the requester.
   */
  name: string;

  /**
   * Message from the requester.
   */
  message?: string;

  /**
   * Phone number.
   */
  phone_number?: string;
}

/**
 * Request to submit user feedback.
 */
export interface SubmitFeedbackRequest {
  /**
   * Answer to the question.
   */
  answer: string;

  /**
   * Question presented to the user.
   */
  question: string;

  /**
   * URL of the page where feedback was submitted.
   */
  page_url?: string;
}

export interface ActionEmailRecordResponse {}

export interface ActionCheckDuplicatesParams {
  /**
   * The record number to check for an existing match.
   */
  record_number: string;

  /**
   * The kind of record number to check.
   *
   * - `invoice_number`: checks invoice numbers.
   * - `order_number`: checks sales order numbers.
   * - `customer_po_number`: checks customer PO numbers on sales orders; requires
   *   `customer_id`.
   */
  type: string;

  /**
   * ID of the customer to scope the check to.
   *
   * Required when `type` is `customer_po_number`; ignored for other types.
   */
  customer_id?: string;
}

export interface ActionEmailRecordParams {
  /**
   * ID of the record to email.
   */
  id: string;

  /**
   * The type of record to email.
   *
   * - `invoice`: emails the invoice to the invoice's email recipients.
   * - `sales_order`: sends an order acknowledgement to the order's acknowledgement
   *   recipients.
   * - `purchase_order`: sends the purchase order submission to the order's
   *   submission recipients.
   */
  type: string;
}

export interface ActionRequestDemoParams {
  /**
   * Company name.
   */
  company: string;

  /**
   * Email address of the requester.
   */
  email: string;

  /**
   * Name of the requester.
   */
  name: string;

  /**
   * Message from the requester.
   */
  message?: string;

  /**
   * Phone number.
   */
  phone_number?: string;
}

export interface ActionSubmitFeedbackParams {
  /**
   * Answer to the question.
   */
  answer: string;

  /**
   * Question presented to the user.
   */
  question: string;

  /**
   * URL of the page where feedback was submitted.
   */
  page_url?: string;
}

export declare namespace Actions {
  export {
    type CheckDuplicateRequest as CheckDuplicateRequest,
    type CheckDuplicateResult as CheckDuplicateResult,
    type EmailRecordRequest as EmailRecordRequest,
    type MessageResource as MessageResource,
    type RequestDemoRequest as RequestDemoRequest,
    type SubmitFeedbackRequest as SubmitFeedbackRequest,
    type ActionEmailRecordResponse as ActionEmailRecordResponse,
    type ActionCheckDuplicatesParams as ActionCheckDuplicatesParams,
    type ActionEmailRecordParams as ActionEmailRecordParams,
    type ActionRequestDemoParams as ActionRequestDemoParams,
    type ActionSubmitFeedbackParams as ActionSubmitFeedbackParams,
  };
}
