// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagingAPI from '../messaging';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as MembersAPI from './members';
import { AddMessagingGroupMemberRequest, MemberCreateParams, MemberDeleteParams, Members } from './members';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage reusable rosters (named member sets) that seed many conversations.
 */
export class Groups extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Creates a reusable roster of members (users and/or agents) that can seed many
   * conversations.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const messagingGroup = await client.messaging.groups.create(
   *   {
   *     name: 'Operations Team',
   *     member_account_user_ids: [
   *       'acus_01ea9983ddb41dacc44ecf997c',
   *     ],
   *     member_agent_config_ids: [
   *       'agdf_01b9ef28feb99e6954201aca63',
   *     ],
   *   },
   * );
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<MessagingAPI.MessagingGroup> {
    return this._client.post('/v1/messaging/groups', { body, ...options });
  }

  /**
   * Retrieves a reusable roster (with its members).
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const messagingGroup =
   *   await client.messaging.groups.retrieve(
   *     'cvgp_018e88072d1320808dc97abc',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingAPI.MessagingGroup> {
    return this._client.get(path`/v1/messaging/groups/${id}`, options);
  }

  /**
   * Renames a reusable roster.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const messagingGroup = await client.messaging.groups.update(
   *   'cvgp_018e88072d1320808dc97abc',
   *   { name: 'Operations Team' },
   * );
   * ```
   */
  update(
    id: string,
    body: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingAPI.MessagingGroup> {
    return this._client.patch(path`/v1/messaging/groups/${id}`, { body, ...options });
  }

  /**
   * Lists the reusable rosters in the caller's account (most-recently-updated
   * first).
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listMessagingGroup =
   *   await client.messaging.groups.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListMessagingGroup> {
    return this._client.get('/v1/messaging/groups', options);
  }

  /**
   * Deletes a reusable roster.
   *
   * Conversations already started from it are unaffected (their members were
   * snapshotted); they simply lose the roster reference.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const group = await client.messaging.groups.delete(
   *   'cvgp_018e88072d1320808dc97abc',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<GroupDeleteResponse> {
    return this._client.delete(path`/v1/messaging/groups/${id}`, options);
  }
}

/**
 * Request to create a reusable roster.
 */
export interface CreateMessagingGroupRequest {
  /**
   * The roster's display name.
   */
  name: string;

  /**
   * The account users to include in the roster.
   */
  member_account_user_ids?: Array<string>;

  /**
   * The agents to include in the roster.
   */
  member_agent_config_ids?: Array<string>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMessagingGroup {
  /**
   * Resources in this page.
   */
  data: Array<MessagingAPI.MessagingGroup>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to rename a reusable roster.
 */
export interface UpdateMessagingGroupRequest {
  /**
   * The roster's new display name.
   */
  name: string;
}

export interface GroupDeleteResponse {}

export interface GroupCreateParams {
  /**
   * The roster's display name.
   */
  name: string;

  /**
   * The account users to include in the roster.
   */
  member_account_user_ids?: Array<string>;

  /**
   * The agents to include in the roster.
   */
  member_agent_config_ids?: Array<string>;
}

export interface GroupUpdateParams {
  /**
   * The roster's new display name.
   */
  name: string;
}

Groups.Members = Members;

export declare namespace Groups {
  export {
    type CreateMessagingGroupRequest as CreateMessagingGroupRequest,
    type ListMessagingGroup as ListMessagingGroup,
    type UpdateMessagingGroupRequest as UpdateMessagingGroupRequest,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
  };

  export {
    Members as Members,
    type AddMessagingGroupMemberRequest as AddMessagingGroupMemberRequest,
    type MemberCreateParams as MemberCreateParams,
    type MemberDeleteParams as MemberDeleteParams,
  };
}
