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
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.retrieve(
   *     'ac_0177902104bccac5fbb173cd96',
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
   * Partially updates a supplier. Set update_note to true to update the note field,
   * including clearing it.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.update(
   *     'ac_0177902104bccac5fbb173cd96',
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
   * Returns a paginated list of suppliers for the current account.
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
   * Deletes a supplier and its associated account relations, addresses, and account
   * users.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.delete(
   *     'ac_0177902104bccac5fbb173cd96',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SupplierDetail> {
    return this._client.delete(path`/v1/operations/suppliers/${id}`, options);
  }
}

/**
 * CreateSupplierRequest is the request to create a supplier.
 */
export interface CreateSupplierRequest {
  /**
   * Display name.
   */
  name: string;

  /**
   * Supplier number. Must be unique per account.
   */
  number: string;

  /**
   * Request to create an address.
   */
  bill_to_address?: CustomersAPI.AddressInput;

  /**
   * Supplier notes.
   */
  note?: string;

  /**
   * Request to create an address.
   */
  ship_to_address?: CustomersAPI.AddressInput;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
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
   * Address with associated geolocation.
   */
  bill_to_address: APIKeysAPI.Address | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Number of materials sourced from this supplier.
   */
  material_count: number;

  /**
   * Display name.
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
   * Address with associated geolocation.
   */
  ship_to_address: APIKeysAPI.Address | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A condensed supplier representation returned by list endpoints.
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
   */
  material_count: number;

  /**
   * Display name.
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
 * UpdateSupplierRequest is the request to update a supplier.
 */
export interface UpdateSupplierRequest {
  /**
   * Whether to update the note field. Allows clearing to null.
   */
  update_note: boolean;

  /**
   * Bill-to address ID.
   */
  bill_to_address_id?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Note value. Set update_note to true to apply.
   */
  note?: string;

  /**
   * Supplier number.
   */
  number?: string;

  /**
   * Ship-to address ID.
   */
  ship_to_address_id?: string;
}

export interface SupplierCreateParams {
  /**
   * Display name.
   */
  name: string;

  /**
   * Supplier number. Must be unique per account.
   */
  number: string;

  /**
   * Request to create an address.
   */
  bill_to_address?: CustomersAPI.AddressInput;

  /**
   * Supplier notes.
   */
  note?: string;

  /**
   * Request to create an address.
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
   * Whether to update the note field. Allows clearing to null.
   */
  update_note: boolean;

  /**
   * Bill-to address ID.
   */
  bill_to_address_id?: string;

  /**
   * Display name.
   */
  name?: string;

  /**
   * Note value. Set update_note to true to apply.
   */
  note?: string;

  /**
   * Supplier number.
   */
  number?: string;

  /**
   * Ship-to address ID.
   */
  ship_to_address_id?: string;
}

export interface SupplierListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * End date filter (created before).
   */
  end_date?: string;

  /**
   * Item IDs filter. Returns suppliers with materials for these items.
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
   * Start date filter (created after).
   */
  start_date?: string;
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
