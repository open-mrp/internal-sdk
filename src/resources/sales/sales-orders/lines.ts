// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from '../customers/customers';
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
   * This endpoint requires the permissions: `customers:update`, `suppliers:update`,
   * `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrderLine =
   *   await client.sales.salesOrders.lines.create(
   *     'or_01d5034136c3ccc048abecc312',
   *     {
   *       product_id: 'pd_013c29ab3f1518d0004094c316',
   *       product_sku: 'WIDGET-001',
   *       quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       quantity_value: '10',
   *       unit_price_denominator_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
   *       unit_price_numerator_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
   *       unit_price_value: '25.00',
   *       item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *     },
   *   );
   * ```
   */
  create(
    id: string,
    params: LineCreateParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrderLine> {
    const { include, ...body } = params;
    return this._client.post(path`/v1/sales/sales-orders/${id}/lines`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Partially updates a sales order line item.
   *
   * This endpoint requires the permissions: `customers:update`, `suppliers:update`,
   * `sales_orders:update`.
   *
   * @example
   * ```ts
   * const salesOrderLine =
   *   await client.sales.salesOrders.lines.update('example', {
   *     id: 'or_01d5034136c3ccc048abecc312',
   *     item_id: 'it_0131e386ac683e8c29a71f6f1f',
   *     quantity: {
   *       value: '20',
   *       unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *     unit_price: {
   *       value: '30.00',
   *       numerator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       denominator_unit_id: 'un_01966263f74a5a0cae356000a1',
   *     },
   *   });
   * ```
   */
  update(
    lineID: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SalesOrdersAPI.SalesOrderLine> {
    const { id, include, ...body } = params;
    return this._client.patch(path`/v1/sales/sales-orders/${id}/lines/${lineID}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes a sales order line and related records.
   *
   * This endpoint requires the permissions: `customers:update`, `suppliers:update`,
   * `sales_orders:update`.
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
 * Shared fields for a line item on a purchase order or sales order.
 */
export interface CreateSalesOrderLineRequest {
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
   * ID of the unit of measure for the quantity.
   */
  quantity_unit_id: string;

  /**
   * Quantity ordered, as a decimal string.
   */
  quantity_value: string;

  /**
   * Unit ID for the unit price's denominator (the unit being sold, e.g. `each`).
   */
  unit_price_denominator_unit_id: string;

  /**
   * Unit ID for the unit price's numerator (the unit being charged, e.g. a currency
   * unit).
   */
  unit_price_numerator_unit_id: string;

  /**
   * Price charged per unit, as a decimal string.
   */
  unit_price_value: string;

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
   * Unit ID for the unit cost's denominator (the unit being costed, e.g. `each`).
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Unit ID for the unit cost's numerator (the unit being charged, e.g. a currency
   * unit).
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Internal cost per unit, as a decimal string.
   */
  unit_cost_value?: string;
}

/**
 * Shared fields for a line item on a purchase order or sales order.
 */
export interface OrderLineInput {
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
   * ID of the unit of measure for the quantity.
   */
  quantity_unit_id: string;

  /**
   * Quantity ordered, as a decimal string.
   */
  quantity_value: string;

  /**
   * Unit ID for the unit price's denominator (the unit being sold, e.g. `each`).
   */
  unit_price_denominator_unit_id: string;

  /**
   * Unit ID for the unit price's numerator (the unit being charged, e.g. a currency
   * unit).
   */
  unit_price_numerator_unit_id: string;

  /**
   * Price charged per unit, as a decimal string.
   */
  unit_price_value: string;

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
   * Unit ID for the unit cost's denominator (the unit being costed, e.g. `each`).
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Unit ID for the unit cost's numerator (the unit being charged, e.g. a currency
   * unit).
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Internal cost per unit, as a decimal string.
   */
  unit_cost_value?: string;
}

/**
 * Request to update a sales order line.
 */
export interface UpdateSalesOrderLineRequest {
  /**
   * Item ID.
   */
  item_id?: string;

  /**
   * Product description.
   */
  product_description?: string;

  /**
   * Product SKU.
   */
  product_sku?: string;

  /**
   * A value with an associated unit, used in create and update requests.
   */
  quantity?: CustomersAPI.QuantityInput;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_price?: SalesOrdersAPI.RateInput;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * Body param: ID of the product being ordered.
   */
  product_id: string;

  /**
   * Body param: The product SKU recorded on the line.
   *
   * Stored on the line itself, so it stays stable even if the product's SKU changes
   * later.
   */
  product_sku: string;

  /**
   * Body param: ID of the unit of measure for the quantity.
   */
  quantity_unit_id: string;

  /**
   * Body param: Quantity ordered, as a decimal string.
   */
  quantity_value: string;

  /**
   * Body param: Unit ID for the unit price's denominator (the unit being sold, e.g.
   * `each`).
   */
  unit_price_denominator_unit_id: string;

  /**
   * Body param: Unit ID for the unit price's numerator (the unit being charged, e.g.
   * a currency unit).
   */
  unit_price_numerator_unit_id: string;

  /**
   * Body param: Price charged per unit, as a decimal string.
   */
  unit_price_value: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'product' | 'quantity_ordered' | 'unit_price' | 'unit_cost' | 'totals'>;

  /**
   * Body param: ID of the inventory item to tie the line to.
   *
   * Lines tied to an item have inventory reserved for them when the order is issued.
   */
  item_id?: string;

  /**
   * Body param: The product description recorded on the line.
   */
  product_description?: string;

  /**
   * Body param: Unit ID for the unit cost's denominator (the unit being costed, e.g.
   * `each`).
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Body param: Unit ID for the unit cost's numerator (the unit being charged, e.g.
   * a currency unit).
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Body param: Internal cost per unit, as a decimal string.
   */
  unit_cost_value?: string;
}

export interface LineUpdateParams {
  /**
   * Path param: Sales order ID.
   */
  id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'product' | 'quantity_ordered' | 'unit_price' | 'unit_cost' | 'totals'>;

  /**
   * Body param: Item ID.
   */
  item_id?: string;

  /**
   * Body param: Product description.
   */
  product_description?: string;

  /**
   * Body param: Product SKU.
   */
  product_sku?: string;

  /**
   * Body param: A value with an associated unit, used in create and update requests.
   */
  quantity?: CustomersAPI.QuantityInput;

  /**
   * Body param: A rate value with its numerator and denominator units, used in
   * create and update requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * Body param: A rate value with its numerator and denominator units, used in
   * create and update requests.
   */
  unit_price?: SalesOrdersAPI.RateInput;
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
    type OrderLineInput as OrderLineInput,
    type UpdateSalesOrderLineRequest as UpdateSalesOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
