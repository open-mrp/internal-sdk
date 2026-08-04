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
   * Every account user listed must exist; repeated ids are ignored. The caller is
   * recorded as the creator but is not added to the roster automatically — include
   * their own account user id to be a member.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const messagingGroup = await client.messaging.groups.create(
   *   {
   *     name: 'Operations Team',
   *     member_account_user_ids: ['acus_e5zu8bde0z3h'],
   *     member_agent_config_ids: ['agdf_ah7tkyfxk8jl'],
   *   },
   * );
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<MessagingAPI.MessagingGroup> {
    return this._client.post('/v1/messaging/groups', { body, ...options });
  }

  /**
   * Retrieves a reusable roster together with its current members.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const messagingGroup =
   *   await client.messaging.groups.retrieve(
   *     'cvgp_wjlypugna7s4',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingAPI.MessagingGroup> {
    return this._client.get(path`/v1/messaging/groups/${id}`, options);
  }

  /**
   * Renames a reusable roster.
   *
   * Members are managed through the add-member and remove-member endpoints, not
   * here.
   *
   * This endpoint requires the permission: `messaging:update`.
   *
   * @example
   * ```ts
   * const messagingGroup = await client.messaging.groups.update(
   *   'cvgp_wjlypugna7s4',
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
   * Lists the reusable rosters in the caller's account, each with its members.
   *
   * Rosters come back most-recently-updated first, and adding or removing a member
   * counts as an update. The whole account's rosters are returned in one page.
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
   *   'cvgp_wjlypugna7s4',
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
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
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
