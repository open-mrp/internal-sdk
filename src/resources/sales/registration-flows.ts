// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage registration flows.
 */
export class RegistrationFlows extends APIResource {
  /**
   * Returns a registration flow by slug.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.retrieve('slug');
   * ```
   */
  retrieve(slug: string, options?: RequestOptions): APIPromise<RegistrationFlow> {
    return this._client.get(path`/v1/sales/registration-flows/by-slug/${slug}`, options);
  }

  /**
   * Partially updates a registration flow.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.update('id', {
   *     customer_group_ids: ['string'],
   *     has_customer_group_ids: true,
   *     has_payment_term_ids: true,
   *     has_shipping_term_ids: true,
   *     payment_term_ids: ['string'],
   *     shipping_term_ids: ['string'],
   *     name: 'Wholesale Registration Updated',
   *   });
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
   * Deletes a registration flow.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RegistrationFlowDeleteResponse> {
    return this._client.delete(path`/v1/sales/registration-flows/${id}`, options);
  }

  /**
   * Creates a registration flow.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.registrationFlows({
   *     customer_group_ids: ['cgrp_01abc'],
   *     name: 'Wholesale Registration',
   *     payment_term_ids: ['pt_01abc'],
   *     shipping_term_ids: ['st_01abc'],
   *   });
   * ```
   */
  registrationFlows(
    body: RegistrationFlowRegistrationFlowsParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationFlow> {
    return this._client.post('/v1/sales/registration-flows', { body, ...options });
  }

  /**
   * Returns a paginated list of registration flows for the current account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.registrationFlows.retrieveRegistrationFlows();
   * ```
   */
  retrieveRegistrationFlows(
    query: RegistrationFlowRetrieveRegistrationFlowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegistrationFlowRetrieveRegistrationFlowsResponse> {
    return this._client.get('/v1/sales/registration-flows', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListRegistrationFlowOption {
  /**
   * Resources in this page.
   */
  data: Array<ListRegistrationFlowOption.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ListRegistrationFlowOption {
  /**
   * Selectable option within a registration flow.
   */
  export interface Data {
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

export interface RegistrationFlowDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface RegistrationFlowRetrieveRegistrationFlowsResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface RegistrationFlowUpdateParams {
  /**
   * Customer group IDs.
   */
  customer_group_ids: Array<string>;

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
   * Payment term IDs.
   */
  payment_term_ids: Array<string>;

  /**
   * Shipping term IDs.
   */
  shipping_term_ids: Array<string>;

  /**
   * Display name.
   */
  name?: string;
}

export interface RegistrationFlowRegistrationFlowsParams {
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

export interface RegistrationFlowRetrieveRegistrationFlowsParams {
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
    type ListRegistrationFlowOption as ListRegistrationFlowOption,
    type RegistrationFlow as RegistrationFlow,
    type RegistrationFlowDeleteResponse as RegistrationFlowDeleteResponse,
    type RegistrationFlowRetrieveRegistrationFlowsResponse as RegistrationFlowRetrieveRegistrationFlowsResponse,
    type RegistrationFlowUpdateParams as RegistrationFlowUpdateParams,
    type RegistrationFlowRegistrationFlowsParams as RegistrationFlowRegistrationFlowsParams,
    type RegistrationFlowRetrieveRegistrationFlowsParams as RegistrationFlowRetrieveRegistrationFlowsParams,
  };
}
