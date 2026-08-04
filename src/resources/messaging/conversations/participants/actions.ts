// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagingAPI from '../../messaging';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Add, remove, and manage participants (including agents) in a conversation.
 */
export class Actions extends APIResource {
  /**
   * Changes a participant's role in a conversation and returns the updated
   * conversation.
   *
   * Only the conversation's owner can change roles, and agent and system
   * participants are rejected — they hold no role that can be changed. This is also
   * the only way to grant `owner`: the promoted member gains full control while the
   * caller keeps their own owner role, so a conversation can have more than one
   * owner.
   *
   * A change of role posts a system event to the thread; setting a participant to
   * the role they already hold is a no-op.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.participants.actions.setRole(
   *     'cvpt_be2h3ul14cts',
   *     { id: 'cv_w35z4ck68yq7', role: 'admin' },
   *   );
   * ```
   */
  setRole(
    pid: string,
    params: ActionSetRoleParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { id, include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/participants/${pid}/actions/set-role`, {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * Request to change a participant's role in a conversation.
 */
export interface UpdateParticipantRoleRequest {
  /**
   * The role to assign to the participant.
   *
   * - `owner`: can rename or delete the conversation and manage members and roles.
   * - `admin`: can add and remove members and rename the conversation.
   * - `member`: can post, leave, mute, and react.
   * - `viewer`: read-only access.
   */
  role: 'owner' | 'admin' | 'member' | 'viewer';
}

export interface ActionSetRoleParams {
  /**
   * Path param: Conversation ID.
   */
  id: string;

  /**
   * Body param: The role to assign to the participant.
   *
   * - `owner`: can rename or delete the conversation and manage members and roles.
   * - `admin`: can add and remove members and rename the conversation.
   * - `member`: can post, leave, mute, and react.
   * - `viewer`: read-only access.
   */
  role: 'owner' | 'admin' | 'member' | 'viewer';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
  >;
}

export declare namespace Actions {
  export {
    type UpdateParticipantRoleRequest as UpdateParticipantRoleRequest,
    type ActionSetRoleParams as ActionSetRoleParams,
  };
}
