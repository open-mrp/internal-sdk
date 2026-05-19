// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as LocationsAPI from './locations';
import * as OperationsAPI from './operations';
import * as ItemsAPI from '../catalog/items/items';
import * as BatchesAPI from './batches/batches';
import * as SalesOrdersAPI from '../sales/sales-orders/sales-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and view deliveries.
 */
export class Deliveries extends APIResource {
  /**
   * Returns a delivery by ID, including all delivery lines.
   *
   * @example
   * ```ts
   * const delivery =
   *   await client.operations.deliveries.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DeliveryRetrieveResponse> {
    return this._client.get(path`/v1/operations/deliveries/${id}`, options);
  }

  /**
   * Returns a paginated list of deliveries for the caller's account.
   *
   * @example
   * ```ts
   * const deliveries =
   *   await client.operations.deliveries.list();
   * ```
   */
  list(
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryListResponse> {
    return this._client.get('/v1/operations/deliveries', { query, ...options });
  }
}

/**
 * Delivery with line items.
 */
export interface DeliveryRetrieveResponse {
  /**
   * Delivery ID.
   */
  id: string;

  /**
   * Accepted timestamp.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * List represents a paginated list of resources.
   */
  lines: DeliveryRetrieveResponse.Lines | null;

  /**
   * Delivery number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'delivery';

  /**
   * Full sales order resource.
   */
  purchase_order: SalesOrdersAPI.SalesOrderDetail | null;

  /**
   * Rejected timestamp.
   */
  rejected_at: string | null;

  /**
   * Delivery status (accepted or rejected).
   */
  status: 'accepted' | 'rejected';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

export namespace DeliveryRetrieveResponse {
  /**
   * List represents a paginated list of resources.
   */
  export interface Lines {
    /**
     * Resources in this page.
     */
    data: Array<Lines.Data>;

    /**
     * Resource type identifier.
     */
    object: 'list';

    /**
     * PageInfo contains URL-based pagination metadata.
     */
    page_info: AgentsAPI.PageInfo;
  }

  export namespace Lines {
    /**
     * Delivery line item.
     */
    export interface Data {
      /**
       * Delivery line ID.
       */
      id: string;

      /**
       * Accepted timestamp.
       */
      accepted_at: string | null;

      /**
       * Creation timestamp.
       */
      created_at: string;

      /**
       * Item is an inventory item (product, material, or part).
       */
      item: ItemsAPI.Item | null;

      /**
       * Location resource.
       */
      location: LocationsAPI.Location | null;

      /**
       * Lot sub-resource.
       */
      lot: Data.Lot | null;

      /**
       * Resource type identifier.
       */
      object: 'delivery_line';

      /**
       * Value with an associated unit.
       */
      quantity: BatchesAPI.Quantity | null;

      /**
       * Rejected timestamp.
       */
      rejected_at: string | null;

      /**
       * Rate resource.
       */
      unit_cost: OperationsAPI.Rate | null;

      /**
       * Last update timestamp.
       */
      updated_at: string;
    }

    export namespace Data {
      /**
       * Lot sub-resource.
       */
      export interface Lot {
        /**
         * Lot ID.
         */
        id: string;

        /**
         * Lot number.
         */
        lot_number: string;

        /**
         * Resource type identifier.
         */
        object: 'lot';
      }
    }
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface DeliveryListResponse {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace DeliveryListResponse {
  /**
   * Delivery summary with line count.
   */
  export interface Data {
    /**
     * Delivery ID.
     */
    id: string;

    /**
     * Accepted timestamp.
     */
    accepted_at: string | null;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Number of delivery lines.
     */
    line_count: number;

    /**
     * Delivery number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'delivery';

    /**
     * Full sales order resource.
     */
    purchase_order: SalesOrdersAPI.SalesOrderDetail | null;

    /**
     * Rejected timestamp.
     */
    rejected_at: string | null;

    /**
     * Delivery status (accepted or rejected).
     */
    status: 'accepted' | 'rejected';

    /**
     * Last update timestamp.
     */
    updated_at: string;
  }
}

export interface DeliveryListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter by end date (inclusive).
   */
  end_date?: string;

  /**
   * Filter by item IDs present in delivery lines.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter by start date (inclusive).
   */
  start_date?: string;

  /**
   * Filter by status: all, accepted, or rejected. Defaults to accepted.
   */
  status?: string;

  /**
   * Filter by supplier account IDs.
   */
  supplier_ids?: Array<string>;
}

export declare namespace Deliveries {
  export {
    type DeliveryRetrieveResponse as DeliveryRetrieveResponse,
    type DeliveryListResponse as DeliveryListResponse,
    type DeliveryListParams as DeliveryListParams,
  };
}
