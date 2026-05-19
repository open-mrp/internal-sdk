// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductLinesAPI from '../product-lines';
import * as ItemsAPI from '../items/items';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage products.
 */
export class Actions extends APIResource {
  /**
   * Exports all matching products as an Excel file.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.products.actions.retrieveExport();
   * ```
   */
  retrieveExport(
    query: ActionRetrieveExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveExportResponse> {
    return this._client.get('/v1/catalog/products/actions/export', { query, ...options });
  }

  /**
   * Validates SKUs and returns matching products keyed by the original map keys.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.products.actions.updateValidate({
   *     products_map: { '0': 'ALM-2024-1001' },
   *   });
   * ```
   */
  updateValidate(
    params: ActionUpdateValidateParams,
    options?: RequestOptions,
  ): APIPromise<ActionUpdateValidateResponse> {
    const { include, ...body } = params;
    return this._client.put('/v1/catalog/products/actions/validate', {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * FileDownload is a response type for endpoints that return a file (e.g. Excel
 * export). When the service returns \*FileDownload, the handler writes the body
 * with Content-Type and Content-Disposition.
 */
export interface ActionRetrieveExportResponse {}

/**
 * ValidateProductsResponse is the response for the validate products endpoint.
 */
export interface ActionUpdateValidateResponse {
  /**
   * Resource type identifier.
   */
  object: 'map';

  /**
   * Validated products keyed by original map key.
   */
  products: { [key: string]: ActionUpdateValidateResponse.Products };
}

export namespace ActionUpdateValidateResponse {
  /**
   * Product with expandable item, product line, and product type.
   */
  export interface Products {
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
}

export interface ActionRetrieveExportParams {
  /**
   * Filter by attribute IDs.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by category IDs.
   */
  category_ids?: Array<string>;

  /**
   * Filter by customer IDs.
   */
  customer_ids?: Array<string>;

  /**
   * End of creation date range.
   */
  end_date?: string;

  /**
   * Filter by product line IDs.
   */
  product_line_ids?: Array<string>;

  /**
   * Optional search query.
   */
  q?: string;

  /**
   * Start of creation date range.
   */
  start_date?: string;
}

export interface ActionUpdateValidateParams {
  /**
   * Body param: Map of arbitrary keys to SKU values.
   */
  products_map: { [key: string]: string };

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

export declare namespace Actions {
  export {
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionUpdateValidateResponse as ActionUpdateValidateResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
    type ActionUpdateValidateParams as ActionUpdateValidateParams,
  };
}
