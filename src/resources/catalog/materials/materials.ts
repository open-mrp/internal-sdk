// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../ai/agents';
import * as ItemsAPI from '../items/items';
import * as ActionsAPI from './actions';
import { ActionRetrieveExportParams, ActionRetrieveExportResponse, Actions } from './actions';
import * as BatchesAPI from '../../operations/batches/batches';
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
   *   attribute_ids: ['string'],
   *   category_id: 'ic_01jm4r6700f8nwq3v5hx2d9ktp',
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
   *   'it_01jm4r6700f8nwq3v5hx2d9ktp',
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
   * const material = await client.catalog.materials.update('', {
   *   sku: 'MAT-001-UPDATED',
   * });
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
   * const materials = await client.catalog.materials.list();
   * ```
   */
  list(
    query: MaterialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MaterialListResponse> {
    return this._client.get('/v1/catalog/materials', { query, ...options });
  }

  /**
   * Deletes a material by ID.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.delete(
   *   'it_01jm4r6700f8nwq3v5hx2d9ktp',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Material> {
    return this._client.delete(path`/v1/catalog/materials/${id}`, options);
  }
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
  item: ItemsAPI.Item | null;

  /**
   * Value with an associated unit.
   */
  lead_time: BatchesAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'material';

  /**
   * Value with an associated unit.
   */
  order_point: BatchesAPI.Quantity | null;

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

export interface RateInput {
  /**
   * Denominator unit ID.
   */
  denominator_unit_id: string;

  /**
   * Numerator unit ID.
   */
  numerator_unit_id: string;

  /**
   * Decimal value of the rate.
   */
  value: string;
}

/**
 * List represents a paginated list of resources.
 */
export interface MaterialListResponse {
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
  page_info: AgentsAPI.PageInfo;
}

export interface MaterialCreateParams {
  /**
   * Body param: Attribute IDs to connect to the material at creation time.
   */
  attribute_ids: Array<string>;

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
   * Body param: Initial burn rate (waste / scrap). No currency requirement.
   */
  burn_rate?: RateInput | null;

  /**
   * Body param: Description.
   */
  description?: string | null;

  /**
   * Body param: QuantityInputRequest is a quantity value and unit.
   */
  lead_time?: QuantityInputRequest | null;

  /**
   * Body param: Notes.
   */
  notes?: string | null;

  /**
   * Body param: QuantityInputRequest is a quantity value and unit.
   */
  order_point?: QuantityInputRequest | null;

  /**
   * Body param: Initial unit cost. Same currency rule as unit_price.
   */
  unit_cost?: RateInput | null;

  /**
   * Body param: Initial unit price. When set, numerator must be a currency unit and
   * denominator must not be.
   */
  unit_price?: RateInput | null;
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
   * Body param: Updated unit cost. Same currency rule as on create.
   */
  unit_cost?: RateInput | null;
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
    type Material as Material,
    type QuantityInputRequest as QuantityInputRequest,
    type RateInput as RateInput,
    type MaterialListResponse as MaterialListResponse,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
  };

  export {
    Actions as Actions,
    type ActionRetrieveExportResponse as ActionRetrieveExportResponse,
    type ActionRetrieveExportParams as ActionRetrieveExportParams,
  };
}
