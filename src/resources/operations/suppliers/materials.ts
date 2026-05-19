// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as MaterialsAPI from '../../catalog/materials/materials';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage supplier material associations.
 */
export class Materials extends APIResource {
  /**
   * Creates a supplier material association.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.create(
   *     'example',
   *     {
   *       is_active: true,
   *       material_id: 'ml_01jm4r6700f8nwq3v5hx2d9ktp',
   *       supplier_part_number: 'SUP-PART-001',
   *     },
   *   );
   * ```
   */
  create(
    supplierID: string,
    body: MaterialCreateParams,
    options?: RequestOptions,
  ): APIPromise<SupplierMaterial> {
    return this._client.post(path`/v1/operations/suppliers/${supplierID}/materials`, { body, ...options });
  }

  /**
   * Returns a supplier material by ID.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.retrieve(
   *     'ml_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { supplier_id: 'example' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: MaterialRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SupplierMaterial> {
    const { supplier_id, ...query } = params;
    return this._client.get(path`/v1/operations/suppliers/${supplier_id}/materials/${id}`, {
      query,
      ...options,
    });
  }

  /**
   * Partially updates a supplier material.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.update(
   *     'ml_01jm4r6700f8nwq3v5hx2d9ktp',
   *     {
   *       supplier_id: 'example',
   *       supplier_part_number: 'SUP-PART-002',
   *     },
   *   );
   * ```
   */
  update(id: string, params: MaterialUpdateParams, options?: RequestOptions): APIPromise<SupplierMaterial> {
    const { supplier_id, ...body } = params;
    return this._client.patch(path`/v1/operations/suppliers/${supplier_id}/materials/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a paginated list of supplier materials.
   *
   * @example
   * ```ts
   * const materials =
   *   await client.operations.suppliers.materials.list(
   *     'example',
   *   );
   * ```
   */
  list(
    supplierID: string,
    query: MaterialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MaterialListResponse> {
    return this._client.get(path`/v1/operations/suppliers/${supplierID}/materials`, { query, ...options });
  }

  /**
   * Deletes a supplier material association.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.delete(
   *     'ml_01jm4r6700f8nwq3v5hx2d9ktp',
   *     { supplier_id: 'example' },
   *   );
   * ```
   */
  delete(id: string, params: MaterialDeleteParams, options?: RequestOptions): APIPromise<SupplierMaterial> {
    const { supplier_id } = params;
    return this._client.delete(path`/v1/operations/suppliers/${supplier_id}/materials/${id}`, options);
  }
}

/**
 * Supplier material resource.
 */
export interface SupplierMaterial {
  /**
   * Supplier material ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Material with order point and lead time.
   */
  material: MaterialsAPI.Material | null;

  /**
   * Resource type identifier.
   */
  object: 'supplier_material';

  /**
   * Whether this supplier material link is active.
   */
  status: 'active' | 'inactive';

  /**
   * Supplier description for this material.
   */
  supplier_description: string | null;

  /**
   * Supplier part number for this material.
   */
  supplier_part_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface MaterialListResponse {
  /**
   * Resources in this page.
   */
  data: Array<SupplierMaterial>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export interface MaterialCreateParams {
  /**
   * Active status.
   */
  is_active: boolean | null;

  /**
   * Material ID.
   */
  material_id: string;

  /**
   * Supplier part number for this material.
   */
  supplier_part_number: string;

  /**
   * Supplier description for this material.
   */
  supplier_description?: string;
}

export interface MaterialRetrieveParams {
  /**
   * Path param: Supplier ID.
   */
  supplier_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'material' | 'material.item'>;
}

export interface MaterialUpdateParams {
  /**
   * Path param: Supplier ID.
   */
  supplier_id: string;

  /**
   * Body param: Active status.
   */
  is_active?: boolean;

  /**
   * Body param: Supplier description for this material.
   */
  supplier_description?: string;

  /**
   * Body param: Supplier part number for this material.
   */
  supplier_part_number?: string;
}

export interface MaterialListParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'material' | 'material.item'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface MaterialDeleteParams {
  /**
   * Supplier ID.
   */
  supplier_id: string;
}

export declare namespace Materials {
  export {
    type SupplierMaterial as SupplierMaterial,
    type MaterialListResponse as MaterialListResponse,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
    type MaterialDeleteParams as MaterialDeleteParams,
  };
}
