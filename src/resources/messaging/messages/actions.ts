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
   * Approves a reply draft and sends it to the customer.
   *
   * The draft becomes the sent message rather than spawning a copy: it takes its
   * place in the case timeline, and the customer sees it as coming from "Customer
   * Service". A draft on the email channel goes out as a reply on the case's email
   * thread; otherwise it appears in the customer's conversation. Sending also moves
   * the case to waiting on the customer.
   *
   * Only the first approval of a draft sends it — approving one that is no longer
   * open fails, so a concurrent double-approve cannot reach the customer twice.
   * Customer accounts cannot approve drafts.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.messages.actions.approveSend(
   *     'mg_fdny8633ebgw',
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
   * Cancels a message that was scheduled for a future send, so it is never
   * delivered.
   *
   * You can only cancel a message you scheduled yourself, and only while it is still
   * waiting to go out — once it has been delivered or has otherwise left the
   * scheduled state, the request fails. The canceled message is kept as a record and
   * never appears in the conversation.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.messages.actions.cancel(
   *     'mg_fdny8633ebgw',
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
   * Discards a reply draft without sending it to the customer.
   *
   * The draft is kept as a rejected record for history and can no longer be edited
   * or approved. Because the customer is still owed an answer, the case moves back
   * to waiting on your team.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.messages.actions.reject(
   *     'mg_fdny8633ebgw',
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
   * A unique client-generated key for this approval, such as a UUID.
   */
  client_message_id: string;
}

export interface ActionApproveSendParams {
  /**
   * Body param: A unique client-generated key for this approval, such as a UUID.
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
