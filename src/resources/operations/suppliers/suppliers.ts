// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as AddressesAPI from '../../sales/addresses';
import * as ActionsAPI from './actions';
import { ActionBulkDeleteParams, ActionBulkDeleteResponse, Actions } from './actions';
import * as MaterialsAPI from './materials';
import {
  MaterialCreateParams,
  MaterialDeleteParams,
  MaterialListParams,
  MaterialListResponse,
  MaterialRetrieveParams,
  MaterialUpdateParams,
  Materials,
  SupplierMaterial,
} from './materials';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage suppliers.
 */
export class Suppliers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);

  /**
   * Creates a supplier, optionally with inline bill-to and ship-to addresses.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.create({
   *     bill_to_address: {
   *       name: 'Acme Supplies Inc.',
   *       type: null,
   *       country: 'US',
   *     },
   *     name: 'Acme Supplies Inc.',
   *     note: 'Primary raw materials supplier',
   *     number: 'SUP-001',
   *     ship_to_address: {
   *       country: 'US',
   *       name: 'Headquarters',
   *     },
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
   *     'ac_02kn5s7811g9qwce7cizr4e0mq',
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
   *     'ac_02kn5s7811g9qwce7cizr4e0mq',
   *     {
   *       bill_to_address_id: null,
   *       name: 'Acme Supplies LLC',
   *       note: 'Updated contact info',
   *       number: null,
   *       ship_to_address_id: null,
   *       update_note: true,
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
   * const suppliers = await client.operations.suppliers.list();
   * ```
   */
  list(
    query: SupplierListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SupplierListResponse> {
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
   *     'ac_02kn5s7811g9qwce7cizr4e0mq',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SupplierDetail> {
    return this._client.delete(path`/v1/operations/suppliers/${id}`, options);
  }
}

/**
 * SupplierDetail is the full supplier resource.
 */
export interface SupplierDetail {
  /**
   * Supplier ID.
   */
  id: string;

  /**
   * Address with associated geolocation.
   */
  bill_to_address: AddressesAPI.Address | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Number of associated materials.
   */
  material_count: number;

  /**
   * Display name.
   */
  name: string;

  /**
   * Supplier notes.
   */
  note: string | null;

  /**
   * Supplier number.
   */
  number: string;

  /**
   * Resource type identifier.
   */
  object: 'supplier';

  /**
   * Address with associated geolocation.
   */
  ship_to_address: AddressesAPI.Address | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface SupplierListResponse {
  /**
   * Resources in this page.
   */
  data: Array<SupplierListResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace SupplierListResponse {
  /**
   * SupplierSummary is the lightweight supplier resource for list results.
   */
  export interface Data {
    /**
     * Supplier ID.
     */
    id: string;

    /**
     * Creation timestamp.
     */
    created_at: string;

    /**
     * Number of associated materials.
     */
    material_count: number;

    /**
     * Display name.
     */
    name: string;

    /**
     * Supplier number.
     */
    number: string;

    /**
     * Resource type identifier.
     */
    object: 'supplier_summary';
  }
}

export interface SupplierCreateParams {
  /**
   * Request to create an address.
   */
  bill_to_address: AddressesAPI.AddressInput | null;

  /**
   * Display name.
   */
  name: string;

  /**
   * Supplier notes.
   */
  note: string | null;

  /**
   * Supplier number. Must be unique per account.
   */
  number: string;

  /**
   * Request to create an address.
   */
  ship_to_address: AddressesAPI.AddressInput | null;
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
   * Bill-to address ID.
   */
  bill_to_address_id: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Note value. Set update_note to true to apply.
   */
  note: string | null;

  /**
   * Supplier number.
   */
  number: string | null;

  /**
   * Ship-to address ID.
   */
  ship_to_address_id: string | null;

  /**
   * Whether to update the note field. Allows clearing to null.
   */
  update_note: boolean;
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

Suppliers.Actions = Actions;
Suppliers.Materials = Materials;

export declare namespace Suppliers {
  export {
    type SupplierDetail as SupplierDetail,
    type SupplierListResponse as SupplierListResponse,
    type SupplierCreateParams as SupplierCreateParams,
    type SupplierRetrieveParams as SupplierRetrieveParams,
    type SupplierUpdateParams as SupplierUpdateParams,
    type SupplierListParams as SupplierListParams,
  };

  export {
    Actions as Actions,
    type ActionBulkDeleteResponse as ActionBulkDeleteResponse,
    type ActionBulkDeleteParams as ActionBulkDeleteParams,
  };

  export {
    Materials as Materials,
    type SupplierMaterial as SupplierMaterial,
    type MaterialListResponse as MaterialListResponse,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
    type MaterialDeleteParams as MaterialDeleteParams,
  };
}
