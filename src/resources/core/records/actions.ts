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
   *     shipment_id: 'sh_018b3a946651bfb6572b06b2b2',
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A pack-list document assembled for a shipment: the shipment's packed line items
 * and shipping cases, the parent order's header, parties, and terms, and any order
 * lines still back-ordered. It is generated on demand for printing and is a
 * point-in-time snapshot; it is not persisted.
 */
export interface PackList {
  /**
   * Presigned download URL for the selling account's logo. Expires one hour after it
   * is generated, so render it promptly rather than caching it.
   */
  account_logo_url: string | null;

  /**
   * Selling account's display name.
   */
  account_name: string;

  /**
   * List represents a paginated list of resources.
   */
  back_orders: ListPackListBackOrder | null;

  /**
   * A bill-to or ship-to party shown on a pack list.
   */
  bill_to: PackListParty | null;

  /**
   * Carrier name.
   */
  carrier: string | null;

  /**
   * Service level name.
   */
  carrier_option: string | null;

  /**
   * Additional contact lines shown under the billing party: the order's email
   * recipients followed by the billing contact phone.
   */
  contact_information: Array<string>;

  /**
   * Customer's purchase order number.
   */
  customer_po: string | null;

  /**
   * List represents a paginated list of resources.
   */
  line_items: ListPackListLineItem | null;

  /**
   * Resource type identifier.
   */
  object: 'pack_list';

  /**
   * Payment term name.
   */
  payment_term: string | null;

  /**
   * Order priority name.
   */
  priority: string | null;

  /**
   * Parent sales order number.
   */
  sales_order_number: string;

  /**
   * Sales representative name.
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
   * List represents a paginated list of resources.
   */
  shipping_cases: ListPackListCase | null;
}

/**
 * An order line with quantity still back-ordered after this shipment.
 */
export interface PackListBackOrder {
  /**
   * Product description.
   */
  description: string;

  /**
   * The order line's line number.
   */
  line_item_number: number | null;

  /**
   * Resource type identifier.
   */
  object: 'pack_list_back_order';

  /**
   * Quantity still back-ordered.
   */
  quantity_back_ordered: string;

  /**
   * Quantity ordered.
   */
  quantity_ordered: string;

  /**
   * Quantity shipped so far.
   */
  quantity_shipped: string;

  /**
   * Product SKU.
   */
  sku: string;

  /**
   * Unit name.
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
   * The order line's line number.
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
   * Unit name.
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
