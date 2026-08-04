// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Utility action endpoints for checking duplicates and emailing records.
 */
export class Actions extends APIResource {
  /**
   * Checks whether a record number is already in use for the given type (invoice
   * number, sales order number, or customer PO number).
   *
   * Use this to warn a user before they submit a number that would collide with an
   * existing record. The check is read-only: it reports the state at the moment of
   * the call and does not reserve the number, so a number reported as free can still
   * be taken by the time you create the record.
   *
   * This endpoint requires the permissions: `invoices:read`, `sales_orders:read`,
   * `customers:read`, `suppliers:read`.
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
   * queued, so a `202` means the send was accepted, not that it reached the
   * recipients. If the record has no configured recipients the request still
   * succeeds and nothing is sent; in that case a sales order or purchase order is
   * also left unmarked, while an invoice is still marked as sent.
   *
   * This endpoint requires the permissions: `invoices:read`, `sales_orders:read`,
   * `purchase_orders:read`.
   *
   * @example
   * ```ts
   * const response = await client.core.actions.emailRecord({
   *   id: 'iv_m982ezb0fgp7',
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
   * Submits a demo request from a prospective customer for the Augno team to follow
   * up on.
   *
   * The request creates no account, user, or other resource, and there is no
   * endpoint to read it back. The response carries a confirmation message suitable
   * for display.
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
   * Submits an answer to an in-product feedback prompt for the Augno team to review.
   *
   * The submission creates no resource and cannot be read back through the API. The
   * response carries a confirmation message suitable for display.
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
   *
   * Surrounding whitespace is trimmed before the number is compared against existing
   * records.
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
 * The outcome of checking whether a record number is already in use.
 */
export interface CheckDuplicateResult {
  /**
   * Whether a record with the submitted number already exists.
   *
   * Invoice and sales order numbers are matched across the whole account; a customer
   * PO number is matched only against the orders of the customer given in the
   * request, so the same PO number may exist on another customer's orders without
   * being reported here.
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
   * - `invoice`: emails the invoice to the contacts on its sales order that are set
   *   to receive invoice emails.
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
   * Plain-language summary of what the operation did.
   *
   * This text is meant for display only. Its wording can change at any time, so do
   * not parse it or branch on its contents.
   */
  message: string;

  /**
   * Resource type identifier.
   */
  object: 'message';
}

/**
 * Request to be contacted for a product demo.
 */
export interface RequestDemoRequest {
  /**
   * Name of the company the requester represents.
   */
  company: string;

  /**
   * Email address to reach the requester at.
   */
  email: string;

  /**
   * Full name of the person requesting the demo.
   */
  name: string;

  /**
   * Free-form note from the requester about what they would like to see.
   */
  message?: string;

  /**
   * Phone number to reach the requester at.
   */
  phone_number?: string;
}

/**
 * Request to submit user feedback.
 */
export interface SubmitFeedbackRequest {
  /**
   * The user's response to the question.
   */
  answer: string;

  /**
   * The question the user was prompted with.
   */
  question: string;

  /**
   * URL of the page the user was on when they answered, recorded so the feedback can
   * be read in context.
   */
  page_url?: string;
}

export interface ActionEmailRecordResponse {}

export interface ActionCheckDuplicatesParams {
  /**
   * The record number to check for an existing match.
   *
   * Surrounding whitespace is trimmed before the number is compared against existing
   * records.
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
   * - `invoice`: emails the invoice to the contacts on its sales order that are set
   *   to receive invoice emails.
   * - `sales_order`: sends an order acknowledgement to the order's acknowledgement
   *   recipients.
   * - `purchase_order`: sends the purchase order submission to the order's
   *   submission recipients.
   */
  type: string;
}

export interface ActionRequestDemoParams {
  /**
   * Name of the company the requester represents.
   */
  company: string;

  /**
   * Email address to reach the requester at.
   */
  email: string;

  /**
   * Full name of the person requesting the demo.
   */
  name: string;

  /**
   * Free-form note from the requester about what they would like to see.
   */
  message?: string;

  /**
   * Phone number to reach the requester at.
   */
  phone_number?: string;
}

export interface ActionSubmitFeedbackParams {
  /**
   * The user's response to the question.
   */
  answer: string;

  /**
   * The question the user was prompted with.
   */
  question: string;

  /**
   * URL of the page the user was on when they answered, recorded so the feedback can
   * be read in context.
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
