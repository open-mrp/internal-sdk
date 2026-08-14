// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from '../../core/analytics';
import * as JobsAPI from '../../core/jobs';
import * as ActionsAPI from '../item-categories/actions';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * List and manage products.
 */
export class Actions extends APIResource {
  /**
   * Creates or updates multiple products for the account, matched by SKU. Validates
   * and resolves synchronously, then writes asynchronously — 202 with a job to poll.
   *
   * @example
   * ```ts
   * const job =
   *   await client.catalog.products.actions.bulkUpsert({
   *     products: [
   *       {
   *         sku: 'ALM-2024-1001',
   *         category: { id: 'ic_d06g9c6yc9ck' },
   *         properties: [],
   *       },
   *     ],
   *   });
   * ```
   */
  bulkUpsert(body: ActionBulkUpsertParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/catalog/products/actions/bulk-upsert', { body, ...options });
  }

  /**
   * Starts an export of every matching product and returns the job that tracks it;
   * as with the product list, only products of type `sale` are exported.
   *
   * @example
   * ```ts
   * const job = await client.catalog.products.actions.export({
   *   attribute_ids: [],
   *   category_ids: [],
   *   customer_ids: [],
   *   ends_at: null,
   *   product_line_ids: [],
   *   q: null,
   *   starts_at: null,
   * });
   * ```
   */
  export(body: ActionExportParams, options?: RequestOptions): APIPromise<JobsAPI.Job> {
    return this._client.post('/v1/catalog/products/actions/export', { body, ...options });
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
 * Request to bulk upsert products.
 */
export interface BulkUpsertProductsRequest {
  /**
   * Products to create or update, matched by SKU within the account.
   */
  products: Array<UpsertProductInput>;
}

/**
 * Filters which products land in the exported file.
 */
export interface ExportProductsRequest {
  /**
   * Filter to products whose item carries at least one of these attributes.
   */
  attribute_ids: Array<string>;

  /**
   * Filter by the item category the product's item belongs to.
   */
  category_ids: Array<string>;

  /**
   * Restrict the export to products these customer accounts are entitled to buy.
   *
   * A product matches when its product line has been granted to the customer
   * directly, through the customer's account group, or through the account group
   * used for the customer's pricing.
   */
  customer_ids: Array<string>;

  /**
   * End of creation date range.
   */
  ends_at: string | null;

  /**
   * Filter by product line IDs.
   *
   * Combined with `customer_ids`, products matching either filter are exported.
   */
  product_line_ids: Array<string>;

  /**
   * Free-text search matched against the SKU and description of each product's item.
   */
  q: string | null;

  /**
   * Start of creation date range.
   */
  starts_at: string | null;
}

/**
 * Input for a single product in a bulk upsert operation.
 */
export interface UpsertProductInput {
  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  category: ActionsAPI.ObjectIdentifier;

  /**
   * Properties to attach to the product, matched/created by name + value. Additive —
   * existing attributes are not removed.
   */
  properties: Array<UpsertProductProperty>;

  /**
   * SKU for the product, used to match an existing product within the account. If it
   * exists the product is updated in place; otherwise a new product is created. A
   * SKU already used by a non-product item fails that row.
   */
  sku: string;

  /**
   * Product description.
   */
  description?: string;

  /**
   * Product notes.
   */
  notes?: string;

  /**
   * Whether the product is shown to buyers in the customer portal. Defaults to
   * `hidden` on create; preserved when omitted on update.
   */
  portal_visibility?: 'visible' | 'hidden';

  /**
   * -------------------------- Named Object -------------------------- Identifies an
   * object by its id or its name. An id wins when both are given.
   */
  product_line?: ActionsAPI.ObjectIdentifier;

  /**
   * Product type. Create-only; defaults to `sale` when omitted.
   */
  type?: 'sale' | 'service' | 'shipping' | 'credit' | 'return' | 'tax';

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price?: SalesOrdersAPI.RateInput;
}

/**
 * Property name + value pair attached to a product. The property and its value (an
 * attribute) are created if they do not yet exist.
 */
export interface UpsertProductProperty {
  /**
   * Property name (e.g. "Color"). Matched case-insensitively; created if missing.
   */
  name: string;

  /**
   * Property value (e.g. "Red"). Matched case-insensitively; created under the
   * property if missing. A value already in use under a different property fails the
   * whole job.
   */
  value: string;
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
    product_line: AnalyticsAPI.ProductLine | null;

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

export interface ActionBulkUpsertParams {
  /**
   * Products to create or update, matched by SKU within the account.
   */
  products: Array<UpsertProductInput>;
}

export interface ActionExportParams {
  /**
   * Filter to products whose item carries at least one of these attributes.
   */
  attribute_ids: Array<string>;

  /**
   * Filter by the item category the product's item belongs to.
   */
  category_ids: Array<string>;

  /**
   * Restrict the export to products these customer accounts are entitled to buy.
   *
   * A product matches when its product line has been granted to the customer
   * directly, through the customer's account group, or through the account group
   * used for the customer's pricing.
   */
  customer_ids: Array<string>;

  /**
   * End of creation date range.
   */
  ends_at: string | null;

  /**
   * Filter by product line IDs.
   *
   * Combined with `customer_ids`, products matching either filter are exported.
   */
  product_line_ids: Array<string>;

  /**
   * Free-text search matched against the SKU and description of each product's item.
   */
  q: string | null;

  /**
   * Start of creation date range.
   */
  starts_at: string | null;
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
    type BulkUpsertProductsRequest as BulkUpsertProductsRequest,
    type ExportProductsRequest as ExportProductsRequest,
    type UpsertProductInput as UpsertProductInput,
    type UpsertProductProperty as UpsertProductProperty,
    type ValidateProductsRequest as ValidateProductsRequest,
    type ValidateProductsResponse as ValidateProductsResponse,
    type ActionBulkUpsertParams as ActionBulkUpsertParams,
    type ActionExportParams as ActionExportParams,
    type ActionValidateParams as ActionValidateParams,
  };
}
