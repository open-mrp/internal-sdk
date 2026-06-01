// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ShipmentsActionsAPI from '../../operations/shipments/actions';
import * as LinesAPI from '../../operations/shipments/lines';
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
  ): APIPromise<CreatedAPIKey> {
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
   *   await client.auth.apiKeys.actions.rotate(
   *     'apke_01fba3a7db3996e3b3b1a07e00',
   *     { expires_at: '2026-12-31T23:59:59Z' },
   *   );
   * ```
   */
  rotate(
    id: string,
    params: ActionRotateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreatedAPIKey> {
    const { include, ...body } = params ?? {};
    return this._client.post(path`/v1/auth/api-keys/${id}/actions/rotate`, {
      query: { include },
      body,
      ...options,
    });
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
  branding: LinesAPI.AccountBranding | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Address with associated geolocation.
   */
  default_billing_address: LinesAPI.Address | null;

  /**
   * Address with associated geolocation.
   */
  default_shipping_address: LinesAPI.Address | null;

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
  portal: LinesAPI.AccountPortal | null;

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
  geolocation: LinesAPI.Geolocation | null;

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
  role: ShipmentsActionsAPI.Role | null;

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
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

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
  owner: LinesAPI.Owner | null;

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

/**
 * Request to rotate an API key.
 */
export interface RotateAPIKeyRequest {
  /**
   * Expiration timestamp override. If omitted, the previous key's expiration is
   * used.
   */
  expires_at?: string;
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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type APIKey as APIKey,
    type CreatedAPIKey as CreatedAPIKey,
    type Geolocation as Geolocation,
    type Owner as Owner,
    type Role as Role,
    type RotateAPIKeyRequest as RotateAPIKeyRequest,
    type ActionFetchDocAPIKeyParams as ActionFetchDocAPIKeyParams,
    type ActionRotateParams as ActionRotateParams,
  };
}
