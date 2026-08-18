// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
import * as AccountPricesAPI from '../../sales/account-prices/account-prices';
import * as CustomersAPI from '../../sales/customers/customers';
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
   * The line number is assigned automatically as the next number on the order. If
   * the order has already been issued, a matching receiving order line is created as
   * well, so the added quantity can be received.
   *
   * A line that references an inventory item also links that item's material to the
   * supplier, if it is not linked already, so the material shows up as sourced from
   * them.
   *
   * This endpoint requires the permissions: `purchase_orders:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const purchaseOrderLine =
   *   await client.operations.purchaseOrders.lines.create(
   *     'po_3ov2ym1pca8m',
   *     {
   *       product_id: 'pd_07oe0r7adh2w',
   *       product_sku: 'ALM-2024-1001',
   *       quantity: { unit_id: 'un_82bd37dae5po', value: '10' },
   *       unit_price: {
   *         denominator_unit_id: 'un_82bd37dae5po',
   *         numerator_unit_id: 'un_82bd37dae5po',
   *         value: '25.50',
   *       },
   *       item_id: 'it_pej07ckhvu62',
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
   * If the order has already been issued and the line has no open receiving order
   * line, a new one is added for the quantity still outstanding, so an increased
   * order quantity can be received.
   *
   * A line that references an inventory item also links that item's material to the
   * supplier, if it is not linked already, so the material shows up as sourced from
   * them.
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
   *       id: 'po_3ov2ym1pca8m',
   *       product_id: 'pd_07oe0r7adh2w',
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
   * Any receiving order lines created for this line are deleted as well, so the
   * quantity can no longer be received. Line numbers on the remaining lines are left
   * as they are.
   *
   * This endpoint requires the permissions: `purchase_orders:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const line =
   *   await client.operations.purchaseOrders.lines.delete(
   *     'example',
   *     { id: 'po_3ov2ym1pca8m' },
   *   );
   * ```
   */
  delete(lineID: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<LineDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/v1/operations/purchase-orders/${id}/lines/${lineID}`, options);
  }
}

/**
 * Details of a single line item ordered from a supplier, used when creating a
 * purchase order and when adding a line to an existing one.
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
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price: AccountPricesAPI.RateInput;

  /**
   * ID of the inventory item this line is linked to.
   *
   * Stock received against the line is booked into this item, so lines for goods you
   * hold in inventory should reference one. Supplying an item also records the
   * item's material as sourced from this order's supplier, with `product_sku` as the
   * supplier part number, when that link does not exist yet.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: AccountPricesAPI.RateInput;
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
   * An amount together with the unit it is expressed in.
   *
   * The unit may be a currency, so money amounts such as a credit limit are written
   * the same way as physical amounts like weights or counts.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price: AccountPricesAPI.RateInput;

  /**
   * ID of the inventory item this line is linked to.
   *
   * Stock received against the line is booked into this item, so lines for goods you
   * hold in inventory should reference one. Supplying an item also records the
   * item's material as sourced from this order's supplier, with `product_sku` as the
   * supplier part number, when that link does not exist yet.
   */
  item_id?: string;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: AccountPricesAPI.RateInput;
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
