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
   * Creates a registration flow defining the customer group, payment term, and
   * shipping term options offered during customer self-registration.
   *
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.create({
   *     name: 'Wholesale Registration',
   *     customer_group_ids: ['cgrp_01abc'],
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
   * This endpoint requires the permission: `self:read`.
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
   * This endpoint requires the permission: `self:update`.
   *
   * @example
   * ```ts
   * const registrationFlow =
   *   await client.sales.registrationFlows.update(
   *     'rgfw_015273c2a7354d6c3e5ae4e90e',
   *     {
   *       has_customer_group_ids: true,
   *       has_payment_term_ids: true,
   *       has_shipping_term_ids: true,
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
   * This endpoint requires the permission: `self:read`.
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
   * This endpoint requires the permission: `self:update`.
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
   * Returns the registration flow of the account with the given slug.
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
   * Display name of the registration flow.
   */
  name: string;

  /**
   * IDs of the customer groups offered as options in this flow.
   */
  customer_group_ids?: Array<string>;

  /**
   * IDs of the payment terms offered as options in this flow.
   */
  payment_term_ids?: Array<string>;

  /**
   * IDs of the shipping terms offered as options in this flow.
   */
  shipping_term_ids?: Array<string>;
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
 * Configuration for customer self-registration.
 *
 * A registration flow defines which customer groups, payment terms, and shipping
 * terms a customer can choose from when registering with your account.
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
   * Display name of the registration flow.
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
   * ID of the underlying customer group, payment term, or shipping term this option
   * refers to.
   */
  id: string;

  /**
   * Display name of the underlying customer group, payment term, or shipping term.
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
   * Whether to replace the flow's customer group options with `customer_group_ids`.
   *
   * When `true`, existing options are cleared and replaced (an empty list removes
   * all options). When `false` or omitted, customer group options are left
   * unchanged.
   */
  has_customer_group_ids: boolean;

  /**
   * Whether to replace the flow's payment term options with `payment_term_ids`.
   *
   * When `true`, existing options are cleared and replaced (an empty list removes
   * all options). When `false` or omitted, payment term options are left unchanged.
   */
  has_payment_term_ids: boolean;

  /**
   * Whether to replace the flow's shipping term options with `shipping_term_ids`.
   *
   * When `true`, existing options are cleared and replaced (an empty list removes
   * all options). When `false` or omitted, shipping term options are left unchanged.
   */
  has_shipping_term_ids: boolean;

  /**
   * IDs of the customer groups to set as this flow's options.
   *
   * Ignored unless `has_customer_group_ids` is `true`.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name of the registration flow.
   */
  name?: string;

  /**
   * IDs of the payment terms to set as this flow's options.
   *
   * Ignored unless `has_payment_term_ids` is `true`.
   */
  payment_term_ids?: Array<string>;

  /**
   * IDs of the shipping terms to set as this flow's options.
   *
   * Ignored unless `has_shipping_term_ids` is `true`.
   */
  shipping_term_ids?: Array<string>;
}

export interface RegistrationFlowDeleteResponse {}

export interface RegistrationFlowCreateParams {
  /**
   * Display name of the registration flow.
   */
  name: string;

  /**
   * IDs of the customer groups offered as options in this flow.
   */
  customer_group_ids?: Array<string>;

  /**
   * IDs of the payment terms offered as options in this flow.
   */
  payment_term_ids?: Array<string>;

  /**
   * IDs of the shipping terms offered as options in this flow.
   */
  shipping_term_ids?: Array<string>;
}

export interface RegistrationFlowUpdateParams {
  /**
   * Whether to replace the flow's customer group options with `customer_group_ids`.
   *
   * When `true`, existing options are cleared and replaced (an empty list removes
   * all options). When `false` or omitted, customer group options are left
   * unchanged.
   */
  has_customer_group_ids: boolean;

  /**
   * Whether to replace the flow's payment term options with `payment_term_ids`.
   *
   * When `true`, existing options are cleared and replaced (an empty list removes
   * all options). When `false` or omitted, payment term options are left unchanged.
   */
  has_payment_term_ids: boolean;

  /**
   * Whether to replace the flow's shipping term options with `shipping_term_ids`.
   *
   * When `true`, existing options are cleared and replaced (an empty list removes
   * all options). When `false` or omitted, shipping term options are left unchanged.
   */
  has_shipping_term_ids: boolean;

  /**
   * IDs of the customer groups to set as this flow's options.
   *
   * Ignored unless `has_customer_group_ids` is `true`.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name of the registration flow.
   */
  name?: string;

  /**
   * IDs of the payment terms to set as this flow's options.
   *
   * Ignored unless `has_payment_term_ids` is `true`.
   */
  payment_term_ids?: Array<string>;

  /**
   * IDs of the shipping terms to set as this flow's options.
   *
   * Ignored unless `has_shipping_term_ids` is `true`.
   */
  shipping_term_ids?: Array<string>;
}

export interface RegistrationFlowListParams {
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
