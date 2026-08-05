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
   * Exports matching products as an Excel workbook.
   *
   * The response is a file download, not JSON, and it is not paginated: every
   * product matching the filters is written to a single sheet, one row per product,
   * with columns for the product ID, SKU, description, category, product line, and
   * unit price and cost with their units, plus one column for each category property
   * in use. As with the product list, only products of type `sale` are exported.
   *
   * This endpoint requires the permissions: `items:read`, `customers:read`,
   * `suppliers:read`.
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
   * Resolves a batch of SKUs to products in one call, keyed by the keys you
   * supplied.
   *
   * Useful before importing order lines from a spreadsheet or a customer document:
   * send each row's SKU under its row key and check which keys come back. Unmatched
   * SKUs are simply left out of the response rather than reported as errors, and
   * unlike the product list this covers products of every type, not just `sale`.
   *
   * This endpoint requires the permissions: `items:read`, `customers:read`,
   * `suppliers:read`.
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
 * Request to look up products by SKU.
 */
export interface ValidateProductsRequest {
  /**
   * Map of caller-chosen keys to SKU values to look up.
   *
   * SKUs are matched case-insensitively. Each key is echoed back in the response
   * with its matched product; keys whose SKU does not match any product are omitted.
   */
  products_map: { [key: string]: string };
}

/**
 * The outcome of a SKU lookup: the products that matched, addressed by the
 * caller's own keys.
 */
export interface ValidateProductsResponse {
  /**
   * Resource type identifier.
   */
  object: 'map';

  /**
   * Matched products keyed by the same keys supplied in the request's
   * `products_map`.
   *
   * Keys whose SKU did not match any product are omitted.
   */
  products: { [key: string]: ValidateProductsResponse.Products };
}

export namespace ValidateProductsResponse {
  /**
   * A catalog entry as it is sold: an inventory item together with its product type,
   * product line, and customer portal visibility.
   *
   * Every product is backed by exactly one item, which carries the SKU, description,
   * pricing, attributes, and inventory position. Creating a product creates that
   * item; deleting the product deletes it.
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
     * An entry in your catalog: something you sell, consume, or build with.
     */
    item: AccountUsersAPI.Item | null;

    /**
     * Resource type identifier.
     */
    object: 'product';

    /**
     * Whether the product is shown to buyers in the customer portal.
     *
     * - `visible`: buyers can see and order the product in the portal.
     * - `hidden`: the product is concealed from the portal but remains usable
     *   internally.
     *
     * Visibility alone is not enough to expose a product: a buyer only sees it if
     * their account has also been granted access to the product's product line.
     */
    portal_visibility: 'visible' | 'hidden';

    /**
     * A named grouping of related products in your catalog.
     *
     * A product line carries the default commission and freight policies for the
     * products assigned to it, along with the unit group that determines how those
     * products are measured. Product lines are also the unit that catalog access is
     * granted over, for both customers and account groups.
     */
    product_line: AccountPricesAPI.ProductLine | null;

    /**
     * Product type code, which determines how the product behaves on orders and
     * invoices.
     *
     * - `sale`: a standard sellable product.
     * - `service`: a non-physical service line, such as labor or installation.
     * - `shipping`: a shipping charge applied to an order.
     * - `credit`: a credit applied against an order or invoice.
     * - `return`: a returned product (RMA).
     * - `tax`: a tax line.
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
   * Filter to products whose item carries at least one of these attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by the item category the product's item belongs to.
   */
  category_ids?: Array<string>;

  /**
   * Restrict the export to products these customer accounts are entitled to buy.
   *
   * A product matches when its product line has been granted to the customer
   * directly, through the customer's account group, or through the account group
   * used for the customer's pricing.
   */
  customer_ids?: Array<string>;

  /**
   * End of creation date range.
   */
  ends_at?: string;

  /**
   * Filter by product line IDs.
   *
   * Combined with `customer_ids`, products matching either filter are exported.
   */
  product_line_ids?: Array<string>;

  /**
   * Free-text search matched against the SKU and description of each product's item.
   */
  q?: string;

  /**
   * Start of creation date range.
   */
  starts_at?: string;
}

export interface ActionValidateParams {
  /**
   * Body param: Map of caller-chosen keys to SKU values to look up.
   *
   * SKUs are matched case-insensitively. Each key is echoed back in the response
   * with its matched product; keys whose SKU does not match any product are omitted.
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
