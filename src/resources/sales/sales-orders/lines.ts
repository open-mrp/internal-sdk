// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations/operations';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../../operations/batches/batches';
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
   *   await client.sales.salesOrders.lines.create('id', {
   *     product_id: 'product_id',
   *     product_sku: 'product_sku',
   *     quantity_unit_id: 'quantity_unit_id',
   *     quantity_value: 'quantity_value',
   *     unit_price_denominator_unit_id:
   *       'unit_price_denominator_unit_id',
   *     unit_price_numerator_unit_id:
   *       'unit_price_numerator_unit_id',
   *     unit_price_value: 'unit_price_value',
   *   });
   * ```
   */
  create(id: string, body: LineCreateParams, options?: RequestOptions): APIPromise<SalesOrderLineDetail> {
    return this._client.post(path`/v1/sales/sales-orders/${id}/lines`, { body, ...options });
  }

  /**
   * Partially updates a sales order line item.
   *
   * @example
   * ```ts
   * const salesOrderLineDetail =
   *   await client.sales.salesOrders.lines.update('line_id', {
   *     id: 'id',
   *     product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
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
  ): APIPromise<SalesOrderLineDetail> {
    const { id, ...body } = params;
    return this._client.patch(path`/v1/sales/sales-orders/${id}/lines/${lineID}`, { body, ...options });
  }

  /**
   * Deletes a sales order line and related records.
   *
   * @example
   * ```ts
   * const line = await client.sales.salesOrders.lines.delete(
   *   'line_id',
   *   { id: 'id' },
   * );
   * ```
   */
  delete(lineID: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/sales/sales-orders/${id}/lines/${lineID}`, options);
  }
}

/**
 * Full sales order line resource.
 */
export interface SalesOrderLineDetail {
  /**
   * Sales order line ID.
   */
  id: string;

  /**
   * Completed timestamp.
   */
  completed_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * EDI line item ID.
   */
  edi_line_item_id: string | null;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: ItemsAPI.Item | null;

  /**
   * Line item number.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'sales_order_line';

  /**
   * Product description.
   */
  product_description: string | null;

  /**
   * Product SKU.
   */
  product_sku: string;

  /**
   * Value with an associated unit.
   */
  quantity_invoiced: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_ordered: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_packed: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_picked: BatchesAPI.Quantity | null;

  /**
   * Rate resource.
   */
  unit_cost: OperationsAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_price: OperationsAPI.Rate | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
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
    type SalesOrderLineDetail as SalesOrderLineDetail,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
