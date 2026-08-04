// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as CustomersAPI from '../sales/customers/customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage payment terms.
 */
export class PaymentTerms extends APIResource {
  /**
   * Creates a payment term.
   *
   * The new term is owned by your account and starts with status `active`.
   *
   * This endpoint requires the permission: `payment_terms:create`.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.create({
   *     name: 'Net 30',
   *   });
   * ```
   */
  create(params: PaymentTermCreateParams, options?: RequestOptions): APIPromise<CustomersAPI.PaymentTerm> {
    const { include, ...body } = params;
    return this._client.post('/v1/finance/payment-terms', { query: { include }, body, ...options });
  }

  /**
   * Returns a payment term by ID.
   *
   * Both payment terms created by your account and Augno-provided system defaults
   * can be retrieved.
   *
   * This endpoint requires the permission: `payment_terms:read`.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.retrieve(
   *     'pytm_skssmsy21lem',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: PaymentTermRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.PaymentTerm> {
    return this._client.get(path`/v1/finance/payment-terms/${id}`, { query, ...options });
  }

  /**
   * Partially updates a payment term.
   *
   * Only payment terms created by your account can be updated; system-owned default
   * terms cannot be.
   *
   * This endpoint requires the permission: `payment_terms:update`.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.update(
   *     'pytm_skssmsy21lem',
   *     { name: 'Net 60' },
   *   );
   * ```
   */
  update(
    id: string,
    params: PaymentTermUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.PaymentTerm> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/finance/payment-terms/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of payment terms.
   *
   * The list includes both payment terms created by your account and Augno-provided
   * system defaults.
   *
   * This endpoint requires the permission: `payment_terms:read`.
   *
   * @example
   * ```ts
   * const listPaymentTerm =
   *   await client.finance.paymentTerms.list();
   * ```
   */
  list(
    query: PaymentTermListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListPaymentTerm> {
    return this._client.get('/v1/finance/payment-terms', { query, ...options });
  }

  /**
   * Deletes a payment term.
   *
   * Only payment terms created by your account can be deleted; system-owned default
   * terms cannot be.
   *
   * This endpoint requires the permission: `payment_terms:delete`.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.delete(
   *     'pytm_skssmsy21lem',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PaymentTermDeleteResponse> {
    return this._client.delete(path`/v1/finance/payment-terms/${id}`, options);
  }
}

/**
 * Request to create a payment term.
 */
export interface CreatePaymentTermRequest {
  /**
   * Display name (e.g. `Net 30`).
   *
   * Must be unique among the payment terms visible to your account, including system
   * defaults.
   */
  name: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPaymentTerm {
  /**
   * Resources in this page.
   */
  data: Array<CustomersAPI.PaymentTerm>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to partially update a payment term.
 */
export interface UpdatePaymentTermRequest {
  /**
   * New display name for the payment term.
   *
   * Must be unique among the payment terms visible to your account, including system
   * defaults.
   */
  name?: string;
}

export interface PaymentTermDeleteResponse {}

export interface PaymentTermCreateParams {
  /**
   * Body param: Display name (e.g. `Net 30`).
   *
   * Must be unique among the payment terms visible to your account, including system
   * defaults.
   */
  name: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface PaymentTermRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;
}

export interface PaymentTermUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Body param: New display name for the payment term.
   *
   * Must be unique among the payment terms visible to your account, including system
   * defaults.
   */
  name?: string;
}

export interface PaymentTermListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

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

export declare namespace PaymentTerms {
  export {
    type CreatePaymentTermRequest as CreatePaymentTermRequest,
    type ListPaymentTerm as ListPaymentTerm,
    type UpdatePaymentTermRequest as UpdatePaymentTermRequest,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermListParams as PaymentTermListParams,
  };
}
