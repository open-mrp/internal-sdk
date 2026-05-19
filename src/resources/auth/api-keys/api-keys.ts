// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as RolesAPI from '../../identity/roles';
import * as ActionsAPI from './actions';
import { ActionFetchDocAPIKeyParams, ActionRotateParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage API keys for programmatic access.
 */
export class APIKeys extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns [API key](https://docs.augno.com/api/api-keys) metadata by ID.
   *
   * @example
   * ```ts
   * const apiKey = await client.auth.apiKeys.retrieve('id');
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
   * Revokes an [API key](https://docs.augno.com/api/api-keys).
   *
   * Revoked API keys will be unable to be used to authenticate requests.
   *
   * @example
   * ```ts
   * const apiKey = await client.auth.apiKeys.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(path`/v1/auth/api-keys/${id}`, options);
  }

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
   * const createdAPIKey = await client.auth.apiKeys.apiKeys({
   *   name: 'Production API Key',
   *   role_id: 'rl_01gf7a8200er3ar3pkfrb6kk29',
   * });
   * ```
   */
  apiKeys(params: APIKeyAPIKeysParams, options?: RequestOptions): APIPromise<CreatedAPIKey> {
    const { include, ...body } = params;
    return this._client.post('/v1/auth/api-keys', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of [API keys](https://docs.augno.com/api/api-keys).
   *
   * @example
   * ```ts
   * const response =
   *   await client.auth.apiKeys.retrieveAPIKeys();
   * ```
   */
  retrieveAPIKeys(
    query: APIKeyRetrieveAPIKeysParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyRetrieveAPIKeysResponse> {
    return this._client.get('/v1/auth/api-keys', { query, ...options });
  }
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
  role: RolesAPI.Role | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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

export interface APIKeyDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface APIKeyRetrieveAPIKeysResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface APIKeyRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;
}

export interface APIKeyAPIKeysParams {
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

export interface APIKeyRetrieveAPIKeysParams {
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
    type APIKey as APIKey,
    type CreatedAPIKey as CreatedAPIKey,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRetrieveAPIKeysResponse as APIKeyRetrieveAPIKeysResponse,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams,
    type APIKeyRetrieveAPIKeysParams as APIKeyRetrieveAPIKeysParams,
  };

  export {
    Actions as Actions,
    type ActionFetchDocAPIKeyParams as ActionFetchDocAPIKeyParams,
    type ActionRotateParams as ActionRotateParams,
  };
}
