// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Block and unblock users from direct messaging.
 */
export class Blocks extends APIResource {
  /**
   * Blocks an account user (prevents DMs in both directions).
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const messagingBlock = await client.messaging.blocks.create(
   *   {
   *     blocked_account_user_id:
   *       'acus_01ea9983ddb41dacc44ecf997c',
   *   },
   * );
   * ```
   */
  create(params: BlockCreateParams, options?: RequestOptions): APIPromise<MessagingBlock> {
    const { include, ...body } = params;
    return this._client.post('/v1/messaging/blocks', { query: { include }, body, ...options });
  }

  /**
   * Lists the caller's messaging blocks.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listMessagingBlock =
   *   await client.messaging.blocks.list();
   * ```
   */
  list(
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMessagingBlock> {
    return this._client.get('/v1/messaging/blocks', { query, ...options });
  }

  /**
   * Removes a block.
   *
   * This endpoint requires the permission: `messaging:delete`.
   *
   * @example
   * ```ts
   * const block = await client.messaging.blocks.delete(
   *   'example',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<BlockDeleteResponse> {
    return this._client.delete(path`/v1/messaging/blocks/${id}`, options);
  }
}

/**
 * Request to block another account user from messaging the caller.
 */
export interface BlockRequest {
  /**
   * The account user to block.
   */
  blocked_account_user_id: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMessagingBlock {
  /**
   * Resources in this page.
   */
  data: Array<MessagingBlock>;

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
 * A 1:1 messaging block: the caller has blocked another account user from
 * messaging them.
 */
export interface MessagingBlock {
  /**
   * Block ID.
   */
  id: string;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  blocked_user: AccountUsersAPI.AccountUser | null;

  /**
   * When the block was created.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'messaging_block';
}

export interface BlockDeleteResponse {}

export interface BlockCreateParams {
  /**
   * Body param: The account user to block.
   */
  blocked_account_user_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'blocked_user' | 'blocked_user.user' | 'blocked_user.role' | 'blocked_user.department'>;
}

export interface BlockListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'blocked_user' | 'blocked_user.user' | 'blocked_user.role' | 'blocked_user.department'>;
}

export declare namespace Blocks {
  export {
    type BlockRequest as BlockRequest,
    type ListMessagingBlock as ListMessagingBlock,
    type MessagingBlock as MessagingBlock,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockListParams as BlockListParams,
  };
}
