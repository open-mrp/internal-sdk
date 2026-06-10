// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
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
   *   mode: 'blank',
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
   * Deletes a sandbox account. Account-scoped data is purged asynchronously.
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
  mode?: 'blank' | 'seeded';
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
  page_info: APIKeysAPI.PageInfo;
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
  owner_account: APIKeysAPI.Account | null;

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
  mode?: 'blank' | 'seeded';
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
    type CreateSandboxRequest as CreateSandboxRequest,
    type ListSandbox as ListSandbox,
    type Sandbox as Sandbox,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
    type SandboxListParams as SandboxListParams,
  };
}
