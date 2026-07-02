// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import * as ActionsAPI from './actions';
import {
  ActionApproveSendParams,
  ActionCancelParams,
  ActionRejectParams,
  Actions,
  ApproveSendDraftRequest,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Send, list, edit, and delete chat messages.
 */
export class Messages extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Edits a still-open customer-reply draft.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const message = await client.messaging.messages.update(
   *   'mg_01h9z8q1w2e3r4t5y6u7i8mg',
   *   {
   *     body: 'Hi Joe — good news, your order ships tomorrow.',
   *     subject: 'Re: Order #1042',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: MessageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Message> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/messaging/messages/${id}`, { query: { include }, body, ...options });
  }
}

/**
 * Request to edit a still-open customer-reply draft message.
 */
export interface UpdateDraftRequest {
  /**
   * The revised reply body.
   */
  body: string;

  /**
   * The revised email subject, for the email channel.
   */
  subject?: string;
}

export interface MessageUpdateParams {
  /**
   * Body param: The revised reply body.
   */
  body: string;

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

  /**
   * Body param: The revised email subject, for the email channel.
   */
  subject?: string;
}

Messages.Actions = Actions;

export declare namespace Messages {
  export { type UpdateDraftRequest as UpdateDraftRequest, type MessageUpdateParams as MessageUpdateParams };

  export {
    Actions as Actions,
    type ApproveSendDraftRequest as ApproveSendDraftRequest,
    type ActionApproveSendParams as ActionApproveSendParams,
    type ActionCancelParams as ActionCancelParams,
    type ActionRejectParams as ActionRejectParams,
  };
}
