// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EdiRunsAPI from '../edi-runs';
import * as ActionsAPI from '../shipments/actions';
import * as LinesAPI from '../shipments/lines';
import * as SuppliersActionsAPI from './actions';
import {
  ActionBulkDeleteParams,
  ActionBulkDeleteResponse,
  Actions,
  BulkDeleteSuppliersRequest,
} from './actions';
import * as MaterialsAPI from './materials';
import {
  Account,
  AccountBranding,
  AccountPortal,
  Attribute,
  CreateSupplierMaterialRequest,
  Item,
  ItemCategory,
  ListAttribute,
  ListProperty,
  ListSupplierMaterial,
  ListUnitGroupUnit,
  Material,
  MaterialCreateParams,
  MaterialDeleteParams,
  MaterialListParams,
  MaterialRetrieveParams,
  MaterialUpdateParams,
  Materials,
  Owner,
  Property,
  Quantity,
  Rate,
  SupplierMaterial,
  Unit,
  UnitGroup,
  UnitGroupUnit,
  UpdateSupplierMaterialRequest,
} from './materials';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage suppliers.
 */
export class Suppliers extends APIResource {
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);
  actions: SuppliersActionsAPI.Actions = new SuppliersActionsAPI.Actions(this._client);

  /**
   * Creates a supplier, optionally with inline bill-to and ship-to addresses.
   *
   * @example
   * ```ts
   * const supplierDetail =
   *   await client.operations.suppliers.create({
   *     bill_to_address: {
   *       name: 'Acme Supplies Inc.',
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
   *       bill_to_address_id: 'bill_to_address_id',
   *       name: 'Acme Supplies LLC',
   *       note: 'Updated contact info',
   *       number: 'number',
   *       ship_to_address_id: 'ship_to_address_id',
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
 * Address with associated geolocation.
 */
export interface Address {
  /**
   * Address ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Email address associated with the address.
   */
  email: string | null;

  /**
   * Geolocation sub-resource.
   */
  geolocation: LinesAPI.Geolocation | null;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'address';

  /**
   * Phone number associated with the address.
   */
  phone: string | null;

  /**
   * Address type.
   */
  type: 'standard' | 'drop_ship';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to create an address.
 */
export interface AddressInput {
  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * Display name of the address.
   */
  name: string;

  /**
   * Email address associated with the address.
   */
  email?: string | null;

  /**
   * City or locality.
   */
  locality?: string | null;

  /**
   * Phone number associated with the address.
   */
  phone?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string | null;

  /**
   * State or administrative area.
   */
  state?: string | null;

  /**
   * First line of the street address.
   */
  street_line_1?: string | null;

  /**
   * Second line of the street address.
   */
  street_line_2?: string | null;

  /**
   * Address type.
   */
  type?: 'standard' | 'drop_ship';
}

/**
 * CreateSupplierRequest is the request to create a supplier.
 */
export interface CreateSupplierRequest {
  /**
   * Request to create an address.
   */
  bill_to_address: ActionsAPI.AddressInput | null;

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
  ship_to_address: ActionsAPI.AddressInput | null;
}

/**
 * Geolocation sub-resource.
 */
export interface Geolocation {
  /**
   * Geolocation ID.
   */
  id: string;

  /**
   * Two-letter country code.
   */
  country: string;

  /**
   * City or locality.
   */
  locality: string | null;

  /**
   * Resource type identifier.
   */
  object: 'geolocation';

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
  page_info: EdiRunsAPI.PageInfo;
}

/**
 * PageInfo contains URL-based pagination metadata.
 */
export interface PageInfo {
  /**
   * Whether more results exist after this page.
   */
  has_next_page: boolean;

  /**
   * Whether results exist before this page.
   */
  has_prev_page: boolean;

  /**
   * URL to fetch the next page, `null` if no more pages.
   */
  next_page_url: string | null;

  /**
   * URL to fetch the previous page, `null` if on the first page.
   */
  previous_page_url: string | null;
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
  bill_to_address: LinesAPI.Address | null;

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
  ship_to_address: LinesAPI.Address | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * SupplierSummary is the lightweight supplier resource for list results.
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

/**
 * UpdateSupplierRequest is the request to update a supplier.
 */
export interface UpdateSupplierRequest {
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

export interface SupplierCreateParams {
  /**
   * Request to create an address.
   */
  bill_to_address: ActionsAPI.AddressInput | null;

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
  ship_to_address: ActionsAPI.AddressInput | null;
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

Suppliers.Materials = Materials;
Suppliers.Actions = Actions;

export declare namespace Suppliers {
  export {
    type Address as Address,
    type AddressInput as AddressInput,
    type CreateSupplierRequest as CreateSupplierRequest,
    type Geolocation as Geolocation,
    type ListSupplierSummary as ListSupplierSummary,
    type PageInfo as PageInfo,
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
    type Account as Account,
    type AccountBranding as AccountBranding,
    type AccountPortal as AccountPortal,
    type Attribute as Attribute,
    type CreateSupplierMaterialRequest as CreateSupplierMaterialRequest,
    type Item as Item,
    type ItemCategory as ItemCategory,
    type ListAttribute as ListAttribute,
    type ListProperty as ListProperty,
    type ListSupplierMaterial as ListSupplierMaterial,
    type ListUnitGroupUnit as ListUnitGroupUnit,
    type Material as Material,
    type Owner as Owner,
    type Property as Property,
    type Quantity as Quantity,
    type Rate as Rate,
    type SupplierMaterial as SupplierMaterial,
    type Unit as Unit,
    type UnitGroup as UnitGroup,
    type UnitGroupUnit as UnitGroupUnit,
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
