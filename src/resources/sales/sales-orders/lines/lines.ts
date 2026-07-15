// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomersAPI from '../../customers/customers';
import * as SalesOrdersAPI from '../sales-orders';
import * as ActionsAPI from './actions';
import {
  ActionReorderParams,
  ActionReorderResponse,
  Actions,
  ReorderSalesOrderLinesRequest,
} from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * List, view, create, update, and delete sales orders.
 */
export class Lines extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

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
   *       quantity: {
   *         value: '10',
   *         unit_id: 'un_01966263f74a5a0cae356000a1',
   *       },
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
 * Request to create a line on a sales order.
 *
 * This mirrors the create-order line shape (not the shared purchase-order
 * OrderLineInput): the unit price is optional and, when omitted, the line is
 * priced server-side from the product. The unit cost is always resolved
 * server-side from the product.
 */
export interface CreateSalesOrderLineRequest {
  /**
   * ID of the product being ordered.
   */
  product_id: string;

  /**
   * The product SKU recorded on the line.
   */
  product_sku: string;

  /**
   * A value with an associated unit, used in create and update requests.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * The product description recorded on the line.
   */
  product_description?: string;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_price?: SalesOrdersAPI.RateInput;
}

/**
 * Request to update a sales order line.
 */
export interface UpdateSalesOrderLineRequest {
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
   */
  product_sku: string;

  /**
   * Body param: A value with an associated unit, used in create and update requests.
   */
  quantity: CustomersAPI.QuantityInput;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'product' | 'quantity_ordered' | 'unit_price' | 'unit_cost' | 'totals'>;

  /**
   * Body param: The product description recorded on the line.
   */
  product_description?: string;

  /**
   * Body param: A rate value with its numerator and denominator units, used in
   * create and update requests.
   */
  unit_price?: SalesOrdersAPI.RateInput;
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

Lines.Actions = Actions;

export declare namespace Lines {
  export {
    type CreateSalesOrderLineRequest as CreateSalesOrderLineRequest,
    type UpdateSalesOrderLineRequest as UpdateSalesOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };

  export {
    Actions as Actions,
    type ReorderSalesOrderLinesRequest as ReorderSalesOrderLinesRequest,
    type ActionReorderResponse as ActionReorderResponse,
    type ActionReorderParams as ActionReorderParams,
  };
}
