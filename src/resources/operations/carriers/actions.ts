// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CarriersAPI from './carriers';
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
   * const response =
   *   await client.operations.carriers.actions.initiateOAuth(
   *     'cr_01jm4r6700f8nwq3v5hx2d9ktp',
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
  ): APIPromise<ActionInitiateOAuthResponse> {
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
   *     'cr_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  syncOptions(id: string, options?: RequestOptions): APIPromise<CarriersAPI.Carrier> {
    return this._client.post(path`/v1/operations/carriers/${id}/actions/sync-options`, options);
  }
}

/**
 * Response from initiating carrier OAuth.
 */
export interface ActionInitiateOAuthResponse {
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

export declare namespace Actions {
  export {
    type ActionInitiateOAuthResponse as ActionInitiateOAuthResponse,
    type ActionInitiateOAuthParams as ActionInitiateOAuthParams,
  };
}
