// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as ActionsAPI from './actions';
import { ActionExportParams, Actions } from './actions';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import * as SalesOrdersAPI from '../../sales/sales-orders/sales-orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * List and manage materials.
 */
export class Materials extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a material with the specified SKU and category.
   *
   * Inventory tracking for the new material starts at a zero on-hand quantity in the
   * category's base unit.
   *
   * This endpoint requires the permissions: `materials:create`, `customers:update`,
   * `suppliers:update`.
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
   * This endpoint requires the permissions: `materials:read`, `customers:read`,
   * `suppliers:read`.
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
   * Fields not provided retain their current values.
   *
   * This endpoint requires the permissions: `materials:update`, `customers:update`,
   * `suppliers:update`.
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
   * This endpoint requires the permissions: `materials:read`, `customers:read`,
   * `suppliers:read`.
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
   * Deletes a material.
   *
   * This is a soft delete: the material is marked deleted and no longer returned by
   * other endpoints, but the record is retained. Deleting an already-deleted
   * material returns an error.
   *
   * This endpoint requires the permissions: `materials:delete`, `customers:update`,
   * `suppliers:update`.
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
   * ID of the item category to place the material in.
   *
   * The category's unit group determines the base unit used for the material's rates
   * (`unit_value`, `unit_cost`, `burn_rate`).
   */
  category_id: string;

  /**
   * Stock keeping unit code for the material.
   *
   * Must be unique within the account; creating a material with a SKU already used
   * by another item fails with a conflict error.
   */
  sku: string;

  /**
   * IDs of existing attributes to link to the material at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Free-form description of the material.
   */
  description?: string;

  /**
   * A quantity, given as a decimal value and the unit it is measured in.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Free-form notes about the material.
   */
  notes?: string;

  /**
   * A quantity, given as a decimal value and the unit it is measured in.
   */
  order_point?: QuantityInputRequest;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_price?: SalesOrdersAPI.RateInput;
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
 * A material in the account's catalog: a raw material or component consumed in
 * production.
 *
 * Material-level data such as the SKU, description, category, pricing, and
 * attributes lives on the underlying `item`; the material record adds the
 * reordering fields `order_point` and `lead_time`.
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
 * A quantity, given as a decimal value and the unit it is measured in.
 */
export interface QuantityInputRequest {
  /**
   * ID of the unit the value is expressed in.
   */
  unit_id: string;

  /**
   * Decimal value of the quantity.
   */
  value: string;
}

/**
 * Request to update a material.
 */
export interface UpdateMaterialRequest {
  /**
   * New description for the material.
   */
  description?: string;

  /**
   * A quantity, given as a decimal value and the unit it is measured in.
   */
  lead_time?: QuantityInputRequest;

  /**
   * New notes for the material.
   */
  notes?: string;

  /**
   * A quantity, given as a decimal value and the unit it is measured in.
   */
  order_point?: QuantityInputRequest;

  /**
   * New stock keeping unit code for the material.
   *
   * Must remain unique within the account; a conflict error is returned if another
   * item already uses it.
   */
  sku?: string;

  /**
   * A rate value with its numerator and denominator units, used in create and update
   * requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;
}

export interface MaterialCreateParams {
  /**
   * Body param: ID of the item category to place the material in.
   *
   * The category's unit group determines the base unit used for the material's rates
   * (`unit_value`, `unit_cost`, `burn_rate`).
   */
  category_id: string;

  /**
   * Body param: Stock keeping unit code for the material.
   *
   * Must be unique within the account; creating a material with a SKU already used
   * by another item fails with a conflict error.
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
   * Body param: IDs of existing attributes to link to the material at creation time.
   */
  attribute_ids?: Array<string>;

  /**
   * Body param: Free-form description of the material.
   */
  description?: string;

  /**
   * Body param: A quantity, given as a decimal value and the unit it is measured in.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Body param: Free-form notes about the material.
   */
  notes?: string;

  /**
   * Body param: A quantity, given as a decimal value and the unit it is measured in.
   */
  order_point?: QuantityInputRequest;

  /**
   * Body param: A rate value with its numerator and denominator units, used in
   * create and update requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * Body param: A rate value with its numerator and denominator units, used in
   * create and update requests.
   */
  unit_price?: SalesOrdersAPI.RateInput;
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
   * Body param: New description for the material.
   */
  description?: string;

  /**
   * Body param: A quantity, given as a decimal value and the unit it is measured in.
   */
  lead_time?: QuantityInputRequest;

  /**
   * Body param: New notes for the material.
   */
  notes?: string;

  /**
   * Body param: A quantity, given as a decimal value and the unit it is measured in.
   */
  order_point?: QuantityInputRequest;

  /**
   * Body param: New stock keeping unit code for the material.
   *
   * Must remain unique within the account; a conflict error is returned if another
   * item already uses it.
   */
  sku?: string;

  /**
   * Body param: A rate value with its numerator and denominator units, used in
   * create and update requests.
   */
  unit_cost?: SalesOrdersAPI.RateInput;
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
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
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
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
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
