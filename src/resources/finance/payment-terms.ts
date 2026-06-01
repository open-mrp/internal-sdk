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
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.retrieve(
   *     'pytm_018694d6601ea771cd1b52e890',
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
   * Partially updates a payment term. Default payment terms cannot be updated.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.update(
   *     'pytm_018694d6601ea771cd1b52e890',
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
   * Returns a paginated list of payment terms. Includes both account-specific and
   * system default payment terms.
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
   * Deletes a payment term. Default payment terms cannot be deleted.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.delete(
   *     'pytm_018694d6601ea771cd1b52e890',
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
   * Display name (e.g. "Net 30").
   */
  name: string;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Request to partially update a payment term.
 */
export interface UpdatePaymentTermRequest {
  /**
   * Display name.
   */
  name?: string;
}

export interface PaymentTermDeleteResponse {}

export interface PaymentTermCreateParams {
  /**
   * Body param: Display name (e.g. "Net 30").
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
   * Body param: Display name.
   */
  name?: string;
}

export interface PaymentTermListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
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
