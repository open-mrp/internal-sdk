// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from '../../core/actions';
import * as MessagingAPI from '../messaging';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create conversations, send and read messages (1:1 direct messages).
 */
export class Actions extends APIResource {
  /**
   * Archives a conversation at the account level so it drops out of active lists for
   * everyone until it is unarchived.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.archive(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  archive(
    id: string,
    params: ActionArchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/archive`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Assigns an external customer-service case to an owner — a user or a team — or
   * clears the assignment.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.assign(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     {
   *       assignee_resource_id:
   *         'acus_01ea9983ddb41dacc44ecf997c',
   *       assignee_resource_type: 'account_user',
   *     },
   *   );
   * ```
   */
  assign(
    id: string,
    params: ActionAssignParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/assign`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Hides a conversation from the caller's own list without affecting other
   * participants.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.hide(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  hide(
    id: string,
    params: ActionHideParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/hide`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Removes the caller from a conversation, marking their membership as left.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.leave(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  leave(
    id: string,
    params: ActionLeaveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/leave`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Mutes a conversation for the calling actor.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.mute(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { muted_until: '2026-01-02T15:04:05Z' },
   *   );
   * ```
   */
  mute(
    id: string,
    params: ActionMuteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/mute`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Advances the caller's read cursor and returns the refreshed conversation (with
   * new unread count).
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.read(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { up_to_sequence: 42 },
   *   );
   * ```
   */
  read(
    id: string,
    params: ActionReadParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/read`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Permanently redacts the content of every message in a conversation (GDPR
   * right-to-erasure).
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.redact(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  redact(
    id: string,
    params: ActionRedactParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/redact`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Files an abuse report against a conversation (optionally a specific message) and
   * returns the conversation.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.report(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     {
   *       reason: 'spam',
   *       message_id: 'mg_01h9z8q1w2e3r4t5y6u7i8mg',
   *     },
   *   );
   * ```
   */
  report(
    id: string,
    params: ActionReportParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/report`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Places a conversation under legal hold or releases it.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.setLegalHold(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { legal_hold: 'held' },
   *   );
   * ```
   */
  setLegalHold(
    id: string,
    params: ActionSetLegalHoldParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/set-legal-hold`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Sets the triage lane of an external customer-service case.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.setStatus(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     { workflow_status: 'open' },
   *   );
   * ```
   */
  setStatus(
    id: string,
    params: ActionSetStatusParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/set-status`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Broadcasts an ephemeral "typing" indicator to a conversation's live subscribers.
   *
   * The signal is not persisted; clients reconcile from message history, never from
   * typing events.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const messageResource =
   *   await client.messaging.conversations.actions.typing(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  typing(id: string, options?: RequestOptions): APIPromise<ActionsAPI.MessageResource> {
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/typing`, options);
  }

  /**
   * Returns an archived conversation to the active state so it appears in active
   * lists again.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.unarchive(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  unarchive(
    id: string,
    params: ActionUnarchiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/unarchive`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Restores a conversation the caller had hidden back to their own list.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.unhide(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  unhide(
    id: string,
    params: ActionUnhideParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/unhide`, {
      query: { include },
      ...options,
    });
  }

  /**
   * Restores notifications for a conversation the caller had muted.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.actions.unmute(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *   );
   * ```
   */
  unmute(
    id: string,
    params: ActionUnmuteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/messaging/conversations/${id}/actions/unmute`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * Request to assign a customer-service case to a single owner — a user or a team.
 *
 * The owner is a polymorphic (`assignee_resource_type`, `assignee_resource_id`)
 * reference; omit both fields to clear the assignment.
 */
export interface AssignConversationRequest {
  /**
   * The owner's id, an `account_user` or `account_group` matching
   * `assignee_resource_type`.
   *
   * Omit this and `assignee_resource_type` to clear the assignment.
   */
  assignee_resource_id?: string;

  /**
   * The owner's resource type: `account_user` (a teammate) or `account_group` (a
   * team).
   */
  assignee_resource_type?: string;
}

/**
 * Request to advance the caller's read cursor in a conversation.
 */
export interface MarkConversationReadRequest {
  /**
   * Mark all messages up to and including this sequence as read.
   */
  up_to_sequence: number;
}

/**
 * Request to mute a conversation for the caller.
 */
export interface MuteConversationRequest {
  /**
   * When the mute expires.
   *
   * Omit to mute indefinitely.
   */
  muted_until?: string;
}

/**
 * Request to report a conversation (optionally a specific message) for abuse.
 */
export interface ReportConversationRequest {
  /**
   * The reason the conversation/message is being reported.
   */
  reason: string;

  /**
   * The specific message being reported.
   *
   * Omit to report the conversation as a whole.
   */
  message_id?: string;
}

/**
 * Request to place a conversation under legal hold or release it.
 *
 * While held, the conversation is exempt from automatic retention purging and from
 * GDPR redaction.
 */
export interface SetLegalHoldRequest {
  /**
   * The legal-hold status to set.
   */
  legal_hold: 'released' | 'held';
}

/**
 * Request to set the triage lane of a customer-service case.
 */
export interface SetWorkflowStatusRequest {
  /**
   * The triage lane to move the case to.
   */
  workflow_status: 'new' | 'open' | 'waiting_internal' | 'waiting_external' | 'needs_approval' | 'resolved';
}

export interface ActionArchiveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionAssignParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: The owner's id, an `account_user` or `account_group` matching
   * `assignee_resource_type`.
   *
   * Omit this and `assignee_resource_type` to clear the assignment.
   */
  assignee_resource_id?: string;

  /**
   * Body param: The owner's resource type: `account_user` (a teammate) or
   * `account_group` (a team).
   */
  assignee_resource_type?: string;
}

export interface ActionHideParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionLeaveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionMuteParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: When the mute expires.
   *
   * Omit to mute indefinitely.
   */
  muted_until?: string;
}

export interface ActionReadParams {
  /**
   * Body param: Mark all messages up to and including this sequence as read.
   */
  up_to_sequence: number;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionRedactParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionReportParams {
  /**
   * Body param: The reason the conversation/message is being reported.
   */
  reason: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;

  /**
   * Body param: The specific message being reported.
   *
   * Omit to report the conversation as a whole.
   */
  message_id?: string;
}

export interface ActionSetLegalHoldParams {
  /**
   * Body param: The legal-hold status to set.
   */
  legal_hold: 'released' | 'held';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionSetStatusParams {
  /**
   * Body param: The triage lane to move the case to.
   */
  workflow_status: 'new' | 'open' | 'waiting_internal' | 'waiting_external' | 'needs_approval' | 'resolved';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionUnarchiveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionUnhideParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export interface ActionUnmuteParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

export declare namespace Actions {
  export {
    type AssignConversationRequest as AssignConversationRequest,
    type MarkConversationReadRequest as MarkConversationReadRequest,
    type MuteConversationRequest as MuteConversationRequest,
    type ReportConversationRequest as ReportConversationRequest,
    type SetLegalHoldRequest as SetLegalHoldRequest,
    type SetWorkflowStatusRequest as SetWorkflowStatusRequest,
    type ActionArchiveParams as ActionArchiveParams,
    type ActionAssignParams as ActionAssignParams,
    type ActionHideParams as ActionHideParams,
    type ActionLeaveParams as ActionLeaveParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionReadParams as ActionReadParams,
    type ActionRedactParams as ActionRedactParams,
    type ActionReportParams as ActionReportParams,
    type ActionSetLegalHoldParams as ActionSetLegalHoldParams,
    type ActionSetStatusParams as ActionSetStatusParams,
    type ActionUnarchiveParams as ActionUnarchiveParams,
    type ActionUnhideParams as ActionUnhideParams,
    type ActionUnmuteParams as ActionUnmuteParams,
  };
}
