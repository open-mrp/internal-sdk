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
   * Starts the OAuth flow that authorizes your own account with the carrier,
   * returning the URL to send the user to.
   *
   * The carrier must already have a Shippo carrier account, which is created when
   * the carrier is created with a Shippo-supported code. Not available in sandbox
   * mode.
   *
   * This endpoint requires the permission: `carriers:update`.
   *
   * @example
   * ```ts
   * const oauthResponse =
   *   await client.operations.carriers.actions.initiateOAuth(
   *     'cr_tv5vfjtgu1n3',
   *     {
   *       redirect_uri:
   *         'https://app.example.com/carriers/oauth/callback',
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
   * Re-syncs a carrier's service levels from Shippo.
   *
   * Service levels newly offered by the carrier are added (initially hidden from the
   * customer portal) and previously synced ones no longer offered are removed;
   * manually created service levels are untouched. Only available for Shippo-managed
   * carriers; not available in sandbox mode.
   *
   * This endpoint requires the permission: `carriers:update`.
   *
   * @example
   * ```ts
   * const carrier =
   *   await client.operations.carriers.actions.syncOptions(
   *     'cr_tv5vfjtgu1n3',
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
   * URL the carrier sends the user back to once they finish authorizing.
   */
  redirect_uri: string;

  /**
   * Opaque value passed through the OAuth flow and handed back on the redirect.
   *
   * Use it to correlate the callback with the request that started it, or to carry
   * the page the user should return to.
   */
  state?: string;
}

/**
 * Response from initiating carrier OAuth.
 */
export interface OAuthResponse {
  /**
   * URL to send the user to so they can authorize their carrier account.
   *
   * Once the user finishes authorizing, the carrier returns them to the
   * `redirect_uri` supplied when the flow was initiated.
   */
  oauth_url: string;

  /**
   * Resource type identifier.
   */
  object: 'oauth_response';
}

export interface ActionInitiateOAuthParams {
  /**
   * URL the carrier sends the user back to once they finish authorizing.
   */
  redirect_uri: string;

  /**
   * Opaque value passed through the OAuth flow and handed back on the redirect.
   *
   * Use it to correlate the callback with the request that started it, or to carry
   * the page the user should return to.
   */
  state?: string;
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
