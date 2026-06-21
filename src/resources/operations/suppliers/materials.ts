// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as MaterialsAPI from '../../catalog/materials/materials';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage supplier material associations.
 */
export class Materials extends APIResource {
  /**
   * Links a material to a supplier, recording the supplier's part number and
   * description for it.
   *
   * This endpoint requires the permission: `suppliers:create`.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.create(
   *     'example',
   *     {
   *       material_id: 'ml_014613b8f7959a091d8cc0cef4',
   *       supplier_part_number: 'SUP-PART-001',
   *       is_active: true,
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
   * Returns the supplier material link for the given supplier and material.
   *
   * This endpoint requires the permission: `suppliers:read`.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.retrieve(
   *     'ml_014613b8f7959a091d8cc0cef4',
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
   * Fields not provided retain their current values.
   *
   * This endpoint requires the permission: `suppliers:update`.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.update(
   *     'ml_014613b8f7959a091d8cc0cef4',
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
   * Returns a paginated list of materials linked to the given supplier.
   *
   * This endpoint requires the permission: `suppliers:read`.
   *
   * @example
   * ```ts
   * const listSupplierMaterial =
   *   await client.operations.suppliers.materials.list(
   *     'example',
   *   );
   * ```
   */
  list(
    supplierID: string,
    query: MaterialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListSupplierMaterial> {
    return this._client.get(path`/v1/operations/suppliers/${supplierID}/materials`, { query, ...options });
  }

  /**
   * Deletes a supplier material link.
   *
   * Removing the link does not affect the underlying material or supplier.
   *
   * This endpoint requires the permission: `suppliers:update`.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.delete(
   *     'ml_014613b8f7959a091d8cc0cef4',
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
 * Request to create a supplier material.
 */
export interface CreateSupplierMaterialRequest {
  /**
   * ID of the material the supplier provides.
   *
   * A material can be linked to a given supplier at most once; creating a duplicate
   * link fails with a conflict error.
   */
  material_id: string;

  /**
   * The part number the supplier uses for this material in their own catalog.
   */
  supplier_part_number: string;

  /**
   * Whether the supplier is available to source this material.
   *
   * When omitted, the link is created active so the supplier is immediately usable
   * as a source.
   */
  is_active?: boolean;

  /**
   * The supplier's own description of this material.
   */
  supplier_description?: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListSupplierMaterial {
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
  page_info: APIKeysAPI.PageInfo;
}

/**
 * Links a material to a supplier that provides it, carrying the supplier's own
 * part number and description for the material.
 *
 * Each material can be linked to a given supplier at most once.
 */
export interface SupplierMaterial {
  /**
   * ID of the linked material, which also identifies this supplier material.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A material in the account's catalog: a raw material or component consumed in
   * production.
   *
   * Material-level data such as the SKU, description, category, pricing, and
   * attributes lives on the underlying `item`; the material record adds the
   * reordering fields `order_point` and `lead_time`.
   */
  material: MaterialsAPI.Material | null;

  /**
   * Resource type identifier.
   */
  object: 'supplier_material';

  /**
   * Whether this supplier is currently available as a source for the material.
   */
  status: 'active' | 'inactive';

  /**
   * The supplier's own description of this material.
   */
  supplier_description: string | null;

  /**
   * The part number the supplier uses for this material in their own catalog.
   */
  supplier_part_number: string;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to update a supplier material.
 */
export interface UpdateSupplierMaterialRequest {
  /**
   * Whether the supplier is available to source this material.
   */
  is_active?: boolean;

  /**
   * New supplier description of this material.
   */
  supplier_description?: string;

  /**
   * New part number the supplier uses for this material.
   */
  supplier_part_number?: string;
}

export interface MaterialCreateParams {
  /**
   * ID of the material the supplier provides.
   *
   * A material can be linked to a given supplier at most once; creating a duplicate
   * link fails with a conflict error.
   */
  material_id: string;

  /**
   * The part number the supplier uses for this material in their own catalog.
   */
  supplier_part_number: string;

  /**
   * Whether the supplier is available to source this material.
   *
   * When omitted, the link is created active so the supplier is immediately usable
   * as a source.
   */
  is_active?: boolean;

  /**
   * The supplier's own description of this material.
   */
  supplier_description?: string;
}

export interface MaterialRetrieveParams {
  /**
   * Path param: ID of the supplier the material is linked to.
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
   * Path param: ID of the supplier the material is linked to.
   */
  supplier_id: string;

  /**
   * Body param: Whether the supplier is available to source this material.
   */
  is_active?: boolean;

  /**
   * Body param: New supplier description of this material.
   */
  supplier_description?: string;

  /**
   * Body param: New part number the supplier uses for this material.
   */
  supplier_part_number?: string;
}

export interface MaterialListParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'material' | 'material.item'>;

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
}

export interface MaterialDeleteParams {
  /**
   * ID of the supplier the material is linked to.
   */
  supplier_id: string;
}

export declare namespace Materials {
  export {
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
}
