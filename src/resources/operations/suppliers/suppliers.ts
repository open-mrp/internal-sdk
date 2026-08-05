// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  Actions,
  BulkDeleteSuppliersRequest,
} from './actions';
import * as MaterialsAPI from './materials';
import {
  CreateSupplierMaterialRequest,
  ListSupplierMaterial,
  MaterialCreateParams,
  MaterialDeleteParams,
  MaterialListParams,
  MaterialRetrieveParams,
  MaterialUpdateParams,
  Materials,
  SupplierMaterial,
  UpdateSupplierMaterialRequest,
} from './materials';
import * as CustomersAPI from '../../sales/customers/customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage suppliers.
 */
export class Suppliers extends APIResource {
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a supplier, optionally with inline bill-to and ship-to addresses.
   *
   * Returns a conflict error if another supplier in the account already uses the
   * given number.
   *
   * This endpoint requires the permission: `suppliers:create`.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.create({
   *     name: 'Acme Supplies Inc.',
   *     number: 'SUP-001',
   *     bill_to_address: {
   *       name: 'Acme Supplies Inc.',
   *       street_line_1: '456 Industrial Pkwy',
   *       locality: 'Chicago',
   *       state: 'IL',
   *       postal_code: '60601',
   *       country: 'US',
   *     },
   *     note: 'Primary raw materials supplier',
   *   });
   * ```
   */
  create(body: SupplierCreateParams, options?: RequestOptions): APIPromise<SupplierDetail> {
    return this._client.post('/v1/operations/suppliers', { body, ...options });
  }

  /**
   * Returns a supplier by ID.
   *
   * This endpoint requires the permission: `suppliers:read`.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.retrieve(
   *     'ac_gwy8tfbc074f',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: SupplierRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SupplierDetail> {
    return this._client.get(path`/v1/operations/suppliers/${id}`, { query, ...options });
  }

  /**
   * Partially updates a supplier.
   *
   * Only provided fields are changed. To update or clear the note, set `update_note`
   * to `true`.
   *
   * This endpoint requires the permission: `suppliers:update`.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.update(
   *     'ac_gwy8tfbc074f',
   *     {
   *       update_note: true,
   *       name: 'Acme Supplies LLC',
   *       note: 'Updated contact info',
   *     },
   *   );
   * ```
   */
  update(id: string, body: SupplierUpdateParams, options?: RequestOptions): APIPromise<SupplierDetail> {
    return this._client.patch(path`/v1/operations/suppliers/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of suppliers for the current account, newest first.
   *
   * Filters combine with AND, so an item filter and a date range narrow the list
   * together. The `q` search term matches the supplier name and number.
   *
   * This endpoint requires the permission: `suppliers:read`.
   *
   * @example
   * ```ts
   * const listSupplierSummary =
   *   await client.operations.suppliers.list();
   * ```
   */
  list(
    query: SupplierListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSupplierSummary> {
    return this._client.get('/v1/operations/suppliers', { query, ...options });
  }

  /**
   * Deletes a supplier.
   *
   * The supplier's saved addresses and any users belonging to the supplier are
   * deleted along with it. Returns the supplier as it looked immediately before
   * deletion. Deleting a supplier that has already been deleted returns an error
   * rather than succeeding again.
   *
   * This endpoint requires the permission: `suppliers:update`.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.delete(
   *     'ac_gwy8tfbc074f',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SupplierDetail> {
    return this._client.delete(path`/v1/operations/suppliers/${id}`, options);
  }
}

/**
 * Request to create a supplier.
 */
export interface CreateSupplierRequest {
  /**
   * The supplier's name, as shown in the dashboard and on documents.
   */
  name: string;

  /**
   * Human-facing supplier code, such as `SUP-001`.
   *
   * Must be unique per account; creating a supplier with a number already in use
   * returns a conflict error.
   */
  number: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  bill_to_address?: CustomersAPI.AddressInput;

  /**
   * Free-form notes about the supplier.
   */
  note?: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  ship_to_address?: CustomersAPI.AddressInput;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListSupplierSummary {
  /**
   * Resources in this page.
   */
  data: Array<SupplierSummary>;

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
 * A business you purchase materials from, with its default billing and shipping
 * addresses.
 */
export interface SupplierDetail {
  /**
   * Supplier ID.
   */
  id: string;

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Number of materials sourced from this supplier.
   *
   * Counts every material linked to the supplier, including links whose status is
   * `inactive`.
   */
  material_count: number;

  /**
   * The supplier's name, as shown in the dashboard and on documents.
   */
  name: string;

  /**
   * Free-form notes about the supplier.
   */
  note: string | null;

  /**
   * Human-facing supplier code, unique per account (e.g. `SUP-001`).
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'supplier';

  /**
   * A saved address that can be used for billing and shipping on sales orders,
   * invoices, and shipments.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A condensed supplier returned by the supplier list endpoint.
 *
 * The supplier's note and its default bill-to and ship-to addresses are only
 * available when a single supplier is retrieved.
 */
export interface SupplierSummary {
  /**
   * Supplier ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Number of materials sourced from this supplier.
   *
   * Counts every material linked to the supplier, including links whose status is
   * `inactive`.
   */
  material_count: number;

  /**
   * The supplier's name, as shown in the dashboard and on documents.
   */
  name: string;

  /**
   * Human-facing supplier code, unique per account (e.g. `SUP-001`).
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'supplier_summary';
}

/**
 * Request to update a supplier.
 */
export interface UpdateSupplierRequest {
  /**
   * Whether to apply the `note` field.
   *
   * When `true`, the note is set to the provided `note` value, or cleared if `note`
   * is omitted. When `false`, the note is left unchanged.
   */
  update_note: boolean;

  /**
   * ID of an existing address to set as the supplier's default billing address.
   */
  bill_to_address_id?: string;

  /**
   * The supplier's name, as shown in the dashboard and on documents.
   */
  name?: string;

  /**
   * New value for the supplier's note.
   *
   * Ignored unless `update_note` is `true`.
   */
  note?: string;

  /**
   * Human-facing supplier code, such as `SUP-001`.
   *
   * Must be unique per account; updating to a number already used by another
   * supplier returns a conflict error.
   */
  number?: string;

  /**
   * ID of an existing address to set as the supplier's default shipping address.
   */
  ship_to_address_id?: string;
}

export interface SupplierCreateParams {
  /**
   * The supplier's name, as shown in the dashboard and on documents.
   */
  name: string;

  /**
   * Human-facing supplier code, such as `SUP-001`.
   *
   * Must be unique per account; creating a supplier with a number already in use
   * returns a conflict error.
   */
  number: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  bill_to_address?: CustomersAPI.AddressInput;

  /**
   * Free-form notes about the supplier.
   */
  note?: string;

  /**
   * Address details supplied when creating an address, either on its own or inline
   * on another resource.
   *
   * A few requests, such as shipping rate estimates, take these same fields for a
   * one-off address that is never saved to the account.
   */
  ship_to_address?: CustomersAPI.AddressInput;
}

export interface SupplierRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'bill_to_address' | 'ship_to_address'>;
}

export interface SupplierUpdateParams {
  /**
   * Whether to apply the `note` field.
   *
   * When `true`, the note is set to the provided `note` value, or cleared if `note`
   * is omitted. When `false`, the note is left unchanged.
   */
  update_note: boolean;

  /**
   * ID of an existing address to set as the supplier's default billing address.
   */
  bill_to_address_id?: string;

  /**
   * The supplier's name, as shown in the dashboard and on documents.
   */
  name?: string;

  /**
   * New value for the supplier's note.
   *
   * Ignored unless `update_note` is `true`.
   */
  note?: string;

  /**
   * Human-facing supplier code, such as `SUP-001`.
   *
   * Must be unique per account; updating to a number already used by another
   * supplier returns a conflict error.
   */
  number?: string;

  /**
   * ID of an existing address to set as the supplier's default shipping address.
   */
  ship_to_address_id?: string;
}

export interface SupplierListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Only return suppliers created at or before this timestamp.
   */
  ends_at?: string;

  /**
   * Filter to suppliers that can source any of these items.
   *
   * A supplier matches when it provides a material for one of the items, whether or
   * not that material link is active.
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
   * Only return suppliers created at or after this timestamp.
   */
  starts_at?: string;
}

Suppliers.Materials = Materials;
Suppliers.Actions = Actions;

export declare namespace Suppliers {
  export {
    type CreateSupplierRequest as CreateSupplierRequest,
    type ListSupplierSummary as ListSupplierSummary,
    type SupplierDetail as SupplierDetail,
    type SupplierSummary as SupplierSummary,
    type UpdateSupplierRequest as UpdateSupplierRequest,
    type SupplierCreateParams as SupplierCreateParams,
    type SupplierRetrieveParams as SupplierRetrieveParams,
    type SupplierUpdateParams as SupplierUpdateParams,
    type SupplierListParams as SupplierListParams,
  };

  export {
    Materials as Materials,
    type CreateSupplierMaterialRequest as CreateSupplierMaterialRequest,
    type ListSupplierMaterial as ListSupplierMaterial,
    type SupplierMaterial as SupplierMaterial,
    type UpdateSupplierMaterialRequest as UpdateSupplierMaterialRequest,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
    type MaterialDeleteParams as MaterialDeleteParams,
  };

  export {
    Actions as Actions,
    type BulkDeleteSuppliersRequest as BulkDeleteSuppliersRequest,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
  };
}
