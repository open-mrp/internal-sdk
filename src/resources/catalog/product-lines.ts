// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../ai/agents';
import * as ItemCategoriesAPI from './item-categories/item-categories';
import * as UnitGroupsAPI from './unit-groups/unit-groups';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * List and manage product lines.
 */
export class ProductLines extends APIResource {
  /**
   * Returns a product line by ID, including system-owned product lines accessible to
   * the account.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.retrieve(
   *     'pl_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ProductLineRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductLine> {
    return this._client.get(path`/v1/catalog/product-lines/${id}`, { query, ...options });
  }

  /**
   * Partially updates an account-owned product line. Default system product lines
   * cannot be updated.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.update('', {
   *     name: 'Updated Product Line',
   *   });
   * ```
   */
  update(
    id: string,
    params: ProductLineUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductLine> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/product-lines/${id}`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Deletes an account-owned product line. Default system product lines cannot be
   * deleted.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.delete(
   *     'pl_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductLineDeleteResponse> {
    return this._client.delete(path`/v1/catalog/product-lines/${id}`, options);
  }

  /**
   * Creates an account-owned product line.
   *
   * @example
   * ```ts
   * const productLine =
   *   await client.catalog.productLines.productLines({
   *     commission_policy: 'commission_exempt',
   *     freight_policy: 'billed_freight',
   *     name: 'Industrial Fasteners',
   *     unit_group_id: 'ug_01jm4r6700f8nwq3v5hx2d9ktp',
   *   });
   * ```
   */
  productLines(params: ProductLineProductLinesParams, options?: RequestOptions): APIPromise<ProductLine> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/product-lines', { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of product lines, including account-owned and system
   * product lines.
   *
   * @example
   * ```ts
   * const listProductLine =
   *   await client.catalog.productLines.retrieveProductLines();
   * ```
   */
  retrieveProductLines(
    query: ProductLineRetrieveProductLinesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListProductLine> {
    return this._client.get('/v1/catalog/product-lines', { query, ...options });
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ListProductLine {
  /**
   * Resources in this page.
   */
  data: Array<ProductLine>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

/**
 * Product line resource.
 */
export interface ProductLine {
  /**
   * Product line ID.
   */
  id: string;

  /**
   * Commission policy of products in this product line.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Description.
   */
  description: string | null;

  /**
   * Freight policy for all items in this product line.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Display name.
   */
  name: string;

  /**
   * Notes.
   */
  notes: string | null;

  /**
   * Resource type identifier.
   */
  object: 'product_line';

  /**
   * Owner describes the provenance of a resource.
   */
  owner: ItemCategoriesAPI.Owner | null;

  /**
   * UnitGroup is a unit group resource.
   */
  unit_group: UnitGroupsAPI.UnitGroup | null;

  /**
   * Last-updated timestamp.
   */
  updated_at: string;
}

export interface ProductLineDeleteResponse {}

export interface ProductLineRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;
}

export interface ProductLineUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;

  /**
   * Body param: Commission policy of products in this product line.
   */
  commission_policy?: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: Freight policy for all items in this product line.
   */
  freight_policy?: 'free_freight' | 'billed_freight';

  /**
   * Body param: Display name.
   */
  name?: string;

  /**
   * Body param: Unit group ID associated with this product line. This unit group
   * dictates the units that products in this product line may be purchased in.
   */
  unit_group_id?: string;
}

export interface ProductLineProductLinesParams {
  /**
   * Body param: Commission policy of products in this product line.
   */
  commission_policy: 'commission_applied' | 'commission_exempt';

  /**
   * Body param: Freight policy for all items in this product line.
   */
  freight_policy: 'free_freight' | 'billed_freight';

  /**
   * Body param: Display name.
   */
  name: string;

  /**
   * Body param: Unit group ID associated with this product line. This unit group
   * dictates the units that products in this product line may be purchased in.
   */
  unit_group_id: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;
}

export interface ProductLineRetrieveProductLinesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'owner' | 'owner.account' | 'unit_group'>;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace ProductLines {
  export {
    type ListProductLine as ListProductLine,
    type ProductLine as ProductLine,
    type ProductLineDeleteResponse as ProductLineDeleteResponse,
    type ProductLineRetrieveParams as ProductLineRetrieveParams,
    type ProductLineUpdateParams as ProductLineUpdateParams,
    type ProductLineProductLinesParams as ProductLineProductLinesParams,
    type ProductLineRetrieveProductLinesParams as ProductLineRetrieveProductLinesParams,
  };
}
