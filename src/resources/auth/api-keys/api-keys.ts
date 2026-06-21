// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { ActionFetchDocAPIKeyParams, ActionRotateParams, Actions, RotateAPIKeyRequest } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage API keys for programmatic access.
 */
export class APIKeys extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates an [API key](https://docs.augno.com/api/api-keys) to authenticate API
   * requests.
   *
   * The secret key is returned once and cannot be retrieved later, so you should
   * store it securely. We provide some
   * [recommendations](https://docs.augno.com/api/managing-api-keys) on how you can
   * manage your API keys.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const createdAPIKey = await client.auth.apiKeys.create({
   *   name: 'Production API Key',
   *   role_id: 'rl_01c16d2eb637c0d1f3a372937c',
   * });
   * ```
   */
  create(params: APIKeyCreateParams, options?: RequestOptions): APIPromise<CreatedAPIKey> {
    const { include, ...body } = params;
    return this._client.post('/v1/auth/api-keys', { query: { include }, body, ...options });
  }

  /**
   * Returns [API key](https://docs.augno.com/api/api-keys) metadata by ID.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const apiKey = await client.auth.apiKeys.retrieve(
   *   'apke_01fba3a7db3996e3b3b1a07e00',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: APIKeyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKey> {
    return this._client.get(path`/v1/auth/api-keys/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of [API keys](https://docs.augno.com/api/api-keys).
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const listAPIKey = await client.auth.apiKeys.list();
   * ```
   */
  list(query: APIKeyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListAPIKey> {
    return this._client.get('/v1/auth/api-keys', { query, ...options });
  }

  /**
   * Revokes an [API key](https://docs.augno.com/api/api-keys).
   *
   * Revocation takes effect immediately and cannot be undone; revoked keys can no
   * longer be used to authenticate requests. To replace a key without losing access,
   * use Rotate API Key instead.
   *
   * This endpoint requires the `admin` role type.
   *
   * @example
   * ```ts
   * const apiKey = await client.auth.apiKeys.delete(
   *   'apke_01fba3a7db3996e3b3b1a07e00',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(path`/v1/auth/api-keys/${id}`, options);
  }
}

/**
 * A customer account, including its branding and customer portal sub-resources.
 */
export interface Account {
  /**
   * Account ID.
   */
  id: string;

  /**
   * Branding metadata for an account.
   */
  branding: AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  default_billing_address: Address | null;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  default_shipping_address: Address | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account';

  /**
   * Portal metadata for an account.
   */
  portal: AccountPortal | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Branding metadata for an account.
 */
export interface AccountBranding {
  /**
   * Branding ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Facebook handle.
   */
  facebook_handle: string | null;

  /**
   * Instagram handle.
   */
  instagram_handle: string | null;

  /**
   * LinkedIn handle.
   */
  linkedin_handle: string | null;

  /**
   * Logo URL.
   */
  logo_url: string | null;

  /**
   * Resource type identifier.
   */
  object: 'account_branding';

  /**
   * Support phone number.
   */
  phone_number: string | null;

  /**
   * Support email address.
   */
  support_email: string | null;

  /**
   * Twitter handle.
   */
  twitter_handle: string | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Website URL.
   */
  website_url: string | null;
}

/**
 * Portal metadata for an account.
 */
export interface AccountPortal {
  /**
   * Portal ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'account_portal';

  /**
   * URL slug that identifies the account's customer portal.
   *
   * Unique across all accounts.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A saved address that can be used for billing and shipping on sales orders,
 * invoices, and shipments.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * The street-level location details of an address.
   */
  geolocation: Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   *
   * - `standard`: a normal shipping or billing address.
   * - `drop_ship`: an address an order is shipped to directly, typically a third
   *   party or end customer rather than the account itself.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * An API key used to authenticate requests to the Augno API.
 */
export interface APIKey {
  /**
   * API key ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * When the key expires and stops authenticating.
   *
   * `null` if the key never expires.
   */
  expires_at: string | null;

  /**
   * When the key was last used to authenticate a request.
   *
   * Updated at most once every 24 hours, so it may lag the key's most recent use.
   * `null` if the key has never been used.
   */
  last_used_at: string | null;

  /**
   * Human-readable name for the API key.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'api_key';

  /**
   * Redacted key value safe for display.
   *
   * The key's prefix followed by its last four characters, e.g.
   * `aug_sk_prod_****hjt4`.
   */
  redacted_value: string;

  /**
   * When the key's revocation takes effect.
   *
   * A future timestamp means revocation was scheduled (for example, during rotation)
   * and the key continues to authenticate requests until that time. `null` if the
   * key has not been revoked.
   */
  revoked_at: string | null;

  /**
   * A named set of permissions that can be assigned to users to control what they
   * can access.
   */
  role: Role | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create an API key.
 */
export interface CreateAPIKeyRequest {
  /**
   * Human-readable name for the API key.
   */
  name: string;

  /**
   * ID of the role to assign to the API key.
   *
   * The role determines the permissions of requests authenticated with the key.
   */
  role_id: string;

  /**
   * When the key expires and stops authenticating requests.
   *
   * If omitted, the key never expires.
   */
  expires_at?: string;
}

/**
 * Result of creating an API key, with the full secret value.
 */
export interface CreatedAPIKey {
  /**
   * An API key used to authenticate requests to the Augno API.
   */
  api_key_info: APIKey;

  /**
   * Full secret value.
   *
   * Returned once and cannot be retrieved later. Learn more about
   * [managing your API keys](https://docs.augno.com/api/managing-api-keys).
   */
  api_key_secret: string;

  /**
   * Resource type identifier.
   */
  object: 'created_api_key';
}

/**
 * The street-level location details of an address.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAPIKey {
  /**
   * Resources in this page.
   */
  data: Array<APIKey>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: PageInfo;
}

/**
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * A customer account, including its branding and customer portal sub-resources.
   */
  account: Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * Owner type, identifying where the resource came from.
   *
   * - `system`: a platform-provided default shared across all accounts; not
   *   editable.
   * - `account`: created and owned by a specific account; the `account` field
   *   identifies which.
   */
  type: 'system' | 'account';
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * Relative URL that fetches the next page of results.
   *
   * `null` when the last page has been reached.
   */
  next_page_url: string | null;

  /**
   * Relative URL that fetches the previous page of results.
   *
   * `null` while on the first page.
   */
  previous_page_url: string | null;
}

/**
 * A named set of permissions that can be assigned to users to control what they
 * can access.
 */
export interface Role {
  /**
   * Role ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name, unique within the account.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'role';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: Owner | null;

  /**
   * Permissions granted by this role, in `{domain}:{action}` format, such as
   * `customers:read`.
   */
  permissions: Array<string> | null;

  /**
   * The kind of role.
   *
   * The role's type is sometimes used to gate special behaviors and to restrict some
   * actions to only certain types of roles. For example, only roles with the type
   * `admin` can create and manage API keys.
   *
   * - `admin`: full administrative access, including managing API keys.
   * - `user`: a custom role tailored to a specific need (its permissions are defined
   *   explicitly). Roles created through the API always have this type.
   * - `scanner`: a role for scanning-station operators.
   * - `sales_rep`: a role for sales representatives.
   * - `agent`: a role assigned to an automated agent rather than a person.
   */
  type: 'admin' | 'user' | 'scanner' | 'sales_rep' | 'agent';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface APIKeyDeleteResponse {}

export interface APIKeyCreateParams {
  /**
   * Body param: Human-readable name for the API key.
   */
  name: string;

  /**
   * Body param: ID of the role to assign to the API key.
   *
   * The role determines the permissions of requests authenticated with the key.
   */
  role_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Body param: When the key expires and stops authenticating requests.
   *
   * If omitted, the key never expires.
   */
  expires_at?: string;
}

export interface APIKeyRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;
}

export interface APIKeyListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * API key statuses to filter by.
   *
   * - `active`: the key can be used to authenticate requests.
   * - `expired`: the key passed its expiration time and can no longer authenticate
   *   requests.
   * - `revoked`: the key was revoked and can no longer authenticate requests.
   *
   * When omitted, keys of every status are returned.
   */
  statuses?: Array<'active' | 'expired' | 'revoked'>;
}

APIKeys.Actions = Actions;

export declare namespace APIKeys {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type APIKey as APIKey,
    type CreateAPIKeyRequest as CreateAPIKeyRequest,
    type CreatedAPIKey as CreatedAPIKey,
    type Geolocation as Geolocation,
    type ListAPIKey as ListAPIKey,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Role as Role,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    Actions as Actions,
    type RotateAPIKeyRequest as RotateAPIKeyRequest,
    type ActionFetchDocAPIKeyParams as ActionFetchDocAPIKeyParams,
    type ActionRotateParams as ActionRotateParams,
  };
}
