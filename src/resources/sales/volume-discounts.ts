// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountPricesAPI from './account-prices';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
import * as CustomersAPI from './customers/customers';
import * as AccountGroupsAPI from './product-line-access/account-groups';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage volume discounts.
 */
export class VolumeDiscounts extends APIResource {
  /**
   * Creates a volume discount for the target account.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.create({
   *     name: 'Bulk Order Discount',
   *     tiers: [
   *       {
   *         name: '100+ Units',
   *         discount_percentage:
   *           '5.000000000000000000000000000000',
   *         threshold: '100.000000000000000000000000000000',
   *       },
   *     ],
   *   });
   * ```
   */
  create(body: VolumeDiscountCreateParams, options?: RequestOptions): APIPromise<VolumeDiscount> {
    return this._client.post('/v1/sales/volume-discounts', { body, ...options });
  }

  /**
   * Returns a volume discount by ID.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.retrieve(
   *     'quds_01b64658b647f3c5266b8f6ae1',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: VolumeDiscountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumeDiscount> {
    return this._client.get(path`/v1/sales/volume-discounts/${id}`, { query, ...options });
  }

  /**
   * Partially updates a volume discount. Tiers use upsert semantics and relations
   * are replaced when the corresponding has\_\* flag is true.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.update(
   *     'quds_01b64658b647f3c5266b8f6ae1',
   *     {
   *       has_attributes: false,
   *       has_categories: false,
   *       has_customer_groups: false,
   *       has_product_lines: false,
   *       has_tiers: true,
   *       has_units: false,
   *       name: 'Updated Bulk Discount',
   *       tiers: [
   *         {
   *           name: '50+ Units',
   *           discount_percentage:
   *             '10.000000000000000000000000000000',
   *           threshold: '50.000000000000000000000000000000',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(id: string, body: VolumeDiscountUpdateParams, options?: RequestOptions): APIPromise<VolumeDiscount> {
    return this._client.patch(path`/v1/sales/volume-discounts/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of volume discounts for the target account.
   *
   * @example
   * ```ts
   * const listVolumeDiscount =
   *   await client.sales.volumeDiscounts.list();
   * ```
   */
  list(
    query: VolumeDiscountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListVolumeDiscount> {
    return this._client.get('/v1/sales/volume-discounts', { query, ...options });
  }

  /**
   * Deletes a volume discount and all associated tiers and relations.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.delete(
   *     'quds_01b64658b647f3c5266b8f6ae1',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VolumeDiscountDeleteResponse> {
    return this._client.delete(path`/v1/sales/volume-discounts/${id}`, options);
  }
}

/**
 * Request to create a volume discount.
 */
export interface CreateVolumeDiscountRequest {
  /**
   * Display name.
   */
  name: string;

  /**
   * Tiers for this volume discount.
   */
  tiers: Array<CreateVolumeDiscountTierInput>;

  /**
   * Attribute IDs to associate.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to associate.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to associate as customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Product line IDs to associate.
   */
  product_line_ids?: Array<string>;

  /**
   * Unit IDs to associate as acceptable units.
   */
  unit_ids?: Array<string>;
}

/**
 * Volume discount tier to create.
 */
export interface CreateVolumeDiscountTierInput {
  /**
   * Discount percentage as a decimal string.
   */
  discount_percentage: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Quantity threshold as a decimal string.
   */
  threshold: string;

  /**
   * Parent tier ID for tier chaining.
   */
  parent_tier_id?: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListUnit {
  /**
   * Resources in this page.
   */
  data: Array<AccountUsersAPI.Unit>;

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
export interface ListVolumeDiscount {
  /**
   * Resources in this page.
   */
  data: Array<VolumeDiscount>;

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
export interface ListVolumeDiscountTier {
  /**
   * Resources in this page.
   */
  data: Array<VolumeDiscountTier>;

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
 * Request to partially update a volume discount.
 */
export interface UpdateVolumeDiscountRequest {
  /**
   * Whether to replace attributes.
   */
  has_attributes: boolean;

  /**
   * Whether to replace categories.
   */
  has_categories: boolean;

  /**
   * Whether to replace customer groups.
   */
  has_customer_groups: boolean;

  /**
   * Whether to replace product lines.
   */
  has_product_lines: boolean;

  /**
   * Whether to replace tiers.
   */
  has_tiers: boolean;

  /**
   * Whether to replace units.
   */
  has_units: boolean;

  /**
   * Attribute IDs to set.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to set.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to set as customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Product line IDs to set.
   */
  product_line_ids?: Array<string>;

  /**
   * Tiers (upsert semantics).
   */
  tiers?: Array<UpdateVolumeDiscountTierInput>;

  /**
   * Unit IDs to set as acceptable units.
   */
  unit_ids?: Array<string>;
}

/**
 * Volume discount tier to upsert.
 */
export interface UpdateVolumeDiscountTierInput {
  /**
   * Existing tier ID. Omit for new tiers.
   */
  id?: string;

  /**
   * Discount percentage as a decimal string.
   */
  discount_percentage?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Parent tier ID for tier chaining.
   */
  parent_tier_id?: string;

  /**
   * Quantity threshold as a decimal string.
   */
  threshold?: string;
}

/**
 * Volume discount with tiered pricing.
 */
export interface VolumeDiscount {
  /**
   * Volume discount ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  acceptable_units: ListUnit | null;

  /**
   * List represents a paginated list of resources.
   */
  attributes: AccountUsersAPI.ListAttribute | null;

  /**
   * List represents a paginated list of resources.
   */
  categories: AccountPricesAPI.ListItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  customer_groups: CustomersAPI.ListAccountGroup | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'volume_discount';

  /**
   * List represents a paginated list of resources.
   */
  product_lines: AccountGroupsAPI.ListProductLine | null;

  /**
   * List represents a paginated list of resources.
   */
  tiers: ListVolumeDiscountTier | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Tier within a volume discount.
 */
export interface VolumeDiscountTier {
  /**
   * Volume discount tier ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Discount percentage as a decimal string.
   */
  discount_percentage: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'volume_discount_tier';

  /**
   * Quantity threshold as a decimal string.
   */
  threshold: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export interface VolumeDiscountDeleteResponse {}

export interface VolumeDiscountCreateParams {
  /**
   * Display name.
   */
  name: string;

  /**
   * Tiers for this volume discount.
   */
  tiers: Array<CreateVolumeDiscountTierInput>;

  /**
   * Attribute IDs to associate.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to associate.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to associate as customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Product line IDs to associate.
   */
  product_line_ids?: Array<string>;

  /**
   * Unit IDs to associate as acceptable units.
   */
  unit_ids?: Array<string>;
}

export interface VolumeDiscountRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'customer_groups' | 'product_lines' | 'categories' | 'attributes' | 'acceptable_units'>;
}

export interface VolumeDiscountUpdateParams {
  /**
   * Whether to replace attributes.
   */
  has_attributes: boolean;

  /**
   * Whether to replace categories.
   */
  has_categories: boolean;

  /**
   * Whether to replace customer groups.
   */
  has_customer_groups: boolean;

  /**
   * Whether to replace product lines.
   */
  has_product_lines: boolean;

  /**
   * Whether to replace tiers.
   */
  has_tiers: boolean;

  /**
   * Whether to replace units.
   */
  has_units: boolean;

  /**
   * Attribute IDs to set.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to set.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to set as customer groups.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Product line IDs to set.
   */
  product_line_ids?: Array<string>;

  /**
   * Tiers (upsert semantics).
   */
  tiers?: Array<UpdateVolumeDiscountTierInput>;

  /**
   * Unit IDs to set as acceptable units.
   */
  unit_ids?: Array<string>;
}

export interface VolumeDiscountListParams {
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

export declare namespace VolumeDiscounts {
  export {
    type CreateVolumeDiscountRequest as CreateVolumeDiscountRequest,
    type CreateVolumeDiscountTierInput as CreateVolumeDiscountTierInput,
    type ListUnit as ListUnit,
    type ListVolumeDiscount as ListVolumeDiscount,
    type ListVolumeDiscountTier as ListVolumeDiscountTier,
    type UpdateVolumeDiscountRequest as UpdateVolumeDiscountRequest,
    type UpdateVolumeDiscountTierInput as UpdateVolumeDiscountTierInput,
    type VolumeDiscount as VolumeDiscount,
    type VolumeDiscountTier as VolumeDiscountTier,
    type VolumeDiscountDeleteResponse as VolumeDiscountDeleteResponse,
    type VolumeDiscountCreateParams as VolumeDiscountCreateParams,
    type VolumeDiscountRetrieveParams as VolumeDiscountRetrieveParams,
    type VolumeDiscountUpdateParams as VolumeDiscountUpdateParams,
    type VolumeDiscountListParams as VolumeDiscountListParams,
  };
}
