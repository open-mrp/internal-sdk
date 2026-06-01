// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesAPI from '../../sales/account-prices';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as MaterialsAPI from '../materials/materials';
import * as ActionsAPI from './actions';
import {
  ActionExportParams,
  ActionValidateParams,
  Actions,
  ValidateProductsRequest,
  ValidateProductsResponse,
} from './actions';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
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
   *   category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   product_line_id: 'product_line_id',
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
   *   'pd_013c29ab3f1518d0004094c316',
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
   * const product = await client.catalog.products.update(
   *   'pd_013c29ab3f1518d0004094c316',
   *   { sku: 'SKU-002' },
   * );
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
   * const listProduct = await client.catalog.products.list();
   * ```
   */
  list(query: ProductListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListProduct> {
    return this._client.get('/v1/catalog/products', { query, ...options });
  }

  /**
   * Soft-deletes a product and returns the deleted product.
   *
   * @example
   * ```ts
   * const product = await client.catalog.products.delete(
   *   'pd_013c29ab3f1518d0004094c316',
   * );
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

  /**
   * Changes the product line assignment for a product.
   *
   * @example
   * ```ts
   * const product =
   *   await client.catalog.products.changeProductLine(
   *     'pl_01996357326a0d3f7b129542ea',
   *     { id: 'pd_013c29ab3f1518d0004094c316' },
   *   );
   * ```
   */
  changeProductLine(
    productLineID: string,
    params: ProductChangeProductLineParams,
    options?: RequestOptions,
  ): APIPromise<Product> {
    const { id, include } = params;
    return this._client.put(path`/v1/catalog/products/${id}/product-line/${productLineID}`, {
      query: { include },
      ...options,
    });
  }
}

/**
 * CreateProductRequest is the request to create a product.
 */
export interface CreateProductRequest {
  /**
   * Category ID.
   */
  category_id: string;

  /**
   * Product line ID.
   */
  product_line_id: string | null;

  /**
   * SKU.
   */
  sku: string;

  /**
   * Product type code (e.g. sale, sample).
   */
  type: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * Attribute IDs to connect to the product at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Description.
   */
  description?: string | null;

  /**
   * Notes.
   */
  notes?: string | null;

  /**
   * Whether visible in the customer portal.
   */
  portal_visibility?: 'visible' | 'hidden';

  /**
   * Initial unit cost. Same currency rule as unit_price.
   */
  unit_cost?: MaterialsAPI.RateInput | null;

  /**
   * Initial unit price. When set, numerator must be a currency unit and denominator
   * must not be.
   */
  unit_price?: MaterialsAPI.RateInput | null;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProduct {
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
  page_info: APIKeysAPI.PageInfo;
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
  item: AccountUsersAPI.Item | null;

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
  product_line: AccountPricesAPI.ProductLine | null;

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
 * UpdateProductRequest is the request to partially update a product.
 */
export interface UpdateProductRequest {
  /**
   * Description.
   */
  description?: string | null;

  /**
   * Notes.
   */
  notes?: string | null;

  /**
   * Whether visible in the customer portal.
   */
  portal_visibility?: 'visible' | 'hidden';

  /**
   * SKU.
   */
  sku?: string;

  /**
   * Updated unit price. Numerator must be a currency unit; denominator must not be.
   */
  unit_price?: MaterialsAPI.RateInput | null;
}

export interface ProductCreateParams {
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
   * Body param: Attribute IDs to connect to the product at creation time.
   */
  attribute_ids?: Array<string>;

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

export interface ProductChangeProductLineParams {
  /**
   * Path param: Product ID.
   */
  id: string;

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
}

Products.Actions = Actions;

export declare namespace Products {
  export {
    type CreateProductRequest as CreateProductRequest,
    type ListProduct as ListProduct,
    type Product as Product,
    type UpdateProductRequest as UpdateProductRequest,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
    type ProductChangeProductLineParams as ProductChangeProductLineParams,
  };

  export {
    Actions as Actions,
    type ValidateProductsRequest as ValidateProductsRequest,
    type ValidateProductsResponse as ValidateProductsResponse,
    type ActionExportParams as ActionExportParams,
    type ActionValidateParams as ActionValidateParams,
  };
}
