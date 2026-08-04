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
   *       material_id: 'ml_ow202v78slbl',
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
   *     'ml_ow202v78slbl',
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
   *     'ml_ow202v78slbl',
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
   * Returns a paginated list of materials linked to the given supplier, newest
   * first.
   *
   * Both active and inactive links are returned. The `q` search term matches the
   * supplier part number and description as well as the underlying item's SKU and
   * description.
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
   * Returns the link as it looked immediately before deletion. Removing the link
   * does not affect the underlying material or supplier.
   *
   * This endpoint requires the permission: `suppliers:update`.
   *
   * @example
   * ```ts
   * const supplierMaterial =
   *   await client.operations.suppliers.materials.delete(
   *     'ml_ow202v78slbl',
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
   * Whether this supplier is currently one you would source the material from.
   *
   * Links are created active unless this is explicitly set to `false`.
   */
  is_active?: boolean;

  /**
   * The supplier's own description of this material.
   */
  supplier_description?: string;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * Whether this supplier is currently one you would source the material from.
   *
   * Inactive links are kept for reference and are still returned when listing or
   * retrieving supplier materials; the status is a record-keeping flag and does not
   * by itself prevent purchasing the material from this supplier.
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
   * Whether this supplier is currently one you would source the material from.
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
   * Whether this supplier is currently one you would source the material from.
   *
   * Links are created active unless this is explicitly set to `false`.
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
   * Body param: Whether this supplier is currently one you would source the material
   * from.
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
