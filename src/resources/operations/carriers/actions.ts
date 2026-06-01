// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage carriers and their Shippo integrations.
 */
export class Actions extends APIResource {
  /**
   * Initiates the OAuth flow for a Shippo-managed carrier and returns an OAuth URL.
   * Not available in sandbox mode.
   *
   * @example
   * ```ts
   * const oauthResponse =
   *   await client.operations.carriers.actions.initiateOAuth(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *     {
   *       redirect_uri:
   *         'https://app.example.com/carriers/oauth/callback',
   *       state: 'state',
   *     },
   *   );
   * ```
   */
  initiateOAuth(
    id: string,
    body: ActionInitiateOAuthParams,
    options?: RequestOptions,
  ): APIPromise<OAuthResponse> {
    return this._client.post(path`/v1/operations/carriers/${id}/actions/initiate-oauth`, {
      body,
      ...options,
    });
  }

  /**
   * Syncs carrier options from Shippo service levels, adding new and removing stale
   * ones. Not available in sandbox mode.
   *
   * @example
   * ```ts
   * const carrier =
   *   await client.operations.carriers.actions.syncOptions(
   *     'cr_01784fd54c9ba197bb4e42f0e6',
   *   );
   * ```
   */
  syncOptions(
    id: string,
    params: ActionSyncOptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.Carrier> {
    const { include } = params ?? {};
    return this._client.post(path`/v1/operations/carriers/${id}/actions/sync-options`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * Request to initiate carrier OAuth.
 */
export interface InitiateOAuthRequest {
  /**
   * Redirect URI after OAuth completes.
   */
  redirect_uri: string;

  /**
   * Opaque state value passed through the OAuth flow.
   */
  state: string | null;
}

/**
 * Response from initiating carrier OAuth.
 */
export interface OAuthResponse {
  /**
   * OAuth URL to redirect the user to.
   */
  oauth_url: string;

  /**
   * Resource type identifier.
   */
  object: 'oauth_response';
}

export interface ActionInitiateOAuthParams {
  /**
   * Redirect URI after OAuth completes.
   */
  redirect_uri: string;

  /**
   * Opaque state value passed through the OAuth flow.
   */
  state: string | null;
}

export interface ActionSyncOptionsParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'service_levels'>;
}

export declare namespace Actions {
  export {
    type InitiateOAuthRequest as InitiateOAuthRequest,
    type OAuthResponse as OAuthResponse,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
    type ActionSyncOptionsParams as ActionSyncOptionsParams,
  };
}
