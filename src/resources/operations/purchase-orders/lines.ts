// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DeliveriesAPI from '../deliveries';
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
   * const purchaseOrderLine =
   *   await client.operations.purchaseOrders.lines.create(
   *     'po_0169aa3a722b081b117ac0e44f',
   *     {
   *       product_id: 'pd_013c29ab3f1518d0004094c316',
   *       product_sku: 'ALM-2024-1001',
   *       quantity_unit_id: 'un_01966263f74a5a0cae356000a1',
   *       quantity_value: '10',
   *       unit_price_denominator_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
   *       unit_price_numerator_unit_id:
   *         'un_01966263f74a5a0cae356000a1',
   *       unit_price_value: '25.500000000000000000000000000000',
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
   * @example
   * ```ts
   * const purchaseOrderLine =
   *   await client.operations.purchaseOrders.lines.update(
   *     'example',
   *     { id: 'po_0169aa3a722b081b117ac0e44f' },
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
 * OrderLineInput represents the shared fields for creating an order line item.
 * Used as an embedded struct in purchase order and sales order line inputs.
 */
export interface CreatePurchaseOrderLineRequest {
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
 * Request to update a purchase order line.
 */
export interface UpdatePurchaseOrderLineRequest {
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
    type CreatePurchaseOrderLineRequest as CreatePurchaseOrderLineRequest,
    type UpdatePurchaseOrderLineRequest as UpdatePurchaseOrderLineRequest,
    type LineDeleteResponse as LineDeleteResponse,
    type LineCreateParams as LineCreateParams,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
  };
}
