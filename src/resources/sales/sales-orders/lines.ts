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
   * @example
   * ```ts
   * const salesOrderLine =
   *   await client.sales.salesOrders.lines.update('example', {
   *     id: 'or_01d5034136c3ccc048abecc312',
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
 * OrderLineInput represents the shared fields for creating an order line item.
 * Used as an embedded struct in purchase order and sales order line inputs.
 */
export interface CreateSalesOrderLineRequest {
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
 * RateInput represents the input for creating or updating a rate.
 */
export interface RateInput {
  /**
   * Denominator unit ID.
   */
  denominator_unit_id: string;

  /**
   * Numerator unit ID.
   */
  numerator_unit_id: string;

  /**
   * Decimal value of the rate.
   */
  value: string;
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
   * QuantityInput represents a value with an associated unit for create/update
   * requests.
   */
  quantity?: CustomersAPI.QuantityInput;

  /**
   * RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: RateInput;

  /**
   * RateInput represents the input for creating or updating a rate.
   */
  unit_price?: RateInput;
}

export interface LineDeleteResponse {}

export interface LineCreateParams {
  /**
   * Body param: The product ID.
   */
  product_id: string;

  /**
   * Body param: The product SKU.
   */
  product_sku: string;

  /**
   * Body param: The quantity unit ID.
   */
  quantity_unit_id: string;

  /**
   * Body param: The quantity value.
   */
  quantity_value: string;

  /**
   * Body param: The unit price denominator unit ID.
   */
  unit_price_denominator_unit_id: string;

  /**
   * Body param: The unit price numerator unit ID.
   */
  unit_price_numerator_unit_id: string;

  /**
   * Body param: The unit price value.
   */
  unit_price_value: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'product' | 'quantity_ordered' | 'unit_price' | 'unit_cost' | 'totals'>;

  /**
   * Body param: The item ID.
   */
  item_id?: string;

  /**
   * Body param: The product description.
   */
  product_description?: string;

  /**
   * Body param: The unit cost denominator unit ID.
   */
  unit_cost_denominator_unit_id?: string;

  /**
   * Body param: The unit cost numerator unit ID.
   */
  unit_cost_numerator_unit_id?: string;

  /**
   * Body param: The unit cost value.
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
   * Body param: QuantityInput represents a value with an associated unit for
   * create/update requests.
   */
  quantity?: CustomersAPI.QuantityInput;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: RateInput;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_price?: RateInput;
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
    type RateInput as RateInput,
    type UpdateSalesOrderLineRequest as UpdateSalesOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
