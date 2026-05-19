// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ProductLinesAPI from '../product-lines';
import * as ItemsAPI from '../items/items';
import * as MaterialsAPI from '../materials/materials';
import * as ActionsAPI from './actions';
import {
  ActionRetrieveExportParams,
  ActionRetrieveExportResponse,
  ActionUpdateValidateParams,
  ActionUpdateValidateResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage products.
 */
export class Products extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a product.
   *
   * @example
   * ```ts
   * const product = await client.catalog.products.create({
   *   attribute_ids: ['string'],
   *   category_id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp',
   *   product_line_id: null,
   *   sku: 'ALM-2024-1001',
   *   type: 'sale',
   * });
   * ```
   */
  create(params: ProductCreateParams, options?: RequestOptions): APIPromise<Product> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/products', { query: { include }, body, ...options });
  }

  /**
   * Returns a product by ID.
   *
   * @example
   * ```ts
   * const product = await client.catalog.products.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    return this._client.get(path`/v1/catalog/products/${id}`, { query, ...options });
  }

  /**
   * Partially updates a product.
   *
   * @example
   * ```ts
   * const product = await client.catalog.products.update('id', {
   *   sku: 'SKU-002',
   * });
   * ```
   */
  update(
    id: string,
    params: ProductUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/products/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of products for the target account.
   *
   * @example
   * ```ts
   * const products = await client.catalog.products.list();
   * ```
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get('/v1/catalog/products', { query, ...options });
  }

  /**
   * Soft-deletes a product and returns the deleted product.
   *
   * @example
   * ```ts
   * const product = await client.catalog.products.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ProductDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { include } = params ?? {};
    return this._client.delete(path`/v1/catalog/products/${id}`, { query: { include }, ...options });
  }
}

/**
 * Product with expandable item, product line, and product type.
 */
export interface Product {
  /**
   * Product ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: ItemsAPI.Item | null;

  /**
   * Resource type identifier.
   */
  object: 'product';

  /**
   * Product portal visibility.
   */
  portal_visibility: 'visible' | 'hidden';

  /**
   * Product line resource.
   */
  product_line: ProductLinesAPI.ProductLine | null;

  /**
   * Product type code.
   */
  type: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ProductListResponse {
  /**
   * Resources in this page.
   */
  data: Array<Product>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface ProductCreateParams {
  /**
   * Body param: Attribute IDs to connect to the product at creation time.
   */
  attribute_ids: Array<string>;

  /**
   * Body param: Category ID.
   */
  category_id: string;

  /**
   * Body param: Product line ID.
   */
  product_line_id: string | null;

  /**
   * Body param: SKU.
   */
  sku: string;

  /**
   * Body param: Product type code (e.g. sale, sample).
   */
  type: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'product_line'
    | 'product_line.unit_group'
    | 'product_line.unit_group.base_unit'
    | 'product_line.unit_group.associated_units'
    | 'product_line.unit_group.associated_units.unit'
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;

  /**
   * Body param: Initial burn rate (waste / scrap). No currency requirement.
   */
  burn_rate?: MaterialsAPI.RateInput | null;

  /**
   * Body param: Description.
   */
  description?: string | null;

  /**
   * Body param: Notes.
   */
  notes?: string | null;

  /**
   * Body param: Whether visible in the customer portal.
   */
  portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: Initial unit cost. Same currency rule as unit_price.
   */
  unit_cost?: MaterialsAPI.RateInput | null;

  /**
   * Body param: Initial unit price. When set, numerator must be a currency unit and
   * denominator must not be.
   */
  unit_price?: MaterialsAPI.RateInput | null;
}

export interface ProductRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'product_line'
    | 'product_line.unit_group'
    | 'product_line.unit_group.base_unit'
    | 'product_line.unit_group.associated_units'
    | 'product_line.unit_group.associated_units.unit'
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;
}

export interface ProductUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'product_line'
    | 'product_line.unit_group'
    | 'product_line.unit_group.base_unit'
    | 'product_line.unit_group.associated_units'
    | 'product_line.unit_group.associated_units.unit'
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;

  /**
   * Body param: Description.
   */
  description?: string | null;

  /**
   * Body param: Notes.
   */
  notes?: string | null;

  /**
   * Body param: Whether visible in the customer portal.
   */
  portal_visibility?: 'visible' | 'hidden';

  /**
   * Body param: SKU.
   */
  sku?: string;

  /**
   * Body param: Updated unit price. Numerator must be a currency unit; denominator
   * must not be.
   */
  unit_price?: MaterialsAPI.RateInput | null;
}

export interface ProductListParams {
  /**
   * Filter by attribute IDs.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by category IDs.
   */
  category_ids?: Array<string>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * End of creation date range.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'product_line'
    | 'product_line.unit_group'
    | 'product_line.unit_group.base_unit'
    | 'product_line.unit_group.associated_units'
    | 'product_line.unit_group.associated_units.unit'
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Filter by customer portal visibility.
   */
  portal_visibility?: 'visible' | 'hidden';

  /**
   * Filter by product line IDs.
   */
  product_line_ids?: Array<string>;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Start of creation date range.
   */
  start_date?: string;
}

export interface ProductDeleteParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'product_line'
    | 'product_line.unit_group'
    | 'product_line.unit_group.base_unit'
    | 'product_line.unit_group.associated_units'
    | 'product_line.unit_group.associated_units.unit'
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.category.unit_group.base_unit'
    | 'item.category.unit_group.associated_units'
    | 'item.category.unit_group.associated_units.unit'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;
}

Products.Actions = Actions;

export declare namespace Products {
  export {
    type Product as Product,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };

  export {
    Actions as Actions,
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionUpdateValidateResponse as ActionUpdateValidateResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
    type ActionUpdateValidateParams as ActionUpdateValidateParams,
  };
}
