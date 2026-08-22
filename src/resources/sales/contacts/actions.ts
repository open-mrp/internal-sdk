// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Look up the people you do business with.
 */
export class Actions extends APIResource {
  /**
   * Finds the contacts that match an email address.
   *
   * Only active people on accounts you have a relationship with are returned — your
   * customers, your suppliers, or your own account. A match's `relationship` says
   * how you relate to the account it belongs to. The same person can be set up on
   * several accounts under one email, so this can return more than one match, and an
   * email that belongs to no one you deal with simply returns no matches rather than
   * an error.
   *
   * This endpoint requires the permission: `customers:read`.
   *
   * @example
   * ```ts
   * const listContactMatch =
   *   await client.sales.contacts.actions.findByEmail({
   *     email: 'buyer@acme-co.example',
   *   });
   * ```
   */
  findByEmail(params: ActionFindByEmailParams, options?: RequestOptions): APIPromise<ListContactMatch> {
    const { include, relationships, ...body } = params;
    return this._client.post('/v1/sales/contacts/actions/find-by-email', {
      query: { include, relationships },
      body,
      ...options,
    });
  }
}

/**
 * A contact found by email on an account you have a relationship with — one of
 * your customers, your suppliers, or your own account.
 *
 * The same email can be a contact on many accounts across the platform; only
 * accounts you relate to are returned.
 *
 * Only active people are matched — someone who has been disabled or removed on an
 * account never produces a match for that account.
 */
export interface ContactMatch {
  /**
   * Contact match ID.
   *
   * This is the matched account user's ID, so the same value also appears as
   * `account_user.id`.
   */
  id: string;

  /**
   * An organization on OpenMRP, including its branding and customer portal
   * sub-resources.
   *
   * Your own account and any customer or supplier account you trade with are both
   * represented by this object.
   */
  account: APIKeysAPI.Account | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  account_user: AccountUsersAPI.AccountUser | null;

  /**
   * The email address that was matched.
   */
  email: string;

  /**
   * Resource type identifier.
   */
  object: 'contact_match';

  /**
   * How you relate to the account this contact belongs to.
   *
   * - `customer`: the account is one of your customers.
   * - `supplier`: the account is one of your suppliers.
   * - `self`: the account is your own.
   */
  relationship: 'customer' | 'supplier' | 'self';
}

/**
 * Request to find contacts by email.
 */
export interface FindContactByEmailRequest {
  /**
   * The email address to look up.
   */
  email: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListContactMatch {
  /**
   * Resources in this page.
   */
  data: Array<ContactMatch>;

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

export interface ActionFindByEmailParams {
  /**
   * Body param: The email address to look up.
   */
  email: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'account_user' | 'account_user.user' | 'account_user.role' | 'account_user.department' | 'account'
  >;

  /**
   * Query param: Restricts the results to matches whose relationship to your account
   * is one of these.
   *
   * Leaving it out returns matches of every relationship.
   */
  relationships?: Array<'customer' | 'supplier' | 'self'>;
}

export declare namespace Actions {
  export {
    type ContactMatch as ContactMatch,
    type FindContactByEmailRequest as FindContactByEmailRequest,
    type ListContactMatch as ListContactMatch,
    type ActionFindByEmailParams as ActionFindByEmailParams,
  };
}
