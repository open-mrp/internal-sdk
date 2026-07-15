// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
import * as CustomersAPI from '../../sales/customers/customers';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
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
   * If the order has already been issued, a matching receiving order line is created
   * as well.
   *
   * This endpoint requires the permissions: `purchase_orders:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const purchaseOrderLine =
   *   await client.operations.purchaseOrders.lines.create(
   *     'po_0169aa3a722b081b117ac0e44f',
   *     {
   *       product_id: 'pd_013c29ab3f1518d0004094c316',
   *       product_sku: 'ALM-2024-1001',
   *       quantity: {
   *         unit_id: 'un_01966263f74a5a0cae356000a1',
   *         value: '10',
   *       },
   *       unit_price: {
   *         denominator_unit_id:
   *           'un_01966263f74a5a0cae356000a1',
   *         numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *         value: '25.50',
   *       },
   *       item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *       product_description: '6061-T6 Aluminum Sheet 4x8',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    body: LineCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.PurchaseOrderLine> {
    return this._client.post(path`/v1/operations/purchase-orders/${id}/lines`, { body, ...options });
  }

  /**
   * Partially updates a purchase order line item.
   *
   * If the order has already been issued, the receiving order is updated to reflect
   * the remaining quantity to receive.
   *
   * This endpoint requires the permissions: `purchase_orders:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const purchaseOrderLine =
   *   await client.operations.purchaseOrders.lines.update(
   *     'example',
   *     {
   *       id: 'po_0169aa3a722b081b117ac0e44f',
   *       product_id: 'pd_013c29ab3f1518d0004094c316',
   *       product_sku: 'RAW-100',
   *       quantity_value: '250',
   *       unit_price_value: '15.00',
   *     },
   *   );
   * ```
   */
  update(
    lineID: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeliveriesAPI.PurchaseOrderLine> {
    const { id, ...body } = params;
    return this._client.patch(path`/v1/operations/purchase-orders/${id}/lines/${lineID}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a purchase order line item and its related records.
   *
   * Any receiving order lines created for this line are deleted as well.
   *
   * This endpoint requires the permissions: `purchase_orders:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const line =
   *   await client.operations.purchaseOrders.lines.delete(
   *     'example',
   *     { id: 'po_0169aa3a722b081b117ac0e44f' },
   *   );
   * ```
   */
  delete(lineID: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/operations/purchase-orders/${id}/lines/${lineID}`, options);
  }
}

/**
 * Shared fields for a line item on a purchase order or sales order.
 */
export interface CreatePurchaseOrderLineRequest {
  /**
   * ID of the product being ordered.
   */
  product_id: string;

  /**
   * The product SKU recorded on the line.
   *
   * Stored on the line itself, so it stays stable even if the product's SKU changes
   * later.
   */
  product_sku: string;

  /**
   * A value with an associated unit, used in create and update requests.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_price: SalesOrdersAPI.RateInput;

  /**
   * ID of the inventory item to tie the line to.
   *
   * Lines tied to an item have inventory reserved for them when the order is issued.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;
}

/**
 * Request to update a purchase order line.
 */
export interface UpdatePurchaseOrderLineRequest {
  /**
   * ID of the inventory item to tie this line to.
   */
  item_id?: string;

  /**
   * Free-text description of the ordered product.
   */
  product_description?: string;

  /**
   * ID of the product ordered on this line.
   */
  product_id?: string;

  /**
   * SKU of the ordered product.
   */
  product_sku?: string;

  /**
   * ID of the unit the quantity is measured in.
   */
  quantity_unit_id?: string;

  /**
   * Quantity ordered, as a decimal string.
   */
  quantity_value?: string;

  /**
   * ID of the unit cost's denominator unit (the unit the cost is per).
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * ID of the unit cost's numerator unit (e.g. a currency unit).
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Recorded cost per unit, as a decimal string.
   */
  unit_cost_value?: string;

  /**
   * ID of the unit price's denominator unit (the unit the price is per).
   */
  unit_price_denominator_unit_id?: string;

  /**
   * ID of the unit price's numerator unit (e.g. a currency unit).
   */
  unit_price_numerator_unit_id?: string;

  /**
   * Purchase price per unit, as a decimal string.
   */
  unit_price_value?: string;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * ID of the product being ordered.
   */
  product_id: string;

  /**
   * The product SKU recorded on the line.
   *
   * Stored on the line itself, so it stays stable even if the product's SKU changes
   * later.
   */
  product_sku: string;

  /**
   * A value with an associated unit, used in create and update requests.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_price: SalesOrdersAPI.RateInput;

  /**
   * ID of the inventory item to tie the line to.
   *
   * Lines tied to an item have inventory reserved for them when the order is issued.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;
}

export interface LineUpdateParams {
  /**
   * Path param: Purchase order ID.
   */
  id: string;

  /**
   * Body param: ID of the inventory item to tie this line to.
   */
  item_id?: string;

  /**
   * Body param: Free-text description of the ordered product.
   */
  product_description?: string;

  /**
   * Body param: ID of the product ordered on this line.
   */
  product_id?: string;

  /**
   * Body param: SKU of the ordered product.
   */
  product_sku?: string;

  /**
   * Body param: ID of the unit the quantity is measured in.
   */
  quantity_unit_id?: string;

  /**
   * Body param: Quantity ordered, as a decimal string.
   */
  quantity_value?: string;

  /**
   * Body param: ID of the unit cost's denominator unit (the unit the cost is per).
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Body param: ID of the unit cost's numerator unit (e.g. a currency unit).
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Body param: Recorded cost per unit, as a decimal string.
   */
  unit_cost_value?: string;

  /**
   * Body param: ID of the unit price's denominator unit (the unit the price is per).
   */
  unit_price_denominator_unit_id?: string;

  /**
   * Body param: ID of the unit price's numerator unit (e.g. a currency unit).
   */
  unit_price_numerator_unit_id?: string;

  /**
   * Body param: Purchase price per unit, as a decimal string.
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
    type CreatePurchaseOrderLineRequest as CreatePurchaseOrderLineRequest,
    type UpdatePurchaseOrderLineRequest as UpdatePurchaseOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
