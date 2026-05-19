// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ProductLinesAPI from '../catalog/product-lines';
import * as AccountGroupsAPI from './account-groups';
import * as ItemCategoriesAPI from '../catalog/item-categories/item-categories';
import * as AttributesAPI from '../catalog/properties/attributes';
import * as UnitsAPI from '../catalog/units/units';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage volume discounts.
 */
export class VolumeDiscounts extends APIResource {
  /**
   * Returns a volume discount by ID.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.retrieve(
   *     'quds_01jm4r6700f8nwq3v5hx2d9ktp',
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
   *   await client.sales.volumeDiscounts.update('', {
   *     attribute_ids: ['string'],
   *     category_ids: ['string'],
   *     customer_group_ids: ['string'],
   *     has_attributes: true,
   *     has_categories: true,
   *     has_customer_groups: true,
   *     has_product_lines: true,
   *     has_tiers: true,
   *     has_units: true,
   *     product_line_ids: ['string'],
   *     tiers: [
   *       {
   *         name: '50+ Units',
   *         discount_percentage:
   *           '10.000000000000000000000000000000',
   *         threshold: '50.000000000000000000000000000000',
   *       },
   *     ],
   *     unit_ids: ['string'],
   *     name: 'Updated Bulk Discount',
   *   });
   * ```
   */
  update(id: string, body: VolumeDiscountUpdateParams, options?: RequestOptions): APIPromise<VolumeDiscount> {
    return this._client.patch(path`/v1/sales/volume-discounts/${id}`, { body, ...options });
  }

  /**
   * Deletes a volume discount and all associated tiers and relations.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.delete(
   *     'quds_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VolumeDiscountDeleteResponse> {
    return this._client.delete(path`/v1/sales/volume-discounts/${id}`, options);
  }

  /**
   * Returns a paginated list of volume discounts for the target account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sales.volumeDiscounts.retrieveVolumeDiscounts();
   * ```
   */
  retrieveVolumeDiscounts(
    query: VolumeDiscountRetrieveVolumeDiscountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumeDiscountRetrieveVolumeDiscountsResponse> {
    return this._client.get('/v1/sales/volume-discounts', { query, ...options });
  }

  /**
   * Creates a volume discount for the target account.
   *
   * @example
   * ```ts
   * const volumeDiscount =
   *   await client.sales.volumeDiscounts.volumeDiscounts({
   *     attribute_ids: ['string'],
   *     category_ids: ['string'],
   *     customer_group_ids: ['string'],
   *     name: 'Bulk Order Discount',
   *     product_line_ids: ['string'],
   *     tiers: [
   *       {
   *         name: '100+ Units',
   *         discount_percentage:
   *           '5.000000000000000000000000000000',
   *         threshold: '100.000000000000000000000000000000',
   *       },
   *     ],
   *     unit_ids: ['string'],
   *   });
   * ```
   */
  volumeDiscounts(
    body: VolumeDiscountVolumeDiscountsParams,
    options?: RequestOptions,
  ): APIPromise<VolumeDiscount> {
    return this._client.post('/v1/sales/volume-discounts', { body, ...options });
  }
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
  attributes: AttributesAPI.ListAttribute | null;

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
  customer_groups: AccountGroupsAPI.ListAccountGroup | null;

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
  tiers: VolumeDiscount.Tiers | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

export namespace VolumeDiscount {
  /**
   * List represents a paginated list of resources.
   */
  export interface Tiers {
    /**
     * Resources in this page.
     */
    data: Array<Tiers.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Tiers {
    /**
     * Tier within a volume discount.
     */
    export interface Data {
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
  }
}

export interface VolumeDiscountDeleteResponse {}

/**
 * List represents a paginated list of resources.
 */
export interface VolumeDiscountRetrieveVolumeDiscountsResponse {
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
  page_info: AgentsAPI.PageInfo;
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
   * Attribute IDs to set.
   */
  attribute_ids: Array<string>;

  /**
   * Item category IDs to set.
   */
  category_ids: Array<string>;

  /**
   * Account group IDs to set as customer groups.
   */
  customer_group_ids: Array<string>;

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
   * Product line IDs to set.
   */
  product_line_ids: Array<string>;

  /**
   * Tiers (upsert semantics).
   */
  tiers: Array<VolumeDiscountUpdateParams.Tier>;

  /**
   * Unit IDs to set as acceptable units.
   */
  unit_ids: Array<string>;

  /**
   * Display name.
   */
  name?: string;
}

export namespace VolumeDiscountUpdateParams {
  /**
   * Volume discount tier to upsert.
   */
  export interface Tier {
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
}

export interface VolumeDiscountRetrieveVolumeDiscountsParams {
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

export interface VolumeDiscountVolumeDiscountsParams {
  /**
   * Attribute IDs to associate.
   */
  attribute_ids: Array<string>;

  /**
   * Item category IDs to associate.
   */
  category_ids: Array<string>;

  /**
   * Account group IDs to associate as customer groups.
   */
  customer_group_ids: Array<string>;

  /**
   * Display name.
   */
  name: string;

  /**
   * Product line IDs to associate.
   */
  product_line_ids: Array<string>;

  /**
   * Tiers for this volume discount.
   */
  tiers: Array<VolumeDiscountVolumeDiscountsParams.Tier>;

  /**
   * Unit IDs to associate as acceptable units.
   */
  unit_ids: Array<string>;
}

export namespace VolumeDiscountVolumeDiscountsParams {
  /**
   * Volume discount tier to create.
   */
  export interface Tier {
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
}

export declare namespace VolumeDiscounts {
  export {
    type VolumeDiscount as VolumeDiscount,
    type VolumeDiscountDeleteResponse as VolumeDiscountDeleteResponse,
    type VolumeDiscountRetrieveVolumeDiscountsResponse as VolumeDiscountRetrieveVolumeDiscountsResponse,
    type VolumeDiscountRetrieveParams as VolumeDiscountRetrieveParams,
    type VolumeDiscountUpdateParams as VolumeDiscountUpdateParams,
    type VolumeDiscountRetrieveVolumeDiscountsParams as VolumeDiscountRetrieveVolumeDiscountsParams,
    type VolumeDiscountVolumeDiscountsParams as VolumeDiscountVolumeDiscountsParams,
  };
}
