// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage payment terms.
 */
export class PaymentTerms extends APIResource {
  /**
   * Returns a payment term by ID.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.retrieve(
   *     'pytm_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: PaymentTermRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentTerm> {
    return this._client.get(path`/v1/finance/payment-terms/${id}`, { query, ...options });
  }

  /**
   * Partially updates a payment term. Default payment terms cannot be updated.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.update(
   *     'pytm_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { name: 'Net 60' },
   *   );
   * ```
   */
  update(
    id: string,
    params: PaymentTermUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentTerm> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/finance/payment-terms/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes a payment term. Default payment terms cannot be deleted.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.delete(
   *     'pytm_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PaymentTermDeleteResponse> {
    return this._client.delete(path`/v1/finance/payment-terms/${id}`, options);
  }

  /**
   * Creates a payment term.
   *
   * @example
   * ```ts
   * const paymentTerm =
   *   await client.finance.paymentTerms.paymentTerms({
   *     name: 'Net 30',
   *   });
   * ```
   */
  paymentTerms(params: PaymentTermPaymentTermsParams, options?: RequestOptions): APIPromise<PaymentTerm> {
    const { include, ...body } = params;
    return this._client.post('/v1/finance/payment-terms', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of payment terms. Includes both account-specific and
   * system default payment terms.
   *
   * @example
   * ```ts
   * const response =
   *   await client.finance.paymentTerms.retrievePaymentTerms();
   * ```
   */
  retrievePaymentTerms(
    query: PaymentTermRetrievePaymentTermsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentTermRetrievePaymentTermsResponse> {
    return this._client.get('/v1/finance/payment-terms', { query, ...options });
  }
}

/**
 * Payment term resource.
 */
export interface PaymentTerm {
  /**
   * Payment term ID.
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
  object: 'payment_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * Payment term status.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export interface PaymentTermDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface PaymentTermRetrievePaymentTermsResponse {
  /**
   * Resources in this page.
   */
  data: Array<PaymentTerm>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
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

export interface PaymentTermPaymentTermsParams {
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

export interface PaymentTermRetrievePaymentTermsParams {
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
    type PaymentTerm as PaymentTerm,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermRetrievePaymentTermsResponse as PaymentTermRetrievePaymentTermsResponse,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermPaymentTermsParams as PaymentTermPaymentTermsParams,
    type PaymentTermRetrievePaymentTermsParams as PaymentTermRetrievePaymentTermsParams,
  };
}
