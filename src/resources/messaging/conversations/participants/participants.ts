// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagingAPI from '../../messaging';
import * as ActionsAPI from './actions';
import { ActionSetRoleParams, Actions, UpdateParticipantRoleRequest } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Add, remove, and manage participants (including agents) in a conversation.
 */
export class Participants extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Adds an account user to a group conversation and returns the updated
   * conversation.
   *
   * Only an owner or admin of the conversation can add someone, and nobody can be
   * added to a direct message. Adding a user who previously left or was removed
   * reactivates their original membership with the role given here; adding someone
   * who is already an active member changes nothing.
   *
   * The added user receives a notification that they were added, and a system event
   * marking the addition is posted to the thread.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.participants.create(
   *     'cv_w35z4ck68yq7',
   *     {
   *       account_user_id: 'acus_e5zu8bde0z3h',
   *       role: 'member',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    params: ParticipantCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.Conversation> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/messaging/conversations/${id}/participants`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Removes a participant from a group conversation.
   *
   * Only an owner or admin can remove someone, participants cannot be removed from a
   * direct message, and callers cannot remove themselves — leave the conversation
   * instead. Use the remove-agent endpoint for agent participants.
   *
   * The removed member immediately loses access to the conversation, but their
   * earlier messages stay in the thread and a system event records the removal.
   * Adding them back later reactivates the same membership.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const participant =
   *   await client.messaging.conversations.participants.delete(
   *     'cvpt_be2h3ul14cts',
   *     { id: 'cv_w35z4ck68yq7' },
   *   );
   * ```
   */
  delete(
    pid: string,
    params: ParticipantDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/messaging/conversations/${id}/participants/${pid}`, options);
  }
}

/**
 * Request to add an account user to a group conversation.
 */
export interface AddParticipantRequest {
  /**
   * The account user to add.
   */
  account_user_id: string;

  /**
   * Role to grant the new participant.
   *
   * - `admin`: can add and remove members and rename the conversation.
   * - `member`: can post, leave, mute, and react.
   * - `viewer`: read-only access.
   *
   * `owner` is not accepted here; use the set-role endpoint to make an existing
   * participant an owner.
   */
  role?: 'owner' | 'admin' | 'member' | 'viewer';
}

export interface ParticipantDeleteResponse {}

export interface ParticipantCreateParams {
  /**
   * Body param: The account user to add.
   */
  account_user_id: string;

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

  /**
   * Body param: Role to grant the new participant.
   *
   * - `admin`: can add and remove members and rename the conversation.
   * - `member`: can post, leave, mute, and react.
   * - `viewer`: read-only access.
   *
   * `owner` is not accepted here; use the set-role endpoint to make an existing
   * participant an owner.
   */
  role?: 'owner' | 'admin' | 'member' | 'viewer';
}

export interface ParticipantDeleteParams {
  /**
   * Conversation ID.
   */
  id: string;
}

Participants.Actions = Actions;

export declare namespace Participants {
  export {
    type AddParticipantRequest as AddParticipantRequest,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantCreateParams as ParticipantCreateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
  };

  export {
    Actions as Actions,
    type UpdateParticipantRoleRequest as UpdateParticipantRoleRequest,
    type ActionSetRoleParams as ActionSetRoleParams,
  };
}
