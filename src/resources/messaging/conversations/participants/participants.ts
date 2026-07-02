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
   * Adds (or reactivates) a participant in a group conversation.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversation =
   *   await client.messaging.conversations.participants.create(
   *     'cv_01h9z8q1w2e3r4t5y6u7i8cv',
   *     {
   *       account_user_id: 'acus_01ea9983ddb41dacc44ecf997c',
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
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const participant =
   *   await client.messaging.conversations.participants.delete(
   *     'cvpt_01h9z8q1w2e3r4t5y6u7cvpt',
   *     { id: 'cv_01h9z8q1w2e3r4t5y6u7i8cv' },
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
 * Request to add a participant to a group (owner/admin).
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
   * `owner` is not accepted here; ownership can only be transferred via the set-role
   * endpoint.
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
   * `owner` is not accepted here; ownership can only be transferred via the set-role
   * endpoint.
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
