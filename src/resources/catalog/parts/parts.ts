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
 * List and manage parts.
 */
export class Parts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a part with the specified SKU and category.
   *
   * @example
   * ```ts
   * const part = await client.catalog.parts.create({
   *   category_id: 'ic_01ae7bd7bfd21ca0ab81e1357e',
   *   sku: 'BRG-6204-2RS',
   *   description: 'Deep groove ball bearing, 20x47x14mm',
   * });
   * ```
   */
  create(params: PartCreateParams, options?: RequestOptions): APIPromise<Part> {
    const { include, ...body } = params;
    return this._client.post('/v1/catalog/parts', { query: { include }, body, ...options });
  }

  /**
   * Returns a part by ID.
   *
   * @example
   * ```ts
   * const part = await client.catalog.parts.retrieve(
   *   'pt_018d7bab53e864351f4c693a21',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PartRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Part> {
    return this._client.get(path`/v1/catalog/parts/${id}`, { query, ...options });
  }

  /**
   * Partially updates a part. Fields not provided retain their current values.
   *
   * @example
   * ```ts
   * const part = await client.catalog.parts.update(
   *   'pt_018d7bab53e864351f4c693a21',
   *   {
   *     description: 'Deep groove ball bearing, 20x47x14mm',
   *     sku: 'BRG-6204-2RS',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: PartUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Part> {
    const { include, ...body } = params ?? {};
    return this._client.patch(path`/v1/catalog/parts/${id}`, { query: { include }, body, ...options });
  }

  /**
   * Returns a paginated list of parts for the current account.
   *
   * @example
   * ```ts
   * const listPart = await client.catalog.parts.list();
   * ```
   */
  list(query: PartListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListPart> {
    return this._client.get('/v1/catalog/parts', { query, ...options });
  }

  /**
   * Deletes a part. Sets the deleted_at timestamp rather than removing the record.
   *
   * @example
   * ```ts
   * const part = await client.catalog.parts.delete(
   *   'pt_018d7bab53e864351f4c693a21',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<Part> {
    return this._client.delete(path`/v1/catalog/parts/${id}`, options);
  }
}

/**
 * Request to create a part.
 */
export interface CreatePartRequest {
  /**
   * Category ID.
   */
  category_id: string;

  /**
   * SKU.
   */
  sku: string;

  /**
   * Attribute IDs to connect to the part at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Description.
   */
  description?: string;

  /**
   * Notes.
   */
  notes?: string;

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
export interface ListPart {
  /**
   * Resources in this page.
   */
  data: Array<Part>;

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
 * Part resource.
 */
export interface Part {
  /**
   * Part ID.
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
   * Resource type identifier.
   */
  object: 'part';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * Request to partially update a part.
 */
export interface UpdatePartRequest {
  /**
   * Description.
   */
  description?: string | null;

  /**
   * Notes.
   */
  notes?: string | null;

  /**
   * SKU.
   */
  sku?: string;
}

export interface PartCreateParams {
  /**
   * Body param: Category ID.
   */
  category_id: string;

  /**
   * Body param: SKU.
   */
  sku: string;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'item' | 'item.category' | 'item.unit_value' | 'item.unit_cost' | 'item.burn_rate' | 'item.attributes'
  >;

  /**
   * Body param: Attribute IDs to connect to the part at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Body param: Description.
   */
  description?: string;

  /**
   * Body param: Notes.
   */
  notes?: string;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_cost?: LinesAPI.RateInput;

  /**
   * Body param: RateInput represents the input for creating or updating a rate.
   */
  unit_price?: LinesAPI.RateInput;
}

export interface PartRetrieveParams {
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

export interface PartUpdateParams {
  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<
    'item' | 'item.category' | 'item.unit_value' | 'item.unit_cost' | 'item.burn_rate' | 'item.attributes'
  >;

  /**
   * Body param: Description.
   */
  description?: string | null;

  /**
   * Body param: Notes.
   */
  notes?: string | null;

  /**
   * Body param: SKU.
   */
  sku?: string;
}

export interface PartListParams {
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
   * Filter parts created on or before this date.
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
   * Filter parts created on or after this date.
   */
  start_date?: string;
}

Parts.Actions = Actions;

export declare namespace Parts {
  export {
    type CreatePartRequest as CreatePartRequest,
    type ListPart as ListPart,
    type Part as Part,
    type UpdatePartRequest as UpdatePartRequest,
    type PartCreateParams as PartCreateParams,
    type PartRetrieveParams as PartRetrieveParams,
    type PartUpdateParams as PartUpdateParams,
    type PartListParams as PartListParams,
  };

  export { Actions as Actions, type ActionExportParams as ActionExportParams };
}
