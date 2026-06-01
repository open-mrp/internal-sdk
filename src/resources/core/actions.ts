// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiActionsAPI from '../operations/edi/actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Utility action endpoints for checking duplicates and emailing records.
 */
export class Actions extends APIResource {
  /**
   * Checks whether a record number already exists for the given type (invoice
   * number, order number, or customer PO number).
   *
   * @example
   * ```ts
   * const checkDuplicateResult =
   *   await client.core.actions.checkDuplicates({
   *     customer_id: null,
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
   * Emails a record (invoice, sales order, or purchase order) to the configured
   * recipients as a PDF attachment.
   *
   * @example
   * ```ts
   * const response = await client.core.actions.emailRecord({
   *   id: 'inv_abc123',
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
   *     message: null,
   *     name: 'Jane Smith',
   *     phone_number: null,
   *   });
   * ```
   */
  requestDemo(
    body: ActionRequestDemoParams,
    options?: RequestOptions,
  ): APIPromise<EdiActionsAPI.MessageResource> {
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
   *     page_url: null,
   *     question: 'How would you rate this feature?',
   *   });
   * ```
   */
  submitFeedback(
    body: ActionSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<EdiActionsAPI.MessageResource> {
    return this._client.post('/v1/core/actions/submit-feedback', { body, ...options });
  }
}

/**
 * Request to check for a duplicate record number.
 */
export interface CheckDuplicateRequest {
  /**
   * Customer ID, required for customer_po_number checks.
   */
  customer_id: string | null;

  /**
   * Record number to check.
   */
  record_number: string;

  /**
   * Duplicate check type: invoice_number, order_number, or customer_po_number.
   */
  type: string;
}

/**
 * Result of a duplicate check.
 */
export interface CheckDuplicateResult {
  /**
   * Whether the record number is a duplicate.
   */
  is_duplicate: boolean;

  /**
   * Human-readable message if the record is a duplicate.
   */
  message: string | null;
}

/**
 * Request to email a record to its configured recipients.
 */
export interface EmailRecordRequest {
  /**
   * Record ID.
   */
  id: string;

  /**
   * Record type: invoice, sales_order, or purchase_order.
   */
  type: string;
}

/**
 * Message resource.
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
   * Message from the requester.
   */
  message: string | null;

  /**
   * Name of the requester.
   */
  name: string;

  /**
   * Phone number.
   */
  phone_number: string | null;
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
   * URL of the page where feedback was submitted.
   */
  page_url: string | null;

  /**
   * Question presented to the user.
   */
  question: string;
}

export interface ActionEmailRecordResponse {}

export interface ActionCheckDuplicatesParams {
  /**
   * Customer ID, required for customer_po_number checks.
   */
  customer_id: string | null;

  /**
   * Record number to check.
   */
  record_number: string;

  /**
   * Duplicate check type: invoice_number, order_number, or customer_po_number.
   */
  type: string;
}

export interface ActionEmailRecordParams {
  /**
   * Record ID.
   */
  id: string;

  /**
   * Record type: invoice, sales_order, or purchase_order.
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
   * Message from the requester.
   */
  message: string | null;

  /**
   * Name of the requester.
   */
  name: string;

  /**
   * Phone number.
   */
  phone_number: string | null;
}

export interface ActionSubmitFeedbackParams {
  /**
   * Answer to the question.
   */
  answer: string;

  /**
   * URL of the page where feedback was submitted.
   */
  page_url: string | null;

  /**
   * Question presented to the user.
   */
  question: string;
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
