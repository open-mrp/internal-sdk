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
   * Creates a material together with the catalog item that carries its SKU,
   * description, category, pricing, and attributes.
   *
   * Inventory tracking for the new material starts at a zero on-hand quantity in the
   * category's base unit. The item's consumption rate (`burn_rate`) also starts at
   * zero and cannot be supplied here — it is derived from recorded consumption as
   * production happens.
   *
   * This endpoint requires the permissions: `materials:create`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.create({
   *   category_id: 'ic_d06g9c6yc9ck',
   *   sku: 'MAT-001',
   *   attribute_ids: ['at_rf1w295jt5ia'],
   *   description:
   *     'Cold-rolled 304 stainless steel sheet, 1.5mm',
   *   lead_time: { value: '7.00', unit_id: 'un_82bd37dae5po' },
   *   notes:
   *     'Store flat in a dry area to avoid surface oxidation.',
   *   order_point: {
   *     value: '100.00',
   *     unit_id: 'un_82bd37dae5po',
   *   },
   *   unit_cost: {
   *     value: '8.25',
   *     numerator_unit_id: 'un_82bd37dae5po',
   *     denominator_unit_id: 'un_82bd37dae5po',
   *   },
   *   unit_price: {
   *     value: '12.50',
   *     numerator_unit_id: 'un_82bd37dae5po',
   *     denominator_unit_id: 'un_82bd37dae5po',
   *   },
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
   *   'ml_ow202v78slbl',
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
   * Fields not provided retain their current values. Only the cost side of pricing
   * can be changed here; the selling price set at creation is not editable through
   * this endpoint. Use the Change Item Category endpoint to move the material to a
   * different category.
   *
   * This endpoint requires the permissions: `materials:update`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.update(
   *   'ml_ow202v78slbl',
   *   {
   *     description:
   *       'Cold-rolled 304 stainless steel sheet, 2.0mm',
   *     lead_time: {
   *       value: '10.00',
   *       unit_id: 'un_82bd37dae5po',
   *     },
   *     notes: 'Reorder point raised after Q2 demand spike.',
   *     order_point: {
   *       value: '150.00',
   *       unit_id: 'un_82bd37dae5po',
   *     },
   *     sku: 'MAT-001-UPDATED',
   *     unit_cost: {
   *       value: '9.10',
   *       numerator_unit_id: 'un_82bd37dae5po',
   *       denominator_unit_id: 'un_82bd37dae5po',
   *     },
   *   },
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
   * Returns a paginated list of materials, newest first.
   *
   * `q` matches against SKU and description, with closer SKU matches ranked first.
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
   * This is a soft delete: the material and the catalog item behind it stop being
   * returned by other endpoints, but the records are retained. The response is the
   * material as it stood immediately before deletion, and deleting an
   * already-deleted material returns an error.
   *
   * This endpoint requires the permissions: `materials:delete`, `customers:update`,
   * `suppliers:update`.
   *
   * @example
   * ```ts
   * const material = await client.catalog.materials.delete(
   *   'ml_ow202v78slbl',
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
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_price?: SalesOrdersAPI.RateInput;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
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
   * An entry in your catalog: something you sell, consume, or build with.
   */
  item: AccountUsersAPI.Item | null;

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
   */
  lead_time: AccountUsersAPI.Quantity | null;

  /**
   * Resource type identifier.
   */
  object: 'material';

  /**
   * A measured amount: a numeric value together with the unit it is expressed in.
   *
   * Quantities are shared building blocks rather than standalone records — other
   * resources point at them to report stock levels, ordered and packed amounts,
   * money, weights, and durations.
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
   * A value expressed as a ratio of two units, supplied on create and update
   * requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
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
   * Body param: A value expressed as a ratio of two units, supplied on create and
   * update requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: SalesOrdersAPI.RateInput;

  /**
   * Body param: A value expressed as a ratio of two units, supplied on create and
   * update requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
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
   * Body param: A value expressed as a ratio of two units, supplied on create and
   * update requests.
   *
   * A unit price, for example, has a currency as its numerator unit and the unit the
   * product is bought or sold by as its denominator.
   */
  unit_cost?: SalesOrdersAPI.RateInput;
}

export interface MaterialListParams {
  /**
   * Filter to materials carrying any of these attributes.
   */
  attribute_ids?: Array<string>;

  /**
   * Filter to materials in any of these categories.
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
  ends_at?: string;

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
  starts_at?: string;
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
