// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../operations';
import * as ItemsAPI from '../../catalog/items/items';
import * as BatchesAPI from '../batches/batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List, view, create, update, and delete purchase orders.
 */
export class Lines extends APIResource {
  /**
   * Creates a line item on a purchase order.
   *
   * @example
   * ```ts
   * const purchaseOrderLineDetail =
   *   await client.operations.purchaseOrders.lines.create(
   *     'po_01jm4r6700f8nwq3v5hx2d9ktp',
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
  create(id: string, body: LineCreateParams, options?: RequestOptions): APIPromise<PurchaseOrderLineDetail> {
    return this._client.post(path`/v1/operations/purchase-orders/${id}/lines`, { body, ...options });
  }

  /**
   * Partially updates a purchase order line item.
   *
   * @example
   * ```ts
   * const purchaseOrderLineDetail =
   *   await client.operations.purchaseOrders.lines.update('', {
   *     id: '',
   *     product_id: 'pd_01jm4r6700f8nwq3v5hx2d9ktp',
   *     product_sku: 'RAW-100',
   *     quantity_value: '250',
   *     unit_price_value: '15.00',
   *   });
   * ```
   */
  update(
    lineID: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PurchaseOrderLineDetail> {
    const { id, ...body } = params;
    return this._client.patch(path`/v1/operations/purchase-orders/${id}/lines/${lineID}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a purchase order line item and its related records.
   *
   * @example
   * ```ts
   * const line =
   *   await client.operations.purchaseOrders.lines.delete(
   *     'example',
   *     { id: 'po_01jm4r6700f8nwq3v5hx2d9ktp' },
   *   );
   * ```
   */
  delete(lineID: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/operations/purchase-orders/${id}/lines/${lineID}`, options);
  }
}

/**
 * OrderLineInput represents the shared fields for creating an order line item.
 * Used as an embedded struct in purchase order and sales order line inputs.
 */
export interface OrderLineInput {
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

/**
 * Full purchase order line resource.
 */
export interface PurchaseOrderLineDetail {
  /**
   * Purchase order line ID.
   */
  id: string;

  /**
   * Created timestamp.
   */
  created_at: string;

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
  object: 'purchase_order_line';

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
  quantity_ordered: BatchesAPI.Quantity | null;

  /**
   * Value with an associated unit.
   */
  quantity_received: BatchesAPI.Quantity | null;

  /**
   * Rate resource.
   */
  unit_cost: OperationsAPI.Rate | null;

  /**
   * Rate resource.
   */
  unit_price: OperationsAPI.Rate | null;

  /**
   * Updated timestamp.
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
   * Path param: Purchase order ID.
   */
  id: string;

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
   * Purchase order ID.
   */
  id: string;
}

export declare namespace Lines {
  export {
    type OrderLineInput as OrderLineInput,
    type PurchaseOrderLineDetail as PurchaseOrderLineDetail,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
