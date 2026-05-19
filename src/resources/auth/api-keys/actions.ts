// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage API keys for programmatic access.
 */
export class Actions extends APIResource {
  /**
   * Returns a sandbox API key for documentation. Reuses an existing valid key or
   * creates one if none exists.
   *
   * @example
   * ```ts
   * const createdAPIKey =
   *   await client.auth.apiKeys.actions.fetchDocAPIKey();
   * ```
   */
  fetchDocAPIKey(
    params: ActionFetchDocAPIKeyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.CreatedAPIKey> {
    const { include } = params ?? {};
    return this._client.post('/v1/auth/api-keys/actions/fetch-doc-api-key', {
      query: { include },
      ...options,
    });
  }

  /**
   * Rotates an [API key](https://docs.augno.com/api/api-keys) by revoking the
   * existing key and issuing a replacement with the same name, role, and expiration
   * (unless overridden).
   *
   * The secret key is returned once and cannot be retrieved later, so you should
   * store it securely. We provide some
   * [recommendations](https://docs.augno.com/api/managing-api-keys) on how you can
   * manage your API keys.
   *
   * @example
   * ```ts
   * const createdAPIKey =
   *   await client.auth.apiKeys.actions.rotate('id', {
   *     expires_at: '2026-12-31T23:59:59Z',
   *   });
   * ```
   */
  rotate(
    id: string,
    params: ActionRotateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeysAPI.CreatedAPIKey> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/auth/api-keys/${id}/actions/rotate`, {
      query: { include },
      body,
      ...options,
    });
  }
}

export interface ActionFetchDocAPIKeyParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role' | 'role.permissions'>;
}

export interface ActionRotateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'role' | 'role.permissions'>;

  /**
   * Body param: Expiration timestamp override. If omitted, the previous key's
   * expiration is used.
   */
  expires_at?: string;
}

export declare namespace Actions {
  export {
    type ActionFetchDocAPIKeyParams as ActionFetchDocAPIKeyParams,
    type ActionRotateParams as ActionRotateParams,
  };
}
