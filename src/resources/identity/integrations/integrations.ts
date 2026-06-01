// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as StripeAPI from './stripe';
import { Stripe, StripePublishableKey, StripeStatus } from './stripe';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage third-party account integrations.
 */
export class Integrations extends APIResource {
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);

  /**
   * Creates an account integration, or updates an existing one with the same
   * integration code. Credentials are encrypted at rest and never returned in API
   * responses.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.identity.integrations.create({
   *     credentials:
   *       '{"privateKey":"sk_test_...","publishableKey":"pk_test_...","webhookSecret":"whsec_..."}',
   *     integration_code: 'stripe',
   *     name: 'My Stripe Integration',
   *   });
   * ```
   */
  create(body: IntegrationCreateParams, options?: RequestOptions): APIPromise<AccountIntegration> {
    return this._client.post('/v1/identity/integrations', { body, ...options });
  }

  /**
   * Updates an account integration's name and active status.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.identity.integrations.update(
   *     'ai_0177772eae113431f64d473124',
   *     { name: 'Updated Stripe Integration' },
   *   );
   * ```
   */
  update(
    id: string,
    body: IntegrationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountIntegration> {
    return this._client.put(path`/v1/identity/integrations/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of account integrations for the target account.
   *
   * @example
   * ```ts
   * const listAccountIntegration =
   *   await client.identity.integrations.list();
   * ```
   */
  list(
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountIntegration> {
    return this._client.get('/v1/identity/integrations', { query, ...options });
  }

  /**
   * Deletes an account integration and returns the deleted resource.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.identity.integrations.delete(
   *     'ai_0177772eae113431f64d473124',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountIntegration> {
    return this._client.delete(path`/v1/identity/integrations/${id}`, options);
  }
}

/**
 * Third-party integration connected to an account.
 */
export interface AccountIntegration {
  /**
   * Account integration ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Whether the integration is active.
   */
  is_active: boolean;

  /**
   * Display name of the integration.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_integration';

  /**
   * Integration provider code (e.g. "stripe", "shippo").
   */
  provider: 'stripe' | 'shippo';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create or upsert an account integration.
 */
export interface CreateAccountIntegrationRequest {
  /**
   * Credentials JSON string containing provider-specific keys.
   */
  credentials: string;

  /**
   * Integration provider code (e.g. "stripe", "shippo").
   */
  integration_code: 'stripe' | 'shippo';

  /**
   * Display name of the integration.
   */
  name: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountIntegration {
  /**
   * Resources in this page.
   */
  data: Array<AccountIntegration>;

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
 * Request to update an account integration.
 */
export interface UpdateAccountIntegrationRequest {
  /**
   * Whether the integration is active.
   */
  is_active?: boolean;

  /**
   * Display name of the integration.
   */
  name?: string;
}

export interface IntegrationCreateParams {
  /**
   * Credentials JSON string containing provider-specific keys.
   */
  credentials: string;

  /**
   * Integration provider code (e.g. "stripe", "shippo").
   */
  integration_code: 'stripe' | 'shippo';

  /**
   * Display name of the integration.
   */
  name: string;
}

export interface IntegrationUpdateParams {
  /**
   * Whether the integration is active.
   */
  is_active?: boolean;

  /**
   * Display name of the integration.
   */
  name?: string;
}

export interface IntegrationListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

Integrations.Stripe = Stripe;

export declare namespace Integrations {
  export {
    type AccountIntegration as AccountIntegration,
    type CreateAccountIntegrationRequest as CreateAccountIntegrationRequest,
    type ListAccountIntegration as ListAccountIntegration,
    type UpdateAccountIntegrationRequest as UpdateAccountIntegrationRequest,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
  };

  export {
    Stripe as Stripe,
    type StripePublishableKey as StripePublishableKey,
    type StripeStatus as StripeStatus,
  };
}
