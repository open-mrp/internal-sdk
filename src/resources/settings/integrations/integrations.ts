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
   * Creates an account integration, or updates the name and credentials of an
   * existing one with the same integration code.
   *
   * Credentials are validated for the provider, encrypted at rest, and never
   * returned in API responses. An account can have at most one integration per
   * integration code.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.settings.integrations.create({
   *     credentials:
   *       '{"private_key":"sk_test_...","publishable_key":"pk_test_...","webhook_secret":"whsec_..."}',
   *     name: 'My Stripe Integration',
   *     provider: 'stripe',
   *   });
   * ```
   */
  create(body: IntegrationCreateParams, options?: RequestOptions): APIPromise<AccountIntegration> {
    return this._client.post('/v1/settings/integrations', { body, ...options });
  }

  /**
   * Updates an account integration's name and active status.
   *
   * Omitted fields are left unchanged. Credentials cannot be changed with this
   * endpoint; to rotate credentials, call Create Account Integration again with the
   * same integration code.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.settings.integrations.update(
   *     'acig_0177772eae113431f64d473124',
   *     { name: 'Updated Stripe Integration' },
   *   );
   * ```
   */
  update(
    id: string,
    body: IntegrationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountIntegration> {
    return this._client.put(path`/v1/settings/integrations/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of account integrations for the target account.
   *
   * @example
   * ```ts
   * const listAccountIntegration =
   *   await client.settings.integrations.list();
   * ```
   */
  list(
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListAccountIntegration> {
    return this._client.get('/v1/settings/integrations', { query, ...options });
  }

  /**
   * Deletes an account integration and returns the deleted resource.
   *
   * @example
   * ```ts
   * const accountIntegration =
   *   await client.settings.integrations.delete(
   *     'acig_0177772eae113431f64d473124',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AccountIntegration> {
    return this._client.delete(path`/v1/settings/integrations/${id}`, options);
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
   * Display name of the integration.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_integration';

  /**
   * Integration provider code.
   *
   * - `stripe`: Stripe payment processing.
   * - `shippo`: Shippo shipping and label generation.
   * - `hubspot`: HubSpot CRM.
   */
  provider: 'stripe' | 'shippo' | 'hubspot';

  /**
   * Lifecycle status of the integration.
   *
   * Integrations are created `active`. Setting an integration to `inactive` keeps
   * its stored credentials but stops it from being used (for example, the Stripe
   * publishable key cannot be retrieved while the Stripe integration is inactive).
   */
  status: 'active' | 'inactive';

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
   * JSON string containing the provider's credentials.
   *
   * Required keys depend on the provider:
   *
   * - `stripe`: `private_key` (`sk_...`), `publishable_key` (`pk_...`), and
   *   `webhook_secret` (`whsec_...`).
   * - `shippo`: `api_key` (`shippo_live_...` or `shippo_test_...`).
   * - `hubspot`: `access_token` (`pat-...`).
   *
   * Sandbox accounts must use test keys and production accounts must use live keys;
   * credentials that do not match are rejected.
   */
  credentials: string;

  /**
   * Display name of the integration.
   */
  name: string;

  /**
   * Integration provider code.
   *
   * - `stripe`: Stripe payment processing.
   * - `shippo`: Shippo shipping and label generation.
   * - `hubspot`: HubSpot CRM.
   */
  provider: 'stripe' | 'shippo' | 'hubspot';
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
   * Display name of the integration.
   */
  name?: string;

  /**
   * Lifecycle status of the integration.
   *
   * Set to `inactive` to deactivate the integration without deleting its stored
   * credentials.
   */
  status?: 'active' | 'inactive';
}

export interface IntegrationCreateParams {
  /**
   * JSON string containing the provider's credentials.
   *
   * Required keys depend on the provider:
   *
   * - `stripe`: `private_key` (`sk_...`), `publishable_key` (`pk_...`), and
   *   `webhook_secret` (`whsec_...`).
   * - `shippo`: `api_key` (`shippo_live_...` or `shippo_test_...`).
   * - `hubspot`: `access_token` (`pat-...`).
   *
   * Sandbox accounts must use test keys and production accounts must use live keys;
   * credentials that do not match are rejected.
   */
  credentials: string;

  /**
   * Display name of the integration.
   */
  name: string;

  /**
   * Integration provider code.
   *
   * - `stripe`: Stripe payment processing.
   * - `shippo`: Shippo shipping and label generation.
   * - `hubspot`: HubSpot CRM.
   */
  provider: 'stripe' | 'shippo' | 'hubspot';
}

export interface IntegrationUpdateParams {
  /**
   * Display name of the integration.
   */
  name?: string;

  /**
   * Lifecycle status of the integration.
   *
   * Set to `inactive` to deactivate the integration without deleting its stored
   * credentials.
   */
  status?: 'active' | 'inactive';
}

export interface IntegrationListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
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
