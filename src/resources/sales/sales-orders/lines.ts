// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SalesOrdersAPI from './sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete sales orders.
 */
export class Lines extends APIResource {
  /**
   * Creates a line item on a sales order.
   *
   * @example
   * ```ts
   * const salesOrderLineDetail =
   *   await client.sales.salesOrders.lines.create(
   *     'or_01d5034136c3ccc048abecc312',
   *     {
   *       product_id: 'product_id',
   *       product_sku: 'product_sku',
   *       quantity_unit_id: 'quantity_unit_id',
   *       quantity_value: 'quantity_value',
   *       unit_price_denominator_unit_id:
   *         'unit_price_denominator_unit_id',
   *       unit_price_numerator_unit_id:
   *         'unit_price_numerator_unit_id',
   *       unit_price_value: 'unit_price_value',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    body: LineCreateParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrderLineDetail> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/lines`, { body, ...options });
  }

  /**
   * Partially updates a sales order line item.
   *
   * @example
   * ```ts
   * const salesOrderLineDetail =
   *   await client.sales.salesOrders.lines.update('example', {
   *     id: 'or_01d5034136c3ccc048abecc312',
   *     product_id: 'pd_013c29ab3f1518d0004094c316',
   *     product_sku: 'WIDGET-001',
   *     quantity_value: '20',
   *     unit_price_value: '30.00',
   *   });
   * ```
   */
  update(
    lineID: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrderLineDetail> {
    const { id, ...body } = params;
    return this._client.patch(path`/v1/sales/sales-orders/${id}/lines/${lineID}`, { body, ...options });
  }

  /**
   * Deletes a sales order line and related records.
   *
   * @example
   * ```ts
   * const line = await client.sales.salesOrders.lines.delete(
   *   'example',
   *   { id: 'or_01d5034136c3ccc048abecc312' },
   * );
   * ```
   */
  delete(lineID: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/sales/sales-orders/${id}/lines/${lineID}`, options);
  }
}

/**
 * Request to create a line on a sales order.
 */
export interface CreateSalesOrderLineRequest extends SalesOrdersAPI.OrderLineInput {
  /**
   * EDI line item ID.
   */
  edi_line_item_id?: string;
}

/**
 * Request to update a sales order line.
 */
export interface UpdateSalesOrderLineRequest {
  /**
   * EDI line item ID.
   */
  edi_line_item_id?: string;

  /**
   * Item ID.
   */
  item_id?: string;

  /**
   * Product description.
   */
  product_description?: string;

  /**
   * Product ID.
   */
  product_id?: string;

  /**
   * Product SKU.
   */
  product_sku?: string;

  /**
   * Quantity unit ID.
   */
  quantity_unit_id?: string;

  /**
   * Quantity value.
   */
  quantity_value?: string;

  /**
   * Unit cost denominator unit ID.
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Unit cost numerator unit ID.
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Unit cost value.
   */
  unit_cost_value?: string;

  /**
   * Unit price denominator unit ID.
   */
  unit_price_denominator_unit_id?: string;

  /**
   * Unit price numerator unit ID.
   */
  unit_price_numerator_unit_id?: string;

  /**
   * Unit price value.
   */
  unit_price_value?: string;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * The product ID.
   */
  product_id: string;

  /**
   * The product SKU.
   */
  product_sku: string;

  /**
   * The quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * The quantity value.
   */
  quantity_value: string;

  /**
   * The unit price denominator unit ID.
   */
  unit_price_denominator_unit_id: string;

  /**
   * The unit price numerator unit ID.
   */
  unit_price_numerator_unit_id: string;

  /**
   * The unit price value.
   */
  unit_price_value: string;

  /**
   * EDI line item ID.
   */
  edi_line_item_id?: string;

  /**
   * The item ID.
   */
  item_id?: string;

  /**
   * The product description.
   */
  product_description?: string;

  /**
   * The unit cost denominator unit ID.
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * The unit cost numerator unit ID.
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * The unit cost value.
   */
  unit_cost_value?: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Sales order ID.
   */
  id: string;

  /**
   * Body param: EDI line item ID.
   */
  edi_line_item_id?: string;

  /**
   * Body param: Item ID.
   */
  item_id?: string;

  /**
   * Body param: Product description.
   */
  product_description?: string;

  /**
   * Body param: Product ID.
   */
  product_id?: string;

  /**
   * Body param: Product SKU.
   */
  product_sku?: string;

  /**
   * Body param: Quantity unit ID.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Quantity value.
   */
  quantity_value?: string;

  /**
   * Body param: Unit cost denominator unit ID.
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Body param: Unit cost numerator unit ID.
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Body param: Unit cost value.
   */
  unit_cost_value?: string;

  /**
   * Body param: Unit price denominator unit ID.
   */
  unit_price_denominator_unit_id?: string;

  /**
   * Body param: Unit price numerator unit ID.
   */
  unit_price_numerator_unit_id?: string;

  /**
   * Body param: Unit price value.
   */
  unit_price_value?: string;
}

export interface LineDeleteParams {
  /**
   * Sales order ID.
   */
  id: string;
}

export declare namespace Lines {
  export {
    type CreateSalesOrderLineRequest as CreateSalesOrderLineRequest,
    type UpdateSalesOrderLineRequest as UpdateSalesOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
