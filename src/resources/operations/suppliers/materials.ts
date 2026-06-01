// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../edi-runs';
import * as LinesAPI from '../shipments/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage supplier material associations.
 */
export class Materials extends APIResource {
  /**
   * Creates a supplier material association.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.create(
   *     'example',
   *     {
   *       is_active: true,
   *       material_id: 'ml_014613b8f7959a091d8cc0cef4',
   *       supplier_part_number: 'SUP-PART-001',
   *     },
   *   );
   * ```
   */
  create(
    supplierID: string,
    body: MaterialCreateParams,
    options?: RequestOptions,
  ): APIPromise<SupplierMaterial> {
    return this._client.post(path`/v1/operations/suppliers/${supplierID}/materials`, { body, ...options });
  }

  /**
   * Returns a supplier material by ID.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.retrieve(
   *     'ml_014613b8f7959a091d8cc0cef4',
   *     { supplier_id: 'example' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: MaterialRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SupplierMaterial> {
    const { supplier_id, ...query } = params;
    return this._client.get(path`/v1/operations/suppliers/${supplier_id}/materials/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates a supplier material.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.update(
   *     'ml_014613b8f7959a091d8cc0cef4',
   *     {
   *       supplier_id: 'example',
   *       supplier_part_number: 'SUP-PART-002',
   *     },
   *   );
   * ```
   */
  update(id: string, params: MaterialUpdateParams, options?: RequestOptions): APIPromise<SupplierMaterial> {
    const { supplier_id, ...body } = params;
    return this._client.patch(path`/v1/operations/suppliers/${supplier_id}/materials/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of supplier materials.
   *
   * @example
   * ```ts
   * const listSupplierMaterial =
   *   await client.operations.suppliers.materials.list(
   *     'example',
   *   );
   * ```
   */
  list(
    supplierID: string,
    query: MaterialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSupplierMaterial> {
    return this._client.get(path`/v1/operations/suppliers/${supplierID}/materials`, { query, ...options });
  }

  /**
   * Deletes a supplier material association.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.delete(
   *     'ml_014613b8f7959a091d8cc0cef4',
   *     { supplier_id: 'example' },
   *   );
   * ```
   */
  delete(id: string, params: MaterialDeleteParams, options?: RequestOptions): APIPromise<SupplierMaterial> {
    const { supplier_id } = params;
    return this._client.delete(path`/v1/operations/suppliers/${supplier_id}/materials/${id}`, options);
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
 * Request to create a supplier material.
 */
export interface CreateSupplierMaterialRequest {
  /**
   * Active status.
   */
  is_active: boolean | null;

  /**
   * Material ID.
   */
  material_id: string;

  /**
   * Supplier part number for this material.
   */
  supplier_part_number: string;

  /**
   * Supplier description for this material.
   */
  supplier_description?: string;
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
 * Item is an inventory item (product, material, or part).
 */
export interface Item {
  /**
   * Item ID.
   */
  id: string;

  /**
   * List represents a paginated list of resources.
   */
  attributes: LinesAPI.ListAttribute | null;

  /**
   * Rate resource.
   */
  burn_rate: LinesAPI.Rate | null;

  /**
   * ItemCategory resource.
   */
  category: LinesAPI.ItemCategory | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item description.
   */
  description: string | null;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'item';

  /**
   * Stock keeping unit code.
   */
  sku: string;

  /**
   * Item type code.
   */
  type: 'product' | 'material' | 'part';

  /**
   * Rate resource.
   */
  unit_cost: LinesAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_value: LinesAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
export interface ListSupplierMaterial {
  /**
   * Resources in this page.
   */
  data: Array<SupplierMaterial>;

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
 * Material with order point and lead time.
 */
export interface Material {
  /**
   * Material ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: LinesAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  lead_time: LinesAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'material';

  /**
   * Value with an associated unit.
   */
  order_point: LinesAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
 * Rate resource.
 */
export interface Rate {
  /**
   * Rate ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  denominator_unit: LinesAPI.Unit | null;

  /**
   * Human-readable formatted value (e.g. "$25.50 / kg" or "100 kg / hr").
   */
  display_value: string;

  /**
   * Unit of measurement used for conversions and product quantities.
   */
  numerator_unit: LinesAPI.Unit | null;

  /**
   * Resource type identifier.
   */
  object: 'rate';

  /**
   * Last updated timestamp.
   */
  updated_at: string;

  /**
   * Rate value as a decimal string.
   */
  value: string;
}

/**
 * Supplier material resource.
 */
export interface SupplierMaterial {
  /**
   * Supplier material ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Material with order point and lead time.
   */
  material: Material | null;

  /**
   * Resource type identifier.
   */
  object: 'supplier_material';

  /**
   * Whether this supplier material link is active.
   */
  status: 'active' | 'inactive';

  /**
   * Supplier description for this material.
   */
  supplier_description: string | null;

  /**
   * Supplier part number for this material.
   */
  supplier_part_number: string;

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
 * Request to update a supplier material.
 */
export interface UpdateSupplierMaterialRequest {
  /**
   * Active status.
   */
  is_active?: boolean;

  /**
   * Supplier description for this material.
   */
  supplier_description?: string;

  /**
   * Supplier part number for this material.
   */
  supplier_part_number?: string;
}

export interface MaterialCreateParams {
  /**
   * Active status.
   */
  is_active: boolean | null;

  /**
   * Material ID.
   */
  material_id: string;

  /**
   * Supplier part number for this material.
   */
  supplier_part_number: string;

  /**
   * Supplier description for this material.
   */
  supplier_description?: string;
}

export interface MaterialRetrieveParams {
  /**
   * Path param: Supplier ID.
   */
  supplier_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'material' | 'material.item'>;
}

export interface MaterialUpdateParams {
  /**
   * Path param: Supplier ID.
   */
  supplier_id: string;

  /**
   * Body param: Active status.
   */
  is_active?: boolean;

  /**
   * Body param: Supplier description for this material.
   */
  supplier_description?: string;

  /**
   * Body param: Supplier part number for this material.
   */
  supplier_part_number?: string;
}

export interface MaterialListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'material' | 'material.item'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface MaterialDeleteParams {
  /**
   * Supplier ID.
   */
  supplier_id: string;
}

export declare namespace Materials {
  export {
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Address as Address,
    type Attribute as Attribute,
    type CreateSupplierMaterialRequest as CreateSupplierMaterialRequest,
    type Geolocation as Geolocation,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAttribute as ListAttribute,
    type ListProperty as ListProperty,
    type ListSupplierMaterial as ListSupplierMaterial,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Material as Material,
    type Owner as Owner,
    type PageInfo as PageInfo,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type SupplierMaterial as SupplierMaterial,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
    type UpdateSupplierMaterialRequest as UpdateSupplierMaterialRequest,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
    type MaterialDeleteParams as MaterialDeleteParams,
  };
}
