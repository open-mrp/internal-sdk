// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from '../core/analytics';
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
   * Returns a delivery by ID.
   *
   * This endpoint requires the permission: `deliveries:read`.
   *
   * @example
   * ```ts
   * const delivery =
   *   await client.operations.deliveries.retrieve(
   *     'dlv_9xsjlqx5753y',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: DeliveryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Delivery> {
    return this._client.get(path`/v1/operations/deliveries/${id}`, { query, ...options });
  }

  /**
   * Returns a paginated list of deliveries for the current account, newest first.
   *
   * Only deliveries where goods were accepted into inventory are returned by
   * default; pass `status` to include fully rejected ones.
   *
   * This endpoint requires the permission: `deliveries:read`.
   *
   * @example
   * ```ts
   * const listDelivery =
   *   await client.operations.deliveries.list();
   * ```
   */
  list(
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListDelivery> {
    return this._client.get('/v1/operations/deliveries', { query, ...options });
  }
}

/**
 * A delivery of goods received against a purchase order.
 *
 * Deliveries are not created directly. One is recorded each time a receiving order
 * is stocked, capturing what arrived in that shipment, where it was put away, and
 * what was refused on inspection. A purchase order received in several shipments
 * therefore has several deliveries.
 */
export interface Delivery {
  /**
   * Delivery ID.
   */
  id: string;

  /**
   * When goods on this delivery were accepted into inventory.
   *
   * A delivery that also had quantities refused has both this and `rejected_at` set.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  lines: ListDeliveryLine | null;

  /**
   * Human-readable delivery number.
   *
   * The first delivery against a purchase order takes that order's number; each
   * later delivery appends a sequence suffix, such as `PO-001-2`.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'delivery';

  /**
   * When goods on this delivery were refused on inspection.
   */
  rejected_at: string | null;

  /**
   * DeliveryRelated names the records a delivery sits between.
   */
  related: DeliveryRelated | null;

  /**
   * Whether any of the delivered goods were accepted into inventory.
   *
   * - `accepted`: at least part of the shipment was put into inventory. Quantities
   *   refused on inspection can still appear on the delivery's lines.
   * - `rejected`: nothing on the delivery entered inventory.
   */
  status: 'accepted' | 'rejected';

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * A quantity of one item recorded on a delivery.
 *
 * Stocking a receiving order creates one line for each storage allocation of
 * accepted goods, plus one further line for any quantity refused on inspection.
 * Exactly one of `accepted_at` and `rejected_at` is set on each line, so a single
 * receiving order line can produce several delivery lines.
 */
export interface DeliveryLine {
  /**
   * Delivery line ID.
   */
  id: string;

  /**
   * When the goods on this line were accepted into inventory.
   */
  accepted_at: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * A physical storage location, such as a warehouse, aisle, or bin, arranged in a
   * parent-child hierarchy.
   */
  location: AccountUsersAPI.Location | null;

  /**
   * An inventory lot — a batch of an item received together and tracked under a
   * single lot number.
   */
  lot: Lot | null;

  /**
   * Resource type identifier.
   */
  object: 'delivery_line';

  /**
   * A single line item on a purchase order.
   */
  order_line: PurchaseOrderLine | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity: AccountUsersAPI.Quantity | null;

  /**
   * When the goods on this line were refused on inspection.
   */
  rejected_at: string | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_cost: AccountUsersAPI.Rate | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;
}

/**
 * DeliveryRelated names the records a delivery sits between.
 */
export interface DeliveryRelated {
  /**
   * Resource type identifier.
   */
  object: 'delivery_related';

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like the `actor` and `entity` references, it carries just enough to identify and
   * label the referenced record without embedding its full resource. The `status`
   * and `metadata` fields hold type-specific detail that varies by the kind of
   * record referenced.
   */
  purchase_order: SalesOrdersAPI.Record | null;

  /**
   * Record is a lightweight reference to a business record — a sales order, purchase
   * order, pick, shipment, production run, invoice, etc.
   *
   * Like the `actor` and `entity` references, it carries just enough to identify and
   * label the referenced record without embedding its full resource. The `status`
   * and `metadata` fields hold type-specific detail that varies by the kind of
   * record referenced.
   */
  receiving_order: SalesOrdersAPI.Record | null;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListDelivery {
  /**
   * Resources in this page.
   */
  data: Array<Delivery>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * An inventory lot — a batch of an item received together and tracked under a
 * single lot number.
 */
export interface Lot {
  /**
   * Lot ID.
   */
  id: string;

  /**
   * Lot number identifying the batch.
   *
   * Unique per item within the account: stocking goods under a lot number that
   * already exists for that item records them into the existing lot rather than
   * creating a new one.
   */
  lot_number: string;

  /**
   * Resource type identifier.
   */
  object: 'lot';
}

/**
 * A single line item on a purchase order.
 */
export interface PurchaseOrderLine {
  /**
   * Purchase order line ID.
   */
  id: string;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Sequence number of this line within the order, starting at 1.
   *
   * Assigned automatically as one past the highest number currently on the order, so
   * deleting a line can leave a gap in the numbering.
   */
  line_item_number: number;

  /**
   * Resource type identifier.
   */
  object: 'purchase_order_line';

  /**
   * Free-text description of the ordered product.
   */
  product_description: string | null;

  /**
   * SKU of the ordered product, copied onto the line at order time.
   */
  product_sku: string;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  quantity_ordered: AccountUsersAPI.Quantity | null;

  /**
   * An amount calculated on demand rather than stored.
   *
   * The same shape as a quantity minus the ID, because nothing was written: it is
   * derived per request, such as a total rolled up across invoiced lines for one
   * analysis.
   */
  quantity_received: AnalyticsAPI.ComputedQuantity | null;

  /**
   * Value expressed as a ratio of two units, such as a price per kilogram or a
   * throughput per hour.
   */
  unit_price: AccountUsersAPI.Rate | null;

  /**
   * Updated timestamp.
   */
  updated_at: string;
}

export interface DeliveryRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'related'
    | 'related.purchase_order'
    | 'related.receiving_order'
    | 'lines'
    | 'lines.item'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.unit_cost'
    | 'lines.unit_cost.numerator_unit'
    | 'lines.unit_cost.denominator_unit'
    | 'lines.location'
    | 'lines.lot'
  >;
}

export interface DeliveryListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only include deliveries created on or before this date (`YYYY-MM-DD`), covering
   * that whole day.
   */
  ends_at?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'related'
    | 'related.purchase_order'
    | 'related.receiving_order'
    | 'lines'
    | 'lines.item'
    | 'lines.order_line'
    | 'lines.order_line.item'
    | 'lines.order_line.quantity_ordered'
    | 'lines.order_line.quantity_ordered.unit'
    | 'lines.order_line.unit_price'
    | 'lines.order_line.unit_price.numerator_unit'
    | 'lines.order_line.unit_price.denominator_unit'
    | 'lines.quantity'
    | 'lines.quantity.unit'
    | 'lines.unit_cost'
    | 'lines.unit_cost.numerator_unit'
    | 'lines.unit_cost.denominator_unit'
    | 'lines.location'
    | 'lines.lot'
  >;

  /**
   * Filter to deliveries with at least one line for any of the given item IDs.
   */
  item_ids?: Array<string>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;

  /**
   * Only include deliveries created on or after this date (`YYYY-MM-DD`).
   */
  starts_at?: string;

  /**
   * Filter by delivery status.
   *
   * Deliveries where nothing was accepted into inventory are hidden unless you ask
   * for `rejected` or `all`.
   */
  status?: 'all' | 'accepted' | 'rejected';

  /**
   * Filter to deliveries whose purchase order is with any of the given supplier
   * account IDs.
   */
  supplier_ids?: Array<string>;
}

export declare namespace Deliveries {
  export {
    type Delivery as Delivery,
    type DeliveryLine as DeliveryLine,
    type DeliveryRelated as DeliveryRelated,
    type ListDelivery as ListDelivery,
    type ListDeliveryLine as ListDeliveryLine,
    type Lot as Lot,
    type PurchaseOrderLine as PurchaseOrderLine,
    type DeliveryRetrieveParams as DeliveryRetrieveParams,
    type DeliveryListParams as DeliveryListParams,
  };
}
