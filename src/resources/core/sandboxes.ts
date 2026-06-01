// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as LinesAPI from '../operations/shipments/lines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage sandbox environments.
 */
export class Sandboxes extends APIResource {
  /**
   * Creates a sandbox account.
   *
   * @example
   * ```ts
   * const sandbox = await client.core.sandboxes.create({
   *   name: 'Integration Testing',
   * });
   * ```
   */
  create(params: SandboxCreateParams, options?: RequestOptions): APIPromise<Sandbox> {
    const { include, ...body } = params;
    return this._client.post('/v1/core/sandboxes', { query: { include }, body, ...options });
  }

  /**
   * Returns a sandbox by ID.
   *
   * @example
   * ```ts
   * const sandbox = await client.core.sandboxes.retrieve(
   *   'sbac_01ebd87c707b138806f060b9ae',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: SandboxRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Sandbox> {
    return this._client.get(path`/v1/core/sandboxes/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of sandboxes.
   *
   * @example
   * ```ts
   * const listSandbox = await client.core.sandboxes.list();
   * ```
   */
  list(query: SandboxListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListSandbox> {
    return this._client.get('/v1/core/sandboxes', { query, ...options });
  }

  /**
   * Deletes a sandbox account. At least one sandbox must remain per production
   * account.
   *
   * @example
   * ```ts
   * const sandbox = await client.core.sandboxes.delete(
   *   'sbac_01ebd87c707b138806f060b9ae',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SandboxDeleteResponse> {
    return this._client.delete(path`/v1/core/sandboxes/${id}`, options);
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
 * Request to create a sandbox.
 */
export interface CreateSandboxRequest {
  /**
   * Display name.
   */
  name: string;

  /**
   * Controls whether the sandbox is blank or seeded with sample data.
   */
  mode?: 'blank' | 'seeded' | null;
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
export interface ListSandbox {
  /**
   * Resources in this page.
   */
  data: Array<Sandbox>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: EdiRunsAPI.PageInfo;
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
 * Sandbox account for isolated testing.
 */
export interface Sandbox {
  /**
   * Sandbox ID.
   */
  id: string;

  /**
   * When this sandbox was created.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'sandbox';

  /**
   * Account with optional branding and portal sub-resources.
   */
  owner_account: LinesAPI.Account | null;

  /**
   * When this sandbox was last updated.
   */
  updated_at: string;
}

export interface SandboxDeleteResponse {}

export interface SandboxCreateParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner_account'>;

  /**
   * Body param: Controls whether the sandbox is blank or seeded with sample data.
   */
  mode?: 'blank' | 'seeded' | null;
}

export interface SandboxRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner_account'>;
}

export interface SandboxListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner_account'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace Sandboxes {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreateSandboxRequest as CreateSandboxRequest,
    type Geolocation as Geolocation,
    type ListSandbox as ListSandbox,
    type PageInfo as PageInfo,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };
}
