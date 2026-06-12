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
   * Creates a volume discount with its tiers and scoping associations.
   *
   * The discount name must be unique within the account; creating a discount with an
   * existing name returns a conflict error.
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
   * Partially updates a volume discount.
   *
   * The tier and association lists are only applied when their corresponding `has_*`
   * flag is `true`, in which case they replace the existing set entirely. Tiers use
   * upsert semantics: tiers with an `id` are updated, tiers without one are created,
   * and existing tiers omitted from the list are deleted.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.update(
   *     'quds_01b64658b647f3c5266b8f6ae1',
   *     {
   *       has_attributes: true,
   *       has_categories: true,
   *       has_customer_groups: true,
   *       has_product_lines: true,
   *       has_tiers: true,
   *       has_units: true,
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
   * Deletes a volume discount along with its tiers and scoping associations.
   *
   * Deletion is permanent; further requests against the deleted ID return an error.
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
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Tiers for this volume discount.
   */
  tiers: Array<CreateVolumeDiscountTierInput>;

  /**
   * Attribute IDs to scope the discount to.
   *
   * When set, an item qualifies only if it has every listed attribute.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to scope the discount to.
   *
   * When empty, all categories qualify.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to scope the discount to specific customer groups.
   *
   * When empty, all customers qualify.
   */
  customer_group_ids?: Array<string>;

  /**
   * Product line IDs to scope the discount to.
   *
   * When empty, all product lines qualify.
   */
  product_line_ids?: Array<string>;

  /**
   * IDs of the units that ordered quantities are measured in when evaluating tier
   * thresholds.
   */
  unit_ids?: Array<string>;
}

/**
 * Volume discount tier to create.
 */
export interface CreateVolumeDiscountTierInput {
  /**
   * Percentage taken off the price once the threshold is met, as a decimal string
   * (e.g. `5` for 5%).
   */
  discount_percentage: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Minimum ordered quantity at which this tier's discount begins to apply, as a
   * decimal string.
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
   * Whether to apply the `attribute_ids` field; when `false`, it is ignored.
   */
  has_attributes: boolean;

  /**
   * Whether to apply the `category_ids` field; when `false`, it is ignored.
   */
  has_categories: boolean;

  /**
   * Whether to apply the `customer_group_ids` field; when `false`, it is ignored.
   */
  has_customer_groups: boolean;

  /**
   * Whether to apply the `product_line_ids` field; when `false`, it is ignored.
   */
  has_product_lines: boolean;

  /**
   * Whether to apply the `tiers` field.
   *
   * When `true`, the discount's tiers are replaced with the contents of `tiers` (an
   * empty list deletes all tiers). When `false`, `tiers` is ignored.
   */
  has_tiers: boolean;

  /**
   * Whether to apply the `unit_ids` field; when `false`, it is ignored.
   */
  has_units: boolean;

  /**
   * Attribute IDs to set.
   *
   * Only applied when `has_attributes` is `true`, in which case they replace the
   * existing set entirely.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to set.
   *
   * Only applied when `has_categories` is `true`, in which case they replace the
   * existing set entirely.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to set as customer groups.
   *
   * Only applied when `has_customer_groups` is `true`, in which case they replace
   * the existing set entirely.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Product line IDs to set.
   *
   * Only applied when `has_product_lines` is `true`, in which case they replace the
   * existing set entirely.
   */
  product_line_ids?: Array<string>;

  /**
   * The full set of tiers for this discount.
   *
   * Only applied when `has_tiers` is `true`. Tiers with an `id` are updated, tiers
   * without an `id` are created, and existing tiers not present in the list are
   * deleted.
   */
  tiers?: Array<UpdateVolumeDiscountTierInput>;

  /**
   * IDs of the units to set as acceptable units.
   *
   * Only applied when `has_units` is `true`, in which case they replace the existing
   * set entirely.
   */
  unit_ids?: Array<string>;
}

/**
 * Volume discount tier to upsert.
 */
export interface UpdateVolumeDiscountTierInput {
  /**
   * ID of an existing tier to update.
   *
   * Omit to create a new tier.
   */
  id?: string;

  /**
   * Percentage taken off the price once the threshold is met, as a decimal string
   * (e.g. `5` for 5%).
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
   * Minimum ordered quantity at which this tier's discount begins to apply, as a
   * decimal string.
   */
  threshold?: string;
}

/**
 * A quantity-based discount with tiered percentage rates.
 *
 * A volume discount reduces the price once the ordered quantity reaches a tier's
 * threshold. The customer group, product line, category, attribute, and acceptable
 * unit associations scope which orders qualify; an empty association list means no
 * restriction on that dimension.
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
   *
   * Must be unique within the account.
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
   * Percentage taken off the price once the threshold is met, as a decimal string.
   *
   * For example, `5` means a 5% discount.
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
   * Minimum ordered quantity at which this tier's discount begins to apply, as a
   * decimal string.
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
   *
   * Must be unique within the account.
   */
  name: string;

  /**
   * Tiers for this volume discount.
   */
  tiers: Array<CreateVolumeDiscountTierInput>;

  /**
   * Attribute IDs to scope the discount to.
   *
   * When set, an item qualifies only if it has every listed attribute.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to scope the discount to.
   *
   * When empty, all categories qualify.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to scope the discount to specific customer groups.
   *
   * When empty, all customers qualify.
   */
  customer_group_ids?: Array<string>;

  /**
   * Product line IDs to scope the discount to.
   *
   * When empty, all product lines qualify.
   */
  product_line_ids?: Array<string>;

  /**
   * IDs of the units that ordered quantities are measured in when evaluating tier
   * thresholds.
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
   * Whether to apply the `attribute_ids` field; when `false`, it is ignored.
   */
  has_attributes: boolean;

  /**
   * Whether to apply the `category_ids` field; when `false`, it is ignored.
   */
  has_categories: boolean;

  /**
   * Whether to apply the `customer_group_ids` field; when `false`, it is ignored.
   */
  has_customer_groups: boolean;

  /**
   * Whether to apply the `product_line_ids` field; when `false`, it is ignored.
   */
  has_product_lines: boolean;

  /**
   * Whether to apply the `tiers` field.
   *
   * When `true`, the discount's tiers are replaced with the contents of `tiers` (an
   * empty list deletes all tiers). When `false`, `tiers` is ignored.
   */
  has_tiers: boolean;

  /**
   * Whether to apply the `unit_ids` field; when `false`, it is ignored.
   */
  has_units: boolean;

  /**
   * Attribute IDs to set.
   *
   * Only applied when `has_attributes` is `true`, in which case they replace the
   * existing set entirely.
   */
  attribute_ids?: Array<string>;

  /**
   * Item category IDs to set.
   *
   * Only applied when `has_categories` is `true`, in which case they replace the
   * existing set entirely.
   */
  category_ids?: Array<string>;

  /**
   * Account group IDs to set as customer groups.
   *
   * Only applied when `has_customer_groups` is `true`, in which case they replace
   * the existing set entirely.
   */
  customer_group_ids?: Array<string>;

  /**
   * Display name.
   *
   * Must be unique within the account.
   */
  name?: string;

  /**
   * Product line IDs to set.
   *
   * Only applied when `has_product_lines` is `true`, in which case they replace the
   * existing set entirely.
   */
  product_line_ids?: Array<string>;

  /**
   * The full set of tiers for this discount.
   *
   * Only applied when `has_tiers` is `true`. Tiers with an `id` are updated, tiers
   * without an `id` are created, and existing tiers not present in the list are
   * deleted.
   */
  tiers?: Array<UpdateVolumeDiscountTierInput>;

  /**
   * IDs of the units to set as acceptable units.
   *
   * Only applied when `has_units` is `true`, in which case they replace the existing
   * set entirely.
   */
  unit_ids?: Array<string>;
}

export interface VolumeDiscountListParams {
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
