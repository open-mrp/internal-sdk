// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage registration flows.
 */
export class RegistrationFlows extends APIResource {
  /**
   * Creates a registration flow.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.create({
   *     customer_group_ids: ['cgrp_01abc'],
   *     name: 'Wholesale Registration',
   *     payment_term_ids: ['pt_01abc'],
   *     shipping_term_ids: ['st_01abc'],
   *   });
   * ```
   */
  create(body: RegistrationFlowCreateParams, options?: RequestOptions): APIPromise<RegistrationFlow> {
    return this._client.post('/v1/sales/registration-flows', { body, ...options });
  }

  /**
   * Returns a registration flow by ID.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.retrieve(
   *     'rgfw_015273c2a7354d6c3e5ae4e90e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RegistrationFlow> {
    return this._client.get(path`/v1/sales/registration-flows/${id}`, options);
  }

  /**
   * Partially updates a registration flow.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.update(
   *     'rgfw_015273c2a7354d6c3e5ae4e90e',
   *     {
   *       has_customer_group_ids: false,
   *       has_payment_term_ids: false,
   *       has_shipping_term_ids: false,
   *       name: 'Wholesale Registration Updated',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: RegistrationFlowUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationFlow> {
    return this._client.patch(path`/v1/sales/registration-flows/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of registration flows for the current account.
   *
   * @example
   * ```ts
   * const listRegistrationFlow =
   *   await client.sales.registrationFlows.list();
   * ```
   */
  list(
    query: RegistrationFlowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRegistrationFlow> {
    return this._client.get('/v1/sales/registration-flows', { query, ...options });
  }

  /**
   * Deletes a registration flow.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.delete(
   *     'rgfw_015273c2a7354d6c3e5ae4e90e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RegistrationFlowDeleteResponse> {
    return this._client.delete(path`/v1/sales/registration-flows/${id}`, options);
  }

  /**
   * Returns a registration flow by slug.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.retrieveBySlug(
   *     'acme',
   *   );
   * ```
   */
  retrieveBySlug(slug: string, options?: RequestOptions): APIPromise<RegistrationFlow> {
    return this._client.get(path`/v1/sales/registration-flows/by-slug/${slug}`, options);
  }
}

/**
 * Request to create a registration flow.
 */
export interface CreateRegistrationFlowRequest {
  /**
   * Customer group IDs.
   */
  customer_group_ids: Array<string>;

  /**
   * Display name.
   */
  name: string;

  /**
   * Payment term IDs.
   */
  payment_term_ids: Array<string>;

  /**
   * Shipping term IDs.
   */
  shipping_term_ids: Array<string>;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRegistrationFlow {
  /**
   * Resources in this page.
   */
  data: Array<RegistrationFlow>;

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
 * List represents a paginated list of resources.
 */
export interface ListRegistrationFlowOption {
  /**
   * Resources in this page.
   */
  data: Array<RegistrationFlowOption>;

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
 * Registration flow for customer onboarding.
 */
export interface RegistrationFlow {
  /**
   * Registration flow ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  customer_group_options: ListRegistrationFlowOption | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'registration_flow';

  /**
   * List represents a paginated list of resources.
   */
  payment_term_options: ListRegistrationFlowOption | null;

  /**
   * List represents a paginated list of resources.
   */
  shipping_term_options: ListRegistrationFlowOption | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Selectable option within a registration flow.
 */
export interface RegistrationFlowOption {
  /**
   * Registration flow option ID.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'registration_flow_option';
}

/**
 * Request to partially update a registration flow.
 */
export interface UpdateRegistrationFlowRequest {
  /**
   * Whether to replace customer groups.
   */
  has_customer_group_ids: boolean;

  /**
   * Whether to replace payment terms.
   */
  has_payment_term_ids: boolean;

  /**
   * Whether to replace shipping terms.
   */
  has_shipping_term_ids: boolean;

  /**
   * Customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Shipping term IDs.
   */
  shipping_term_ids?: Array<string>;
}

export interface RegistrationFlowDeleteResponse {}

export interface RegistrationFlowCreateParams {
  /**
   * Customer group IDs.
   */
  customer_group_ids: Array<string>;

  /**
   * Display name.
   */
  name: string;

  /**
   * Payment term IDs.
   */
  payment_term_ids: Array<string>;

  /**
   * Shipping term IDs.
   */
  shipping_term_ids: Array<string>;
}

export interface RegistrationFlowUpdateParams {
  /**
   * Whether to replace customer groups.
   */
  has_customer_group_ids: boolean;

  /**
   * Whether to replace payment terms.
   */
  has_payment_term_ids: boolean;

  /**
   * Whether to replace shipping terms.
   */
  has_shipping_term_ids: boolean;

  /**
   * Customer group IDs.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Payment term IDs.
   */
  payment_term_ids?: Array<string>;

  /**
   * Shipping term IDs.
   */
  shipping_term_ids?: Array<string>;
}

export interface RegistrationFlowListParams {
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

export declare namespace RegistrationFlows {
  export {
    type CreateRegistrationFlowRequest as CreateRegistrationFlowRequest,
    type ListRegistrationFlow as ListRegistrationFlow,
    type ListRegistrationFlowOption as ListRegistrationFlowOption,
    type RegistrationFlow as RegistrationFlow,
    type RegistrationFlowOption as RegistrationFlowOption,
    type UpdateRegistrationFlowRequest as UpdateRegistrationFlowRequest,
    type RegistrationFlowDeleteResponse as RegistrationFlowDeleteResponse,
    type RegistrationFlowCreateParams as RegistrationFlowCreateParams,
    type RegistrationFlowUpdateParams as RegistrationFlowUpdateParams,
    type RegistrationFlowListParams as RegistrationFlowListParams,
  };
}
