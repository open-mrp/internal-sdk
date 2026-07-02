// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage reusable rosters (named member sets) that seed many conversations.
 */
export class Members extends APIResource {
  /**
   * Adds a member (a user or an agent) to a reusable roster.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const messagingGroup =
   *   await client.messaging.groups.members.create(
   *     'cvgp_018e88072d1320808dc97abc',
   *     {
   *       member_type: 'user',
   *       account_user_id: 'acus_01ea9983ddb41dacc44ecf997c',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    body: MemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.MessagingGroup> {
    return this._client.post(path`/v1/messaging/groups/${id}/members`, { body, ...options });
  }

  /**
   * Removes a member from a reusable roster.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const messagingGroup =
   *   await client.messaging.groups.members.delete(
   *     'cvgppt_018e88072d1320808dc9def',
   *     { id: 'cvgp_018e88072d1320808dc97abc' },
   *   );
   * ```
   */
  delete(
    memberID: string,
    params: MemberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.MessagingGroup> {
    const { id } = params;
    return this._client.delete(path`/v1/messaging/groups/${id}/members/${memberID}`, options);
  }
}

/**
 * Request to add a member to a reusable roster.
 */
export interface AddMessagingGroupMemberRequest {
  /**
   * The kind of member being added.
   */
  member_type: 'user' | 'agent';

  /**
   * The account user to add (required when `member_type` is `user`).
   */
  account_user_id?: string;

  /**
   * The agent to add (required when `member_type` is `agent`).
   */
  agent_config_id?: string;
}

export interface MemberCreateParams {
  /**
   * The kind of member being added.
   */
  member_type: 'user' | 'agent';

  /**
   * The account user to add (required when `member_type` is `user`).
   */
  account_user_id?: string;

  /**
   * The agent to add (required when `member_type` is `agent`).
   */
  agent_config_id?: string;
}

export interface MemberDeleteParams {
  /**
   * Messaging group ID.
   */
  id: string;
}

export declare namespace Members {
  export {
    type AddMessagingGroupMemberRequest as AddMessagingGroupMemberRequest,
    type MemberCreateParams as MemberCreateParams,
    type MemberDeleteParams as MemberDeleteParams,
  };
}
