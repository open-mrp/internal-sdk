// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionExportParams, Actions } from './actions';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as LinesAPI from '../../sales/sales-orders/lines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage materials.
 */
export class Materials extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a material.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.create({
   *   category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   sku: 'MAT-001',
   * });
   * ```
   */
  create(params: MaterialCreateParams, options?: RequestOptions): APIPromise<Material> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/materials', { query: { include }, body, ...options });
  }

  /**
   * Returns a material by ID.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.retrieve(
   *   'ml_014613b8f7959a091d8cc0cef4',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: MaterialRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Material> {
    return this._client.get(path`/v1/catalog/materials/${id}`, { query, ...options });
  }

  /**
   * Partially updates a material.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.update(
   *   'ml_014613b8f7959a091d8cc0cef4',
   *   { sku: 'MAT-001-UPDATED' },
   * );
   * ```
   */
  update(
    id: string,
    params: MaterialUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Material> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/materials/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of materials.
   *
   * @example
   * ```ts
   * const listMaterial = await client.catalog.materials.list();
   * ```
   */
  list(
    query: MaterialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListMaterial> {
    return this._client.get('/v1/catalog/materials', { query, ...options });
  }

  /**
   * Deletes a material by ID.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.delete(
   *   'ml_014613b8f7959a091d8cc0cef4',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Material> {
    return this._client.delete(path`/v1/catalog/materials/${id}`, options);
  }
}

/**
 * Request to create a material.
 */
export interface CreateMaterialRequest {
  /**
   * Category ID.
   */
  category_id: string;

  /**
   * SKU code.
   */
  sku: string;

  /**
   * Attribute IDs to connect to the material at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Description.
   */
  description?: string;

  /**
   * QuantityInputRequest is a quantity value and unit.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Notes.
   */
  notes?: string;

  /**
   * QuantityInputRequest is a quantity value and unit.
   */
  order_point?: QuantityInputRequest;

  /**
   * RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: LinesAPI.RateInput;

  /**
   * RateInput represents the input for creating or updating a rate.
   */
  unit_price?: LinesAPI.RateInput;
}

/**
 * List represents a paginated list of resources.
 */
export interface ListMaterial {
  /**
   * Resources in this page.
   */
  data: Array<Material>;

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
 * Material with order point and lead time.
 */
export interface Material {
  /**
   * Material ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * Item is an inventory item (product, material, or part).
   */
  item: AccountUsersAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  lead_time: AccountUsersAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'material';

  /**
   * Value with an associated unit.
   */
  order_point: AccountUsersAPI.Quantity | null;

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * QuantityInputRequest is a quantity value and unit.
 */
export interface QuantityInputRequest {
  /**
   * Unit ID.
   */
  unit_id: string;

  /**
   * Quantity value.
   */
  value: string;
}

/**
 * Request to update a material.
 */
export interface UpdateMaterialRequest {
  /**
   * Description.
   */
  description?: string;

  /**
   * QuantityInputRequest is a quantity value and unit.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Notes.
   */
  notes?: string;

  /**
   * QuantityInputRequest is a quantity value and unit.
   */
  order_point?: QuantityInputRequest;

  /**
   * SKU code.
   */
  sku?: string;

  /**
   * RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: LinesAPI.RateInput;
}

export interface MaterialCreateParams {
  /**
   * Body param: Category ID.
   */
  category_id: string;

  /**
   * Body param: SKU code.
   */
  sku: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;

  /**
   * Body param: Attribute IDs to connect to the material at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Body param: Description.
   */
  description?: string;

  /**
   * Body param: QuantityInputRequest is a quantity value and unit.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Body param: Notes.
   */
  notes?: string;

  /**
   * Body param: QuantityInputRequest is a quantity value and unit.
   */
  order_point?: QuantityInputRequest;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: LinesAPI.RateInput;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_price?: LinesAPI.RateInput;
}

export interface MaterialRetrieveParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;
}

export interface MaterialUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;

  /**
   * Body param: Description.
   */
  description?: string;

  /**
   * Body param: QuantityInputRequest is a quantity value and unit.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Body param: Notes.
   */
  notes?: string;

  /**
   * Body param: QuantityInputRequest is a quantity value and unit.
   */
  order_point?: QuantityInputRequest;

  /**
   * Body param: SKU code.
   */
  sku?: string;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: LinesAPI.RateInput;
}

export interface MaterialListParams {
  /**
   * Filter by attribute IDs.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter by category IDs.
   */
  category_ids?: Array<string>;

  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Filter to materials created on or before this date.
   */
  end_date?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'item'
    | 'item.category'
    | 'item.category.properties'
    | 'item.category.unit_group'
    | 'item.unit_value'
    | 'item.unit_cost'
    | 'item.burn_rate'
    | 'item.attributes'
  >;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;

  /**
   * Filter to materials created on or after this date.
   */
  start_date?: string;
}

Materials.Actions = Actions;

export declare namespace Materials {
  export {
    type CreateMaterialRequest as CreateMaterialRequest,
    type ListMaterial as ListMaterial,
    type Material as Material,
    type QuantityInputRequest as QuantityInputRequest,
    type UpdateMaterialRequest as UpdateMaterialRequest,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
  };

  export { Actions as Actions, type ActionExportParams as ActionExportParams };
}
