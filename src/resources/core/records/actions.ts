// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Cross-record document generation, such as pack lists.
 */
export class Actions extends APIResource {
  /**
   * Assembles a printable pack-list document for a shipment.
   *
   * Gathers the shipment's packed line items and shipping cases (with carrier
   * tracking numbers and case weights) together with its parent order's header,
   * bill-to and ship-to parties, terms, and any order lines still back-ordered, and
   * returns them as a single document ready to render. The document is a
   * point-in-time snapshot and is not persisted.
   *
   * This endpoint requires the permissions: `shipments:read`, `sales_orders:read`.
   *
   * @example
   * ```ts
   * const packList =
   *   await client.core.records.actions.generatePackList({
   *     shipment_id: 'sh_pfygp2gl45y4',
   *   });
   * ```
   */
  generatePackList(body: ActionGeneratePackListParams, options?: RequestOptions): APIPromise<PackList> {
    return this._client.post('/v1/core/records/actions/generate-pack-list', { body, ...options });
  }
}

/**
 * Request to generate a pack list for a shipment.
 */
export interface GenPackListRequest {
  /**
   * ID of the shipment to generate the pack list for.
   */
  shipment_id: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListPackListBackOrder {
  /**
   * Resources in this page.
   */
  data: Array<PackListBackOrder>;

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
export interface ListPackListCase {
  /**
   * Resources in this page.
   */
  data: Array<PackListCase>;

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
export interface ListPackListLineItem {
  /**
   * Resources in this page.
   */
  data: Array<PackListLineItem>;

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
 * A pack-list document assembled for a shipment: the shipment's packed line items
 * and shipping cases, the parent order's header, parties, and terms, and any order
 * lines still back-ordered.
 *
 * The document is generated on demand for printing and is a point-in-time snapshot
 * of the shipment and its order; it is not persisted and cannot be retrieved again
 * by ID.
 */
export interface PackList {
  /**
   * Presigned download URL for the selling account's logo.
   *
   * The URL expires one hour after it is generated, so render it promptly rather
   * than caching it. Logo lookup is best effort: if the account has no logo or it
   * cannot be resolved, the rest of the document is still returned.
   */
  account_logo_url: string | null;

  /**
   * Selling account's display name.
   */
  account_name: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  back_orders: ListPackListBackOrder | null;

  /**
   * A bill-to or ship-to party shown on a pack list.
   */
  bill_to: PackListParty | null;

  /**
   * Name of the carrier moving the shipment.
   */
  carrier: string | null;

  /**
   * Name of the carrier service level used for the shipment, such as `Ground`.
   */
  carrier_option: string | null;

  /**
   * Additional contact lines shown under the billing party: the sales order contacts
   * set to receive invoice emails, followed by the billing contact phone.
   */
  contact_information: Array<string>;

  /**
   * Customer's purchase order number.
   */
  customer_po: string | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  line_items: ListPackListLineItem | null;

  /**
   * Resource type identifier.
   */
  object: 'pack_list';

  /**
   * Name of the parent order's payment term.
   */
  payment_term: string | null;

  /**
   * Name of the parent order's priority.
   */
  priority: string | null;

  /**
   * Parent sales order number.
   */
  sales_order_number: string;

  /**
   * Name of the sales representative on the parent order.
   */
  sales_rep: string | null;

  /**
   * A bill-to or ship-to party shown on a pack list.
   */
  ship_to: PackListParty | null;

  /**
   * Shipment number.
   */
  shipment_number: string;

  /**
   * When the shipment was dispatched.
   */
  shipped_at: string | null;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  shipping_cases: ListPackListCase | null;
}

/**
 * An order line that still has quantity outstanding once everything packed so far
 * is accounted for.
 */
export interface PackListBackOrder {
  /**
   * Product description.
   */
  description: string;

  /**
   * The sales order line's line number.
   */
  line_item_number: number | null;

  /**
   * Resource type identifier.
   */
  object: 'pack_list_back_order';

  /**
   * Quantity still outstanding: the quantity ordered less the quantity already
   * packed.
   */
  quantity_back_ordered: string;

  /**
   * Quantity ordered on the line.
   */
  quantity_ordered: string;

  /**
   * Quantity packed for the line across every shipment on the order, not just this
   * one.
   */
  quantity_shipped: string;

  /**
   * Product SKU.
   */
  sku: string;

  /**
   * Name of the unit the quantities are measured in.
   */
  unit: string;
}

/**
 * A shipping case on a pack list.
 */
export interface PackListCase {
  /**
   * Carrier name for the case.
   */
  carrier: string | null;

  /**
   * Case number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'pack_list_case';

  /**
   * Carrier tracking number for the case.
   */
  tracking_number: string | null;

  /**
   * Case weight.
   */
  weight: string;

  /**
   * Abbreviation of the weight unit.
   */
  weight_unit: string;
}

/**
 * A packed line item on a pack list.
 */
export interface PackListLineItem {
  /**
   * Product description.
   */
  description: string;

  /**
   * Line number of the sales order line this shipment line was packed from.
   */
  line_item_number: number | null;

  /**
   * Resource type identifier.
   */
  object: 'pack_list_line_item';

  /**
   * Quantity packed into this shipment.
   */
  quantity: string;

  /**
   * Product SKU.
   */
  sku: string;

  /**
   * Name of the unit the quantity is measured in.
   */
  unit: string;
}

/**
 * A bill-to or ship-to party shown on a pack list.
 */
export interface PackListParty {
  /**
   * Two-letter country code.
   */
  country: string | null;

  /**
   * Email address.
   */
  email: string | null;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Party name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'pack_list_party';

  /**
   * Phone number.
   */
  phone: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code: string | null;

  /**
   * State or administrative area.
   */
  state: string | null;

  /**
   * First line of the street address.
   */
  street_line_1: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2: string | null;
}

export interface ActionGeneratePackListParams {
  /**
   * ID of the shipment to generate the pack list for.
   */
  shipment_id: string;
}

export declare namespace Actions {
  export {
    type GenPackListRequest as GenPackListRequest,
    type ListPackListBackOrder as ListPackListBackOrder,
    type ListPackListCase as ListPackListCase,
    type ListPackListLineItem as ListPackListLineItem,
    type PackList as PackList,
    type PackListBackOrder as PackListBackOrder,
    type PackListCase as PackListCase,
    type PackListLineItem as PackListLineItem,
    type PackListParty as PackListParty,
    type ActionGeneratePackListParams as ActionGeneratePackListParams,
  };
}
