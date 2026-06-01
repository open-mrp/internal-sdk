// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountPricesAPI from '../../sales/account-prices';
import * as ActionsAPI from '../items/actions';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
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
   * const fileDownload =
   *   await client.catalog.products.actions.export();
   * ```
   */
  export(
    query: ActionExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionsAPI.FileDownload> {
    return this._client.get('/v1/catalog/products/actions/export', { query, ...options });
  }

  /**
   * Validates SKUs and returns matching products keyed by the original map keys.
   *
   * @example
   * ```ts
   * const validateProductsResponse =
   *   await client.catalog.products.actions.validate({
   *     products_map: { '0': 'ALM-2024-1001' },
   *   });
   * ```
   */
  validate(params: ActionValidateParams, options?: RequestOptions): APIPromise<ValidateProductsResponse> {
    const { include, ...body } = params;
    return this._client.put('/v1/catalog/products/actions/validate', {
      query: { include },
      body,
      ...options,
    });
  }
}

/**
 * ValidateProductsRequest is the request to validate products by SKU.
 */
export interface ValidateProductsRequest {
  /**
   * Map of arbitrary keys to SKU values.
   */
  products_map: { [key: string]: string };
}

/**
 * ValidateProductsResponse is the response for the validate products endpoint.
 */
export interface ValidateProductsResponse {
  /**
   * Resource type identifier.
   */
  object: 'map';

  /**
   * Validated products keyed by original map key.
   */
  products: { [key: string]: ValidateProductsResponse.Products };
}

export namespace ValidateProductsResponse {
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
}

export interface ActionExportParams {
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

export interface ActionValidateParams {
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
    type ValidateProductsRequest as ValidateProductsRequest,
    type ValidateProductsResponse as ValidateProductsResponse,
    type ActionExportParams as ActionExportParams,
    type ActionValidateParams as ActionValidateParams,
  };
}
