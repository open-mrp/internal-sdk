// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductLinesAPI from '../catalog/product-lines';
import * as EdiRunsAPI from '../operations/edi-runs';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as ActionsAPI from '../catalog/products/actions';
import * as UnitsAPI from '../catalog/units/units';
import * as ShipmentsActionsAPI from '../operations/shipments/actions';
import * as LinesAPI from '../operations/shipments/lines';
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
 * Account group resource.
 */
export interface AccountGroup {
  /**
   * Account group ID.
   */
  id: string;

  /**
   * Commission policy.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Description.
   */
  description: string | null;

  /**
   * Freight policy.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'account_group';

  /**
   * Account group type.
   */
  type: 'pricing_group' | 'type_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
 * Value option within a property.
 */
export interface Attribute {
  /**
   * Attribute ID.
   */
  id: string;

  /**
   * Color code.
   */
  color: 'blue' | 'brown' | 'default' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Resource type identifier.
   */
  object: 'attribute';

  /**
   * Property that groups attributes.
   */
  property: LinesAPI.Property | null;

  /**
   * Display order.
   */
  sort_order: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Attribute value.
   */
  value: string;
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
 * ItemCategory resource.
 */
export interface ItemCategory {
  /**
   * Item category ID.
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
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item_category';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * List represents a paginated list of resources.
   */
  properties: LinesAPI.ListProperty | null;

  /**
   * Item category type.
   */
  type: 'material_category' | 'product_category';

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: LinesAPI.UnitGroup | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListAccountGroup {
  /**
   * Resources in this page.
   */
  data: Array<ShipmentsActionsAPI.AccountGroup>;

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
export interface ListAttribute {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.Attribute>;

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
export interface ListItemCategory {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.ItemCategory>;

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
export interface ListProductLine {
  /**
   * Resources in this page.
   */
  data: Array<ActionsAPI.ProductLine>;

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
export interface ListProperty {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.Property>;

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
export interface ListUnit {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.Unit>;

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
export interface ListUnitGroupUnit {
  /**
   * Resources in this page.
   */
  data: Array<LinesAPI.UnitGroupUnit>;

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
  page_info: EdiRunsAPI.PageInfo;
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
 * Product line resource.
 */
export interface ProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Commission policy of products in this product line.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Description.
   */
  description: string | null;

  /**
   * Freight policy for all items in this product line.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'product_line';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: LinesAPI.UnitGroup | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

/**
 * Property that groups attributes.
 */
export interface Property {
  /**
   * Property ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: LinesAPI.ListAttribute | null;

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
  object: 'property';

  /**
   * Last update timestamp.
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
 * UnitGroup is a unit group resource.
 */
export interface UnitGroup {
  /**
   * Unit group ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  associated_units: LinesAPI.ListUnitGroupUnit | null;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  base_unit: LinesAPI.Unit | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'unit_group';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: LinesAPI.Owner | null;

  /**
   * Unit type.
   */
  type: 'currency' | 'quantity' | 'time' | 'mass' | 'volume' | 'length' | 'temperature' | 'area';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * UnitGroupUnit is an associated unit within a unit group.
 */
export interface UnitGroupUnit {
  /**
   * Unit group unit ID.
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
   * Fixed discount amount.
   */
  discount_fixed: number;

  /**
   * Discount percentage.
   */
  discount_percentage: number;

  /**
   * Resource type identifier.
   */
  object: 'unit_group_unit';

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  unit: LinesAPI.Unit | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
  acceptable_units: UnitsAPI.ListUnit | null;

  /**
   * List represents a paginated list of resources.
   */
  attributes: LinesAPI.ListAttribute | null;

  /**
   * List represents a paginated list of resources.
   */
  categories: ItemCategoriesAPI.ListItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  customer_groups: ShipmentsActionsAPI.ListAccountGroup | null;

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
  product_lines: ProductLinesAPI.ListProductLine | null;

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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountGroup as AccountGroup,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Attribute as Attribute,
    type CreateVolumeDiscountRequest as CreateVolumeDiscountRequest,
    type CreateVolumeDiscountTierInput as CreateVolumeDiscountTierInput,
    type Geolocation as Geolocation,
    type ItemCategory as ItemCategory,
    type ListAccountGroup as ListAccountGroup,
    type ListAttribute as ListAttribute,
    type ListItemCategory as ListItemCategory,
    type ListProductLine as ListProductLine,
    type ListProperty as ListProperty,
    type ListUnit as ListUnit,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type ListVolumeDiscount as ListVolumeDiscount,
    type ListVolumeDiscountTier as ListVolumeDiscountTier,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type ProductLine as ProductLine,
    type Property as Property,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
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
