// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../../operations/edi-runs';
import * as InventoryChangeLogsAPI from '../../operations/inventory-change-logs/inventory-change-logs';
import * as LinesAPI from '../../operations/shipments/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage sales targets for account users.
 */
export class SalesTargets extends APIResource {
  /**
   * Creates a sales target for an account user.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.sales.accountUsers.salesTargets.create(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *     {
   *       amount_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       amount_value: '50000.00',
   *       end_date: '2026-03-31T00:00:00Z',
   *       start_date: '2026-01-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  create(id: string, body: SalesTargetCreateParams, options?: RequestOptions): APIPromise<SalesTarget> {
    return this._client.post(path`/v1/sales/account-users/${id}/sales-targets`, { body, ...options });
  }

  /**
   * Creates or updates a sales target by ID.
   *
   * @example
   * ```ts
   * const salesTarget =
   *   await client.sales.accountUsers.salesTargets.update(
   *     'example',
   *     {
   *       id: 'acus_01ea9983ddb41dacc44ecf997c',
   *       amount_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       amount_value: '75000.00',
   *       end_date: '2026-06-30T00:00:00Z',
   *       start_date: '2026-04-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  update(
    targetID: string,
    params: SalesTargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SalesTarget> {
    const { id, ...body } = params;
    return this._client.put(path`/v1/sales/account-users/${id}/sales-targets/${targetID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of sales targets for an account user.
   *
   * @example
   * ```ts
   * const listSalesTarget =
   *   await client.sales.accountUsers.salesTargets.list(
   *     'acus_01ea9983ddb41dacc44ecf997c',
   *   );
   * ```
   */
  list(
    id: string,
    query: SalesTargetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSalesTarget> {
    return this._client.get(path`/v1/sales/account-users/${id}/sales-targets`, { query, ...options });
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
 * Request to create a sales target.
 */
export interface CreateSalesTargetRequest {
  /**
   * Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * End date.
   */
  end_date: string;

  /**
   * Start date.
   */
  start_date: string;
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
export interface ListSalesTarget {
  /**
   * Resources in this page.
   */
  data: Array<SalesTarget>;

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
 * Sales target for an account user.
 */
export interface SalesTarget {
  /**
   * Sales target ID.
   */
  id: string;

  /**
   * Value with an associated unit.
   */
  amount: LinesAPI.Quantity | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * End date.
   */
  end_at: string;

  /**
   * Resource type identifier.
   */
  object: 'sales_target';

  /**
   * User resource.
   */
  sales_rep: InventoryChangeLogsAPI.User | null;

  /**
   * Start date.
   */
  start_at: string;

  /**
   * Last updated timestamp.
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
 * Request to create or update a sales target.
 */
export interface UpsertSalesTargetRequest {
  /**
   * Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * End date.
   */
  end_date: string;

  /**
   * Start date.
   */
  start_date: string;
}

/**
 * User resource.
 */
export interface User {
  /**
   * User ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * Email verified timestamp, null if unverified.
   */
  email_verified_at: string | null;

  /**
   * Profile image URL.
   */
  image_url: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'user';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Username.
   */
  username: string | null;
}

export interface SalesTargetCreateParams {
  /**
   * Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * End date.
   */
  end_date: string;

  /**
   * Start date.
   */
  start_date: string;
}

export interface SalesTargetUpdateParams {
  /**
   * Path param: Sales rep user ID.
   */
  id: string;

  /**
   * Body param: Amount unit ID.
   */
  amount_unit_id: string;

  /**
   * Body param: Target amount value (decimal string).
   */
  amount_value: string;

  /**
   * Body param: End date.
   */
  end_date: string;

  /**
   * Body param: Start date.
   */
  start_date: string;
}

export interface SalesTargetListParams {
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

export declare namespace SalesTargets {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type CreateSalesTargetRequest as CreateSalesTargetRequest,
    type Geolocation as Geolocation,
    type ListSalesTarget as ListSalesTarget,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Quantity as Quantity,
    type SalesTarget as SalesTarget,
    type Unit as Unit,
    type UpsertSalesTargetRequest as UpsertSalesTargetRequest,
    type User as User,
    type SalesTargetCreateParams as SalesTargetCreateParams,
    type SalesTargetUpdateParams as SalesTargetUpdateParams,
    type SalesTargetListParams as SalesTargetListParams,
  };
}
