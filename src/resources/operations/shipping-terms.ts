// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EdiRunsAPI from './edi-runs';
import * as ActionsAPI from './shipments/actions';
import * as LinesAPI from './shipments/lines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage shipping terms.
 */
export class ShippingTerms extends APIResource {
  /**
   * Creates an account-owned shipping term.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.create({
   *     name: 'Prepaid',
   *     type: 'carrier_rate_freight',
   *     free_shipping_service_level_ids: [],
   *   });
   * ```
   */
  create(params: ShippingTermCreateParams, options?: RequestOptions): APIPromise<ActionsAPI.ShippingTerm> {
    const { include, ...body } = params;
    return this._client.post('/v1/operations/shipping-terms', { query: { include }, body, ...options });
  }

  /**
   * Returns a shipping term by ID.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.retrieve(
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ShippingTermRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.ShippingTerm> {
    return this._client.get(path`/v1/operations/shipping-terms/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account-owned shipping term. Default shipping terms cannot
   * be updated.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.update(
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *     { name: 'Collect' },
   *   );
   * ```
   */
  update(
    id: string,
    params: ShippingTermUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.ShippingTerm> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/operations/shipping-terms/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of shipping terms for the account, including default
   * system shipping terms.
   *
   * @example
   * ```ts
   * const listShippingTerm =
   *   await client.operations.shippingTerms.list();
   * ```
   */
  list(
    query: ShippingTermListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListShippingTerm> {
    return this._client.get('/v1/operations/shipping-terms', { query, ...options });
  }

  /**
   * Deletes an account-owned shipping term. Default shipping terms cannot be
   * deleted.
   *
   * @example
   * ```ts
   * const shippingTerm =
   *   await client.operations.shippingTerms.delete(
   *     'shtm_014341ab4bb5bf94d5b6936f86',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ShippingTermDeleteResponse> {
    return this._client.delete(path`/v1/operations/shipping-terms/${id}`, options);
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
 * Request to create a shipping term.
 */
export interface CreateShippingTermRequest {
  /**
   * Display name.
   */
  name: string;

  /**
   * Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  flat_rate?: QuantityInput | null;

  /**
   * Service level IDs that qualify for free shipping.
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  minimum_order_value?: QuantityInput | null;
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
export interface ListServiceLevel {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.ServiceLevel>;

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
 * List represents a paginated list of resources.
 */
export interface ListShippingTerm {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.ShippingTerm>;

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
 * Value with an associated unit.
 */
export interface Quantity {
  /**
   * Quantity ID.
   */
  id: string;

  /**
   * Formatted value with unit abbreviation (e.g. "$1,234.56" or "100 kg").
   */
  display_value: string;

  /**
   * Resource type identifier.
   */
  object: 'quantity';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: LinesAPI.Unit | null;

  /**
   * Decimal value.
   */
  value: string;
}

/**
 * QuantityInput represents a value with an associated unit for create/update
 * requests.
 */
export interface QuantityInput {
  /**
   * The unit ID for the value.
   */
  unit_id: string;

  /**
   * The decimal value.
   */
  value: string;
}

/**
 * Shipping service level for a carrier.
 */
export interface ServiceLevel {
  /**
   * Service level ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Customer portal visibility.
   */
  customer_portal_visibility: 'visible' | 'hidden';

  /**
   * Default service level for the carrier.
   */
  is_default: boolean;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'service_level';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Service level token.
   */
  service_level_token: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * ShippingTerm resource.
 */
export interface ShippingTerm {
  /**
   * Shipping term ID.
   */
  id: string;

  /**
   * When this shipping term was created.
   */
  created_at: string;

  /**
   * Value with an associated unit.
   */
  flat_rate: LinesAPI.Quantity | null;

  /**
   * List represents a paginated list of resources.
   */
  free_shipping_service_levels: ActionsAPI.ListServiceLevel | null;

  /**
   * Value with an associated unit.
   */
  minimum_order_value: LinesAPI.Quantity | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'shipping_term';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * When this shipping term was last updated.
   */
  updated_at: string;
}

/**
 * Unit of measurement used for conversions and product quantities.
 */
export interface Unit {
  /**
   * Unit ID.
   */
  id: string;

  /**
   * Short abbreviation for the unit (e.g. "g", "kg").
   */
  abbreviation: string;

  /**
   * When this unit was created.
   */
  created_at: string;

  /**
   * Whether this is the base unit for its dimension. Conversion ratios are relative
   * to this unit.
   */
  is_base_unit: boolean;

  /**
   * Display name of the unit (e.g. "Gram", "Kilogram").
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'unit';

  /**
   * Conversion offset denominator. Typically 1. Cannot be zero.
   */
  offset_denominator: string;

  /**
   * Conversion offset numerator, used for temperature-like conversions. Zero for
   * most unit types.
   */
  offset_numerator: string;

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Conversion ratio denominator relative to the base unit in the same dimension.
   * Cannot be zero.
   */
  ratio_denominator: string;

  /**
   * Conversion ratio numerator relative to the base unit in the same dimension.
   */
  ratio_numerator: string;

  /**
   * Unit dimension.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * When this unit was last updated.
   */
  updated_at: string;
}

/**
 * Request to partially update a shipping term. All fields are optional. Absent
 * fields are left unchanged. Send an explicit JSON null for flat_rate,
 * minimum_order_value, or free_shipping_service_level_ids to clear the existing
 * value.
 */
export interface UpdateShippingTermRequest {
  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  flat_rate?: QuantityInput | null;

  /**
   * Service level IDs that qualify for free shipping. Send null to clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  minimum_order_value?: QuantityInput | null;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Shipping term type.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermDeleteResponse {}

export interface ShippingTermCreateParams {
  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Shipping term type.
   */
  type: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  flat_rate?: QuantityInput | null;

  /**
   * Body param: Service level IDs that qualify for free shipping.
   */
  free_shipping_service_level_ids?: Array<string>;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  minimum_order_value?: QuantityInput | null;
}

export interface ShippingTermRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;
}

export interface ShippingTermUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  flat_rate?: QuantityInput | null;

  /**
   * Body param: Service level IDs that qualify for free shipping. Send null to
   * clear.
   */
  free_shipping_service_level_ids?: Array<string> | null;

  /**
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  minimum_order_value?: QuantityInput | null;

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Shipping term type.
   */
  type?: 'free_freight' | 'flat_rate_freight' | 'carrier_rate_freight';
}

export interface ShippingTermListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    'owner' | 'owner.account' | 'flat_rate.unit' | 'minimum_order_value.unit' | 'free_shipping_service_levels'
  >;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace ShippingTerms {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreateShippingTermRequest as CreateShippingTermRequest,
    type Geolocation as Geolocation,
    type ListServiceLevel as ListServiceLevel,
    type ListShippingTerm as ListShippingTerm,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Quantity as Quantity,
    type QuantityInput as QuantityInput,
    type ServiceLevel as ServiceLevel,
    type ShippingTerm as ShippingTerm,
    type Unit as Unit,
    type UpdateShippingTermRequest as UpdateShippingTermRequest,
    type ShippingTermDeleteResponse as ShippingTermDeleteResponse,
    type ShippingTermCreateParams as ShippingTermCreateParams,
    type ShippingTermRetrieveParams as ShippingTermRetrieveParams,
    type ShippingTermUpdateParams as ShippingTermUpdateParams,
    type ShippingTermListParams as ShippingTermListParams,
  };
}
