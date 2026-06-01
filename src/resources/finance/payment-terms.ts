// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as ActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
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
  create(params: PaymentTermCreateParams, options?: RequestOptions): APIPromise<ActionsAPI.PaymentTerm> {
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
  ): APIPromise<ActionsAPI.PaymentTerm> {
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
  ): APIPromise<ActionsAPI.PaymentTerm> {
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
 * Request to create a payment term.
 */
export interface CreatePaymentTermRequest {
  /**
   * Display name (e.g. "Net 30").
   */
  name: string;
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
export interface ListPaymentTerm {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.PaymentTerm>;

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
 * Owner describes the provenance of a resource.
 */
export interface Owner {
  /**
   * Account with optional branding and portal sub-resources.
   */
  account: LinesAPI.Account | null;

  /**
   * Resource type identifier.
   */
  object: 'owner';

  /**
   * The owner type: "system" for platform defaults, "account" for account-owned
   * resources.
   */
  type: 'system' | 'account';
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
  owner: LinesAPI.Owner | null;

  /**
   * Payment term status.
   */
  status: 'active' | 'inactive';

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreatePaymentTermRequest as CreatePaymentTermRequest,
    type Geolocation as Geolocation,
    type ListPaymentTerm as ListPaymentTerm,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type PaymentTerm as PaymentTerm,
    type UpdatePaymentTermRequest as UpdatePaymentTermRequest,
    type PaymentTermDeleteResponse as PaymentTermDeleteResponse,
    type PaymentTermCreateParams as PaymentTermCreateParams,
    type PaymentTermRetrieveParams as PaymentTermRetrieveParams,
    type PaymentTermUpdateParams as PaymentTermUpdateParams,
    type PaymentTermListParams as PaymentTermListParams,
  };
}
