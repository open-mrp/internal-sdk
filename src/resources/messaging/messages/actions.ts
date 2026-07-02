// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Send, list, edit, and delete chat messages.
 */
export class Actions extends APIResource {
  /**
   * Approves a customer-reply draft and sends it to the customer, promoting the
   * draft to a sent customer-visible message in place.
   *
   * Idempotent on `client_message_id`.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.messages.actions.approveSend(
   *     'mg_01h9z8q1w2e3r4t5y6u7i8mg',
   *     { client_message_id: 'client_msg_approve_7b1c' },
   *   );
   * ```
   */
  approveSend(
    id: string,
    params: ActionApproveSendParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Message> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/messages/${id}/actions/approve-send`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Cancels a scheduled message the caller created (status becomes `canceled`).
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.messages.actions.cancel(
   *     'mg_01h9z8q1w2e3r4t5y6u7i8mg',
   *   );
   * ```
   */
  cancel(
    id: string,
    params: ActionCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Message> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/messages/${id}/actions/cancel`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Discards an open customer-reply draft without sending it (status becomes
   * `rejected`).
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.messages.actions.reject(
   *     'mg_01h9z8q1w2e3r4t5y6u7i8mg',
   *   );
   * ```
   */
  reject(
    id: string,
    params: ActionRejectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Message> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/messages/${id}/actions/reject`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * Request to approve a customer-reply draft and send it to the customer.
 */
export interface ApproveSendDraftRequest {
  /**
   * Client-supplied dedupe key for the resulting customer-visible message.
   */
  client_message_id: string;
}

export interface ActionApproveSendParams {
  /**
   * Body param: Client-supplied dedupe key for the resulting customer-visible
   * message.
   */
  client_message_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'sender'
    | 'author'
    | 'resource'
    | 'attachments'
    | 'attachments.resource'
    | 'conversation'
    | 'conversation.participants'
    | 'conversation.last_message'
    | 'reply_to'
    | 'reply_to.sender'
    | 'reply_to.author'
    | 'reply_to.attachments'
    | 'agent_run'
  >;
}

export interface ActionCancelParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'sender'
    | 'author'
    | 'resource'
    | 'attachments'
    | 'attachments.resource'
    | 'conversation'
    | 'conversation.participants'
    | 'conversation.last_message'
    | 'reply_to'
    | 'reply_to.sender'
    | 'reply_to.author'
    | 'reply_to.attachments'
    | 'agent_run'
  >;
}

export interface ActionRejectParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'sender'
    | 'author'
    | 'resource'
    | 'attachments'
    | 'attachments.resource'
    | 'conversation'
    | 'conversation.participants'
    | 'conversation.last_message'
    | 'reply_to'
    | 'reply_to.sender'
    | 'reply_to.author'
    | 'reply_to.attachments'
    | 'agent_run'
  >;
}

export declare namespace Actions {
  export {
    type ApproveSendDraftRequest as ApproveSendDraftRequest,
    type ActionApproveSendParams as ActionApproveSendParams,
    type ActionCancelParams as ActionCancelParams,
    type ActionRejectParams as ActionRejectParams,
  };
}
