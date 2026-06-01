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
   * Revoked API keys will be unable to be used to authenticate requests.
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
 * Account with optional branding and portal sub-resources.
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
   * Address with associated geolocation.
   */
  default_billing_address: Address | null;

  /**
   * Address with associated geolocation.
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
   * Portal slug.
   */
  slug: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Address with associated geolocation.
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
   * Geolocation sub-resource.
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
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * API key resource.
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
   * Expiration timestamp.
   */
  expires_at: string | null;

  /**
   * Last used timestamp.
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
   */
  redacted_value: string;

  /**
   * Revocation timestamp.
   */
  revoked_at: string | null;

  /**
   * Role resource.
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
   * Role ID assigned to the API key.
   */
  role_id: string;

  /**
   * Expiration timestamp. If not set, the key does not expire.
   */
  expires_at?: string;
}

/**
 * Result of creating an API key, with the full secret value.
 */
export interface CreatedAPIKey {
  /**
   * API key resource.
   */
  api_key_info: APIKey;

  /**
   * Full secret value. Returned once and cannot be retrieved later. Learn more about
   * [managing your API keys](https://docs.augno.com/api/managing-api-keys).
   */
  api_key_secret: string;

  /**
   * Resource type identifier.
   */
  object: 'created_api_key';
}

/**
 * Geolocation sub-resource.
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
   * Account with optional branding and portal sub-resources.
   */
  account: Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
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
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
}

/**
 * Role resource.
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
   * Display name.
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
   * Permissions in `{domain}:{action}` format.
   */
  permissions: Array<string> | null;

  /**
   * Role type code.
   *
   * The role's type is sometimes used to gate special behaviors in the frontend and
   * to restrict some actions to only certain types of roles. For example, only roles
   * with the type `admin` can create and manage API keys.
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
   * Body param: Role ID assigned to the API key.
   */
  role_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Body param: Expiration timestamp. If not set, the key does not expire.
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
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * API key statuses to filter by.
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
