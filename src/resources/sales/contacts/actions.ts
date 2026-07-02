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
   * Only people on accounts you have a relationship with are returned — your
   * customers, your suppliers, or your own account. A match's `relationship` says
   * how you relate to the account it belongs to. Several accounts can share an
   * email, so this can return more than one match.
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
 * accounts you relate to are returned. The matched person is available through
 * `account_user` (and the shared profile through `account_user.user`), and the
 * account they belong to through `account`.
 */
export interface ContactMatch {
  /**
   * Resource ID.
   *
   * This is the matched account user's ID, so the same value also appears as
   * `account_user.id`.
   */
  id: string;

  /**
   * A customer account, including its branding and customer portal sub-resources.
   */
  account: APIKeysAPI.Account | null;

  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
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
   * - `customer` — the account is one of your customers.
   * - `supplier` — the account is one of your suppliers.
   * - `self` — the account is your own.
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * Query param: Filter to contacts whose relationship to you is one of these.
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
