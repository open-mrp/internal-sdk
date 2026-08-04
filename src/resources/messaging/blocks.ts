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
   * Blocks another user in your account from exchanging direct messages with you.
   *
   * While the block stands neither of you can start a direct message with the other
   * or post in one you already share; group conversations and customer cases are
   * unaffected. Blocking someone you have already blocked returns the original block
   * instead of creating a second one.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const messagingBlock = await client.messaging.blocks.create(
   *   { blocked_account_user_id: 'acus_e5zu8bde0z3h' },
   * );
   * ```
   */
  create(params: BlockCreateParams, options?: RequestOptions): APIPromise<MessagingBlock> {
    const { include, ...body } = params;
    return this._client.post('/v1/messaging/blocks', { query: { include }, body, ...options });
  }

  /**
   * Lists the users you have blocked, most recently blocked first.
   *
   * Only blocks you created are returned — you are never told who has blocked you.
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
   * Lifts a block you placed on another user, letting the two of you message each
   * other again.
   *
   * Only your own block is removed: if the other person has also blocked you, direct
   * messages between you stay blocked. Unblocking someone you have not blocked
   * succeeds and changes nothing.
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
   *
   * It must be someone else in your account; you cannot block yourself.
   */
  blocked_account_user_id: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
 * A block one account user has placed on another.
 *
 * While the block stands, neither of the two can start a direct message with the
 * other or post in an existing one, whichever of them created it. Group
 * conversations and customer cases are unaffected.
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
   * Profile fields (name, email, username, image URL) live on the `user`
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
   *
   * It must be someone else in your account; you cannot block yourself.
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
