// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../identity/account-users/account-users';
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
   *   await client.operations.deliveries.retrieve(
   *     'dlv_0143cbea89e0f17c3d19828a3a',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Delivery> {
    return this._client.get(path`/v1/operations/deliveries/${id}`, options);
  }

  /**
   * Returns a paginated list of deliveries for the caller's account.
   *
   * @example
   * ```ts
   * const listDeliverySummary =
   *   await client.operations.deliveries.list();
   * ```
   */
  list(
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListDeliverySummary> {
    return this._client.get('/v1/operations/deliveries', { query, ...options });
  }
}

/**
 * Delivery with line items.
 */
export interface Delivery {
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
  lines: ListDeliveryLine | null;

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

/**
 * Delivery line item.
 */
export interface DeliveryLine {
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
  item: AccountUsersAPI.Item | null;

  /**
   * Location resource.
   */
  location: AccountUsersAPI.Location | null;

  /**
   * Lot sub-resource.
   */
  lot: Lot | null;

  /**
   * Resource type identifier.
   */
  object: 'delivery_line';

  /**
   * Value with an associated unit.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * Rejected timestamp.
   */
  rejected_at: string | null;

  /**
   * Rate resource.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * Delivery summary with line count.
 */
export interface DeliverySummary {
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

/**
 * List represents a paginated list of resources.
 */
export interface ListDeliveryLine {
  /**
   * Resources in this page.
   */
  data: Array<DeliveryLine>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListDeliverySummary {
  /**
   * Resources in this page.
   */
  data: Array<DeliverySummary>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

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
    type Delivery as Delivery,
    type DeliveryLine as DeliveryLine,
    type DeliverySummary as DeliverySummary,
    type ListDeliveryLine as ListDeliveryLine,
    type ListDeliverySummary as ListDeliverySummary,
    type Lot as Lot,
    type DeliveryListParams as DeliveryListParams,
  };
}
